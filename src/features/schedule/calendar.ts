import type { ScheduleAvailability, ScheduleDay } from "./generateSchedule";
import { parseDailyTime } from "./time";
import { completedMinutes, type CompletionInterval } from "@/features/progress/ranges";

const DAY_MS = 86_400_000;

/** Date-only arithmetic uses UTC internally; browser dates are read in local time. */
function dateNumber(value: string): number {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
  const number = Date.parse(`${value}T00:00:00Z`);
  return Number.isFinite(number) && new Date(number).toISOString().slice(0, 10) === value
    ? number
    : NaN;
}

export function localDate(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function isFutureExamDate(value: string | null, today = localDate()): boolean {
  return (
    typeof value === "string" &&
    Number.isFinite(dateNumber(value)) &&
    dateNumber(value) > dateNumber(today)
  );
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(dateNumber(value));
}

export function scheduleDayOffset(anchor: string, today: string): number {
  return Math.max(0, Math.round((dateNumber(today) - dateNumber(anchor)) / DAY_MS));
}

/** Count work in the supplied record using local completion dates. */
export function studiedMinutesOnDate(
  record: Record<string, CompletionInterval[]>,
  today: string,
): number {
  return Object.values(record).reduce((total, intervals) => {
    const onDate = intervals.filter((interval) => {
      const timestamp = new Date(interval.completedAt);
      return Number.isFinite(timestamp.getTime()) && localDate(timestamp) === today;
    });
    const end = Math.max(0, ...onDate.map((interval) => interval.endMinute));
    return total + (end > 0 ? completedMinutes(onDate, 0, end) : 0);
  }, 0);
}

export type DatedScheduleDay = ScheduleDay & { date: string; afterDeadline: boolean };

/** Keeps overflow visible: a deadline never increases capacity or deletes content. */
export function dateSchedule(
  days: ScheduleDay[],
  startDate: string,
  examDate: string,
  weeklyDays: number | null,
  dailyTime: string | null,
  availability: ScheduleAvailability = {},
) {
  const start = dateNumber(startDate);
  const exam = dateNumber(examDate);
  if (!Number.isFinite(start) || !Number.isFinite(exam)) {
    throw new RangeError("Informe uma data de prova válida no perfil.");
  }
  const daysPerWeek =
    typeof weeklyDays === "number" && Number.isFinite(weeklyDays)
      ? Math.min(7, Math.max(1, Math.trunc(weeklyDays)))
      : 1;
  const calendarDays = Math.max(0, Math.round((exam - start) / DAY_MS));
  const offset = Math.max(0, Math.trunc(availability.dayOffset ?? 0)) % 7;
  let partialStudyDays = 0;
  for (let index = 0; index < calendarDays % 7; index++) {
    if ((offset + index) % 7 < daysPerWeek) partialStudyDays++;
  }
  const studyDays = Math.floor(calendarDays / 7) * daysPerWeek + partialStudyDays;
  const capacity = parseDailyTime(dailyTime);
  const spentToday =
    calendarDays > 0 && offset < daysPerWeek
      ? Math.min(capacity, Math.max(0, availability.studiedTodayMinutes ?? 0))
      : 0;
  const availableMinutes = studyDays * capacity - spentToday;
  const dated: DatedScheduleDay[] = days.map((day, index) => ({
    ...day,
    date: new Date(start + index * DAY_MS).toISOString().slice(0, 10),
    afterDeadline: start + index * DAY_MS >= exam,
  }));
  const remainingMinutes = days.reduce((total, day) => total + day.plannedMinutes, 0);
  return {
    days: dated,
    remainingMinutes,
    availableMinutes,
    overflowMinutes: Math.max(0, remainingMinutes - availableMinutes),
  };
}

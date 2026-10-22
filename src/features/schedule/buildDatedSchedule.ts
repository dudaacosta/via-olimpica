import type { OlympiadContent } from "@/data/olimpiadas";
import type { CompletionInterval } from "@/features/progress/ranges";
import { generateSchedule } from "./generateSchedule";
import { dateSchedule, scheduleDayOffset, studiedMinutesOnDate } from "./calendar";

export function buildDatedSchedule(
  plan: OlympiadContent,
  preferences: {
    weeklyDays: number | null;
    dailyTime: string | null;
    examDate: string;
    planStartDate: string | null;
  },
  completedByContent: Record<string, CompletionInterval[]>,
  today: string,
) {
  // Availability belongs to the selected olympiad/grade, just like its profile
  // and progress indicators. Other saved plans must not block today's sessions.
  const contents = new Map(
    generateSchedule(plan, 7, "3 horas")
      .flatMap((day) => day.sessions)
      .map((session) => [session.contentKey, session.totalContentMinutes]),
  );
  const activeProgress = Object.fromEntries(
    [...contents].map(([key, totalMinutes]) => [
      key,
      (completedByContent[key] ?? [])
        .map((interval) => ({
          ...interval,
          startMinute: Math.max(0, interval.startMinute),
          endMinute: Math.min(totalMinutes, interval.endMinute),
        }))
        .filter((interval) => interval.endMinute > interval.startMinute),
    ]),
  );
  const availability = {
    dayOffset: scheduleDayOffset(preferences.planStartDate ?? today, today),
    studiedTodayMinutes: studiedMinutesOnDate(activeProgress, today),
  };
  const pending = generateSchedule(
    plan,
    preferences.weeklyDays,
    preferences.dailyTime,
    activeProgress,
    availability,
  );
  return dateSchedule(
    pending,
    today,
    preferences.examDate,
    preferences.weeklyDays,
    preferences.dailyTime,
    availability,
  );
}

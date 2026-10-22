import type { OlympiadContent } from "@/data/olimpiadas";
import { buildDatedSchedule } from "@/features/schedule/buildDatedSchedule";
import { localDate } from "@/features/schedule/calendar";
import { isRangeCompleted, sanitizeIntervals, type CompletionInterval } from "./ranges";

type Preferences = Parameters<typeof buildDatedSchedule>[1];
const DAY_MS = 86_400_000;

/** Reconstruct the plan at the beginning of its seven-day cycle, so finishing a
 * session cannot erase that week's target. No extra progress/snapshot storage. */
export function getWeeklyGoal(
  plan: OlympiadContent,
  preferences: Preferences,
  record: Record<string, CompletionInterval[]>,
  today: string,
) {
  const anchor =
    preferences.planStartDate && preferences.planStartDate <= today
      ? preferences.planStartDate
      : today;
  const anchorTime = Date.parse(`${anchor}T00:00:00Z`);
  const todayTime = Date.parse(`${today}T00:00:00Z`);
  const weekIndex = Math.floor((todayTime - anchorTime) / DAY_MS / 7);
  const startTime = anchorTime + weekIndex * 7 * DAY_MS;
  const startDate = new Date(startTime).toISOString().slice(0, 10);
  const endDate = new Date(startTime + 6 * DAY_MS).toISOString().slice(0, 10);
  const beforeWeek = Object.fromEntries(
    Object.entries(record).map(([key, intervals]) => [
      key,
      sanitizeIntervals(intervals).filter((interval) => {
        const date = new Date(interval.completedAt);
        return !Number.isFinite(date.getTime()) || localDate(date) < startDate;
      }),
    ]),
  );
  const schedule = buildDatedSchedule(plan, preferences, beforeWeek, startDate);
  const byContent = new Map<string, { lastDate: string; totalMinutes: number; inWeek: boolean }>();
  for (const day of schedule.days) {
    for (const session of day.sessions) {
      const previous = byContent.get(session.contentKey);
      byContent.set(session.contentKey, {
        lastDate: day.date,
        totalMinutes: session.totalContentMinutes,
        inWeek: !!previous?.inWeek || (day.date <= endDate && !day.afterDeadline),
      });
    }
  }
  // Only planned finishes are full-content goals. Carry-over fragments remain
  // visible separately, without promising an impossible full completion.
  const inWeek = [...byContent.entries()].filter(([, content]) => content.inWeek);
  const finishable = inWeek.filter(
    ([, content]) => content.lastDate <= endDate && content.lastDate < preferences.examDate,
  );
  const completedContents = finishable.filter(([key, content]) =>
    isRangeCompleted(record[key], 0, content.totalMinutes),
  ).length;
  return {
    startDate,
    endDate,
    week: weekIndex + 1,
    plannedContents: finishable.length,
    completedContents,
    continuingContents: inWeek.length - finishable.length,
    percentage:
      finishable.length > 0 ? Math.floor((completedContents / finishable.length) * 100) : 0,
  };
}

export type WeeklyGoal = ReturnType<typeof getWeeklyGoal>;

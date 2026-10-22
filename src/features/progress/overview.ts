import type { OlympiadContent } from "@/data/olimpiadas";
import { generateSchedule } from "@/features/schedule/generateSchedule";
import { localDate } from "@/features/schedule/calendar";
import { completedMinutes, sanitizeIntervals, type CompletionInterval } from "./ranges";

/** Summarize unique content intervals, independently of how sessions are divided. */
export function summarizeProgress(
  plan: OlympiadContent,
  record: Record<string, CompletionInterval[]>,
  today: string,
) {
  const monday = new Date(`${today}T00:00:00Z`);
  monday.setUTCDate(monday.getUTCDate() - ((monday.getUTCDay() + 6) % 7));
  const weekStart = monday.toISOString().slice(0, 10);
  const unique = new Map(
    generateSchedule(plan, 7, "3 horas")
      .flatMap((day) => day.sessions)
      .map((session) => [session.contentKey, session]),
  );
  let weekMinutes = 0;
  let todayMinutes = 0;
  const contents = [...unique.values()].map((content) => {
    const intervals = sanitizeIntervals(record[content.contentKey]);
    const done = completedMinutes(intervals, 0, content.totalContentMinutes);
    const thisWeek = intervals.filter((interval) => {
      const date = new Date(interval.completedAt);
      if (!Number.isFinite(date.getTime())) return false;
      const day = localDate(date);
      return day >= weekStart && day <= today;
    });
    weekMinutes += completedMinutes(thisWeek, 0, content.totalContentMinutes);
    todayMinutes += completedMinutes(
      thisWeek.filter((interval) => localDate(new Date(interval.completedAt)) === today),
      0,
      content.totalContentMinutes,
    );
    return {
      contentKey: content.contentKey,
      title: content.title,
      areaName: content.areaName,
      totalMinutes: content.totalContentMinutes,
      completedMinutes: done,
      status:
        done === content.totalContentMinutes
          ? "Concluído"
          : done > 0
            ? "Em andamento"
            : "Não iniciado",
    };
  });
  const totalMinutes = contents.reduce((sum, content) => sum + content.totalMinutes, 0);
  const done = contents.reduce((sum, content) => sum + content.completedMinutes, 0);
  return {
    contents,
    totalMinutes,
    completedMinutes: done,
    completedContents: contents.filter((content) => content.status === "Concluído").length,
    percentage: totalMinutes > 0 ? Math.floor((done / totalMinutes) * 100) : 0,
    weekStart,
    weekMinutes,
    todayMinutes,
  };
}

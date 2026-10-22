import type { ActivityType, OlympiadContent } from "@/data/olimpiadas";
import { parseDailyTime } from "./time";

export type StudySession = {
  id: string;
  contentId: string;
  contentKey: string;
  title: string;
  areaName: string;
  activityType: ActivityType;
  sessionMinutes: number;
  totalContentMinutes: number;
  startMinute: number;
  endMinute: number;
  partIndex: number;
  partCount: number;
};

export type ScheduleDay = {
  id: string;
  week: number;
  dayOfWeek: number;
  isPause: boolean;
  capacityMinutes: number;
  plannedMinutes: number;
  sessions: StudySession[];
};

/**
 * Distribui a sequencia sem mudar a base educacional. Cada sessao usa o menor
 * valor entre o saldo do dia e o tempo que ainda falta para concluir o assunto.
 * N primeiros dias da semana sao de estudo; os demais sao pausas.
 */
export function generateSchedule(
  plan: OlympiadContent,
  weeklyDays: number | null,
  dailyTime: string | null,
): ScheduleDay[] {
  const daysPerWeek = typeof weeklyDays === "number" && Number.isFinite(weeklyDays)
    ? Math.min(7, Math.max(1, Math.trunc(weeklyDays)))
    : 1;
  const capacityMinutes = parseDailyTime(dailyTime);
  let occurrence = 0;
  const contents = plan.phases.flatMap((phase) =>
    phase.areas.flatMap((area) => area.contents.map((content) => ({
      ...content,
      areaName: area.name,
      contentKey: JSON.stringify([plan.olympiadId, plan.grade, phase.id, area.id, content.id, occurrence++]),
    }))),
  ).sort((a, b) => a.suggestedOrder - b.suggestedOrder || b.priority - a.priority);

  // Validar toda a entrada antes de alocar. Nao omitir conteudos invalidos.
  const prepared = contents.map((content) => {
    const totalMinutes = Math.round(content.estimatedHours * 60);
    if (!Number.isSafeInteger(totalMinutes) || totalMinutes <= 0) {
      throw new RangeError(`O conteúdo "${content.title}" possui uma estimativa de tempo inválida.`);
    }
    return { content, totalMinutes };
  });

  const days: ScheduleDay[] = [];
  const byContent = new Map<string, StudySession[]>();
  let currentDay: ScheduleDay | undefined;

  const nextStudyDay = (): ScheduleDay => {
    while (true) {
      const calendarIndex = days.length;
      const week = Math.floor(calendarIndex / 7) + 1;
      const dayOfWeek = calendarIndex % 7 + 1;
      const isPause = dayOfWeek > daysPerWeek;
      const day: ScheduleDay = {
        id: `week-${week}-day-${dayOfWeek}`,
        week,
        dayOfWeek,
        isPause,
        capacityMinutes: isPause ? 0 : capacityMinutes,
        plannedMinutes: 0,
        sessions: [],
      };
      days.push(day);
      if (!isPause) return day;
    }
  };

  for (const { content, totalMinutes } of prepared) {
    let usedMinutes = 0;
    const sessions: StudySession[] = [];
    byContent.set(content.contentKey, sessions);

    while (usedMinutes < totalMinutes) {
      if (!currentDay || currentDay.plannedMinutes === capacityMinutes) {
        currentDay = nextStudyDay();
      }
      const sessionMinutes = Math.min(
        totalMinutes - usedMinutes,
        capacityMinutes - currentDay.plannedMinutes,
      );
      const session: StudySession = {
        id: `${content.contentKey}:${usedMinutes}-${usedMinutes + sessionMinutes}`,
        contentId: content.id,
        contentKey: content.contentKey,
        title: content.title,
        areaName: content.areaName,
        activityType: content.activityType,
        sessionMinutes,
        totalContentMinutes: totalMinutes,
        startMinute: usedMinutes,
        endMinute: usedMinutes + sessionMinutes,
        partIndex: sessions.length + 1,
        partCount: 1,
      };
      currentDay.sessions.push(session);
      sessions.push(session);
      currentDay.plannedMinutes += sessionMinutes;
      usedMinutes += sessionMinutes;
    }
  }

  // O numero real de partes depende do saldo em que o assunto comecou.
  for (const sessions of byContent.values()) {
    for (const session of sessions) session.partCount = sessions.length;
  }
  return days;
}

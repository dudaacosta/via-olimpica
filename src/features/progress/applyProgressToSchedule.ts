import type { ScheduleDay, StudySession } from "@/features/schedule/generateSchedule";
import { splitRangeByCompletion, type CompletionInterval } from "./ranges";

export type ProgressStudySession = StudySession & {
  completed: boolean;
};

export type ProgressScheduleDay = Omit<ScheduleDay, "sessions"> & {
  sessions: ProgressStudySession[];
};

/**
 * Projeta as conclusões persistidas sobre o cronograma atual. Quando o horário
 * muda, uma sessão maior é dividida exatamente nos trechos concluídos e pendentes.
 */
export function applyProgressToSchedule(
  days: ScheduleDay[],
  completedByContent: Record<string, CompletionInterval[]>,
): ProgressScheduleDay[] {
  const projected: ProgressScheduleDay[] = days.map((day) => ({
    ...day,
    sessions: day.sessions.flatMap((session) =>
      splitRangeByCompletion(
        session.startMinute,
        session.endMinute,
        completedByContent[session.contentKey],
      ).map((slice) => ({
        ...session,
        id: `${session.contentKey}:${slice.startMinute}-${slice.endMinute}`,
        sessionMinutes: slice.endMinute - slice.startMinute,
        startMinute: slice.startMinute,
        endMinute: slice.endMinute,
        completed: slice.completed,
      })),
    ),
  }));

  const sessionsByContent = new Map<string, ProgressStudySession[]>();
  for (const session of projected.flatMap((day) => day.sessions)) {
    const list = sessionsByContent.get(session.contentKey) ?? [];
    list.push(session);
    sessionsByContent.set(session.contentKey, list);
  }
  for (const sessions of sessionsByContent.values()) {
    sessions.forEach((session, index) => {
      session.partIndex = index + 1;
      session.partCount = sessions.length;
    });
  }

  return projected;
}

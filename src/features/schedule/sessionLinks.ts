import type { StudySession } from "./generateSchedule";

/** The occurrence index is unique within each olympiad/grade's generated base. */
export function getSessionAnchor(
  session: Pick<StudySession, "contentKey" | "startMinute" | "endMinute">,
): string {
  const identity = JSON.parse(session.contentKey) as [
    string,
    string,
    string,
    string,
    string,
    number,
  ];
  return `study-${identity[0]}-${identity[1]}-${identity[5]}-${session.startMinute}-${session.endMinute}`;
}

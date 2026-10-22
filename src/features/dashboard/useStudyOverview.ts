import { useEffect, useMemo, useState } from "react";
import { OLYMPIAD_CONTENTS } from "@/data/olimpiadas";
import { useQuizStore } from "@/features/quiz/store";
import { useProgressStore } from "@/features/progress/store";
import { summarizeProgress } from "@/features/progress/overview";
import { buildDatedSchedule } from "@/features/schedule/buildDatedSchedule";
import { localDate } from "@/features/schedule/calendar";
import { getAchievement } from "@/features/progress/levels";
import { getWeeklyGoal } from "@/features/progress/weeklyGoal";

/** Wait for persisted records before showing metrics, and refresh at local day changes. */
export function useStudyOverview() {
  const { olympiad, grade, examDate, planStartDate, dailyTime, weeklyDays } = useQuizStore();
  const completed = useProgressStore((state) => state.completedByContent);
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const refresh = () => {
      if (useQuizStore.persist.hasHydrated() && useProgressStore.persist.hasHydrated())
        setToday(localDate());
    };
    const unsubscribeQuiz = useQuizStore.persist.onFinishHydration(refresh);
    const unsubscribeProgress = useProgressStore.persist.onFinishHydration(refresh);
    refresh();
    const timer = window.setInterval(refresh, 60_000);
    window.addEventListener("focus", refresh);
    return () => {
      unsubscribeQuiz();
      unsubscribeProgress();
      window.clearInterval(timer);
      window.removeEventListener("focus", refresh);
    };
  }, []);
  const plan = useMemo(
    () =>
      OLYMPIAD_CONTENTS.find((item) => item.olympiadId === olympiad && item.grade === grade) ??
      null,
    [olympiad, grade],
  );
  const result = useMemo(() => {
    if (!today || !plan)
      return { summary: null, schedule: null, weeklyGoal: null, achievement: null, error: null };
    try {
      const summary = summarizeProgress(plan, completed, today);
      return {
        summary,
        achievement: getAchievement(summary.completedContents, summary.contents.length),
        weeklyGoal:
          examDate && dailyTime && weeklyDays
            ? getWeeklyGoal(
                plan,
                { examDate, planStartDate, dailyTime, weeklyDays },
                completed,
                today,
              )
            : null,
        schedule: examDate
          ? buildDatedSchedule(
              plan,
              { examDate, planStartDate, dailyTime, weeklyDays },
              completed,
              today,
            )
          : null,
        error: null,
      };
    } catch (error) {
      return {
        summary: null,
        schedule: null,
        weeklyGoal: null,
        achievement: null,
        error: error instanceof Error ? error.message : "Não foi possível carregar seu plano.",
      };
    }
  }, [today, plan, completed, examDate, planStartDate, dailyTime, weeklyDays]);
  return {
    ...result,
    plan,
    today,
    ready: today !== null,
  };
}

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { isFutureExamDate, localDate } from "@/features/schedule/calendar";
import {
  DEFAULT_OLYMPIAD_ID,
  normalizeOlympiadSelection,
  type GradeId,
} from "./data";

export type QuizState = {
  name: string;
  grade: GradeId | null;
  dailyTime: string | null;
  weeklyDays: number | null;
  olympiad: string | null;
  examDate: string | null;
  planStartDate: string | null;
  completed: boolean;
  setName: (v: string) => void;
  setGrade: (v: GradeId) => void;
  setDailyTime: (v: string) => void;
  setWeeklyDays: (v: number) => void;
  setOlympiad: (v: string) => void;
  setExamDate: (v: string) => void;
  complete: () => void;
  reset: () => void;
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      name: "",
      grade: null,
      dailyTime: null,
      weeklyDays: null,
      olympiad: null,
      examDate: null,
      planStartDate: null,
      completed: false,
      setName: (name) => set({ name }),
      // Preserve previously selected olympiad when changing grade from Profile.
      setGrade: (grade) => set({ grade }),
      setDailyTime: (dailyTime) => set({ dailyTime }),
      setWeeklyDays: (weeklyDays) => set({ weeklyDays }),
      setExamDate: (examDate) => set((state) => ({ examDate, planStartDate: state.planStartDate ?? localDate() })),
      // Only olympiads with a completed base can become the active plan.
      setOlympiad: (olympiad) => set({
        olympiad: normalizeOlympiadSelection(olympiad) ?? DEFAULT_OLYMPIAD_ID,
      }),
      complete: () => set({ completed: true }),
      reset: () =>
        set({ name: "", grade: null, dailyTime: null, weeklyDays: null, olympiad: null, examDate: null, planStartDate: null, completed: false }),
    }),
    {
      name: "via-olimpica-quiz",
      storage: createJSONStorage(() => {
        if (typeof window === "undefined") {
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
          };
        }
        return window.localStorage;
      }),
      merge: (persistedState, currentState) => {
        const persisted = (persistedState ?? {}) as Partial<QuizState>;
        return {
          ...currentState,
          ...persisted,
          // Old profiles stay valid; never guess a competition date.
          examDate: typeof persisted.examDate === "string"
            && isFutureExamDate(persisted.examDate, "0001-01-01") ? persisted.examDate : null,
          planStartDate: typeof persisted.planStartDate === "string"
            && isFutureExamDate(persisted.planStartDate, "0001-01-01") ? persisted.planStartDate : null,
          olympiad: normalizeOlympiadSelection(
            typeof persisted.olympiad === "string" ? persisted.olympiad : null,
          ),
        };
      },
      skipHydration: true,
    },
  ),
);

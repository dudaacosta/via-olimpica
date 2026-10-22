import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
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
  completed: boolean;
  setName: (v: string) => void;
  setGrade: (v: GradeId) => void;
  setDailyTime: (v: string) => void;
  setWeeklyDays: (v: number) => void;
  setOlympiad: (v: string) => void;
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
      completed: false,
      setName: (name) => set({ name }),
      // Preserve previously selected olympiad when changing grade from Profile.
      setGrade: (grade) => set({ grade }),
      setDailyTime: (dailyTime) => set({ dailyTime }),
      setWeeklyDays: (weeklyDays) => set({ weeklyDays }),
      // Only olympiads with a completed base can become the active plan.
      setOlympiad: (olympiad) => set({
        olympiad: normalizeOlympiadSelection(olympiad) ?? DEFAULT_OLYMPIAD_ID,
      }),
      complete: () => set({ completed: true }),
      reset: () =>
        set({ name: "", grade: null, dailyTime: null, weeklyDays: null, olympiad: null, completed: false }),
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
          olympiad: normalizeOlympiadSelection(
            typeof persisted.olympiad === "string" ? persisted.olympiad : null,
          ),
        };
      },
      skipHydration: true,
    },
  ),
);

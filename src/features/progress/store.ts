import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { accountStorage } from "@/features/auth/accountStorage";
import {
  addCompletedRange,
  isRangeCompleted,
  removeCompletedRange,
  sanitizeCompletionRecord,
  type CompletionInterval,
} from "./ranges";

export const PROGRESS_STORAGE_KEY = "via-olimpica-progress-v1";

export type ProgressState = {
  completedByContent: Record<string, CompletionInterval[]>;
  completeRange: (
    contentKey: string,
    startMinute: number,
    endMinute: number,
    completedAt?: string,
  ) => void;
  uncompleteRange: (contentKey: string, startMinute: number, endMinute: number) => void;
  toggleRange: (contentKey: string, startMinute: number, endMinute: number) => void;
  clearProgress: () => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      completedByContent: {},
      completeRange: (contentKey, startMinute, endMinute, completedAt) =>
        set((state) => ({
          completedByContent: {
            ...state.completedByContent,
            [contentKey]: addCompletedRange(
              state.completedByContent[contentKey],
              startMinute,
              endMinute,
              completedAt,
            ),
          },
        })),
      uncompleteRange: (contentKey, startMinute, endMinute) =>
        set((state) => {
          const nextIntervals = removeCompletedRange(
            state.completedByContent[contentKey],
            startMinute,
            endMinute,
          );
          const completedByContent = { ...state.completedByContent };
          if (nextIntervals.length > 0) completedByContent[contentKey] = nextIntervals;
          else delete completedByContent[contentKey];
          return { completedByContent };
        }),
      toggleRange: (contentKey, startMinute, endMinute) =>
        set((state) => {
          const current = state.completedByContent[contentKey];
          const completedByContent = { ...state.completedByContent };
          if (isRangeCompleted(current, startMinute, endMinute)) {
            const next = removeCompletedRange(current, startMinute, endMinute);
            if (next.length > 0) completedByContent[contentKey] = next;
            else delete completedByContent[contentKey];
          } else {
            completedByContent[contentKey] = addCompletedRange(current, startMinute, endMinute);
          }
          return { completedByContent };
        }),
      clearProgress: () => set({ completedByContent: {} }),
    }),
    {
      name: PROGRESS_STORAGE_KEY,
      storage: createJSONStorage(() => accountStorage),
      partialize: (state) => ({ completedByContent: state.completedByContent }),
      merge: (persistedState, currentState) => {
        const persisted = (persistedState ?? {}) as Partial<ProgressState>;
        return {
          ...currentState,
          completedByContent: sanitizeCompletionRecord(persisted.completedByContent),
        };
      },
      skipHydration: true,
    },
  ),
);

export { isRangeCompleted } from "./ranges";

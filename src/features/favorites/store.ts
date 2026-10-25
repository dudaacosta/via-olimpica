import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { accountStorage } from "@/features/auth/accountStorage";

export const FAVORITES_STORAGE_KEY = "via-olimpica-favorites-v1";

export type FavoritesState = {
  favoriteOlympiadIds: string[];
  toggleFavorite: (olympiadId: string) => void;
  clearFavorites: () => void;
};

function sanitizeFavoriteIds(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [
    ...new Set(value.filter((item): item is string => typeof item === "string" && item.length > 0)),
  ];
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favoriteOlympiadIds: [],
      toggleFavorite: (olympiadId) =>
        set((state) => ({
          favoriteOlympiadIds: state.favoriteOlympiadIds.includes(olympiadId)
            ? state.favoriteOlympiadIds.filter((id) => id !== olympiadId)
            : [...state.favoriteOlympiadIds, olympiadId],
        })),
      clearFavorites: () => set({ favoriteOlympiadIds: [] }),
    }),
    {
      name: FAVORITES_STORAGE_KEY,
      storage: createJSONStorage(() => accountStorage),
      partialize: (state) => ({ favoriteOlympiadIds: state.favoriteOlympiadIds }),
      merge: (persistedState, currentState) => {
        const persisted = (persistedState ?? {}) as Partial<FavoritesState>;
        return {
          ...currentState,
          favoriteOlympiadIds: sanitizeFavoriteIds(persisted.favoriteOlympiadIds),
        };
      },
      skipHydration: true,
    },
  ),
);

import { useQuizStore } from "@/features/quiz/store";
import { useProgressStore } from "@/features/progress/store";
import { useFavoritesStore } from "@/features/favorites/store";
import { accountStorage, pauseStudyWrites, setStorageAccount } from "./accountStorage";

// The UI remains hidden throughout a switch; a previous student's state is never
// used as the default when the next account has no saved study data.
export async function switchStudyAccount(id: string | null) {
  pauseStudyWrites(true);
  setStorageAccount(id);
  try {
    for (const key of ["via-olimpica-quiz", "via-olimpica-progress-v1", "via-olimpica-favorites-v1"]) {
      const raw = await accountStorage.getItem(key);
      if (raw) JSON.parse(raw);
    }
    useQuizStore.setState(useQuizStore.getInitialState(), true);
    useProgressStore.setState(useProgressStore.getInitialState(), true);
    useFavoritesStore.setState(useFavoritesStore.getInitialState(), true);
    await useQuizStore.persist.rehydrate();
    await useProgressStore.persist.rehydrate();
    await useFavoritesStore.persist.rehydrate();
  } catch {
    // Keep writes paused on failure to avoid overwriting an unreadable record.
    throw new Error("Não foi possível carregar seus dados. Recarregue a página para tentar novamente.");
  }
  pauseStudyWrites(false);
}

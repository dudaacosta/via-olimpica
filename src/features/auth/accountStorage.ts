import type { StateStorage } from "zustand/middleware";

let accountId: string | null = null;
let paused = false;

export function setStorageAccount(id: string | null) { accountId = id; }
export function pauseStudyWrites(value: boolean) { paused = value; }
export function accountStorageKey(key: string) {
  return accountId ? `${key}:account:${encodeURIComponent(accountId)}` : key;
}

export const accountStorage: StateStorage = {
  getItem: key => typeof window === "undefined" ? null : window.localStorage.getItem(accountStorageKey(key)),
  setItem: (key, value) => {
    if (!paused && typeof window !== "undefined") window.localStorage.setItem(accountStorageKey(key), value);
  },
  removeItem: key => {
    if (!paused && typeof window !== "undefined") window.localStorage.removeItem(accountStorageKey(key));
  },
};

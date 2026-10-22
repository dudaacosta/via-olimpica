export type ProgressLevel = {
  id: string;
  name: string;
  minPercent: number;
  background: string;
  foreground: string;
  accent: string;
  imageSrc: string | null;
  imageAlt: string;
};

/** Add each independent illustration to public/ and set only its imageSrc here. */
export const PROGRESS_LEVELS: readonly ProgressLevel[] = [
  {
    id: "bronze",
    name: "Bronze",
    minPercent: 0,
    background: "linear-gradient(120deg, #78350f, #431407)",
    foreground: "#ffffff",
    accent: "#b45309",
    imageSrc: null,
    imageAlt: "Conquista do nível Bronze",
  },
  {
    id: "silver",
    name: "Prata",
    minPercent: 25,
    background: "linear-gradient(120deg, #475569, #1e293b)",
    foreground: "#ffffff",
    accent: "#64748b",
    imageSrc: null,
    imageAlt: "Conquista do nível Prata",
  },
  {
    id: "gold",
    name: "Ouro",
    minPercent: 50,
    background: "linear-gradient(120deg, #fef3c7, #fde68a)",
    foreground: "#713f12",
    accent: "#a16207",
    imageSrc: null,
    imageAlt: "Conquista do nível Ouro",
  },
  {
    id: "diamond",
    name: "Diamante",
    minPercent: 80,
    background: "linear-gradient(120deg, #0c4a6e, #082f49)",
    foreground: "#ffffff",
    accent: "#0284c7",
    imageSrc: null,
    imageAlt: "Conquista do nível Diamante",
  },
];

export function getAchievement(completedContents: number, totalContents: number) {
  const total = Number.isSafeInteger(totalContents) ? Math.max(0, totalContents) : 0;
  const done = Number.isSafeInteger(completedContents)
    ? Math.min(total, Math.max(0, completedContents))
    : 0;
  const rawPercentage = total > 0 ? (done / total) * 100 : 0;
  const index = PROGRESS_LEVELS.reduce(
    (found, level, index) => (rawPercentage >= level.minPercent ? index : found),
    0,
  );
  const level = PROGRESS_LEVELS[Math.max(0, index)];
  const nextLevel = total > 0 ? (PROGRESS_LEVELS[index + 1] ?? null) : null;
  return {
    level,
    nextLevel,
    hasContents: total > 0,
    percentage: Math.floor(rawPercentage),
    position: rawPercentage,
    remainingContents: nextLevel
      ? Math.max(0, Math.ceil((total * nextLevel.minPercent) / 100) - done)
      : 0,
  };
}

export type Achievement = ReturnType<typeof getAchievement>;

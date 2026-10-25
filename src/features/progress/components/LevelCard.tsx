import { Trophy } from "lucide-react";
import { LevelMedal } from "./LevelMedal";
import type { Achievement } from "../levels";

export function LevelCard({
  achievement,
  completedContents,
  totalContents,
}: {
  achievement: Achievement;
  completedContents: number;
  totalContents: number;
}) {
  const { level, nextLevel } = achievement;
  return (
    <section
      aria-label={`Nível ${level.name}`}
      style={{ background: level.background, color: level.foreground }}
      className="relative overflow-hidden rounded-3xl p-8 md:p-10 shadow-[var(--shadow-hero)] mb-6"
    >
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-20 h-72 w-72 rounded-full border border-current opacity-10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-current opacity-10"
      />
      <div className="relative flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-widest">Nível {level.name}</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight !text-inherit">
            {completedContents} de {totalContents}
            <span className="block text-lg mt-1 font-medium">conteúdos concluídos</span>
          </h2>
          <p className="mt-4 text-base font-semibold">
            {achievement.percentage}% do plano completo
          </p>
          <p className="mt-3 text-sm">
            {totalContents === 0
              ? "Seu caminho começa com o primeiro conteúdo."
              : nextLevel
                ? `Próxima conquista: ${nextLevel.name}`
                : "Diamante conquistado. Sua dedicação está fazendo história!"}
          </p>
        </div>
        {level.imageSrc ? (
          <LevelMedal
            level={level}
            className="w-36 sm:w-40 md:w-48 shrink-0 self-center drop-shadow-lg"
          />
        ) : (
          <div
            aria-hidden="true"
            className="self-start sm:self-center flex h-20 w-20 sm:h-32 sm:w-32 shrink-0 items-center justify-center rounded-3xl border border-current/20 bg-white/10"
          >
            <Trophy className="h-10 w-10 sm:h-16 sm:w-16" strokeWidth={1.25} />
          </div>
        )}
      </div>
    </section>
  );
}

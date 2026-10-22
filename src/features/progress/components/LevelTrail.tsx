import { PROGRESS_LEVELS, type Achievement } from "../levels";

export function LevelTrail({ achievement }: { achievement: Achievement }) {
  const { level, nextLevel, percentage, position, remainingContents } = achievement;
  return (
    <section className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] mb-6">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-lg font-bold">Sua trilha de evolução</h3>
        <span className="font-bold text-[var(--navy)]">{percentage}%</span>
      </div>
      <div
        role="progressbar"
        aria-label="Evolução por conteúdos integralmente concluídos"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={position}
        aria-valuetext={`${percentage}% do plano, nível ${level.name}`}
        className="relative h-3 mx-2 mb-8"
      >
        <div className="absolute inset-0 flex overflow-hidden rounded-full" aria-hidden="true">
          {PROGRESS_LEVELS.map((item, index) => (
            <span
              key={item.id}
              style={{
                width: `${(PROGRESS_LEVELS[index + 1]?.minPercent ?? 100) - item.minPercent}%`,
                background: item.accent,
                opacity: 0.2,
              }}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ width: `${position}%`, background: level.accent }}
        />
        {PROGRESS_LEVELS.map((item) => (
          <span
            key={item.id}
            aria-hidden="true"
            className="absolute top-0 h-3 w-0.5 bg-white/80"
            style={{ left: `${item.minPercent}%` }}
          />
        ))}
        <span
          aria-hidden="true"
          className="absolute -top-1 h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-white shadow-md"
          style={{ left: `${position}%`, background: level.accent }}
        />
        <span
          aria-hidden="true"
          className="absolute top-5 left-0 text-[10px] text-muted-foreground"
        >
          0%
        </span>
        <span
          aria-hidden="true"
          className="absolute top-5 right-0 text-[10px] text-muted-foreground"
        >
          100%
        </span>
      </div>
      <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {PROGRESS_LEVELS.map((item, index) => (
          <li
            key={item.id}
            aria-current={item.id === level.id ? "step" : undefined}
            className={`rounded-xl border px-3 py-2 ${item.id === level.id ? "border-current bg-slate-50" : "border-border"}`}
          >
            <p className="text-sm font-semibold flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full shrink-0"
                style={{ background: item.accent }}
              />
              {item.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {item.minPercent}% a{" "}
              {PROGRESS_LEVELS[index + 1] ? `<${PROGRESS_LEVELS[index + 1].minPercent}%` : "100%"}
            </p>
            {item.id === level.id && (
              <span className="text-[10px] font-bold uppercase tracking-wide">Nível atual</span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm text-muted-foreground">
        {!achievement.hasContents
          ? "Seu caminho começa quando os conteúdos do plano estiverem disponíveis."
          : nextLevel
            ? `${remainingContents === 1 ? "Falta" : "Faltam"} ${remainingContents} ${remainingContents === 1 ? "conteúdo completo" : "conteúdos completos"} para alcançar o nível ${nextLevel.name}. Um passo de cada vez!`
            : position === 100
              ? "Plano concluído. Parabéns por cada etapa dessa conquista!"
              : "Você alcançou o nível Diamante. Celebre sua evolução!"}
      </p>
    </section>
  );
}

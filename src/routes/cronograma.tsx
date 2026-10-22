import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Check } from "lucide-react";
import { AppShell } from "@/features/dashboard/components/AppShell";
import { useQuizStore } from "@/features/quiz/store";
import { OLYMPIAD_CONTENTS } from "@/data/olimpiadas";
import { generateSchedule, type ScheduleDay } from "@/features/schedule/generateSchedule";
import { formatMinutes } from "@/features/schedule/time";
import { applyProgressToSchedule } from "@/features/progress/applyProgressToSchedule";
import { useProgressStore } from "@/features/progress/store";

export const Route = createFileRoute("/cronograma")({
  head: () => ({ meta: [{ title: "Cronograma — Via Olímpica" }] }),
  component: CronogramaPage,
});

function CronogramaPage() {
  const store = useQuizStore();
  const completedByContent = useProgressStore((state) => state.completedByContent);
  const toggleRange = useProgressStore((state) => state.toggleRange);

  const plan = useMemo(() => {
    if (!store.olympiad || !store.grade) return null;
    return OLYMPIAD_CONTENTS.find(
      (item) => item.olympiadId === store.olympiad && item.grade === store.grade,
    ) ?? null;
  }, [store.olympiad, store.grade]);

  const result = useMemo<{ days: ScheduleDay[]; error: string | null }>(() => {
    if (!plan) return { days: [], error: null };
    try {
      return { days: generateSchedule(plan, store.weeklyDays, store.dailyTime), error: null };
    } catch (error) {
      return {
        days: [],
        error: error instanceof Error ? error.message : "Não foi possível calcular os tempos do cronograma.",
      };
    }
  }, [plan, store.weeklyDays, store.dailyTime]);

  const days = useMemo(
    () => applyProgressToSchedule(result.days, completedByContent),
    [result.days, completedByContent],
  );

  return (
    <AppShell title="Cronograma" subtitle="Marque os conteúdos conforme você estuda.">
      <div className="space-y-6">
        {result.error ? (
          <div role="alert" className="rounded-3xl border border-border bg-white p-8 text-center">
            <p className="text-sm text-muted-foreground">{result.error}</p>
          </div>
        ) : days.length > 0 ? (
          days.map((day) => (
            <div key={day.id}>
              <div className="text-xs font-bold tracking-widest text-muted-foreground mb-2">
                Semana {day.week} • Dia {day.dayOfWeek}
                {day.isPause
                  ? " • Pausa"
                  : ` • ${formatMinutes(day.plannedMinutes)} planejados de ${formatMinutes(day.capacityMinutes)} disponíveis`}
              </div>
              <div className="w-full bg-white border-2 rounded-2xl p-5 space-y-3 shadow-[var(--shadow-soft)]">
                {day.isPause ? (
                  <div className="rounded-2xl border-2 border-border p-4">
                    <div className="font-semibold text-[var(--navy)]">Dia de pausa</div>
                    <div className="text-sm text-muted-foreground">Sem estudo</div>
                  </div>
                ) : day.sessions.map((session) => (
                  <button
                    key={session.id}
                    type="button"
                    aria-pressed={session.completed}
                    onClick={() => toggleRange(
                      session.contentKey,
                      session.startMinute,
                      session.endMinute,
                    )}
                    className={[
                      "w-full text-left rounded-2xl p-4 flex items-center gap-4 transition",
                      session.completed
                        ? "border-success bg-success-soft/30 border-2"
                        : "border-border border-2 hover:border-primary/40 hover:-translate-y-0.5",
                    ].join(" ")}
                  >
                    <div className={[
                      "h-7 w-7 rounded-full border-2 flex items-center justify-center shrink-0 transition",
                      session.completed ? "bg-success border-success text-white" : "border-border bg-white",
                    ].join(" ")}>
                      {session.completed && <Check className="h-4 w-4" />}
                    </div>
                    <div className="min-w-0">
                      <div className={[
                        "font-semibold text-[var(--navy)]",
                        session.completed && "line-through text-muted-foreground",
                      ].filter(Boolean).join(" ")}>
                        {session.title}
                        {session.partCount > 1 && ` • Parte ${session.partIndex}/${session.partCount}`}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {session.areaName} • {session.activityType} • {formatMinutes(session.sessionMinutes)} nesta sessão
                      </div>
                      {session.partCount > 1 && (
                        <div className="text-xs text-muted-foreground mt-1">
                          Total do conteúdo: {formatMinutes(session.totalContentMinutes)}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-3xl border border-border bg-white p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Ainda não há uma base de conteúdos disponível para a combinação selecionada.
            </p>
            <p className="mt-3 text-sm text-[var(--navy)]">
              OBMEP, Canguru, OLITEF e OBA geram cronogramas do 6º ano ao 3º ano do Ensino Médio.
            </p>
          </div>
        )}
      </div>
    </AppShell>
  );
}

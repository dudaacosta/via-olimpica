import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check } from "lucide-react";
import { AppShell } from "@/features/dashboard/components/AppShell";
import { useQuizStore } from "@/features/quiz/store";
import { OLYMPIAD_CONTENTS } from "@/data/olimpiadas";
import { generateSchedule, type ScheduleDay } from "@/features/schedule/generateSchedule";
import { formatMinutes } from "@/features/schedule/time";
import { applyProgressToSchedule } from "@/features/progress/applyProgressToSchedule";
import { useProgressStore } from "@/features/progress/store";
import { formatDate, localDate } from "@/features/schedule/calendar";
import { buildDatedSchedule } from "@/features/schedule/buildDatedSchedule";
import { getSessionAnchor } from "@/features/schedule/sessionLinks";

export const Route = createFileRoute("/cronograma")({
  head: () => ({ meta: [{ title: "Cronograma — Via Olímpica" }] }),
  component: CronogramaPage,
});

function CronogramaPage() {
  const store = useQuizStore();
  const completedByContent = useProgressStore((state) => state.completedByContent);
  const toggleRange = useProgressStore((state) => state.toggleRange);
  const [today, setToday] = useState<string | null>(null);
  const hash = useLocation({ select: (location) => location.hash });
  const focusedHash = useRef<string | null>(null);
  useEffect(() => {
    setToday(localDate());
  }, []);

  const plan = useMemo(() => {
    if (!store.olympiad || !store.grade) return null;
    return (
      OLYMPIAD_CONTENTS.find(
        (item) => item.olympiadId === store.olympiad && item.grade === store.grade,
      ) ?? null
    );
  }, [store.olympiad, store.grade]);

  const result = useMemo<{
    days: (ScheduleDay & { date?: string; afterDeadline?: boolean })[];
    error: string | null;
    overflowMinutes?: number;
    remainingMinutes?: number;
    availableMinutes?: number;
  }>(() => {
    if (!plan) return { days: [], error: null };
    try {
      if (store.examDate && today) {
        return {
          ...buildDatedSchedule(
            plan,
            {
              examDate: store.examDate,
              weeklyDays: store.weeklyDays,
              dailyTime: store.dailyTime,
              planStartDate: store.planStartDate,
            },
            completedByContent,
            today,
          ),
          error: null,
        };
      }
      return { days: generateSchedule(plan, store.weeklyDays, store.dailyTime), error: null };
    } catch (error) {
      return {
        days: [],
        error:
          error instanceof Error
            ? error.message
            : "Não foi possível calcular os tempos do cronograma.",
      };
    }
  }, [
    plan,
    store.weeklyDays,
    store.dailyTime,
    store.examDate,
    store.planStartDate,
    today,
    completedByContent,
  ]);

  const projected = useMemo(
    () => applyProgressToSchedule(result.days, completedByContent),
    [result.days, completedByContent],
  );
  const days = projected.map((day, index) => ({
    ...day,
    date: result.days[index].date,
    afterDeadline: result.days[index].afterDeadline,
  }));
  useEffect(() => {
    if (!hash) {
      focusedHash.current = null;
      return;
    }
    if (!today || focusedHash.current === hash) return;
    const target = document.getElementById(hash);
    if (!target) return;
    target.scrollIntoView({ block: "center" });
    target.focus({ preventScroll: true });
    focusedHash.current = hash;
  }, [today, hash, result.days]);
  const completedSessions = useMemo(() => {
    if (!plan || !store.examDate) return [];
    return applyProgressToSchedule(
      generateSchedule(plan, store.weeklyDays, store.dailyTime),
      completedByContent,
    )
      .flatMap((day) => day.sessions)
      .filter((session) => session.completed);
  }, [plan, store.examDate, store.weeklyDays, store.dailyTime, completedByContent]);

  return (
    <AppShell title="Cronograma" subtitle="Marque os conteúdos conforme você estuda.">
      <div className="space-y-6">
        {!store.examDate && (
          <div className="rounded-2xl border border-border bg-white p-5">
            <p>
              Informe a data da prova para ver datas concretas e conferir se o plano cabe no prazo.
            </p>
            <Link to="/perfil" className="text-primary underline">
              Adicionar data no perfil
            </Link>
          </div>
        )}
        {store.examDate && today && !result.error && (
          <div role="status" className="rounded-2xl border border-border bg-white p-5 space-y-2">
            <p className="font-semibold">
              Prova: {formatDate(store.examDate)} • Plano a partir de {formatDate(today)}
            </p>
            <p className="text-sm text-muted-foreground">
              {formatMinutes(result.remainingMinutes ?? 0)} pendentes •{" "}
              {formatMinutes(result.availableMinutes ?? 0)} disponíveis antes da prova.
            </p>
            <p className="text-sm text-muted-foreground">
              Ciclos de 7 dias desde {formatDate(store.planStartDate ?? today)}: os primeiros{" "}
              {store.weeklyDays ?? 1} são de estudo e os demais são pausas. O saldo é reorganizado
              descontando o tempo já concluído hoje.
            </p>
            {(result.overflowMinutes ?? 0) > 0 ? (
              <p className="text-sm font-semibold">
                O conteúdo não cabe no prazo: faltam {formatMinutes(result.overflowMinutes!)} de
                disponibilidade. Os trechos excedentes aparecem como referência após o prazo. Ajuste
                suas preferências no perfil se for viável para você.
              </p>
            ) : (
              <p className="text-sm font-semibold">
                {days.length
                  ? "O conteúdo pendente cabe na disponibilidade informada."
                  : "Todos os conteúdos deste plano foram concluídos."}
              </p>
            )}
            <Link to="/perfil" className="text-primary underline text-sm">
              Revisar preferências
            </Link>
          </div>
        )}
        {completedSessions.length > 0 && (
          <details className="rounded-2xl border border-border bg-white p-5">
            <summary className="cursor-pointer font-semibold">
              Trechos concluídos preservados •{" "}
              {formatMinutes(
                completedSessions.reduce((total, session) => total + session.sessionMinutes, 0),
              )}
            </summary>
            <ul className="mt-4 space-y-3">
              {completedSessions.map((session) => (
                <li key={session.id} className="flex items-center justify-between gap-3 text-sm">
                  <span>
                    {session.title} • minutos {session.startMinute}–{session.endMinute}
                  </span>
                  <button
                    type="button"
                    className="text-primary underline"
                    aria-label={`Desfazer conclusão de ${session.title}, minutos ${session.startMinute} a ${session.endMinute}`}
                    onClick={() =>
                      toggleRange(session.contentKey, session.startMinute, session.endMinute)
                    }
                  >
                    Desfazer
                  </button>
                </li>
              ))}
            </ul>
          </details>
        )}
        {result.error ? (
          <div role="alert" className="rounded-3xl border border-border bg-white p-8 text-center">
            <p className="text-sm text-muted-foreground">{result.error}</p>
          </div>
        ) : days.length > 0 ? (
          days.map((day) => (
            <div key={day.id}>
              <div className="text-xs font-bold tracking-widest text-muted-foreground mb-2">
                {day.date ? `${formatDate(day.date)} • ` : ""}Semana {day.week} • Dia{" "}
                {day.dayOfWeek}
                {day.afterDeadline && " • Após o prazo — referência"}
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
                ) : (
                  day.sessions.map((session) => (
                    <button
                      key={session.id}
                      id={getSessionAnchor(session)}
                      type="button"
                      aria-pressed={session.completed}
                      onClick={() =>
                        toggleRange(session.contentKey, session.startMinute, session.endMinute)
                      }
                      className={[
                        "w-full text-left rounded-2xl p-4 flex items-center gap-4 transition scroll-mt-24 target:border-primary target:bg-primary-soft/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        hash === getSessionAnchor(session)
                          ? "ring-2 ring-primary ring-offset-2"
                          : "",
                        session.completed
                          ? "border-success bg-success-soft/30 border-2"
                          : "border-border border-2 hover:border-primary/40 hover:-translate-y-0.5",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "h-7 w-7 rounded-full border-2 flex items-center justify-center shrink-0 transition",
                          session.completed
                            ? "bg-success border-success text-white"
                            : "border-border bg-white",
                        ].join(" ")}
                      >
                        {session.completed && <Check className="h-4 w-4" />}
                      </div>
                      <div className="min-w-0">
                        <div
                          className={[
                            "font-semibold text-[var(--navy)]",
                            session.completed && "line-through text-muted-foreground",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {session.title}
                          {session.partCount > 1 &&
                            ` • Parte ${session.partIndex}/${session.partCount}`}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {session.areaName} • {session.activityType} •{" "}
                          {formatMinutes(session.sessionMinutes)} nesta sessão
                        </div>
                        {session.partCount > 1 && (
                          <div className="text-xs text-muted-foreground mt-1">
                            Total do conteúdo: {formatMinutes(session.totalContentMinutes)}
                          </div>
                        )}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          ))
        ) : store.examDate && plan && !result.error ? null : (
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

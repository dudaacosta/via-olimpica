import { Link } from "@tanstack/react-router";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import type { buildDatedSchedule } from "@/features/schedule/buildDatedSchedule";
import type { summarizeProgress } from "@/features/progress/overview";
import { formatDate } from "@/features/schedule/calendar";
import { formatMinutes } from "@/features/schedule/time";
import { getSessionAnchor } from "@/features/schedule/sessionLinks";

export function TodayScheduleCard({
  schedule,
  summary,
  hasPlan,
  today,
  examDate,
}: {
  schedule: ReturnType<typeof buildDatedSchedule> | null;
  summary: ReturnType<typeof summarizeProgress> | null;
  hasPlan: boolean;
  today: string;
  examDate: string | null;
}) {
  const day = schedule?.days.find((item) => item.date === today);
  const completed =
    !!summary &&
    summary.contents.length > 0 &&
    summary.completedContents === summary.contents.length;
  return (
    <section className="bg-white border border-border rounded-3xl shadow-[var(--shadow-soft)] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-bold">Cronograma de hoje</h3>
          <p className="mt-1 text-xs text-muted-foreground">{formatDate(today)}</p>
        </div>
        <Link
          to="/cronograma"
          className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1 py-2"
        >
          Ver cronograma <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      {!hasPlan ? (
        <p>Complete seu perfil para gerar seu plano.</p>
      ) : !examDate ? (
        <p>Adicione a data da prova no perfil para organizar as sessões de hoje.</p>
      ) : examDate <= today ? (
        <p>A data da prova chegou ou já passou. Revise sua próxima prova no perfil.</p>
      ) : completed ? (
        <p className="font-semibold text-success">Você concluiu todos os conteúdos deste plano!</p>
      ) : day?.isPause ? (
        <p>Hoje é dia de pausa no seu ciclo de estudos.</p>
      ) : day && day.sessions.length > 0 ? (
        <>
          <p className="mb-3 text-sm text-muted-foreground">
            {formatMinutes(day.plannedMinutes)} de estudo planejados. Escolha uma sessão para
            continuar.
          </p>
          <ul className="space-y-2">
            {day.sessions.slice(0, 3).map((session) => (
              <li key={session.id}>
                <Link
                  to="/cronograma"
                  hash={getSessionAnchor(session)}
                  hashScrollIntoView={{ block: "center" }}
                  aria-label={`Estudar ${session.title}, ${formatMinutes(session.sessionMinutes)}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-border px-4 py-3 transition hover:border-primary/40 hover:bg-primary-softer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-[var(--navy)]">{session.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {session.areaName} • {formatMinutes(session.sessionMinutes)}
                      {session.partCount > 1
                        ? ` • Parte ${session.partIndex}/${session.partCount}`
                        : ""}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-primary" />
                </Link>
              </li>
            ))}
          </ul>
          {day.sessions.length > 3 && (
            <Link to="/cronograma" className="mt-3 inline-block text-sm text-primary underline">
              Ver todas as {day.sessions.length} sessões de hoje
            </Link>
          )}
        </>
      ) : day?.capacityMinutes === 0 && (summary?.todayMinutes ?? 0) > 0 ? (
        <p>
          Você já utilizou o tempo disponível de hoje neste plano. Suas próximas sessões estão no
          cronograma.
        </p>
      ) : (
        <p>Não há sessões pendentes para hoje. Consulte as próximas datas no cronograma.</p>
      )}
      {summary && (
        <p className="mt-4 text-xs text-muted-foreground">
          {formatMinutes(summary.todayMinutes)} concluídos hoje neste plano.
        </p>
      )}
    </section>
  );
}

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuizProgress } from "@/features/quiz/components/QuizProgress";
import { OptionCard } from "@/features/quiz/components/OptionCard";
import { QuizCard } from "@/features/quiz/components/QuizCard";
import { useQuizStore } from "@/features/quiz/store";
import { formatDate, isFutureExamDate, localDate } from "@/features/schedule/calendar";
import {
  GRADES,
  DAILY_TIME,
  WEEKLY_DAYS,
  olympiadsForGrade,
  findGrade,
  findOlympiad,
  isOlympiadAvailable,
  isOlympiadAvailableId,
} from "@/features/quiz/data";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Monte seu plano — Via Olímpica" },
      {
        name: "description",
        content: "Responda 6 perguntas e receba um plano de estudos personalizado para olimpíadas.",
      },
    ],
  }),
  component: QuizPage,
});

type Phase = "steps" | "loading" | "done";

function QuizPage() {
  const navigate = useNavigate();
  const store = useQuizStore();
  const complete = useQuizStore((state) => state.complete);
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState<Phase>("steps");
  const [loadingPct, setLoadingPct] = useState(0);

  const olympiads = useMemo(() => olympiadsForGrade(store.grade), [store.grade]);

  // loading animation
  useEffect(() => {
    if (phase !== "loading") return;
    setLoadingPct(0);
    const id = setInterval(() => {
      setLoadingPct((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        return p + 4;
      });
    }, 80);
    const t = setTimeout(() => {
      complete();
      setPhase("done");
    }, 2200);
    return () => {
      clearInterval(id);
      clearTimeout(t);
    };
  }, [phase, complete]);

  const canContinue = (() => {
    if (step === 1) return store.name.trim().length > 1;
    if (step === 2) return !!store.grade;
    if (step === 3) return !!store.dailyTime;
    if (step === 4) return !!store.weeklyDays;
    if (step === 5) return isOlympiadAvailableId(store.olympiad);
    if (step === 6) return isFutureExamDate(store.examDate);
    return false;
  })();

  const next = () => {
    if (!canContinue) return;
    if (step < 6) setStep(step + 1);
    else setPhase("loading");
  };
  const back = () => setStep(Math.max(1, step - 1));

  return (
    <div className="min-h-screen bg-organic-page relative overflow-hidden">
      <DecorShapes />

      <header className="relative z-10 max-w-6xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <Logo />
        {phase === "steps" && step > 1 && (
          <button
            onClick={back}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            ← Voltar
          </button>
        )}
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
        {phase === "steps" && (
          <>
            <div className="mb-10 mt-2">
              <QuizProgress current={step} total={6} />
            </div>

            {step === 1 && (
              <QuizCard
                title="Como podemos te chamar?"
                subtitle="Digite seu nome para começarmos a montar seu plano de estudos."
              >
                <div className="max-w-md mx-auto space-y-5">
                  <Input
                    autoFocus
                    placeholder="Digite seu nome"
                    value={store.name}
                    onChange={(e) => store.setName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && canContinue) next();
                    }}
                    className="h-14 rounded-xl text-base px-5 border-2 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary"
                  />
                  <Button
                    onClick={next}
                    disabled={!canContinue}
                    className="w-full h-14 rounded-xl text-base font-semibold gap-2"
                  >
                    Continuar <ArrowRight className="h-5 w-5" />
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                    <ShieldCheck className="h-4 w-4 text-success" />
                    Suas informações estão seguras
                  </div>
                </div>
              </QuizCard>
            )}

            {step === 2 && (
              <QuizCard title="Em que ano escolar você está?">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                  {GRADES.map((g) => (
                    <OptionCard
                      key={g.id}
                      selected={store.grade === g.id}
                      onClick={() => store.setGrade(g.id)}
                    >
                      <div className="text-center font-semibold text-[var(--navy)]">{g.label}</div>
                    </OptionCard>
                  ))}
                </div>
                <ContinueBar canContinue={canContinue} onNext={next} />
              </QuizCard>
            )}

            {step === 3 && (
              <QuizCard title="Quanto tempo por dia você quer estudar?">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                  {DAILY_TIME.map((t) => (
                    <OptionCard
                      key={t}
                      selected={store.dailyTime === t}
                      onClick={() => store.setDailyTime(t)}
                    >
                      <div className="text-center font-semibold text-[var(--navy)]">{t}</div>
                    </OptionCard>
                  ))}
                </div>
                <ContinueBar canContinue={canContinue} onNext={next} />
              </QuizCard>
            )}

            {step === 4 && (
              <QuizCard title="Quantas vezes por semana você quer estudar?">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-2xl mx-auto">
                  {WEEKLY_DAYS.map((d) => (
                    <OptionCard
                      key={d}
                      selected={store.weeklyDays === d}
                      onClick={() => store.setWeeklyDays(d)}
                    >
                      <div className="text-center font-semibold text-[var(--navy)] text-lg">
                        {d}
                      </div>
                      <div className="text-center text-xs text-muted-foreground mt-1">
                        {d === 1 ? "dia" : "dias"}
                      </div>
                    </OptionCard>
                  ))}
                </div>
                <ContinueBar canContinue={canContinue} onNext={next} />
              </QuizCard>
            )}

            {step === 5 && (
              <QuizCard title="Qual olimpíada você quer estudar?">
                <div className="flex items-start gap-2 text-xs text-muted-foreground bg-primary-softer border border-border rounded-xl px-4 py-3 mb-6 max-w-3xl mx-auto">
                  <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    OBMEP, Canguru, OLITEF e OBA já estão disponíveis. A inscrição nas quatro
                    competições é realizada pela escola.
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
                  {olympiads.map((o) => {
                    const available = isOlympiadAvailable(o);
                    return (
                      <OptionCard
                        key={o.id}
                        selected={available && store.olympiad === o.id}
                        disabled={!available}
                        onClick={available ? () => store.setOlympiad(o.id) : undefined}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                            style={{ backgroundColor: o.color }}
                          >
                            {o.acronym.slice(0, 3)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <div className="font-semibold text-[var(--navy)] truncate">
                                {o.acronym}
                              </div>
                              <span
                                className={[
                                  "text-[10px] font-bold uppercase tracking-wide rounded-full px-2 py-1 whitespace-nowrap",
                                  available
                                    ? "bg-success-soft text-success"
                                    : "bg-muted text-muted-foreground",
                                ].join(" ")}
                              >
                                {available ? "Disponível" : "Base em preparação"}
                              </span>
                            </div>
                            <div className="text-sm text-muted-foreground truncate">
                              {o.subject}
                            </div>
                            <div className="text-xs text-muted-foreground/80 mt-0.5">{o.range}</div>
                            <div className="text-xs text-muted-foreground mt-2">
                              {o.registrationNote}
                            </div>
                          </div>
                        </div>
                      </OptionCard>
                    );
                  })}
                </div>
                <ContinueBar canContinue={canContinue} onNext={next} />
              </QuizCard>
            )}
            {step === 6 && (
              <QuizCard
                title="Quando será sua prova?"
                subtitle="Informe a data divulgada pela sua escola para a etapa que você vai fazer."
              >
                <div className="max-w-md mx-auto space-y-3">
                  <label htmlFor="exam-date" className="text-sm font-semibold">
                    Data da prova (incluindo o ano)
                  </label>
                  <Input
                    id="exam-date"
                    type="date"
                    min={localDate()}
                    value={store.examDate ?? ""}
                    onChange={(event) => store.setExamDate(event.target.value)}
                    className="h-14 rounded-xl border-2"
                  />
                  <p className="text-sm text-muted-foreground">
                    Escolha uma data futura. O plano respeita seu tempo disponível e informa se há
                    conteúdos que não cabem até a prova.
                  </p>
                </div>
                <ContinueBar canContinue={canContinue} onNext={next} ctaLabel="Gerar meu plano" />
              </QuizCard>
            )}
          </>
        )}

        {phase === "loading" && <LoadingPlan pct={loadingPct} />}

        {phase === "done" && <PlanReady onAccess={() => navigate({ to: "/inicio" })} />}
      </main>
    </div>
  );
}

function ContinueBar({
  canContinue,
  onNext,
  ctaLabel = "Continuar",
}: {
  canContinue: boolean;
  onNext: () => void;
  ctaLabel?: string;
}) {
  return (
    <div className="max-w-md mx-auto mt-8">
      <Button
        onClick={onNext}
        disabled={!canContinue}
        className="w-full h-14 rounded-xl text-base font-semibold gap-2"
      >
        {ctaLabel} <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
}

function LoadingPlan({ pct }: { pct: number }) {
  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-border rounded-3xl shadow-[var(--shadow-card)] p-10 text-center">
      <div className="h-16 w-16 mx-auto rounded-2xl bg-primary-soft flex items-center justify-center mb-6">
        <Sparkles className="h-7 w-7 text-primary animate-pulse" />
      </div>
      <h2 className="text-2xl font-bold">Carregando seu plano</h2>
      <p className="text-muted-foreground mt-2">
        Estamos organizando sua rotina de estudos personalizada. Isso pode levar alguns segundos.
      </p>
      <div className="mt-8 h-2 w-full bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-150"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 text-xs text-muted-foreground">{pct}%</div>
    </div>
  );
}

function PlanReady({ onAccess }: { onAccess: () => void }) {
  const { name, grade, dailyTime, weeklyDays, olympiad, examDate } = useQuizStore();
  const g = findGrade(grade);
  const o = findOlympiad(olympiad);
  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-border rounded-3xl shadow-[var(--shadow-card)] p-10">
      <div className="text-center">
        <div className="h-16 w-16 mx-auto rounded-2xl bg-success-soft flex items-center justify-center mb-6">
          <Sparkles className="h-7 w-7 text-success" />
        </div>
        <h2 className="text-3xl font-bold">Seu plano está pronto</h2>
        <p className="text-muted-foreground mt-2">
          {name ? `${name}, ` : ""}sua rotina personalizada está organizada.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-primary-softer p-6 space-y-3">
        <SummaryRow label="Ano escolar" value={g?.label ?? "-"} />
        <SummaryRow label="Data da prova" value={examDate ? formatDate(examDate) : "-"} />
        <SummaryRow label="Tempo por dia" value={dailyTime ?? "-"} />
        <SummaryRow
          label="Dias por semana"
          value={weeklyDays ? `${weeklyDays} ${weeklyDays === 1 ? "dia" : "dias"}` : "-"}
        />
        <SummaryRow label="Olimpíada escolhida" value={o ? `${o.acronym} · ${o.subject}` : "-"} />
      </div>

      <Button
        onClick={onAccess}
        className="mt-8 w-full h-14 rounded-xl text-base font-semibold gap-2"
      >
        Acessar meu plano <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold text-[var(--navy)]">{value}</span>
    </div>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/logo-via-olimpica.jpeg"
        alt="Logo oficial da Via Olímpica"
        className="h-12 w-12 shrink-0 object-contain"
      />

      <div className="leading-tight">
        <div className="text-base font-bold text-[var(--navy)]">Via Olímpica</div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Plano de estudos
        </div>
      </div>
    </div>
  );
}

function DecorShapes() {
  return (
    <>
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary-soft blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-success-soft blur-3xl opacity-70" />
      <svg
        className="pointer-events-none absolute top-12 right-12 opacity-60"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M60 8c20 14 44 26 44 52s-24 38-44 52C40 98 16 86 16 60S40 22 60 8z"
          fill="oklch(0.93 0.05 250)"
        />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-16 left-8 opacity-60"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="42" fill="oklch(0.93 0.08 155 / 0.7)" />
      </svg>
    </>
  );
}

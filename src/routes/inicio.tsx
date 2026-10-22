import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, CalendarDays, Sparkles, ChevronRight, Target, ArrowRight } from "lucide-react";
import { AppShell } from "@/features/dashboard/components/AppShell";
import { useQuizStore } from "@/features/quiz/store";
import { findOlympiad } from "@/features/quiz/data";

export const Route = createFileRoute("/inicio")({
  head: () => ({ meta: [{ title: "Início — Via Olímpica" }] }),
  component: InicioPage,
});

function InicioPage() {
  const { name, olympiad, dailyTime, weeklyDays } = useQuizStore();
  const o = findOlympiad(olympiad);
  const firstName = (name || "Aluno").split(" ")[0];

  return (
    <AppShell
      title={<>Olá, {firstName}! <span className="inline-block">👋</span></>}
      subtitle="Seu próximo passo rumo à olimpíada começa aqui."
    >
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.45_0.2_265)] text-white p-8 md:p-10 shadow-[var(--shadow-hero)] mb-8">
        
{/* Fundo premium azul, turquesa e verde */}
<svg
  className="pointer-events-none absolute inset-0 h-full w-full"
  viewBox="0 0 1100 280"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <defs>
    <linearGradient id="heroDeepBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0755C9" />
      <stop offset="42%" stopColor="#0646AD" />
      <stop offset="100%" stopColor="#041F65" />
    </linearGradient>
    <linearGradient id="heroBrightWave" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#0766C8" />
      <stop offset="55%" stopColor="#00A9DF" />
      <stop offset="100%" stopColor="#00D4B3" />
    </linearGradient>
    <linearGradient id="heroVibrantGreen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#009EBB" />
      <stop offset="55%" stopColor="#00C99A" />
      <stop offset="100%" stopColor="#00E66B" />
    </linearGradient>
    <radialGradient id="heroLight">
  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.48" />
  <stop offset="22%" stopColor="#C8F4FF" stopOpacity="0.36" />
  <stop offset="55%" stopColor="#42BFFF" stopOpacity="0.18" />
  <stop offset="100%" stopColor="#087CFF" stopOpacity="0" />
</radialGradient>
  </defs>

  {/* Fundo azul profundo */}
  <rect width="1100" height="280" fill="url(#heroDeepBlue)" />

  {/* Brilho localizado na região da ilustração */}
  <ellipse cx="850" cy="145" rx="300" ry="210" fill="url(#heroLight)" />

  {/* Arcos delicados de profundidade */}
  <g fill="none" stroke="#1688FF" strokeWidth="1.5">
    <path d="M 400 280 C 570 60 830 -90 1100 100" opacity="0.22" />
    <path d="M 480 280 C 660 85 870 -20 1100 125" opacity="0.28" />
    <path d="M 560 280 C 720 115 920 30 1100 150" opacity="0.34" />
    <path d="M 640 280 C 790 145 960 75 1100 175" opacity="0.22" />
  </g>

  {/* Profundidade azul-escura */}
  <path
    d="M 470 280 C 660 195 875 115 1100 175 L 1100 280 Z"
    fill="#05368E"
    opacity="0.55"
  />

  {/* Onda azul-turquesa intensa */}
  <path
    d="M 590 280 C 755 190 925 150 1100 195 L 1100 280 Z"
    fill="url(#heroBrightWave)"
    opacity="0.95"
  />

  {/* Onda verde vibrante */}
  <path
    d="M 770 280 C 900 205 1015 190 1100 218 L 1100 280 Z"
    fill="url(#heroVibrantGreen)"
  />

  {/* Reflexo verde luminoso */}
  <path
    d="M 770 280 C 900 205 1015 190 1100 218"
    fill="none"
    stroke="#5CFFCA"
    strokeWidth="2"
    opacity="0.7"
  />

  {/* Estrela original — somente computador */}
<g className="hidden md:block">
  <path
    d="M 1055 27
       C 1057 47 1060 51 1072 55
       C 1060 59 1057 63 1055 83
       C 1053 63 1050 59 1038 55
       C 1050 51 1053 47 1055 27 Z"
    fill="white"
    opacity="0.95"
  />
  <circle cx="1080" cy="31" r="1.8" fill="white" opacity="0.8" />
</g>
  
</svg>
{/* Estrela exclusiva para celular */}
<svg
  className="pointer-events-none absolute right-5 top-5 z-10 h-9 w-9 md:hidden"
  viewBox="0 0 40 40"
  fill="none"
  aria-hidden="true"
>
  <path
    d="M20 2 C22 15 25 18 38 20 C25 22 22 25 20 38 C18 25 15 22 2 20 C15 18 18 15 20 2 Z"
    fill="white"
    opacity="0.95"
  />
</svg>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-medium bg-white/15 backdrop-blur px-3 py-1 rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> {o ? "Plano ativo" : "Seu plano de estudos"}
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight !text-white">
              {o ? o.acronym : "Seu plano"}
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              <Stat icon={Clock} label={`${dailyTime ?? "—"} por dia`} />
              <Stat icon={CalendarDays} label={`${weeklyDays ?? "—"} dias por semana`} />
            </div>
          
          <Link
  to="/cronograma"
  className="mt-6 inline-flex w-fit items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-[#073B96] shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg active:scale-[0.98]"
>
  Continuar estudo
  <ArrowRight className="h-5 w-5" />
</Link></div>
          <HeroIllustration />
        </div>
        <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      </div>

      {/* Indicadores: sem datas ou resultados inventados. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <IndicatorCard icon={CalendarDays} title="Próxima prova" message="Data da prova não disponível" description="A data da prova ainda não está vinculada a este painel." />
        <IndicatorCard icon={Target} title="Meta semanal" message="Acompanhamento ainda não disponível" description="Os dias concluídos da semana ainda não estão integrados a este painel." iconClassName="bg-success-soft text-success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white border border-border rounded-3xl shadow-[var(--shadow-soft)] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h3 className="text-lg font-bold">Cronograma de hoje</h3>
            <Link to="/cronograma" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1 py-2">
              Ver cronograma <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="font-semibold text-[var(--navy)]">As atividades de hoje ainda não estão vinculadas a este painel.</p>
          <p className="mt-3 text-sm text-muted-foreground">Abra seu cronograma para consultar as sessões e marcar suas conclusões.</p>
        </section>

        <section className="bg-white border border-border rounded-3xl shadow-[var(--shadow-soft)] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h3 className="text-lg font-bold">Meu progresso</h3>
            <Link to="/cronograma" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1 py-2">
              Ver conclusões <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="font-semibold text-[var(--navy)]">Resumo do progresso ainda não disponível neste painel.</p>
          <p className="mt-3 text-sm text-muted-foreground">Consulte suas marcações no cronograma. Este painel ainda não calcula o percentual do seu plano.</p>
          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-success-soft/60 border border-success/20 p-4">
            <Target className="h-5 w-5 text-success shrink-0" />
            <p className="text-sm text-[var(--navy)]/80">Cada sessão concluída aproxima você da sua meta!</p>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function Stat({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon className="h-4 w-4" /> {label}
    </span>
  );
}


function IndicatorCard({ icon: Icon, title, message, description, iconClassName = "bg-primary-soft text-primary" }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  message: string;
  description: string;
  iconClassName?: string;
}) {
  return (
    <section className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)]">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-muted-foreground">{title}</h3>
        <p className="mt-2 text-lg font-bold text-[var(--navy)]">{message}</p>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <img
      src="/ilustracao-plano.png"
      alt="Alvo de estudos e calendário"
      className="hidden sm:block w-72 h-auto shrink-0 object-contain"
    />
  );
}

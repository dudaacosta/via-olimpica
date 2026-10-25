import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Compass, Sparkles } from "lucide-react";
import { useQuizStore } from "@/features/quiz/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Via Olímpica — Seu caminho começa com um plano",
      },
      {
        name: "description",
        content: "Prepare-se para olimpíadas brasileiras com um plano de estudos personalizado.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  const completed = useQuizStore((state) => state.completed);

  function handleAccessPlan() {
    if (completed) {
      navigate({ to: "/inicio" });
    } else {
      window.alert(
        "Ainda não encontramos um plano neste navegador. Crie seu primeiro plano para começar!",
      );
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#102B60]">
      {/* Decoração orgânica da página inicial */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Curva azul superior esquerda */}
        <svg
          className="absolute left-0 top-0 h-72 w-[440px] max-w-[75vw]"
          viewBox="0 0 440 288"
          fill="none"
        >
          <path d="M0 0H440C410 88 350 115 265 130C130 155 115 245 0 275V0Z" fill="#E5F0FF" />
          <path
            d="M0 0H390C365 92 295 132 210 154C115 178 78 232 0 250"
            stroke="#D3E5FF"
            strokeWidth="2"
          />
        </svg>

        {/* Forma verde lateral */}
        <div className="absolute -right-32 top-[28%] h-80 w-56 rounded-full bg-[#E4F5EA] opacity-80" />

        {/* Curva azul inferior */}
        <svg
          className="absolute bottom-0 left-0 h-48 w-full"
          viewBox="0 0 1200 190"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 145C150 65 265 180 390 145C520 110 590 185 720 150C900 95 1010 175 1200 100V190H0Z"
            fill="#EAF3FF"
          />
          <path
            d="M720 190C850 85 940 170 1040 135C1110 110 1160 115 1200 90V190H720Z"
            fill="#E8F7EF"
          />
        </svg>

        {/* Pontinhos delicados */}
        <div
          className="absolute bottom-14 left-8 hidden h-28 w-36 opacity-50 md:block"
          style={{
            backgroundImage: "radial-gradient(circle, #78B0F5 1.5px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Linhas curvas inferiores */}
        <svg
          className="absolute bottom-0 right-0 hidden h-44 w-80 md:block"
          viewBox="0 0 320 176"
          fill="none"
        >
          {[0, 12, 24, 36, 48].map((offset) => (
            <path
              key={offset}
              d={`M0 ${176 + offset} Q160 ${-15 + offset} 320 ${75 + offset}`}
              stroke="#B7D6FA"
              strokeWidth="1.5"
              opacity="0.65"
            />
          ))}
        </svg>
      </div>{" "}
      {/* Cabeçalho */}
      <header className="relative z-10 flex w-full items-center justify-between px-5 py-6 md:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-via-olimpica.jpeg"
            alt="Via Olímpica"
            className="h-12 w-12 rounded-lg object-contain"
          />

          <div>
            <div className="text-lg font-bold tracking-tight">Via Olímpica</div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
              Plano de estudos
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-semibold text-[#0756E8]">
            Início
          </Link>

          <Link
            to="/olimpiadas"
            className="text-sm font-medium text-slate-600 hover:text-[#0756E8]"
          >
            Olimpíadas
          </Link>

          <a
            href="#como-funciona"
            className="text-sm font-medium text-slate-600 hover:text-[#0756E8]"
          >
            Como funciona
          </a>

          <button
            type="button"
            onClick={handleAccessPlan}
            className="rounded-xl bg-[#EEF4FF] px-5 py-2.5 text-sm font-semibold text-[#0756E8] transition hover:bg-[#DFEAFF]"
          >
            Acessar meu plano
          </button>
        </nav>

        <button
          type="button"
          onClick={handleAccessPlan}
          className="rounded-xl bg-[#EEF4FF] px-4 py-2.5 text-sm font-semibold text-[#0756E8] md:hidden"
        >
          Entrar
        </button>
      </header>
      {/* Apresentação principal */}
      <main className="relative z-10 mx-auto grid min-h-[70vh] w-full max-w-7xl items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:gap-16 md:px-12 md:pt-16">
        {/* Logo principal */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[75%] w-[75%] rounded-full bg-[#EAF3FF] opacity-60 blur-3xl" />

          <img
            src="/logo-via-olimpica.jpeg"
            alt="Símbolo oficial da Via Olímpica"
            className="relative z-10 w-full max-w-[430px] rounded-3xl object-contain md:max-w-[520px]"
          />
        </div>

        {/* Textos e botões */}
        <div className="flex flex-col items-start">
          <div className="mb-4 inline-flex items-center gap-2 text-base md:text-lg font-semibold text-[#4CAF50]">
            <Sparkles className="h-4 w-4" />
            Seu caminho começa com um plano.
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-[#09275A] sm:text-6xl lg:text-7xl">
            Via Olímpica
          </h1>
          <h2 className="mt-5 max-w-xl text-xl font-semibold leading-snug text-[#183762] md:text-2xl">
            Conquiste uma medalha olímpica para transformar o seu futuro.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-500 md:text-lg">
            Descubra os conteúdos de cada olimpíada brasileira e crie um plano de estudos
            personalizado para sua rotina, seus objetivos e seu ritmo.
          </p>

          <div className="mt-9 flex w-full flex-col items-start gap-4 xl:w-max xl:flex-row">
            <Link
              to="/entrar"
              className="inline-flex w-full shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-[#0964E8] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-200/60 transition hover:bg-[#0754C6] sm:w-auto sm:px-7 sm:text-base"
            >
              Criar meu plano personalizado
              <ArrowRight className="h-5 w-5" />
            </Link>

            <button
              type="button"
              onClick={handleAccessPlan}
              className="inline-flex w-full shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-xl border border-[#D5E2F5] bg-white px-5 py-4 text-sm font-semibold text-[#0756C9] transition hover:bg-[#F3F7FF] sm:w-auto sm:px-7 sm:text-base"
            >
              Acessar meu plano
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-[#329A52]" />
            Seu planejamento, no seu ritmo.
          </div>
        </div>
      </main>
      {/* Como funciona */}
      <section
        id="como-funciona"
        className="relative z-10 border-t border-[#E9EFF7] bg-[#F8FBFF] px-6 py-16 md:px-12"
      >
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-3 flex justify-center">
            <Compass className="h-7 w-7 text-[#0756E8]" />
          </div>

          <h2 className="text-3xl font-bold text-[#09275A]">Seu próximo passo começa aqui</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Escolha sua olimpíada, informe sua disponibilidade e acompanhe um cronograma
            personalizado para seus estudos.
          </p>
        </div>
      </section>
    </div>
  );
}

import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  House,
  Trophy,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  UserRound,
} from "lucide-react";
import { AppSidebar } from "./AppSidebar";

interface Props {
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
}

export function AppShell({ title, subtitle, children, action }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const mobileItems = [
    { to: "/inicio", label: "Início", icon: House },
    { to: "/olimpiadas", label: "Olimpíadas", icon: Trophy },
    { to: "/cronograma", label: "Cronograma", icon: CalendarDays },
    { to: "/progresso", label: "Progresso", icon: ChartNoAxesColumnIncreasing },
    { to: "/perfil", label: "Perfil", icon: UserRound },
  ];
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <AppSidebar />
      {/* Navegação exclusiva para celular */}
      <div className="md:hidden">
        <div className="flex items-center justify-between border-b border-border bg-white px-5 py-4">
          <Link
            to="/inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <img
              src="/logo-via-olimpica.jpeg"
              alt="Via Olímpica"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-[var(--navy)]">Via Olímpica</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            className="rounded-xl border border-border p-2 text-[var(--navy)]"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-b border-border bg-white px-4 py-3" aria-label="Menu principal">
            {mobileItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={[
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium",
                    active ? "bg-primary-soft text-primary" : "text-[var(--navy)] hover:bg-muted",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
      <main className="flex-1 min-w-0">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-12">
          <header className="flex items-start justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy)] tracking-tight">
                {title}
              </h1>
              {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
            </div>
            {action}
          </header>
          {children}
        </div>
      </main>
    </div>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { House, Trophy, CalendarDays, ChartNoAxesColumnIncreasing, UserRound } from "lucide-react";
import type { ComponentType } from "react";

type NavItem = { to: string; label: string; icon: ComponentType<{ className?: string }> };


const items: NavItem[] = [
  { to: "/inicio", label: "Início", icon: House },
  { to: "/olimpiadas", label: "Olimpíadas", icon: Trophy },
  { to: "/cronograma", label: "Cronograma", icon: CalendarDays },
  { to: "/progresso", label: "Progresso", icon: ChartNoAxesColumnIncreasing },
  { to: "/perfil", label: "Perfil", icon: UserRound },
];


export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden md:flex w-[272px] shrink-0 flex-col bg-sidebar border-r border-sidebar-border min-h-screen sticky top-0">
      <div className="px-4 py-8 border-b border-sidebar-border">
        <Link to="/inicio" className="flex items-center gap-2">
<img
  src="/logo-via-olimpica.jpeg"
  alt="Logo Via Olímpica"
  className="h-20 w-20 shrink-0 object-contain"
/>
          <div className="leading-tight">
            <div className="font-bold text-[var(--navy)] text-[22px] whitespace-nowrap">Via Olímpica</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">plano de estudos</div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {items.map((it) => {
          const active = pathname === it.to || pathname.startsWith(it.to + "/");
          const Icon = it.icon;
          return (
            <Link
              key={it.to}
              to={it.to}
              className={[
                "relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                active
                  ? "bg-primary-soft text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-[var(--navy)]",
              ].join(" ")}
            >
              {active && (
                <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-primary" />
              )}
              <Icon
  className={["h-6 w-6 stroke-[2.2]", active ? "text-primary" : "text-[#14213D]"].join(" ")}
/>
              {it.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-5 border-t border-sidebar-border text-xs text-muted-foreground">
        © Via Olímpica
      </div>
    </aside>
  );
}

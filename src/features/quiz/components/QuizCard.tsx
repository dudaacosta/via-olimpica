import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function QuizCard({ title, subtitle, children, footer }: Props) {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-border rounded-3xl shadow-[var(--shadow-card)] p-8 md:p-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy)] tracking-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-3 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
      </div>
      <div>{children}</div>
      {footer && <div className="mt-8">{footer}</div>}
    </div>
  );
}

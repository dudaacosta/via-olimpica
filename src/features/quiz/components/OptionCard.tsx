import type { ReactNode } from "react";

interface OptionCardProps {
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function OptionCard({ selected, disabled = false, onClick, children, className = "" }: OptionCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "group w-full text-left rounded-2xl border-2 px-5 py-4 transition-all duration-200",
        "bg-white",
        disabled
          ? "cursor-not-allowed border-border opacity-65"
          : selected
            ? "border-primary bg-primary-soft shadow-[0_0_0_4px_var(--primary-softer)]"
            : "border-border hover:border-primary/40 hover:bg-primary-softer hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]",
        !disabled && "active:translate-y-0",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
}

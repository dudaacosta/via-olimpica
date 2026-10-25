import { Check } from "lucide-react";

interface Props {
  current: number; // 1-based current step
  total: number;
}

export function QuizProgress({ current, total }: Props) {
  const steps = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex items-center w-full max-w-3xl mx-auto">
      {steps.map((s, i) => {
        const done = s < current;
        const active = s === current;
        return (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <div
              className={[
                "h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all shrink-0",
                done && "bg-success border-success text-white",
                active &&
                  "bg-primary border-primary text-primary-foreground shadow-[0_0_0_6px_var(--primary-soft)]",
                !done && !active && "bg-white border-border text-muted-foreground",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {done ? <Check className="h-4 w-4" /> : s}
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-[2px] mx-2 rounded-full bg-border relative overflow-hidden">
                <div
                  className={[
                    "absolute inset-y-0 left-0 transition-all",
                    done ? "w-full bg-success" : active ? "w-1/2 bg-primary" : "w-0",
                  ].join(" ")}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

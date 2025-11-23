"use client";

import { Dumbbell, Brain } from "lucide-react";

type CalendarActionButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
};

export const CalendarActionButton = ({
  label,
  variant = "secondary",
}: CalendarActionButtonProps) => {
  const base =
    "group flex-1 rounded-xl px-4 py-3 text-left text-slate-100 border bg-[#18181f] transition-colors duration-150";

  const variantClass =
    variant === "primary"
      ? "border-red-600/70 hover:border-red-400 hover:bg-[#21181f]"
      : "border-slate-700 hover:border-slate-400 hover:bg-[#1f1f27]";

  const iconColor = variant === "primary" ? "text-red-400" : "text-slate-400";
  const Icon = variant === "primary" ? Dumbbell : Brain;

  return (
    <button type="button" className={`${base} ${variantClass}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-100 group-hover:text-slate-50">
          {label}
        </span>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
    </button>
  );
};

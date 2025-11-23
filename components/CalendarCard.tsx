import { CalendarActionButton } from "@/components/CalendarActionButton";

export const CalendarCard = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#1f1f23] p-5 shadow-sm shadow-black/40">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-lg uppercase tracking-widest text-slate-500">
            Training Calendar
          </p>
        </div>
      </div>

      <div className="mt-4 flex h-60 items-center justify-center rounded-xl bg-[#18181f] text-xs text-slate-500">
        後で実装
      </div>

      <div className="mt-5 flex flex-row gap-3">
        <CalendarActionButton label="Workout" variant="primary" />
        <CalendarActionButton label="AI Menu" variant="secondary" />
      </div>
    </section>
  );
};

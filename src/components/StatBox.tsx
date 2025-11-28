export const StatBox = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-[#18181f] px-4 py-3">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-slate-50">{value}</p>
    </div>
  );
};

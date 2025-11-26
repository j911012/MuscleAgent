const today = new Date();
const weekday = today.toLocaleString("en-US", { weekday: "short" });
const dateLabel = today.toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const PlaceholderCard = ({
  label,
  height = "h-56",
}: {
  label: string;
  height?: string;
}) => (
  <div
    className={`rounded-2xl border border-white/10 bg-[#1f1f23] p-4 text-sm text-slate-400 ${height}`}
  >
    {label}
  </div>
);

const WeeklyTrendCard = () => {
  const bars = [
    { label: "今週", ratio: 0.9 },
    { label: "1週前", ratio: 1.0 },
    { label: "2週前", ratio: 0.7 },
    { label: "3週前", ratio: 0.5 },
    { label: "4週前", ratio: 0.4 },
    { label: "5週前", ratio: 0.3 },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#1f1f23] p-4 text-sm text-slate-300 flex flex-col justify-between">
      <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Recent Progress
        </p>
        <div className="rounded-xl border border-white/10 bg-[#18181f] px-3 py-2 text-right">
          <p className="text-slate-200">This week</p>
          <p className="text-base font-semibold text-slate-50">12.4 t</p>
        </div>
      </div>
      <div>
        <div className="mt-4 flex items-end gap-3">
          {bars.map((bar) => (
            <div
              key={bar.label}
              className="flex flex-col items-center gap-2 text-xs text-slate-500"
            >
              <div
                className="w-3 rounded-full bg-gradient-to-t from-red-900 to-red-500"
                style={{ height: `${Math.max(0.2, bar.ratio) * 80}px` }}
              />
              <span>{bar.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#18181f] px-4 py-3 text-xs text-slate-400">
          <div className="text-right">
            <p className="text-slate-200">Monthly total</p>
            <p className="text-base font-semibold text-slate-50">48.6 t</p>
          </div>
          <div className="text-right">
            <p className="text-slate-200">All-time total</p>
            <p className="text-base font-semibold text-slate-50">205.8 t</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-2xl border border-white/10 bg-[#1f1f23] p-6 text-slate-300">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Today
            </p>
            <p className="mt-1 text-2xl font-semibold text-slate-50">
              {dateLabel}{" "}
              <span className="text-base text-slate-400">({weekday})</span>
            </p>
            <div className="mt-3 grid gap-3 text-xs text-slate-400 sm:grid-cols-2 lg:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#18181f] px-4 py-3">
                <p className="text-slate-200">Monthly archive</p>
                <p className="text-base font-semibold text-slate-50">8 days</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#18181f] px-4 py-3">
                <p className="text-slate-200">Total days</p>
                <p className="text-base font-semibold text-slate-50">
                  148 days
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:w-64">
            <button className="rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
              今日のトレーニングを記録
            </button>
            <button className="rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-slate-200 hover:border-white/30">
              AIメニュー（Coming soon）
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#1f1f23] p-4">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Calendar
            </p>
          </div>
          <PlaceholderCard label="Calendar grid placeholder" height="h-72" />
        </div>

        <WeeklyTrendCard />
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#1f1f23] p-4">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
          Today&apos;s Sessions
        </p>
        <PlaceholderCard label="今日の記録一覧 placeholder" height="h-40" />
      </section>
    </div>
  );
}

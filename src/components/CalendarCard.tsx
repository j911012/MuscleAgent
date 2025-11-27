import { useMemo } from "react";

type CalendarCardProps = {
  viewDate: Date;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const CalendarCard = ({ viewDate }: CalendarCardProps) => {
  const todayStr = formatDate(new Date());
  const monthMatrix = useMemo(() => getMonthMatrix(viewDate), [viewDate]);

  return (
    <section className="rounded-2xl border border-white/10 bg-[#1f1f23] p-4">
      {/* ヘッダー */}
      <header className="mb-4 flex items-center justify-between text-sm text-slate-200">
        <button
          type="button"
          onClick={() => {}}
          className="rounded-full border border-white/15 px-3 py-1 text-xs hover:border-white/30"
        >
          Prev
        </button>
        <p className="font-semibold">{formatMonthTitle(viewDate)}</p>
        <button
          type="button"
          onClick={() => {}}
          className="rounded-full border border-white/15 px-3 py-1 text-xs hover:border-white/30"
        >
          Next
        </button>
      </header>

      {/* 曜日 */}
      <div className="grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-[0.2em] text-slate-500">
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      {/* 日付 */}
      <div className="mt-2 grid grid-cols-7 gap-2">
        {monthMatrix.map((date) => {
          const dateStr = formatDate(date);
          const isCurrentMonth = date.getMonth() === viewDate.getMonth();
          const isToday = dateStr === todayStr;

          return (
            <div
              key={dateStr}
              className={`flex h-14 flex-col items-center justify-center rounded-xl border border-transparent bg-[#18181f] text-sm ${
                isCurrentMonth ? "text-slate-200" : "text-slate-600/60"
              } ${isToday ? "text-red-400" : ""}`}
            >
              <span>{date.getDate()}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/**
 * 日付を "YYYY-MM-DD" にそろえる
 * @param date Date
 * @returns "YYYY-MM-DD"
 */
const formatDate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;

/**
 * "January 2025" みたいな 月のタイトル文字列を作る
 * @param date
 * @returns
 */
const formatMonthTitle = (date: Date) =>
  date.toLocaleString("en-US", { month: "long", year: "numeric" });

/**
 * カレンダーのマス目用の日付 42個を作る
 * @param viewDate
 * @returns
 */
const getMonthMatrix = (viewDate: Date) => {
  const start = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const startWeekday = start.getDay();
  const firstCell = new Date(start);
  firstCell.setDate(firstCell.getDate() - startWeekday);

  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(firstCell);
    d.setDate(firstCell.getDate() + i);
    return d;
  });
};

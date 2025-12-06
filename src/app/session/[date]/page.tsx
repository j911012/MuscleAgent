import { formatDateLabel } from "@/lib/data";
import Link from "next/link";

export default async function SessionPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const formattedDate = formatDateLabel(date);

  return (
    <div className="space-y-6">
      {/* 1. ページヘッダー */}
      <header className="flex flex-col gap-2 border-b border-white/10 pb-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Session
          </p>
          <h1 className="text-2xl font-semibold text-slate-50">
            {formattedDate}
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            今日のトレーニング内容を記録します
          </p>
        </div>
        <Link
          href="/dashboard"
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 hover:border-white/30"
        >
          ダッシュボードへ戻る
        </Link>
      </header>
    </div>
  );
}

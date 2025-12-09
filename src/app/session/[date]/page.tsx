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

      {/* 2. 部位／種目選択 */}
      <section className="rounded-2xl border border-white/10 bg-[#1f1f23] p-4 text-sm text-slate-400">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Step 1
        </p>
        <p className="font-semibold text-slate-200">部位・種目を選択</p>

        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-[#18181f] p-3 space-y-2">
            <label className="text-xs text-slate-500">部位</label>
            <select className="w-full rounded-lg bg-[#0f1117] px-3 py-2 text-slate-100">
              <option value="">選択してください</option>
              <option>胸</option>
              <option>背中</option>
              <option>脚</option>
              <option>肩</option>
              <option>腕</option>
              <option>体幹</option>
            </select>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#18181f] p-3 space-y-2">
            <label className="text-xs text-slate-500">種目</label>
            <select className="w-full rounded-lg bg-[#0f1117] px-3 py-2 text-slate-100 disabled:opacity-40">
              <option value="">選択してください</option>
              <option>ベンチプレス</option>
              <option>インクラインダンベルプレス</option>
              <option>加重プッシュアップ</option>
            </select>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500 disabled:opacity-50">
            種目を追加
          </button>
        </div>
      </section>
    </div>
  );
}

"use client";

import { formatDateLabel } from "@/lib/data";
import { bodyPartOptions, exerciseMaster } from "@/lib/exerciseData";
import Link from "next/link";
import { use, useState } from "react";

export default function SessionPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const [selectedPart, setSelectedPart] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");

  const { date } = use(params);
  const formattedDate = formatDateLabel(date);

  const exerciseOptions = selectedPart ? exerciseMaster[selectedPart] : [];

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
            <select
              value={selectedPart}
              onChange={(e) => {
                setSelectedPart(e.target.value);
                setSelectedExercise("");
              }}
              className="w-full rounded-lg bg-[#0f1117] px-3 py-2 text-slate-100"
            >
              <option value="">選択してください</option>
              {bodyPartOptions.map((part) => (
                <option key={part.value} value={part.value}>
                  {part.label}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#18181f] p-3 space-y-2">
            <label className="text-xs text-slate-500">種目</label>
            <select
              value={selectedExercise}
              onChange={(e) => {
                setSelectedExercise(e.target.value);
              }}
              disabled={!selectedPart}
              className="w-full rounded-lg bg-[#0f1117] px-3 py-2 text-slate-100 disabled:opacity-40"
            >
              <option value="">選択してください</option>
              {exerciseOptions.map((exercise) => (
                <option key={exercise.value} value={exercise.value}>
                  {exercise.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <button
            disabled={!selectedPart || !selectedExercise}
            className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white  hover:bg-red-600 hover:scale-[1.03] cursor-pointer disabled:opacity-50 disabled:scale-100 disabled:bg-slate-600 disabled:cursor-default"
          >
            種目を追加
          </button>
        </div>
      </section>

      {/* 3. トレーニングセッション */}
      <section className="rounded-2xl border border-white/10 bg-[#1f1f23] p-4 text-sm text-slate-300 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Step 2
            </p>
            <p className="font-semibold text-slate-200">セットを入力</p>
          </div>
          <button className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white cursor-pointer">
            セッションを完了
          </button>
        </div>

        {/* 種目カード */}
        <div className="space-y-3 rounded-xl border border-white/10 bg-[#18181f] p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">胸</p>
              <p className="text-base font-semibold text-slate-100">
                ベンチプレス
              </p>
            </div>
            <button className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-100 opacity-60 cursor-not-allowed">
              セットを追加
            </button>
          </div>

          {/* セット一覧 */}
          <div className="space-y-2">
            <div className="rounded-lg border border-white/10 bg-[#0f1117] p-3 space-y-2">
              <p className="text-xs text-slate-500">Set 1</p>
              <div className="grid grid-cols-2 gap-2 text-slate-100">
                <input
                  type="number"
                  placeholder="重量 (kg)"
                  className="rounded-md bg-[#1a1c23] px-3 py-2 text-sm opacity-60"
                />
                <input
                  type="number"
                  placeholder="回数"
                  className="rounded-md bg-[#1a1c23] px-3 py-2 text-sm opacity-60"
                />
              </div>
              <textarea
                placeholder="メモ"
                className="w-full rounded-md bg-[#1a1c23] px-3 py-2 text-sm text-slate-100 opacity-60"
                rows={2}
              />
            </div>
            <div className="rounded-lg border border-white/10 bg-[#0f1117] p-3 space-y-2">
              <p className="text-xs text-slate-500">Set 2</p>
              <div className="grid grid-cols-2 gap-2 text-slate-100">
                <input
                  type="number"
                  placeholder="重量 (kg)"
                  className="rounded-md bg-[#1a1c23] px-3 py-2 text-sm opacity-60"
                />
                <input
                  type="number"
                  placeholder="回数"
                  className="rounded-md bg-[#1a1c23] px-3 py-2 text-sm opacity-60"
                />
              </div>
              <textarea
                placeholder="メモ"
                className="w-full rounded-md bg-[#1a1c23] px-3 py-2 text-sm text-slate-100 opacity-60"
                rows={2}
              />
            </div>
            <div className="rounded-lg border border-white/10 bg-[#0f1117] p-3 space-y-2">
              <p className="text-xs text-slate-500">Set 3</p>
              <div className="grid grid-cols-2 gap-2 text-slate-100">
                <input
                  type="number"
                  placeholder="重量 (kg)"
                  className="rounded-md bg-[#1a1c23] px-3 py-2 text-sm opacity-60"
                />
                <input
                  type="number"
                  placeholder="回数"
                  className="rounded-md bg-[#1a1c23] px-3 py-2 text-sm opacity-60"
                />
              </div>
              <textarea
                placeholder="メモ"
                className="w-full rounded-md bg-[#1a1c23] px-3 py-2 text-sm text-slate-100 opacity-60"
                rows={2}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

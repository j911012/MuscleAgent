import { endOfWeek, startOfWeek, subWeeks } from "date-fns";
import { TrainingSession, TrainingSet } from "./model";

/**
 * １セットあたりの負荷（kg）　 = 重量 × 回数
 */
export const calcSetLoadKg = (weight: number, reps: number) => {
  return weight * reps;
};

/**
 * セッション全体の合計負荷（kg）
 */
export const calcSessionTotalLoadKg = (sets: TrainingSet[]) => {
  return sets.reduce(
    (sum, set) => sum + calcSetLoadKg(set.weight, set.reps),
    0
  );
};

/**
 * kg → tへ変換
 */
export const convertKgToTon = (kg: number, precision: number = 1) => {
  return Number(kg / 1000).toFixed(precision);
};

/**
 * 推定1RM
 */
export const estimateOneRm = (weight: number, reps: number) => {
  if (reps <= 1) return weight;
  return weight * (1 + reps / 40);
};

/**
 * 今月のトレーニング日数
 */
export const calcMonthlyTrainingDays = (
  sessions: TrainingSession[],
  yearMonth: string // "YYYY-MM"
) => {
  return sessions.filter((session) => session.date.startsWith(yearMonth))
    .length;
};

/**
 * 累計トレーニング日数
 */
export const calcTotalTrainingDays = (sessions: TrainingSession[]) => {
  return new Set(sessions.map((session) => session.date)).size;
};

/**
 * 月負荷合計
 */
export const calcMonthlyTotalLoad = (
  sessions: TrainingSession[],
  yearMonth: string
) => {
  return sessions
    .filter((session) => session.date.startsWith(yearMonth))
    .reduce((sum, session) => sum + session.totalLoadKg, 0);
};

/**
 * 累計負荷合計
 */
export const calcAllTimeTotalLoad = (sessions: TrainingSession[]) => {
  return sessions.reduce((sum, session) => sum + session.totalLoadKg, 0);
};

/**
 * 直近5週（今週〜4週前）の総負荷を算出
 */
export const buildWeeklyLoads = (
  sessions: TrainingSession[],
  referenceDate: Date
) => {
  return Array.from({ length: 5 }, (_, index) => {
    const base = subWeeks(referenceDate, index); // 基準日からindex週前の日付
    const start = startOfWeek(base, { weekStartsOn: 0 }); // 日曜日を起点にする
    const end = endOfWeek(base, { weekStartsOn: 0 }); // 土曜日を終点にする
    const label =
      index === 0 ? "This week" : `${index} week${index > 1 ? "s" : ""} ago`;

    const totalLoadKg =
      // 週内のセッションを抽出
      sessions
        .filter((session) => {
          const d = new Date(session.date);
          return d >= start && d <= end; // セッション日付が週の開始日から終了日の間にあるかどうか
        })
        .reduce((sum, session) => sum + session.totalLoadKg, 0); // 週内のセッションの合計負荷を計算

    return { label, totalLoadKg };
  }).reverse(); // 最新の週から古い週の順に並べ替える
};

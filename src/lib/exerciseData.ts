export const bodyPartOptions = [
  { value: "chest", label: "胸" },
  { value: "back", label: "背中" },
  { value: "legs", label: "脚" },
  { value: "shoulder", label: "肩" },
  { value: "arms", label: "腕" },
  { value: "core", label: "体幹" },
];

// プルダウンのオプション用の型
export type ExerciseOption = {
  value: string;
  label: string;
};

export const exerciseMaster: Record<string, ExerciseOption[]> = {
  chest: [
    { value: "bench_press", label: "ベンチプレス" },
    { value: "incline_db_press", label: "インクラインダンベルプレス" },
    { value: "weighted_pushup", label: "加重プッシュアップ" },
  ],
  back: [
    { value: "deadlift", label: "デッドリフト" },
    { value: "lat_pulldown", label: "ラットプルダウン" },
    { value: "single_arm_row", label: "片手ダンベルロウ" },
  ],
  legs: [
    { value: "squat", label: "スクワット" },
    { value: "rdl", label: "ルーマニアンデッドリフト" },
    { value: "split_squat", label: "ブルガリアンスクワット" },
  ],
  shoulder: [
    { value: "ohp", label: "オーバーヘッドプレス" },
    { value: "lateral_raise", label: "サイドレイズ" },
    { value: "arnold_press", label: "アーノルドプレス" },
  ],
  arms: [
    { value: "barbell_curl", label: "バーベルカール" },
    { value: "rope_pushdown", label: "ローププッシュダウン" },
    { value: "reverse_curl", label: "リバースカール" },
  ],
  core: [
    { value: "plank", label: "プランク" },
    { value: "hanging_leg_raise", label: "ハンギングレッグレイズ" },
    { value: "ab_wheel", label: "アブローラー" },
  ],
};

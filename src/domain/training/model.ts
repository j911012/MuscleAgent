/**
 * domain/training/models.ts
 * ドメイン層のエンティティ／値オブジェクト／リポジトリインターフェースを定義するファイル。
 * 副作用のない型定義のみを扱う。
 */
export type BodyPart =
  | "chest"
  | "back"
  | "shoulders"
  | "arms"
  | "legs"
  | "core";

export type ExerciseMenu = {
  id: string;
  userId: string;
  bodyPart: BodyPart;
  name: string;
  defaultSets?: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TrainingSession = {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD
  totalLoadKg: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TrainingSet = {
  id: string;
  sessionId: string;
  exerciseMenuId: string;
  setIndex: number;
  weight: number;
  reps: number;
  estimatedOneRm?: number | null;
  createdAt: Date;
  updatedAt: Date;
};

export type ExercisePersonalBest = {
  userId: string;
  exerciseMenuId: string;
  maxWeight: number;
  maxReps: number;
  maxOneRm: number;
};

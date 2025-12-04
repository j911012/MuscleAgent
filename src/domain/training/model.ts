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

export type TrainingSessionWithSets = TrainingSession & {
  sets: TrainingSet[];
};

export type ExercisePersonalBest = {
  userId: string;
  exerciseMenuId: string;
  maxWeight: number;
  maxReps: number;
  maxOneRm: number;
};

export interface TrainingSessionRepository {
  listByMonth(params: {
    userId: string;
    yearMonth: string;
  }): Promise<TrainingSessionWithSets[]>;

  findByDate(params: {
    userId: string;
    date: string;
  }): Promise<TrainingSessionWithSets | null>;

  save(session: TrainingSession, sets: TrainingSet[]): Promise<void>;
}

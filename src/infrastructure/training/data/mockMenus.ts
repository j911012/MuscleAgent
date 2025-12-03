import { ExerciseMenu, TrainingSessionWithSets } from "@/domain/training/model";

export const mockSessions: TrainingSessionWithSets[] = [
  {
    id: "1",
    userId: "1",
    date: "2025-11-25",
    totalLoadKg: 2200, // 下の sets の合計（load）の結果
    createdAt: new Date("2025-11-25"),
    updatedAt: new Date("2025-11-25"),
    sets: [
      // Bench Press
      {
        id: "1",
        sessionId: "1",
        exerciseMenuId: "1", // Bench Press
        setIndex: 1,
        weight: 60,
        reps: 10, // 60 * 10 = 600
        createdAt: new Date("2025-11-25"),
        updatedAt: new Date("2025-11-25"),
      },
      {
        id: "2",
        sessionId: "1",
        exerciseMenuId: "1", // Bench Press
        setIndex: 2,
        weight: 60,
        reps: 8, // 60 * 8 = 480
        createdAt: new Date("2025-11-25"),
        updatedAt: new Date("2025-11-25"),
      },

      // Incline Dumbbell Press
      {
        id: "3",
        sessionId: "1",
        exerciseMenuId: "2", // Incline Dumbbell Press
        setIndex: 3,
        weight: 40,
        reps: 10, // 40 * 10 = 400
        createdAt: new Date("2025-11-25"),
        updatedAt: new Date("2025-11-25"),
      },

      // Chest Fly
      {
        id: "4",
        sessionId: "1",
        exerciseMenuId: "3", // Chest Fly
        setIndex: 4,
        weight: 30,
        reps: 12, // 30 * 12 = 360
        createdAt: new Date("2025-11-25"),
        updatedAt: new Date("2025-11-25"),
      },
      {
        id: "5",
        sessionId: "1",
        exerciseMenuId: "3", // Chest Fly
        setIndex: 5,
        weight: 30,
        reps: 12, // 30 * 12 = 360
        createdAt: new Date("2025-11-25"),
        updatedAt: new Date("2025-11-25"),
      },
    ],
  },
];

export const mockExerciseMenus: ExerciseMenu[] = [
  {
    id: "1",
    userId: "seed-user",
    bodyPart: "chest",
    name: "Bench Press",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    id: "2",
    userId: "seed-user",
    bodyPart: "chest",
    name: "Incline Dumbbell Press",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    id: "3",
    userId: "seed-user",
    bodyPart: "chest",
    name: "Chest Fly",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },

  {
    id: "4",
    userId: "seed-user",
    bodyPart: "back",
    name: "Lat Pulldown",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    id: "5",
    userId: "seed-user",
    bodyPart: "back",
    name: "Seated Row",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    id: "6",
    userId: "seed-user",
    bodyPart: "back",
    name: "Deadlift",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },

  {
    id: "7",
    userId: "seed-user",
    bodyPart: "shoulders",
    name: "Shoulder Press",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    id: "8",
    userId: "seed-user",
    bodyPart: "shoulders",
    name: "Lateral Raise",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },

  {
    id: "9",
    userId: "seed-user",
    bodyPart: "arms",
    name: "Biceps Curl",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    id: "10",
    userId: "seed-user",
    bodyPart: "arms",
    name: "Triceps Pushdown",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },

  {
    id: "11",
    userId: "seed-user",
    bodyPart: "legs",
    name: "Squat",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    id: "12",
    userId: "seed-user",
    bodyPart: "legs",
    name: "Leg Press",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    id: "13",
    userId: "seed-user",
    bodyPart: "legs",
    name: "Leg Curl",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
  {
    id: "14",
    userId: "seed-user",
    bodyPart: "legs",
    name: "Leg Extension",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },

  {
    id: "15",
    userId: "seed-user",
    bodyPart: "core",
    name: "Plank",
    defaultSets: 3,
    createdAt: new Date("2025-01-01T00:00:00.000Z"),
    updatedAt: new Date("2025-01-01T00:00:00.000Z"),
  },
];

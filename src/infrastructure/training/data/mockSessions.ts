import { TrainingSessionWithSets } from "@/domain/training/model";

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

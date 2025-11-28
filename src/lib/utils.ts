import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * クラス名をマージする
 * @param inputs
 * @returns
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

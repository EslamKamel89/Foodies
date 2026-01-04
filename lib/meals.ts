import sql from "better-sqlite3";
import { Meal } from "./db";
const db = sql("meals.db");
export async function sleep(milliseconds: number) {
  await new Promise((r) => {
    setTimeout(r, milliseconds);
  });
}
export async function getMeals(): Promise<Meal[]> {
  await sleep(1000);
  // const num = Math.random();
  // if (num > 0.5) {
  //   throw new Error("Couldn't fetch the meals");
  // }
  return db.prepare(`SELECT * FROM meals`).all() as Meal[];
}

export async function getMealBySlug(slug: string): Promise<Meal | null> {
  await sleep(1000);
  const meal = db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
  return (meal ?? null) as Meal | null;
}

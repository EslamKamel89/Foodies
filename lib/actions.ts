"use server";
import { getEmail, getOptionalFile, getString } from "@/lib/normalize";
import { slugify } from "@/lib/slug";
import { redirect } from "next/navigation";
import { createMeal } from "./meals";
import { saveFile } from "./save_file";
import { Meal, MealError, MealResult } from "./types";
async function getMealFromFormData(form: FormData): Promise<MealResult> {
  const errors: MealError = {};
  const title = getString(form, "title", errors);
  const file = getOptionalFile(form, "image", errors);
  const summary = getString(form, "summary", errors);
  const instructions = getString(form, "instructions", errors);
  const creator = getString(form, "creator", errors);
  const creator_email = getEmail(form, "creator_email", errors);
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  const slug = slugify(title!);
  const meal: Meal = {
    title,
    slug,
    summary,
    instructions,
    creator,
    creator_email,
    image: null,
  } as Meal;
  try {
    if (file) {
      meal.image = await saveFile(file);
    }
  } catch {
    return { errors: { image: "Failed to save image" } };
  }
  return { data: meal };
}
export async function shareMeal(formData: FormData) {
  const result = await getMealFromFormData(formData);
  if (result.errors) {
    return;
  }
  await createMeal(result.data);
  redirect("/meals");
}

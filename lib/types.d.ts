export type Meal = {
  id?: string;
  title: string;
  slug: string;
  image?: string | null;
  summary: string;
  instructions?: string | null;
  creator?: string | null;
  creator_email?: string | null;
};
export type MealError = { [k in keyof Meal]?: string };
export type MealResult =
  | { data: meal; errors?: never }
  | { data?: never; errors: MealError };

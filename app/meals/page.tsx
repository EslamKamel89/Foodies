import MealsGrid from "@/components/Meals/MealsGrid";
import MealsGridFallback from "@/components/Meals/MealsGridFallback";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
export const dynamic = "force-static";
export const revalidate = false;

const MealsPage = () => {
  return (
    <>
      <header className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold text-white">
          Delicious Meals created <span className="text-accent">BY YOU</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Choose your favorite recipe and cook it yourself. It&apos;s easy and
          fun!
        </p>

        <p>
          <Link
            href="/meals/share"
            className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={MealsGridFallback()}>
          <MealsList />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;

async function MealsList() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

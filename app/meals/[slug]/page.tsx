import { getMealBySlug } from "@/lib/meals";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

const MealDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const meal = await getMealBySlug(slug);

  if (!meal) {
    return (
      <div className="text-center space-y-6 mt-24">
        <h2 className="text-3xl font-bold text-accent">Meal Not Found 🍽️</h2>
        <Link
          href="/meals"
          className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
        >
          Back to Meals
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-white">{meal.title}</h1>

        {meal.creator && (
          <p className="text-sm text-muted">
            A recipe by <span className="text-accent">{meal.creator}</span>
          </p>
        )}
      </header>

      <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/10">
        <Image
          src={meal.image}
          alt={meal.title}
          width={1000}
          height={600}
          className="object-cover w-full max-h-[480px]"
        />
      </div>

      <section className="text-white/90 leading-relaxed text-center max-w-2xl mx-auto">
        <p>{meal.summary}</p>
      </section>

      {meal.instructions && (
        <section className="bg-surface rounded-xl shadow-lg border border-white/10 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-accent">Instructions 🍴</h2>

          <div
            className="whitespace-pre-line text-white/80 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: meal.instructions }}
          ></div>

          {meal.creator_email && (
            <p className="text-muted text-xs">
              Have questions? Contact:{" "}
              <a
                href={`mailto:${meal.creator_email}`}
                className="text-accent underline"
              >
                {meal.creator_email}
              </a>
            </p>
          )}
        </section>
      )}

      {/* Back link */}
      <div className="text-center pt-6">
        <Link
          href="/meals"
          className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
        >
          ← Back to Meals
        </Link>
      </div>
    </article>
  );
};

export default MealDetails;

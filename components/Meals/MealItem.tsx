// components/Meals/MealItem.tsx
import Image from "next/image";
import Link from "next/link";
import { Meal } from "./MealsGrid";

const MealItem: React.FC<{ meal: Meal }> = ({
  meal: { image, title, creator, summary, slug },
}) => {
  return (
    <article className="bg-surface rounded-xl shadow-lg overflow-hidden border border-white/10 transition-transform hover:scale-[1.03] hover:shadow-2xl">
      <header className="relative h-48">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </header>

      <div className="p-4 space-y-3">
        <div>
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <p className="text-muted text-sm">by {creator}</p>
        </div>

        <p className="text-white/80 text-sm line-clamp-3">{summary}</p>

        <div className="pt-2">
          <Link
            href={`/meals/${slug}`}
            className="inline-block rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;

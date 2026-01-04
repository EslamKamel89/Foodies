"use client";

export default function MealsError({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center text-center gap-6 mt-20">
      <h2 className="text-2xl font-bold text-accent drop-shadow">
        Something went wrong! 😕
      </h2>

      <p className="text-muted max-w-md">
        We couldn’t load the meals right now. Please try again.
      </p>
      <h2 className="text-2xl font-bold text-accent drop-shadow">Details 🧾</h2>
      <p className="text-muted max-w-md">{error.message}</p>
      <button className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black hover:opacity-90 transition">
        Try Again
      </button>
    </div>
  );
}

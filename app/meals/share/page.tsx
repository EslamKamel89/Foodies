import ImagePicker from "@/components/Meals/ImagePicker";
import { Meal } from "@/lib/db";
import { getOptionalString, getString } from "@/lib/normalize";
import { slugify } from "@/lib/slug";

function getMealFromFormData(form: FormData): Meal {
  const title = getString(form, "title");
  const meal: Meal = {
    title: title,
    slug: slugify(title),
    summary: getString(form, "summary"),
    instructions: getOptionalString(form, "instructions"),
    creator: getOptionalString(form, "name"),
    creator_email: getOptionalString(form, "email"),
    image: "",
  };
  return meal;
}
const MealsSharePage = () => {
  async function shareMeal(formData: FormData) {
    "use server";
    const meal = getMealFromFormData(formData);
  }
  return (
    <>
      {/* Header */}
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-white">
          Share your{" "}
          <span className="text-accent drop-shadow">favorite meal</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Or any other meal you feel needs sharing!
        </p>
      </header>

      {/* Form */}
      <main className="max-w-3xl mx-auto bg-surface border border-white/10 rounded-xl shadow-lg p-8 space-y-6">
        <form className="space-y-6" action={shareMeal}>
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <p className="flex flex-col gap-2 text-sm">
              <label htmlFor="name" className="text-muted">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="rounded-lg bg-black/20 text-white px-4 py-2 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
              />
            </p>

            <p className="flex flex-col gap-2 text-sm">
              <label htmlFor="email" className="text-muted">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="rounded-lg bg-black/20 text-white px-4 py-2 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
              />
            </p>
          </div>

          {/* Title */}
          <p className="flex flex-col gap-2 text-sm">
            <label htmlFor="title" className="text-muted">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="rounded-lg bg-black/20 text-white px-4 py-2 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </p>

          {/* Summary */}
          <p className="flex flex-col gap-2 text-sm">
            <label htmlFor="summary" className="text-muted">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="rounded-lg bg-black/20 text-white px-4 py-2 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </p>

          {/* Instructions */}
          <p className="flex flex-col gap-2 text-sm">
            <label htmlFor="instructions" className="text-muted">
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={8}
              required
              className="rounded-lg bg-black/20 text-white px-4 py-3 outline-none border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent transition"
            />
          </p>

          {/* Image Picker Placeholder */}
          <ImagePicker label="Upload your meal image" name="image" />

          {/* Submit Button */}
          <p className="text-center pt-4">
            <button
              type="submit"
              className="rounded-full bg-accent text-black font-semibold px-8 py-2 text-sm hover:opacity-90 transition"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
};

export default MealsSharePage;

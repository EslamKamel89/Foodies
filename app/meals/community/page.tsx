import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import mealIcon from "@/assets/icons/meal.png";
import Image from "next/image";

const MealsCommunity = () => {
  return (
    <div className="space-y-24">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">
          One shared passion: <span className="text-accent">Food</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Join our community and share your favorite recipes!
        </p>
      </header>

      {/* Responsive Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full place-items-center">
        {/* Section 1 */}
        <section className="flex flex-col items-center text-center w-full max-w-lg group">
          <div className="overflow-hidden rounded-3xl shadow-xl border border-white/10 bg-surface">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <p className="text-white/90 text-xl font-bold mt-6">
            Share & discover recipes
          </p>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col items-center text-center w-full max-w-lg group">
          <div className="overflow-hidden rounded-3xl shadow-xl border border-white/10 bg-surface">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <p className="text-white/90 text-xl font-bold mt-6">
            Find new friends & like-minded people
          </p>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col items-center text-center w-full max-w-lg group">
          <div className="overflow-hidden rounded-3xl shadow-xl border border-white/10 bg-surface">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <p className="text-white/90 text-xl font-bold mt-6">
            Participate in exclusive events
          </p>
        </section>
      </main>
    </div>
  );
};

export default MealsCommunity;

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center gap-6">
      {/* Big 404 */}
      <div className="text-7xl md:text-8xl font-extrabold text-accent/20 select-none">
        404
      </div>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow">
        Page Not Found
      </h2>

      <p className="text-muted max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Action */}
      <Link
        href="/"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-2.5 text-sm font-semibold text-black shadow-lg hover:scale-105 hover:shadow-accent/40 transition"
      >
        Back to Home
        <span className="text-lg">🏠</span>
      </Link>
    </div>
  );
}

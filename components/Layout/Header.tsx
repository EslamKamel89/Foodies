import logoImg from "@/assets/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative z-50 overflow-visible mb-5">
      {/* Navbar background */}
      <div className="absolute inset-x-0 top-0 h-16 bg-black/10" />

      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="relative flex items-center gap-3 text-lg font-semibold text-white overflow-visible"
        >
          <img
            src={logoImg.src}
            alt="Foodies logo"
            className="relative mt-5 h-20 w-20 rounded-full bg-black/40 p-1 ring-1 ring-white/30 shadow-lg"
          />
          <span className="mt-2 tracking-wide">Foodies</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm font-medium text-white/80">
            <li>
              <Link
                href="/meals"
                className="hover:text-white transition-colors"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/meals/community"
                className="hover:text-white transition-colors"
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/meals/share"
            className="hidden sm:inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            Share Recipe
          </Link>

          {/* Mobile Menu */}
          <button
            aria-label="Open menu"
            className="md:hidden rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

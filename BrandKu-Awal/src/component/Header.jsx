import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "Fitur" },
  { to: "/about", label: "Tentang" },
  { to: "/pricing", label: "Harga" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-6 px-6">

        <Link
          to="/"
          className="flex items-center gap-2.5 text-lg font-bold text-gray-900"
          onClick={closeMenu}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            B
          </span>

          BrandKu
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 flex-col justify-center gap-1.5 rounded-lg border border-gray-200 md:hidden"
          aria-label="Buka menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="mx-auto block h-0.5 w-[18px] bg-gray-900" />
          <span className="mx-auto block h-0.5 w-[18px] bg-gray-900" />
          <span className="mx-auto block h-0.5 w-[18px] bg-gray-900" />
        </button>

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-16 flex-col gap-2 border-b border-gray-200 bg-white px-6 py-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-7">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block py-2 text-sm font-medium text-gray-600 transition hover:text-gray-900 md:py-1"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/pricing"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            onClick={closeMenu}
          >
            Mulai Gratis
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
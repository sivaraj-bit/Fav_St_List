import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function Navbar() {
  const { favourites } = useContext(StudentContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition ${
      isActive
        ? "bg-indigo-600 text-white"
        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
    }`;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-indigo-100 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-1 text-lg font-bold sm:text-xl"
        >
          <span className="mr-1 text-2xl">🎓</span>
          <span className="text-indigo-600">Favourite</span>
          <span className="text-emerald-600">Students</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" end className={linkClass}>
            🏠 Dashboard
          </NavLink>

          <NavLink to="/students" className={linkClass}>
            👨‍🎓 Students
          </NavLink>

          <NavLink to="/favourites" className={linkClass}>
            💖 Favourites
            <span className="rounded-full bg-pink-100 px-2 py-0.5 text-xs text-pink-700">
              {favourites.length}
            </span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-2xl text-indigo-600 hover:bg-indigo-50 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="space-y-2 border-t border-indigo-100 bg-white px-4 py-4 md:hidden">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={linkClass}
          >
            🏠 Dashboard
          </NavLink>

          <NavLink
            to="/students"
            onClick={closeMenu}
            className={linkClass}
          >
            👨‍🎓 Students
          </NavLink>

          <NavLink
            to="/favourites"
            onClick={closeMenu}
            className={linkClass}
          >
            💖 Favourites
            <span className="rounded-full bg-pink-100 px-2 py-0.5 text-xs text-pink-700">
              {favourites.length}
            </span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
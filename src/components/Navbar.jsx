import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();


  // Hide / Show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 80) {
        setShowNavbar(false);
        setIsOpen(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-sm backdrop-blur
      transition-transform duration-300 bg-white
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-10xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Promos Logo" className="h-20 w-20" />
          <span className="text-xl font-bold text-gray-800">
            Promos 
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-end gap-8 ">
          <NavLink to="/docs" className={navItemClass}>Docs</NavLink>
          <NavLink to="/blogs" className={navItemClass}>Blogs</NavLink>
          <NavLink to="/services" className={navItemClass}>Services</NavLink>
          <NavLink to="/Github" className={navItemClass}>Github</NavLink>
          <NavLink to="/careers" className={navItemClass}>Careers</NavLink>
          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
          <button
  onClick={toggleTheme}
  className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700
             text-gray-800 dark:text-gray-200 transition"
  title="Toggle Theme"
>
  {theme === "light" ? "🌙" : "☀️"}
</button>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col px-6 py-4 gap-4">
            <NavLink to="/docs" onClick={() => setIsOpen(false)} className={navItemClass}>Docs</NavLink>
            <NavLink to="/blogs" onClick={() => setIsOpen(false)} className={navItemClass}>Blogs</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)} className={navItemClass}>Services</NavLink>
            <NavLink to="/Github" onClick={() => setIsOpen(false)} className={navItemClass}>Github</NavLink>
            <NavLink to="/careers" onClick={() => setIsOpen(false)} className={navItemClass}>Careers</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={navItemClass}>Contact</NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

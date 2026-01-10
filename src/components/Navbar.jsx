import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // scrolling down
        setShowNavbar(false);
        setIsOpen(false); // close mobile menu
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white backdrop-blur shadow-sm
      transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <span className="text-xl font-bold text-gray-800">
            Promos : Meet Your Customer
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 transition"><Link to="/docs">Docs</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/blogs">Blogs</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/services">Services</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/careers">Careers</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
            <Link to="/docs" onClick={() => setIsOpen(false)}>Docs</Link>
            <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

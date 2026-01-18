import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Target } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Docs", href: "/docs" },
    { name: "Contact", href: "/contact" },
     { name: "Github", href:"/Github" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white shadow-md transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Target className="text-blue-600" />
            <span className="font-bold text-xl tracking-tight text-gray-800 font-serif">
              PROMOS
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6 mr-4 border-r pr-6 border-gray-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => navigate("/login")}
                className="text-gray-700 hover:text-blue-600 text-sm font-semibold px-2 transition"
              >
                Log in
              </button>
              <button 
                onClick={() => navigate("/signup")}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-blue-200"
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-600 hover:text-blue-600 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => { navigate("/login"); setIsOpen(false); }}
              className="w-full text-center py-2 text-gray-700 font-semibold rounded-md border border-gray-200"
            >
              Log in
            </button>
            <button 
              onClick={() => { navigate("/signup"); setIsOpen(false); }}
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
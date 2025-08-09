import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import ulabLogo from "../assets/ULAB-logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Post Lost Item", path: "/post-lost" },
    { name: "Post Found Item", path: "/post-found" },
    { name: "All Items", path: "/all-items" },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-3">
            <img src={ulabLogo} alt="ULAB" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Lost & Found
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 px-3 py-1 rounded-md ${
                    isActive
                      ? "text-blue-600 underline underline-offset-4 font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                  }`
                }
                onClick={handleNavClick}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-b-xl shadow-md ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-medium text-base transition ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold underline"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/30 dark:hover:bg-gray-700/40"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [submenu, setSubmenu] = useState(false); // For desktop submenu
  const [mobileMenu, setMobileMenu] = useState(false); // For mobile menu toggle

  return (
    <div className="bg-black text-white w-full shadow-md">
      {/* Navbar Container */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-8">
        {/* Logo */}
        <h3 className="text-2xl font-bold text-red-500">
          <Link to="/">JLPT Prep Hub</Link>
        </h3>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-gray-300 transition">
            About Us
          </Link>
          <div className="relative" onClick={() => setSubmenu((prev) => !prev)}>
            <span className="hover:text-gray-300 transition cursor-pointer">
              Vocabulary
            </span>
            {submenu && (
              <div className="absolute top-8 left-0 bg-gray-800 w-40 p-3 rounded-lg shadow-lg z-10">
                <Link to="/vocab/n5" className="block hover:text-gray-400 py-1">
                  N5
                </Link>
                <Link to="/vocab/n4" className="block hover:text-gray-400 py-1">
                  N4
                </Link>
                <Link to="/vocab/n3" className="block hover:text-gray-400 py-1">
                  N3
                </Link>
                <Link to="/vocab/n2" className="block hover:text-gray-400 py-1">
                  N2
                </Link>
                <Link to="/vocab/n1" className="block hover:text-gray-400 py-1">
                  N1
                </Link>
              </div>
            )}
          </div>
          <Link to="/books" className="hover:text-gray-300 transition">
            Books
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          {mobileMenu ? (
            <X
              onClick={() => setMobileMenu(false)}
              className="w-6 h-6 cursor-pointer"
            />
          ) : (
            <Menu
              onClick={() => setMobileMenu(true)}
              className="w-6 h-6 cursor-pointer"
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="sm:hidden bg-black/90 text-white w-full py-4 px-6 space-y-4 shadow-lg absolute top-16 left-0">
          <Link
            to="/"
            className="block hover:text-gray-400"
            onClick={() => setMobileMenu(false)}
          >
            Home
          </Link>
          <Link
            to="/lessons"
            className="block hover:text-gray-400"
            onClick={() => setMobileMenu(false)}
          >
            Lessons
          </Link>
          <Link
            to="/about"
            className="block hover:text-gray-400"
            onClick={() => setMobileMenu(false)}
          >
            About Us
          </Link>
          <div className="relative">
            <span
              className="block hover:text-gray-400 cursor-pointer"
              onClick={() => setSubmenu(!submenu)}
            >
              Test
            </span>
            {submenu && (
              <div className="ml-4 mt-2 bg-gray-700 p-3 rounded-lg space-y-2">
                <Link to="/test/n5" className="block hover:text-gray-400">
                  N5
                </Link>
                <Link to="/test/n4" className="block hover:text-gray-400">
                  N4
                </Link>
                <Link to="/test/n3" className="block hover:text-gray-400">
                  N3
                </Link>
                <Link to="/test/n2" className="block hover:text-gray-400">
                  N2
                </Link>
                <Link to="/test/n1" className="block hover:text-gray-400">
                  N1
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/books"
            className="block hover:text-gray-400"
            onClick={() => setMobileMenu(false)}
          >
            Books
          </Link>
          <Link
            to="/contact"
            className="block hover:text-gray-400"
            onClick={() => setMobileMenu(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

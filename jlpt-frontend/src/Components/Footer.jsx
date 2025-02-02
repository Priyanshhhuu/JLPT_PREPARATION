import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Logo */}
        <div className="text-3xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text hover:opacity-80 transition duration-300">
          Learn<span className="text-gray-300">Hub</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-8 text-gray-400 text-sm font-medium">
          {["Home", "Lessons", "About", "Contact"].map((link, index) => (
            <a key={index} href="#" className="relative group">
              <span className="hover:text-white transition duration-300">
                {link}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          {[
            { icon: FaGithub, link: "https://github.com" },
            { icon: FaLinkedin, link: "https://linkedin.com" },
            { icon: FaYoutube, link: "https://youtube.com" },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Icon size={28} className="hover:shadow-neon" />
            </a>
          ))}
        </div>
      </div>

      {/* Glowing Gradient Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-8"></div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-4 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-[100px] h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        © {new Date().getFullYear()} LearnHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

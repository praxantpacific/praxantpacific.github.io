import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import StylishProfileIcon from "./StylishProfileIcon";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About Me", "Skills", "Experience", "Projects", "Contact"];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center">
      <nav className="w-[90%] md:w-[80%] flex items-center justify-between px-5 py-3 bg-[#1c1c1c] rounded-full shadow-md shadow-black/30 border border-gray-700 backdrop-blur-md">
        <div className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
           <StylishProfileIcon width={55} height={55} />

 
</div>
        
   
  <Logo />


        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white text-sm font-semibold">
          {navLinks.map((link) => (
            <li key={link} className="relative group cursor-pointer">
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* "Hire Me" Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-lime-400 to-yellow-400 px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-110 hover:shadow-xl">
            Hire Me →
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1c1c1c] text-white py-4 rounded-lg shadow-md mt-2 z-40 md:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link} className="text-lg font-medium">
                {link}
              </li>
            ))}
            <button className="bg-gradient-to-r from-lime-400 to-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition duration-300 flex items-center gap-1">
              Hire Me <ArrowRight size={18} />
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;

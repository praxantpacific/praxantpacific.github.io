import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import StylishProfileIcon from "./StylishProfileIcon";

const navLinks = [
  { label: "About Me", id: "about-me" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollTop = useRef(0);

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (!isOpen) {
        setIsVisible(scrollTop < lastScrollTop.current || scrollTop < 10);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;

      if (isOpen) setIsOpen(false); // close mobile menu while scrolling
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Set active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.3,
      }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to section by ID
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-[90%] md:w-[80%] flex items-center justify-between px-5 py-3 bg-[#1c1c1c] rounded-full shadow-md shadow-black/30 border border-gray-700 backdrop-blur-md">
        <div className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <StylishProfileIcon width={55} height={55} />
        </div>

        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-white text-sm font-semibold">
          {navLinks.map(({ label, id }) => (
            <li
              key={id}
              className={`relative group cursor-pointer ${
                activeSection === id
                  ? "text-cyan-400 underline underline-offset-4"
                  : ""
              }`}
              onClick={() => handleNavClick(id)}
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* Hire Me Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-gradient-to-r from-lime-400 to-yellow-400 px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-110 hover:shadow-xl"
          >
            Hire Me →
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1c1c1c] text-white py-4 rounded-lg shadow-md mt-2 z-40 md:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map(({ label, id }) => (
              <li
                key={id}
                className={`text-lg font-medium cursor-pointer ${
                  activeSection === id ? "text-cyan-400 underline" : ""
                }`}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </li>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-gradient-to-r from-lime-400 to-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition duration-300 flex items-center gap-1"
            >
              Hire Me <ArrowRight size={18} />
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;

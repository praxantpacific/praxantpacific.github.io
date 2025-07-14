import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaMediumM,
  FaLinkedinIn,
} from "react-icons/fa";
import { X } from "lucide-react";

const Footer = () => {
  // Links matching your NavBar IDs for smooth scroll
  const navLinks = [
    { label: "About Me", id: "about-me" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  // Social profiles URLs (replace with your actual links)
  const socialProfiles = {
    x: "https://twitter.com/yourXhandle",
    facebook: "https://facebook.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
    github: "https://github.com/yourprofile",
    medium: "https://medium.com/@yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
  };

  // Scroll handler for footer links
  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-[#2a2a2a] to-[#1a1a1a] text-gray-300 py-16 px-6 sm:px-12 lg:px-24 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6">About</h3>
          <p className="leading-relaxed">
            Content Creator & Media Professional with 3 years of experience in
            digital storytelling, review writing and audience engagement.
          </p>
        </div>

        {/* Have a Questions Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
            Have a Questions?
          </h3>
          <address className="not-italic space-y-2 text-gray-400">
            <p>P.Box.No: 33700, Gandaki Province, Pokhara, Kaski, Nepal</p>
            <p>+977 9845813964</p>
            <p>
              <a
                href="mailto:praxantpacific2@gmail.com"
                className="hover:text-[#00FFFF]"
              >
                praxantpacific2@gmail.com
              </a>
            </p>
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Links</h3>
          <ul className="space-y-3">
            {navLinks.map(({ label, id }) => (
              <li
                key={id}
                className="cursor-pointer hover:text-[#00FFFF] transition-colors duration-300"
                onClick={() => handleScrollToSection(id)}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Services</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              "Web Design",
              "Web Development",
              "Content Creation",
              "Automation",
              "Graphic Design",
            ].map((service) => (
              <li
                key={service}
                className="hover:text-[#00FFFF] cursor-default transition-colors duration-300"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href={socialProfiles.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-[#00FFFF] transition-colors duration-300"
          >
            <X size={22} />
          </a>
          <a
            href={socialProfiles.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#00FFFF] transition-colors duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href={socialProfiles.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#00FFFF] transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href={socialProfiles.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-[#00FFFF] transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={socialProfiles.medium}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="hover:text-[#00FFFF] transition-colors duration-300"
          >
            <FaMediumM size={20} />
          </a>
          <a
            href={socialProfiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="hover:text-[#00FFFF] transition-colors duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center md:text-right">
          Copyright ©2025 All rights reserved | Code and concept by Prashant
          (himself).
        </p>
      </div>
    </footer>
  );
};

export default Footer;

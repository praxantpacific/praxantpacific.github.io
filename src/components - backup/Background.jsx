import React from "react";
import NavBar from "./NavBar";



const Background = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Animated Matrix-like background */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="w-full h-full opacity-20 animate-fade-in bg-[url('/matrix-code.gif')] bg-cover bg-center mix-blend-overlay" />
      </div>

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0f0f0f] to-black opacity-80 z-10 pointer-events-none" />

      {/* Optional glitch overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-soft-light opacity-10">
        <div className="w-full h-full bg-[url('/glitch-overlay.png')] bg-repeat opacity-30" />
      </div>

      {/* NavBar & Content Layer */}
      <div className="relative z-20">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Background;

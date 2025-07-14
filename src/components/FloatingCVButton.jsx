import React from "react";
import { Download } from "lucide-react";

const FloatingCVButton = () => {
  return (
    <a
      href="/assets/CV/Prashant-CV.pdf"
      download="Prashant-CV.pdf"
      className="fixed bottom-6 right-6 z-30 backdrop-blur-md bg-white/10 text-cyan-300 border border-cyan-400 px-4 py-2 rounded-full shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
    >
      <Download size={18} />
      <span className="font-medium">Download CV</span>
    </a>
  );
};

export default FloatingCVButton;

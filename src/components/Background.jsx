import React from "react";
import NavBar from "./NavBar";
import HeroProfile from "./HeroProfile";
import AboutMe from "./AboutMe";
import SkillSet from "./SkillSet";
import Experience from "./Experience";
import Project from "./Project"
import Contact from "./Contact"
import Footer from "./Footer" 
import FloatingCVButton from "./FloatingCVButton";


const Background = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#121212] via-[#1e1e1e] to-[#2a2a2a] text-white overflow-x-hidden">
      {/* Background elements (if any) would go here */}
      
      {/* Content Layer */}
      <div className="relative z-20">
        <NavBar />
        
        {/* Main Content */}
        <main className="space-y-20 pb-20">
          <HeroProfile />
          <AboutMe />
          <SkillSet />
          <Experience/>
          <Project/>
          <Contact/>
          <Footer/>
           <FloatingCVButton />
          {children} {/* This will render any additional children passed to Background */}
        </main>
      </div>
    </div>
  );
};

export default Background;
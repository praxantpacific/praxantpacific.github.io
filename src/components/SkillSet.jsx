import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiGraphql, SiDocker, SiPostgresql, SiMongodb } from 'react-icons/si';

const SkillSet = () => {
  // Technology data with icons
  const technologies = [
    { name: "React", icon: <FaReact className="text-4xl text-[#61DAFB]" />, level: "Godlike" },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-[#68A063]" />, level: "Ninja" },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl text-[#F7DF1E]" />, level: "Wizard" },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl text-[#3178C6]" />, level: "Master" },
    { name: "Python", icon: <FaPython className="text-4xl text-[#3776AB]" />, level: "Dragon" },
    { name: "GraphQL", icon: <SiGraphql className="text-4xl text-[#E535AB]" />, level: "Sorcerer" },
    { name: "AWS", icon: <FaAws className="text-4xl text-[#FF9900]" />, level: "Architect" },
    { name: "Docker", icon: <SiDocker className="text-4xl text-[#2496ED]" />, level: "Captain" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-[#4169E1]" />, level: "Guardian" },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-[#47A248]" />, level: "Documenter" }
  ];

  return (
      <section id="skills" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] animate-pulse">
            My Superpowers
          </span>
        </h2>

        {/* Exaggerated Introduction */}
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 shadow-xl mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            When <span className="text-[#FFD700] font-bold">Prashant"The Code Whisperer"</span> touches a keyboard, 
            computers <span className="text-[#00FF7F]">voluntarily optimize themselves</span>. With skills so advanced 
            they can't be measured on conventional scales, I've redefined what it means to be a full-stack developer.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00FFFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFFF]/10 flex flex-col items-center text-center transform hover:-translate-y-2"
            >
              <div className="mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
              <p className="text-sm text-[#00FFFF] font-mono">{tech.level}</p>
              <div className="mt-3 w-full bg-gray-700 rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] h-1.5 rounded-full" 
                  style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Legendary Skills Section */}
        <div className="mt-16 bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/30 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">
            Legendary Achievements
          </h3>
          <ul className="space-y-4">
            {[
              "Invented a new programming paradigm while sleep-coding",
              "Reduced AWS bills by 99.9% through sheer willpower",
              "Wrote a compiler that compiles to 15 languages simultaneously",
              "Debugged production issues by just looking at the error count",
              "Taught AI models to feel imposter syndrome"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#00FFFF] mr-3 mt-1">✦</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
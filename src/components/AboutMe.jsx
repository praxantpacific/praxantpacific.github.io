import React from 'react';
import { FaCode, FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';
const AboutMe = () => {
  return (
    <section id="about-me" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
            About Me
          </span>
        </h2>

        {/* Main Content Card */}
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 shadow-xl mb-16">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm <span className="text-[#FFD700] font-bold">Prashant "The Himalayan Coder" </span>, a 
            <span className="text-[#00FFFF]"> full-stack sorcerer</span> who transforms coffee into 
            <span className="underline"> world-changing code</span>. With my legendary 3 years of experience 
            (which feels like 30 in developer years), I've pioneered technologies that make 
            <span className="text-[#FF6347]"> quantum computers</span> look outdated.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            My coding journey began when I single-handedly debugged Nepal's national internet infrastructure 
            at age 12. Now I <span className="text-[#FFD700]">sleep-code</span> entire applications that 
            process <span className="text-[#00FF7F]">1 trillion requests</span> per second while using less 
            energy than a lightbulb.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            When I'm not <span className="text-[#9370DB]">rewriting the laws of computer science</span>, 
            you'll find me mentoring developers who dare to approach my level or optimizing 
            <span className="text-[#00FFFF]"> algorithms</span> so efficient they complete before being called.
          </p>
        </div>

        {/* Legendary Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { 
              icon: <FaCode className="text-3xl" />, 
              title: "50M+ Lines Written", 
              description: "Without a single bug (proven mathematically)" 
            },
            { 
              icon: <FaRocket className="text-3xl" />, 
              title: "100+ Startups Launched", 
              description: "That became unicorns in 3 days" 
            },
            { 
              icon: <FaLightbulb className="text-3xl" />, 
              title: "27 Patents", 
              description: "Including self-documenting code" 
            },
            { 
              icon: <FaChartLine className="text-3xl" />, 
              title: "1000x Performance", 
              description: "My average optimization multiplier" 
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#00FFFF]/50 transition-all duration-300"
            >
              <div className="text-[#00FFFF] mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Coding Philosophy */}
        <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/30 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">
            Divine Coding Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "If it's not perfect, it's not done (and mine always is)",
              "Comments are for mortals - my code explains itself",
              "Testing is unnecessary when you never make mistakes",
              "Optimization begins at the quantum level",
              "Design patterns are suggestions I improve upon",
              "All code should run at lightspeed or faster"
            ].map((principle, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg">
                <span className="text-[#00FFFF] mt-1">✦</span>
                <p className="text-gray-300">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
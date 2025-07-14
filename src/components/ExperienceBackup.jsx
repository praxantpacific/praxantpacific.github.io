import React from 'react';
import { FaRocket, FaLightbulb, FaBrain, FaChartLine } from 'react-icons/fa';

const Experience = () => {
  // Company data with exaggerated achievements
  const companies = [
    {
      name: "Meta",
      position: "Chief Code Alchemist",
      duration: "2018-Present",
      achievements: [
        "Invented React 2.0 during lunch break",
        "Reduced Facebook's bundle size by 99.9%",
        "Taught Zuckerberg how to code properly"
      ],
      glowColor: "from-blue-500 to-blue-700"
    },
    {
      name: "Google",
      position: "Search Sorcerer",
      duration: "2015-2018",
      achievements: [
        "Made Google search 0.001ms faster",
        "Wrote PageRank algorithm on a napkin",
        "Convinced AI to not take over the world"
      ],
      glowColor: "from-red-500 to-yellow-500"
    },
    {
      name: "Tesla",
      position: "Autopilot Wizard",
      duration: "2013-2015",
      achievements: [
        "Made cars fly (disabled in production)",
        "Wrote self-driving AI in pure CSS",
        "Charged batteries with clean code"
      ],
      glowColor: "from-red-500 to-red-700"
    },
    {
      name: "NASA",
      position: "Space Coder",
      duration: "2010-2013",
      achievements: [
        "Fixed Mars Rover with console.log",
        "Compiled JavaScript to run on Saturn",
        "Discovered aliens through regex"
      ],
      glowColor: "from-purple-500 to-blue-900"
    }
  ];

  // Legendary achievements
  const legendaryAchievements = [
    { icon: <FaRocket className="text-2xl" />, text: "Launched startup that became FAANG company in 3 days" },
    { icon: <FaLightbulb className="text-2xl" />, text: "Invented new programming language that compiles to coffee" },
    { icon: <FaBrain className="text-2xl" />, text: "Solved P=NP problem but kept it to himself" },
    { icon: <FaChartLine className="text-2xl" />, text: "Grew company revenue 1000x by deleting console.logs" }
  ];

  return (
   
      <section id="experience" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF00FF] to-[#FFA500]">
            Legendary Experience
          </span>
        </h2>

        {/* Introduction */}
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 shadow-xl mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-[#FFD700] font-bold">Prashant"10x Engineer"</span> doesn't just work at companies - 
            he <span className="text-[#00FF7F]">rewrites their destiny</span>. Each organization fortunate enough to 
            employ him immediately becomes <span className="text-[#00FFFF]">10,000% more successful</span>.
          </p>
        </div>

        {/* Hexagonal Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {companies.map((company, index) => (
            <div 
              key={index}
              className={`relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
            >
              {/* Hexagon Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${company.glowColor} rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`hexagon bg-gradient-to-br ${company.glowColor} mr-4`}>
                    <div className="hexagon-inner flex items-center justify-center text-white font-bold text-xl">
                      {company.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                    <p className="text-[#00FFFF]">{company.position}</p>
                    <p className="text-gray-400 text-sm">{company.duration}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {company.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#FFD700] mr-2">✦</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Legendary Achievements */}
        <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/30 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">
            Other Impossible Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legendaryAchievements.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                <div className="text-[#00FFFF] mt-1">
                  {item.icon}
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hexagon CSS */}
      <style jsx>{`
        .hexagon {
          width: 60px;
          height: 60px;
          position: relative;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .hexagon-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default Experience;
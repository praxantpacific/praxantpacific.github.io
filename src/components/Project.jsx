import React from 'react';
import { FaCode, FaServer, FaMobile, FaRobot, FaEye } from 'react-icons/fa';

const Projects = () => {
  // Project data with exaggerated descriptions
  const projects = [
    {
      name: "AI Universe",
      description: "An AI that writes better code than its creators",
      technologies: ["React", "TensorFlow", "Node.js"],
      achievement: "Reduced human coding by 99.9%",
      glowColor: "from-purple-500 to-blue-500",
      icon: <FaRobot className="text-3xl" />
    },
    {
      name: "Quantum Web",
      description: "Website that loads before you click the link",
      technologies: ["Next.js", "Quantum CSS", "Time Travel API"],
      achievement: "Achieved negative latency",
      glowColor: "from-blue-400 to-cyan-500",
      icon: <FaCode className="text-3xl" />
    },
    {
      name: "Nepal Stack",
      description: "Framework that powers 90% of Nepali tech startups",
      technologies: ["TypeScript", "Himalayan.js", "EverestDB"],
      achievement: "Used by Mount Everest climbers",
      glowColor: "from-green-500 to-emerald-500",
      icon: <FaServer className="text-3xl" />
    },
    {
      name: "Mobile Nirvana",
      description: "App that increases smartphone battery life 10x",
      technologies: ["React Native", "Battery Alchemy", "Efficiency++"],
      achievement: "Phones now last 1 month per charge",
      glowColor: "from-yellow-500 to-orange-500",
      icon: <FaMobile className="text-3xl" />
    },
    {
      name: "VisionX",
      description: "AR glasses that see through time",
      technologies: ["WebXR", "Chrono-Vision", "Future CSS"],
      achievement: "Used to debug tomorrow's code today",
      glowColor: "from-pink-500 to-red-500",
      icon: <FaEye className="text-3xl" />
    }
  ];

  // Legendary testimonials
  const testimonials = [
    {
      quote: "Prashant's code is so clean it improved our team's IQ by 30 points",
      author: "Elon Musk, SpaceX"
    },
    {
      quote: "We asked for a website, he delivered a technological revolution",
      author: "Satya Nadella, Microsoft"
    },
    {
      quote: "His algorithms made our AI cry tears of inadequacy",
      author: "Sundar Pichai, Google"
    }
  ];

  return (
    
      <section id="projects" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF7F] to-[#00FFFF]">
            Cosmic Projects
          </span>
        </h2>

        {/* Introduction */}
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 shadow-xl mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            When <span className="text-[#FFD700] font-bold">Prashant "The Himalayan Coder" Paudel</span> creates a project, 
            the <span className="text-[#00FF7F]">laws of physics take notes</span>. Each creation redefines what's possible 
            in web development while simultaneously <span className="text-[#00FFFF]">solving world hunger</span> as a side effect.
          </p>
        </div>

        {/* Hexagonal Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden h-full`}
            >
              {/* Hexagon Neon Border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.glowColor} rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              {/* Hexagon Logo Container */}
              <div className="relative z-10 flex justify-center mb-6">
                <div className={`hexagon bg-gradient-to-br ${project.glowColor} p-1`}>
                  <div className="hexagon-inner bg-gray-900 flex items-center justify-center">
                    <div className={`text-3xl bg-gradient-to-br ${project.glowColor} bg-clip-text text-transparent`}>
                      {project.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white text-center mb-2">{project.name}</h3>
                <p className="text-gray-300 text-center mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-[#00FFFF] font-mono text-center mb-2">ACHIEVEMENT:</p>
                  <p className="text-[#FFD700] text-center font-medium">{project.achievement}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-900/70 rounded-full text-xs text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/30 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">
            Industry Leaders Are Speechless
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative p-6 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <div className="absolute -top-3 -left-3 text-4xl text-[#FFD700]">“</div>
                <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
                <p className="text-right text-[#00FFFF] font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hexagon CSS */}
      <style jsx>{`
        .hexagon {
          width: 80px;
          height: 80px;
          position: relative;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .hexagon-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  );
};

export default Projects;
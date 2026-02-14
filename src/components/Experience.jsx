import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "SEO Specialist",
      organization: "Lattice Nepal Pvt. Ltd.",
      period: "December 2018 – August 2020",
      details:
        "Developed SEO-optimized content, drove traffic, tailored messaging to audiences.",
      glowColor: "from-green-400 to-lime-500",
      logo: "/lattice.png",
    },
    {
      role: "Intern",
      organization: "Nepdroid Innovations Pvt. Ltd.",
      period: "25 July 2021 – 25 October 2021",
      details:
        "Gained experience with front-end (HTML/CSS, ReactJS) and back-end (PHP, WordPress, Laravel).",
      glowColor: "from-blue-400 to-cyan-500",
      logo: "/nepdroid.png",
    },
    {
      role: "Content Writer",
      organization: "Nepal Republic Media Limited (“The Republica”)",
      period: "September 2020 – October 2021",
      details:
        "Crafted high-quality journalism, research, interviews, concise articles.",
      glowColor: "from-yellow-400 to-amber-500",
      logo: "/republica.jpg",
    },
    {
      role: "Content Writer",
      organization: "Kantipur Media Group (“The Kathmandu Post”)",
      period: "November 2021 – December 2022",
      details:
        "Produced compelling stories and trend analysis for a major daily newspaper.",
      glowColor: "from-red-400 to-pink-500",
      logo: "/kantipur.png",
    },
    {
      role: "Engineer",
      organization:
        "Pokhara International Airport (Mahavir Shree International Pvt. Ltd.)",
      period: "March 2025 – Present",
      details:
        "Document verification, boarding procedures, flight communications.",
      glowColor: "from-purple-400 to-indigo-500",
      logo: "/CAN.png",
    },
    {
      role: "Graphics Designer",
      organization: "Lattice Nepal",
      period: "2020 – Present",
      details:
        "Transformed ideas into visual masterpieces—creative & impactful designs.",
      glowColor: "from-pink-400 to-rose-500",
      logo: "/lattice.png",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF00FF] to-[#FFA500]">
            Work Experience
          </span>
        </h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${exp.glowColor} rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="circle bg-gray-900/30 mr-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={exp.logo}
                      alt={exp.organization}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.organization}
                    </h3>
                    <p className="text-[#00FFFF] font-semibold">{exp.role}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                </div>

                <p className="text-gray-300">{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Circle CSS */}
      <style jsx>{`
        .circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export default Experience;

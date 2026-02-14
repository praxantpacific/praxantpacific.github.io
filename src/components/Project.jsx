import React from "react";
import { FaCode, FaServer, FaMobile, FaRobot, FaEye } from "react-icons/fa";


const Projects = () => {
  // Project data
  const projects = [
    {
      name: "AI Universe",
      description: "An AI that writes better code than its creators",
      technologies: ["React", "TensorFlow", "Node.js"],
      achievement: "Reduced human coding by 99.9%",
      glowColor: "from-purple-500 to-blue-500",
      icon: <FaRobot className="text-3xl" />,
    },
    {
      name: "Quantum Web",
      description: "Website that loads before you click the link",
      technologies: ["Next.js", "Quantum CSS", "Time Travel API"],
      achievement: "Achieved negative latency",
      glowColor: "from-blue-400 to-cyan-500",
      icon: <FaCode className="text-3xl" />,
    },
    {
      name: "Nepal Stack",
      description: "Framework that powers 90% of Nepali tech startups",
      technologies: ["TypeScript", "Himalayan.js", "EverestDB"],
      achievement: "Used by Mount Everest climbers",
      glowColor: "from-green-500 to-emerald-500",
      icon: <FaServer className="text-3xl" />,
    },
    {
      name: "Mobile Nirvana",
      description: "App that increases smartphone battery life 10x",
      technologies: ["React Native", "Battery Alchemy", "Efficiency++"],
      achievement: "Phones now last 1 month per charge",
      glowColor: "from-yellow-500 to-orange-500",
      icon: <FaMobile className="text-3xl" />,
    },
    {
      name: "VisionX",
      description: "AR glasses that see through time",
      technologies: ["WebXR", "Chrono-Vision", "Future CSS"],
      achievement: "Used to debug tomorrow's code today",
      glowColor: "from-pink-500 to-red-500",
      icon: <FaEye className="text-3xl" />,
    },
  ];

 // Inside your testimonials array
const testimonials = [
  {
    image: "/elon.jpg",
    quote: "Prashant's code is so clean it improved our team's IQ by 30 points",
    name: "Elon Musk",
    logo: "/logos/SpaceX.svg",
  },
  {
    image: "/satya.jpg",
    quote: "We asked for a website, he delivered a technological revolution",
    name: "Satya Nadella",
    logo: "/logos/Microsoft.svg",
  },
  {
    image: "/sundar.jpg",
    quote: "His algorithms made our AI cry tears of inadequacy",
    name: "Sundar Pichai",
    logo: "/logos/Google.svg",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
      <p className="testimonial-quote">"{testimonial.quote}"</p>
      <p className="testimonial-name">{testimonial.name}</p>
      <img src={testimonial.logo} alt={`${testimonial.name} logo`} className="testimonial-logo" />
    </div>
  );
}

// Render
testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />);


  return (
    <section
      id="projects"
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-center text-4xl font-extrabold mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF7F] to-[#00FFFF]">
            Cosmic Projects
          </span>
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg group overflow-hidden h-full"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${project.glowColor} rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity`}
              ></div>

              <div className="relative z-10 flex justify-center mb-6">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${project.glowColor}`}
                >
                  {project.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 text-center mb-4">
                {project.description}
              </p>

              <p className="text-[#FFD700] text-center font-medium mb-4">
                {project.achievement}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, i) => (
                  <spanF
                    key={i}
                    className="px-3 py-1 bg-gray-900/70 rounded-full text-xs text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </spanF>
                ))}
              </div>
            </div>
          ))}
        </div>
{/* Testimonials Section */}
<div className="bg-gray-900/70 rounded-2xl p-8 border border-[#FFD700]/30 shadow-2xl">
  <h3 className="text-2xl font-bold text-[#FFD700] mb-10 text-center">
    Industry Leaders Are Speechless
  </h3>

 

  <div className="flex flex-wrap justify-center gap-10">
    {testimonials.map((item, index) => (
      <div key={index} className="card p-6 bg-gray-800/50 rounded-xl flex flex-col items-center text-center">
        <div className="profile-wrapper mb-4">
          <img src={item.image} alt={item.name} className="rounded-full w-24 h-24 object-cover" />
        </div>

        <p className="quote text-white/80 mb-4">"{item.quote}"</p>

        {/* Glowy name */}
        <h3
  className="name text-blue-400 text-xl font-extrabold mb-2 hover-glow"
  style={{ fontFamily: "Calibri, sans-serif" }}
>
  {item.name}
</h3>



        <div className="logo flex justify-center mt-2">
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="w-12 h-12 transform scale-200 transition-transform duration-500 ease-in-out hover:scale-[3.0]"
          />
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default Projects;

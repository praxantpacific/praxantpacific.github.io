import React, { useRef, useState } from "react";
import gsap from "gsap";
import ContactInfo from "./ContactInfo";
import MailIcon from "../assets/mail-icon.png"; // You can replace with any icon

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const gelRef = useRef(null);
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const arrowRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowCard(false);

    const profile = iconRef.current.getBoundingClientRect();
    const svg = svgRef.current.getBoundingClientRect();

    const startX = profile.left + profile.width / 2 - svg.left;
    const startY = profile.top + profile.height / 2 - svg.top;

    const cardX = window.innerWidth / 2 - svg.left;
    const cardY = window.innerHeight / 2 - svg.top;

    const controlY = startY - 120;
    const d = `M${startX},${startY} Q${(startX + cardX) / 2},${controlY} ${cardX},${cardY}`;

    pathRef.current.setAttribute("d", d);
    pathRef.current.setAttribute("stroke-dasharray", 1000);
    pathRef.current.setAttribute("stroke-dashoffset", 1000);
    arrowRef.current.style.opacity = 0;

    gsap.to(gelRef.current, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(arrowRef.current, {
          opacity: 1,
          duration: 0.4,
        });

        setShowCard(true);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          }
        );
      },
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowCard(false);

    gsap.to(gelRef.current, {
      strokeDashoffset: 440,
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.to(pathRef.current, {
      strokeDashoffset: 1000,
      duration: 0.4,
      ease: "power2.in",
    });

    gsap.to(arrowRef.current, {
      opacity: 0,
      duration: 0.3,
    });

    gsap.to(cardRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a] text-white px-6 py-10 flex items-center justify-center relative overflow-hidden">
      {/* Contact Pop-up Card */}
      <div
        ref={cardRef}
        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 backdrop-blur-md bg-white/10 rounded-2xl shadow-lg p-6 pointer-events-none"
        style={{ opacity: 0 }}
      >
        {showCard && <ContactInfo />}
      </div>

      {/* SVG Path and Arrow */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      >
        <defs>
          <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8C00" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF69B4" />
          </linearGradient>
          <filter id="glowContact" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker
            id="arrowContact"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 0 L 10 5 L 0 10 z"
              fill="url(#contactGradient)"
              ref={arrowRef}
              style={{ opacity: 0 }}
            />
          </marker>
        </defs>
        <path
          ref={pathRef}
          stroke="url(#contactGradient)"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowContact)"
          style={{ filter: "url(#glowContact)" }}
        />
      </svg>

      {/* Contact UI */}
      <div className="flex flex-col items-center z-10 space-y-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFA500]">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-md max-w-xl">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        {/* Hoverable Mail Icon */}
        <div
          ref={iconRef}
          className="relative w-[180px] h-[180px] flex items-center justify-center cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg width="220" height="220" viewBox="0 0 300 300" className="absolute z-0">
            <circle cx="150" cy="150" r="140" stroke="white" strokeWidth="4" fill="none" />
            <circle
              ref={gelRef}
              cx="150"
              cy="150"
              r="140"
              stroke="#FFA500"
              strokeWidth="4"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset="440"
            />
          </svg>
          <div className="relative z-10 w-[140px] h-[140px] rounded-full overflow-hidden bg-black shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center">
            <img
              src={MailIcon}
              alt="Contact Icon"
              className="w-3/5 h-3/5 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Profile from "../assets/Profile2.png";
import ProfileInfo from "./ProfileInfo";

const HeroProfile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const gelRef = useRef(null);
  const stardustRef = useRef([]);
  const profileRef = useRef(null);
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const cardRef = useRef(null);

  // Fixed sparkle positions (optional improvement)
  const sparklePositions = React.useRef(
    Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
  );

  const radius = 140; // circle radius in SVG coords
  const svgCenter = { x: 150, y: 150 }; // circle center in SVG

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowCard(false);

    // Animate the gel circle stroke quickly
    gsap.fromTo(
      gelRef.current,
      { strokeDashoffset: 440 },
      {
        strokeDashoffset: 0,
        duration: 1, // slightly quicker than before
        ease: "power2.out",
      }
    );

    stardustRef.current.forEach((particle, i) => {
      gsap.fromTo(
        particle,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1.2,
          duration: 1 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        }
      );
    });

    // Calculate start and end points relative to SVG
    const svgRect = svgRef.current.getBoundingClientRect();
    const profileRect = profileRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();

    // Start point at circumference on right side of circle
    // Calculate profile center relative to SVG
    const profileCenterX = profileRect.left + profileRect.width / 2 - svgRect.left;
    const profileCenterY = profileRect.top + profileRect.height / 2 - svgRect.top;

    // Vector from circle center to profile center
    const vectorX = profileCenterX - svgCenter.x;
    const vectorY = profileCenterY - svgCenter.y;
    const vectorLength = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

    // Normalize and multiply by radius to get start point on circumference
    const startX = svgCenter.x + (vectorX / vectorLength) * radius;
    const startY = svgCenter.y + (vectorY / vectorLength) * radius;

    // End point: top middle of the pop-up card relative to SVG
    const endX = cardRect.left + cardRect.width / 2 - svgRect.left;
    const endY = cardRect.top - svgRect.top; // top edge of card

    // Control point to form a smooth curve - fixed offset above start and end points
    const controlX = (startX + endX) / 2;
    const controlY = Math.min(startY, endY) - 120; // 120px above higher point

    // Path d attribute with quadratic Bezier curve
    const d = `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`;

    // Setup path for animation
    pathRef.current.setAttribute("d", d);
    pathRef.current.setAttribute("stroke-dasharray", 1000);
    pathRef.current.setAttribute("stroke-dashoffset", 1000);

    // Animate the curved line quickly
    gsap.fromTo(
      pathRef.current,
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 0.6, // faster animation
        ease: "power2.out",
        onComplete: () => {
          setShowCard(true);
          gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3, // quick fade-in
              ease: "power3.out",
              pointerEvents: "auto", // enable interaction once shown
            }
          );
        },
      }
    );
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowCard(false);

    gsap.killTweensOf(gelRef.current);
    gsap.killTweensOf(pathRef.current);
    stardustRef.current.forEach((p) => gsap.killTweensOf(p));

    gsap.set(pathRef.current, { strokeDashoffset: 1000 });
    gsap.set(cardRef.current, { opacity: 0, y: 30, pointerEvents: "none" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1e1e1e] to-[#2a2a2a] text-white px-6 py-10 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 relative">
        {/* Fixed Pop-up Info Card at Center */}
        <div
          ref={cardRef}
          className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 backdrop-blur-md bg-white/10 rounded-lg p-6"
          style={{ pointerEvents: "none", opacity: 0 }}
        >
          {showCard && <ProfileInfo className="shadow-xl" />}
        </div>

        {/* Glowing Curved Line with Arrow */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        >
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="50%" stopColor="#00BFFF" />
              <stop offset="100%" stopColor="#FF00FF" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="10"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#glowGradient)" />
            </marker>
          </defs>
          <path
            ref={pathRef}
            stroke="url(#glowGradient)"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrow)"
            style={{ filter: "url(#glow)" }}
          />
        </svg>

        {/* Left Info */}
        <div className="flex-1 space-y-4 z-10">
          <p className="text-gray-400 text-lg tracking-wide">
            FRONT-END WEB DEVELOPER
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#FFA500]">
            PRASHANT
            <br />
            PAUDEL
          </h1>
          <p className="text-gray-300 text-md max-w-md pt-2">
            A Passionate Web Developer and Instructor
            <br />
            with 3 years of experience.
          </p>
        </div>

        {/* Profile Image */}
        <div
          ref={profileRef}
          className="relative w-[260px] h-[260px] flex items-center justify-center z-10 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            className="absolute z-0"
            width="300"
            height="300"
            viewBox="0 0 300 300"
          >
            <circle
              cx="150"
              cy="150"
              r="140"
              stroke="white"
              strokeWidth="4"
              fill="none"
            />
            <circle
              ref={gelRef}
              cx="150"
              cy="150"
              r="140"
              stroke="#00BFFF"
              strokeWidth="4"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset="440"
            />
          </svg>

          {/* Sparkles */}
          {isHovered && (
            <div className="absolute inset-0 z-20 pointer-events-none">
              {sparklePositions.current.map(({ x, y }, i) => (
                <span
                  key={i}
                  ref={(el) => (stardustRef.current[i] = el)}
                  className="absolute w-[6px] h-[6px] bg-white opacity-0 rounded-full"
                  style={{
                    top: `${y}%`,
                    left: `${x}%`,
                    filter: "blur(2px)",
                  }}
                ></span>
              ))}
            </div>
          )}

          {/* Profile Image */}
          <div className="relative z-10 w-[260px] h-[260px] rounded-full overflow-hidden bg-black shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;

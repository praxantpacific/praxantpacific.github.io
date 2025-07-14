import React, { useState } from "react";
import profileImg from "../assets/Profile.png";
import ProfileInfo from "./ProfileInfo";

const StylishProfileIcon = ({ width = 60, height = 60 }) => {
  const [hovered, setHovered] = useState(false);
  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative inline-block">
      {/* Profile Icon with Animation */}
      <div
        className="rounded-full cursor-pointer"
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-full object-cover w-full h-full block"
        />

        <svg
          className="absolute top-0 left-0"
          width={width}
          height={height}
          viewBox="0 0 60 60"
          fill="none"
        >
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="white"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={hovered ? 0 : circumference}
            style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
          />
        </svg>
      </div>

          </div>
        
      )
    
    }
export default StylishProfileIcon;
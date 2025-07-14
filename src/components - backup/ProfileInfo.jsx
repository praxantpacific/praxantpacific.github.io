// src/components/ProfileInfo.jsx
import React from "react";

const ProfileInfo = () => {
  return (
    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-72 bg-[#1c1c1c] text-white p-4 rounded-xl shadow-lg border border-gray-700 transition-opacity duration-300 z-50">
      <h3 className="text-lg font-semibold mb-2 text-cyan-400">Arjun Gupta</h3>
      <ul className="space-y-1 text-sm">
        <li><strong>Phone:</strong> +91 9876543210</li>
        <li><strong>Email:</strong> arjun@example.com</li>
        <li><strong>Address:</strong> Kathmandu, Nepal</li>
        <li><strong>Zip Code:</strong> 44600</li>
      </ul>
    </div>
  );
};

export default ProfileInfo;

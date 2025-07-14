import React from "react";

const ProfileInfo = ({ className }) => {
  return (
    <div className={`w-72 bg-[#1c1c1c] text-white p-4 rounded-xl shadow-lg border border-gray-700 ${className || ""}`}>
      <h3 className="text-lg font-semibold mb-2 text-cyan-400">Prashant Paudel</h3>
      <ul className="space-y-1 text-sm">
        <li><strong>Phone:</strong> +977 9845813964</li>
        <li><strong>Email:</strong> praxantpacific@gmail.com</li>
        <li><strong>Address:</strong> Pokhara, Nepal</li>
        <li><strong>Zip Code:</strong> 44600</li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
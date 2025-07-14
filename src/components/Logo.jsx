import React from "react";
import '@fontsource/pacifico';

const Logo = () => {
  return (
    <div className="flex items-center gap-0">
      <div className="flex items-center space-x-0" style={{ fontFamily: 'Pacifico, cursive' }}>
        <span className="text-red-500 text-2xl">&lt;</span>
        <span className="text-white text-3xl">P</span>
        <span className="text-pink-400 text-lg">rashant</span>
        <span className="text-red-500 text-2xl">/&gt;</span>
      </div>
    </div>
  )
}

export default Logo;
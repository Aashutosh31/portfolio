import React from 'react';

export const Card = ({ children, className = '', hover = true, onClick, glow = null }) => {
  const glowStyles = {
    blue: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] hover:border-[#3B82F6]/25',
    violet: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] hover:border-[#8B5CF6]/25',
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-[#121523]/70 border border-white/[0.09] rounded-2xl overflow-hidden backdrop-blur-sm
        ${hover ? `transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.2] ${glow ? glowStyles[glow] : 'hover:shadow-[0_20px_46px_rgba(0,0,0,0.28)]'}` : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

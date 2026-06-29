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
        bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl overflow-hidden
        ${hover ? `transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2A2A2A] ${glow ? glowStyles[glow] : 'hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]'}` : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
import React from 'react';

export const Card = ({ children, className = '', hover = true, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-[#111111] border border-[#1F1F1F] rounded-2xl overflow-hidden 
    ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-[#333333] hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]' : ''} 
    ${className}`}
  >
    {children}
  </div>
);

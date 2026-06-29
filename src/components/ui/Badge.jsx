import React from 'react';

export const Badge = ({ children, icon, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-[#141414] text-[#A1A1AA] border-[#222]',
    blue: 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20',
    violet: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  };

  return (
    <span className={`
      inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
      text-xs font-medium border font-mono-custom tracking-wide
      ${variants[variant]}
      ${className}
    `}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
import React from 'react';

export const Badge = ({ children, icon }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#1A1A1A] text-[#A1A1AA] border border-[#2A2A2A]">
    {icon}
    {children}
  </span>
);
import React from 'react';

export const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    secondary: "bg-[#111111] hover:bg-[#1A1A1A] text-white border border-[#1F1F1F]",
    ghost: "text-[#A1A1AA] hover:text-white hover:bg-[#111111]"
  };
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      onClick={onClick}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};
import React from 'react';

export const Button = ({ children, variant = 'primary', href, onClick, className = '', size = 'md' }) => {
  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
  };

  const variants = {
    primary: `
      bg-[#3B82F6] hover:bg-[#2563EB] text-white
      shadow-[0_0_0_1px_rgba(59,130,246,0.5),0_0_20px_rgba(59,130,246,0.25)]
      hover:shadow-[0_0_0_1px_rgba(59,130,246,0.8),0_0_30px_rgba(59,130,246,0.4)]
    `,
    violet: `
      bg-[#8B5CF6] hover:bg-[#7C3AED] text-white
      shadow-[0_0_0_1px_rgba(139,92,246,0.5),0_0_20px_rgba(139,92,246,0.25)]
      hover:shadow-[0_0_0_1px_rgba(139,92,246,0.8),0_0_30px_rgba(139,92,246,0.4)]
    `,
    secondary: `
      bg-transparent text-[#A1A1AA] hover:text-white
      border border-[#2A2A2A] hover:border-[#404040]
      hover:bg-[#141414]
    `,
    ghost: `
      text-[#A1A1AA] hover:text-white hover:bg-[#111111]
    `,
    outline: `
      bg-transparent text-[#3B82F6] border border-[#3B82F6]/30
      hover:border-[#3B82F6]/70 hover:bg-[#3B82F6]/5
    `,
  };

  const base = `
    inline-flex items-center justify-center rounded-lg font-medium
    transition-all duration-200 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]
    active:scale-[0.97]
    ${sizes[size]}
    ${variants[variant]}
    ${className}
  `;

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={base}
    >
      {children}
    </Component>
  );
};
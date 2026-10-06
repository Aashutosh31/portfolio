import React from 'react';

export const Button = ({ children, variant = 'primary', href, onClick, className = '', size = 'md' }) => {
  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-[#7c64f2] via-[#6287f5] to-[#4a9ce8] text-white
      shadow-[0_8px_28px_rgba(105,113,247,0.30)] hover:shadow-[0_12px_36px_rgba(105,113,247,0.46)]
    `,
    violet: `
      bg-[#8B5CF6] hover:bg-[#7C3AED] text-white
      shadow-[0_0_0_1px_rgba(139,92,246,0.5),0_0_20px_rgba(139,92,246,0.25)]
      hover:shadow-[0_0_0_1px_rgba(139,92,246,0.8),0_0_30px_rgba(139,92,246,0.4)]
    `,
    secondary: `
      bg-white/[0.035] text-[#c0c4d1] hover:text-white
      border border-white/[0.12] hover:border-white/[0.25]
      hover:bg-white/[0.09]
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
    inline-flex items-center justify-center rounded-xl font-semibold
    transition-all duration-300 ease-out
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

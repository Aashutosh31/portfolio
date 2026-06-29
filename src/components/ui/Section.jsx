import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ id, className, children }) => (
  <section
    id={id}
    className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className || ''}`}
  >
    {children}
  </section>
);

export const SectionTitle = ({ eyebrow, title, subtitle, align = 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
    {eyebrow && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-eyebrow mb-4 inline-block"
      >
        {eyebrow}
      </motion.div>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: eyebrow ? 0.05 : 0 }}
      className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-[#71717A] text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : ''} max-w-2xl`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
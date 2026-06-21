import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ id, className, children }) => (
  <section id={id} className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className || ''}`}>
    {children}
  </section>
);

export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[#A1A1AA] text-lg max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
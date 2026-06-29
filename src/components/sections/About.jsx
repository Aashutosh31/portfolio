import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Target, Clock, Cpu } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

const facts = [
  { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: DATA.personal.quickFacts.location },
  { icon: <GraduationCap className="w-4 h-4" />, label: 'Degree', value: DATA.personal.quickFacts.degree },
  { icon: <Code2 className="w-4 h-4" />, label: 'Stack', value: DATA.personal.quickFacts.primaryStack },
  { icon: <Clock className="w-4 h-4" />, label: 'Building for', value: DATA.personal.quickFacts.yearsBuilding },
];

export const About = () => (
  <Section id="about" className="border-t border-[#111]">
    <div className="grid lg:grid-cols-5 gap-12 md:gap-16 items-center">
      {/* Text */}
      <div className="lg:col-span-3 space-y-6">
        <div className="section-eyebrow">about_me</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
        >
          Shipping systems,<br />
          <span className="text-[#3A3A3A]">not just writing code.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#71717A] text-lg leading-relaxed"
        >
          {DATA.personal.about}
        </motion.p>

        {/* OS badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0E0E0E] border border-[#1A1A1A] text-xs font-mono-custom text-[#555]"
        >
          <Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span className="text-[#3B82F6]">arch</span>
          <span>linux</span>
          <span className="text-[#333]">|</span>
          <span>neovim</span>
          <span className="text-[#333]">|</span>
          <span>tmux</span>
        </motion.div>
      </div>

      {/* Facts grid */}
      <div className="lg:col-span-2 grid grid-cols-2 gap-3">
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Card hover={false} className="p-4 bg-[#0A0A0A] border-[#141414]">
              <div className="text-[#3B82F6] mb-2">{f.icon}</div>
              <div className="text-[#444] text-[10px] uppercase tracking-widest font-mono-custom mb-1">
                {f.label}
              </div>
              <div className="text-white text-sm font-medium leading-snug">{f.value}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
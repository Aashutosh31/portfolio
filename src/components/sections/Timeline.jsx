import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../ui/Section';
import { DATA } from '../../data/portfolioData';

export const Timeline = () => (
  <Section id="journey" className="border-t border-[#1F1F1F]">
    <SectionTitle title="Engineering Journey" subtitle="The evolution of my skill set, documented through milestones." />
    <div className="max-w-3xl mx-auto">
      <div className="relative border-l border-[#1F1F1F] pl-8 space-y-12">
        {DATA.timeline.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 bg-[#0A0A0A] border-2 border-[#3B82F6] rounded-full" />
            <div className="text-sm text-[#3B82F6] font-mono mb-1">{item.year}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-[#A1A1AA]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Principles = () => (
  <Section id="principles">
    <SectionTitle title="Engineering Principles" subtitle="The core philosophies that guide my software design and architecture." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {DATA.principles.map((p, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          <Card className="p-6 h-full border-t-2 border-t-[#3B82F6]/50">
            <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#3B82F6] mb-4">
              {p.icon}
            </div>
            <h3 className="text-white font-medium mb-2">{p.title}</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">{p.desc}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
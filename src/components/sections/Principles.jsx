import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Principles = () => (
  <Section id="principles" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="engineering_principles"
      title="How I build"
      subtitle="Core philosophies that guide every architectural decision I make."
    />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {DATA.principles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <Card className="p-6 h-full border-[#141414] bg-[#0A0A0A] border-t-[#3B82F6]/40 border-t-2 group" hover>
            <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] mb-5 group-hover:bg-[#3B82F6]/15 transition-colors">
              {p.icon}
            </div>
            <div className="text-xs font-mono-custom text-[#333] mb-2 uppercase tracking-widest">
              principle_{String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="text-white font-semibold mb-3 leading-snug">{p.title}</h3>
            <p className="text-[#555] text-sm leading-relaxed">{p.desc}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
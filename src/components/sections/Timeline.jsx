import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../ui/Section';
import { DATA } from '../../data/portfolioData';

// Group by year
const grouped = DATA.timeline.reduce((acc, item) => {
  if (!acc[item.year]) acc[item.year] = [];
  acc[item.year].push(item);
  return acc;
}, {});

const years = Object.keys(grouped).sort((a, b) => b - a);

export const Timeline = () => (
  <Section id="journey" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="git_log"
      title="Engineering journey"
      subtitle="The commits that matter — milestones in my growth as a developer."
    />
    <div className="max-w-3xl mx-auto space-y-10">
      {years.map((year, yi) => (
        <div key={year}>
          {/* Year header */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-2xl font-bold text-white font-mono-custom">{year}</span>
            <div className="flex-1 h-px bg-[#111]" />
          </motion.div>

          <div className="relative border-l border-[#141414] pl-8 space-y-6">
            {grouped[year].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 w-3 h-3 bg-[#0A0A0A] border-2 border-[#3B82F6]/60 rounded-full" />
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

const typeStyles = {
  Release: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Architecture: 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20',
  Feature: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20',
  Experiment: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export const BuildingInPublic = () => (
  <Section id="building-in-public" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="changelog"
      title="Building in public"
      subtitle="The milestones, migrations, and experiments that shaped my projects."
    />
    <div className="max-w-3xl mx-auto">
      <div className="relative pl-8 border-l border-[#141414]">
        {DATA.buildingInPublic.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-8 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-3 w-3 h-3 rounded-full border-2 border-[#3B82F6] bg-[#0A0A0A]" />

            <Card className="p-5 border-[#141414] bg-[#0A0A0A] hover:border-[#1F1F1F]" hover glow="blue">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-mono-custom tracking-widest ${typeStyles[item.type]}`}>
                  {item.type}
                </span>
                <span className="text-[10px] text-[#333] font-mono-custom uppercase tracking-widest">
                  {item.date}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

const tagColors = {
  ARCH: 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20',
  FRONTEND: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20',
  AI: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

export const Insights = () => (
  <Section id="insights" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="engineering_log"
      title="Lessons learned"
      subtitle="Deep-dives into architecture decisions, scaling problems, and hard-won insights."
    />
    <div className="grid lg:grid-cols-3 gap-5">
      {DATA.insights.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="h-full"
        >
          <Card className="p-7 h-full flex flex-col group border-[#141414] bg-[#0A0A0A] scanline-hover" hover glow="blue">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <span className={`text-[10px] px-2 py-0.5 rounded border font-mono-custom tracking-widest ${tagColors[item.tag] || tagColors.ARCH}`}>
                {item.tag}
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#333] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
            </div>

            <h3 className="text-white font-bold text-lg leading-snug mb-4 group-hover:text-[#3B82F6] transition-colors duration-200">
              {item.title}
            </h3>

            <p className="text-[#71717A] text-sm leading-relaxed flex-1">{item.desc}</p>

            <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#111] text-[10px] font-mono-custom text-[#444] uppercase tracking-widest">
              <span>{item.date}</span>
              <span>{item.readTime}</span>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
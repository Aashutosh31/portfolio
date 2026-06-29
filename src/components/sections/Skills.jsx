import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Database, Terminal, Code2, Activity } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

const categories = [
  { icon: <Globe className="w-4 h-4" />, label: 'Frontend', key: 'frontend', color: '#3B82F6' },
  { icon: <Server className="w-4 h-4" />, label: 'Backend', key: 'backend', color: '#8B5CF6' },
  { icon: <Database className="w-4 h-4" />, label: 'Databases', key: 'database', color: '#10B981' },
  { icon: <Terminal className="w-4 h-4" />, label: 'Tools', key: 'tools', color: '#F59E0B' },
];

export const Skills = () => (
  <Section id="skills" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="tech_stack"
      title="My toolkit"
      subtitle="The technologies I use to build robust, scalable systems."
    />
    <div className="grid lg:grid-cols-2 gap-8">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.08 }}
        >
          <Card hover={false} className="p-6 border-[#141414] bg-[#0A0A0A] h-full">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 rounded-lg bg-[#0E0E0E] border border-[#1A1A1A]" style={{ color: cat.color }}>
                {cat.icon}
              </div>
              <h4 className="text-white font-semibold">{cat.label}</h4>
              <span className="ml-auto text-xs font-mono-custom text-[#333]">
                {DATA.skills[cat.key].length} techs
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {DATA.skills[cat.key].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.05 + i * 0.04 }}
                  className="
                    inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                    bg-[#0E0E0E] border border-[#1A1A1A] text-sm text-[#A1A1AA]
                    hover:text-white hover:border-[#2A2A2A] hover:bg-[#141414]
                    transition-all duration-200 cursor-default
                    font-mono-custom
                  "
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cat.color, opacity: 0.7 }}
                  />
                  {skill}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
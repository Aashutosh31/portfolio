import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Insights = () => (
  <Section id="insights" className="border-t border-[#1F1F1F]">
    <SectionTitle title="Engineering Insights" subtitle="Deep dives into architecture, scaling issues, and lessons learned the hard way." />
    <div className="grid lg:grid-cols-3 gap-6">
      {DATA.insights.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          
          <Card className="p-8 h-full flex flex-col group cursor-default border-[#1F1F1F]">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
            <div className="flex justify-between text-xs text-[#555] font-mono mb-4">
              <span>{item.date}</span>
              <span>{item.readTime}</span>
            </div>
            <h3 className="text-white font-bold text-xl mb-4 group-hover:text-[#3B82F6] transition-colors">{item.title}</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-1">{item.desc}</p>
      
            </a>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Roadmap = () => (
  <Section id="roadmap" className="bg-[#050505] border-t border-[#1F1F1F]">
    <SectionTitle title="What I'm Learning Next" subtitle="Engineering is continuous. Here is my future learning trajectory." />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {DATA.roadmap.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          <Card hover={false} className="p-6 border-[#1F1F1F] relative overflow-hidden h-full">
            <Compass className="absolute top-4 right-4 w-12 h-12 text-[#111] opacity-50 z-0" />
            <div className="relative z-10">
              <h3 className="text-white font-bold mb-4">{item.topic}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-[#555]">Current:</span>
                  <span className="text-[#A1A1AA] font-mono">{item.current}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#555]">Target:</span>
                  <span className="text-[#3B82F6] font-mono">{item.target}</span>
                </div>
              </div>
              <p className="text-[#888] text-xs leading-relaxed border-t border-[#222] pt-4">{item.reason}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
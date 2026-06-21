import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const BuildingInPublic = () => (
  <Section id="building-in-public" className="bg-[#050505] border-t border-[#1F1F1F]">
    <SectionTitle title="Building in Public" subtitle="Documenting the journey of turning ideas into production-ready software." />
    <div className="grid md:grid-cols-2 gap-6">
      {DATA.buildingInPublic.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          <Card className="p-6 border-[#1F1F1F] hover:border-[#3B82F6]/30">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[#3B82F6] text-xs font-mono font-bold bg-[#3B82F6]/10 px-3 py-1 rounded-full">{item.type}</span>
              <span className="text-[#555] text-xs font-mono">{item.date}</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">{item.desc}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
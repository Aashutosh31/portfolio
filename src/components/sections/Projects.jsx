import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Projects = ({ setRoute }) => (
  <Section id="projects" className="border-t border-[#1F1F1F]">
    <SectionTitle title="System Architecture" subtitle="Deep dives into production-grade systems I've architected from the ground up." />
    <div className="grid md:grid-cols-2 gap-8">
      {DATA.projects.map((p, i) => (
        <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          <Card className="flex flex-col h-full group cursor-pointer" onClick={() => setRoute(p.id)}>
            <div className="relative h-64 overflow-hidden border-b border-[#1F1F1F]">
              <div className="absolute inset-0 bg-[#000] opacity-20 group-hover:opacity-0 transition-opacity z-10" />
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                 <span className="bg-[#0A0A0A]/80 backdrop-blur-md border border-[#1F1F1F] text-white text-xs px-3 py-1 rounded-full font-mono">
                    {p.metrics.status}
                 </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">{p.title}</h3>
              <p className="text-[#A1A1AA] mb-6 flex-1">{p.shortDesc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.slice(0, 4).map(t => (
                  <span key={t} className="text-xs font-medium text-[#A1A1AA] bg-[#1A1A1A] px-2 py-1 rounded-md border border-[#2A2A2A]">{t}</span>
                ))}
              </div>
              
              <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between text-sm relative z-20">
                <button 
                  onClick={(e) => { e.stopPropagation(); setRoute(p.id); }}
                  className="text-white font-medium flex items-center gap-2 group/btn hover:text-[#3B82F6] transition-colors"
                >
                  Read Case Study <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all"/>
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
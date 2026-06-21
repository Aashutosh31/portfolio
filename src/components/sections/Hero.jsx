import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Twitter, ArrowRight, Server, Database, Brain } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-12">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
    
    <div className="max-w-7xl mx-auto w-full grid xl:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <Badge icon={<Terminal className="w-3 h-3 text-[#3B82F6]" />}>Software Engineer & Architect</Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-6 tracking-tight leading-tight">
          {DATA.personal.headline.split('&')[0]} &<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A1A1AA]">{DATA.personal.headline.split('&')[1]}</span>
        </h1>
        <p className="text-xl text-[#A1A1AA] mb-10 max-w-xl leading-relaxed">
          {DATA.personal.subhead}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">View Engineering Work <ArrowRight className="w-4 h-4" /></Button>
          <Button href="#contact" variant="secondary">Contact Me</Button>
        </div>
        <div className="mt-12 flex items-center gap-6 text-[#A1A1AA]">
          <a href={DATA.personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
          <a href={DATA.personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href={DATA.personal.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        className="relative grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {/* Focus Cards integrated into Hero */}
        <Card hover={false} className="p-6 bg-[#0A0A0A]/80 backdrop-blur-md border-[#1F1F1F]">
          <h3 className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-3 flex items-center gap-2"><Server className="w-4 h-4"/> Currently Building</h3>
          <ul className="space-y-2">
            {DATA.currently.building.map(i => <li key={i} className="text-white text-sm font-medium">{i}</li>)}
          </ul>
        </Card>
        
        <Card hover={false} className="p-6 bg-[#0A0A0A]/80 backdrop-blur-md border-[#1F1F1F]">
          <h3 className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-3 flex items-center gap-2"><Database className="w-4 h-4"/> Deep Learning</h3>
          <ul className="space-y-2">
            {DATA.currently.learning.map(i => <li key={i} className="text-white text-sm font-medium">{i}</li>)}
          </ul>
        </Card>

        <Card hover={false} className="p-6 bg-[#0A0A0A]/80 backdrop-blur-md border-[#1F1F1F] sm:col-span-2">
          <h3 className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-3 flex items-center gap-2"><Brain className="w-4 h-4"/> Exploring</h3>
          <div className="flex flex-wrap gap-2">
            {DATA.currently.exploring.map(i => (
              <span key={i} className="px-3 py-1 bg-[#111] border border-[#222] rounded-full text-xs text-[#A1A1AA]">{i}</span>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  </section>
);
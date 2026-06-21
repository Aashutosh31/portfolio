import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Target, Clock } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const About = () => (
  <Section id="about" className="border-t border-[#1F1F1F] bg-[#050505]">
    <div className="grid lg:grid-cols-5 gap-12 items-center">
      <div className="lg:col-span-3">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          About Me
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-[#A1A1AA] leading-relaxed">
          {DATA.personal.about}
        </motion.p>
      </div>
      
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card hover={false} className="p-4 bg-[#111]">
          <MapPin className="w-5 h-5 text-[#3B82F6] mb-2"/>
          <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-1">Location</div>
          <div className="text-white text-sm font-medium">{DATA.personal.quickFacts.location}</div>
        </Card>
        <Card hover={false} className="p-4 bg-[#111]">
          <GraduationCap className="w-5 h-5 text-[#3B82F6] mb-2"/>
          <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-1">Education</div>
          <div className="text-white text-sm font-medium">{DATA.personal.quickFacts.degree}</div>
        </Card>
        <Card hover={false} className="p-4 bg-[#111]">
          <Code2 className="w-5 h-5 text-[#3B82F6] mb-2"/>
          <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-1">Primary Stack</div>
          <div className="text-white text-sm font-medium">{DATA.personal.quickFacts.primaryStack}</div>
        </Card>
        <Card hover={false} className="p-4 bg-[#111]">
          <Clock className="w-5 h-5 text-[#3B82F6] mb-2"/>
          <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-1">Experience</div>
          <div className="text-white text-sm font-medium">{DATA.personal.quickFacts.yearsBuilding}</div>
        </Card>
      </div>
    </div>
  </Section>
);
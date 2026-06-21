import React from 'react';
import { Globe, Server, Database, Terminal, Code2, Activity } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Skills = () => (
  <Section id="skills" className="bg-[#050505] border-t border-[#1F1F1F]">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <SectionTitle title="Technology Stack" subtitle="My core ecosystem for building robust, scalable applications." />
        
        <div className="space-y-8">
          <div>
            <h4 className="text-white font-medium mb-3 flex items-center gap-2"><Globe className="w-4 h-4 text-[#3B82F6]"/> Frontend Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.frontend.map(s => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3 flex items-center gap-2"><Server className="w-4 h-4 text-[#3B82F6]"/> Backend & Architecture</h4>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.backend.map(s => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3 flex items-center gap-2"><Database className="w-4 h-4 text-[#3B82F6]"/> Database & Caching</h4>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.database.map(s => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3 flex items-center gap-2"><Terminal className="w-4 h-4 text-[#3B82F6]"/> DevOps & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.tools.map(s => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative hidden lg:block h-[400px]">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-[300px] h-[300px] border border-[#1F1F1F] rounded-full animate-[spin_60s_linear_infinite] absolute opacity-50"/>
           <div className="w-[200px] h-[200px] border border-[#3B82F6]/30 rounded-full animate-[spin_40s_linear_infinite_reverse] absolute"/>
           
           <Card hover={false} className="relative z-10 w-24 h-24 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)] bg-[#0A0A0A]">
             <Code2 className="w-8 h-8 text-white"/>
           </Card>

           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
             <Card hover={false} className="p-3 bg-[#111]"><Globe className="w-5 h-5 text-[#3B82F6]"/></Card>
           </div>
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
             <Card hover={false} className="p-3 bg-[#111]"><Database className="w-5 h-5 text-[#3B82F6]"/></Card>
           </div>
           <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2">
             <Card hover={false} className="p-3 bg-[#111]"><Server className="w-5 h-5 text-[#3B82F6]"/></Card>
           </div>
           <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2">
             <Card hover={false} className="p-3 bg-[#111]"><Activity className="w-5 h-5 text-[#3B82F6]"/></Card>
           </div>
        </div>
      </div>
    </div>
  </Section>
);
import React from 'react';
import { Code2, BookOpen, Search, ChevronRight, Activity } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Dashboard = () => (
  <Section id="dashboard" className="border-t border-[#1F1F1F] bg-[#050505]">
    <SectionTitle title="Currently" subtitle="A live look at what I'm building, learning, and exploring." />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="p-6">
        <h3 className="text-[#A1A1AA] text-sm font-medium mb-4 flex items-center gap-2"><Code2 className="w-4 h-4"/> Building</h3>
        <p className="text-white font-medium">{DATA.currently.building}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-[#A1A1AA] text-sm font-medium mb-4 flex items-center gap-2"><BookOpen className="w-4 h-4"/> Learning</h3>
        <ul className="space-y-2">
          {DATA.currently.learning.map(i => <li key={i} className="text-white text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#3B82F6]"/> {i}</li>)}
        </ul>
      </Card>
      <Card className="p-6">
        <h3 className="text-[#A1A1AA] text-sm font-medium mb-4 flex items-center gap-2"><Search className="w-4 h-4"/> Exploring</h3>
        <ul className="space-y-2">
          {DATA.currently.exploring.map(i => <li key={i} className="text-white text-sm flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#3B82F6]"/> {i}</li>)}
        </ul>
      </Card>
      <Card className="p-6 border-[#3B82F6]/30 bg-[#3B82F6]/5">
        <h3 className="text-[#3B82F6] text-sm font-medium mb-4 flex items-center gap-2"><Activity className="w-4 h-4"/> Core Focus</h3>
        <p className="text-white font-medium">{DATA.currently.focus}</p>
      </Card>
    </div>
  </Section>
);
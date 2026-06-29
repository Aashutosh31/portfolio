import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, Search, ChevronRight, Activity, Zap } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Dashboard = () => (
  <Section id="dashboard" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="current_state"
      title="What I'm up to"
      subtitle="A live snapshot of what I'm building, learning, and exploring right now."
    />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        {
          icon: <Code2 className="w-4 h-4 text-[#3B82F6]" />,
          label: 'Building',
          content: DATA.currently.building,
          accent: 'blue',
        },
        {
          icon: <BookOpen className="w-4 h-4 text-[#8B5CF6]" />,
          label: 'Learning',
          content: DATA.currently.learning,
          accent: 'violet',
        },
        {
          icon: <Search className="w-4 h-4 text-emerald-400" />,
          label: 'Exploring',
          content: DATA.currently.exploring,
          accent: 'green',
        },
        {
          icon: <Activity className="w-4 h-4 text-[#3B82F6]" />,
          label: 'Core Focus',
          content: [DATA.currently.focus],
          accent: 'blue',
          highlight: true,
        },
      ].map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <Card
            hover={false}
            className={`p-5 h-full border-[#141414] ${item.highlight ? 'bg-[#3B82F6]/5 border-[#3B82F6]/15' : 'bg-[#0A0A0A]'}`}
          >
            <h3 className="text-[#555] text-xs font-mono-custom uppercase tracking-widest mb-4 flex items-center gap-2">
              {item.icon}
              {item.label}
            </h3>
            <ul className="space-y-2">
              {item.content.map(text => (
                <li key={text} className="text-white text-sm flex items-start gap-2 leading-snug">
                  <ChevronRight className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                    item.accent === 'blue' ? 'text-[#3B82F6]' :
                    item.accent === 'violet' ? 'text-[#8B5CF6]' :
                    'text-emerald-400'
                  }`} />
                  {text}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);
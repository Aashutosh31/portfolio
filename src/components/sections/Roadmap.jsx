import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

function ProgressBar({ progress, color }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-1.5 bg-[#141414] rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={started ? { width: `${progress}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export const Roadmap = () => (
  <Section id="roadmap" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="learning_trajectory"
      title="What's next"
      subtitle="Continuous engineering — the skills I'm actively leveling up."
    />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {DATA.roadmap.map((item, i) => {
        const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'];
        const color = colors[i % colors.length];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Card hover={false} className="p-5 border-[#141414] bg-[#0A0A0A] h-full relative overflow-hidden">
              <Compass className="absolute top-3 right-3 w-10 h-10 text-[#111] opacity-60" />
              <div className="relative">
                <div className="text-xs font-mono-custom mb-4 uppercase tracking-widest" style={{ color }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-white font-semibold mb-1">{item.topic}</h3>

                <div className="space-y-1.5 mb-4">
                  <div className="flex justify-between text-[10px] font-mono-custom">
                    <span className="text-[#333] uppercase tracking-widest">now</span>
                    <span className="text-[#555]">{item.current}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono-custom">
                    <span className="text-[#333] uppercase tracking-widest">target</span>
                    <span style={{ color }}>{item.target}</span>
                  </div>
                </div>

                <ProgressBar progress={item.progress} color={color} />

                <p className="text-[#444] text-xs leading-relaxed mt-4">{item.reason}</p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  </Section>
);
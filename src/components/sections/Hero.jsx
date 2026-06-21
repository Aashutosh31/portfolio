import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { DATA } from '../../data/portfolioData';

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
    
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <Badge icon={<Terminal className="w-3 h-3 text-[#3B82F6]" />}>System Architect & Developer</Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-6 tracking-tight leading-tight">
          Engineering <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A1A1AA]">Digital Reality.</span>
        </h1>
        <p className="text-xl text-[#A1A1AA] mb-10 max-w-xl leading-relaxed">
          {DATA.personal.tagline} {DATA.personal.about}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">View Architecture <ArrowRight className="w-4 h-4" /></Button>
          <Button href="#contact" variant="secondary">Open Communication</Button>
        </div>
        <div className="mt-12 flex items-center gap-6 text-[#A1A1AA]">
          <a href={DATA.personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
          <a href={DATA.personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href={DATA.personal.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/10 to-transparent blur-2xl rounded-3xl" />
        <Card hover={false} className="relative bg-[#0A0A0A]/80 backdrop-blur border-[#1F1F1F] p-4 shadow-2xl">
          <div className="flex items-center gap-2 mb-4 border-b border-[#1F1F1F] pb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="mx-auto text-xs text-[#A1A1AA] bg-[#111] px-3 py-1 rounded-md border border-[#1F1F1F] flex items-center gap-2">
              <Shield className="w-3 h-3" /> production.terminal
            </div>
          </div>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between items-center bg-[#111] p-3 rounded border border-[#1F1F1F]">
              <span className="text-[#A1A1AA]">Status</span>
              <span className="text-[#3B82F6] flex items-center gap-2"><div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" /> All Systems Operational</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#111] p-3 rounded border border-[#1F1F1F]">
                <div className="text-[#A1A1AA] text-xs mb-1">Active Memory Nodes</div>
                <div className="text-white text-lg">1,024 vectors</div>
              </div>
              <div className="bg-[#111] p-3 rounded border border-[#1F1F1F]">
                <div className="text-[#A1A1AA] text-xs mb-1">Socket Connections</div>
                <div className="text-white text-lg">84ms ping</div>
              </div>
            </div>
            <div className="bg-[#111] p-3 rounded border border-[#1F1F1F] text-[#A1A1AA]">
              <span className="text-green-400">➜</span> ~ workspace: <span className="text-white">npm run build --production</span><br/>
              <span className="text-[#3B82F6]">✓ Build successful in 4.2s</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  </section>
);

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { DATA } from '../../data/portfolioData';

export const Contact = () => (
  <Section id="contact" className="border-t border-[#111]">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl border border-[#141414] bg-[#0A0A0A] p-12 md:p-16 text-center overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#3B82F6] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="section-eyebrow mb-6 block">get_in_touch</div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's build something<br />
            <span className="gradient-text-blue">extraordinary.</span>
          </h2>

          <p className="text-[#71717A] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Open to new opportunities, collaborations, and interesting engineering problems.
            My inbox is always open.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Button href={`mailto:${DATA.personal.socials.email}`} variant="primary" size="lg">
              <Mail className="w-4 h-4" />
              Send email
            </Button>
            <Button href={DATA.personal.socials.linkedin} variant="secondary" size="lg">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button href={DATA.personal.socials.github} variant="secondary" size="lg">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </div>

          {/* Status pills */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#555]">
            <div className="flex items-center gap-2 bg-[#0E0E0E] border border-[#141414] px-4 py-2 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Avg. response: <strong className="text-[#A1A1AA]">24h</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-[#0E0E0E] border border-[#141414] px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 font-medium">Open to opportunities</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-[#0E0E0E] flex flex-col md:flex-row justify-between items-center text-xs text-[#333] font-mono-custom gap-4">
        <p>© {new Date().getFullYear()} Aashutosh Bairagi — engineered with React &amp; Tailwind</p>
        <div className="flex items-center gap-4">
          <a href={DATA.personal.socials.twitter} target="_blank" rel="noreferrer"
            className="text-[#333] hover:text-white transition-colors">Twitter</a>
          <a href={DATA.personal.socials.github} target="_blank" rel="noreferrer"
            className="text-[#333] hover:text-white transition-colors">GitHub</a>
          <a href={DATA.personal.socials.linkedin} target="_blank" rel="noreferrer"
            className="text-[#333] hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </Section>
);
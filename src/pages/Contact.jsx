import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { DATA } from '../data/portfolioData';

export const ContactPage = ({ setRoute }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#0A0A0A] pt-24 pb-12 flex flex-col justify-center grid-bg"
    >
      <div className="max-w-3xl mx-auto px-6 w-full">
        <button
          onClick={() => setRoute('home')}
          className="flex items-center gap-2 text-[#555] hover:text-white mb-10 transition-colors text-sm font-mono-custom group"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </button>

        <div className="rounded-3xl border border-[#141414] bg-[#0A0A0A] p-12 md:p-16 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#3B82F6] opacity-[0.04] blur-[80px] rounded-full" />

          <div className="relative z-10">
            <div className="section-eyebrow mb-6 block">get_in_touch</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's build something<br />
              <span className="gradient-text-blue">amazing.</span>
            </h2>
            <p className="text-[#71717A] text-lg mb-10 max-w-xl mx-auto">
              Open to new opportunities, collaborations, and interesting engineering challenges.
              My inbox is always open.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
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
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#0E0E0E] flex flex-col md:flex-row justify-between items-center text-xs text-[#333] font-mono-custom gap-4">
          <p>© {new Date().getFullYear()} Aashutosh Bairagi — engineered with React &amp; Tailwind</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500">Available for work</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
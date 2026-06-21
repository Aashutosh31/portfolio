import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { DATA } from '../data/portfolioData';

export const ContactPage = ({ setRoute }) => {
  // Always scroll to top when the page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-[#0A0A0A] pt-24 pb-12 flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <button onClick={() => setRoute('home')} className="flex items-center gap-2 text-[#A1A1AA] hover:text-white mb-8 transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </button>
        
        <div className="bg-[#111] border border-[#1F1F1F] rounded-3xl p-12 md:p-20 text-center shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Build Something <br/>Amazing.</h2>
          <p className="text-[#A1A1AA] text-lg mb-12 max-w-2xl mx-auto">
            I am currently open to new opportunities, collaborations, and engineering challenges. My inbox is always open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${DATA.personal.socials.email}`} variant="primary" className="py-4 px-8 text-lg">
              Send Email <Mail className="w-5 h-5"/>
            </Button>
            <Button href={DATA.personal.socials.linkedin} variant="secondary" className="py-4 px-8 text-lg">
              <Linkedin className="w-5 h-5"/>
            </Button>
          </div>
          
          <div className="mt-20 pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center text-sm text-[#555]">
            <p>© {new Date().getFullYear()} Aashutosh Bairagi. Engineered with React & Tailwind.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/> Available for work
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
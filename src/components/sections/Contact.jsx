import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { DATA } from '../../data/portfolioData';

export const Contact = () => (
  <Section id="contact" className="border-t border-[#1F1F1F] bg-[#050505]">
    <div className="max-w-4xl mx-auto text-center py-16">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Build Something <br/>Amazing.</h2>
      <p className="text-[#A1A1AA] text-lg mb-10 max-w-2xl mx-auto">
        I am currently open to new opportunities, collaborations, and engineering challenges. My inbox is always open.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button href={`mailto:${DATA.personal.socials.email}`} variant="primary" className="py-4 px-8 text-lg">Send Email <Mail className="w-5 h-5"/></Button>
        <Button href={DATA.personal.socials.linkedin} variant="secondary" className="py-4 px-8 text-lg"><Linkedin className="w-5 h-5"/></Button>
      </div>
      
      <div className="mt-16 pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center text-sm text-[#555]">
        <p>© {new Date().getFullYear()} Ashutosh Bairagi. Engineered with React & Tailwind.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/> Available for work
        </div>
      </div>
    </div>
  </Section>
);
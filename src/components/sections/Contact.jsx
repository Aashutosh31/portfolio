import React from 'react';
import { Mail, Linkedin, Clock, CheckCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { DATA } from '../../data/portfolioData';

export const Contact = () => (
  <Section id="contact" className="border-t border-[#1F1F1F] bg-[#0A0A0A]">
    <div className="max-w-4xl mx-auto text-center py-16">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Interested in AI, Product Development,<br/>or Software Engineering?</h2>
      <p className="text-[#A1A1AA] text-lg mb-10 max-w-2xl mx-auto">
        Let's connect. Whether it's a technical discussion, an open-source collaboration, or a new professional opportunity, my inbox is open.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button href={`mailto:${DATA.personal.socials.email}`} variant="primary" className="py-4 px-8 text-lg">Send Email <Mail className="w-5 h-5"/></Button>
        <Button href={DATA.personal.socials.linkedin} variant="secondary" className="py-4 px-8 text-lg">Connect on LinkedIn <Linkedin className="w-5 h-5"/></Button>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-[#A1A1AA] bg-[#111] border border-[#1F1F1F] rounded-2xl p-6 w-fit mx-auto">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#3B82F6]" />
          <span><strong className="text-white">Avg Response:</strong> 24 Hours</span>
        </div>
        <div className="w-px h-4 bg-[#333] hidden sm:block" />
        <div className="flex items-center gap-3">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span><strong className="text-white">Status:</strong> Open to Opportunities</span>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center text-sm text-[#555]">
        <p>© {new Date().getFullYear()} Aashutosh Bairagi. Engineered with React & Tailwind.</p>
      </div>
    </div>
  </Section>
);
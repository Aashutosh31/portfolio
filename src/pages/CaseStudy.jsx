import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, PlayCircle, BookOpen, Activity, Shield, Layers, Globe, Server, Database, Wrench } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { DATA } from '../data/portfolioData';

export const CaseStudy = ({ project, setRoute }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  useEffect(() => { 
    window.scrollTo(0, 0);
    setIsVideoPlaying(false);
  }, [project]);
  
  if (!project) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#0A0A0A] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <button onClick={() => setRoute('home')} className="flex items-center gap-2 text-[#A1A1AA] hover:text-white mb-8 transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </button>
     
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{project.title}</h1>
            <span className="px-3 py-1 bg-[#111] border border-[#1F1F1F] text-[#3B82F6] rounded-full text-sm font-mono mt-4">
              {project.metrics.status}
            </span>
          </div>
          <p className="text-xl text-[#A1A1AA] leading-relaxed mb-8">{project.shortDesc}</p>
          
          <div className="flex flex-wrap gap-4">
            <Button href={project.links.demo} variant="primary">Live Demo <ExternalLink className="w-4 h-4"/></Button>
            <Button href={project.links.github} variant="secondary">View Source <Github className="w-4 h-4"/></Button>
          </div>
        </div>

        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#1F1F1F] mb-16 relative bg-black">
           {!isVideoPlaying ? (
             <div className="absolute inset-0 cursor-pointer group" onClick={() => setIsVideoPlaying(true)}>
               <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-50 transition-opacity duration-300" />
               <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/50 transition-all duration-300">
                  <PlayCircle className="w-20 h-20 text-white opacity-90 scale-90 group-hover:scale-100 transition-transform duration-300 drop-shadow-2xl" />
               </div>
             </div>
           ) : (
             <video src={project.video} controls autoPlay className="w-full h-full object-contain bg-black outline-none">
               Your browser does not support the video tag.
             </video>
           )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Card hover={false} className="p-4 text-center">
            <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-1">Dev Time</div>
            <div className="text-white font-medium">{project.metrics.time}</div>
          </Card>
          <Card hover={false} className="p-4 text-center">
            <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-1">Complexity</div>
            <div className="text-white font-medium">{project.metrics.complexity}</div>
          </Card>
          <Card hover={false} className="p-4 text-center">
            <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-1">Architecture</div>
            <div className="text-white font-medium">{project.metrics.architecture}</div>
          </Card>
          <Card hover={false} className="p-4 text-center">
            <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-1">Role</div>
            <div className="text-white font-medium">Solo Architect</div>
          </Card>
        </div>

        <div className="prose prose-invert max-w-none prose-lg space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-[#3B82F6]"/> The Objective</h2>
            <p className="text-[#A1A1AA] leading-relaxed">{project.overview}</p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover={false} className="p-8 border-l-4 border-l-red-500/50">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Activity className="w-5 h-5 text-red-400"/> Problem Statement</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">{project.problem}</p>
            </Card>
            <Card hover={false} className="p-8 border-l-4 border-l-green-500/50">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-green-400"/> Engineered Solution</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">{project.solution}</p>
            </Card>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Layers className="w-5 h-5 text-[#3B82F6]"/> System Architecture</h2>
            <div className="space-y-4 relative">
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-[#1F1F1F]" />
              {project.architecture.map((layer, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 relative z-10">
                  <div className="hidden md:flex w-16 h-16 rounded-2xl bg-[#111] border border-[#1F1F1F] items-center justify-center shrink-0 shadow-lg">
                    {i === 0 ? <Globe className="text-[#A1A1AA]"/> : i === 1 ? <Server className="text-[#A1A1AA]"/> : <Database className="text-[#A1A1AA]"/>}
                  </div>
                  <Card hover={false} className="p-6 flex-1 bg-[#111]/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-bold">{layer.layer} Layer</h4>
                      <span className="text-xs font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-1 rounded">{layer.tech}</span>
                    </div>
                    <p className="text-[#A1A1AA] text-sm m-0">{layer.desc}</p>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Wrench className="w-5 h-5 text-[#3B82F6]"/> Technical Challenges</h2>
            <div className="grid gap-4">
              {project.challenges.map((c, i) => (
                <Card hover={false} key={i} className="p-6 bg-[#050505]">
                  <h4 className="text-white font-medium mb-2">{c.title}</h4>
                  <p className="text-[#A1A1AA] text-sm m-0 leading-relaxed">{c.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-[#111] border border-[#1F1F1F] rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-4">Engineering Insight</h2>
            <p className="text-[#A1A1AA] italic m-0">"{project.lessons}"</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
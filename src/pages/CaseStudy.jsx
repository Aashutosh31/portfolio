import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, PlayCircle, BookOpen, Activity, Shield, Layers, Wrench, Terminal, GitMerge, Box, Server, Database } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const CaseStudy = ({ project, setRoute }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0);
    setIsVideoPlaying(false);
  }, [project]);
  
  if (!project) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#0A0A0A] pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navigation & Header */}
        <button onClick={() => setRoute('home')} className="flex items-center gap-2 text-[#A1A1AA] hover:text-white mb-8 transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Architecture Index
        </button>
        
        <div className="mb-12 border-b border-[#1F1F1F] pb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">{project.title}</h1>
              <span className="px-3 py-1 bg-[#111] border border-[#3B82F6]/30 text-[#3B82F6] rounded-full text-sm font-mono inline-flex items-center gap-2">
                <Activity className="w-3 h-3"/> {project.metrics.status}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button href={project.links.demo} variant="primary">Live Product <ExternalLink className="w-4 h-4"/></Button>
              <Button href={project.links.github} variant="secondary">Source Code <Github className="w-4 h-4"/></Button>
            </div>
          </div>
          <p className="text-xl text-[#A1A1AA] leading-relaxed max-w-3xl">{project.shortDesc}</p>
        </div>

        {/* Demo Center */}
        <div className="mb-16">
          <h2 className="text-sm font-bold text-[#A1A1AA] uppercase tracking-wider mb-4 flex items-center gap-2"><PlayCircle className="w-4 h-4"/> Project Demo Center</h2>
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#1F1F1F] relative bg-black shadow-2xl">
             {!isVideoPlaying ? (
               <div className="absolute inset-0 cursor-pointer group" onClick={() => setIsVideoPlaying(true)}>
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-12 h-12 text-white" />
                    </div>
                 </div>
               </div>
             ) : (
               <video src={project.video} controls autoPlay className="w-full h-full object-contain bg-black outline-none">
                 Your browser does not support the video tag.
               </video>
             )}
          </div>
        </div>

        {/* Advanced Engineering Metrics */}
        <div className="mb-20">
          <h2 className="text-sm font-bold text-[#A1A1AA] uppercase tracking-wider mb-4 flex items-center gap-2"><Activity className="w-4 h-4"/> Engineering Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card hover={false} className="p-5 bg-[#111]/50 border-[#1F1F1F]">
              <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-2 flex items-center gap-2"><Terminal className="w-3 h-3"/> Dev Time</div>
              <div className="text-white font-bold text-xl">{project.metrics.time}</div>
            </Card>
            <Card hover={false} className="p-5 bg-[#111]/50 border-[#1F1F1F]">
              <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-2 flex items-center gap-2"><GitMerge className="w-3 h-3"/> Est. LOC</div>
              <div className="text-white font-bold text-xl">{project.metrics.loc}</div>
            </Card>
            <Card hover={false} className="p-5 bg-[#111]/50 border-[#1F1F1F]">
              <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-2 flex items-center gap-2"><Server className="w-3 h-3"/> Endpoints</div>
              <div className="text-white font-bold text-xl">{project.metrics.endpoints}</div>
            </Card>
            <Card hover={false} className="p-5 bg-[#111]/50 border-[#1F1F1F]">
              <div className="text-[#A1A1AA] text-xs uppercase tracking-wider mb-2 flex items-center gap-2"><Database className="w-3 h-3"/> DB Collections</div>
              <div className="text-white font-bold text-xl">{project.metrics.collections}</div>
            </Card>
          </div>
        </div>

        <div className="prose prose-invert max-w-none prose-lg space-y-20">
          
          {/* Problem / Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Activity className="w-6 h-6 text-red-400"/> Problem Statement</h3>
              <p className="text-[#A1A1AA] leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Shield className="w-6 h-6 text-green-400"/> Engineered Solution</h3>
              <p className="text-[#A1A1AA] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Visual Architecture Diagram */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2"><Layers className="w-6 h-6 text-[#3B82F6]"/> System Architecture</h2>
            
            {project.architectureNodes && (
              <Card hover={false} className="p-8 md:p-12 bg-[#050505] border-[#1F1F1F] overflow-x-auto relative">
                <div className="min-w-[600px] flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                  
                  {/* Background Connection Line */}
                  <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent -translate-y-1/2 hidden md:block z-0" />

                  {['frontend', 'backend', 'database'].map((type, groupIdx) => (
                    <div key={type} className="flex flex-col gap-6 relative z-10 w-full md:w-1/3">
                      <div className="text-center text-xs font-mono uppercase text-[#555] tracking-widest">{type} Layer</div>
                      {project.architectureNodes.filter(n => n.type === type || (type === 'database' && n.type === 'external')).map((node, i) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (groupIdx * 0.2) + (i * 0.1) }}
                          key={node.id} 
                          className="bg-[#111] border border-[#222] p-4 rounded-xl shadow-xl text-center relative group"
                        >
                          <div className="w-10 h-10 mx-auto bg-[#1A1A1A] rounded-lg border border-[#333] flex items-center justify-center text-[#3B82F6] mb-3 group-hover:scale-110 group-hover:border-[#3B82F6]/50 transition-all">
                            {node.icon}
                          </div>
                          <h4 className="text-white font-bold text-sm m-0">{node.label}</h4>
                          <span className="text-[#A1A1AA] text-xs font-mono mt-1 block">{node.tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </section>

          {/* Technical Challenges */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2"><Wrench className="w-6 h-6 text-[#3B82F6]"/> Technical Challenges Solved</h2>
            <div className="grid gap-6">
              {project.challenges.map((c, i) => (
                <Card hover={false} key={i} className="p-6 md:p-8 bg-[#111] border-l-4 border-l-[#3B82F6]">
                  <h4 className="text-white font-bold text-xl mb-3 m-0">{c.title}</h4>
                  <p className="text-[#A1A1AA] m-0 leading-relaxed">{c.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Engineering Insights */}
          <section className="bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-[#1F1F1F] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <Box className="w-10 h-10 text-[#3B82F6] mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-6 m-0">Engineering Takeaway</h2>
            <p className="text-xl text-[#A1A1AA] italic leading-relaxed max-w-3xl mx-auto">"{project.lessons}"</p>
          </section>
          
        </div>
      </div>
    </motion.div>
  );
};
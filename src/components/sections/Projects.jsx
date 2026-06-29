import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Activity } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { DATA } from '../../data/portfolioData';

function ProjectCard({ project, index, setRoute }) {
  const isBlue = project.accentColor === '#3B82F6';
  const accentClass = isBlue ? 'text-[#3B82F6]' : 'text-[#8B5CF6]';
  const borderHoverClass = isBlue
    ? 'hover:border-[#3B82F6]/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]'
    : 'hover:border-[#8B5CF6]/30 hover:shadow-[0_0_50px_rgba(139,92,246,0.08)]';
  const bgAccent = isBlue ? 'bg-[#3B82F6]' : 'bg-[#8B5CF6]';
  const tagBg = isBlue ? 'bg-[#3B82F6]/8 text-[#3B82F6] border-[#3B82F6]/15' : 'bg-[#8B5CF6]/8 text-[#8B5CF6] border-[#8B5CF6]/15';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      <div
        className={`
          group relative flex flex-col h-full
          bg-[#0A0A0A] border border-[#141414] rounded-2xl overflow-hidden
          transition-all duration-500 cursor-pointer
          ${borderHoverClass}
        `}
        onClick={() => { setRoute(project.id); window.scrollTo(0, 0); }}
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setRoute(project.id)}
        role="button"
        aria-label={`View ${project.title} case study`}
      >
        {/* Image area */}
        <div className="relative h-56 overflow-hidden border-b border-[#141414] bg-[#080808]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-700"
          />

          {/* Status chip */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-[#080808]/90 backdrop-blur-sm border border-[#1A1A1A] text-white text-xs px-3 py-1.5 rounded-full font-mono-custom">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {project.metrics.status}
          </div>

          {/* Architecture label */}
          <div className="absolute top-4 right-4 z-20 text-xs font-mono-custom text-[#555] bg-[#080808]/90 backdrop-blur-sm border border-[#1A1A1A] px-2.5 py-1 rounded-full">
            {project.metrics.architecture}
          </div>

          {/* Accent line at bottom of image */}
          <div className={`absolute bottom-0 left-0 right-0 h-px ${bgAccent} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-20`} />
        </div>

        {/* Content */}
        <div className="p-7 flex-1 flex flex-col">
          {/* Metric row */}
          <div className="flex gap-4 mb-5">
            {[
              { label: 'Dev time', value: project.metrics.time },
              { label: 'LOC', value: project.metrics.loc },
              { label: 'Endpoints', value: project.metrics.endpoints },
            ].map(m => (
              <div key={m.label} className="flex flex-col">
                <span className="text-[10px] text-[#333] font-mono-custom uppercase tracking-widest">{m.label}</span>
                <span className={`text-sm font-bold font-mono-custom ${accentClass}`}>{m.value}</span>
              </div>
            ))}
          </div>

          <h3 className={`text-3xl font-bold text-white mb-3 group-hover:${accentClass} transition-colors duration-300`}>
            {project.title}
          </h3>
          <p className="text-[#71717A] text-sm leading-relaxed mb-6 flex-1">{project.shortDesc}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.slice(0, 5).map(t => (
              <span key={t} className={`text-xs px-2 py-0.5 rounded border font-mono-custom ${tagBg}`}>
                {t}
              </span>
            ))}
          </div>

          {/* Footer actions */}
          <div className="pt-4 border-t border-[#111] flex items-center justify-between">
            <button
              onClick={e => { e.stopPropagation(); setRoute(project.id); window.scrollTo(0, 0); }}
              className={`text-sm font-medium flex items-center gap-2 ${accentClass} hover:gap-3 transition-all duration-200`}
            >
              Read case study
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="text-[#444] hover:text-white transition-colors p-1.5 rounded hover:bg-[#141414]"
                aria-label="Live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="text-[#444] hover:text-white transition-colors p-1.5 rounded hover:bg-[#141414]"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const Projects = ({ setRoute }) => (
  <Section id="projects" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="system_architecture"
      title="What I've built"
      subtitle="Deep dives into production systems engineered from scratch."
    />
    <div className="grid md:grid-cols-2 gap-6">
      {DATA.projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} setRoute={setRoute} />
      ))}
    </div>
  </Section>
);
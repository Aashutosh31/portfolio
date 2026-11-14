import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Trash2,
  BrainCircuit,
  ScanFace,
  CalendarCheck2,
  Mic,
  BadgeCheck,
  Trophy,
  LockKeyhole,
  Layers,
  Sparkles,
  Check,
  ShieldCheck,
} from "lucide-react";
import { Section, SectionTitle } from "../ui/Section";
import { Card } from "../ui/Card";
import { DATA } from "../../data/portfolioData";

const icons = {
  trash: Trash2,
  brain: BrainCircuit,
  scan: ScanFace,
  calendar: CalendarCheck2,
  mic: Mic,
  badge: BadgeCheck,
  trophy: Trophy,
};

const accents = {
  blue: {
    text: "text-[#3B82F6]",
    bg: "bg-[#3B82F6]",
    soft: "bg-[#3B82F6]/10",
    border: "border-[#3B82F6]/20",
    hover:
      "hover:border-[#3B82F6]/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]",
    header: "from-[#3B82F6]/15 via-[#3B82F6]/[0.04] to-transparent",
  },
  violet: {
    text: "text-[#8B5CF6]",
    bg: "bg-[#8B5CF6]",
    soft: "bg-[#8B5CF6]/10",
    border: "border-[#8B5CF6]/20",
    hover:
      "hover:border-[#8B5CF6]/30 hover:shadow-[0_0_50px_rgba(139,92,246,0.08)]",
    header: "from-[#8B5CF6]/15 via-[#8B5CF6]/[0.04] to-transparent",
  },
  emerald: {
    text: "text-[#10B981]",
    bg: "bg-[#10B981]",
    soft: "bg-[#10B981]/10",
    border: "border-[#10B981]/20",
    hover:
      "hover:border-[#10B981]/30 hover:shadow-[0_0_50px_rgba(16,185,129,0.08)]",
    header: "from-[#10B981]/15 via-[#10B981]/[0.04] to-transparent",
  },
  amber: {
    text: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]",
    soft: "bg-[#F59E0B]/10",
    border: "border-[#F59E0B]/20",
    hover:
      "hover:border-[#F59E0B]/30 hover:shadow-[0_0_50px_rgba(245,158,11,0.08)]",
    header: "from-[#F59E0B]/15 via-[#F59E0B]/[0.04] to-transparent",
  },
};

function BuildCard({ project, index }) {
  const accent = accents[project.accent] || accents.blue;
  const Icon = icons[project.icon] || Layers;
  const hasLinks = project.links?.demo || project.links?.github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="h-full"
    >
      <div
        className={`group relative flex flex-col h-full bg-[#121523]/70 border border-white/[0.09] rounded-2xl overflow-hidden transition-all duration-500 ${accent.hover}`}
      >
        {/* Card art */}
        <div
          className={`relative h-32 border-b border-white/[0.09] bg-gradient-to-br ${accent.header} overflow-hidden`}
        >
          <div className="absolute inset-0 grid-bg opacity-50" />
          <Icon
            className={`absolute -right-5 -bottom-7 w-32 h-32 ${accent.text} opacity-[0.09]`}
            strokeWidth={1.25}
          />
          <div className="absolute top-4 left-5 flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${accent.bg}`} />
            <span className="text-[10px] font-mono-custom uppercase tracking-widest text-[#b9b9ff]">
              {project.category}
            </span>
          </div>
          <div className="absolute top-4 right-5">
            <span className="text-[10px] font-mono-custom px-2 py-1 rounded-full border border-white/[0.09] bg-[#121523]/80 text-[#b9b9ff]">
              {project.status}
            </span>
          </div>
          <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-lg ${accent.soft} border ${accent.border} flex items-center justify-center ${accent.text}`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-mono-custom text-[#b9b9ff]">
              {project.meta}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-[#b9b9ff] text-sm leading-relaxed flex-1">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] px-2 py-0.5 rounded border font-mono-custom ${accent.soft} ${accent.text} ${accent.border}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-[#111] flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b9b9ff] hover:text-white transition-colors p-1.5 rounded hover:bg-[#141414]"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b9b9ff] hover:text-white transition-colors p-1.5 rounded hover:bg-[#141414]"
                  aria-label={`${project.title} source code`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {!hasLinks && (
                <span className="inline-flex items-center gap-1.5 text-[10px] text-[#b9b9ff] font-mono-custom">
                  <LockKeyhole className="w-3 h-3" />
                  Private build
                </span>
              )}
            </div>
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className={`text-xs font-medium inline-flex items-center gap-1.5 ${accent.text} hover:gap-2.5 transition-all duration-200`}
              >
                Visit
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LatestBuild() {
  const build = DATA.latestBuild;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <div className="group relative grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-center bg-[#121523]/70 border border-white/[0.09] rounded-2xl p-7 md:p-9 overflow-hidden hover:border-[#10B981]/25 hover:shadow-[0_0_60px_rgba(16,185,129,0.07)] transition-all duration-500">
        <div className="absolute -top-24 -right-10 w-72 h-72 bg-[#10B981] opacity-[0.06] blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono-custom uppercase tracking-widest text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-2.5 py-1 rounded-full">
              <Sparkles className="w-3 h-3" />
              New release
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono-custom text-[#b9b9ff] bg-white/[0.03] border border-white/[0.09] px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3 h-3 text-[#10B981]" />
              No telemetry · no servers
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {build.title}
          </h3>
          <p className="text-[#b9b9ff] leading-relaxed mb-5 max-w-xl">
            {build.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {build.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded border font-mono-custom bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={build.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-sm font-semibold hover:bg-[#10B981]/15 hover:border-[#10B981]/40 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              View source
            </a>
            <span className="text-[11px] font-mono-custom text-[#b9b9ff]">
              {build.meta}
            </span>
          </div>
        </div>

        {/* Stylized extension popup */}
        <div className="relative z-10 mx-auto w-full max-w-[320px]">
          <div className="rounded-xl border border-white/[0.12] bg-[#0e1120]/90 shadow-[0_24px_70px_rgba(0,0,0,0.45)] overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.08] bg-white/[0.03]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 text-[9px] text-[#b9b9ff] font-mono-custom">
                bulk-delete — popup
              </span>
              <span className="ml-auto text-[9px] text-[#28C840] font-mono-custom">
                local
              </span>
            </div>
            <div className="p-3 space-y-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 bg-white/[0.02] border border-white/[0.04]"
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-[4px] border flex items-center justify-center ${
                      i < 3
                        ? "bg-[#10B981] border-[#10B981]"
                        : "border-white/20"
                    }`}
                  >
                    {i < 3 && (
                      <Check
                        className="w-2.5 h-2.5 text-[#080a13]"
                        strokeWidth={3}
                      />
                    )}
                  </div>
                  <span className="text-[10px] text-[#b9b9ff]">
                    Conversation 0{i + 1}
                  </span>
                </div>
              ))}
              <div className="mt-2 flex items-center justify-between rounded-lg px-2.5 py-2 bg-red-500/10 border border-red-500/25">
                <span className="text-[10px] text-red-400 font-mono-custom">
                  Delete selected
                </span>
                <span className="text-[10px] font-mono-custom text-red-400">
                  3
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#10B981] opacity-[0.12] blur-[45px] rounded-full pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}

export const MoreBuilds = () => (
  <Section id="more-builds" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="shipped_tools"
      title="More builds"
      subtitle="The other products I've shipped — mobile, hackathon, and browser-extension work."
    />
    <LatestBuild />
    <div className="grid md:grid-cols-2 gap-5">
      {DATA.otherProjects.map((project, i) => (
        <BuildCard key={project.id} project={project} index={i} />
      ))}
    </div>
  </Section>
);

export const Recognition = () => (
  <Section id="recognition" className="border-t border-[#111]">
    <SectionTitle
      eyebrow="recognition"
      title="Programs & communities"
      subtitle="Hackathons and open-source communities I've built with."
    />
    <div className="grid md:grid-cols-2 gap-5">
      {DATA.recognition.map((item, i) => {
        const accent = accents[item.accent] || accents.blue;
        const Icon = icons[item.icon] || BadgeCheck;

        return (
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="block h-full group"
          >
            <Card
              className="p-6 md:p-7 h-full border-white/[0.09] bg-[#121523]/70"
              hover
              glow={item.accent === "blue" ? "blue" : "violet"}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl ${accent.soft} border ${accent.border} flex items-center justify-center ${accent.text} flex-shrink-0`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-[10px] font-mono-custom uppercase tracking-widest mb-1 ${accent.text}`}
                  >
                    {item.label}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#b9b9ff] text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {item.badge && (
                    <img
                      src={item.badge}
                      alt={`${item.title} badge`}
                      className="mt-4 h-5 w-auto"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  )}

                  <div className="mt-4 flex items-center gap-2 text-[11px] font-mono-custom text-[#b9b9ff]">
                    <span>{item.meta}</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 ml-auto ${accent.text} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200`}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.a>
        );
      })}
    </div>
  </Section>
);

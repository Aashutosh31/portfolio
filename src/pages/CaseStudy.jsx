import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  PlayCircle,
  Activity,
  Shield,
  Layers,
  Wrench,
  Terminal,
  GitMerge,
  Box,
  Server,
  Database,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

const MetricCard = ({ icon, label, value, accent }) => (
  <Card hover={false} className="p-5 border-white/[0.09] bg-[#121523]/70">
    <div
      className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono-custom mb-2"
      style={{ color: "#b9b9ff" }}
    >
      {icon}
      {label}
    </div>
    <div
      className="text-white font-bold text-xl font-mono-custom"
      style={{ color: accent }}
    >
      {value}
    </div>
  </Card>
);

export const CaseStudy = ({ project, setRoute }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const isBlue = project?.accentColor === "#3B82F6";
  const accent = project?.accentColor || "#3B82F6";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVideoPlaying(false);
  }, [project]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen aurora-page pt-24 pb-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Back nav */}
        <button
          onClick={() => setRoute("home")}
          className="flex items-center gap-2 text-[#b9b9ff] hover:text-white mb-10 transition-colors text-sm font-mono-custom group"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to index
        </button>

        {/* Header */}
        <div
          className="mb-14 pb-14 border-b"
          style={{ borderColor: `${accent}24` }}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-6">
            <div>
              <div
                className="text-xs font-mono-custom uppercase tracking-widest mb-4"
                style={{ color: accent }}
              >
                // case_study
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-custom border"
                  style={{
                    color: accent,
                    borderColor: `${accent}30`,
                    backgroundColor: `${accent}08`,
                  }}
                >
                  <Activity className="w-3 h-3" />
                  {project.metrics.status}
                </span>
                <span className="text-xs font-mono-custom text-[#b9b9ff] bg-[#121523]/80 border border-white/[0.09] px-3 py-1.5 rounded-full">
                  {project.metrics.architecture}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:flex-shrink-0">
              <Button
                href={project.links.demo}
                variant={isBlue ? "primary" : "violet"}
                size="md"
              >
                Live demo
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
              <Button href={project.links.github} variant="secondary" size="md">
                Source
                <Github className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          <p className="text-xl text-[#b9b9ff] leading-relaxed max-w-3xl">
            {project.shortDesc}
          </p>
        </div>

        {/* Video demo */}
        <div className="mb-20">
          <div
            className="text-xs font-mono-custom uppercase tracking-widest mb-4 flex items-center gap-2"
            style={{ color: `${accent}B3` }}
          >
            <PlayCircle className="w-3.5 h-3.5" />
            project_demo
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/[0.09] relative bg-[#121523]/70 shadow-2xl">
            {!isVideoPlaying ? (
              <div
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ boxShadow: `0 0 40px ${accent}40` }}
                  >
                    <PlayCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a13]/60 to-transparent pointer-events-none" />
              </div>
            ) : (
              <video
                src={project.video}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-20">
          <div
            className="text-xs font-mono-custom uppercase tracking-widest mb-4 flex items-center gap-2"
            style={{ color: `${accent}B3` }}
          >
            <Activity className="w-3.5 h-3.5" />
            engineering_metrics
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              icon={<Terminal className="w-3 h-3" />}
              label="Dev time"
              value={project.metrics.time}
              accent={accent}
            />
            <MetricCard
              icon={<GitMerge className="w-3 h-3" />}
              label="Est. LOC"
              value={project.metrics.loc}
              accent={accent}
            />
            <MetricCard
              icon={<Server className="w-3 h-3" />}
              label="Endpoints"
              value={project.metrics.endpoints}
              accent={accent}
            />
            <MetricCard
              icon={<Database className="w-3 h-3" />}
              label="Collections"
              value={project.metrics.collections}
              accent={accent}
            />
          </div>
        </div>

        <div className="space-y-20">
          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              hover={false}
              className="p-7 border-white/[0.09] bg-[#121523]/70 border-l-2 border-l-red-500/40"
            >
              <div className="flex items-center gap-2 text-red-400 text-xs font-mono-custom uppercase tracking-widest mb-4">
                <Activity className="w-3.5 h-3.5" />
                problem
              </div>
              <p className="text-[#b9b9ff] leading-relaxed">
                {project.problem}
              </p>
            </Card>
            <Card
              hover={false}
              className="p-7 border-white/[0.09] bg-[#121523]/70 border-l-2 border-l-emerald-500/40"
            >
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono-custom uppercase tracking-widest mb-4">
                <Shield className="w-3.5 h-3.5" />
                solution
              </div>
              <p className="text-[#b9b9ff] leading-relaxed">
                {project.solution}
              </p>
            </Card>
          </div>

          {/* Architecture diagram */}
          {project.architectureNodes && (
            <section>
              <div
                className="text-xs font-mono-custom uppercase tracking-widest mb-6 flex items-center gap-2"
                style={{ color: `${accent}B3` }}
              >
                <Layers className="w-3.5 h-3.5" />
                system_architecture
              </div>

              <Card
                hover={false}
                className="p-8 md:p-12 border-white/[0.09] bg-[#0e1120]/80 overflow-x-auto"
              >
                <div className="min-w-[580px] flex flex-col md:flex-row justify-between items-start gap-10 relative">
                  {/* Connector line */}
                  <div
                    className="absolute top-1/2 left-10 right-10 h-px -translate-y-1/2 hidden md:block"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accent}40, transparent)`,
                    }}
                  />

                  {["frontend", "backend", "database"].map((type, gi) => (
                    <div
                      key={type}
                      className="flex flex-col gap-4 w-full md:w-1/3 relative z-10"
                    >
                      <div
                        className="text-center text-[10px] font-mono-custom uppercase tracking-widest mb-2"
                        style={{ color: `${accent}B3` }}
                      >
                        {type}
                      </div>
                      {project.architectureNodes
                        .filter(
                          (n) =>
                            n.type === type ||
                            (type === "database" && n.type === "external"),
                        )
                        .map((node, i) => (
                          <motion.div
                            key={node.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * 0.15 + i * 0.08 }}
                            className="bg-[#121523]/80 border border-white/[0.09] p-4 rounded-xl text-center group hover:border-white/[0.2] transition-all duration-200"
                          >
                            <div
                              className="w-9 h-9 mx-auto rounded-lg border border-[#1A1A1A] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-opacity-50 transition-all"
                              style={{
                                color: accent,
                                borderColor: `${accent}20`,
                                backgroundColor: `${accent}08`,
                              }}
                            >
                              {node.icon}
                            </div>
                            <div className="text-white font-semibold text-sm mb-1">
                              {node.label}
                            </div>
                            <div
                              className="text-xs font-mono-custom"
                              style={{ color: "#b9b9ff" }}
                            >
                              {node.tech}
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          )}

          {/* Challenges */}
          <section>
            <div
              className="text-xs font-mono-custom uppercase tracking-widest mb-6 flex items-center gap-2"
              style={{ color: `${accent}B3` }}
            >
              <Wrench className="w-3.5 h-3.5" />
              challenges_solved
            </div>
            <div className="space-y-4">
              {project.challenges.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card
                    hover={false}
                    className="p-6 md:p-8 border-white/[0.09] bg-[#121523]/70 border-l-2"
                    style={{ borderLeftColor: `${accent}40` }}
                  >
                    <div
                      className="text-xs font-mono-custom uppercase tracking-widest mb-3"
                      style={{ color: accent }}
                    >
                      challenge_{String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-3">
                      {c.title}
                    </h4>
                    <p className="text-[#b9b9ff] leading-relaxed">{c.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Takeaway */}
          <section className="relative rounded-3xl border border-white/[0.09] bg-[#121523]/70 p-10 md:p-14 text-center overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] blur-[80px] rounded-full opacity-[0.06] pointer-events-none"
              style={{ backgroundColor: accent }}
            />
            <Box
              className="w-8 h-8 mx-auto mb-6 relative z-10"
              style={{ color: accent }}
            />
            <div
              className="text-xs font-mono-custom uppercase tracking-widest mb-4 relative z-10"
              style={{ color: accent }}
            >
              engineering_takeaway
            </div>
            <p className="text-xl text-[#b9b9ff] italic leading-relaxed max-w-3xl mx-auto relative z-10">
              "{project.lessons}"
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

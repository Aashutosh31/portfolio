import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Terminal, Github, Linkedin, Twitter, ArrowRight, Wifi, Zap, Code2, Activity } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { DATA } from '../../data/portfolioData';

const LINES = [
  { prompt: 'whoami', output: 'Aashutosh Bairagi — Software Engineer & AI Builder' },
  { prompt: 'pwd', output: '/home/aashutosh/projects' },
  { prompt: 'ls -la', output: 'webchat/  arc-ai/  learning/  this-portfolio/' },
  { prompt: 'cat mission.txt', output: 'Shipping production-grade AI systems & distributed architectures.' },
];

function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [typingLine, setTypingLine] = useState(null);
  const [typingChar, setTypingChar] = useState(0);
  const [phase, setPhase] = useState('prompt'); // 'prompt' | 'output' | 'done'
  const [lineIdx, setLineIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (lineIdx >= LINES.length) return;
    const line = LINES[lineIdx];

    if (phase === 'prompt') {
      if (typingChar < line.prompt.length) {
        const t = setTimeout(() => {
          setTypingLine(prev => (prev || '') + line.prompt[typingChar]);
          setTypingChar(c => c + 1);
        }, 55 + Math.random() * 35);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => { setPhase('output'); setTypingChar(0); }, 220);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'output') {
      if (typingChar < line.output.length) {
        const t = setTimeout(() => {
          setTypingLine(prev => {
            const promptPart = line.prompt;
            const outputSoFar = line.output.slice(0, typingChar + 1);
            return `__output__${promptPart}|||${outputSoFar}`;
          });
          setTypingChar(c => c + 1);
        }, 18 + Math.random() * 12);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setVisibleLines(prev => [...prev, line]);
          setTypingLine(null);
          setTypingChar(0);
          setPhase('prompt');
          setLineIdx(i => i + 1);
        }, 400);
        return () => clearTimeout(t);
      }
    }
  }, [lineIdx, phase, typingChar]);

  const renderTyping = () => {
    if (!typingLine) return null;
    if (typingLine.startsWith('__output__')) {
      const [, rest] = typingLine.split('__output__');
      const [prompt, output] = rest.split('|||');
      return (
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-[#3B82F6] select-none">❯</span>
            <span className="text-[#E2E8F0]">{prompt}</span>
          </div>
          <div className="text-[#71717A] pl-4">{output}<span className="cursor-blink" /></div>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <span className="text-[#3B82F6] select-none">❯</span>
        <span className="text-[#E2E8F0]">{typingLine}<span className="cursor-blink" /></span>
      </div>
    );
  };

  return (
    <div className="rounded-xl border border-[#1A1A1A] bg-[#080808] overflow-hidden shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1A1A1A] bg-[#0D0D0D]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-xs text-[#444] font-mono-custom">~/terminal — bash</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse" />
          <span className="text-[10px] text-[#444] font-mono-custom">connected</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 font-mono-custom text-sm space-y-2 min-h-[220px]">
        {/* Completed lines */}
        {visibleLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-0.5"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#3B82F6] select-none">❯</span>
              <span className="text-[#E2E8F0]">{line.prompt}</span>
            </div>
            <div className="text-[#71717A] pl-4">{line.output}</div>
          </motion.div>
        ))}
        {/* Currently typing */}
        {renderTyping()}
        {/* Idle cursor after all lines done */}
        {lineIdx >= LINES.length && (
          <div className="flex items-center gap-2">
            <span className="text-[#3B82F6] select-none">❯</span>
            <span className="cursor-blink" />
          </div>
        )}
      </div>
    </div>
  );
}

function StatChip({ label, value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const numericValue = parseFloat(value);
  const isNumeric = isNaN(numericValue);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isNumeric) {
          let start = 0;
          const end = numericValue;
          const duration = 1500;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue, isNumeric]);

  const displayValue = isNumeric
    ? (Number.isInteger(numericValue) ? Math.floor(count) : count.toFixed(1))
    : value;

  return (
    <div ref={ref} className="flex flex-col gap-0.5 p-3 rounded-lg bg-[#0E0E0E] border border-[#1A1A1A]">
      <div className="text-xs text-[#555] font-mono-custom uppercase tracking-widest">{label}</div>
      <div className="text-xl font-bold text-white tabular-nums">
        {isNumeric ? displayValue : value}{suffix}
      </div>
    </div>
  );
}

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-16 grid-bg noise">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#3B82F6] opacity-[0.04] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8B5CF6] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid xl:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left: Identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Badge variant="blue" icon={<Terminal className="w-3 h-3" />}>
                Software Engineer & Architect
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-[#555] font-mono-custom">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for work
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="text-white">Building</span>
              <br />
              <span className="gradient-text-blue">AI Systems</span>
              <br />
              <span className="text-white">&amp; Full Stack</span>
              <br />
              <span className="text-[#3A3A3A]">Products.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#71717A] text-lg leading-relaxed mb-10 max-w-lg"
          >
            {DATA.personal.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Button href="#projects" variant="primary" size="lg">
              View my work
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-5"
          >
            <a href={DATA.personal.socials.github} target="_blank" rel="noreferrer"
              className="text-[#444] hover:text-white transition-colors duration-200 p-2 -m-2">
              <Github className="w-5 h-5" />
            </a>
            <a href={DATA.personal.socials.linkedin} target="_blank" rel="noreferrer"
              className="text-[#444] hover:text-white transition-colors duration-200 p-2 -m-2">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={DATA.personal.socials.twitter} target="_blank" rel="noreferrer"
              className="text-[#444] hover:text-white transition-colors duration-200 p-2 -m-2">
              <Twitter className="w-5 h-5" />
            </a>
            <div className="w-px h-4 bg-[#1F1F1F]" />
            <span className="text-[#444] text-xs font-mono-custom">{DATA.personal.quickFacts.location}</span>
          </motion.div>
        </div>

        {/* Right: Terminal + stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <TerminalBlock />

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DATA.stats.map((s) => (
              <StatChip key={s.label} {...s} />
            ))}
          </div>

          {/* Currently building pills */}
          <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-[#0E0E0E] border border-[#1A1A1A]">
            <span className="text-xs text-[#555] font-mono-custom self-center mr-1">building →</span>
            {DATA.currently.building.map(item => (
              <span key={item} className="inline-flex items-center gap-1 text-xs text-[#A1A1AA] bg-[#141414] border border-[#222] px-2.5 py-1 rounded-full">
                <Zap className="w-2.5 h-2.5 text-[#3B82F6]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#333] font-mono-custom uppercase tracking-[0.2em]">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#333] to-transparent"
        />
      </motion.div>
    </section>
  );
};
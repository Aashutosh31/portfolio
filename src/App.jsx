import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X, Command, Activity, Layers, Mail, Terminal, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { ContactPage } from './pages/Contact';
import { DATA } from './data/portfolioData';

// ── Navbar ─────────────────────────────────────────────────────
function Navbar({ route, setRoute, onCmd }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#111]'
        : 'bg-transparent border-b border-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => { setRoute('home'); window.scrollTo(0, 0); }}
          className="font-bold text-white flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        >
          <div className="w-7 h-7 rounded-lg bg-[#3B82F6] flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.4)]">
            <span className="text-white text-xs font-black leading-none">A</span>
          </div>
          <span className="tracking-tight">Aashutosh</span>
          <span className="text-[#3b82f6e6] hidden sm:inline">Bairagi</span>
        </button>

        {/* Center nav (home only) */}
        <div className="hidden md:flex items-center gap-1">
          {route === 'home' && [
            { href: '#projects', label: 'Work' },
            { href: '#skills', label: 'Stack' },
            { href: '#journey', label: 'Journey' },
            { href: '#contact', label: 'Contact' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-[#555] hover:text-white transition-colors rounded-md hover:bg-[#0E0E0E]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onCmd}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E0E0E] border border-[#1A1A1A] hover:border-[#2A2A2A] transition-all text-[#555] hover:text-[#A1A1AA] text-xs font-mono-custom"
          >
            <Command className="w-3 h-3" />
            <span className="hidden sm:inline">⌘K</span>
          </button>

          <button
            onClick={() => { setRoute('contact'); window.scrollTo(0, 0); }}
            className="px-4 py-1.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium transition-all shadow-[0_0_16px_rgba(59,130,246,0.3)] hover:shadow-[0_0_24px_rgba(59,130,246,0.4)] active:scale-95"
          >
            Hire me
          </button>
        </div>
      </div>
    </nav>
  );
}

// ── Command Palette ─────────────────────────────────────────────
function CommandPalette({ open, onClose, setRoute }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const allItems = [
    { group: 'Navigation', items: [
      { label: 'Home', icon: <Activity className="w-4 h-4" />, action: () => { setRoute('home'); window.scrollTo(0,0); } },
      { label: 'Contact', icon: <Mail className="w-4 h-4" />, action: () => { setRoute('contact'); window.scrollTo(0,0); } },
    ]},
    { group: 'Projects', items: DATA.projects.map(p => ({
      label: p.title,
      sub: p.metrics.status,
      icon: <Layers className="w-4 h-4" />,
      action: () => { setRoute(p.id); window.scrollTo(0,0); },
      accentColor: p.accentColor,
    }))},
    { group: 'Sections', items: [
      { label: 'Tech Stack', icon: <Terminal className="w-4 h-4" />, action: () => { setRoute('home'); setTimeout(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
      { label: 'Engineering Journey', icon: <Terminal className="w-4 h-4" />, action: () => { setRoute('home'); setTimeout(() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    ]},
  ];

  const filtered = query.trim()
    ? allItems.map(g => ({
        ...g,
        items: g.items.filter(i => i.label.toLowerCase().includes(query.toLowerCase())),
      })).filter(g => g.items.length > 0)
    : allItems;

  const handleItemClick = (action) => { action(); onClose(); };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: -8 }}
        transition={{ duration: 0.15 }}
        className="relative w-full max-w-lg bg-[#0D0D0D] border border-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Search input */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#141414]">
          <Search className="w-4 h-4 text-[#333] mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search portfolio..."
            className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-[#333] font-mono-custom"
            onKeyDown={e => e.key === 'Escape' && onClose()}
          />
          <button onClick={onClose} className="text-[#333] hover:text-[#555] p-1 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="p-2 max-h-[60vh] overflow-y-auto">
          {filtered.map((group) => (
            <div key={group.group} className="mb-2">
              <div className="px-3 py-1.5 text-[10px] font-mono-custom uppercase tracking-widest text-[#333]">
                {group.group}
              </div>
              {group.items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.action)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-[#71717A] hover:bg-[#141414] hover:text-white transition-all duration-150 flex items-center gap-3 group"
                >
                  <span className="text-[#333] group-hover:text-[#555] transition-colors">
                    {item.icon}
                  </span>
                  <span className="flex-1 text-sm">{item.label}</span>
                  {item.sub && (
                    <span
                      className="text-[10px] font-mono-custom px-2 py-0.5 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity"
                      style={item.accentColor
                        ? { color: item.accentColor, borderColor: `${item.accentColor}30`, backgroundColor: `${item.accentColor}08` }
                        : { color: '#555', borderColor: '#222' }}
                    >
                      {item.sub}
                    </span>
                  )}
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                </button>
              ))}
            </div>
          ))}

          {filtered.every(g => g.items.length === 0) && (
            <div className="py-8 text-center text-[#333] text-sm font-mono-custom">
              No results for "{query}"
            </div>
          )}
        </div>

        <div className="px-4 py-2.5 border-t border-[#141414] flex items-center gap-4 text-[10px] font-mono-custom text-[#333]">
          <span className="flex items-center gap-1"><kbd className="bg-[#141414] border border-[#1A1A1A] px-1.5 py-0.5 rounded text-[9px]">↵</kbd> select</span>
          <span className="flex items-center gap-1"><kbd className="bg-[#141414] border border-[#1A1A1A] px-1.5 py-0.5 rounded text-[9px]">esc</kbd> close</span>
          <span className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            cmd_palette v1.0
          </span>
        </div>
      </motion.div>
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────
export default function App() {
  const [route, setRoute] = useState('home');
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(o => !o);
      }
      if (e.key === 'Escape') setCmdOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderRoute = () => {
    if (route === 'home') return <Home setRoute={setRoute} />;
    if (route === 'contact') return <ContactPage key="contact" setRoute={setRoute} />;
    const project = DATA.projects.find(p => p.id === route);
    if (project) return <CaseStudy key={route} project={project} setRoute={setRoute} />;
    return null;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-white selection:bg-[#3B82F6]/20 selection:text-white">
      <Navbar route={route} setRoute={setRoute} onCmd={() => setCmdOpen(true)} />

      <AnimatePresence mode="wait">
        {renderRoute()}
      </AnimatePresence>

      <AnimatePresence>
        {cmdOpen && (
          <CommandPalette
            open={cmdOpen}
            onClose={() => setCmdOpen(false)}
            setRoute={setRoute}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
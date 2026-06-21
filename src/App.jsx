import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X, Command, Activity, Layers, Mail } from 'lucide-react';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { ContactPage } from './pages/Contact';
import { Button } from './components/ui/Button';
import { DATA } from './data/portfolioData';

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
    <div className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-[#3B82F6]/30 text-white">
      
      {/* Global Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-white tracking-tight cursor-pointer flex items-center gap-2" onClick={() => setRoute('home')}>
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] flex items-center justify-center">
              <span className="text-white text-xs font-black">A</span>
            </div>
            Aashutosh Bairagi
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-[#A1A1AA]">
            {route === 'home' ? (
              <>
                <a href="#projects" className="hover:text-white transition-colors hidden md:block">Architecture</a>
                <a href="#skills" className="hover:text-white transition-colors hidden md:block">Stack</a>
                <a href="#journey" className="hover:text-white transition-colors hidden md:block">Journey</a>
              </>
            ) : null}
            <button onClick={() => setCmdOpen(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111] border border-[#1F1F1F] hover:bg-[#1A1A1A] transition-colors">
              <Command className="w-3 h-3"/> <span className="hidden sm:inline">Ctrl K</span>
            </button>
            <Button onClick={() => { setRoute('contact'); window.scrollTo(0,0); }} variant="primary" className="py-2 px-4 text-xs">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {renderRoute()}
      </AnimatePresence>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {cmdOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCmdOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -10 }} className="relative w-full max-w-xl bg-[#111] border border-[#1F1F1F] rounded-xl shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 border-b border-[#1F1F1F]">
                <Search className="w-4 h-4 text-[#A1A1AA] mr-3" />
                <input type="text" autoFocus placeholder="Navigate portfolio..." className="flex-1 bg-transparent text-white outline-none placeholder:text-[#555]" />
                <button onClick={() => setCmdOpen(false)} className="text-[#555] hover:text-white p-1"><X className="w-4 h-4" /></button>
              </div>
              <div className="p-2 space-y-1">
                <div className="px-3 py-2 text-xs font-semibold text-[#555] uppercase tracking-wider">Pages</div>
                <button onClick={() => { setRoute('home'); setCmdOpen(false); window.scrollTo(0,0); }} className="w-full text-left px-3 py-2 rounded-lg text-[#A1A1AA] hover:bg-[#1A1A1A] hover:text-white transition-colors flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Home / Dashboard
                </button>
                <button onClick={() => { setRoute('contact'); setCmdOpen(false); window.scrollTo(0,0); }} className="w-full text-left px-3 py-2 rounded-lg text-[#A1A1AA] hover:bg-[#1A1A1A] hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Contact Page
                </button>
                <div className="px-3 py-2 text-xs font-semibold text-[#555] uppercase tracking-wider mt-2">Projects</div>
                {DATA.projects.map(p => (
                  <button key={p.id} onClick={() => { setRoute(p.id); setCmdOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-[#A1A1AA] hover:bg-[#1A1A1A] hover:text-white transition-colors flex items-center gap-2">
                    <Layers className="w-4 h-4" /> View Architecture: {p.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Dashboard } from '../components/sections/Dashboard';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Principles } from '../components/sections/Principles';
import { Insights } from '../components/sections/Insights';
import { BuildingInPublic } from '../components/sections/BuildingInPublic';
import { Timeline } from '../components/sections/Timeline';
import { Roadmap } from '../components/sections/Roadmap';
import { Contact } from '../components/sections/Contact';

export const Home = ({ setRoute }) => {
  return (
    <motion.main
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <About />
      <Dashboard />
      <Projects setRoute={setRoute} />
      <Skills />
      <Insights />
      <Principles />
      <BuildingInPublic />
      <Timeline />
      <Roadmap />
      <Contact />
    </motion.main>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero.jsx';
import { Dashboard } from '../components/sections/Dashboard.jsx';
import { Projects } from '../components/sections/Projects.jsx';
import { Skills } from '../components/sections/Skills.jsx';
import { Principles } from '../components/sections/Principles.jsx';
import { Timeline } from '../components/sections/Timeline.jsx';
import { Contact } from '../components/sections/Contact.jsx';

export const Home = ({ setRoute }) => {
  return (
    <motion.main
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Dashboard />
      <Projects setRoute={setRoute} />
      <Skills />
      <Principles />
      <Timeline />
      <Contact />
    </motion.main>
  );
};
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

import Background from './components/Background';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';
import CinematicPreloader from './components/CinematicPreloader';

import HomeView from './components/views/HomeView';
import WorkView from './components/views/WorkView';
import TechView from './components/views/TechView';
import JourneyView from './components/views/JourneyView';
import ContactView from './components/views/ContactView';

import ProjectModal from './components/ProjectModal';
import DocModal from './components/DocModal';

import type { Project } from './data/projects';
import type { DocArticle } from './data/documentation';

type PageId = 'home' | 'work' | 'tech' | 'journey' | 'contact';

/**
 * NS CODEX – Main Personal Digital System Orchestrator
 *
 * Multi-Page Architecture with right-edge fixed navigation,
 * sub-page views, interactive command palette, and modal inspectors.
 */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState<PageId>('home');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<DocArticle | null>(null);

  // Theme State: 'light' | 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Sync hash routing with activePage state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'work', 'tech', 'journey', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId: string) => {
    const validPage = pageId as PageId;
    setActivePage(validPage);
    window.location.hash = `#${validPage}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Standalone Cinematic Preloader Overlay */}
      {isLoading && (
        <CinematicPreloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Ambient Neural Particle Canvas */}
      <Background theme={theme} />

      {/* Scroll Progress Indicator (Solid Color, No Gradients) */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--color-accent-primary)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 200,
        }}
      />

      {/* Right Edge Fixed Icon Header Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Global Interactive Command Palette (Ctrl+K / ⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(project) => {
          setSelectedProject(project);
          setCommandPaletteOpen(false);
        }}
        onSelectDoc={(doc) => {
          setSelectedDoc(doc);
          setCommandPaletteOpen(false);
        }}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <DocModal
        article={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />

      {/* Main Multi-Page Content Area */}
      <main
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '2.5rem',
          paddingBottom: '4rem',
        }}
      >
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <HomeView
              key="home"
              onNavigate={navigateTo}
              onSelectProject={(project) => setSelectedProject(project)}
            />
          )}

          {activePage === 'work' && (
            <WorkView
              key="work"
              onSelectProject={(project) => setSelectedProject(project)}
            />
          )}

          {activePage === 'tech' && (
            <TechView
              key="tech"
              onSelectProject={(project) => setSelectedProject(project)}
            />
          )}

          {activePage === 'journey' && (
            <JourneyView key="journey" />
          )}

          {activePage === 'contact' && (
            <ContactView
              key="contact"
              onSelectDoc={(doc) => setSelectedDoc(doc)}
            />
          )}
        </AnimatePresence>

        {/* Global Footer on every sub-page */}
        <div style={{ marginTop: 'var(--section-gap)' }}>
          <Footer />
        </div>
      </main>
    </div>
  );
}

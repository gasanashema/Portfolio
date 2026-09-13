import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Hero';
import About from '../About';
import NsCodex from '../NsCodex';
import { ArrowRight, FolderGit2, Mail } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}
    >
      <Hero />
      <About />
      <NsCodex />

      {/* Page Navigation Callouts */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div
          className="liquid-glass-card"
          style={{ padding: '2rem', borderRadius: 0, cursor: 'pointer' }}
          onClick={() => onNavigate('work')}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--color-accent-primary)', letterSpacing: '0.2em' }}>
              04 — SELECTED WORK
            </span>
            <FolderGit2 size={20} style={{ color: 'var(--color-accent-primary)' }} />
          </div>
          <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
            Explore Project Catalog
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
            Inspect full-stack web platforms, microservices, backend architectures, and engineering projects.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-primary)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.1em' }}>
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight size={14} />
          </div>
        </div>

        <div
          className="liquid-glass-card"
          style={{ padding: '2rem', borderRadius: 0, cursor: 'pointer' }}
          onClick={() => onNavigate('contact')}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--color-accent-secondary)', letterSpacing: '0.2em' }}>
              16 — DIRECT CONNECT
            </span>
            <Mail size={20} style={{ color: 'var(--color-accent-secondary)' }} />
          </div>
          <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
            Get in Touch with Shema
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
            Looking for a software engineer for your team, platform, or system engineering project?
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-secondary)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.1em' }}>
            <span>CONTACT SHEMA</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

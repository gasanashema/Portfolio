import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, type Project } from '../data/projects';
import { FolderGit2, ArrowRight, Code2, Terminal, Database, Server } from 'lucide-react';

interface NsCodexProps {
  onSelectProject?: (project: Project) => void;
  onNavigate?: (page: string) => void;
}

const FEATURED_PROJECTS = PROJECTS.slice(0, 4);

const ICON_MAP: Record<string, React.ReactNode> = {
  'PRJ-01': <Terminal size={22} style={{ color: 'var(--color-accent-primary)' }} />,
  'PRJ-02': <Code2 size={22} style={{ color: 'var(--color-accent-secondary)' }} />,
  'PRJ-03': <Server size={22} style={{ color: 'var(--color-accent-tertiary)' }} />,
  'PRJ-04': <Database size={22} style={{ color: '#4ade80' }} />,
};

export default function NsCodex({ onSelectProject, onNavigate }: NsCodexProps) {
  return (
    <motion.section
      id="nscodex"
      aria-labelledby="nscodex-heading"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 5rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="section-label" style={{ marginBottom: '0.4rem', display: 'flex' }}>
            02 — FEATURED PROJECTS
          </span>
          <h2
            id="nscodex-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
            }}
          >
            WHAT I <span className="text-gradient-flow">BUILD</span>
          </h2>
        </div>

        {onNavigate && (
          <button
            onClick={() => onNavigate('work')}
            className="btn-glass"
            style={{ borderRadius: 0, padding: '0.55rem 1.15rem', fontSize: '0.7rem' }}
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight size={14} />
          </button>
        )}
      </div>

      {/* Grid of Showcase Projects */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {FEATURED_PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="liquid-glass-card"
            onClick={() => onSelectProject && onSelectProject(project)}
            style={{
              padding: '1.25rem',
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              cursor: 'pointer',
              border: '1px solid var(--glass-l2-border)',
              background: 'var(--glass-l2-bg)',
            }}
          >
            {/* Thumbnail Header Block */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                background: 'var(--color-bg-elevated)',
                border: '1px solid var(--glass-l1-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--glass-l2-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {ICON_MAP[project.code] || <FolderGit2 size={20} style={{ color: 'var(--color-accent-primary)' }} />}
                </div>
                <div>
                  <span className="font-mono" style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.12em', display: 'block' }}>
                    {project.code}
                  </span>
                  <span className="font-mono" style={{ fontSize: '0.55rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}>
                    {project.category}
                  </span>
                </div>
              </div>

              <span
                className="font-mono"
                style={{
                  fontSize: '0.52rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.5rem',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#10b981',
                  textTransform: 'uppercase',
                }}
              >
                {project.status}
              </span>
            </div>

            {/* Project Title */}
            <h3
              className="font-display"
              style={{
                fontSize: '1.15rem',
                fontWeight: 900,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
              }}
            >
              {project.title}
            </h3>

            {/* 1-Sentence Short Description */}
            <p
              style={{
                fontSize: '0.825rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.45,
              }}
            >
              {project.tagline}.
            </p>

            {/* Tech Stack Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono"
                  style={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.55rem',
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--glass-l1-border)',
                    color: 'var(--color-accent-primary)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

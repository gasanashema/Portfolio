import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { PROJECTS, type Project } from '../data/projects';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Systems & Backend', 'DevOps & Platform', 'Health & Data', 'Product Concepts'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      return selectedCategory === 'All' || p.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      style={{ scrollMarginTop: '4rem' }}
    >
      {/* Compact Section Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label" style={{ marginBottom: '0.5rem', display: 'flex' }}>
            04 — SELECTED WORK ({filteredProjects.length} PROJECTS)
          </span>
          <h2
            id="projects-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
            }}
          >
            SELECTED <span className="text-gradient-flow">WORK</span>
          </h2>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="liquid-glass-card"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.2rem',
            padding: '0.25rem',
            borderRadius: 0,
            alignSelf: 'flex-start',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="font-display"
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: 0,
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'all var(--transition-fast)',
                background:
                  selectedCategory === cat
                    ? 'var(--color-accent-primary)'
                    : 'transparent',
                color: selectedCategory === cat ? '#fff' : 'var(--color-text-tertiary)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Compact Multi-Column Project Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
        }}
      >
        {filteredProjects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="liquid-glass-card"
            style={{
              padding: '1.15rem',
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              minHeight: '13.5rem',
              border: project.featured
                ? '1px solid rgba(255, 107, 44, 0.35)'
                : '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              {/* Header Badge */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.65rem',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 800,
                    color: 'var(--color-accent-primary)',
                    letterSpacing: '0.12em',
                  }}
                >
                  //{project.code}
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.5rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.45rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--color-text-tertiary)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3
                className="font-display"
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.25rem',
                  lineHeight: 1.15,
                }}
              >
                {project.title}
              </h3>

              <p
                className="font-display"
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--color-accent-secondary)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                {project.tagline}
              </p>

              <p
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.45,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  marginBottom: '0.75rem',
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Bottom Tech Pills & Action */}
            <div
              style={{
                paddingTop: '0.65rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.25rem',
                  maxWidth: '70%',
                }}
              >
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono"
                    style={{
                      fontSize: '0.52rem',
                      padding: '0.15rem 0.4rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--color-text-tertiary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectProject(project)}
                className="btn-primary"
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.6rem',
                  borderRadius: 0,
                  flexShrink: 0,
                }}
              >
                <span>INSPECT</span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

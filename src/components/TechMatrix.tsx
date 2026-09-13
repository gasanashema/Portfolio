import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Eye, Server, Database, Layers, Cpu, Sparkles, Compass } from 'lucide-react';
import { TECH_GROUPS } from '../data/technologies';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} style={{ color: 'var(--color-accent-primary)' }} />,
  Eye: <Eye size={20} style={{ color: 'var(--color-accent-secondary)' }} />,
  Server: <Server size={20} style={{ color: 'var(--color-accent-tertiary)' }} />,
  Database: <Database size={20} style={{ color: '#4ade80' }} />,
  Layers: <Layers size={20} style={{ color: '#38bdf8' }} />,
  Cpu: <Cpu size={20} style={{ color: '#facc15' }} />,
};

export default function TechMatrix() {
  return (
    <section
      id="capabilities"
      aria-labelledby="techmatrix-heading"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label" style={{ marginBottom: '1rem', display: 'flex' }}>
            03 — TECHNOLOGIES
          </span>
          <h2
            id="techmatrix-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              marginBottom: '1rem',
            }}
          >
            THE TOOLS I <span className="text-gradient-flow">SPEAK</span>
          </h2>
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              maxWidth: '46rem',
              lineHeight: 1.5,
            }}
          >
            A practical catalog of languages, frameworks, backend architectures, databases, DevOps tooling, and platforms I work with.
          </p>
        </motion.div>
      </div>

      {/* Grid of Tech Groups */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
        }}
        className="tech-matrix-grid"
      >
        {TECH_GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="liquid-glass-card"
            style={{
              padding: '2rem',
              borderRadius: 'var(--border-radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Group Title Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    padding: '0.65rem',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    flexShrink: 0,
                  }}
                >
                  {ICON_MAP[group.iconName] || <Sparkles size={20} />}
                </div>
                <div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {group.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)' }}>
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Items List */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '0.75rem',
                  marginTop: '1.25rem',
                }}
              >
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="glass-panel"
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--border-radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <span
                        className="font-display"
                        style={{
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          color: 'var(--color-text-primary)',
                          display: 'block',
                        }}
                      >
                        {item.name}
                      </span>
                      {item.note && (
                        <span
                          style={{
                            fontSize: '0.73rem',
                            color: 'var(--color-text-tertiary)',
                            display: 'block',
                          }}
                        >
                          {item.note}
                        </span>
                      )}
                    </div>

                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.55rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        padding: '0.25rem 0.6rem',
                        borderRadius: 0,
                        textTransform: 'uppercase',
                        flexShrink: 0,
                        background:
                          item.status === 'REGULAR USE'
                            ? 'rgba(255, 107, 44, 0.15)'
                            : item.status === 'WORKED WITH'
                            ? 'rgba(56, 189, 248, 0.12)'
                            : 'rgba(255, 255, 255, 0.05)',
                        color:
                          item.status === 'REGULAR USE'
                            ? 'var(--color-accent-primary)'
                            : item.status === 'WORKED WITH'
                            ? '#38bdf8'
                            : 'var(--color-text-tertiary)',
                        border:
                          item.status === 'REGULAR USE'
                            ? '1px solid rgba(255, 107, 44, 0.3)'
                            : '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* How I View My Stack Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="liquid-glass-card"
        style={{
          marginTop: '2.5rem',
          padding: '2rem 2.5rem',
          borderRadius: 'var(--border-radius-xl)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Compass size={20} style={{ color: 'var(--color-accent-primary)' }} />
          <h3
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: 'var(--color-accent-primary)',
              textTransform: 'uppercase',
            }}
          >
            # HOW I VIEW MY STACK
          </h3>
        </div>
        <p
          className="font-display"
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            maxWidth: '52rem',
          }}
        >
          "I don't treat every technology as a badge. Some are tools I currently use regularly. Some are technologies I've worked with. Others are areas I'm actively exploring.
          <br />
          <strong style={{ color: 'var(--color-text-primary)' }}>
            The goal isn't to collect technologies. The goal is to understand when and why to use them.
          </strong>"
        </p>
      </motion.div>

      <style>{`
        .tech-matrix-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .tech-matrix-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1200px) {
          .tech-matrix-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

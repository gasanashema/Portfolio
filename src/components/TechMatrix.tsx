import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Eye, Server, Database, Layers, Cpu, Sparkles, Compass } from 'lucide-react';
import { TECH_GROUPS } from '../data/technologies';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 size={16} style={{ color: 'var(--color-accent-primary)' }} />,
  Eye: <Eye size={16} style={{ color: 'var(--color-accent-secondary)' }} />,
  Server: <Server size={16} style={{ color: 'var(--color-accent-tertiary)' }} />,
  Database: <Database size={16} style={{ color: '#4ade80' }} />,
  Layers: <Layers size={16} style={{ color: '#38bdf8' }} />,
  Cpu: <Cpu size={16} style={{ color: '#facc15' }} />,
};

export default function TechMatrix() {
  return (
    <section
      id="capabilities"
      aria-labelledby="techmatrix-heading"
      style={{ scrollMarginTop: '4rem' }}
    >
      {/* Compact Section Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label" style={{ marginBottom: '0.5rem', display: 'flex' }}>
            03 — TECHNOLOGIES & TOOLS
          </span>
          <h2
            id="techmatrix-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
              marginBottom: '0.5rem',
            }}
          >
            THE TOOLS I <span className="text-gradient-flow">SPEAK</span>
          </h2>
          <p
            className="font-display"
            style={{
              fontSize: '0.9rem',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              maxWidth: '42rem',
              lineHeight: 1.4,
            }}
          >
            A high-density matrix of programming languages, frameworks, backend architectures, databases, DevOps tools, and platforms.
          </p>
        </motion.div>
      </div>

      {/* Compact Grid of Tech Groups */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1rem',
        }}
      >
        {TECH_GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="liquid-glass-card"
            style={{
              padding: '1rem 1.15rem',
              borderRadius: 0,
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
                  gap: '0.65rem',
                  marginBottom: '0.75rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    padding: '0.4rem',
                    borderRadius: 0,
                    background: 'rgba(255, 255, 255, 0.04)',
                    flexShrink: 0,
                  }}
                >
                  {ICON_MAP[group.iconName] || <Sparkles size={16} />}
                </div>
                <div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      letterSpacing: '0.04em',
                      lineHeight: 1.1,
                    }}
                  >
                    {group.title}
                  </h3>
                  <span className="font-mono" style={{ fontSize: '0.6rem', color: 'var(--color-text-tertiary)' }}>
                    {group.description}
                  </span>
                </div>
              </div>

              {/* High-Density Item Chips Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
                  gap: '0.45rem',
                }}
              >
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="glass-panel"
                    style={{
                      padding: '0.45rem 0.65rem',
                      borderRadius: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '3.1rem',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.25rem' }}>
                      <span
                        className="font-display"
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          color: '#ffffff',
                          lineHeight: 1.1,
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.45rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          padding: '0.1rem 0.35rem',
                          borderRadius: 0,
                          textTransform: 'uppercase',
                          background:
                            item.status === 'REGULAR USE'
                              ? 'rgba(255, 107, 44, 0.2)'
                              : item.status === 'WORKED WITH'
                              ? 'rgba(56, 189, 248, 0.15)'
                              : 'rgba(255, 255, 255, 0.05)',
                          color:
                            item.status === 'REGULAR USE'
                              ? 'var(--color-accent-primary)'
                              : item.status === 'WORKED WITH'
                              ? '#38bdf8'
                              : 'var(--color-text-tertiary)',
                          flexShrink: 0,
                        }}
                      >
                        {item.status === 'REGULAR USE' ? 'CORE' : item.status === 'WORKED WITH' ? 'USED' : 'EXP'}
                      </span>
                    </div>

                    {item.note && (
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.58rem',
                          color: 'var(--color-text-tertiary)',
                          lineHeight: 1.1,
                          marginTop: '0.2rem',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* How I View My Stack Callout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="liquid-glass-card"
        style={{
          marginTop: '1.5rem',
          padding: '1.15rem 1.5rem',
          borderRadius: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
          <Compass size={16} style={{ color: 'var(--color-accent-primary)' }} />
          <h3
            className="font-mono"
            style={{
              fontSize: '0.675rem',
              fontWeight: 800,
              letterSpacing: '0.18em',
              color: 'var(--color-accent-primary)',
              textTransform: 'uppercase',
            }}
          >
            # PHILOSOPHY ON TECH STACK
          </h3>
        </div>
        <p
          className="font-display"
          style={{
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
          }}
        >
          "The goal isn't to accumulate technologies like badges. The goal is to master engineering principles so you select the right tool, build robust software, and deliver real value."
        </p>
      </motion.div>
    </section>
  );
}

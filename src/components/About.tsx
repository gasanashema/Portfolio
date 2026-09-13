import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Server, Workflow, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
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
      {/* Compact Section Header */}
      <div style={{ marginBottom: '1.25rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label" style={{ marginBottom: '0.4rem', display: 'flex' }}>
            01 — ABOUT ME
          </span>
          <h2
            id="about-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            ENG. <span className="text-gradient-flow">SHEMA PHILBERT GASANA</span>
          </h2>
        </motion.div>
      </div>

      {/* Single Flexbox Container: Compact Avatar Card + Structured About Content Side-by-Side */}
      <div
        className="about-flex-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          gap: '1.25rem',
        }}
      >
        {/* Left Column: Decreased Compact Profile Graphic Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="liquid-glass-card"
          style={{
            width: '210px',
            flexShrink: 0,
            padding: '1.25rem 1rem',
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            border: '1px solid var(--glass-l2-border)',
            background: 'var(--glass-l2-bg)',
          }}
        >
          {/* Avatar Icon Box */}
          <div
            style={{
              width: '3.75rem',
              height: '3.75rem',
              borderRadius: 0,
              background: 'var(--color-accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: 'none',
              marginBottom: '0.75rem',
            }}
          >
            <Terminal size={24} />
          </div>

          <span
            className="font-display"
            style={{
              fontSize: '0.85rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-text-primary)',
              lineHeight: 1.1,
            }}
          >
            SHEMA PHILBERT
          </span>

          <span
            className="font-mono"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.12em',
              color: 'var(--color-accent-primary)',
              marginTop: '0.35rem',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            SOFTWARE ENGINEER
          </span>

          <span
            className="font-mono"
            style={{
              fontSize: '0.5rem',
              letterSpacing: '0.1em',
              color: 'var(--color-text-tertiary)',
              marginTop: '0.15rem',
              textTransform: 'uppercase',
            }}
          >
            KIGALI, RWANDA
          </span>

          {/* Active Node Badge */}
          <div
            style={{
              marginTop: '0.85rem',
              padding: '0.25rem 0.55rem',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <div className="status-dot active" />
            <span className="font-mono" style={{ fontSize: '0.5rem', fontWeight: 800, color: '#10b981', letterSpacing: '0.1em' }}>
              AVAILABLE
            </span>
          </div>
        </motion.div>

        {/* Right Column: Structured About Content (Pillars + Stats + Philosophy) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            justifyContent: 'space-between',
          }}
        >
          {/* 3 Core Focus Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem' }}>
            <div className="glass-panel" style={{ padding: '0.85rem 1rem', borderRadius: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                <Cpu size={14} style={{ color: 'var(--color-accent-primary)' }} />
                <span className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.1em' }}>
                  FULL-STACK APPS
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                Building responsive, user-centric web platforms & scalable frontend applications.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '0.85rem 1rem', borderRadius: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                <Server size={14} style={{ color: 'var(--color-accent-secondary)' }} />
                <span className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 800, color: 'var(--color-accent-secondary)', letterSpacing: '0.1em' }}>
                  BACKEND & APIS
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                Architecting robust RESTful microservices, databases, and secure server pipelines.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '0.85rem 1rem', borderRadius: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                <Workflow size={14} style={{ color: '#38bdf8' }} />
                <span className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.1em' }}>
                  DEVOPS & CLOUD
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                Automating deployments with Docker, GitLab CI/CD, Kubernetes & Cloud infrastructure.
              </p>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div
            className="liquid-glass-card"
            style={{
              padding: '0.75rem 1.15rem',
              borderRadius: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="font-mono" style={{ fontSize: '0.52rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', display: 'block' }}>
                LOCATION
              </span>
              <span className="font-display" style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                Kigali, Rwanda
              </span>
            </div>

            <div>
              <span className="font-mono" style={{ fontSize: '0.52rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', display: 'block' }}>
                EDUCATION
              </span>
              <span className="font-display" style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                AUCA Software Eng.
              </span>
            </div>

            <div>
              <span className="font-mono" style={{ fontSize: '0.52rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', display: 'block' }}>
                PROJECTS BUILT
              </span>
              <span className="font-display" style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-accent-primary)' }}>
                10+ Production Apps
              </span>
            </div>
          </div>

          {/* 1-Line Engineering Philosophy */}
          <div
            className="liquid-glass-card"
            style={{
              padding: '0.75rem 1.15rem',
              borderRadius: 0,
              borderLeft: '3px solid var(--color-accent-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
            }}
          >
            <Lightbulb size={16} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
            <p className="font-display" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
              "I don't just build interfaces — I engineer the reliable systems, APIs, and pipelines behind them."
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-flex-container {
            flex-direction: column !important;
          }
          .about-flex-container > div:first-child {
            width: 100% !important;
          }
        }
      `}</style>
    </motion.section>
  );
}

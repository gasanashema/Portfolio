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
      {/* Section Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label" style={{ marginBottom: '0.5rem', display: 'flex' }}>
            01 — ABOUT ME
          </span>
          <h2
            id="about-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
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

      {/* Single Flexbox Container: Profile Graphic Card + Structured About Content Side-by-Side */}
      <div
        className="about-flex-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          gap: '1.5rem',
          minHeight: '62vh',
        }}
      >
        {/* Left Column: Profile Graphic Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="liquid-glass-card"
          style={{
            width: '250px',
            flexShrink: 0,
            padding: '2.25rem 1.25rem',
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
              width: '4.5rem',
              height: '4.5rem',
              borderRadius: 0,
              background: 'var(--color-accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: 'none',
              marginBottom: '1rem',
            }}
          >
            <Terminal size={28} />
          </div>

          <span
            className="font-display"
            style={{
              fontSize: '0.95rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-text-primary)',
              lineHeight: 1.15,
            }}
          >
            SHEMA PHILBERT
          </span>

          <span
            className="font-mono"
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              color: 'var(--color-accent-primary)',
              marginTop: '0.45rem',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            SOFTWARE ENGINEER
          </span>

          <span
            className="font-mono"
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.1em',
              color: 'var(--color-text-tertiary)',
              marginTop: '0.2rem',
              textTransform: 'uppercase',
            }}
          >
            KIGALI, RWANDA
          </span>

          {/* Active Node Badge */}
          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.35rem 0.75rem',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
            }}
          >
            <div className="status-dot active" />
            <span className="font-mono" style={{ fontSize: '0.55rem', fontWeight: 800, color: '#10b981', letterSpacing: '0.12em' }}>
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
            gap: '1.25rem',
            justifyContent: 'space-between',
          }}
        >
          {/* 3 Core Focus Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', flex: 1 }}>
            <div className="glass-panel" style={{ padding: '1.35rem 1.25rem', borderRadius: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Cpu size={16} style={{ color: 'var(--color-accent-primary)' }} />
                <span className="font-mono" style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.1em' }}>
                  FULL-STACK APPS
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Building responsive, user-centric web platforms & scalable frontend applications.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.35rem 1.25rem', borderRadius: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Server size={16} style={{ color: 'var(--color-accent-secondary)' }} />
                <span className="font-mono" style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-accent-secondary)', letterSpacing: '0.1em' }}>
                  BACKEND & APIS
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Architecting robust RESTful microservices, databases, and secure server pipelines.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.35rem 1.25rem', borderRadius: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Workflow size={16} style={{ color: '#38bdf8' }} />
                <span className="font-mono" style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.1em' }}>
                  DEVOPS & CLOUD
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Automating deployments with Docker, GitLab CI/CD, Kubernetes & Cloud infrastructure.
              </p>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div
            className="liquid-glass-card"
            style={{
              padding: '1.15rem 1.5rem',
              borderRadius: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="font-mono" style={{ fontSize: '0.58rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.15rem' }}>
                LOCATION
              </span>
              <span className="font-display" style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                Kigali, Rwanda
              </span>
            </div>

            <div>
              <span className="font-mono" style={{ fontSize: '0.58rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.15rem' }}>
                EDUCATION
              </span>
              <span className="font-display" style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                AUCA Software Eng.
              </span>
            </div>

            <div>
              <span className="font-mono" style={{ fontSize: '0.58rem', color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.15rem' }}>
                PROJECTS BUILT
              </span>
              <span className="font-display" style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-accent-primary)' }}>
                10+ Production Apps
              </span>
            </div>
          </div>

          {/* 1-Line Engineering Philosophy */}
          <div
            className="liquid-glass-card"
            style={{
              padding: '1.15rem 1.5rem',
              borderRadius: 0,
              borderLeft: '3px solid var(--color-accent-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
            }}
          >
            <Lightbulb size={20} style={{ color: 'var(--color-accent-primary)', flexShrink: 0 }} />
            <p className="font-display" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
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

import React from 'react';
import { motion } from 'framer-motion';
import { IDENTITY } from '../config';
import { Terminal, Cpu, Lightbulb } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '4rem',
        alignItems: 'center',
        scrollMarginTop: '6rem',
      }}
      className="about-grid"
    >
      {/* Editorial Story Column */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: '44rem' }}
      >
        <span className="section-label" style={{ marginBottom: '1.25rem', display: 'flex' }}>
          01 — INTRODUCTION
        </span>

        <h2
          id="about-heading"
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            marginBottom: '1.75rem',
          }}
        >
          A Little About Me
        </h2>

        {/* Narrative */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            fontSize: '1.025rem',
            color: 'var(--color-text-secondary)',
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          <p>
            I'm <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Shema Philbert Gasana</strong>, a software engineer from Rwanda. My journey started with software development and gradually expanded into full-stack engineering, backend systems, databases, DevOps, and infrastructure.
          </p>

          <p>
            I enjoy understanding how things work beneath the interface — not only writing the code that users see, but also understanding the APIs, databases, services, containers, infrastructure, and deployment processes behind them.
          </p>

          <p>
            I build web applications, experiment with new technologies, work on practical product ideas, and continuously challenge myself to become a better engineer. I'm particularly interested in the space where software engineering meets systems, infrastructure, and real-world problems.
          </p>
        </div>

        {/* A Thought Callout */}
        <div
          className="liquid-glass-card"
          style={{
            marginTop: '2rem',
            padding: '1.5rem 1.75rem',
            borderRadius: 'var(--border-radius-lg)',
            borderLeft: '4px solid var(--color-accent-primary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <Lightbulb size={16} style={{ color: 'var(--color-accent-primary)' }} />
            <span
              className="font-mono"
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: 'var(--color-accent-primary)',
                textTransform: 'uppercase',
              }}
            >
              # A THOUGHT
            </span>
          </div>
          <p
            className="font-display"
            style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              lineHeight: 1.4,
            }}
          >
            "I don't just want to build interfaces.
            <br />
            I want to understand the systems behind them."
          </p>
        </div>
      </motion.div>

      {/* Identity Showcase Column */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        style={{ position: 'relative' }}
      >
        {/* Main Identity Card */}
        <div
          className="liquid-glass-card"
          style={{
            aspectRatio: '1',
            borderRadius: 'var(--border-radius-xl)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
            position: 'relative',
          }}
        >
          {/* Ambient inner glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              background:
                'radial-gradient(circle at 35% 35%, rgba(255, 107, 44, 0.08) 0%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />

          <Terminal
            size={64}
            style={{
              color: 'var(--color-accent-primary)',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 0 30px rgba(255, 107, 44, 0.4))',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: '1.5rem',
              textAlign: 'center',
            }}
          >
            <p
              className="font-display"
              style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              SHEMA PHILBERT GASANA
            </p>
            <p
              className="font-mono"
              style={{
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: 'var(--color-accent-secondary)',
                marginTop: '0.25rem',
                textTransform: 'uppercase',
              }}
            >
              SOFTWARE ENGINEER · KIGALI, RWANDA
            </p>
          </div>
        </div>

        {/* Floating Status Pill */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="liquid-glass-card"
          style={{
            position: 'absolute',
            bottom: '-1rem',
            right: '-0.5rem',
            padding: '0.75rem 1.35rem',
            borderRadius: 'var(--border-radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div className="status-dot active" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.58rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              SYSTEMS & DEVOPS
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.5rem',
                color: 'var(--color-accent-primary)',
                letterSpacing: '0.1em',
              }}
            >
              Full-Stack Engineering
            </span>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  );
}

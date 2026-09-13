import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Trophy,
  Layers,
  Server,
  Cpu,
  Rocket,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react';
import { TIMELINE_DATA } from '../data/timeline';
import { EXPERIENCES } from '../data/experience';
import { EDUCATION_DATA, MILESTONES } from '../data/education';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Code2,
  Trophy,
  Layers,
  Server,
  Cpu,
  Rocket,
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="section-label"
            style={{
              justifyContent: 'center',
              display: 'flex',
              marginBottom: '1rem',
            }}
          >
            05 — ENGINEERING JOURNEY & EXPERIENCE
          </span>
          <h2
            id="timeline-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 6rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              marginBottom: '1rem',
            }}
          >
            ENGINEERING <span className="text-gradient-flow">JOURNEY</span>
          </h2>
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              maxWidth: '44rem',
              margin: '0 auto',
              lineHeight: 1.5,
            }}
          >
            A chronological progression tracking foundational beginnings, developer experience, coaching, education, and milestones.
          </p>
        </motion.div>
      </div>

      {/* 05 — Timeline Progression */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          // THE ENGINEERING TIMELINE
        </h3>
        <div
          className="timeline-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
          }}
        >
          {TIMELINE_DATA.map((entry, i) => {
            const IconComp = ICON_MAP[entry.iconName];
            const isCurrent = entry.status === 'CURRENT';
            const isFuture = entry.status === 'DIRECTION';

            return (
              <motion.article
                key={entry.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="liquid-glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--border-radius-lg)',
                  border: isCurrent
                    ? '1px solid rgba(255, 107, 44, 0.35)'
                    : isFuture
                    ? '1px solid rgba(255, 170, 0, 0.25)'
                    : '1px solid var(--glass-l2-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          fontStyle: 'italic',
                          color: isCurrent
                            ? 'var(--color-accent-primary)'
                            : isFuture
                            ? 'var(--color-accent-secondary)'
                            : '#ffffff',
                          display: 'block',
                          lineHeight: 1,
                        }}
                      >
                        {entry.year}
                      </span>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.55rem',
                          fontWeight: 700,
                          letterSpacing: '0.15em',
                          color: 'var(--color-text-muted)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {entry.tag}
                      </span>
                    </div>

                    <div
                      style={{
                        padding: '0.6rem',
                        borderRadius: 'var(--border-radius-sm)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: isCurrent
                          ? 'var(--color-accent-primary)'
                          : isFuture
                          ? 'var(--color-accent-secondary)'
                          : 'var(--color-text-tertiary)',
                      }}
                    >
                      {IconComp && <IconComp size={18} />}
                    </div>
                  </div>

                  <h4
                    className="font-display"
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      marginBottom: '0.5rem',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {entry.title}
                  </h4>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: 'var(--color-text-secondary)',
                      marginBottom: '1rem',
                    }}
                  >
                    {entry.text}
                  </p>
                </div>

                {entry.milestones && (
                  <div
                    style={{
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--glass-l1-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                    }}
                  >
                    {entry.milestones.map((m, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <div
                          style={{
                            width: '0.3rem',
                            height: '0.3rem',
                            borderRadius: '50%',
                            background: isCurrent ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
                          }}
                        />
                        <span
                          className="font-mono"
                          style={{
                            fontSize: '0.6rem',
                            color: 'var(--color-text-tertiary)',
                          }}
                        >
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* 06 — PROFESSIONAL EXPERIENCE SECTION */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <Briefcase size={18} style={{ color: 'var(--color-accent-primary)' }} />
          <h3 className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            06 — PROFESSIONAL EXPERIENCE & ROLES
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="exp-grid">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="liquid-glass-card"
              style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-lg)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div>
                  <h4 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                    {exp.role}
                  </h4>
                  <span className="font-display" style={{ fontSize: '0.9rem', color: 'var(--color-accent-primary)', fontWeight: 600 }}>
                    {exp.organization}
                  </span>
                </div>
                <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', background: 'rgba(255, 255, 255, 0.04)', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>
                  {exp.period}
                </span>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingTop: '0.85rem', borderTop: '1px solid var(--glass-l1-border)' }}>
                {exp.highlights.map((h, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color-accent-primary)', fontSize: '0.8rem' }}>›</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', lineHeight: 1.4 }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 08 & 09 — EDUCATION & MILESTONES SECTION */}
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="edu-milestones-grid">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass-card"
            style={{ padding: '2rem', borderRadius: 'var(--border-radius-xl)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <GraduationCap size={20} style={{ color: 'var(--color-accent-primary)' }} />
              <h4 className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                08 — EDUCATION
              </h4>
            </div>

            <h3 className="font-display" style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.25rem' }}>
              {EDUCATION_DATA.institution}
            </h3>
            <p className="font-display" style={{ fontSize: '0.95rem', color: 'var(--color-accent-secondary)', marginBottom: '1rem' }}>
              {EDUCATION_DATA.degree} ({EDUCATION_DATA.period}) · {EDUCATION_DATA.location}
            </p>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {EDUCATION_DATA.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <span className="font-mono" style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--color-text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                AREAS OF STUDY
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {EDUCATION_DATA.areasOfStudy.map((area) => (
                  <span key={area} className="font-mono" style={{ fontSize: '0.6rem', padding: '0.25rem 0.55rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--color-text-secondary)' }}>
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {EDUCATION_DATA.approachNote && (
              <div className="glass-panel" style={{ padding: '1rem', borderRadius: 'var(--border-radius-md)' }}>
                <span className="font-mono" style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  # MY APPROACH
                </span>
                <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                  "{EDUCATION_DATA.approachNote}"
                </p>
              </div>
            )}
          </motion.div>

          {/* Milestones Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="liquid-glass-card"
            style={{ padding: '2rem', borderRadius: 'var(--border-radius-xl)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <Award size={20} style={{ color: 'var(--color-accent-secondary)' }} />
              <h4 className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                09 — MILESTONES
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {MILESTONES.map((m) => (
                <div key={m.title} className="glass-panel" style={{ padding: '0.85rem 1.15rem', borderRadius: 'var(--border-radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <h5 className="font-display" style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>
                      {m.title}
                    </h5>
                    <span className="font-mono" style={{ fontSize: '0.6rem', color: 'var(--color-accent-secondary)' }}>
                      {m.year}
                    </span>
                  </div>
                  {m.organization && (
                    <span className="font-mono" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                      {m.organization}
                    </span>
                  )}
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-tertiary)', lineHeight: 1.4 }}>
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .exp-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .edu-milestones-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Server, Cpu, Globe, HeartPulse, GraduationCap, Building2, Car, Briefcase, Users, ArrowUpRight } from 'lucide-react';

interface BuildDomain {
  key: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const BUILD_DOMAINS: BuildDomain[] = [
  {
    key: '01',
    name: 'FULL-STACK APPLICATIONS',
    tagline: 'Complete Web Products',
    description: 'Building web applications from the interface to the backend, connecting users, business logic, APIs, and databases into complete products.',
    icon: <Terminal size={20} style={{ color: 'var(--color-accent-primary)' }} />,
  },
  {
    key: '02',
    name: 'BACKEND SYSTEMS',
    tagline: 'APIs, Auth & Data Logic',
    description: 'Working with APIs, authentication, databases, business logic, data relationships, validation, and server-side architecture.',
    icon: <Database size={20} style={{ color: 'var(--color-accent-secondary)' }} />,
  },
  {
    key: '03',
    name: 'DEVOPS & INFRASTRUCTURE',
    tagline: 'Containers & Cloud CI/CD',
    description: 'Expanding deeper into engineering after code is written — containers, CI/CD, Kubernetes, infrastructure automation, cloud services, and deployment.',
    icon: <Server size={20} style={{ color: 'var(--color-accent-tertiary)' }} />,
  },
  {
    key: '04',
    name: 'SOFTWARE PRODUCTS',
    tagline: 'Idea to Execution',
    description: 'Taking an idea, understanding the problem behind it, and turning it into something that can actually be used.',
    icon: <Cpu size={20} style={{ color: '#4ade80' }} />,
  },
  {
    key: '05',
    name: 'PROBLEM SOLVING',
    tagline: 'Local & Regional Impact',
    description: 'Addressing problems around healthcare, education, public services, businesses, and digital transformation within Rwanda and Africa.',
    icon: <Globe size={20} style={{ color: '#f87171' }} />,
  },
];

const WHY_DOMAINS = [
  { title: 'HEALTHCARE', icon: <HeartPulse size={18} />, desc: 'Using software and data to improve healthcare operations, monitoring, and decision-making.' },
  { title: 'EDUCATION', icon: <GraduationCap size={18} />, desc: 'Creating tools that make learning, collaboration, and access to technical knowledge easier.' },
  { title: 'PUBLIC SERVICES', icon: <Building2 size={18} />, desc: 'Exploring how digital systems can make public services more accessible and efficient.' },
  { title: 'TRANSPORTATION', icon: <Car size={18} />, desc: 'Building practical systems around mobility and transportation challenges.' },
  { title: 'BUSINESS', icon: <Briefcase size={18} />, desc: 'Helping businesses organize information, automate processes, and create better digital experiences.' },
  { title: 'YOUTH DEVELOPMENT', icon: <Users size={18} />, desc: 'Using technology and technical education to create opportunities for young people.' },
];

export default function NsCodex() {
  return (
    <section
      id="nscodex"
      aria-labelledby="nscodex-heading"
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
            02 — WHAT I DO
          </span>
          <h2
            id="nscodex-heading"
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
            WHAT I <span className="text-gradient-flow">BUILD</span>
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
            Engineering across full-stack applications, server logic, DevOps infrastructure, and software products that solve real-world problems.
          </p>
        </motion.div>
      </div>

      {/* Conceptual Breakdown Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
        }}
        className="nscodex-container-grid"
      >
        {/* Left: What & Why I Build Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="liquid-glass-card"
          style={{
            borderRadius: 'var(--border-radius-xl)',
            padding: 'clamp(2rem, 3.5vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <div className="status-dot active" />
              <span
                className="font-mono"
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--color-accent-primary)',
                  textTransform: 'uppercase',
                }}
              >
                // 10 — WHY I BUILD
              </span>
            </div>

            <h3
              className="font-display"
              style={{
                fontSize: '1.4rem',
                fontWeight: 900,
                color: 'var(--color-text-primary)',
                letterSpacing: '0.02em',
                marginBottom: '1rem',
              }}
            >
              Technology becomes more meaningful when it solves problems beyond the screen.
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1.5rem' }}>
              {WHY_DOMAINS.map((item) => (
                <div
                  key={item.title}
                  className="glass-panel"
                  style={{ padding: '0.85rem', borderRadius: 'var(--border-radius-sm)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem', color: 'var(--color-accent-primary)' }}>
                    {item.icon}
                    <span className="font-mono" style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em' }}>
                      {item.title}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', lineHeight: 1.35 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: '2rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--glass-l1-border)',
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                fontWeight: 700,
                color: 'var(--color-accent-primary)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              # THE BIGGER IDEA
            </span>
            <p className="font-display" style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
              "I want to build technology that makes sense in the context where it is being used. Especially in Rwanda. And eventually across Africa."
            </p>
          </div>
        </motion.div>

        {/* Right: What I Build Stack */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {BUILD_DOMAINS.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="liquid-glass-card group"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--border-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: 0 }}>
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    flexShrink: 0,
                  }}
                >
                  {sub.icon}
                </div>

                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        color: 'var(--color-accent-primary)',
                      }}
                    >
                      {sub.key}
                    </span>
                    <h4
                      className="font-display"
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        color: '#ffffff',
                      }}
                    >
                      {sub.name}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.4,
                      whiteSpace: 'normal',
                    }}
                  >
                    {sub.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .nscodex-container-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .nscodex-container-grid {
            grid-template-columns: 1fr 1.25fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}

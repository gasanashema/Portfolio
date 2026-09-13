import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Server, Cpu, Globe, HeartPulse, GraduationCap, Building2, Car, Briefcase, Users } from 'lucide-react';

interface BuildDomain {
  key: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
}

const BUILD_DOMAINS: BuildDomain[] = [
  {
    key: '01',
    name: 'FULL-STACK APPS',
    tagline: 'End-to-End Web Platforms',
    icon: <Terminal size={18} style={{ color: 'var(--color-accent-primary)' }} />,
  },
  {
    key: '02',
    name: 'BACKEND & APIS',
    tagline: 'REST Microservices & DB Architecture',
    icon: <Database size={18} style={{ color: 'var(--color-accent-secondary)' }} />,
  },
  {
    key: '03',
    name: 'DEVOPS & CLOUD',
    tagline: 'Docker, CI/CD & Kubernetes',
    icon: <Server size={18} style={{ color: 'var(--color-accent-tertiary)' }} />,
  },
  {
    key: '04',
    name: 'SOFTWARE PRODUCTS',
    tagline: 'Problem to Scalable Product',
    icon: <Cpu size={18} style={{ color: '#4ade80' }} />,
  },
  {
    key: '05',
    name: 'IMPACT SYSTEMS',
    tagline: 'Digital Transformation in Rwanda & Africa',
    icon: <Globe size={18} style={{ color: '#f87171' }} />,
  },
];

const WHY_DOMAINS = [
  { title: 'HEALTHCARE', icon: <HeartPulse size={16} style={{ color: 'var(--color-accent-tertiary)' }} />, tag: 'Health Tech' },
  { title: 'EDUCATION', icon: <GraduationCap size={16} style={{ color: 'var(--color-accent-secondary)' }} />, tag: 'EdTech' },
  { title: 'PUBLIC SERVICES', icon: <Building2 size={16} style={{ color: '#38bdf8' }} />, tag: 'GovTech' },
  { title: 'TRANSPORTATION', icon: <Car size={16} style={{ color: '#facc15' }} />, tag: 'Mobility' },
  { title: 'BUSINESS', icon: <Briefcase size={16} style={{ color: 'var(--color-accent-primary)' }} />, tag: 'FinTech' },
  { title: 'YOUTH TECH', icon: <Users size={16} style={{ color: '#4ade80' }} />, tag: 'Mentorship' },
];

export default function NsCodex() {
  return (
    <section
      id="nscodex"
      aria-labelledby="nscodex-heading"
      style={{ scrollMarginTop: '4rem' }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '1.25rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label" style={{ marginBottom: '0.4rem', display: 'flex' }}>
            02 — CORE DOMAINS
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
        </motion.div>
      </div>

      {/* Grid of Domains + Why Domains */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
        }}
      >
        {/* What I Build Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="liquid-glass-card"
          style={{
            padding: '1.15rem',
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
          }}
        >
          <span className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.15em' }}>
            // ENGINEERING FOCUS
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {BUILD_DOMAINS.map((domain) => (
              <div
                key={domain.key}
                className="glass-panel"
                style={{
                  padding: '0.55rem 0.85rem',
                  borderRadius: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                }}
              >
                {domain.icon}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="font-display" style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                    {domain.name}
                  </span>
                  <span className="font-mono" style={{ fontSize: '0.6rem', color: 'var(--color-text-tertiary)' }}>
                    {domain.tagline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why I Build Domains */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="liquid-glass-card"
          style={{
            padding: '1.15rem',
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
          }}
        >
          <span className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 800, color: 'var(--color-accent-secondary)', letterSpacing: '0.15em' }}>
            // DOMAINS & SECTORS
          </span>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.45rem' }}>
            {WHY_DOMAINS.map((item) => (
              <div
                key={item.title}
                className="glass-panel"
                style={{
                  padding: '0.65rem',
                  borderRadius: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {item.icon}
                  <span className="font-mono" style={{ fontSize: '0.52rem', color: 'var(--color-text-tertiary)' }}>
                    {item.tag}
                  </span>
                </div>
                <span className="font-display" style={{ fontSize: '0.78rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

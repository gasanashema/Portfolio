import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Github, Linkedin, FileText, MapPin } from 'lucide-react';
import { IDENTITY } from '../data/identity';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(IDENTITY.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ scrollMarginTop: '4rem' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="liquid-glass-card"
        style={{
          borderRadius: 0,
          padding: '1.5rem',
          textAlign: 'center',
          position: 'relative',
          border: '1px solid rgba(255, 107, 44, 0.3)',
        }}
      >
        <span className="section-label" style={{ justifyContent: 'center', display: 'flex', marginBottom: '0.5rem' }}>
          16 — DIRECT CONNECT
        </span>

        <h2
          id="contact-heading"
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
          LET'S BUILD <span className="text-gradient-flow">SOMETHING</span>
        </h2>

        <p
          className="font-display"
          style={{
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '36rem',
            margin: '0 auto 1.25rem',
          }}
        >
          Have a project, system architecture, or engineering role? Reach out directly.
        </p>

        {/* Action Buttons Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '1.25rem',
          }}
        >
          <a
            href={`mailto:${IDENTITY.email}`}
            className="btn-primary"
            style={{ borderRadius: 0, padding: '0.55rem 1.25rem', fontSize: '0.65rem' }}
          >
            <Mail size={14} />
            <span>SEND EMAIL</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="btn-glass"
            style={{ borderRadius: 0, padding: '0.55rem 1.25rem', fontSize: '0.65rem' }}
          >
            {copied ? (
              <>
                <Check size={14} style={{ color: 'var(--color-status-active)' }} />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>

          <a
            href={IDENTITY.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
            style={{ borderRadius: 0, padding: '0.55rem 1.25rem', fontSize: '0.65rem' }}
          >
            <Github size={14} />
            <span>GITHUB</span>
          </a>

          <a
            href={IDENTITY.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
            style={{ borderRadius: 0, padding: '0.55rem 1.25rem', fontSize: '0.65rem' }}
          >
            <Linkedin size={14} />
            <span>LINKEDIN</span>
          </a>
        </div>

        {/* Location Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-tertiary)', fontSize: '0.6rem' }} className="font-mono">
          <MapPin size={12} style={{ color: 'var(--color-accent-primary)' }} />
          <span>KIGALI, RWANDA · UTC+2</span>
        </div>
      </motion.div>
    </section>
  );
}

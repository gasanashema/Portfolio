import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Github, Linkedin, FileText } from 'lucide-react';
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
      style={{ scrollMarginTop: '6rem', padding: '2rem 0' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass-card"
        style={{
          borderRadius: 'var(--border-radius-xl)',
          padding: 'clamp(2.5rem, 6vw, 5rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255, 107, 44, 0.25)',
        }}
      >
        {/* Decorative ambient gradients */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 0%, rgba(255, 107, 44, 0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ justifyContent: 'center', display: 'flex', marginBottom: '1.25rem' }}>
              16 — CONTACT
            </span>

            <h2
              id="contact-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                marginBottom: '1.25rem',
              }}
            >
              LET'S BUILD <span className="text-gradient-flow">SOMETHING</span>
            </h2>

            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
                maxWidth: '42rem',
                margin: '0 auto 2.5rem',
                lineHeight: 1.55,
              }}
            >
              Have an idea, a problem worth solving, or a project that needs another engineer? Let's talk.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="contact-buttons"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <a
              href={`mailto:${IDENTITY.email}`}
              className="btn-primary"
              style={{ width: '100%', maxWidth: '17rem' }}
            >
              <Mail size={16} />
              <span>Send Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-glass"
              style={{ width: '100%', maxWidth: '17rem' }}
            >
              {copied ? (
                <>
                  <Check size={16} style={{ color: 'var(--color-status-active)' }} />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={IDENTITY.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
              style={{ width: '100%', maxWidth: '17rem' }}
            >
              <Github size={16} />
              <span>GitHub Profile</span>
            </a>

            <a
              href={IDENTITY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
              style={{ width: '100%', maxWidth: '17rem' }}
            >
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
            </a>
          </motion.div>

          {/* Final Word Note */}
          <div
            className="glass-panel"
            style={{
              maxWidth: '38rem',
              margin: '0 auto 2rem',
              padding: '1.25rem 1.75rem',
              borderRadius: 'var(--border-radius-md)',
            }}
          >
            <span className="font-mono" style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
              # FINAL WORD
            </span>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              "I'm always interested in good problems, interesting ideas, and people who want to build something meaningful. If you have something worth building, let's talk."
            </p>
          </div>

          {/* Info Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--glass-l1-border)',
              fontSize: '0.625rem',
              color: 'var(--color-text-tertiary)',
            }}
          >
            <span className="font-mono">EMAIL: {IDENTITY.email}</span>
            <span className="font-mono" style={{ color: 'var(--color-text-muted)' }}>•</span>
            <span className="font-mono">LOCATION: {IDENTITY.location}</span>
            <span className="font-mono" style={{ color: 'var(--color-text-muted)' }}>•</span>
            <span className="font-mono">COORDINATES: {IDENTITY.coordinates}</span>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 640px) {
          .contact-buttons {
            flex-direction: row !important;
            flex-wrap: wrap;
          }
          .contact-buttons a,
          .contact-buttons button {
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

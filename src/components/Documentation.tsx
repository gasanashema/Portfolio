import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Music, Archive, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { DOCUMENTATION_ARTICLES, type DocArticle } from '../data/documentation';

interface DocumentationProps {
  onSelectDoc: (article: DocArticle) => void;
}

const LIBRARY_CATEGORIES = [
  'Technology', 'Software Eng', 'Business', 'Leadership',
  'Psychology', 'Entrepreneurship',
];

const SOUNDTRACK_PLAYLISTS = [
  { name: 'FOCUS', desc: 'Coding & High Momentum' },
  { name: 'SYSTEMS', desc: 'Deep Architecture Thinking' },
  { name: 'WIND DOWN', desc: 'Late-Night Reading & Notes' },
];

const ARCHIVE_ITEMS = [
  { label: 'PROJECTS', desc: "Apps & Systems Built" },
  { label: 'BOOKS', desc: "Engineering Library" },
  { label: 'SOUNDTRACK', desc: "Music Behind The Code" },
  { label: 'MILESTONES', desc: 'Certificates & Wins' },
];

export default function Documentation({ onSelectDoc }: DocumentationProps) {
  const featuredDoc = DOCUMENTATION_ARTICLES[0];
  const secondaryDocs = DOCUMENTATION_ARTICLES.slice(1);

  return (
    <section
      id="documentation"
      aria-labelledby="documentation-heading"
      style={{ scrollMarginTop: '4rem' }}
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
            12 & 13 — LIBRARY, ARCHIVE & SOUNDTRACK
          </span>
          <h2
            id="documentation-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
            }}
          >
            ENGINEERING <span className="text-gradient-flow">ARCHIVE</span>
          </h2>
        </motion.div>
      </div>

      {/* Featured Essay Card */}
      {featuredDoc && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="liquid-glass-card"
          style={{
            borderRadius: 0,
            padding: '1.15rem 1.35rem',
            marginBottom: '1.25rem',
            border: '1px solid rgba(255, 107, 44, 0.3)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="font-mono" style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.15em' }}>
                // ESSAY_LOG_{featuredDoc.id.toUpperCase()}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>
                <Clock size={12} />
                <span>{featuredDoc.readTime}</span>
              </div>
            </div>

            <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.15 }}>
              {featuredDoc.title}
            </h3>

            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
              {featuredDoc.summary}
            </p>

            <div style={{ paddingTop: '0.25rem' }}>
              <button onClick={() => onSelectDoc(featuredDoc)} className="btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.65rem', borderRadius: 0 }}>
                <BookOpen size={13} />
                <span>READ ESSAY</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Secondary Articles & Library Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {/* Library Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass-card"
          style={{ padding: '1.15rem', borderRadius: 0 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
            <BookOpen size={16} style={{ color: 'var(--color-accent-primary)' }} />
            <h3 className="font-mono" style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              12 — THE LIBRARY
            </h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {LIBRARY_CATEGORIES.map((cat) => (
              <span key={cat} className="font-mono" style={{ fontSize: '0.58rem', padding: '0.2rem 0.5rem', borderRadius: 0, background: 'rgba(255, 255, 255, 0.04)', color: 'var(--color-text-secondary)' }}>
                {cat}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Soundtrack Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="liquid-glass-card"
          style={{ padding: '1.15rem', borderRadius: 0 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
            <Music size={16} style={{ color: 'var(--color-accent-secondary)' }} />
            <h3 className="font-mono" style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-accent-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              13 — SOUNDTRACK
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {SOUNDTRACK_PLAYLISTS.map((pl) => (
              <div key={pl.name} className="glass-panel" style={{ padding: '0.45rem 0.65rem', borderRadius: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '0.625rem', fontWeight: 800, color: 'var(--color-accent-secondary)' }}>
                  //{pl.name}
                </span>
                <span style={{ fontSize: '0.65rem', color: 'var(--color-text-tertiary)' }}>
                  {pl.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Archive Items */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="liquid-glass-card"
          style={{ padding: '1.15rem', borderRadius: 0 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
            <Archive size={16} style={{ color: '#38bdf8' }} />
            <h3 className="font-mono" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              15 — ARCHIVE
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
            {ARCHIVE_ITEMS.map((item) => (
              <div key={item.label} className="glass-panel" style={{ padding: '0.45rem', borderRadius: 0 }}>
                <span className="font-mono" style={{ fontSize: '0.58rem', fontWeight: 800, color: '#ffffff', display: 'block' }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '0.625rem', color: 'var(--color-text-tertiary)' }}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

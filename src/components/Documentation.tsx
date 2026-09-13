import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Music, Archive, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { DOCUMENTATION_ARTICLES, type DocArticle } from '../data/documentation';

interface DocumentationProps {
  onSelectDoc: (article: DocArticle) => void;
}

const LIBRARY_CATEGORIES = [
  'Technology', 'Software Engineering', 'Business', 'Leadership',
  'Personal Development', 'Psychology', 'Entrepreneurship',
];

const SOUNDTRACK_PLAYLISTS = [
  { name: 'FOCUS', desc: 'Songs I listen to when I need to sit down and get things done.' },
  { name: 'ENERGY', desc: 'Songs for coding sessions that need a little more momentum.' },
  { name: 'WIND DOWN', desc: 'Music for late-night thinking, reading, or stepping away from the screen.' },
  { name: 'FAVORITES', desc: 'Songs that simply stayed with me.' },
  { name: 'INSPIRATION', desc: 'Music connected to ideas, places, memories, or moments that influenced me.' },
];

const ARCHIVE_ITEMS = [
  { label: 'PROJECTS', desc: "Things I've built." },
  { label: 'BOOKS', desc: "Things I've read." },
  { label: 'MUSIC', desc: "Things I've listened to while building." },
  { label: 'CERTIFICATES', desc: 'Milestones from the learning journey.' },
  { label: 'EXPERIMENTS', desc: 'Things I built simply because I wanted to understand them.' },
  { label: 'NOTES', desc: 'Ideas, lessons, and observations collected along the way.' },
];

export default function Documentation({ onSelectDoc }: DocumentationProps) {
  const featuredDoc = DOCUMENTATION_ARTICLES[0];
  const secondaryDocs = DOCUMENTATION_ARTICLES.slice(1);

  return (
    <section
      id="documentation"
      aria-labelledby="documentation-heading"
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
            12, 13 & 15 — ARCHIVE, LIBRARY & SOUNDTRACK
          </span>
          <h2
            id="documentation-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            PERSONAL <span className="text-gradient-flow">ARCHIVE</span>
          </h2>
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              maxWidth: '48rem',
              lineHeight: 1.5,
              marginTop: '0.75rem',
            }}
          >
            A developer is shaped by more than the code they write. This is the space for engineering notes, the personal library, and the soundtrack behind the work.
          </p>
        </motion.div>
      </div>

      {/* Featured Essay Card */}
      {featuredDoc && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="liquid-glass-card"
          style={{
            borderRadius: 'var(--border-radius-xl)',
            padding: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="font-mono" style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.2em' }}>
                // ESSAY_LOG_{featuredDoc.id.toUpperCase()}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
                <Clock size={12} />
                <span>{featuredDoc.readTime}</span>
              </div>
            </div>

            <h3 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.15 }}>
              {featuredDoc.title}
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              {featuredDoc.summary}
            </p>

            <div className="glass-panel" style={{ padding: '1rem 1.25rem', borderRadius: 'var(--border-radius-md)' }}>
              <span className="font-mono" style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-accent-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                // Key Takeaways
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {featuredDoc.keyTakeaways.map((t, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={13} style={{ color: 'var(--color-accent-primary)', marginTop: '0.15rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '0.5rem' }}>
              <button onClick={() => onSelectDoc(featuredDoc)} className="btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.7rem' }}>
                <BookOpen size={14} />
                <span>Read Full Essay</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Secondary Articles */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '3rem' }} className="archive-docs-grid">
        {secondaryDocs.map((doc) => (
          <motion.article
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass-card"
            style={{ padding: '1.75rem', borderRadius: 'var(--border-radius-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <span className="system-badge" style={{ color: 'var(--color-accent-primary)', marginBottom: '0.75rem', display: 'inline-block' }}>
                {doc.category}
              </span>
              <h3 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, marginBottom: '0.5rem' }}>
                {doc.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {doc.summary}
              </p>
            </div>
            <button
              onClick={() => onSelectDoc(doc)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--color-accent-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: 0,
              }}
            >
              <span>Read Essay</span>
              <ArrowRight size={14} />
            </button>
          </motion.article>
        ))}
      </div>

      {/* Library, Soundtrack & Archive Triple Container */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="archive-triple-grid">
        {/* 12 — THE LIBRARY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass-card"
          style={{ padding: '2rem', borderRadius: 'var(--border-radius-xl)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <BookOpen size={20} style={{ color: 'var(--color-accent-primary)' }} />
            <h3 className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-primary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              12 — THE LIBRARY
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            A collection of books that have influenced the way I think, learn, build, and approach problems. Not a bookstore — a personal library.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {LIBRARY_CATEGORIES.map((cat) => (
              <span key={cat} className="font-mono" style={{ fontSize: '0.6rem', padding: '0.25rem 0.6rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--color-text-secondary)' }}>
                {cat}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 13 — THE SOUNDTRACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="liquid-glass-card"
          style={{ padding: '2rem', borderRadius: 'var(--border-radius-xl)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Music size={20} style={{ color: 'var(--color-accent-secondary)' }} />
            <h3 className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              13 — THE SOUNDTRACK
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
            Some things are easier to build with music playing in the background. The soundtrack behind the work.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {SOUNDTRACK_PLAYLISTS.slice(0, 3).map((pl) => (
              <div key={pl.name} className="glass-panel" style={{ padding: '0.6rem 0.85rem', borderRadius: '4px' }}>
                <span className="font-mono" style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--color-accent-secondary)', display: 'block' }}>
                  // {pl.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
                  {pl.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 15 — PERSONAL ARCHIVE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="liquid-glass-card"
          style={{ padding: '2rem', borderRadius: 'var(--border-radius-xl)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Archive size={20} style={{ color: 'var(--color-accent-tertiary)' }} />
            <h3 className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent-tertiary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              15 — PERSONAL ARCHIVE
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
            {ARCHIVE_ITEMS.map((item) => (
              <div key={item.label} className="glass-panel" style={{ padding: '0.6rem', borderRadius: '4px' }}>
                <span className="font-mono" style={{ fontSize: '0.6rem', fontWeight: 800, color: '#ffffff', display: 'block' }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-text-tertiary)' }}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .archive-docs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .archive-triple-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicPreloaderProps {
  onComplete?: () => void;
}

export default function CinematicPreloader({ onComplete }: CinematicPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isExiting, setIsExiting] = useState(false);

  // Lock background scroll during preloader presentation
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Choreographed progress & sequence timeline (~3.6 seconds total)
  useEffect(() => {
    const startTime = Date.now();
    const duration = 3400; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 15 && phase < 2) setPhase(2);
      if (currentProgress >= 40 && phase < 3) setPhase(3);
      if (currentProgress >= 75 && phase < 4) setPhase(4);
      if (currentProgress >= 98 && phase < 5) setPhase(5);

      if (elapsed >= duration) {
        clearInterval(interval);
        setIsExiting(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 850); // match curtain transition exit duration
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete, phase]);

  // Phase indicator labels
  const getPhaseCode = (p: number) => {
    if (p < 25) return '01 // INITIALIZING_NODE';
    if (p < 55) return '02 // MOUNTING_IDENTITY';
    if (p < 80) return '03 // COMPILER_ENGINES';
    if (p < 95) return '04 // BUILDING_SYSTEMS';
    return '05 // REVEAL_SEQUENCE';
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(1.5rem, 4vw, 3.5rem)',
            background: 'var(--color-bg-deep)',
            color: 'var(--color-text-primary)',
            overflow: 'hidden',
            pointerEvents: 'auto',
            userSelect: 'none',
          }}
        >
          {/* Top Curtain Panel */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50.1%',
              background: 'var(--color-bg-deep)',
              zIndex: 1,
              transformOrigin: 'top center',
            }}
            animate={isExiting ? { y: '-100%' } : { y: '0%' }}
            transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Bottom Curtain Panel */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50.1%',
              background: 'var(--color-bg-deep)',
              zIndex: 1,
              transformOrigin: 'bottom center',
            }}
            animate={isExiting ? { y: '100%' } : { y: '0%' }}
            transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Subtle Ambient Background Grain & Grid Lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              pointerEvents: 'none',
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
              `,
              backgroundSize: '4rem 4rem',
              opacity: 0.4,
            }}
          />

          {/* TOP EDITORIAL METADATA HEADER */}
          <header
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            {/* System Status Node */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}
            >
              <div
                style={{
                  width: '0.45rem',
                  height: '0.45rem',
                  borderRadius: '50%',
                  background: 'var(--color-accent-primary)',
                  boxShadow: '0 0 10px var(--color-accent-primary)',
                }}
              />
              <span
                className="font-mono"
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-secondary)',
                }}
              >
                SHEMA PHILBERT GASANA // INITIALIZING
              </span>
            </motion.div>

            {/* Coordinates / Location */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono"
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--color-text-muted)',
                textAlign: 'right',
              }}
            >
              1.9441° S, 30.0619° E · KIGALI, RWANDA
            </motion.div>
          </header>

          {/* MAIN DRAMATIC CENTRAL COMPOSITION */}
          <main
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '64rem',
              margin: '0 auto',
              width: '100%',
            }}
          >
            {/* Phase 02: Main Name Masked Reveal */}
            <div
              style={{
                overflow: 'hidden',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <motion.h1
                className="font-display"
                initial={{ y: '110%', opacity: 0 }}
                animate={phase >= 2 ? { y: '0%', opacity: 1 } : {}}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}
              >
                SHEMA PHILBERT GASANA
              </motion.h1>
            </div>

            {/* Tension Line Expansion */}
            <div
              style={{
                width: '100%',
                maxWidth: '28rem',
                height: '1px',
                background: 'rgba(255, 255, 255, 0.08)',
                position: 'relative',
                margin: '1.25rem 0',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1, ease: 'linear' }}
                style={{
                  height: '100%',
                  width: '100%',
                  background: 'var(--color-accent-primary)',
                  transformOrigin: 'left center',
                  boxShadow: '0 0 12px var(--color-accent-primary)',
                }}
              />
            </div>

            {/* Phase 03: Engineering Identity Subtitle */}
            <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
              <motion.div
                className="font-display"
                initial={{ y: '100%', opacity: 0 }}
                animate={phase >= 3 ? { y: '0%', opacity: 1 } : {}}
                transition={{
                  duration: 0.75,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-primary)',
                }}
              >
                SOFTWARE ENGINEER
              </motion.div>
            </div>

            {/* Subtitle Tech Domains */}
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                className="font-mono"
                initial={{ opacity: 0, y: 15 }}
                animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
                  fontWeight: 600,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                SOFTWARE · SYSTEMS · DEVOPS
              </motion.div>
            </div>
          </main>

          {/* BOTTOM EDITORIAL PROGRESS & COUNTER */}
          <footer
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
            }}
          >
            {/* Phase Code Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono"
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--color-text-tertiary)',
                textTransform: 'uppercase',
              }}
            >
              {getPhaseCode(progress)}
            </motion.div>

            {/* Progress Percentage Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.4rem',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  color: 'var(--color-text-primary)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {String(progress).padStart(2, '0')}
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-accent-primary)',
                }}
              >
                %
              </span>
            </motion.div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

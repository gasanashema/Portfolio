import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane } from 'lucide-react';

interface CinematicPreloaderProps {
  onComplete?: () => void;
}

export default function CinematicPreloader({ onComplete }: CinematicPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const [isUnzipping, setIsUnzipping] = useState(false);
  const [planeProgress, setPlaneProgress] = useState(0); // 0 to 100%

  // Lock background scroll during preloader presentation
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Fast-paced loading timeline (~1.2s rapid build + 0.6s plane zip reveal = 1.8s total)
  useEffect(() => {
    const startTime = Date.now();
    const loadDuration = 1100; // rapid loading phase

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / loadDuration) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 20 && phase < 2) setPhase(2);
      if (currentProgress >= 60 && phase < 3) setPhase(3);

      if (elapsed >= loadDuration) {
        clearInterval(interval);
        setIsUnzipping(true);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [phase]);

  // Plane flying animation sequence when unzipping starts
  useEffect(() => {
    if (!isUnzipping) return;

    const zipStartTime = Date.now();
    const zipDuration = 650; // ms plane flight duration

    const zipInterval = setInterval(() => {
      const elapsed = Date.now() - zipStartTime;
      const p = Math.min(100, (elapsed / zipDuration) * 100);
      setPlaneProgress(p);

      if (elapsed >= zipDuration) {
        clearInterval(zipInterval);
        if (onComplete) onComplete();
      }
    }, 16);

    return () => clearInterval(zipInterval);
  }, [isUnzipping, onComplete]);

  return (
    <AnimatePresence>
      {planeProgress < 100 && (
        <div
          key="preloader-container"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            overflow: 'hidden',
            pointerEvents: 'auto',
            userSelect: 'none',
          }}
        >
          {/* TOP PANEL (UNZIPS UPWARDS BEHIND PLANE) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'var(--color-bg-deep)',
              zIndex: 10,
              clipPath: isUnzipping
                ? `polygon(${planeProgress}% 0%, 100% 0%, 100% 100%, ${planeProgress}% 100%)`
                : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              transition: 'none',
              transform: isUnzipping ? `translateY(-${planeProgress * 0.4}%)` : 'translateY(0%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              boxSizing: 'border-box',
              borderBottom: '1px dashed rgba(255, 107, 44, 0.4)',
            }}
          >
            {/* Top Editorial Metadata Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
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
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  SHEMA PHILBERT GASANA
                </span>
              </div>

              <span
                className="font-mono"
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: 'var(--color-text-muted)',
                }}
              >
                1.9441° S, 30.0619° E
              </span>
            </div>

            {/* Top Half of Main Title */}
            <div
              style={{
                textAlign: 'center',
                alignSelf: 'center',
                marginBottom: '-1.5rem',
              }}
            >
              <motion.h1
                className="font-display"
                initial={{ opacity: 0, y: 10 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                style={{
                  fontSize: 'clamp(2rem, 5vw, 4.25rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}
              >
                SHEMA PHILBERT GASANA
              </motion.h1>
            </div>
          </div>

          {/* BOTTOM PANEL (UNZIPS DOWNWARDS BEHIND PLANE) */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'var(--color-bg-deep)',
              zIndex: 10,
              clipPath: isUnzipping
                ? `polygon(${planeProgress}% 0%, 100% 0%, 100% 100%, ${planeProgress}% 100%)`
                : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              transition: 'none',
              transform: isUnzipping ? `translateY(${planeProgress * 0.4}%)` : 'translateY(0%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              boxSizing: 'border-box',
              borderTop: '1px dashed rgba(255, 107, 44, 0.4)',
            }}
          >
            {/* Bottom Half Subtitles */}
            <div
              style={{
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: '-1rem',
              }}
            >
              <motion.div
                className="font-display"
                initial={{ opacity: 0, y: 10 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.5rem)',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-primary)',
                  marginBottom: '0.4rem',
                }}
              >
                SOFTWARE ENGINEER
              </motion.div>

              <motion.div
                className="font-mono"
                initial={{ opacity: 0 }}
                animate={phase >= 3 ? { opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: 'clamp(0.6rem, 1vw, 0.8rem)',
                  letterSpacing: '0.25em',
                  color: 'var(--color-text-tertiary)',
                  textTransform: 'uppercase',
                }}
              >
                SOFTWARE · SYSTEMS · DEVOPS
              </motion.div>
            </div>

            {/* Bottom Footer Progress Counter */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: '100%',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-text-tertiary)',
                  textTransform: 'uppercase',
                }}
              >
                {isUnzipping ? 'UNZIPPING_PORTFOLIO...' : 'INITIALIZING_SYSTEM...'}
              </span>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    color: 'var(--color-text-primary)',
                    fontVariantNumeric: 'tabular-nums',
                    lineHeight: 0.9,
                  }}
                >
                  {String(isUnzipping ? 100 : progress).padStart(2, '0')}
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--color-accent-primary)',
                  }}
                >
                  %
                </span>
              </div>
            </div>
          </div>

          {/* FLYING PLANE ZIPPER RUNNER & SEAM TRAIL */}
          {isUnzipping && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: 0,
                zIndex: 20,
                pointerEvents: 'none',
              }}
            >
              {/* Glowing Trailing Laser / Zip Seam Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '-1px',
                  left: 0,
                  width: `${planeProgress}%`,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent 0%, var(--color-accent-primary) 100%)',
                  boxShadow: '0 0 15px var(--color-accent-primary)',
                }}
              />

              {/* Jet Plane Zipper Runner Icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '-18px',
                  left: `calc(${planeProgress}% - 12px)`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transform: 'rotate(12deg)',
                  transition: 'none',
                  filter: 'drop-shadow(0 0 12px var(--color-accent-primary))',
                }}
              >
                <Plane
                  size={32}
                  style={{
                    color: 'var(--color-accent-primary)',
                    fill: 'var(--color-accent-primary)',
                    strokeWidth: 1.5,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}

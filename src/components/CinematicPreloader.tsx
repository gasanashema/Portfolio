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

  // Rapid loading phase (~0.9s) before unzipping flight begins
  useEffect(() => {
    const startTime = Date.now();
    const loadDuration = 900;

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

  // Plane flight animation sequence (1.4 seconds smooth flight across the screen)
  useEffect(() => {
    if (!isUnzipping) return;

    const zipStartTime = Date.now();
    const zipDuration = 1400; // 1.4s smooth flight duration so user can see it clearly

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
          {/* TOP PANEL (UNZIPS UPWARDS BEHIND PLANE, REVEALING PORTFOLIO UNDERNEATH) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50.1%',
              background: 'var(--color-bg-deep)',
              zIndex: 10,
              clipPath: isUnzipping
                ? `polygon(${planeProgress}% 0%, 100% 0%, 100% 100%, ${planeProgress}% 100%)`
                : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              transition: 'none',
              transform: isUnzipping ? `translateY(-${planeProgress * 0.85}%)` : 'translateY(0%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(1.5rem, 4vw, 3.5rem)',
              boxSizing: 'border-box',
              borderBottom: '2px dashed var(--color-accent-primary)',
            }}
          >
            {/* Top Editorial Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    background: 'var(--color-accent-primary)',
                    boxShadow: '0 0 12px var(--color-accent-primary)',
                  }}
                />
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    letterSpacing: '0.22em',
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
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--color-text-muted)',
                }}
              >
                1.9441° S, 30.0619° E · KIGALI
              </span>
            </div>

            {/* Top Half of Main Title */}
            <div
              style={{
                textAlign: 'center',
                alignSelf: 'center',
                marginBottom: '-1.75rem',
              }}
            >
              <motion.h1
                className="font-display"
                initial={{ opacity: 0, y: 15 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 4.75rem)',
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

          {/* BOTTOM PANEL (UNZIPS DOWNWARDS BEHIND PLANE, REVEALING PORTFOLIO UNDERNEATH) */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50.1%',
              background: 'var(--color-bg-deep)',
              zIndex: 10,
              clipPath: isUnzipping
                ? `polygon(${planeProgress}% 0%, 100% 0%, 100% 100%, ${planeProgress}% 100%)`
                : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              transition: 'none',
              transform: isUnzipping ? `translateY(${planeProgress * 0.85}%)` : 'translateY(0%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(1.5rem, 4vw, 3.5rem)',
              boxSizing: 'border-box',
              borderTop: '2px dashed var(--color-accent-primary)',
            }}
          >
            {/* Bottom Subtitles */}
            <div
              style={{
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: '-1.25rem',
              }}
            >
              <motion.div
                className="font-display"
                initial={{ opacity: 0, y: 15 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.75rem)',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-primary)',
                  marginBottom: '0.5rem',
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
                  fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
                  letterSpacing: '0.28em',
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
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  color: 'var(--color-text-tertiary)',
                  textTransform: 'uppercase',
                }}
              >
                {isUnzipping ? 'UNZIPPING_PAGE...' : 'INITIALIZING_SYSTEM...'}
              </span>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
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
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: 'var(--color-accent-primary)',
                  }}
                >
                  %
                </span>
              </div>
            </div>
          </div>

          {/* PROMINENT JET PLANE & ZIPPER SLIDER RUNNER */}
          {isUnzipping && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: 0,
                zIndex: 30,
                pointerEvents: 'none',
              }}
            >
              {/* Glowing Jet Trail & Zipper Seam Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '-2px',
                  left: 0,
                  width: `${planeProgress}%`,
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent 0%, var(--color-accent-primary) 100%)',
                  boxShadow: '0 0 20px var(--color-accent-primary), 0 0 40px var(--color-accent-primary)',
                }}
              />

              {/* Large Jet Plane & Zipper Tag Slider */}
              <div
                style={{
                  position: 'absolute',
                  top: '-42px',
                  left: `calc(${planeProgress}% - 40px)`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transform: 'rotate(10deg)',
                  transition: 'none',
                  filter: 'drop-shadow(0 0 16px var(--color-accent-primary))',
                }}
              >
                {/* Large Jet Plane Icon */}
                <Plane
                  size={84}
                  style={{
                    color: 'var(--color-accent-primary)',
                    fill: 'var(--color-accent-primary)',
                    strokeWidth: 1.5,
                  }}
                />

                {/* Zipper Pull Tag Label */}
                <div
                  className="font-mono"
                  style={{
                    background: 'var(--color-accent-primary)',
                    color: '#000000',
                    fontWeight: 900,
                    fontSize: '0.65rem',
                    padding: '0.2rem 0.6rem',
                    letterSpacing: '0.15em',
                    boxShadow: '0 0 12px var(--color-accent-primary)',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    marginLeft: '-1rem',
                  }}
                >
                  UNZIP
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}

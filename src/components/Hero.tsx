import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
} from 'lucide-react';
import { IDENTITY, SOCIALS } from '../config';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Github,
  Linkedin,
  Mail,
  FileText,
};

function StaggeredLetter({ char, index }: { char: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50, rotateX: -35 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.65,
        delay: 0.2 + index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ display: 'inline-block', willChange: 'transform' }}
      aria-hidden="true"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();

  // Scroll parallax transforms
  const opacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.16], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.16], [0, -30]);

  // Mouse tilt for subtle depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 20 };
  const dx = useSpring(mouseX, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 35;
    const y = (clientY - (top + height / 2)) / 35;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 5rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '1rem',
        paddingBottom: '2rem',
      }}
    >
      <motion.div style={{ opacity, scale, y, x: dx }}>
        {/* Editorial Name */}
        <h1
          id="hero-heading"
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ display: 'block' }} aria-label={IDENTITY.firstName}>
            {IDENTITY.firstName.split('').map((char, i) => (
              <StaggeredLetter key={i} char={char} index={i} />
            ))}
          </span>
          <span
            className="text-gradient-flow"
            style={{ display: 'block' }}
            aria-label={IDENTITY.lastName}
          >
            {IDENTITY.lastName.split('').map((char, i) => (
              <StaggeredLetter
                key={i}
                char={char}
                index={IDENTITY.firstName.length + i}
              />
            ))}
          </span>
        </h1>

        {/* Punchy Minimal Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="font-display"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            fontWeight: 400,
            color: 'var(--color-text-secondary)',
            maxWidth: '48rem',
            lineHeight: 1.35,
            marginBottom: '1.5rem',
          }}
        >
          Building software, backend systems, and automated infrastructure pipelines.
        </motion.p>

        {/* Action CTAs & Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.85rem',
          }}
        >
          <a href="#projects" className="btn-primary" style={{ borderRadius: 0, padding: '0.65rem 1.35rem', fontSize: '0.7rem' }}>
            <span>EXPLORE WORK</span>
          </a>

          <a
            href={IDENTITY.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
            style={{ borderRadius: 0, padding: '0.65rem 1.35rem', fontSize: '0.7rem' }}
          >
            <span>DOWNLOAD CV</span>
          </a>

          {/* Quick Social Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginLeft: '0.5rem',
            }}
          >
            {SOCIALS.map((s) => {
              const IconComp = ICON_MAP[s.iconName];
              return (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit official profile on ${s.name}`}
                  className="liquid-glass-card"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--border-radius-md)',
                    color: 'var(--color-text-tertiary)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--color-accent-primary)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--color-text-tertiary)')
                  }
                >
                  {IconComp && <IconComp size={18} />}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

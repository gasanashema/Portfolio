import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  FolderGit2,
  Cpu,
  History,
  Mail,
  Search,
  Code2,
  Menu,
  X,
} from 'lucide-react';
import { IDENTITY } from '../config';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenCommandPalette?: () => void;
}

export interface NavItem {
  id: string;
  icon: React.ElementType;
  label: string;
  badge: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', icon: Terminal, label: 'Home / Overview', badge: '00' },
  { id: 'work', icon: FolderGit2, label: 'Selected Work & Projects', badge: '04' },
  { id: 'tech', icon: Cpu, label: 'Tech Stack & DevOps Protocols', badge: '03' },
  { id: 'journey', icon: History, label: 'Career Journey & Experience', badge: '05' },
  { id: 'contact', icon: Mail, label: 'Archive & Direct Contact', badge: '16' },
];

export default function Navbar({ activePage, onNavigate, onOpenCommandPalette }: NavbarProps) {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const activeItem = NAV_ITEMS.find((item) => item.id === activePage) || NAV_ITEMS[0];
  const ActiveIcon = activeItem.icon;

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          RIGHT-EDGE FIXED VERTICAL ICON DOCK (Desktop, Vertically Centered)
          ═══════════════════════════════════════════════════════════ */}
      <aside
        aria-label="Right Edge Navigation"
        className="nav-drawer-desktop"
        style={{
          position: 'fixed',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 160,
          display: 'none',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <div
          className="glass-elevated"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.75rem 0.5rem',
            borderRadius: 0,
            background: 'rgba(10, 10, 15, 0.94)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.75), 0 0 24px rgba(255, 107, 44, 0.08)',
          }}
        >
          {/* Brand Home Header */}
          <button
            onClick={() => onNavigate('home')}
            onMouseEnter={() => setHoveredItemId('brand')}
            onMouseLeave={() => setHoveredItemId(null)}
            aria-label="Shema Philbert Gasana Home"
            style={{
              position: 'relative',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: 0,
              border: 'none',
              background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: '0 0 16px rgba(255, 107, 44, 0.4)',
              marginBottom: '0.2rem',
            }}
          >
            <ActiveIcon size={16} />

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredItemId === 'brand' && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    right: '3.25rem',
                    whiteSpace: 'nowrap',
                    background: 'rgba(10, 10, 16, 0.96)',
                    border: '1px solid var(--color-accent-primary)',
                    padding: '0.45rem 0.85rem',
                    borderRadius: 0,
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.675rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    pointerEvents: 'none',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.8)',
                    zIndex: 20,
                  }}
                >
                  <span style={{ color: 'var(--color-accent-primary)' }}>SHEMA</span> — {activeItem.label}
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <div
            style={{
              width: '1.4rem',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.12)',
              margin: '0.1rem 0',
            }}
          />

          {/* Nav Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {NAV_ITEMS.map((item) => {
              const IconComponent = item.icon;
              const isActive = activePage === item.id;
              const isHovered = hoveredItemId === item.id;

              return (
                <div
                  key={item.id}
                  style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                >
                  {/* Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          position: 'absolute',
                          right: '3.25rem',
                          whiteSpace: 'nowrap',
                          background: 'rgba(10, 10, 16, 0.96)',
                          border: isActive
                            ? '1px solid var(--color-accent-primary)'
                            : '1px solid rgba(255, 255, 255, 0.15)',
                          padding: '0.45rem 0.85rem',
                          borderRadius: 0,
                          color: '#ffffff',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          pointerEvents: 'none',
                          boxShadow: '0 8px 28px rgba(0, 0, 0, 0.8)',
                          zIndex: 20,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ color: 'var(--color-accent-primary)', fontWeight: 900 }}>
                          [{item.badge}]
                        </span>
                        <span>{item.label}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => onNavigate(item.id)}
                    aria-label={item.label}
                    style={{
                      position: 'relative',
                      width: '2.4rem',
                      height: '2.4rem',
                      borderRadius: 0,
                      border: isActive
                        ? '1px solid var(--color-accent-primary)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      background: isActive
                        ? 'rgba(255, 107, 44, 0.2)'
                        : isHovered
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(255, 255, 255, 0.03)',
                      color: isActive
                        ? 'var(--color-accent-primary)'
                        : isHovered
                        ? '#ffffff'
                        : 'var(--color-text-secondary)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all var(--transition-fast)',
                      boxShadow: isActive ? '0 0 16px rgba(255, 107, 44, 0.35)' : 'none',
                    }}
                  >
                    <IconComponent size={16} />

                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        style={{
                          position: 'absolute',
                          inset: -2,
                          borderRadius: 0,
                          border: '1px solid var(--color-accent-primary)',
                          pointerEvents: 'none',
                        }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <div
            style={{
              width: '1.4rem',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.12)',
              margin: '0.1rem 0',
            }}
          />

          {/* Action Tools */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {/* Search Command Palette Trigger */}
            <div
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setHoveredItemId('cmd')}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <AnimatePresence>
                {hoveredItemId === 'cmd' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute',
                      right: '3.25rem',
                      whiteSpace: 'nowrap',
                      background: 'rgba(10, 10, 16, 0.96)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      padding: '0.45rem 0.85rem',
                      borderRadius: 0,
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      pointerEvents: 'none',
                      boxShadow: '0 8px 28px rgba(0, 0, 0, 0.8)',
                      zIndex: 20,
                    }}
                  >
                    Search / Command Palette (⌘K)
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={onOpenCommandPalette}
                aria-label="Open Command Palette (⌘K)"
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                  borderRadius: 0,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--color-accent-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Search size={16} />
              </button>
            </div>

            {/* GitHub Profile */}
            <div
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setHoveredItemId('github')}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <AnimatePresence>
                {hoveredItemId === 'github' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute',
                      right: '3.25rem',
                      whiteSpace: 'nowrap',
                      background: 'rgba(10, 10, 16, 0.96)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      padding: '0.45rem 0.85rem',
                      borderRadius: 0,
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      pointerEvents: 'none',
                      boxShadow: '0 8px 28px rgba(0, 0, 0, 0.8)',
                      zIndex: 20,
                    }}
                  >
                    GitHub Profile
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={IDENTITY.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                  borderRadius: 0,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--color-text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all var(--transition-fast)',
                  textDecoration: 'none',
                }}
              >
                <Code2 size={16} />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE FLOATING NAV TRIGGER (< 1024px, Vertically Centered)
          ═══════════════════════════════════════════════════════════ */}
      <motion.div
        className="nav-mobile-bar"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '0.5rem',
          zIndex: 160,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Navigation Menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.3rem',
            padding: '0.75rem 0.55rem',
            borderRadius: 0,
            background: 'rgba(10, 10, 15, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.75), 0 0 20px rgba(255, 107, 44, 0.2)',
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          <ActiveIcon size={18} style={{ color: 'var(--color-accent-primary)' }} />
          <span
            className="font-mono"
            style={{
              fontSize: '0.55rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            NAV
          </span>
          <Menu size={16} />
        </button>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE FULL-SCREEN MENU DRAWER
          ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(6, 6, 8, 0.96)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2rem 1.5rem',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '1rem',
              }}
            >
              <div>
                <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--color-accent-primary)', letterSpacing: '0.15em' }}>
                  SHEMA PHILBERT GASANA
                </span>
                <p className="font-display" style={{ fontSize: '1rem', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase' }}>
                  Navigation Pages
                </p>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: 0,
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Pages Menu */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', padding: '1rem 0' }}>
              {NAV_ITEMS.map((item, i) => {
                const ItemIcon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate(item.id);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: 0,
                      background: isActive
                        ? 'rgba(255, 107, 44, 0.18)'
                        : 'rgba(255, 255, 255, 0.04)',
                      border: isActive
                        ? '1px solid var(--color-accent-primary)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#ffffff',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: '2.25rem',
                        height: '2.25rem',
                        borderRadius: 0,
                        background: isActive
                          ? 'var(--color-accent-primary)'
                          : 'rgba(255, 255, 255, 0.08)',
                        color: isActive ? '#ffffff' : 'var(--color-accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <ItemIcon size={16} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.55rem',
                          color: isActive ? 'var(--color-accent-primary)' : 'var(--color-text-tertiary)',
                          letterSpacing: '0.12em',
                        }}
                      >
                        PAGE [{item.badge}]
                      </span>
                      <span
                        className="font-display"
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenCommandPalette) onOpenCommandPalette();
                }}
                className="btn-glass"
                style={{ width: '100%', justifyContent: 'center', borderRadius: 0 }}
              >
                <Search size={15} />
                <span>Search / Command Palette (⌘K)</span>
              </button>

              <a
                href={`mailto:${IDENTITY.email}`}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', borderRadius: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail size={15} />
                <span>Email Shema</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .nav-drawer-desktop { display: flex !important; }
          .nav-mobile-bar { display: none !important; }
        }
        @media (max-width: 1023px) {
          .nav-drawer-desktop { display: none !important; }
          .nav-mobile-bar { display: flex !important; }
        }
      `}</style>
    </>
  );
}

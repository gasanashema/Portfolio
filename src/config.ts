/**
 * Centralized Configuration & Aggregated Data
 * Shema Philbert Gasana | Software Engineer
 */

export * from './data/identity';
export * from './data/projects';
export * from './data/protocols';
export * from './data/technologies';
export * from './data/documentation';
export * from './data/now';
export * from './data/timeline';
export * from './data/socials';
export * from './data/experience';
export * from './data/education';

import { SOCIAL_CHANNELS } from './data/socials';
import { TIMELINE_DATA } from './data/timeline';

// Navigation items for floating glass header and mobile drawer
export const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'What I Build', href: '#nscodex', id: 'nscodex' },
  { label: 'Technologies', href: '#capabilities', id: 'capabilities' },
  { label: 'Selected Work', href: '#projects', id: 'projects' },
  { label: 'Beyond Code', href: '#protocols', id: 'protocols' },
  { label: 'Journey & Exp', href: '#timeline', id: 'timeline' },
  { label: 'Archive', href: '#documentation', id: 'documentation' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const;

export const SOCIALS = SOCIAL_CHANNELS.map((s) => ({
  name: s.name,
  iconName: s.iconName,
  url: s.url,
}));

export const TIMELINE = TIMELINE_DATA;

export const ABOUT_TAGS = [
  { label: 'SOFTWARE ENGINEER', sublabel: 'Role' },
  { label: 'KIGALI, RWANDA', sublabel: 'Location' },
  { label: 'FULL-STACK & DEVOPS', sublabel: 'Focus' },
] as const;

export const CATEGORIES = ['All', 'Full-Stack', 'Systems & Backend', 'DevOps & Platform', 'Health & Data', 'Product Concepts'] as const;
export type Category = (typeof CATEGORIES)[number];

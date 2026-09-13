/**
 * Digital Network & Contact Endpoints
 * Shema Philbert Gasana | Software Engineer
 */

export interface SocialChannel {
  name: string;
  handle: string;
  purpose: string;
  description: string;
  url: string;
  iconName: string;
  badge: string;
  isPrimary?: boolean;
}

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    name: 'GitHub',
    handle: '@shemaphilbert',
    purpose: 'Code & Open Source',
    description: 'Public repositories, software projects, backend systems, and infrastructure experiments.',
    url: 'https://github.com/shemaphilbert',
    iconName: 'Github',
    badge: 'CODE_BASE',
    isPrimary: true,
  },
  {
    name: 'LinkedIn',
    handle: 'in/shema-philbert-gasana',
    purpose: 'Professional Network',
    description: 'Professional experience, software engineering updates, and career connection.',
    url: 'https://linkedin.com/in/shema-philbert-gasana',
    iconName: 'Linkedin',
    badge: 'CONNECT',
    isPrimary: true,
  },
  {
    name: 'Email',
    handle: 'shemaphilbert@gmail.com',
    purpose: 'Direct Communication',
    description: 'Direct email for project opportunities, engineering roles, and technical discussions.',
    url: 'mailto:shemaphilbert@gmail.com',
    iconName: 'Mail',
    badge: 'DIRECT_MAIL',
    isPrimary: true,
  },
  {
    name: 'Curriculum Vitae',
    handle: 'Download CV',
    purpose: 'Engineering Profile',
    description: 'Complete overview of professional software engineering experience, skills, and education.',
    url: '#',
    iconName: 'FileText',
    badge: 'RESUME',
    isPrimary: true,
  },
];

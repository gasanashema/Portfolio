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
    handle: '@gasanashema',
    purpose: 'Code & Open Source',
    description: 'Public repositories, software projects, backend systems, and infrastructure experiments.',
    url: 'https://github.com/gasanashema',
    iconName: 'Github',
    badge: 'CODE_BASE',
    isPrimary: true,
  },
  {
    name: 'GitLab',
    handle: '@gasanashema',
    purpose: 'Code & CI/CD Pipelines',
    description: 'Repository management, DevOps automation, and collaborative development pipelines on GitLab.',
    url: 'https://gitlab.com/gasanashema',
    iconName: 'Gitlab',
    badge: 'GITLAB_REPO',
    isPrimary: true,
  },
  {
    name: 'LinkedIn',
    handle: 'in/shema-philbert',
    purpose: 'Professional Network',
    description: 'Professional experience, software engineering updates, and career connection.',
    url: 'https://linkedin.com/in/shema-philbert',
    iconName: 'Linkedin',
    badge: 'CONNECT',
    isPrimary: true,
  },
  {
    name: 'Email',
    handle: 'shemaphilbert8@gmail.com',
    purpose: 'Direct Communication',
    description: 'Direct email for project opportunities, engineering roles, and technical discussions.',
    url: 'mailto:shemaphilbert8@gmail.com',
    iconName: 'Mail',
    badge: 'DIRECT_MAIL',
    isPrimary: true,
  },
  {
    name: 'Curriculum Vitae',
    handle: 'Download CV',
    purpose: 'Engineering Profile',
    description: 'Complete overview of professional software engineering experience, skills, and education.',
    url: '/Philbert_Shema_Gasana_CV.pdf',
    iconName: 'FileText',
    badge: 'RESUME',
    isPrimary: true,
  },
];

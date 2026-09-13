/**
 * Professional Experience & Coaching
 * Shema Philbert Gasana | Software Engineer
 */

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  type: 'PROFESSIONAL' | 'COACHING' | 'VOLUNTEER' | 'EDUCATION';
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'click-creations',
    role: 'Software Developer',
    organization: 'The Click Creations',
    period: 'August 2023 — August 2025',
    location: 'Kigali, Rwanda',
    description:
      'Worked as a software developer contributing to real-world software projects and gaining professional experience in application development.',
    highlights: [
      'Contributed to commercial software application development and backend services.',
      'Transitioned from academic projects into professional production software standards.',
      'Understood user expectations and requirements when delivering software products for actual organizations.',
    ],
    type: 'PROFESSIONAL',
  },
  {
    id: 'the-gym',
    role: 'Trainee → Coach',
    organization: 'The Gym',
    period: '2024 — Present',
    location: 'Kigali, Rwanda',
    description:
      'Evolved from learning and developing technical skills into helping other developers grow.',
    highlights: [
      'Coached trainees through technical challenges, development tasks, and assessments.',
      'Guided emerging developers through structured learning paths and code reviews.',
      'Strengthened technical communication: "Knowing something is valuable. Being able to explain it clearly is even more valuable."',
    ],
    type: 'COACHING',
  },
  {
    id: 'mastercard-outreach',
    role: 'Volunteer',
    organization: 'Mastercard Foundation Outreach',
    period: '2024',
    location: 'Rwanda',
    description:
      'Contributed to outreach activities focused on digital literacy, technology, Big Data, and AI for young people.',
    highlights: [
      'Participated in community initiatives promoting digital literacy across Rwanda.',
      'Helped demystify AI, Big Data, and computer science concepts for youth.',
      'Exposed to the importance of making technology knowledge accessible.',
    ],
    type: 'VOLUNTEER',
  },
  {
    id: 'cog-high-school-dev',
    role: 'Software Development Foundation',
    organization: 'COG High School',
    period: '2021 — 2023',
    location: 'Kicukiro, Kigali',
    description:
      'Built early software development foundation through COG High School (formerly Saint Patrick Secondary School Kicukiro).',
    highlights: [
      'Where programming moved from something I was learning into something I could use to build actual projects.',
      'Achieved 57 / 60 academic performance milestone.',
      'Served as Head Boy, developing early leadership and communication experience.',
    ],
    type: 'EDUCATION',
  },
];

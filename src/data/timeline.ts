/**
 * The Engineering Journey
 * Shema Philbert Gasana | Software Engineer
 */

export interface TimelineEntry {
  year: string;
  tag: string;
  title: string;
  text: string;
  iconName: string;
  status: 'HISTORICAL' | 'CURRENT' | 'DIRECTION';
  milestones?: string[];
}

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    year: '2018',
    tag: 'COMMAND_LINE',
    title: 'CMD & Networking Exploration',
    text: 'Started my journey playing with CMD commands, exploring computer networks, and experimenting with WiFi security testing.',
    iconName: 'Code2',
    status: 'HISTORICAL',
    milestones: ['CMD & Terminal command lines', 'Networking basics & exploration', 'WiFi security testing'],
  },
  {
    year: '2019',
    tag: 'WEB_FOUNDATIONS',
    title: 'Learned HTML & Web Basics',
    text: 'Learned HTML and began constructing my first structured web pages and understanding browser rendering.',
    iconName: 'Code2',
    status: 'HISTORICAL',
    milestones: ['HTML5 markup & structure', 'Web design fundamentals', 'Building initial web pages'],
  },
  {
    year: '2020',
    tag: 'HIGH_SCHOOL',
    title: 'Software Track & COVID Projects',
    text: 'Started software development in high school. During the COVID lockdown, built numerous frontend web projects to sharpen coding skills.',
    iconName: 'Layers',
    status: 'HISTORICAL',
    milestones: ['High School Software Development Track', 'COVID Lockdown Project Sprint', 'Frontend Web UI Development'],
  },
  {
    year: '2022',
    tag: 'FIRST_BACKEND',
    title: 'First Full-Stack App (PHP & MySQL)',
    text: 'Built my first database-driven full-stack application utilizing PHP backend logic and MySQL database management.',
    iconName: 'Server',
    status: 'HISTORICAL',
    milestones: ['First PHP & MySQL full-stack app', 'Relational database schema design', 'Server-side rendering & APIs'],
  },
  {
    year: '2023',
    tag: 'RAPID_BUILDING',
    title: 'Multi-Application Development',
    text: 'Expanded app creation rapidly, building multiple full-stack applications across web frameworks, APIs, and databases.',
    iconName: 'Trophy',
    status: 'HISTORICAL',
    milestones: ['Built & launched multiple web apps', 'Full-stack development & API design', 'Database integration & optimization'],
  },
  {
    year: '2024',
    tag: 'CLICK_CREATIONS',
    title: 'Joined Click Creations',
    text: 'Joined Click Creations as a Software Engineer, building and shipping multiple production-grade software applications.',
    iconName: 'Cpu',
    status: 'CURRENT',
    milestones: ['Joined Click Creations team', 'Built & shipped enterprise applications', 'Full-stack & systems engineering'],
  },
  {
    year: 'NEXT',
    tag: 'FUTURE_DIRECTION',
    title: 'Build Impactful Systems',
    text: 'Keep building, learning, and expanding into backend architecture, automated infrastructure, and scalable cloud systems.',
    iconName: 'Rocket',
    status: 'DIRECTION',
    milestones: ['Advanced backend architecture', 'Cloud & DevOps infrastructure', 'Scaling digital solutions across Rwanda'],
  },
];

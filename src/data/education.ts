/**
 * Education & Key Milestones
 * Shema Philbert Gasana | Software Engineer
 */

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  areasOfStudy: string[];
  approachNote?: string;
}

export interface MilestoneEntry {
  title: string;
  organization?: string;
  year: string;
  category: 'ACADEMIC' | 'LEADERSHIP' | 'WORKSHOP' | 'RECOGNITION' | 'SCHOLARSHIP';
  description: string;
}

export const EDUCATION_DATA: EducationEntry = {
  institution: 'Adventist University of Central Africa (AUCA)',
  degree: 'Software Engineering',
  period: 'Undergraduate',
  location: 'Kigali, Rwanda',
  description:
    'Giving me a stronger academic foundation in software engineering while developing practical skills and building real systems outside the classroom.',
  areasOfStudy: [
    'Object-Oriented Programming',
    'Software Engineering',
    'Databases & Query Optimization',
    'Web Development',
    'Backend Development',
    'Software Systems & Architecture',
    'DevOps & Deployment',
  ],
  approachNote:
    'University gives me the foundation. Building gives me the context. Real projects force me to understand why the concepts matter.',
};

export const MILESTONES: MilestoneEntry[] = [
  {
    title: '57 / 60 Academic Achievement',
    organization: 'COG High School',
    year: '2023',
    category: 'ACADEMIC',
    description: 'High academic performance score achieved at COG High School Software Development department.',
  },
  {
    title: 'Head Boy Leadership',
    organization: 'COG High School',
    year: '2022–2023',
    category: 'LEADERSHIP',
    description: 'Served as Head Boy, guiding student initiatives and developing leadership and communication skills.',
  },
  {
    title: 'Best Performer Recognition',
    organization: 'COG High School',
    year: 'December 2022',
    category: 'RECOGNITION',
    description: 'Recognized as the overall best performer of the first semester at COG High School.',
  },
  {
    title: 'DNS Technical Workshop',
    organization: 'RICTA × ICANN',
    year: '2024',
    category: 'WORKSHOP',
    description: 'Participated in a DNS-focused technical workshop, expanding my understanding of internet infrastructure.',
  },
  {
    title: 'Color Energies Coaching Workshop',
    organization: 'The Gym',
    year: '2025',
    category: 'WORKSHOP',
    description: 'Professional development focused on communication, team dynamics, and developer coaching.',
  },
  {
    title: 'GKS Document Screening Passed',
    organization: 'Global Korea Scholarship',
    year: '2024',
    category: 'SCHOLARSHIP',
    description: 'Reached the GATE interview stage during the Global Korea Scholarship process for Computer Engineering.',
  },
];

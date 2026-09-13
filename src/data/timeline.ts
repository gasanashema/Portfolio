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
    year: '2022',
    tag: 'FOUNDATIONS',
    title: 'Started Building',
    text: 'My early development journey began with software development, learning how applications are structured and how ideas become working code.',
    iconName: 'Code2',
    status: 'HISTORICAL',
    milestones: ['Software development fundamentals', 'First working applications', 'Core programming logic'],
  },
  {
    year: '2023',
    tag: 'MILESTONE',
    title: 'First Real-World Experience',
    text: 'Moved from learning software development to applying it in real-world environments. School project placed 2nd among 10+ teams, leading to my first junior development opportunity.',
    iconName: 'Trophy',
    status: 'HISTORICAL',
    milestones: ['Placed 2nd among 10+ competitive teams', 'Junior developer opportunity', 'Building for actual users'],
  },
  {
    year: '2024',
    tag: 'FULL-STACK',
    title: 'Expanding Full-Stack',
    text: 'Continued moving beyond individual pieces of code into complete applications — frontend, backend, databases, APIs, authentication, and deployment.',
    iconName: 'Layers',
    status: 'HISTORICAL',
    milestones: ['Full-stack web applications', 'REST API design & JWT auth', 'PostgreSQL & MongoDB integrations'],
  },
  {
    year: '2025',
    tag: 'DEVOPS',
    title: 'Beyond Application Development',
    text: 'Focus expanded into DevOps and infrastructure. Docker, Kubernetes, CI/CD pipelines, Terraform, Ansible, Nginx, and cloud technologies became part of my journey.',
    iconName: 'Server',
    status: 'HISTORICAL',
    milestones: ['First GitLab CI/CD pipeline running', 'Docker containerization', 'Kubernetes & IaC exploration'],
  },
  {
    year: '2026',
    tag: 'CURRENT NODE',
    title: 'Systems Thinking',
    text: 'Increasingly interested in backend architecture, software systems, infrastructure, cloud, scalability, and understanding what happens beyond the application itself.',
    iconName: 'Cpu',
    status: 'CURRENT',
    milestones: ['Backend architecture design', 'Infrastructure automation', 'Cloud deployments on AWS'],
  },
  {
    year: 'NEXT',
    tag: 'FUTURE DIRECTION',
    title: 'Build Bigger Things',
    text: 'The goal is simple: Keep building. Keep learning. Keep going deeper. Transforming ideas into reliable software products across Rwanda and Africa.',
    iconName: 'Rocket',
    status: 'DIRECTION',
    milestones: ['Distributed systems & architecture', 'Impactful digital transformation in Rwanda', 'Automated cloud infrastructure'],
  },
];

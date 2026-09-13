/**
 * Technology & Capability Matrix
 * Comprehensive tech stack for Shema Philbert Gasana
 */

export interface TechItem {
  name: string;
  category: string;
  status: 'REGULAR USE' | 'WORKED WITH' | 'EXPLORING';
  note?: string;
}

export interface TechGroup {
  title: string;
  iconName: string;
  description: string;
  items: TechItem[];
}

export const TECH_GROUPS: TechGroup[] = [
  {
    title: 'Languages',
    iconName: 'Code2',
    description: 'Foundational programming languages used across full-stack systems and backend architectures.',
    items: [
      { name: 'JavaScript', category: 'Languages', status: 'REGULAR USE', note: 'Asynchronous web & Node.js logic' },
      { name: 'TypeScript', category: 'Languages', status: 'REGULAR USE', note: 'Strict typing for enterprise applications' },
      { name: 'Java', category: 'Languages', status: 'REGULAR USE', note: 'OOP foundation & Spring Boot' },
      { name: 'PHP', category: 'Languages', status: 'WORKED WITH', note: 'Laravel & web applications' },
      { name: 'SQL', category: 'Languages', status: 'REGULAR USE', note: 'Relational data modeling & queries' },
      { name: 'HTML & CSS', category: 'Languages', status: 'REGULAR USE', note: 'Semantic web & modern layouts' },
    ],
  },
  {
    title: 'Frontend Frameworks',
    iconName: 'Eye',
    description: 'Modern component libraries and frameworks for building responsive user interfaces.',
    items: [
      { name: 'React', category: 'Frontend', status: 'REGULAR USE', note: 'Component architecture & state management' },
      { name: 'Next.js', category: 'Frontend', status: 'REGULAR USE', note: 'Full-stack SSR & React framework' },
      { name: 'Vite', category: 'Frontend', status: 'REGULAR USE', note: 'Lightning fast frontend bundler' },
      { name: 'Tailwind CSS', category: 'Frontend', status: 'REGULAR USE', note: 'Utility-first CSS framework' },
    ],
  },
  {
    title: 'Backend Systems',
    iconName: 'Server',
    description: 'Server-side frameworks, API architectures, authentication, and business logic.',
    items: [
      { name: 'Node.js', category: 'Backend', status: 'REGULAR USE', note: 'High-throughput event-driven runtime' },
      { name: 'Express.js', category: 'Backend', status: 'REGULAR USE', note: 'RESTful API endpoints & middleware' },
      { name: 'NestJS', category: 'Backend', status: 'WORKED WITH', note: 'Modular TypeScript server framework' },
      { name: 'Spring Boot', category: 'Backend', status: 'EXPLORING', note: 'Enterprise Java microservices' },
      { name: 'Django REST Framework', category: 'Backend', status: 'WORKED WITH', note: 'Python web APIs & authentication' },
    ],
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    description: 'Relational databases, document stores, and cloud database instances.',
    items: [
      { name: 'PostgreSQL', category: 'Databases', status: 'REGULAR USE', note: 'Relational database management' },
      { name: 'MySQL', category: 'Databases', status: 'REGULAR USE', note: 'Relational data persistence' },
      { name: 'MongoDB', category: 'Databases', status: 'WORKED WITH', note: 'Document-oriented database' },
      { name: 'MongoDB Atlas', category: 'Databases', status: 'WORKED WITH', note: 'Cloud database platform' },
      { name: 'Mongoose', category: 'Databases', status: 'WORKED WITH', note: 'MongoDB object modeling for Node.js' },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    iconName: 'Layers',
    description: 'Containerization, CI/CD pipelines, orchestration, IaC, and cloud deployment.',
    items: [
      { name: 'Docker & Docker Compose', category: 'DevOps', status: 'REGULAR USE', note: 'Containerization & multi-container apps' },
      { name: 'Kubernetes & kubectl', category: 'DevOps', status: 'EXPLORING', note: 'Container orchestration & management' },
      { name: 'Terraform', category: 'DevOps', status: 'EXPLORING', note: 'Infrastructure as Code (IaC)' },
      { name: 'Ansible', category: 'DevOps', status: 'EXPLORING', note: 'Configuration management & automation' },
      { name: 'Nginx', category: 'DevOps', status: 'REGULAR USE', note: 'Reverse proxy & web server' },
      { name: 'GitLab CI/CD & Argo CD', category: 'DevOps', status: 'REGULAR USE', note: 'Automated pipelines & GitOps' },
      { name: 'AWS EC2 & S3', category: 'Cloud', status: 'WORKED WITH', note: 'Cloud virtual servers & object storage' },
    ],
  },
  {
    title: 'Developer Tools & Ecosystem',
    iconName: 'Cpu',
    description: 'Version control, IDEs, local environments, and extended technologies.',
    items: [
      { name: 'Git, GitHub & GitLab', category: 'Tools', status: 'REGULAR USE', note: 'Version control & collaboration' },
      { name: 'VS Code & IntelliJ IDEA', category: 'Tools', status: 'REGULAR USE', note: 'Primary development environments' },
      { name: 'VirtualBox & XAMPP', category: 'Tools', status: 'WORKED WITH', note: 'Virtualization & local development' },
      { name: 'Laravel, Livewire & Filament', category: 'Frameworks', status: 'WORKED WITH', note: 'PHP full-stack ecosystem' },
      { name: 'Socket.IO, JWT & Passport', category: 'Protocols', status: 'WORKED WITH', note: 'Real-time & authentication' },
      { name: 'JPA, Maven & Supabase', category: 'Ecosystem', status: 'WORKED WITH', note: 'Persistence & backend services' },
    ],
  },
];

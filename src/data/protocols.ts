/**
 * Beyond The Code & Systems Pipeline
 * DevOps & Architectural Protocols for Shema Philbert Gasana
 */

export const PROTOCOL_CATEGORIES = ['All', 'Full-Stack', 'DevOps & Infra', 'Backend & Cloud'] as const;
export type ProtocolCategory = (typeof PROTOCOL_CATEGORIES)[number];

export interface Protocol {
  id: string;
  category: ProtocolCategory;
  title: string;
  description: string;
  iconName: string;
  iconColor: string;
  purpose: string;
  tags: string[];
  relatedProjectId?: string;
}

export const PROTOCOLS: Protocol[] = [
  {
    id: 'PIPE-01',
    category: 'DevOps & Infra',
    title: 'GitLab CI/CD & Argo CD',
    description:
      'Writing software is only part of the job. Automating continuous integration and continuous deployment pipelines that test, build, and deploy software reliably after git push.',
    iconName: 'Zap',
    iconColor: '#ff6b2c',
    purpose: 'Automating software delivery beyond the initial code commit.',
    tags: ['GitLab CI/CD', 'Argo CD', 'GitOps', 'Automation'],
    relatedProjectId: 'bulk-email-app',
  },
  {
    id: 'PIPE-02',
    category: 'DevOps & Infra',
    title: 'Docker & Containerization',
    description:
      'Packaging applications, microservices, and databases into isolated, consistent container environments for predictable development and production deployment.',
    iconName: 'Layers',
    iconColor: '#38bdf8',
    purpose: 'Ensuring environment consistency from local machine to cloud.',
    tags: ['Docker', 'Docker Compose', 'Docker Hub', 'Containers'],
    relatedProjectId: 'site-track',
  },
  {
    id: 'PIPE-03',
    category: 'DevOps & Infra',
    title: 'Kubernetes Orchestration',
    description:
      'Exploring container cluster management, ingress routing, workload scaling, and declarative k8s manifests using kubectl, Kustomize, and Nginx.',
    iconName: 'Server',
    iconColor: '#818cf8',
    purpose: 'Managing scalable containerized workloads and cluster services.',
    tags: ['Kubernetes', 'kubectl', 'Kustomize', 'Ingress', 'Nginx'],
    relatedProjectId: 'outbreak-intelligence',
  },
  {
    id: 'PIPE-04',
    category: 'DevOps & Infra',
    title: 'Infrastructure as Code (IaC)',
    description:
      'Automating infrastructure provisioning and server configuration using Terraform and Ansible for cloud resources and VM instances.',
    iconName: 'Cpu',
    iconColor: '#4ade80',
    purpose: 'Replacing manual cloud setup with version-controlled infrastructure scripts.',
    tags: ['Terraform', 'Ansible', 'AWS EC2', 'AWS S3'],
  },
  {
    id: 'PIPE-05',
    category: 'Backend & Cloud',
    title: 'Backend Systems & REST APIs',
    description:
      'Designing structured REST APIs, relational database schemas, authentication routines with JWT/Passport, and robust server-side business logic.',
    iconName: 'Database',
    iconColor: '#facc15',
    purpose: 'Building reliable server-side architecture that powers frontend products.',
    tags: ['Node.js', 'Express', 'Spring Boot', 'Django REST', 'PostgreSQL'],
    relatedProjectId: 'health-sphere',
  },
  {
    id: 'PIPE-06',
    category: 'Full-Stack',
    title: 'Product Engineering',
    description:
      'Taking product ideas from initial problem definition to responsive UI implementation, database integration, and cloud hosting.',
    iconName: 'Globe',
    iconColor: '#f43f5e',
    purpose: 'Turning practical concepts into usable software products.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    relatedProjectId: 'hotel-management-system',
  },
];

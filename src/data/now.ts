/**
 * Real-time "WHAT'S NEXT & CURRENT FOCUS" Status Data
 * Shema Philbert Gasana | Software Engineer
 */

export interface NowStatus {
  status: 'ACTIVE NODE' | 'BUILDING' | 'RESEARCHING';
  location: string;
  timezone: string;
  lastUpdated: string;
  currentFocus: {
    building: {
      title: string;
      description: string;
      badge: string;
    };
    exploring: {
      title: string;
      description: string;
      badge: string;
    };
    learning: {
      title: string;
      description: string;
      badge: string;
    };
    documenting: {
      title: string;
      description: string;
      badge: string;
    };
  };
  metrics: {
    label: string;
    value: string;
    status: 'optimal' | 'active' | 'live';
  }[];
}

export const NOW_DATA: NowStatus = {
  status: 'ACTIVE NODE',
  location: 'Kigali, Rwanda',
  timezone: 'Africa/Kigali (CAT, UTC+2)',
  lastUpdated: '2026',
  currentFocus: {
    building: {
      title: 'Full-Stack Applications & Backend Services',
      description:
        'Building scalable web applications, REST APIs, and database schemas that connect business logic with clean frontend user experiences.',
      badge: 'FULL-STACK',
    },
    exploring: {
      title: 'DevOps, Containers & Cloud Infrastructure',
      description:
        'Moving deeper into Docker containerization, Kubernetes orchestration, GitLab CI/CD pipelines, Terraform, and AWS cloud infrastructure.',
      badge: 'DEVOPS',
    },
    learning: {
      title: 'Backend Architecture & Distributed Systems',
      description:
        'Deepening mastery of Spring Boot, NestJS, microservice architectures, and automated infrastructure management.',
      badge: 'SYSTEMS',
    },
    documenting: {
      title: 'Developer Coaching & Knowledge Sharing',
      description:
        'Coaching emerging developers at The Gym, breaking down complex technical concepts, and sharing engineering observations.',
      badge: 'COACHING',
    },
  },
  metrics: [
    { label: 'NODE STATUS', value: 'OPERATIONAL', status: 'optimal' },
    { label: 'ROLE', value: 'SOFTWARE ENGINEER', status: 'live' },
    { label: 'STACK', value: 'FULL-STACK + DEVOPS', status: 'active' },
    { label: 'LOCATION', value: 'KIGALI, RWANDA', status: 'optimal' },
  ],
};

/**
 * Engineering Notes, Library & Personal Archive
 * Shema Philbert Gasana | Software Engineer
 */

export interface DocArticle {
  id: string;
  slug: string;
  title: string;
  category: 'DevOps & Systems' | 'Engineering Journey' | 'Philosophy' | 'Personal Archive';
  date: string;
  lastUpdated: string;
  readTime: string;
  status: 'PUBLISHED' | 'ACTIVE LOG' | 'CORE ESSAY';
  summary: string;
  keyTakeaways: string[];
  content: {
    sectionTitle: string;
    body: string;
    codeSnippet?: string;
  }[];
}

export const DOCUMENTATION_ARTICLES: DocArticle[] = [
  {
    id: 'doc-01',
    slug: 'beyond-the-code-gitlab-cicd',
    title: 'There Was Another World After "git push": Building My First CI/CD Pipeline',
    category: 'DevOps & Systems',
    date: '2025-01-10',
    lastUpdated: '2026-02-01',
    readTime: '5 min read',
    status: 'CORE ESSAY',
    summary:
      'A reflection on transitioning from writing standalone web applications into understanding the complete deployment journey — Git, CI/CD, Docker, Kubernetes, and cloud infrastructure.',
    keyTakeaways: [
      'Writing the application is only the first phase of software engineering; reliable delivery happens after git push.',
      'Containerizing with Docker eliminates environment mismatches between local machines and production servers.',
      'Automated pipeline testing and deployment turn software releases into predictable, repeatable processes.',
    ],
    content: [
      {
        sectionTitle: 'A Small Milestone That Changed Everything',
        body:
          'One of the key moments in my journey was getting my first GitLab CI/CD pipeline running. It was a small pipeline, but it completely changed how I thought about software. Writing the application was no longer the end of the road.',
      },
      {
        sectionTitle: 'The Infrastructure Pipeline Flow',
        body:
          'Software evolves along a continuous pipeline: CODE → GIT → CI/CD → DOCKER → KUBERNETES → INFRASTRUCTURE → CLOUD. Each stage solves a specific challenge in stability, scalability, and automated verification.',
        codeSnippet: `# Example GitLab CI/CD Pipeline Stage
stages:
  - build
  - test
  - deploy

build_image:
  stage: build
  script:
    - docker build -t registry.gitlab.com/shemaphilbert/app:latest .
    - docker push registry.gitlab.com/shemaphilbert/app:latest`,
      },
      {
        sectionTitle: 'Systems Thinking over Pure Syntax',
        body:
          'Knowing syntax isn\'t enough. As software engineers, understanding what happens underneath — containers, web servers, routing, and cloud infrastructure — allows us to build truly resilient products.',
      },
    ],
  },
  {
    id: 'doc-02',
    slug: 'how-i-think-about-software',
    title: 'How I Think About Software: 6 Guiding Principles',
    category: 'Philosophy',
    date: '2024-12-05',
    lastUpdated: '2026-01-15',
    readTime: '4 min read',
    status: 'PUBLISHED',
    summary:
      'My core engineering philosophy: building before overthinking, understanding systems, continuous learning, solving real problems, sharing knowledge, and keeping things simple.',
    keyTakeaways: [
      'Ideas become clearer when you start building rather than over-analyzing abstract concepts.',
      'A technically impressive system is useless if it doesn\'t solve the right real-world problem.',
      'Teaching and coaching force you to understand software concepts at a much deeper level.',
    ],
    content: [
      {
        sectionTitle: '01 — Build Before You Overthink & 02 — Understand The System',
        body:
          'Ideas become clearer when you start building. At the same time, knowing syntax isn\'t enough — aim to understand what is happening underneath the abstraction layer.',
      },
      {
        sectionTitle: '03 — Keep Learning & 04 — Solve Real Problems',
        body:
          'Technology changes quickly; an engineer who stops learning eventually stops growing. Always prioritize technology that solves real problems in healthcare, education, or local communities over hype.',
      },
      {
        sectionTitle: '05 — Share What You Learn & 06 — Keep Things Simple',
        body:
          'Teaching forces deep comprehension. This is why coaching trainees at The Gym has been invaluable. Finally, complexity should always have a reason — if something can be simpler, it should be.',
      },
    ],
  },
  {
    id: 'doc-03',
    slug: 'building-technology-in-rwanda',
    title: 'Why I Build: Context-Aware Technology for Rwanda & Africa',
    category: 'Engineering Journey',
    date: '2024-09-18',
    lastUpdated: '2025-11-20',
    readTime: '6 min read',
    status: 'CORE ESSAY',
    summary:
      'Why technology becomes meaningful when it solves problems beyond the screen — focusing on healthcare, education, public services, transportation, and youth empowerment in Rwanda.',
    keyTakeaways: [
      'Digital products must fit the exact operational and social context where they are deployed.',
      'Data-driven platforms can dramatically improve appointment compliance and disease monitoring in regional healthcare.',
      'Empowering young people with software development skills creates lasting community opportunities.',
    ],
    content: [
      {
        sectionTitle: 'Technology Beyond the Screen',
        body:
          'Building software is most fulfilling when it directly impacts real-world challenges. In Rwanda and across Africa, software has immense potential to streamline healthcare operations, public service access, and regional transportation.',
      },
      {
        sectionTitle: 'Real-World Explorations',
        body:
          'Through projects like Health Sphere, Outbreak Intelligence, and Wedding Plan Management System, I explore how localized software engineering can replace fragmented manual processes with reliable digital workflows.',
      },
    ],
  },
];

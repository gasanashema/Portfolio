/**
 * Selected Work & Projects
 * Product & Systems Registry for Shema Philbert Gasana
 */

export interface Project {
  id: string;
  code: string; // e.g. "PRJ-01"
  title: string;
  category: 'Full-Stack' | 'Systems & Backend' | 'DevOps & Platform' | 'Health & Data' | 'Product Concepts';
  status: 'Built & Deployed' | 'Project' | 'Development' | 'Concept';
  year: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'bulk-email-app',
    code: 'PRJ-01',
    title: 'Bulk Email App',
    category: 'Full-Stack',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'Personalized bulk communication workflow without bloat',
    description:
      'A browser-based application for sending personalized bulk emails from a CSV file. Supports personalized recipients, custom signatures, footers, calls-to-action, and structured email content.',
    problem:
      'Traditional bulk mailing solutions are often overly complex, expensive, or store unnecessary recipient data on third-party servers.',
    solution:
      'Engineered a lightweight web interface and backend using Node.js and Gmail SMTP that processes CSV recipient data on-the-fly with zero persistent user storage.',
    techStack: ['React', 'Node.js', 'Express.js', 'Gmail SMTP', 'CSV'],
    featured: true,
    highlights: [
      'Personalized recipient tag injection',
      'Custom email signature and footer support',
      'Lightweight workflow with zero storage overhead',
    ],
  },
  {
    id: 'site-track',
    code: 'PRJ-02',
    title: 'Site Track',
    category: 'Systems & Backend',
    status: 'Project',
    year: '2024',
    tagline: 'Activity monitoring and project organization platform',
    description:
      'A software platform focused on improving the way projects, activities, and progress can be organized, monitored, and analyzed in real-time.',
    problem:
      'Project management in complex environments often suffers from fragmented activity tracking and lack of clear progress visibility.',
    solution:
      'Built a centralized tracking system structured around clear activity pipelines, milestone tracking, and intuitive status dashboards.',
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    featured: true,
    highlights: [
      'Centralized project milestone monitoring',
      'Structured activity logging and audit trails',
      'Clear digital workflows for teams',
    ],
  },
  {
    id: 'hotel-management-system',
    code: 'PRJ-03',
    title: 'Hotel Management System',
    category: 'Full-Stack',
    status: 'Project',
    year: '2024',
    tagline: 'Comprehensive operational platform for hospitality businesses',
    description:
      'A management platform designed around the operational needs of hotels. Brings reservations, room management, guest profiles, services, and daily operations into one digital workflow.',
    problem:
      'Hospitality operations frequently depend on disconnected tools for front desk, reservations, and room maintenance.',
    solution:
      'Synthesized a unified management portal connecting guest bookings, room availability, service requests, and staff roles into an intuitive dashboard.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'React', 'Tailwind CSS'],
    featured: true,
    highlights: [
      'Unified booking and room management pipeline',
      'Guest relationship and service tracking',
      'Role-based access for operational staff',
    ],
  },
  {
    id: 'health-sphere',
    code: 'PRJ-04',
    title: 'Health Sphere',
    category: 'Health & Data',
    status: 'Development',
    year: '2024–2025',
    tagline: 'Predictive data platform for healthcare appointment compliance',
    description:
      'A healthcare-oriented system exploring how data can help healthcare providers identify patients who may be likely to miss appointments, improving operational decisions in clinics.',
    problem:
      'High rates of missed medical appointments disrupt healthcare scheduling and lead to underutilized clinical resources.',
    solution:
      'Constructed a REST API backend with Django REST Framework and MongoDB Atlas featuring JWT authentication and patient risk factor analytics.',
    techStack: ['Django REST Framework', 'MongoDB Atlas', 'JWT', 'Python', 'React'],
    featured: true,
    highlights: [
      'Secure healthcare staff authentication & JWT management',
      'Patient history and appointment risk tracking',
      'Data-driven insights to improve clinical attendance',
    ],
  },
  {
    id: 'outbreak-intelligence',
    code: 'PRJ-05',
    title: 'Outbreak Intelligence',
    category: 'Health & Data',
    status: 'Concept',
    year: '2025',
    tagline: 'Rwanda-focused public health disease monitoring concept',
    description:
      'A concept for monitoring disease and outbreak patterns using data collected from healthcare facilities across Rwanda. Analyzes emerging hospital data to provide early risk indicators.',
    problem:
      'Manual disease outbreak tracking leads to delayed public health responses during early transmission phases.',
    solution:
      'Designed an early warning dashboard architecture combining daily hospital reporting pipelines with analytics to detect disease patterns earlier.',
    techStack: ['Python', 'PostgreSQL', 'Data Analytics', 'Next.js'],
    featured: true,
    highlights: [
      'Daily hospital and disease data aggregation concept',
      'Pattern identification dashboard for health authorities',
      'Vision for ML integration in regional public health',
    ],
  },
  {
    id: 'wedding-plan-management-system',
    code: 'PRJ-06',
    title: 'Wedding Plan Management System',
    category: 'Full-Stack',
    status: 'Development',
    year: '2024',
    tagline: 'Event management platform tailored for Rwandan wedding planning',
    description:
      'A platform designed around the planning and organization of weddings in Rwanda. Explores separate experiences for couples, workflows, budgeting, vendors, and new-home templates.',
    problem:
      'Traditional event planning in Rwanda involves fragmented communications across spreadsheets, messages, and manual budgeting.',
    solution:
      'Engineered an all-in-one digital workspace with dedicated portals for couples, event planners, budget tracking, and vendor coordination.',
    techStack: ['PHP', 'Laravel', 'Livewire', 'Tailwind CSS', 'MySQL'],
    featured: false,
    highlights: [
      'Customized workflows for Rwandan wedding traditions',
      'Budget allocation and expenditure tracking engine',
      'Vendor management and new-home planning templates',
    ],
  },
  {
    id: 'car-sharing',
    code: 'PRJ-07',
    title: 'Car Sharing',
    category: 'Product Concepts',
    status: 'Concept',
    year: '2024',
    tagline: 'Local mobility and transportation coordination platform',
    description:
      'A mobility platform concept exploring how people can share rides and coordinate transportation in Kigali and regional urban contexts.',
    problem:
      'Urban commuting and intercity travel often suffer from high transit costs and inefficient vehicle seat utilization.',
    solution:
      'Designed a ride-matching architecture connecting commuters with verified drivers while addressing local payment and routing dynamics.',
    techStack: ['Node.js', 'React Native', 'MongoDB', 'Express.js'],
    featured: false,
    highlights: [
      'Commuter-to-driver route matching concept',
      'Focus on local transportation challenges in Rwanda',
      'Safety and verified user identity framework',
    ],
  },
  {
    id: 'e-and-i-travel',
    code: 'PRJ-08',
    title: 'E&I Travel',
    category: 'Full-Stack',
    status: 'Project',
    year: '2024',
    tagline: 'Travel & destination discovery digital product',
    description:
      'A travel-oriented digital product exploring how travel experiences, destinations, and bookings can be presented and managed through a modern web platform.',
    problem:
      'Travel agency websites often struggle to balance rich visual exploration with fast booking and service management.',
    solution:
      'Created a dynamic travel web application featuring destination catalogs, itinerary previews, and responsive booking flows.',
    techStack: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    featured: false,
    highlights: [
      'Immersive destination showcase and itinerary previews',
      'Seamless booking request workflow',
      'High-performance responsive design',
    ],
  },
  {
    id: 'african-bee-co',
    code: 'PRJ-09',
    title: 'African Bee Co',
    category: 'Product Concepts',
    status: 'Concept',
    year: '2024',
    tagline: 'Digital business concept for African apiculture products',
    description:
      'A digital commerce concept built around African bee products and opportunities in local honey production, branding, and digital distribution.',
    problem:
      'Local agricultural producers face challenges reaching direct consumer markets with modern digital branding.',
    solution:
      'Designed a product story and e-commerce platform concept showcasing sustainable bee farming and authentic African honey products.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Stripe'],
    featured: false,
    highlights: [
      'Intersection of tech, local agriculture, and branding',
      'Modern digital story for traditional produce',
      'Direct-to-consumer e-commerce concept',
    ],
  },
  {
    id: 'nziza-view-hotel',
    code: 'PRJ-10',
    title: 'Nziza View Hotel',
    category: 'Full-Stack',
    status: 'Project',
    year: '2024',
    tagline: 'Hospitality brand experience and digital presence',
    description:
      'A hospitality digital project exploring how a hotel can present its unique character, rooms, dining services, and guest experience online.',
    problem:
      'Standard template websites fail to capture the atmosphere and distinct identity of boutique hospitality properties.',
    solution:
      'Crafted a tailored digital presence with smooth transitions, interactive room previews, and direct inquiry integration.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    featured: false,
    highlights: [
      'Custom visual story reflecting property character',
      'Interactive room and amenity showcase',
      'Direct reservation inquiry integration',
    ],
  },
];

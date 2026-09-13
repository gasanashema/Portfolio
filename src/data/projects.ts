/**
 * Selected Work & Projects
 * Official Project Registry for Philbert Shema Gasana (From CV)
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
    id: 'ai-vital',
    code: 'PRJ-01',
    title: 'AI Vital',
    category: 'Health & Data',
    status: 'Built & Deployed',
    year: '2024–2025',
    tagline: 'National AI-powered public health surveillance platform for early disease outbreak detection',
    description:
      'A national-scale platform for early detection and monitoring of disease outbreaks, built for Rwanda\'s RBC and Ministry of Health across a 7-phase, 18-module rollout. Includes predictive models for outbreak trend forecasting, case risk classification, and anomaly detection in public health data.',
    problem:
      'Manual disease outbreak tracking leads to delayed public health responses during early transmission phases.',
    solution:
      'Engineered a national-scale public health surveillance platform combining daily reporting pipelines, outbreak trend forecasting, and automated anomaly detection.',
    techStack: ['Python', 'Django', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/gasanashema',
    featured: true,
    highlights: [
      'Built for Rwanda RBC and Ministry of Health (7-phase rollout)',
      'Outbreak trend forecasting and anomaly detection',
      'Case risk classification algorithms',
    ],
  },
  {
    id: 'sitetrack',
    code: 'PRJ-02',
    title: 'SiteTrack',
    category: 'Systems & Backend',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'Distributed construction project management system tracking multi-site materials and labor',
    description:
      'A distributed desktop platform for managing construction projects, tracking material stock movements and labor payments across multiple sites.',
    problem:
      'Multi-site construction projects suffer from fragmented inventory tracking, delayed payment logging, and lack of real-time material audit trails.',
    solution:
      'Constructed a Java RMI desktop platform connecting multi-site material stock tracking, labor payments, and messaging queues.',
    techStack: ['Java', 'Swing', 'Java RMI', 'Hibernate', 'PostgreSQL', 'ActiveMQ', 'RabbitMQ'],
    githubUrl: 'https://github.com/gasanashema/SiteTrack-ConstructionProjectMS',
    featured: true,
    highlights: [
      'Multi-site construction material stock movements tracking',
      'Labor payment logging and audit trails',
      'Messaging integration with ActiveMQ & RabbitMQ',
    ],
  },
  {
    id: 'moni-share',
    code: 'PRJ-03',
    title: 'Moni-share',
    category: 'Full-Stack',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'Full-stack car sharing platform connecting drivers and riders with decoupled architecture',
    description:
      'A full-stack car sharing platform connecting drivers and riders, built as a team project with a decoupled backend and frontend.',
    problem:
      'Urban commuters face high transit costs and fragmented ride coordination.',
    solution:
      'Engineered a decoupled car sharing system connecting verified drivers and riders with real-time route matching and NestJS REST services.',
    techStack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
    githubUrl: 'https://github.com/gasanashema',
    featured: true,
    highlights: [
      'Decoupled NestJS backend and React frontend architecture',
      'Commuter-to-driver route coordination',
      'Secure user authentication and trip management',
    ],
  },
  {
    id: 'shop-management-system-bsms',
    code: 'PRJ-04',
    title: 'Shop Management System (BSMS)',
    category: 'Full-Stack',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'Boutique inventory ledger with daily sales reporting and debt management',
    description:
      'A boutique inventory ledger with daily sales reporting and debt management, supporting English and Kinyarwanda.',
    problem:
      'Small retail businesses lack multilingual inventory tools to track daily sales and member debt balances.',
    solution:
      'Built a lightweight inventory ledger supporting real-time sales reporting, customer debt tracking, and bilingual UI (English & Kinyarwanda).',
    techStack: ['PHP', 'Bootstrap', 'MySQL'],
    githubUrl: 'https://github.com/gasanashema/Shop-Management-System-BSMS-',
    featured: true,
    highlights: [
      'Bilingual interface (English & Kinyarwanda)',
      'Daily sales reporting and inventory ledger',
      'Customer debt balance management',
    ],
  },
  {
    id: 'saving-and-credits-ms',
    code: 'PRJ-05',
    title: 'Saving & Credits Management System',
    category: 'Systems & Backend',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'Microfinance and SACCO credit tracking system for managing member savings and loans',
    description:
      'A microfinance and SACCO credit tracking system for managing member savings, loans, repayments, and financial reports.',
    problem:
      'SACCOs and microfinance groups face manual record-keeping errors in member savings, loan interest, and repayment schedules.',
    solution:
      'Developed a robust Node.js backend calculating interest accrual, member savings balances, loan repayment tracking, and financial statements.',
    techStack: ['Node.js', 'Express.js', 'React', 'TypeScript', 'MySQL'],
    githubUrl: 'https://github.com/gasanashema/Saving-and-credits-MS',
    featured: false,
    highlights: [
      'SACCO member savings and credit ledger',
      'Loan interest calculation and repayment tracking',
      'Automated financial statement reporting',
    ],
  },
  {
    id: 'nziza-view-hotel',
    code: 'PRJ-06',
    title: 'Nziza View Hotel Booking System',
    category: 'Full-Stack',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'Hotel reservation and property management platform handling bookings and room availability',
    description:
      'A hotel reservation and property management platform handling bookings, room availability, and guest records.',
    problem:
      'Boutique hotels struggle with manual room booking management and guest history logging.',
    solution:
      'Built a Laravel & Livewire management system for real-time room availability, online reservation requests, and guest records.',
    techStack: ['Laravel', 'Livewire', 'MySQL'],
    githubUrl: 'https://github.com/gasanashema/Nziza-View-Hotel',
    featured: false,
    highlights: [
      'Real-time room availability and reservation workflow',
      'Guest profile and history logging',
      'Built with Laravel, Livewire & MySQL',
    ],
  },
  {
    id: 'pick-and-go-ms',
    code: 'PRJ-07',
    title: 'Pick and Go Management System',
    category: 'Full-Stack',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'E-commerce storefront with customer management, inventory tracking, and payment processing',
    description:
      'An e-commerce storefront with customer management, inventory tracking, and payment processing.',
    problem:
      'Local e-commerce merchants need integrated storefronts with automated payment verification.',
    solution:
      'Created a responsive e-commerce web application integrated with PayPal Sandbox payment gateway and live inventory tracking.',
    techStack: ['PHP', 'Bootstrap', 'jQuery', 'PayPal Sandbox', 'MySQL'],
    githubUrl: 'https://github.com/gasanashema/Pick-and-Go-MS',
    featured: false,
    highlights: [
      'Customer order management and product catalog',
      'PayPal Sandbox payment integration',
      'Live inventory tracking pipeline',
    ],
  },
  {
    id: 'exam-hall-seating-management',
    code: 'PRJ-08',
    title: 'Exam Hall Seating Management System',
    category: 'Systems & Backend',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'Automated seating plan generator and hall allocation manager for academic institutions',
    description:
      'An automated seating plan generator and hall allocation manager for students, teachers, and admins.',
    problem:
      'Academic institutions waste hours manually arranging exam seating plans and preventing student seating conflicts.',
    solution:
      'Engineered an automated seating plan generation algorithm that distributes hall allocations for students and invigilators.',
    techStack: ['PHP', 'Bootstrap', 'MySQL'],
    githubUrl: 'https://github.com/gasanashema/Exam-Hall-Seating-management',
    featured: false,
    highlights: [
      'Automated exam seating plan generator',
      'Hall allocation algorithm preventing student seating conflict',
      'Admin, teacher, and student portals',
    ],
  },
  {
    id: 'patient-management-system',
    code: 'PRJ-09',
    title: 'Patient Management System',
    category: 'Health & Data',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'Healthcare management platform for patient registration, record tracking, and appointments',
    description:
      'A healthcare management platform for patient registration, record tracking, and appointment handling.',
    problem:
      'Clinical record keeping requires reliable desktop applications for offline patient registration and medical history tracking.',
    solution:
      'Built a Java Swing desktop application connected to MySQL for patient record management and appointment schedules.',
    techStack: ['Java', 'Swing', 'MySQL'],
    githubUrl: 'https://github.com/gasanashema/Patient-Management-System',
    featured: false,
    highlights: [
      'Patient registration and medical history ledger',
      'Appointment scheduling and clinical records',
      'Built with Java Swing & MySQL',
    ],
  },
  {
    id: 'student-registration-system',
    code: 'PRJ-10',
    title: 'Student Registration System',
    category: 'Systems & Backend',
    status: 'Built & Deployed',
    year: '2024',
    tagline: 'Academic registration platform for managing student records and course enrollment',
    description:
      'A student registration platform for managing student records, course enrollment, and academic information.',
    problem:
      'Educational institutions require structured student enrollment systems with course validation rules.',
    solution:
      'Developed a Java desktop registration system for student record management, course selection, and academic transcripts.',
    techStack: ['Java', 'Swing', 'MySQL'],
    githubUrl: 'https://github.com/gasanashema/StudentRegistrationSystem',
    featured: false,
    highlights: [
      'Student profile and course enrollment management',
      'Academic transcript and record tracking',
      'Built with Java Swing & MySQL',
    ],
  },
];

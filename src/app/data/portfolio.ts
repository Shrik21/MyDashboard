export const portfolioData = {
  personal: {
    name: 'Shreyansh Kumar',
    title: 'Senior Java Full Stack Developer',
    tagline: 'Architecting scalable microservices and AI-powered enterprise platforms.',
    email: 'shreyanshkind232@gmail.com',
    phone: '+91-9140455572',
    location: 'Noida, Uttar Pradesh, India',
    linkedin: 'linkedin.com/in/shreyansh-kumar-07062617b/',
    github: 'github.com/Shrik21',
    summary: 'Senior Java Full Stack Developer with 5+ years of experience architecting and delivering scalable microservices-based enterprise platforms using Java, Spring Boot, and cloud-native technologies. Proven track record in system design, high-throughput API development, and full-stack delivery with Angular across insurance, automation, and workflow domains, with hands-on experience building AI agents and MCP servers using the Claude API. Skilled in event-driven architecture (Kafka), caching (Redis), cloud integrations (AWS), and observability tooling. Consistently delivers clean, maintainable solutions in agile environments.',
    yoe: 5
  },
  experience: [
    {
      company: 'Agreeya Solutions',
      role: 'Senior Software Engineer',
      duration: 'Jul. 2025 – Present',
      location: 'Noida, India',
      highlights: [
        'Architected RESTful APIs with Spring Boot for enterprise workflow automation platform, significantly cutting manual processing time.',
        'Designed scalable MongoDB data models with indexing and aggregation pipelines, substantially reducing average query response time.',
        'Built Angular + PrimeNG components for workflow configuration dashboards, improving user task completion rate',
        'Built AI agents using the Claude API and a custom MCP server connecting Claude to internal APIs; used Claude Code to accelerate development, automating repetitive workflow tasks.',
        'Enforced SOLID principles and clean architecture across codebase; introduced centralized exception handling and structured logging, reducing production incident resolution time.',
        'Delivered all sprint features on time with zero critical defects in cross-functional agile collaboration with product, QA, and UI/UX teams.'
      ],
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Angular', 'Claude API', 'MCP']
    },
    {
      company: 'EXL Services',
      role: 'Senior Software Developer',
      duration: 'Jan. 2023 – Jul. 2025',
      location: 'Pune, India',
      highlights: [
        'Led system design and architecture for microservices-based insurance platform handling high daily transaction volumes; leveraged Spring Cloud API Gateway and Service Discovery for fault-tolerant, independently deployable services.',
        'Built event-driven data pipelines using Apache Kafka, decoupling insurance workflow services and improving system throughput significantly.',
        'Implemented Redis caching on high-frequency read endpoints, reducing database load and average API latency significantly.',
        'Achieved high unit test coverage with JUnit and Mockito; established Prometheus, Grafana, and ELK Stack observability pipeline, improving system uptime to near-perfect reliability.',
        'Integrated DocuSign eSignature API using Java SDK to automate insurance policy signing workflows, enabling fully digital customer onboarding and reducing manual document handling.',
        'Led legacy monolith-to-microservices migration, substantially cutting deployment time; earned Star Performer Award 2024 for delivery excellence.'
      ],
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Microservices', 'Redis', 'Docker', 'JUnit', 'Prometheus', 'ELK Stack']
    },
    {
      company: 'Infosys',
      role: 'System Engineer',
      duration: 'Mar. 2021 – Jan. 2023',
      location: 'Pune, India',
      highlights: [
        'Developed Java/Spring Boot backend modules for workflow automation, reducing processing time and eliminating several hours of manual work per week.',
        'Built Angular + PrimeNG UI components with REST API integration, improving end-user productivity.',
        'Delivered multiple major features across consecutive sprints with zero rollbacks; maintained full source code integrity via Git/SVN across a large engineering team.'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'Git']
    }
  ],
  projects: [
    {
      name: 'HuLoop',
      company: 'Agreeya Solutions',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MongoDB', 'Redis', 'Claude API', 'MCP'],
      description: 'AI-powered no-code automation platform.',
      highlights: [
        'Led development of AI-powered no-code automation platform, architecting Spring Boot APIs plus AI agents (Claude API) and a custom MCP server to automate workflow tasks.',
        'Designed MongoDB aggregation pipelines and Redis caching for high-frequency configs, improving data retrieval speed at scale.',
        'Built Angular + PrimeNG dashboards enabling workflow setup substantially faster than the legacy solution.'
      ]
    },
    {
      name: 'MedConnection',
      company: 'EXL Services',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Microservices', 'Angular', 'SQL Server', 'Docker', 'DocuSign'],
      description: 'Enterprise insurance platform handling high daily transaction volumes.',
      highlights: [
        'Architected backend for an enterprise insurance platform handling high daily transaction volumes; drove service decomposition and inter-service communication using Kafka event streams.',
        'Integrated DocuSign eSignature API to automate policy agreement signing workflows, eliminating manual paperwork and enabling end-to-end digital onboarding for insurance customers.',
        'Containerized services with Docker and deployed via Spring Cloud; improved system scalability and reduced MTTD via Prometheus + ELK Stack observability.',
        'Achieved high test coverage with JUnit and Mockito, cutting production defects significantly.'
      ]
    },
    {
      name: 'DWA (Data Workflow Assist)',
      company: 'Infosys',
      technologies: ['Java', 'Spring Boot', 'Angular', 'REST APIs'],
      description: 'Email-driven workflow automation system.',
      highlights: [
        'Designed email-driven workflow automation system with multiple Spring Boot services at near-perfect reliability, eliminating several hours of manual operations per week.',
        'Built Angular + PrimeNG dashboards with real-time workflow status visibility, reducing ops query resolution time significantly.'
      ]
    }
  ],
  skills: {
    backend: ['Core Java', 'Java 8+', 'Spring Boot', 'Spring Cloud', 'Hibernate', 'Spring Data JPA', 'REST APIs'],
    frontend: ['Angular', 'PrimeNG', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    databases: ['SQL Server', 'MySQL', 'MongoDB', 'Liquibase', 'Query Optimisation'],
    cloudDevOps: ['AWS (S3, SQS)', 'Docker', 'Git', 'SVN', 'JUnit', 'Mockito', 'Prometheus', 'Grafana', 'ELK Stack', 'Kibana'],
    architecture: ['Microservices', 'Event-Driven Architecture', 'API Gateway', 'SOLID Principles', 'Clean Architecture'],
    messaging: ['Apache Kafka', 'Redis'],
    aiTools: ['Claude API', 'MCP (Model Context Protocol)', 'AI Agent Design', 'Claude Code', 'Prompt Engineering'],
    methodologies: ['Agile', 'Scrum', 'Technical Leadership', 'Cross-functional Collaboration']
  },
  education: [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      institution: 'Gyan Ganga College of Technology',
      year: 'Jan. 2020',
      location: 'Jabalpur, MP',
      score: 'GPA: 8.63/10'
    },
    {
      degree: '12th Standard',
      institution: 'Aditya Birla Intermediate College',
      year: '2015',
      location: 'Renukoot, UP'
    }
  ],
  awards: [
    {
      title: 'Star Performer Award',
      issuer: 'EXL Services',
      year: '2024',
      description: 'Awarded for leading monolith-to-microservices migration, substantially reducing deployment time and improving platform reliability to near-perfect uptime. Recognized by management for delivery excellence, innovative problem-solving, and mentoring junior developers in agile practices.'
    }
  ]
};

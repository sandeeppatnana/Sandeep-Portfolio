/**
 * PORTFOLIO CONTENT
 * ------------------------------------------------------------------
 * This file is the single source of truth for all editable content
 * on the site. Update names, links, and copy here — components read
 * from this file and do not hard-code content.
 *
 * Every field marked "PLACEHOLDER" is a stand-in and should be
 * replaced with real information before publishing.
 * ------------------------------------------------------------------
 */

export const profile = {
  name: "Sandeep Patnana",
  title: "QA Engineer | API & Performance Testing | GenAI & LLM Testing | Project Coordination | Project Management",
  subtitle:
    "Quality Engineer and Project Coordinator focused on building reliable, user-centric software through functional, API, performance, mobile, and AI testing, while supporting effective project delivery and cross-functional collaboration.",
  location: "Hyderabad, India",
  email: "patnanasandeep4@gmail.com",
  github: "https://github.com/sandeeppatnana",
  linkedin: "https://www.linkedin.com/in/sandeep-patnana-554217227/",
  resumePdfPath: "https://drive.google.com/file/d/1oYagMvGi81uggj-64F8cj1w3mtHS7nWp/view?usp=drive_link",
};

export const verificationTags = [
  "Functional",
  "API",
  "Performance",
  "Mobile",
  "GenAI / LLM",
  "Project Coordination",
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Quality Engineering",
    skills: [
      "Functional Testing",
      "Regression Testing",
      "Requirement Analysis",
      "Test Case Design",
      "Defect Analysis",
      "UAT Coordination",
    ],
  },

  {
    title: "API & Data Validation",
    skills: [
      "API Testing",
      "FastAPI Testing",
      "Postman",
      "Swagger",
      "SQL",
      "PostgreSQL",
    ],
  },

  {
    title: "Performance & Mobile",
    skills: [
      "Load Testing",
      "Stress Testing",
      "Cross-browser Testing",
      "Mobile Testing",
      "Issue Triaging",
    ],
  },

  {
    title: "GenAI & LLM",
    skills: [
      "LLM Evaluation",
      "Prompt Testing",
      "RAG Testing",
      "AI Test Case Design",
      "AI Response Validation",
    ],
  },

  {
    title: "Project & Delivery",
    skills: [
      "Agile Delivery",
      "Project Coordination",
      "Requirement Coordination",
      "Task & Priority Tracking",
      "Stakeholder Coordination",
      "Release Coordination",
    ],
  },

  {
    title: "Tools",
    skills: [
      "Jira",
      "Confluence",
      "GitHub",
      "Excel",
      "Microsoft Teams",
    ],
  },
];

export const about = {
  paragraphs: [
    "I'm a QA Engineer and Project Coordinator who treats quality as an engineering discipline, not a final checkpoint — building it into requirements, APIs, user workflows, and release processes from the start.",

    "My core experience spans functional and regression testing, API validation, performance and load testing, and mobile QA. I combine structured test strategies with defect analysis and root-cause investigation to identify issues early and drive effective resolution.",

    "Alongside QA, I contribute to project coordination and Agile delivery by supporting sprint planning, backlog grooming, requirement clarification, task tracking, UAT coordination, release planning, and cross-functional communication between Product, Development, QA, and business stakeholders.",

    "I help teams maintain visibility across scope, priorities, dependencies, quality risks, and release readiness — ensuring that project execution stays aligned with business requirements, timelines, and quality expectations.",

    "My focus has also expanded into GenAI and LLM testing, including prompt and response evaluation for accuracy, relevance, consistency, hallucination, and safety, along with structured evaluation approaches for retrieval-augmented generation (RAG) systems.",
  ],

  focusAreas: [
    {
      label: "Functional & Regression Testing",
      detail:
        "End-to-end validation of critical workflows, business rules, and production releases",
    },
    {
      label: "API Testing",
      detail:
        "REST API validation, authentication, CRUD, negative testing, and data integrity",
    },
    {
      label: "Performance Testing",
      detail:
        "Load and stress testing, response time, throughput, and system behavior under load",
    },
    {
      label: "Mobile Testing",
      detail:
        "Functional, usability, compatibility, and cross-device validation",
    },
    {
      label: "GenAI / LLM Testing",
      detail:
        "Prompt evaluation, response quality, hallucination, consistency, relevance, and safety",
    },
    {
      label: "Project Coordination",
      detail:
        "Sprint planning, backlog grooming, task tracking, dependencies, risks, and release coordination",
    },
    {
      label: "Stakeholder Management",
      detail:
        "Cross-functional collaboration across Product, Development, QA, and business teams",
    },
    {
      label: "Defect Analysis & UAT",
      detail:
        "Root-cause analysis, defect lifecycle management, UAT coordination, and release sign-off",
    },
  ],
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  impact: string[];
  tools: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "QA Engineer & Project Coordinator",
    company: "Aurumi Tech Holdings Pvt. Ltd.",
    duration: "June 2024 – Present",

    summary:
      "QA Engineer and Project Coordinator responsible for end-to-end quality assurance, project coordination, UAT, defect management, and release readiness across 35+ enterprise web and mobile applications.",

    responsibilities: [
      "Led quality validation across 30+ applications, designing and executing 1500+ test cases across functional, regression, API, usability, and end-to-end workflows.",
      "Performed REST API testing on FastAPI services using Postman, validating authentication, CRUD operations, negative scenarios, response behavior, and data integrity.",
      "Managed the complete defect lifecycle in JIRA, including defect identification, severity assessment, prioritization, triage, retesting, closure, and root-cause analysis.",
      "Coordinated UAT activities with Product and business stakeholders, validating acceptance criteria, managing feedback, and supporting formal release sign-off.",
      "Served as a QA liaison between Product, Development, and business teams, clarifying requirements, scope, acceptance criteria, dependencies, and quality risks.",
      "Supported Agile/Scrum delivery through sprint planning, backlog grooming, task tracking, requirement clarification, and release coordination.",
      "Tracked project and QA progress, monitored dependencies and risks, and communicated quality status and release readiness to project leads and stakeholders.",
      "Performed cross-browser and cross-device validation across web and mobile platforms to ensure consistent product behavior and usability."
    ],

    impact: [
      "Increased test coverage by 30% through structured test strategies and comprehensive test-case design.",
      "Reduced post-release defects by 20% through stronger regression coverage and proactive quality validation.",
      "Resolved 400+ defects, including 100+ critical-severity issues, across 20+ enterprise applications.",
      "Reduced average defect turnaround time by 15% through structured triage, prioritization, root-cause analysis, and cross-functional collaboration.",
      "Improved release readiness through coordinated UAT, proactive quality-risk identification, and stakeholder sign-offs."
    ],

    tools: [
      "Dev Harmony",
      "Jira",
      "Postman",
      "SQL",
      "PostgreSQL",
      "Git",
      "GitHub"
    ],
  },
];
export type ProjectCategory =
  | "API Testing"
  | "Performance Testing"
  | "GenAI / LLM Testing"
  | "RAG Evaluation"
  | "Web/Mobile QA"
  | "Project & Delivery";

export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  tools: string[];
  testingAreas: string[];
  projectManagementAreas?: string[];
  githubUrl: string;
  liveUrl?: string;
  details: {
    overview: string;
    approach: string[];
    scope: string;
  };
};

export const projectCategories: ProjectCategory[] = [
  "API Testing",
  "Performance Testing",
  "GenAI / LLM Testing",
  "RAG Evaluation",
  "Web/Mobile QA",
  "Project & Delivery",
];

export const projects: Project[] = [
  {
    id: "proj-api",
    name: "API Test Suite — Authentication & CRUD Validation",
    category: "API Testing",
    description:
      "A structured API testing suite covering authentication, CRUD operations, negative scenarios, response validation, and backend data integrity for RESTful services.",

    tools: ["Postman", "REST API", "SQL", "PostgreSQL"],

    testingAreas: [
      "API validation",
      "Authentication & authorization",
      "CRUD operations",
      "Negative testing",
      "Response validation",
      "Data-integrity validation",
    ],

    githubUrl: "https://github.com/PLACEHOLDER-username/api-test-suite",

    details: {
      overview:
        "A reusable API testing project designed to validate critical REST API workflows and identify functional, validation, authentication, and data-integrity issues before release.",

      approach: [
        "Organized API test collections by resource, workflow, and authentication state",
        "Validated status codes, response structure, business rules, and error handling",
        "Covered positive, negative, boundary, and invalid-input scenarios",
        "Cross-checked API responses against persisted data using SQL queries",
      ],

      scope:
        "Covers authentication, CRUD workflows, negative scenarios, response validation, and database-level verification.",
    },
  },

  {
    id: "proj-perf",
    name: "Performance Testing — Load & Stress Analysis",
    category: "Performance Testing",
    description:
      "A performance testing project focused on understanding application behavior under increasing user load, with analysis of response time, throughput, and error rates.",

    tools: ["K6", "Grafana"],

    testingAreas: [
      "Load testing",
      "Stress testing",
      "Response-time analysis",
      "Throughput",
      "Error-rate analysis",
      "Concurrent-user behavior",
    ],

    githubUrl:
      "https://github.com/PLACEHOLDER-username/performance-testing-k6",

    details: {
      overview:
        "A K6-based performance testing project designed to evaluate application stability and responsiveness under realistic and increasing traffic conditions.",

      approach: [
        "Created scripted load scenarios using K6 to simulate concurrent users",
        "Designed gradual load and stress scenarios to identify performance bottlenecks",
        "Monitored response time, throughput, error rates, and system behavior",
        "Used Grafana dashboards to visualize and compare performance results",
      ],

      scope:
        "Includes baseline, load, and stress testing scenarios with configurable virtual users, duration, and performance thresholds.",
    },
  },

  {
    id: "proj-genai",
    name: "GenAI / LLM Response Evaluation Framework",
    category: "GenAI / LLM Testing",
    description:
      "A structured evaluation framework for testing LLM prompts and responses across accuracy, relevance, consistency, hallucination, and safety.",

    tools: ["Python", "LLM APIs", "Prompt Evaluation"],

    testingAreas: [
      "Prompt testing",
      "Response evaluation",
      "Accuracy",
      "Relevance",
      "Consistency",
      "Hallucination detection",
      "Safety evaluation",
    ],

    githubUrl:
      "https://github.com/PLACEHOLDER-username/genai-evaluation-framework",

    details: {
      overview:
        "A repeatable approach for evaluating the quality and reliability of generative AI responses across common functional and quality dimensions.",

      approach: [
        "Defined evaluation criteria for accuracy, relevance, consistency, and response quality",
        "Created structured prompt scenarios covering expected and unexpected user inputs",
        "Evaluated responses for hallucination, unsupported claims, and inconsistent behavior",
        "Designed regression-style evaluation scenarios for comparing model or prompt changes",
      ],

      scope:
        "Covers prompt-response evaluation, quality assessment, regression scenarios, hallucination checks, and safety-focused test cases.",
    },
  },

  {
    id: "proj-rag",
    name: "RAG Evaluation — Retrieval & Response Quality",
    category: "RAG Evaluation",
    description:
      "A structured evaluation approach for retrieval-augmented generation systems, focusing on retrieval quality, context relevance, groundedness, hallucination, and answer relevance.",

    tools: ["Python", "LLM APIs", "Vector Database"],

    testingAreas: [
      "Retrieval quality",
      "Context relevance",
      "Groundedness",
      "Hallucination detection",
      "Answer relevance",
      "Response consistency",
    ],

    githubUrl:
      "https://github.com/PLACEHOLDER-username/rag-evaluation",

    details: {
      overview:
        "An evaluation project focused on validating whether a RAG system retrieves useful context and generates responses that are relevant and grounded in the available knowledge.",

      approach: [
        "Created representative question sets covering common and edge-case retrieval scenarios",
        "Evaluated whether retrieved context was relevant to the user's query",
        "Checked generated responses against retrieved information for groundedness",
        "Identified unsupported claims and potential hallucinations",
        "Evaluated answer relevance independently from retrieval quality",
      ],

      scope:
        "Covers retrieval, context quality, groundedness, answer relevance, hallucination, and consistency across representative RAG scenarios.",
    },
  },

  {
    id: "proj-webmobile",
    name: "Web & Mobile Regression Suite",
    category: "Web/Mobile QA",
    description:
      "Functional and regression testing coverage across web and mobile applications, with emphasis on critical user journeys, usability, compatibility, and cross-device validation.",

    tools: [
      "Manual Testing",
      "Jira",
      "SQL",
      "Postman",
    ],

    testingAreas: [
      "Functional testing",
      "Regression testing",
      "End-to-end testing",
      "Usability testing",
      "Cross-browser validation",
      "Mobile validation",
    ],

    githubUrl:
      "https://github.com/PLACEHOLDER-username/web-mobile-qa",

    details: {
      overview:
        "A structured QA project demonstrating end-to-end functional and regression testing across web and mobile experiences.",

      approach: [
        "Maintained prioritized regression coverage around critical business workflows",
        "Designed functional and negative test scenarios based on requirements and acceptance criteria",
        "Validated user journeys across supported browsers and mobile devices",
        "Performed usability and compatibility checks to identify device-specific issues",
        "Documented defects with clear reproduction steps, expected behavior, and supporting evidence",
      ],

      scope:
        "Covers critical user journeys, functional and regression scenarios, usability validation, browser compatibility, and mobile device testing.",
    },
  },

  {
  id: "proj-delivery-coordination",
  name: "Project Delivery Coordination",
  category: "Project & Delivery",

  description:
    "Project delivery coordination focused on planning, task tracking, stakeholder communication, dependency management, risk identification, and keeping cross-functional work aligned toward delivery goals.",

  tools: [
    "Jira",
    "Confluence",
    "Microsoft Teams",
    "Excel",
  ],

  testingAreas: ["Project planning", "Task tracking", "Dependency management", "issue tracking", "Release coordination", "Stakeholder communication"],

  projectManagementAreas: [
    "Requirement coordination",
    "Task & priority tracking",
    "Sprint coordination",
    "Cross-functional coordination",
    "Stakeholder communication",
    "Dependency tracking",
    "Risk & issue management",
    "Status reporting",
    "Timeline tracking",
    "Release coordination",
  ],

  githubUrl:
    "https://github.com/PLACEHOLDER-username/project-delivery-coordination",

  details: {
    overview:
      "A project coordination portfolio project demonstrating the planning, tracking, communication, and follow-up activities required to keep cross-functional initiatives aligned and progressing toward delivery goals.",

    approach: [
      "Coordinated requirements, priorities, and deliverables across project stakeholders",
      "Tracked tasks, ownership, priorities, dependencies, and progress throughout the delivery cycle",
      "Facilitated communication between business, product, development, and other stakeholders",
      "Monitored project timelines and followed up on pending or delayed activities",
      "Identified delivery risks, blockers, and dependencies and escalated them when required",
      "Maintained project status updates and communicated progress to relevant stakeholders",
      "Supported sprint and milestone planning by coordinating priorities and deliverables",
      "Coordinated release activities and followed up on outstanding actions before delivery",
    ],

    scope:
      "Covers project planning, task and milestone tracking, stakeholder coordination, dependency management, risk and issue tracking, status communication, and release coordination.",
  },
}
];

export type Achievement = {
  id: string;
  title: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Expertise in Quality Engineering and Project Coordination",
    description:
      "Demonstrated expertise in quality engineering principles and project coordination practices, ensuring successful delivery of software projects.",
  },
  {
    id: "ach-2",
    title: "Founding Team Member of Aurumi Products",
    description:
      "Contributed to the founding and early development of Aurumi Products, playing a key role in shaping the company's vision and strategic direction.",
  },
];

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Malla Reddy University, Hyderabad, India",
    duration: "2020 - 2024",
    detail: "Bachelor of Technology in Computer Science/Engineering with coursework in Software Engineering, DBMS, Computer Networks, Web Technologies, and Software Testing.",
  },
];

export type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const certifications: CertificationItem[] = [
  {
    id: "cert-1",
    name: "AWS",
    issuer: "PLACEHOLDER — Issuing Organization",
    date: "PLACEHOLDER — YYYY",
    credentialUrl: undefined,
  },
  {
    id: "cert-2",
    name: "PLACEHOLDER — Certification Name",
    issuer: "PLACEHOLDER — Issuing Organization",
    date: "PLACEHOLDER — YYYY",
    credentialUrl: undefined,
  },
];

export type Repository = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url: string;
};

export const repositories: Repository[] = [
  {
    id: "repo-1",
    name: "Aurumi",
    description:
      "Business software platform supporting integrated workflows across CRM, dashboards, productivity, and AI-powered capabilities.",
    technologies: ["HTML", "JavaScript", "Web"],
    url: "https://github.com/sandeeppatnana/Aurumi",
  },

  {
    id: "repo-2",
    name: "support-desk-dashboards",
    description:
      "Dashboard implementation focused on support operations, workload visibility, service metrics, and actionable reporting.",
    technologies: ["TypeScript", "Dashboard", "Analytics"],
    url: "https://github.com/sandeeppatnana/support-desk-dashboards",
  },

  {
    id: "repo-3",
    name: "attendance-dashboards",
    description:
      "Role-based attendance dashboards providing visibility into attendance patterns, employee activity, and workforce metrics.",
    technologies: ["TypeScript", "Dashboard", "Analytics"],
    url: "https://github.com/sandeeppatnana/attendance-dashboards",
  },

  {
    id: "repo-4",
    name: "deals-dashboards",
    description:
      "Sales and deal management dashboards focused on pipeline visibility, performance tracking, and business reporting.",
    technologies: ["TypeScript", "Dashboard", "Analytics"],
    url: "https://github.com/sandeeppatnana/deals-dashboards",
  },

  {
    id: "repo-5",
    name: "Sandeep-Portfolio",
    description:
      "Personal portfolio showcasing my experience in Quality Engineering, Project Coordination, GenAI testing, and software delivery.",
    technologies: ["TypeScript", "HTML", "CSS"],
    url: "https://github.com/sandeeppatnana/Sandeep-Portfolio",
  },

];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "My Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

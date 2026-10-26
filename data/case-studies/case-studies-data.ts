import { StaticImageData } from "next/image";

import CaseStudies01Image from "../../public/images/case-studies/case-studies-01.png";
import CaseStudies02Image from "../../public/images/case-studies/case-studies-02.png";
import CaseStudies03Image from "../../public/images/case-studies/case-studies-03.png";
import CaseStudies04Image from "../../public/images/case-studies/case-studies-04.png";
import CaseStudies05Image from "../../public/images/case-studies/case-studies-05.png";
import CaseStudies06Image from "../../public/images/case-studies/case-studies-06.png";
import CaseStudies07Image from "../../public/images/case-studies/case-studies-07.png";
import CaseStudies08Image from "../../public/images/case-studies/case-studies-08.png";
import CaseStudies09Image from "../../public/images/case-studies/case-studies-09.png";
import CaseStudies10Image from "../../public/images/case-studies/case-studies-10.png";
import CaseStudies11Image from "../../public/images/case-studies/case-studies-11.png";
import CaseStudies12Image from "../../public/images/case-studies/case-studies-12.png";
import CaseStudies13Image from "../../public/images/case-studies/case-studies-13.png";
import CaseStudies14Image from "../../public/images/case-studies/case-studies-14.png";

export type ICaseStudy = {
  id: number;
  slug: string;
  project: string;
  title: string;
  description: string;
  category: string;
  technologies: readonly string[];
  image: string | null | StaticImageData;
  featured: boolean;
};

export const CaseStudiesData: readonly ICaseStudy[] = [
  {
    id: 1,
    slug: "lead-follow-up-automation",
    project: "LeadFlow",
    title: "Stop losing leads after the first inquiry",
    description:
      "Capture every inquiry, assign the right person, and follow up without relying on someone to remember.",
    category: "AI & Automation",
    technologies: ["n8n", "Next.js", "PostgreSQL", "SMTP", "Webhooks"],
    image: CaseStudies01Image,
    featured: true,
  },
  {
    id: 2,
    slug: "n8n-business-workflow",
    project: "FlowBridge",
    title: "Connect your tools so your team stops copying data",
    description:
      "Use n8n to move information between apps, trigger tasks, and keep everyday work moving.",
    category: "AI & Automation",
    technologies: [
      "n8n",
      "Webhooks",
      "REST APIs",
      "PostgreSQL",
      "Google Sheets",
    ],
    image: CaseStudies02Image,
    featured: true,
  },
  {
    id: 3,
    slug: "ai-support-assistant",
    project: "AnswerDesk",
    title: "Answer common customer questions without adding more tickets",
    description:
      "Help customers find accurate answers from approved company information, with a clear handoff when AI is unsure.",
    category: "AI & Automation",
    technologies: ["Python", "OpenAI API", "RAG", "Vector Search", "n8n"],
    image: CaseStudies03Image,
    featured: true,
  },
  {
    id: 4,
    slug: "invoice-document-processing",
    project: "InvoiceFlow",
    title: "Turn invoices and PDFs into usable data",
    description:
      "Extract key fields, check them, and send approved records into the tools your team already uses.",
    category: "AI & Automation",
    technologies: ["Python", "OCR", "n8n", "PostgreSQL", "REST APIs"],
    image: CaseStudies04Image,
    featured: false,
  },
  {
    id: 5,
    slug: "client-project-portal",
    project: "ClientSpace",
    title: "Give clients one place to see what is happening",
    description:
      "Replace scattered status emails with a secure portal for requests, files, updates, and approvals.",
    category: "Web Apps & SaaS",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Authentication",
      "Object Storage",
    ],
    image: CaseStudies05Image,
    featured: false,
  },
  {
    id: 6,
    slug: "saas-mvp-launch",
    project: "LaunchKit",
    title: "Turn a product idea into software people can actually use",
    description:
      "Build the essential user journey first, then launch with the foundations needed to learn and grow.",
    category: "Web Apps & SaaS",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: CaseStudies06Image,
    featured: false,
  },
  {
    id: 7,
    slug: "crm-api-integration",
    project: "SyncLayer",
    title: "Make your CRM and business apps stay in sync",
    description:
      "Connect customer records, updates, and events across systems without constant CSV exports.",
    category: "Backend & Cloud",
    technologies: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL", "n8n"],
    image: CaseStudies07Image,
    featured: false,
  },
  {
    id: 8,
    slug: "live-operations-dashboard",
    project: "OpsBoard",
    title: "See what is happening without rebuilding a spreadsheet",
    description:
      "Bring key operational numbers and tasks into one dashboard your team can trust.",
    category: "Web Apps & SaaS",
    technologies: ["Next.js", "PostgreSQL", "SQL", "Charts", "REST APIs"],
    image: CaseStudies08Image,
    featured: false,
  },
  {
    id: 9,
    slug: "service-website-lead-funnel",
    project: "ConvertSite",
    title: "Make your website easier to trust and easier to contact",
    description:
      "Turn a confusing service website into a clear path from visitor question to qualified inquiry.",
    category: "Web Apps & SaaS",
    technologies: ["Next.js", "TypeScript", "Analytics", "Forms", "SEO"],
    image: CaseStudies09Image,
    featured: false,
  },
  {
    id: 10,
    slug: "booking-reminder-automation",
    project: "BookPilot",
    title: "Let customers book without endless messages",
    description:
      "Make appointments easier to schedule, confirm, reschedule, and follow up on automatically.",
    category: "AI & Automation",
    technologies: [
      "n8n",
      "Calendar APIs",
      "Next.js",
      "Email APIs",
      "PostgreSQL",
    ],
    image: CaseStudies10Image,
    featured: false,
  },
  {
    id: 11,
    slug: "ecommerce-operations-sync",
    project: "OrderSync",
    title: "Keep orders, stock, and customer updates connected",
    description:
      "Automate the routine steps between checkout, inventory, fulfillment, and customer notifications.",
    category: "AI & Automation",
    technologies: ["n8n", "Shopify API", "Webhooks", "PostgreSQL", "Node.js"],
    image: CaseStudies11Image,
    featured: false,
  },
  {
    id: 12,
    slug: "backend-reliability-modernization",
    project: "CoreWatch",
    title: "Stop backend failures from becoming customer problems",
    description:
      "Make APIs, background jobs, and deployments easier to monitor, recover, and maintain.",
    category: "Backend & Cloud",
    technologies: ["Node.js", "Docker", "PostgreSQL", "Redis", "Grafana"],
    image: CaseStudies12Image,
    featured: false,
  },
  {
    id: 13,
    slug: "application-security-hardening",
    project: "SecureAudit",
    title: "Find security gaps before attackers find them",
    description:
      "Review application risks, prioritize what matters, and verify fixes without drowning teams in reports.",
    category: "Cybersecurity",
    technologies: [
      "OWASP",
      "Burp Suite",
      "Dependency Scanning",
      "Node.js",
      "Authentication",
    ],
    image: CaseStudies13Image,
    featured: false,
  },
  {
    id: 14,
    slug: "secure-access-permissions",
    project: "AccessCore",
    title: "Make sure people only see what they should",
    description:
      "Build sign-in, roles, and permissions that fit how your product and teams actually work.",
    category: "Cybersecurity",
    technologies: ["Next.js", "PostgreSQL", "OAuth", "Sessions", "RBAC"],
    image: CaseStudies14Image,
    featured: false,
  },
];

export type CaseStudyScreenshot = {
  src: string | StaticImageData;
  alt: string;
  caption?: string | null;
};

export type CaseStudyDetail = {
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  atAGlance: { problem: string; solution: string; outcome: string };
  challenge: { heading: string; body: string };
  solution: { heading: string; body: string };
  capabilities: { heading: string; items: string[] };
  workflow: { heading: string; steps: { step: number; label: string }[] };
  businessValue: { heading: string; items: string[] };
  implementation: { heading: string; body: string; technicalFocus: string[] };
  proof: {
    heading: string;
    recommendedAssets: string[];
    screenshots: CaseStudyScreenshot[];



  };
  results: {
    heading: string;
    verifiedMetrics: { label: string; value: string; context?: string | null }[];
    verifiedOutcome: string | null;
    measurementNotes: string | null;
    fallbackCopy: string;
  };
  faq: { question: string; answer: string }[];
};

export type ICaseStudyDetail = ICaseStudy & {
  detail: CaseStudyDetail;
  seo: { title: string; description: string; keywords: string[]; canonicalPath: string };
  relatedSlugs: string[];
};

export const CaseStudyData: readonly ICaseStudyDetail[] = [
  {
    id: 1,
    slug: "lead-follow-up-automation",
    project: "LeadFlow",
    title: "Stop losing leads after the first inquiry",
    description:
      "Capture every inquiry, assign the right person, and follow up without relying on someone to remember.",
    category: "AI & Automation",
    technologies: ["n8n", "Next.js", "PostgreSQL", "SMTP", "Webhooks"],
    image: CaseStudies01Image,
    featured: true,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Stop losing leads after the first inquiry",
      heroDescription:
        "Capture every inquiry, assign the right person, and follow up without relying on someone to remember.",
      atAGlance: {
        problem:
          "New inquiries arrive from different places, sit unanswered, and disappear into inboxes or spreadsheets.",
        solution:
          "A lead operations system that captures inquiries, removes duplicates, routes leads, and records follow-up activity.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "New inquiries arrive from different places, sit unanswered, and disappear into inboxes or spreadsheets.",
      },
      solution: {
        heading: "What did I build?",
        body: "A lead operations system that captures inquiries, removes duplicates, routes leads, and records follow-up activity.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Capture forms, email inquiries, and webhook events",
          "Deduplicate contacts and create CRM records",
          "Assign leads by source, service, or territory",
          "Trigger acknowledgments and internal alerts",
          "Schedule follow-up tasks with stop conditions",
          "Track ownership, replies, and failed sends",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Inquiry arrives",
          },
          {
            step: 2,
            label: "Validate and deduplicate",
          },
          {
            step: 3,
            label: "Create or update CRM record",
          },
          {
            step: 4,
            label: "Assign owner and send acknowledgment",
          },
          {
            step: 5,
            label: "Schedule follow-up and stop on reply",
          },
          {
            step: 6,
            label: "Log activity for reporting",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Fewer inquiries forgotten",
          "Clear ownership of each lead",
          "More consistent response process",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["n8n", "Next.js", "PostgreSQL", "SMTP"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Intake-to-CRM screen",
          "Follow-up queue and opt-out controls",
          "Delivery/error logs",
          "Before-and-after workflow walkthrough",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can you make sure every new lead gets a reply and follow-up?",
          answer:
            "Yes. A connected intake and follow-up workflow can log the inquiry, alert the right person, and schedule the next action.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "Lead Follow-Up Automation for Service Businesses | Syed Hassan Ali",
      description:
        "Capture every inquiry, assign the right person, and follow up without relying on someone to remember.",
      keywords: [
        "lead follow up automation",
        "automated lead management",
        "CRM email follow ups",
      ],
      canonicalPath: "/case-studies/lead-follow-up-automation",
    },

    relatedSlugs: [
      "n8n-business-workflow",
      "crm-api-integration",
      "service-website-lead-funnel",
    ],
  },

  {
    id: 2,
    slug: "n8n-business-workflow",
    project: "FlowBridge",
    title: "Connect your tools so your team stops copying data",
    description:
      "Use n8n to move information between apps, trigger tasks, and keep everyday work moving.",
    category: "AI & Automation",
    technologies: [
      "n8n",
      "Webhooks",
      "REST APIs",
      "PostgreSQL",
      "Google Sheets",
    ],
    image: CaseStudies02Image,
    featured: true,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Connect your tools so your team stops copying data",
      heroDescription:
        "Use n8n to move information between apps, trigger tasks, and keep everyday work moving.",
      atAGlance: {
        problem:
          "Staff copy the same information across tools and chase routine updates manually.",
        solution:
          "A set of documented automations that connects existing systems and handles repetitive steps with human approval where needed.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Staff copy the same information across tools and chase routine updates manually.",
      },
      solution: {
        heading: "What did I build?",
        body: "A set of documented automations that connects existing systems and handles repetitive steps with human approval where needed.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Connect forms, spreadsheets, CRMs, and messaging tools",
          "Map and validate data between apps",
          "Route work based on conditions",
          "Handle retries, duplicates, and exceptions",
          "Send approval requests for sensitive actions",
          "Maintain execution logs and alerts",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "A trigger fires in an existing app",
          },
          {
            step: 2,
            label: "Validate and transform data",
          },
          {
            step: 3,
            label: "Apply business rules",
          },
          {
            step: 4,
            label: "Update destination systems",
          },
          {
            step: 5,
            label: "Notify or request approval",
          },
          {
            step: 6,
            label: "Log outcome and retry safely",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Less manual re-entry",
          "Fewer missed handoffs",
          "Better visibility into workflow failures",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["n8n", "Webhooks", "REST APIs", "PostgreSQL"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Actual n8n workflow screenshot",
          "Run history and error-handling demo",
          "Integration map",
          "Documented manual vs automated steps",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can you connect the apps we already use instead of building another system?",
          answer:
            "Often, yes. Existing apps can be connected through APIs, webhooks, and n8n workflows, with checks for failures and duplicate events.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "n8n Business Workflow Automation & Integrations | Syed Hassan Ali",
      description:
        "Use n8n to move information between apps, trigger tasks, and keep everyday work moving.",
      keywords: [
        "n8n automation expert",
        "connect business apps",
        "automate manual workflows",
      ],
      canonicalPath: "/case-studies/n8n-business-workflow",
    },

    relatedSlugs: [
      "invoice-document-processing",
      "crm-api-integration",
      "booking-reminder-automation",
    ],
  },

  {
    id: 3,
    slug: "ai-support-assistant",
    project: "AnswerDesk",
    title: "Answer common customer questions without adding more tickets",
    description:
      "Help customers find accurate answers from approved company information, with a clear handoff when AI is unsure.",
    category: "AI & Automation",
    technologies: ["Python", "OpenAI API", "RAG", "Vector Search", "n8n"],
    image: CaseStudies03Image,
    featured: true,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Answer common customer questions without adding more tickets",
      heroDescription:
        "Help customers find accurate answers from approved company information, with a clear handoff when AI is unsure.",
      atAGlance: {
        problem:
          "Support teams answer the same questions repeatedly while customers wait for straightforward information.",
        solution:
          "A knowledge-grounded support assistant with retrieval, guardrails, conversation history, and a human escalation path.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Support teams answer the same questions repeatedly while customers wait for straightforward information.",
      },
      solution: {
        heading: "What did I build?",
        body: "A knowledge-grounded support assistant with retrieval, guardrails, conversation history, and a human escalation path.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Search approved help articles and documents",
          "Respond with grounded answers and source links",
          "Escalate uncertain or account-specific requests",
          "Capture unanswered questions for knowledge updates",
          "Connect with support inbox or ticketing tools",
          "Log feedback and quality checks",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Customer asks a question",
          },
          {
            step: 2,
            label: "Retrieve relevant approved content",
          },
          {
            step: 3,
            label: "Generate a grounded response",
          },
          {
            step: 4,
            label: "Check confidence and policy rules",
          },
          {
            step: 5,
            label: "Answer or create a support handoff",
          },
          {
            step: 6,
            label: "Capture feedback for improvement",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Faster access to routine answers",
          "Less repetitive work for support teams",
          "Clearer escalation for complex cases",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["Python", "OpenAI API", "RAG", "Vector Search"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Demo with real approved knowledge content",
          "Correct answer and escalation examples",
          "Source citation screenshots",
          "Evaluation set and observed accuracy results",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question: "Can AI answer our FAQs without making things up?",
          answer:
            "It can answer from an approved knowledge base, cite relevant sources, and escalate uncertain or sensitive questions to a person.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "AI Customer Support Assistant with Knowledge Retrieval | Syed Hassan Ali",
      description:
        "Help customers find accurate answers from approved company information, with a clear handoff when AI is unsure.",
      keywords: [
        "AI customer support chatbot",
        "RAG support assistant",
        "AI FAQ assistant",
      ],
      canonicalPath: "/case-studies/ai-support-assistant",
    },

    relatedSlugs: [
      "invoice-document-processing",
      "client-project-portal",
      "saas-mvp-launch",
    ],
  },

  {
    id: 4,
    slug: "invoice-document-processing",
    project: "InvoiceFlow",
    title: "Turn invoices and PDFs into usable data",
    description:
      "Extract key fields, check them, and send approved records into the tools your team already uses.",
    category: "AI & Automation",
    technologies: ["Python", "OCR", "n8n", "PostgreSQL", "REST APIs"],
    image: CaseStudies04Image,
    featured: false,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Turn invoices and PDFs into usable data",
      heroDescription:
        "Extract key fields, check them, and send approved records into the tools your team already uses.",
      atAGlance: {
        problem:
          "Invoices, forms, and attachments require repeated manual entry, review, and filing.",
        solution:
          "A document intake pipeline that extracts structured fields, validates them, and routes records for review or downstream entry.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Invoices, forms, and attachments require repeated manual entry, review, and filing.",
      },
      solution: {
        heading: "What did I build?",
        body: "A document intake pipeline that extracts structured fields, validates them, and routes records for review or downstream entry.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Collect files from inboxes, uploads, or shared folders",
          "Extract vendor, dates, amounts, and line items",
          "Check required fields and detect duplicates",
          "Flag low-confidence or inconsistent records",
          "Route exceptions for human approval",
          "Export structured data to ERP, CRM, or spreadsheets",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Receive document",
          },
          {
            step: 2,
            label: "Extract structured fields",
          },
          {
            step: 3,
            label: "Validate totals and required values",
          },
          {
            step: 4,
            label: "Flag exceptions for review",
          },
          {
            step: 5,
            label: "Approve and sync destination record",
          },
          {
            step: 6,
            label: "Archive source and audit trail",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Less repetitive typing",
          "More consistent data capture",
          "Better traceability for approvals",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["Python", "OCR", "n8n", "PostgreSQL"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Redacted source-to-record examples",
          "Validation and exception screen",
          "Approval audit trail",
          "Measured extraction quality on a test set",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can you pull information from invoices and put it into our system?",
          answer:
            "Yes, with document extraction, field validation, exception handling, and human review for uncertain values.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "Invoice & Document Data Extraction Automation | Syed Hassan Ali",
      description:
        "Extract key fields, check them, and send approved records into the tools your team already uses.",
      keywords: [
        "invoice data extraction automation",
        "AI PDF processing",
        "automated document entry",
      ],
      canonicalPath: "/case-studies/invoice-document-processing",
    },

    relatedSlugs: [
      "n8n-business-workflow",
      "live-operations-dashboard",
      "ecommerce-operations-sync",
    ],
  },

  {
    id: 5,
    slug: "client-project-portal",
    project: "ClientSpace",
    title: "Give clients one place to see what is happening",
    description:
      "Replace scattered status emails with a secure portal for requests, files, updates, and approvals.",
    category: "Web Apps & SaaS",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Authentication",
      "Object Storage",
    ],
    image: CaseStudies05Image,
    featured: false,

    detail: {
      eyebrow: "Web Apps & SaaS",
      heroTitle: "Give clients one place to see what is happening",
      heroDescription:
        "Replace scattered status emails with a secure portal for requests, files, updates, and approvals.",
      atAGlance: {
        problem:
          "Clients chase updates and teams lose context across email threads, spreadsheets, and chat.",
        solution:
          "A branded client workspace for requests, project status, documents, approvals, and notifications.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Clients chase updates and teams lose context across email threads, spreadsheets, and chat.",
      },
      solution: {
        heading: "What did I build?",
        body: "A branded client workspace for requests, project status, documents, approvals, and notifications.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Secure client and staff logins",
          "Project timelines and status updates",
          "Request intake and threaded discussions",
          "File sharing with access controls",
          "Approval and feedback workflows",
          "Email notifications and activity history",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Client submits a request",
          },
          {
            step: 2,
            label: "Team triages and assigns it",
          },
          {
            step: 3,
            label: "Status and files update in portal",
          },
          {
            step: 4,
            label: "Client reviews or approves",
          },
          {
            step: 5,
            label: "Notifications and history stay in sync",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Fewer status-chasing emails",
          "A clearer client experience",
          "More organized delivery records",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: [
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Authentication",
        ],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Client and admin screen recordings",
          "Role-permission demo",
          "Request-to-approval journey",
          "Actual usage or feedback if available",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question: "Can our clients log in and see their project status?",
          answer:
            "Yes. A role-based client portal can show progress, collect requests, centralize files, and keep an activity history.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "Custom Client Portal for Agencies and B2B Services | Syed Hassan Ali",
      description:
        "Replace scattered status emails with a secure portal for requests, files, updates, and approvals.",
      keywords: [
        "client portal development",
        "customer project tracking portal",
        "agency client dashboard",
      ],
      canonicalPath: "/case-studies/client-project-portal",
    },

    relatedSlugs: [
      "saas-mvp-launch",
      "live-operations-dashboard",
      "secure-access-permissions",
    ],
  },

  {
    id: 6,
    slug: "saas-mvp-launch",
    project: "LaunchKit",
    title: "Turn a product idea into software people can actually use",
    description:
      "Build the essential user journey first, then launch with the foundations needed to learn and grow.",
    category: "Web Apps & SaaS",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: CaseStudies06Image,
    featured: false,

    detail: {
      eyebrow: "Web Apps & SaaS",
      heroTitle: "Turn a product idea into software people can actually use",
      heroDescription:
        "Build the essential user journey first, then launch with the foundations needed to learn and grow.",
      atAGlance: {
        problem:
          "Founders have a product concept but need a usable first release without overbuilding.",
        solution:
          "An end-to-end MVP covering the main customer workflow, authentication, data model, and production release.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Founders have a product concept but need a usable first release without overbuilding.",
      },
      solution: {
        heading: "What did I build?",
        body: "An end-to-end MVP covering the main customer workflow, authentication, data model, and production release.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Define a focused v1 scope and user journey",
          "Implement authentication and account management",
          "Build core product screens and APIs",
          "Add payments or subscriptions if required",
          "Set up analytics, error tracking, and deployment",
          "Prepare a prioritized post-launch backlog",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Agree on the core user journey",
          },
          {
            step: 2,
            label: "Prototype and validate scope",
          },
          {
            step: 3,
            label: "Build frontend, backend, and database",
          },
          {
            step: 4,
            label: "Test key flows and access rules",
          },
          {
            step: 5,
            label: "Deploy and monitor",
          },
          {
            step: 6,
            label: "Use feedback to prioritize next release",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "A testable product in users’ hands",
          "Lower risk of building unused features",
          "A foundation for future iterations",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Working product walkthrough",
          "Key user journey recording",
          "Architecture and deployment overview",
          "Launch or adoption evidence when available",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question: "Can you build an MVP that we can launch and improve?",
          answer:
            "Yes. Start with a narrow feature set, reliable core flows, analytics, and a deployment plan that supports iteration.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "SaaS MVP Development from Idea to Launch | Syed Hassan Ali",
      description:
        "Build the essential user journey first, then launch with the foundations needed to learn and grow.",
      keywords: [
        "build SaaS MVP",
        "startup MVP developer",
        "full stack SaaS development",
      ],
      canonicalPath: "/case-studies/saas-mvp-launch",
    },

    relatedSlugs: [
      "client-project-portal",
      "backend-reliability-modernization",
      "secure-access-permissions",
    ],
  },

  {
    id: 7,
    slug: "crm-api-integration",
    project: "SyncLayer",
    title: "Make your CRM and business apps stay in sync",
    description:
      "Connect customer records, updates, and events across systems without constant CSV exports.",
    category: "Backend & Cloud",
    technologies: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL", "n8n"],
    image: CaseStudies07Image,
    featured: false,

    detail: {
      eyebrow: "Backend & Cloud",
      heroTitle: "Make your CRM and business apps stay in sync",
      heroDescription:
        "Connect customer records, updates, and events across systems without constant CSV exports.",
      atAGlance: {
        problem:
          "Customer data lives in multiple systems, updates arrive late, and teams work from conflicting records.",
        solution:
          "An API and webhook integration layer that keeps defined records consistent across selected business tools.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Customer data lives in multiple systems, updates arrive late, and teams work from conflicting records.",
      },
      solution: {
        heading: "What did I build?",
        body: "An API and webhook integration layer that keeps defined records consistent across selected business tools.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Connect CRM and third-party APIs",
          "Map fields and define source-of-truth rules",
          "Process webhooks and scheduled syncs",
          "Prevent duplicate records and loops",
          "Retry failed jobs and alert on exceptions",
          "Log changes for troubleshooting",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Identify systems and data owners",
          },
          {
            step: 2,
            label: "Define mapping and sync direction",
          },
          {
            step: 3,
            label: "Receive webhook or scheduled update",
          },
          {
            step: 4,
            label: "Validate and reconcile record",
          },
          {
            step: 5,
            label: "Apply idempotent update",
          },
          {
            step: 6,
            label: "Log, retry, or escalate exceptions",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Fewer conflicting customer records",
          "Less manual import/export work",
          "More reliable downstream workflows",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "System-to-system integration diagram",
          "Successful and failed sync examples",
          "Conflict-resolution rules",
          "Sync logs with redacted records",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question: "Can you make our CRM talk to our other tools?",
          answer:
            "Yes. The integration can synchronize approved fields, handle conflicts, and retry failures without duplicating records.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "CRM & Third-Party API Integration | Syed Hassan Ali",
      description:
        "Connect customer records, updates, and events across systems without constant CSV exports.",
      keywords: [
        "CRM API integration",
        "HubSpot integration developer",
        "sync CRM with other apps",
      ],
      canonicalPath: "/case-studies/crm-api-integration",
    },

    relatedSlugs: [
      "lead-follow-up-automation",
      "n8n-business-workflow",
      "live-operations-dashboard",
    ],
  },

  {
    id: 8,
    slug: "live-operations-dashboard",
    project: "OpsBoard",
    title: "See what is happening without rebuilding a spreadsheet",
    description:
      "Bring key operational numbers and tasks into one dashboard your team can trust.",
    category: "Web Apps & SaaS",
    technologies: ["Next.js", "PostgreSQL", "SQL", "Charts", "REST APIs"],
    image: CaseStudies08Image,
    featured: false,

    detail: {
      eyebrow: "Web Apps & SaaS",
      heroTitle: "See what is happening without rebuilding a spreadsheet",
      heroDescription:
        "Bring key operational numbers and tasks into one dashboard your team can trust.",
      atAGlance: {
        problem:
          "Managers spend time collecting reports from several spreadsheets before they can make decisions.",
        solution:
          "An internal reporting and operations dashboard with defined metrics, filters, access controls, and data checks.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Managers spend time collecting reports from several spreadsheets before they can make decisions.",
      },
      solution: {
        heading: "What did I build?",
        body: "An internal reporting and operations dashboard with defined metrics, filters, access controls, and data checks.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Combine selected operational data sources",
          "Define consistent KPI calculations",
          "Build role-based dashboard views",
          "Filter by team, date, or customer",
          "Highlight exceptions and overdue work",
          "Export reports and inspect data freshness",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Identify decisions and metrics",
          },
          {
            step: 2,
            label: "Connect source data",
          },
          {
            step: 3,
            label: "Clean and model records",
          },
          {
            step: 4,
            label: "Calculate KPIs",
          },
          {
            step: 5,
            label: "Display and validate dashboard",
          },
          {
            step: 6,
            label: "Monitor data quality",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Less report preparation",
          "More consistent numbers",
          "Earlier visibility into exceptions",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["Next.js", "PostgreSQL", "SQL", "Charts"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Real dashboard screenshots",
          "KPI definition examples",
          "Source-to-dashboard data flow",
          "Verified time saved if measured",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can you replace our weekly spreadsheet reporting with a dashboard?",
          answer:
            "Yes, if the underlying data sources and metric definitions are clear. The dashboard can refresh on a schedule or from events.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "Custom Operations Dashboard & Reporting Platform | Syed Hassan Ali",
      description:
        "Bring key operational numbers and tasks into one dashboard your team can trust.",
      keywords: [
        "custom business dashboard",
        "replace Excel reporting",
        "operations reporting software",
      ],
      canonicalPath: "/case-studies/live-operations-dashboard",
    },

    relatedSlugs: [
      "n8n-business-workflow",
      "client-project-portal",
      "crm-api-integration",
    ],
  },

  {
    id: 9,
    slug: "service-website-lead-funnel",
    project: "ConvertSite",
    title: "Make your website easier to trust and easier to contact",
    description:
      "Turn a confusing service website into a clear path from visitor question to qualified inquiry.",
    category: "Web Apps & SaaS",
    technologies: ["Next.js", "TypeScript", "Analytics", "Forms", "SEO"],
    image: CaseStudies09Image,
    featured: false,

    detail: {
      eyebrow: "Web Apps & SaaS",
      heroTitle: "Make your website easier to trust and easier to contact",
      heroDescription:
        "Turn a confusing service website into a clear path from visitor question to qualified inquiry.",
      atAGlance: {
        problem:
          "Visitors cannot quickly understand the offer, find evidence, or contact the business without friction.",
        solution:
          "A focused service website with clear messaging, proof sections, fast performance, and tracked contact actions.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Visitors cannot quickly understand the offer, find evidence, or contact the business without friction.",
      },
      solution: {
        heading: "What did I build?",
        body: "A focused service website with clear messaging, proof sections, fast performance, and tracked contact actions.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Clarify offer and audience on key pages",
          "Create service pages and relevant proof",
          "Build accessible, mobile-first layouts",
          "Reduce contact-form friction",
          "Track form submissions and key events",
          "Improve technical SEO and page performance",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Audit current visitor journey",
          },
          {
            step: 2,
            label: "Prioritize pages and messages",
          },
          {
            step: 3,
            label: "Build responsive sections and forms",
          },
          {
            step: 4,
            label: "Add analytics and event tracking",
          },
          {
            step: 5,
            label: "Test accessibility and performance",
          },
          {
            step: 6,
            label: "Review real conversion data",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Clearer service positioning",
          "Fewer obstacles to contacting the business",
          "Better visibility into inquiry sources",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["Next.js", "TypeScript", "Analytics", "Forms"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Before-and-after screenshots",
          "Mobile and accessibility checks",
          "Performance audit",
          "Actual analytics before/after if available",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can you improve our website so more visitors actually inquire?",
          answer:
            "The site can be redesigned around clear offers, trust signals, fast pages, and measurable inquiry paths; conversion gains require testing.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "B2B Service Website & Lead Capture Funnel | Syed Hassan Ali",
      description:
        "Turn a confusing service website into a clear path from visitor question to qualified inquiry.",
      keywords: [
        "B2B website redesign",
        "website lead generation developer",
        "high converting service website",
      ],
      canonicalPath: "/case-studies/service-website-lead-funnel",
    },

    relatedSlugs: [
      "lead-follow-up-automation",
      "client-project-portal",
      "booking-reminder-automation",
    ],
  },

  {
    id: 10,
    slug: "booking-reminder-automation",
    project: "BookPilot",
    title: "Let customers book without endless messages",
    description:
      "Make appointments easier to schedule, confirm, reschedule, and follow up on automatically.",
    category: "AI & Automation",
    technologies: [
      "n8n",
      "Calendar APIs",
      "Next.js",
      "Email APIs",
      "PostgreSQL",
    ],
    image: CaseStudies10Image,
    featured: false,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Let customers book without endless messages",
      heroDescription:
        "Make appointments easier to schedule, confirm, reschedule, and follow up on automatically.",
      atAGlance: {
        problem:
          "Staff coordinate appointments manually, chase confirmations, and handle avoidable scheduling confusion.",
        solution:
          "An appointment workflow that synchronizes availability, bookings, reminders, and post-visit follow-up.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Staff coordinate appointments manually, chase confirmations, and handle avoidable scheduling confusion.",
      },
      solution: {
        heading: "What did I build?",
        body: "An appointment workflow that synchronizes availability, bookings, reminders, and post-visit follow-up.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Display valid availability and prevent double booking",
          "Collect booking details and send confirmations",
          "Send reminders through permitted channels",
          "Provide reschedule and cancellation links",
          "Notify staff of changes",
          "Log outcomes and follow-up tasks",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Customer selects available slot",
          },
          {
            step: 2,
            label: "Validate and reserve booking",
          },
          {
            step: 3,
            label: "Send confirmation",
          },
          {
            step: 4,
            label: "Trigger timed reminders",
          },
          {
            step: 5,
            label: "Handle reschedule or cancellation",
          },
          {
            step: 6,
            label: "Send appropriate follow-up",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Less scheduling back-and-forth",
          "Clearer booking communication",
          "More consistent reminders",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["n8n", "Calendar APIs", "Next.js", "Email APIs"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Booking journey demo",
          "Calendar synchronization proof",
          "Reminder and cancellation examples",
          "Edge-case tests for time zones and duplicates",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can customers book a slot and get reminders automatically?",
          answer:
            "Yes. Availability, confirmation, reminders, rescheduling, and staff notifications can be connected in one workflow.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "Appointment Booking & Reminder Automation | Syed Hassan Ali",
      description:
        "Make appointments easier to schedule, confirm, reschedule, and follow up on automatically.",
      keywords: [
        "appointment booking automation",
        "n8n appointment reminders",
        "automated scheduling system",
      ],
      canonicalPath: "/case-studies/booking-reminder-automation",
    },

    relatedSlugs: [
      "n8n-business-workflow",
      "service-website-lead-funnel",
      "ecommerce-operations-sync",
    ],
  },

  {
    id: 11,
    slug: "ecommerce-operations-sync",
    project: "OrderSync",
    title: "Keep orders, stock, and customer updates connected",
    description:
      "Automate the routine steps between checkout, inventory, fulfillment, and customer notifications.",
    category: "AI & Automation",
    technologies: ["n8n", "Shopify API", "Webhooks", "PostgreSQL", "Node.js"],
    image: CaseStudies11Image,
    featured: false,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Keep orders, stock, and customer updates connected",
      heroDescription:
        "Automate the routine steps between checkout, inventory, fulfillment, and customer notifications.",
      atAGlance: {
        problem:
          "Orders, stock counts, and delivery updates become inconsistent across storefronts and fulfillment tools.",
        solution:
          "An ecommerce operations workflow connecting order events, inventory records, fulfillment status, and customer communication.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Orders, stock counts, and delivery updates become inconsistent across storefronts and fulfillment tools.",
      },
      solution: {
        heading: "What did I build?",
        body: "An ecommerce operations workflow connecting order events, inventory records, fulfillment status, and customer communication.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Receive and validate order events",
          "Synchronize inventory with source-of-truth rules",
          "Create fulfillment tasks or downstream records",
          "Send transactional order updates",
          "Flag stock or delivery exceptions",
          "Retry failures without duplicating actions",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Order event arrives",
          },
          {
            step: 2,
            label: "Validate and deduplicate",
          },
          {
            step: 3,
            label: "Update inventory or fulfillment system",
          },
          {
            step: 4,
            label: "Send customer status update",
          },
          {
            step: 5,
            label: "Reconcile exceptions",
          },
          {
            step: 6,
            label: "Record audit trail",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Less manual order handling",
          "Fewer disconnected status updates",
          "More reliable operational handoffs",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["n8n", "Shopify API", "Webhooks", "PostgreSQL"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "End-to-end sample order demo",
          "Inventory reconciliation examples",
          "Webhook retry logs",
          "Customer notification samples",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can you automate order updates without messing up inventory?",
          answer:
            "Yes, with event-based integrations, stock reconciliation, duplicate protection, and clear exception handling.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "Ecommerce Order & Inventory Automation | Syed Hassan Ali",
      description:
        "Automate the routine steps between checkout, inventory, fulfillment, and customer notifications.",
      keywords: [
        "Shopify automation developer",
        "ecommerce inventory integration",
        "order workflow automation",
      ],
      canonicalPath: "/case-studies/ecommerce-operations-sync",
    },

    relatedSlugs: [
      "n8n-business-workflow",
      "crm-api-integration",
      "booking-reminder-automation",
    ],
  },

  {
    id: 12,
    slug: "backend-reliability-modernization",
    project: "CoreWatch",
    title: "Stop backend failures from becoming customer problems",
    description:
      "Make APIs, background jobs, and deployments easier to monitor, recover, and maintain.",
    category: "Backend & Cloud",
    technologies: ["Node.js", "Docker", "PostgreSQL", "Redis", "Grafana"],
    image: CaseStudies12Image,
    featured: false,

    detail: {
      eyebrow: "Backend & Cloud",
      heroTitle: "Stop backend failures from becoming customer problems",
      heroDescription:
        "Make APIs, background jobs, and deployments easier to monitor, recover, and maintain.",
      atAGlance: {
        problem:
          "Slow APIs, failed background jobs, and fragile deployments create recurring incidents and manual firefighting.",
        solution:
          "A backend reliability improvement project focused on job processing, API health, monitoring, and operational recovery.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Slow APIs, failed background jobs, and fragile deployments create recurring incidents and manual firefighting.",
      },
      solution: {
        heading: "What did I build?",
        body: "A backend reliability improvement project focused on job processing, API health, monitoring, and operational recovery.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Audit slow or failure-prone services",
          "Improve queues, retries, and idempotency",
          "Add structured logs, metrics, and alerts",
          "Tune queries and database access",
          "Harden deployment and rollback process",
          "Document incident response and recovery",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Establish baseline and failure patterns",
          },
          {
            step: 2,
            label: "Prioritize high-impact issues",
          },
          {
            step: 3,
            label: "Implement reliability safeguards",
          },
          {
            step: 4,
            label: "Test failures and recovery",
          },
          {
            step: 5,
            label: "Deploy with rollback plan",
          },
          {
            step: 6,
            label: "Monitor observed behavior",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Fewer avoidable repeat incidents",
          "Faster troubleshooting",
          "Safer production changes",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["Node.js", "Docker", "PostgreSQL", "Redis"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Before-and-after error rates if measured",
          "Queue and retry demonstration",
          "Monitoring dashboard",
          "Load-test and recovery results",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question: "Can you fix the jobs that keep failing in production?",
          answer:
            "Start by identifying failure modes, then add safe retries, idempotency, observability, and deployment safeguards.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "Backend Reliability & Cloud Infrastructure Modernization | Syed Hassan Ali",
      description:
        "Make APIs, background jobs, and deployments easier to monitor, recover, and maintain.",
      keywords: [
        "fix failing background jobs",
        "Node.js backend reliability",
        "Docker deployment engineer",
      ],
      canonicalPath: "/case-studies/backend-reliability-modernization",
    },

    relatedSlugs: [
      "saas-mvp-launch",
      "crm-api-integration",
      "live-operations-dashboard",
    ],
  },

  {
    id: 13,
    slug: "application-security-hardening",
    project: "SecureAudit",
    title: "Find security gaps before attackers find them",
    description:
      "Review application risks, prioritize what matters, and verify fixes without drowning teams in reports.",
    category: "Cybersecurity",
    technologies: [
      "OWASP",
      "Burp Suite",
      "Dependency Scanning",
      "Node.js",
      "Authentication",
    ],
    image: CaseStudies13Image,
    featured: false,

    detail: {
      eyebrow: "Cybersecurity",
      heroTitle: "Find security gaps before attackers find them",
      heroDescription:
        "Review application risks, prioritize what matters, and verify fixes without drowning teams in reports.",
      atAGlance: {
        problem:
          "Teams ship quickly but lack a clear view of authentication, authorization, configuration, and dependency risks.",
        solution:
          "A scoped application security review with reproducible findings, risk prioritization, remediation guidance, and retesting.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Teams ship quickly but lack a clear view of authentication, authorization, configuration, and dependency risks.",
      },
      solution: {
        heading: "What did I build?",
        body: "A scoped application security review with reproducible findings, risk prioritization, remediation guidance, and retesting.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Agree on written scope and test authorization",
          "Review auth, sessions, access controls, and input handling",
          "Inspect configuration and dependencies",
          "Validate findings without disrupting production",
          "Deliver prioritized remediation guidance",
          "Retest fixes and document remaining risk",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Confirm authorization and scope",
          },
          {
            step: 2,
            label: "Map attack surface",
          },
          {
            step: 3,
            label: "Run manual and automated checks",
          },
          {
            step: 4,
            label: "Validate and rank findings",
          },
          {
            step: 5,
            label: "Support remediation",
          },
          {
            step: 6,
            label: "Retest and report status",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "Clearer understanding of exposure",
          "A prioritized fix list",
          "Evidence that remediations were retested",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: [
          "OWASP",
          "Burp Suite",
          "Dependency Scanning",
          "Node.js",
        ],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Redacted finding example",
          "Scope and methodology",
          "Before-and-after remediation verification",
          "Authorized test artifacts",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can you check whether our web app has obvious security holes?",
          answer:
            "An authorized assessment can test defined areas, document reproducible findings, and prioritize practical remediation.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "Web Application Security Assessment & Remediation | Syed Hassan Ali",
      description:
        "Review application risks, prioritize what matters, and verify fixes without drowning teams in reports.",
      keywords: [
        "web application security audit",
        "OWASP security assessment",
        "SaaS security hardening",
      ],
      canonicalPath: "/case-studies/application-security-hardening",
    },

    relatedSlugs: [
      "backend-reliability-modernization",
      "secure-access-permissions",
      "saas-mvp-launch",
    ],
  },

  {
    id: 14,
    slug: "secure-access-permissions",
    project: "AccessCore",
    title: "Make sure people only see what they should",
    description:
      "Build sign-in, roles, and permissions that fit how your product and teams actually work.",
    category: "Cybersecurity",
    technologies: ["Next.js", "PostgreSQL", "OAuth", "Sessions", "RBAC"],
    image: CaseStudies14Image,
    featured: false,

    detail: {
      eyebrow: "Cybersecurity",
      heroTitle: "Make sure people only see what they should",
      heroDescription:
        "Build sign-in, roles, and permissions that fit how your product and teams actually work.",
      atAGlance: {
        problem:
          "Growing products outgrow basic login flows, leaving confusing roles and risky access boundaries.",
        solution:
          "An identity and authorization layer with secure sessions, defined permissions, and auditable access changes.",
        outcome:
          "Replace with a verified result or demonstrated capability from your actual project.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Growing products outgrow basic login flows, leaving confusing roles and risky access boundaries.",
      },
      solution: {
        heading: "What did I build?",
        body: "An identity and authorization layer with secure sessions, defined permissions, and auditable access changes.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Implement sign-in and account recovery",
          "Define role and permission matrix",
          "Enforce access rules on the server",
          "Separate tenant and organization data",
          "Add audit logs for sensitive actions",
          "Test denied access and privilege changes",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Map user types and sensitive resources",
          },
          {
            step: 2,
            label: "Define permission matrix",
          },
          {
            step: 3,
            label: "Implement auth and sessions",
          },
          {
            step: 4,
            label: "Enforce authorization in APIs and database access",
          },
          {
            step: 5,
            label: "Test cross-role and cross-tenant access",
          },
          {
            step: 6,
            label: "Document administration flows",
          },
        ],
      },
      businessValue: {
        heading: "Why this matters",
        items: [
          "More predictable user access",
          "Lower risk of accidental data exposure",
          "Simpler permission administration",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "Replace with your actual design decisions, integrations, constraints, and trade-offs. Do not imply an implementation you cannot demonstrate.",
        technicalFocus: ["Next.js", "PostgreSQL", "OAuth", "Sessions"],
      },
      proof: {
        heading: "See it in action",
        recommendedAssets: [
          "Permission matrix",
          "Role-based demo accounts",
          "Authorization test results",
          "Audit event examples",
        ],
        screenshots: [],



      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes: null,
        fallbackCopy:
          "The implementation and its working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can you add secure logins and different permissions for our users?",
          answer:
            "Yes. Access can be modeled around roles, resources, tenant boundaries, and server-side enforcement with tests.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "Secure Authentication & Role-Based Access Control | Syed Hassan Ali",
      description:
        "Build sign-in, roles, and permissions that fit how your product and teams actually work.",
      keywords: [
        "role based access control SaaS",
        "secure user authentication development",
        "multi tenant permissions",
      ],
      canonicalPath: "/case-studies/secure-access-permissions",
    },

    relatedSlugs: [
      "application-security-hardening",
      "saas-mvp-launch",
      "client-project-portal",
    ],
  },
];
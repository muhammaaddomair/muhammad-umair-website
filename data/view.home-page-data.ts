import aboutMeImage from "../public/images/home-about-me.png";

export const showcaseSectionData = [
  "/images/projects/project-01.webp",
  "/images/projects/project-02.webp",
  "/images/projects/project-03.webp",
  "/images/projects/project-04.webp",
  "/images/projects/project-05.webp",
  "/images/projects/project-06.webp",
  "/images/projects/project-07.webp",
  "/images/projects/project-08.webp",
  "/images/projects/project-09.webp",
  "/images/projects/project-10.webp",
  "/images/projects/project-11.webp",
  "/images/projects/project-12.webp",
  "/images/projects/project-13.webp",
  "/images/projects/project-14.webp",
  "/images/projects/project-15.webp",
  "/images/projects/project-16.webp",
  "/images/projects/project-17.webp",
  "/images/projects/project-18.webp",
] as const;

export const expertiseSectionData = [
  {
    id: "full-stack",
    number: "01",
    title: "Websites, Apps & SaaS",
    description:
      "I build custom websites, web apps, dashboards, and SaaS products tailored to your business and customers.",
    service: "Launch Your Idea or Improve Your Website",
    symbol: "growth",
    tone: "graphite",
  },
  {
    id: "ai-automation",
    number: "02",
    title: "AI & Business Automation",
    description:
      "I automate repetitive tasks, connect your tools, and create AI assistants to handle leads, customer inquiries, and daily work.",
    service: "Save Time & Get More Done",
    symbol: "efficiency",
    tone: "secondary",
  },
  {
    id: "backend-cloud",
    number: "03",
    title: "Backend, Cloud & Integrations",
    description:
      "I handle servers, databases, APIs, and integrations so your apps run smoothly and your tools work together.",
    service: "Keep Everything Running Reliably",
    symbol: "revenue",
    tone: "muted",
  },
  {
    id: "security-reliability",
    number: "04",
    title: "Cybersecurity & Protection",
    description:
      "I find security weaknesses, strengthen logins, and secure applications and servers to help protect your business and data.",
    service: "Reduce Risks & Protect Your Data",
    symbol: "protection",
    tone: "accent",
  },
] as const;

export const aboutMeSectionData01 = [
  {
    id: "about-01",
    image: aboutMeImage,
    number: "01",
    title: "Meet Hassan.",
    subtitle: "Your developer, from idea to launch.",
    description:
      "I'm Hassan, a full-stack software engineer based in Pakistan. I work with founders and businesses to turn ideas into working software, handling everything from development to launch while keeping communication clear and simple.",
    tags: ["About"],
  },
  {
    id: "about-02",
    number: "02",
    title: "Where I've Worked",
    subtitle: "From writing code to leading projects.",
    description:
      "I've worked with Prime Hieve Digital, Zevitech, EFU Life Insurance, and other companies & startups developing business software, AI automation, and internal tools. My roles have grown from hands-on development to leading projects and taking responsibility for delivery.",
    descriptionHighlights: [
      "Prime Hieve Digital",
      "Zevitech",
      "EFU Life Insurance",
      "other companies & startups",
    ],
    tags: ["Experience"],
  },
  {
    id: "about-03",
    content: "tech-stack",
    number: "03",
    title: "My Tech Stack",
    subtitle: "The tools I use to get things done.",
    description:
      "I work with the technologies behind modern websites, SaaS products, AI automation, cloud infrastructure, and security, from development through deployment and ongoing maintenance.",
    tags: ["Technology"],
  },
  {
    id: "about-04",
    number: "04",
    title: "How I Work.",
    subtitle: "No guesswork. No unnecessary complexity.",
    description:
      "I take time to understand your goals, recommend what makes sense, and keep you involved throughout the project. My focus is on practical solutions, clear communication, and work you can rely on.",
    tags: ["Approach"],
  },
  // {
  //   id: "about-05",
  //   number: "05",
  //   title: "A Quick Hello.",
  //   subtitle: "Get to know me in 40 seconds.",
  //   description:
  //     "A short video so you can put a face and voice to the person you might be working with.",
  //   tags: ["Video"],
  // },
] as const;

export const aboutMeSectionData02 = [
  {
    category: "Frontend Development",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "HTML5",
      "CSS3",
      "Sass",
      "GSAP",
      "Three.js",
      "Framer",
      "React Native",
      "Flutter",
      "Expo",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    category: "Backend Development & APIs",
    technologies: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "FastAPI",
      "Laravel",
      "GraphQL",
      "REST API",
      "WebSocket",
    ],
  },
  {
    category: "Artificial Intelligence & LLMs",
    technologies: [
      "OpenAI",
      "Claude (Anthropic)",
      "Google Gemini",
      "Grok (xAI)",
      "Meta Llama",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "Whisper",
      "ElevenLabs",
      "Flowise",
      "ComfyUI",
      "Zep",
    ],
  },
  {
    category: "AI Automation & Workflow Platforms",
    technologies: ["n8n", "Make", "Zapier"],
  },
  {
    category: "Databases, Vector Databases & Search",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Pinecone",
      "Weaviate",
      "Qdrant",
      "Supabase",
    ],
  },
  {
    category: "Cloud, Hosting & Infrastructure",
    technologies: [
      "Amazon Web Services (AWS)",
      "Google Cloud",
      "DigitalOcean",
      "Hetzner",
      "Contabo",
      "Vercel",
      "Cloudflare",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Linux",
    ],
  },
  {
    category: "DevOps, CI/CD & Infrastructure as Code",
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "GitHub Actions",
      "Jenkins",
      "Terraform",
      "Ansible",
    ],
  },
  {
    category: "Cybersecurity & Penetration Testing",
    technologies: [
      "Kali Linux",
      "Metasploit",
      "Burp Suite",
      "OWASP",
      "Nessus",
      "Nmap",
      "Wireshark",
    ],
  },
  {
    category: "Monitoring, Observability & Reliability",
    technologies: ["Prometheus", "Grafana", "Sentry", "Zabbix", "Uptime Kuma"],
  },
  {
    category: "Mobile Development & Platforms",
    technologies: ["iOS", "Android"],
  },
  {
    category: "CMS, E-commerce & Website Platforms",
    technologies: ["WordPress", "WooCommerce", "Shopify"],
  },
  {
    category: "Email Infrastructure & Delivery",
    technologies: [
      "Zoho Mail",
      "Postfix",
      "OpenDKIM",
      "Mailgun",
      "SendGrid",
      "Resend",
    ],
  },
  {
    category: "Payments, CRM & Business Integrations",
    technologies: ["Stripe", "Twilio", "Airtable", "HubSpot", "Salesforce"],
  },
  {
    category: "Design, Development & Productivity",
    technologies: [
      "Figma",
      "VS Code",
      "Notion",
      "ClickUp",
      "Slack",
      "Linear",
      "Trello",
      "Discord",
    ],
  },
  {
    category: "Additional Tools & Protocols",
    technologies: ["SSH", "Apple"],
  },
] as const;

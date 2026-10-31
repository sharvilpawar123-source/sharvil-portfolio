export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI & Data Science' | 'Full Stack' | 'Data Analytics' | 'Web App';
  visualType: 'graph' | 'dashboard' | 'traffic' | 'analytics' | 'code';
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

export interface Achievement {
  stat: string;
  label: string;
  sublabel: string;
  description: string;
  badge?: string;
  verified: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeType: string;
  issueDate: string;
  category: 'AI Security' | 'Responsible AI' | 'MLOps' | 'Generative AI';
  skills: string[];
  description: string;
  verificationBadge: string;
}

export const portfolioData = {
  personal: {
    name: "SHARVIL PAWAR",
    shortName: "SP",
    role: "AI & DATA SCIENCE ENGINEER",
    degree: "B.E. Artificial Intelligence & Data Science",
    college: "Pune Institute of Computer Technology (PICT), Pune",
    year: "2nd Year Engineering Student",
    location: "Pune, Maharashtra, India",
    status: "OPEN TO OPPORTUNITIES",
    email: "sharvilpawar123@gmail.com",
    resumeUrl: "/sharvil_resume.pdf",
    tagline: "BUILDING INTELLIGENT SYSTEMS.",
    subTagline: "I build intelligent, data-driven applications and full-stack platforms that solve real-world problems.",
    aboutHeading: "WHO I AM",
    aboutStatement: "I don't just write code. I build systems that transform complex data into impactful digital solutions.",
    aboutBio: [
      "I am an Artificial Intelligence & Data Science engineering student at PICT Pune, deeply passionate about algorithmic problem solving, machine learning, and modern software development.",
      "My work spans from graph-based analytical platforms and AI event ecosystems to multi-variable carbon emission models and data analysis pipelines. I thrive on translating abstract theoretical concepts into practical, performant software.",
      "With a strong foundation in C++, Python, and full-stack JavaScript, I constantly explore emerging technologies like Generative AI, Agentic workflows, and network analytics to create high-value applications."
    ]
  },

  socials: {
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sharvil-pawar-23b04b375/",
      handle: "sharvil-pawar-23b04b375",
      type: "PROFESSIONAL"
    },
    github: {
      name: "GitHub",
      url: "https://github.com/sharvilpawar123-source",
      handle: "sharvilpawar123-source",
      type: "CODE & REPOS"
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/sharvil_pawar_04/",
      handle: "@sharvil_pawar_04",
      type: "PERSONAL"
    }
  },

  stats: [
    { value: "9.8", label: "FIRST SEMESTER SGPA", subtext: "PICT Pune Academic Record" },
    { value: "5★", label: "HACKERRANK C++", subtext: "Gold Badge in Problem Solving" },
    { value: "DSA", label: "LEARNING DSA", subtext: "Data Structures & Algorithms" },
    { value: "2nd", label: "YEAR AI & DS", subtext: "Pune Institute of Computer Tech" }
  ],

  skillCategories: [
    {
      title: "LANGUAGES",
      iconName: "Code2",
      skills: [
        { name: "C++", level: "Advanced", description: "DSA, OOPs, Memory management, Competitive Problem Solving" },
        { name: "Python", level: "Advanced", description: "Data structures, AI/ML pipelines, Pandas, NumPy, Data analysis" },
        { name: "JavaScript", level: "Proficient", description: "ES6+, Async programming, DOM, Web applications" },
        { name: "TypeScript", level: "Intermediate", description: "Type safety, Interface design, React state integration" },
        { name: "SQL", level: "Intermediate", description: "Database querying, Relational joins, Schema design" }
      ]
    },
    {
      title: "DATA & AI / ML",
      iconName: "BrainCircuit",
      skills: [
        { name: "Pandas & NumPy", level: "Advanced", description: "High-performance data manipulation, matrix computations" },
        { name: "Matplotlib & Seaborn", level: "Proficient", description: "Data visualization, statistical plots, exploratory analysis" },
        { name: "Machine Learning", level: "Intermediate", description: "Supervised algorithms, model evaluation, feature engineering" },
        { name: "Graph Analytics", level: "Intermediate", description: "Network topology, centrality algorithms, relationship mapping" },
        { name: "Generative AI", level: "Learning", description: "Gemini API integration, LLM prompt engineering, AI agents" }
      ]
    },
    {
      title: "FRONTEND DEVELOPMENT",
      iconName: "Layout",
      skills: [
        { name: "React.js", level: "Proficient", description: "Component architecture, hooks, state management, SPA" },
        { name: "Tailwind CSS", level: "Advanced", description: "Utility-first design systems, responsive dark/light UIs" },
        { name: "Framer Motion", level: "Intermediate", description: "Smooth micro-animations, layout transitions, scroll animations" },
        { name: "HTML5 / CSS3", level: "Advanced", description: "Semantic markup, CSS Grid, Flexbox, Glassmorphism" }
      ]
    },
    {
      title: "BACKEND & DATABASES",
      iconName: "Server",
      skills: [
        { name: "Node.js", level: "Proficient", description: "Server-side JavaScript, event loop, asynchronous IO" },
        { name: "Express.js", level: "Proficient", description: "RESTful API creation, middleware, route handling" },
        { name: "MongoDB", level: "Proficient", description: "NoSQL document store, aggregation frameworks, Mongoose" },
        { name: "Socket.IO", level: "Intermediate", description: "Real-time bidirectional event-based communication" }
      ]
    },
    {
      title: "TOOLS & DEPLOYMENT",
      iconName: "Wrench",
      skills: [
        { name: "Git & GitHub", level: "Advanced", description: "Version control, branching strategy, collaborative workflow" },
        { name: "VS Code", level: "Advanced", description: "Primary IDE, debugging, extension configuration" },
        { name: "Jupyter Notebook", level: "Advanced", description: "Interactive data exploratory research & model testing" },
        { name: "Postman", level: "Intermediate", description: "API endpoint testing, payload validation, documentation" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "criminal-network-analysis",
      number: "01",
      title: "AI-POWERED CRIMINAL NETWORK ANALYSIS SYSTEM",
      tagline: "Investigator decision-support platform for large-scale relationship topology & structural entity identification.",
      description: "An academic prototype platform designed to analyze crime data graphs, uncover hidden associations, and highlight structurally critical nodes within complex networks.",
      longDescription: "The AI-Powered Criminal Network Analysis System is an investigator decision-support prototype built to explore relationships in complex data structures. Using graph analytics algorithms and machine learning patterns, it identifies key network hubs, potential gang clusters, and anomalous connectivity.",
      problem: "Traditional investigation spreadsheets make it difficult to visualize multi-tier connections and compute centrality metrics across thousands of relational entities.",
      solution: "Engineered an interactive graph analytics platform featuring dynamic node visualizers, shortest-path algorithms, and automated hub detection to assist analytical decision making.",
      technologies: ["AI", "Machine Learning", "Graph Analytics", "React", "Node.js", "MongoDB"],
      keyFeatures: [
        "Interactive node-link relationship visualizer",
        "Degree & eigenvector centrality computation",
        "Cluster & hidden pattern detection algorithms",
        "Academic & hackathon investigative prototype interface"
      ],
      githubUrl: "https://github.com/sharvilpawar123-source",
      category: "AI & Data Science",
      visualType: "graph",
      featured: true
    },
    {
      id: "eventsphere-ai",
      number: "02",
      title: "EVENTSPHERE AI",
      tagline: "AI-powered event management platform with real-time analytics & QR attendance.",
      description: "A comprehensive web ecosystem for event planning, volunteer allocation, instant QR registration, real-time analytics, and Gemini AI query assistance.",
      longDescription: "EventSphere AI streamlines event organization for college hackathons and summits. It features instant QR code pass scanning, live attendance tracking via Socket.IO, role-based admin controls, and an integrated Gemini AI assistant for attendee inquiries.",
      problem: "Event organizers face bottlenecks in manual check-ins, fragmented volunteer coordination, and lack of real-time attendance analytics.",
      solution: "Constructed a real-time full-stack solution integrating Socket.IO live updates, automated QR code generator/scanner, and Gemini API smart query support.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Gemini API"],
      keyFeatures: [
        "Automated QR code ticket generation & instant camera scanning",
        "Live attendance analytics dashboard with Socket.IO",
        "Role-based access (Organizers, Volunteers, Attendees)",
        "Gemini AI intelligent event Q&A chatbot"
      ],
      githubUrl: "https://github.com/sharvilpawar123-source",
      category: "Full Stack",
      visualType: "dashboard",
      featured: true
    },
    {
      id: "carbon-footprint-analysis",
      number: "03",
      title: "TRANSPORTATION & CARBON FOOTPRINT ANALYSIS",
      tagline: "Data-driven statistical modeling of vehicle density, traffic pattern dynamics, and carbon emissions.",
      description: "An analytical study modeling urban traffic flow, signal timing parameters, and vehicle emissions using Python data science libraries.",
      longDescription: "This project examines the impact of urban traffic congestion on localized carbon output. By processing multi-variable transportation metrics using Pandas and NumPy, the model correlates signal delays with emissions spikes to suggest optimized routing strategies.",
      problem: "Urban traffic congestion leads to idle engine running, causing localized surges in CO2 emissions that standard static traffic models fail to capture.",
      solution: "Developed a Python data pipeline to clean, correlate, and visualize traffic density dataset parameters against calculated carbon emission rates.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis", "Machine Learning"],
      keyFeatures: [
        "Multi-variable statistical correlation analysis",
        "Automated traffic delay emission estimator",
        "Matplotlib visual charts and trend distribution plots",
        "Data-backed urban traffic optimization insights"
      ],
      githubUrl: "https://github.com/sharvilpawar123-source",
      category: "Data Analytics",
      visualType: "traffic",
      featured: true
    },
    {
      id: "anime-eda-project",
      number: "04",
      title: "ANIME EXPLORATORY DATA ANALYSIS",
      tagline: "Deep statistical EDA and visual trend modeling on global anime datasets.",
      description: "An exploratory data science project uncovering distribution trends, rating correlations, and genre evolution using Python, Pandas, and Matplotlib.",
      longDescription: "A thorough data analysis project performing rigorous data cleaning, missing value imputation, and statistical distribution modeling across thousands of anime titles to identify historical scoring trends and demographic preferences.",
      problem: "Unstructured multimedia rating datasets contain noise, missing values, and skewed distributions that require multi-stage preprocessing before drawing statistical conclusions.",
      solution: "Built clean Jupyter notebook exploratory workflows analyzing genre correlations, studio release cycles, and score variance.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
      keyFeatures: [
        "Rigorous data cleaning and missing value handling",
        "Genre score distribution & correlation heatmap visuals",
        "Release year vs rating trend analysis",
        "Comprehensive statistical summary outputs"
      ],
      githubUrl: "https://github.com/sharvilpawar123-source/Anime-EDA-Project",
      category: "Data Analytics",
      visualType: "analytics",
      featured: true
    },
    {
      id: "country-data-analysis",
      number: "05",
      title: "COUNTRY DATA ANALYSIS PROJECT",
      tagline: "Multi-domain global socio-economic dataset exploratory insights engine.",
      description: "A real-world country data analytical model using Python, Pandas, and NumPy to extract macroeconomic metrics and geographic trends.",
      longDescription: "An exploratory analysis project evaluating global indicators such as GDP per capita, population density, literacy rates, and life expectancy to uncover macro socio-economic relationships.",
      problem: "Disparate country-level socio-economic datasets often have inconsistent formatting and varying indicators.",
      solution: "Standardized data schemas, normalized indicators, and created multi-axis correlation plots for global insight extraction.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
      keyFeatures: [
        "Global indicator normalization & data cleaning",
        "Macro-economic factor correlation analysis",
        "Multi-country metric comparison visual plots"
      ],
      githubUrl: "https://github.com/sharvilpawar123-source/Country-Data-Analysis-Project-",
      category: "Data Analytics",
      visualType: "analytics",
      featured: false
    }
  ] as Project[],

  journey: [
    {
      year: "2026",
      title: "Btech - Engineering - AI & DS Focus",
      organization: "PICT, Pune",
      role: "B.Tech AI & Data Science // Undergrad Engineer",
      description: "Pursuing B.Tech in Artificial Intelligence & Data Science at PICT Pune. Deepening core expertise in Machine Learning algorithms, Graph Analytics, Database Management Systems, and Advanced Data Structures while engineering intelligent systems and production-grade prototypes.",
      tags: ["B.Tech Engineering", "Machine Learning", "Graph Theory", "DBMS", "C++ DSA"],
      highlight: true
    },
    {
      year: "2025",
      title: "CSI Python Special Interest Group (SIG) 2025",
      organization: "Computer Society of India (CSI) PICT",
      role: "Member & Technical Contributor",
      description: "Contributed to official repository materials covering Python fundamentals, Data Science pipelines, Machine Learning techniques, Generative AI, and Agentic AI workflows.",
      tags: ["Python", "AI", "GenAI", "Data Science", "CSI PICT"],
      highlight: true
    },
    {
      year: "2025",
      title: "First Semester SGPA 9.8 / 10 & Core Foundations",
      organization: "PICT, Pune",
      role: "Undergraduate Student",
      description: "Achieved an exemplary 9.8/10 SGPA in the first semester at Pune Institute of Computer Technology while strengthening core engineering concepts in C++ and Object-Oriented Programming.",
      tags: ["Academic Excellence", "C++", "SGPA 9.8", "PICT Pune"],
      highlight: false
    },
    {
      year: "2025",
      title: "HackerRank C++ 5-Star Gold Badge",
      organization: "HackerRank Platform",
      role: "Competitive Programmer",
      description: "Earned the 5-Star Gold Badge in C++ on HackerRank by solving complex algorithmic challenges and optimizing code performance.",
      tags: ["Competitive Programming", "C++", "HackerRank Gold"],
      highlight: false
    }
  ] as JourneyMilestone[],

  achievements: [
    {
      stat: "9.8 / 10",
      label: "FIRST SEMESTER SGPA",
      sublabel: "PICT Pune Academic Distinction",
      description: "Demonstrated academic rigor and conceptual clarity across foundational engineering, mathematics, and programming courses.",
      verified: true
    },
    {
      stat: "5★ GOLD",
      label: "HACKERRANK C++",
      sublabel: "Problem Solving Credential",
      description: "Achieved top 5-star rating in C++ programming by consistently demonstrating mastery over algorithms, pointers, and memory mechanics.",
      verified: true
    },
    {
      stat: "CSI SIG",
      label: "PYTHON SIG 2025",
      sublabel: "Technical Society Activity",
      description: "Selected member and repository contributor for the prestigious CSI Python Special Interest Group at PICT Pune.",
      verified: true
    },
    {
      stat: "100%",
      label: "AUTHENTIC BUILDER",
      sublabel: "Real Repositories & Projects",
      description: "All projects documented on GitHub reflect genuine code, data analysis scripts, and functional full-stack web applications.",
      verified: true
    }
  ] as Achievement[],

  education: {
    institution: "PUNE INSTITUTE OF COMPUTER TECHNOLOGY (PICT)",
    shortLocation: "Pune, Maharashtra, India",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Artificial Intelligence and Data Science",
    duration: "2025 – 2029",
    sgpa: "9.8 / 10 (Semester I)",
    highlights: [
      "Specializing in Machine Learning, Statistical Data Mining, Data Structures & Algorithms",
      "Active participant in PICT CSI (Computer Society of India) technical SIGs",
      "Strong background in Object Oriented Programming, C++, Python, and Web Development"
    ]
  },

  certifications: [
    {
      id: "model-armor-securing-ai",
      title: "Model Armor: Securing AI Deployments",
      issuer: "Google Cloud",
      badgeType: "Completion Badge",
      issueDate: "Earned Oct 23, 2026 EDT",
      category: "AI Security",
      skills: ["Model Armor", "Adversarial Robustness", "LLM Guardrails", "API Security"],
      description: "Demonstrates practical competency in deploying Google Cloud Model Armor to protect production AI models against prompt injection, data extraction, and model poisoning attacks.",
      verificationBadge: "VERIFIED GOOGLE CLOUD CREDENTIAL"
    },
    {
      id: "intro-security-world-of-ai",
      title: "Introduction to Security in the World of AI",
      issuer: "Google Cloud",
      badgeType: "Completion Badge",
      issueDate: "Earned Oct 23, 2026 EDT",
      category: "AI Security",
      skills: ["AI Threat Modeling", "Pipeline Hardening", "Infrastructure Security", "Zero Trust AI"],
      description: "Comprehensive credential covering threat vectors across the entire artificial intelligence lifecycle, from data ingestion to hosted inference endpoints.",
      verificationBadge: "VERIFIED GOOGLE CLOUD CREDENTIAL"
    },
    {
      id: "responsible-ai-privacy-safety",
      title: "Responsible AI for Developers: Privacy & Safety",
      issuer: "Google Cloud",
      badgeType: "Completion Badge",
      issueDate: "Earned Oct 23, 2026 EDT",
      category: "Responsible AI",
      skills: ["Data Privacy", "Differential Privacy", "PII Redaction", "Content Safety Filters"],
      description: "Validates technical implementation of privacy-preserving machine learning, differential privacy principles, and safety boundaries for public-facing AI applications.",
      verificationBadge: "VERIFIED GOOGLE CLOUD CREDENTIAL"
    },
    {
      id: "responsible-ai-interpretability-transparency",
      title: "Responsible AI for Developers: Interpretability & Transparency",
      issuer: "Google Cloud",
      badgeType: "Completion Badge",
      issueDate: "Earned Oct 23, 2026 EDT",
      category: "Responsible AI",
      skills: ["Explainable AI (XAI)", "Feature Attribution", "Model Cards", "SHAP/LIME Analysis"],
      description: "Mastery of Explainable AI (XAI) frameworks to understand neural decision boundaries, interpret complex model predictions, and publish transparent documentation.",
      verificationBadge: "VERIFIED GOOGLE CLOUD CREDENTIAL"
    },
    {
      id: "responsible-ai-fairness-bias",
      title: "Responsible AI for Developers: Fairness & Bias",
      issuer: "Google Cloud",
      badgeType: "Completion Badge",
      issueDate: "Earned Oct 23, 2026 EDT",
      category: "Responsible AI",
      skills: ["Bias Auditing", "Fairness Metrics", "Disparate Impact Mitigation", "Dataset Representation"],
      description: "Covers algorithmic fairness evaluation, identifying hidden societal biases in training corpora, and implementing post-processing mitigation routines.",
      verificationBadge: "VERIFIED GOOGLE CLOUD CREDENTIAL"
    },
    {
      id: "mlops-agent-platform-model-evaluation",
      title: "Machine Learning Operations (MLOps) with Agent Platform: Model Evaluation",
      issuer: "Google Cloud",
      badgeType: "Completion Badge",
      issueDate: "Earned Oct 23, 2026 EDT",
      category: "MLOps",
      skills: ["Agent Platform", "Continuous Evaluation", "Benchmark Suites", "Automated Validation"],
      description: "Specialized in operationalizing automated model testing, continuous performance drift tracking, and benchmarking autonomous agents on Google Cloud Agent Platform.",
      verificationBadge: "VERIFIED GOOGLE CLOUD CREDENTIAL"
    },
    {
      id: "mlops-for-generative-ai",
      title: "Machine Learning Operations (MLOps) for Generative AI",
      issuer: "Google Cloud",
      badgeType: "Completion Badge",
      issueDate: "Earned Oct 23, 2026 EDT",
      category: "Generative AI",
      skills: ["GenAI Pipelines", "Prompt Engineering Ops", "RLHF Tracking", "Foundation Model Serving"],
      description: "Architecting end-to-end continuous integration and deployment pipelines specifically engineered for LLMs, prompt orchestration, and GenAI applications at scale.",
      verificationBadge: "VERIFIED GOOGLE CLOUD CREDENTIAL"
    }
  ] as Certification[]
};

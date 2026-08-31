export const navbarDetails = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const personalInfo = {
  initials: "NP",
  name: "Narrendran Poorangavel",
};

export const siteConfig = {
  name: "Narrendran Poorangavel",
  title: "Narrendran Poorangavel | Full Stack Developer",
  description:
    "Portfolio of Narrendran Poorangavel, a Full Stack Developer building fast, responsive and user-friendly web applications.",
  initials: "NP",
  // you can add more later (twitter, ogImage, etc.)
};

export const homeDetails = {
  greeting: "Hi, I'm",
  name: "NARRENDRAN POORANGAVEL",
  title: "Junior Full Stack Developer",
  titles: ["React & TypeScript Developer", "Node.js Developer", "Full Stack Engineer", "Web Application Developer", "MERN Stack Developer", "Software Developer", "Full Stack Developer"],
  description:
    "I build full-stack web applications and ERP solutions using React.js, TypeScript, NestJS, REST APIs, Redux Saga, and MongoDB.",
  primaryCta: "View My Work",
  secondaryCta: "Download Resume",
  resumeUrl: "/resume.pdf",
  resumeName: "Narrendran Poorangavel - Full Stack Developer.pdf",

  // Labels that will appear inside the cubes
  cubeLabels: [
    { top: "Client", bottom: "React" },
    { top: "Server", bottom: "NestJS" },
    { top: "Database", bottom: "MongoDB" },
    { top: "Middleware", bottom: "Redux-Saga" },
  ],
};

export const aboutDetails = {
  eyebrow: "GET TO KNOW ME",
  title: "About Me",
  paragraphs: [
    "I'm a Junior Full Stack Developer with professional experience building full-stack ERP applications using React.js, TypeScript, Redux, Redux Saga, NestJS, REST APIs, and MongoDB. I enjoy developing scalable applications, implementing complex business workflows, and turning requirements into reliable software solutions.",
    "I've developed and integrated ERP modules end-to-end across frontend interfaces, backend services, database schemas, and business workflows. I'm passionate about problem solving, writing maintainable code, learning new technologies, and continuously improving my development skills.",
  ],
  info: [
    { icon: "WorkOutline", label: "Experience", value: "1+ Year" },
    { icon: "LocationOnOutlined", label: "Location", value: "Dindigul, Tamil Nadu, India" },
    { icon: "Language", label: "Languages", value: "Tamil, English, Hindi" },
    { icon: "PersonOutline", label: "Role", value: "Junior Full Stack Developer" },
  ],
  resumeUrl: "/resume.pdf",
  resumeName: "Narrendran Poorangavel - Full Stack Developer.pdf",
};

export const skillsDetails = {
  eyebrow: "WHAT I DO",
  title: "My Skills",
  description:
    "I develop scalable and maintainable web applications using modern frontend, backend, database, and API technologies.",

  showPercentage: false,
  // Set showBar to true/false to show/hide the skill progress bars
  showBar: true,
  categories: ["ALL", "FRONTEND", "BACKEND", "DATABASE", "TOOLS", "OTHERS"] as const,
  skills: [
    { name: "HTML5", category: "FRONTEND", level: 90, icon: "Html" },
    { name: "CSS3", category: "FRONTEND", level: 85, icon: "Css" },
    { name: "JavaScript", category: "FRONTEND", level: 90, icon: "Javascript" },
    { name: "TypeScript", category: "FRONTEND", level: 90, icon: "Code" },
    { name: "React.js", category: "FRONTEND", level: 90, icon: "Code" },
    // { name: "Redux", category: "FRONTEND", level: 85, icon: "Code" },
    { name: "Redux / State Management", category: "FRONTEND", level: 85, icon: "Code" },
    { name: "Responsive UI/UX", category: "FRONTEND", level: 80, icon: "Code" },
    { name: "NestJS", category: "BACKEND", level: 85, icon: "Code" },
    { name: "REST APIs", category: "BACKEND", level: 90, icon: "Api" },
    // { name: "JWT Authentication", category: "BACKEND", level: 80, icon: "Security" },
    { name: "MongoDB", category: "DATABASE", level: 85, icon: "Storage" },
    { name: "Mongoose", category: "DATABASE", level: 85, icon: "Storage" },
    { name: "MySQL", category: "DATABASE", level: 60, icon: "Storage" },
    { name: "Git & GitHub", category: "TOOLS", level: 85, icon: "GitHub" },
    // { name: "Axios", category: "TOOLS", level: 85, icon: "Code" },
    { name: "Postman", category: "TOOLS", level: 80, icon: "Api" },
    { name: "Zoho CRM", category: "OTHERS", level: 75, icon: "Business" },
    { name: "Deluge", category: "OTHERS", level: 75, icon: "Code" },
    { name: "Python", category: "OTHERS", level: 60, icon: "Code" },
    { name: "Java", category: "OTHERS", level: 55, icon: "Code" },
  ],
};

export const expertiseConfig = {
  title: "MY EXPERTISE",
  // Set showPercentage to true/false to show/hide the % numbers in the expertise section
  showPercentage: false,
  // Set showBar to true/false to show/hide the expertise progress bars
  showBar: true,
};

export const expertiseDetails = [
  { name: "Frontend Development", level: 90, icon: "DesktopWindows" },
  { name: "Backend Development", level: 85, icon: "Dns" },
  { name: "API Development", level: 90, icon: "Api" },
  { name: "Database Management", level: 85, icon: "Storage" },
  { name: "ERP Development", level: 90, icon: "AccountTree" },
  { name: "Problem Solving", level: 90, icon: "Lightbulb" },
  { name: "Code Quality", level: 85, icon: "Verified" },
];

export const expertiseIntro =
  "I focus on building scalable, maintainable and business-driven applications while solving complex technical and workflow requirements.";

export const projectsDetails = {
  eyebrow: "MY WORK",
  title: "Featured Projects",
  categories: ["ALL", "FRONTEND", "BACKEND"] as const,
  subtitle: "Explore my latest work and contributions",
  projects: [
    {
      id: "erp-hrms",
      name: "ERP & HRMS Management System",
      eyebrow: "FULL STACK ERP & HRMS",
      featured: true,
      description:
        "A modular full-stack ERP and HRMS application developed with React.js, TypeScript, Redux, Redux Saga, NestJS, REST APIs, MongoDB, and Mongoose. Contributed across frontend, backend, and database layers to develop business workflows for employee, product, customer, sales, inventory, leave, attendance, payroll, team, and permission management.",
      features: [
        "Employee and team management",
        "Product, customer, and order management",
        "Leave and attendance management",
        "Payroll management",
        "Role-based permission management",
        "Authentication and authorization",
        "Validation and business logic",
        "Reusable frontend components",
        "Standardized list, detail, and form views",
        "Sorting and pagination",
        "Dynamic order statuses and leave types",
        "REST API integration",
        "MongoDB and Mongoose integration",
      ],
      category: ["FRONTEND", "BACKEND"],
      tech: [
        "React.js",
        "TypeScript",
        "Redux",
        "Redux Saga",
        "NestJS",
        "REST APIs",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Axios",
        "MUI",
      ],
      image: "/projects/erp-hrms.jpg",
      icon: "BusinessCenter",          // ← added
      liveDemo: "",
      github: "",
      modules: [
        "Employee",
        // "Product",
        "Customer",
        "Orders",
        "Sales",
        "Inventory",
        "Leave",
        // "Attendance",
        "Payroll",
        "Teams",
        // "Permissions",
      ],
    },
    {
      id: "stock-restructuring",
      name: "Stock Restructuring & Implementation",
      eyebrow: "ERP MODULE",
      featured: false,
      description:
        "Re-engineered and implemented the ERP stock structure by restructuring inventory quantities into Physical Stock, Quantity on Hand, Committed Stock, and Transit Quantity, along with the required backend and database changes.",
      features: [
        "Stock structure re-engineering",
        "Stock implementation",
        "Physical Stock implementation",
        "Quantity on Hand implementation",
        "Committed Stock implementation",
        "Transit Quantity implementation",
        "MongoDB schema restructuring",
        "Backend service updates",
        "Stock calculation and business logic",
        "Integration with dependent ERP modules",
      ],
      category: ["FRONTEND", "BACKEND"],
      tech: [
        "React",
        "TypeScript",
        "NestJS",
        "REST APIs",
        "MongoDB",
        "Mongoose",
      ],
      image: "/projects/stock-restructuring.jpg",
      icon: "Inventory",               // ← added
      liveDemo: "",
      github: "",
      modules: [
        "Physical Stock",
        "Quantity on Hand",
        "Committed Stock",
        "Transit Quantity",
        "Stock",
        "Inventory",
      ],
    },
    {
      id: "inventory-transit",
      name: "Inventory & Transit Management",
      eyebrow: "ERP MODULE",
      featured: false,
      description:
        "Developed the ERP Transit module for managing product movement between warehouses and integrated transit quantities with the restructured inventory system.",
      features: [
        "Transit module development",
        "Warehouse-to-warehouse product movement",
        "Transit quantity management",
        "Inventory movement tracking",
        "Warehouse stock integration",
        "Transit stock updates",
        "Backend service implementation",
        "REST API integration",
        "Integration with dependent ERP modules",
      ],
      category: ["FRONTEND", "BACKEND"],
      tech: [
        "React",
        "TypeScript",
        "NestJS",
        "REST APIs",
        "MongoDB",
        "Mongoose",
      ],
      image: "/projects/inventory-transit.jpg",
      icon: "LocalShipping",           // ← added
      liveDemo: "",
      github: "",
      modules: [
        "Transit",
        "Warehouses",
        "Transit Quantity",
        "Inventory",
        "Stock",
      ],
    },
    {
      id: "sales-management",
      name: "Sales & Returns Management",
      eyebrow: "ERP MODULE",
      featured: false,
      description:
        "Developed and integrated Sales Shipment and Sales Return workflows within the ERP system, implementing order validation, warehouse stock updates, return processing, and frontend-backend integration.",
      features: [
        "Sales Shipment workflow",
        "Sales Return workflow",
        "Partial shipment validation",
        "Sales Order quantity validation",
        "Prevention of excess shipments",
        "Physical stock updates",
        "Committed stock updates",
        "Return-related stock processing",
        "Warehouse stock management",
        "REST API integration",
        "Frontend and backend integration",
      ],
      category: ["FRONTEND", "BACKEND"],
      tech: [
        "React",
        "TypeScript",
        "Redux",
        "Redux Saga",
        "NestJS",
        "REST APIs",
        "MongoDB",
        "Mongoose",
      ],
      image: "/projects/sales-management.jpg",
      icon: "PointOfSale",             // ← added
      liveDemo: "",
      github: "",
      modules: [
        "Sales Order",
        "Sales Shipment",
        "Sales Return",
        "Validation",
        "Physical Stock",
        "Committed Stock",
        "Warehouse",
      ],
    },
    {
      id: "audit-trail",
      name: "Audit Trail",
      eyebrow: "ERP MODULE",
      featured: false,
      description:
        "Built an end-to-end Audit Trail system to track modifications across ERP modules, including the user, module, field, previous value, and updated value associated with each change.",
      features: [
        "User-based filtering",
        "Module-based filtering",
        "Date-based filtering",
        "Modification tracking",
        "Old and new value comparison",
        "Field-level change detection",
        "Configurable metadata exclusion",
        "Reusable change-detection utility",
        "Historical change tracking",
      ],
      category: ["FRONTEND", "BACKEND"],
      tech: [
        "React",
        "TypeScript",
        "Redux Saga",
        "NestJS",
        "MongoDB",
        "Mongoose",
      ],
      image: "/projects/audit-trail.jpg",
      icon: "History",                 // ← added
      liveDemo: "",
      github: "",
      modules: [
        "Audit Trail",
        "User",
        "Module",
        "Change Detection",
        "Change History",
      ],
    },
    {
      id: "purchase-goods-receipt",
      name: "Purchase & Goods Receipt",
      eyebrow: "ERP MODULE",
      featured: false,
      description:
        "Contributed to Purchase Receipt and Goods Receipt workflows, implementing frontend functionality, backend services, REST API integration, and stock-related integration across dependent ERP modules.",
      features: [
        "Purchase workflow development",
        "Purchase Receipt development",
        "Goods Receipt development",
        "Stock-related integrations",
        "REST API integration",
        "Backend service integration",
        "ERP module integration",
      ],
      category: ["FRONTEND", "BACKEND"],
      tech: [
        "React",
        "TypeScript",
        "NestJS",
        "REST APIs",
        "MongoDB",
        "Mongoose",
      ],
      image: "/projects/purchase-goods-receipt.jpg",
      icon: "ShoppingCart",            // ← added
      liveDemo: "",
      github: "",
      modules: [
        "Purchase",
        "Purchase Receipt",
        "Goods Receipt",
        "Stock",
        "Inventory",
      ],
    },
  ],
};

export const experienceDetails = {
  eyebrow: "MY JOURNEY",
  title: "Work Experience",
  items: [
    {
      title: "Junior Developer",
      company: "GWAYERP Tech Solutions",
      period: "Dec 2024 – Oct 2025",
      description:
        "Independently developed multiple ERP modules end-to-end using React, TypeScript, Redux, Redux Saga, NestJS, and REST APIs. Worked on Sales Shipment, Services, Sales Return, Audit Trail, Inventory, Transit Management, Purchase Receipt, and Goods Receipt modules while implementing complex business workflows and MongoDB database changes.",
      tech: ["React", "TypeScript", "Redux Saga", "NestJS", "REST APIs", "MongoDB"],
    },
    {
      title: "Zoho Developer Intern",
      company: "Elite Tech Park",
      period: "Mar 2024 – Jul 2024",
      description:
        "Automated manual data entry and lead qualification processes using Zoho CRM and Deluge scripting. Implemented custom business logic, designed business process automation solutions, and collaborated with senior developers to optimize existing automation workflows.",
      tech: ["Zoho CRM", "Deluge", "Zoho Creator"],
    },
  ],
};

export const educationDetails = {
  eyebrow: "MY EDUCATION",
  title: "Education",
  items: [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Karpagam Institute of Technology",
      period: "2020 — 2024",
      score: "CGPA: 7.49 / 10",
      icon: "School",
    },
    // {
    //   degree: "Higher Secondary",
    //   field: "HSC",
    //   institution: "H.N.U.P.R. Matric Higher Secondary School",
    //   period: "",
    //   score: "76.67%",
    //   icon: "MenuBook",
    // },
    // {
    //   degree: "Secondary",
    //   field: "SSLC",
    //   institution: "H.N.U.P.R. Matric Higher Secondary School",
    //   period: "",
    //   score: "84.2%",
    //   icon: "Edit",
    // },
  ],
};

export const contactDetails = {
  eyebrow: "LET'S CONNECT",
  title: "Get In Touch",
  email: "narrendrenpoorangavel@gmail.com",
  phone: "+91 7868843874",
  location: "Dindigul, Tamil Nadu, India",
  resumeUrl: "/resume.pdf",
  resumeName: "Narrendran Poorangavel - Full Stack Developer.pdf",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/narrendranpoorangavel/",
    icon: "LinkedIn",
  },
  {
    name: "GitHub",
    url: "https://github.com/Narrendran1306",
    icon: "GitHub",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/toothless1306/",
    icon: "Instagram",
  },
];

export const footerDetails = {
  text: "© 2026 Narrendran Poorangavel. All rights reserved.",
};
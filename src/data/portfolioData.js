export const personalInfo = {
  name: "Pirzada Mohammad Tabish",
  shortName: "Tabish",
  logoInitials: "PT",
  title: "Web Developer | React & Next.js Developer",
  status: "Web Development Intern at Iplex Infotech",
  location: "Kosamba, Gujarat, India",
  phone: "+91-9328771044",
  email: "pirzadatabish18@gmail.com",
  linkedin: "https://linkedin.com/in/pirzada-tabish-820b88273",
  github: null, // Only real profile URLs permitted
  resumeUrl: "./pirzada_tabish_resume.pdf",
  heroIntro: "I'm a Web Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy solving problems, developing practical solutions, and creating clean digital experiences.",
  aboutText: [
    "I'm a Web Developer with a background in Information Technology and hands-on experience building web applications using JavaScript, React, Next.js, Node.js, and MySQL.",
    "Currently, I'm working as a Web Development Intern at Iplex Infotech, contributing to the Taxlink admin panel through bug fixes, interface improvements, and application development.",
    "I'm continuously improving my development skills and enjoy transforming ideas into practical digital solutions."
  ],
  stats: [
    { label: "Production Experience", value: "Internship", sub: "Iplex Infotech" },
    { label: "Completed Projects", value: "4+", sub: "Web & Enterprise" },
    { label: "Diploma CGPA", value: "8.25", sub: "A.Y. Dadabhai" },
    { label: "Skywin Academy", value: "Grade A+", sub: "Full Stack Dev" }
  ]
};

export const skillsData = {
  languages: {
    category: "PROGRAMMING LANGUAGES",
    description: "Core languages for logic, structured markup, and data querying.",
    skills: [
      { name: "JavaScript", icon: "Code2", tag: "ES6+" },
      { name: "SQL", icon: "Database", tag: "Query & Schemas" },
      { name: "HTML", icon: "FileCode2", tag: "Semantic HTML5" },
      { name: "CSS", icon: "Palette", tag: "Modern Layouts" }
    ]
  },
  frameworks: {
    category: "FRAMEWORKS AND TECHNOLOGIES",
    description: "Modern component-driven frameworks and server runtimes.",
    skills: [
      { name: "React.js", icon: "Atom", tag: "Components & Hooks" },
      { name: "Next.js", icon: "Layers", tag: "SSR & App Router" },
      { name: "Node.js", icon: "Server", tag: "Backend Runtime" },
      { name: "Tailwind CSS", icon: "Sparkles", tag: "Utility-first Styling" }
    ]
  },
  database: {
    category: "DATABASE",
    description: "Relational data modeling, indexing, and storage solutions.",
    skills: [
      { name: "MySQL", icon: "HardDrive", tag: "Relational DB" }
    ]
  },
  additional: {
    category: "ADDITIONAL SKILLS",
    description: "Architectural patterns, security mechanisms, and production engineering.",
    skills: [
      { name: "REST APIs", icon: "Network", tag: "Endpoints & Data Flow" },
      { name: "JWT Authentication", icon: "KeyRound", tag: "Token Security" },
      { name: "OTP Authentication", icon: "ShieldCheck", tag: "Email & Mobile Verify" },
      { name: "Email SMTP", icon: "MailCheck", tag: "Templates & Queues" },
      { name: "Responsive Design", icon: "Smartphone", tag: "Mobile-first & Fluid" },
      { name: "Debugging", icon: "Bug", tag: "DevTools & Logging" }
    ]
  }
};

export const experienceData = [
  {
    company: "Iplex Infotech",
    position: "Web Development Intern",
    duration: "2026 – Present",
    type: "Internship",
    location: "Surat, Gujarat, India",
    technologies: ["Next.js", "React", "JavaScript", "AG Grid"],
    description: "Working on the production Taxlink admin panel alongside senior engineering team members to enhance reliability, interface accessibility, and data workflow performance.",
    responsibilities: [
      "Working on the Taxlink admin panel with a development team.",
      "Fixing application bugs across different modules.",
      "Updating admin login and signup interfaces.",
      "Improving user interface and application functionality."
    ],
    highlights: [
      "Fixed broken API calls, resolved infinite loading states, and corrected routing links across Users, Company, Payment Status, and Credentials modules.",
      "Eliminated critical encryption key and data table errors that were impacting the discount coupon and refer-and-earn subsystems.",
      "Modernized authentication UI flows for administrative sign-in and onboarding."
    ]
  }
];

export const projectsData = [
  {
    id: "tasman-glow",
    title: "Tasman Glow",
    category: "Online Skincare Store",
    year: "2026",
    technologies: ["Next.js", "React", "Node.js", "MySQL", "NextAuth", "Razorpay"],
    image: "./images/work-1.png",
    accentColor: "#38BDF8",
    description: "An online skincare store featuring a customer-facing website and administration panel.",
    detailedDescription: "A comprehensive e-commerce platform built to deliver an end-to-end shopping journey for skincare products, backed by a robust admin dashboard for complete store control and order processing.",
    features: [
      "Product, customer and order management.",
      "Email and password authentication.",
      "Mobile OTP authentication.",
      "Email OTP authentication.",
      "Google authentication.",
      "Razorpay payment integration.",
      "Shipping integration with Shipping Xpress.",
      "18 email templates.",
      "Admin email editor.",
      "Order return and refund management.",
      "Authentication and OTP testing scripts."
    ],
    metrics: [
      { label: "Email Templates", value: "18 Ready" },
      { label: "Payment Gateway", value: "Razorpay" },
      { label: "Logistics Partner", value: "Shipping Xpress" },
      { label: "Auth Modes", value: "OTP / Password / OAuth" }
    ]
  },
  {
    id: "taxlink",
    title: "Taxlink",
    category: "Admin Panel",
    year: "2026",
    technologies: ["Next.js", "React", "JavaScript", "AG Grid"],
    image: "./images/work-2.png",
    accentColor: "#60A5FA",
    description: "An administrative dashboard where I contributed to bug fixing and user interface improvements during my internship.",
    detailedDescription: "Production-grade enterprise management dashboard powering company operations, user verification, coupon incentives, and payment analytics.",
    features: [
      "Users management.",
      "Company management.",
      "Payment status.",
      "Credentials.",
      "Dashboard details.",
      "Discount coupons.",
      "Refer and Earn.",
      "Support module.",
      "Admin login and signup UI improvements.",
      "API and data table bug fixes."
    ],
    metrics: [
      { label: "Modules Maintained", value: "8+ Key Areas" },
      { label: "Data Grid Engine", value: "AG Grid" },
      { label: "Focus", value: "Stability & UX" },
      { label: "Role", value: "Frontend Intern" }
    ]
  },
  {
    id: "e-learning",
    title: "E-Learning Platform",
    category: "Academic Project",
    year: "Academic Project",
    technologies: ["Next.js", "React", "JavaScript", "Node.js", "MySQL", "Tailwind CSS"],
    image: "./images/work-3.png",
    accentColor: "#818CF8",
    description: "An online learning platform designed for students to discover, purchase and complete online courses.",
    detailedDescription: "Full-featured educational portal empowering students to browse courses, track their learning progression with video players, and download verified completion credentials.",
    features: [
      "Student registration with email OTP.",
      "Course search and filtering.",
      "Course purchasing.",
      "Video lessons.",
      "Lesson progress tracking.",
      "Printable completion certificates.",
      "Admin dashboard.",
      "Course and student management.",
      "Orders and feedback.",
      "Sales reports and charts."
    ],
    metrics: [
      { label: "Verification", value: "Email OTP" },
      { label: "Outcome", value: "Printable Certificates" },
      { label: "Analytics", value: "Admin Sales Charts" },
      { label: "Architecture", value: "Full Stack Next.js" }
    ]
  },
  {
    id: "music-recommendation",
    title: "Music Recommendation System",
    category: "Academic Project",
    year: "Academic Project",
    technologies: ["Python", "NLP", "Machine Learning", "JavaScript", "Web UI"],
    image: "./images/background.png",
    accentColor: "#A78BFA",
    description: "A music recommendation system using Natural Language Processing (NLP), rather than relying only on genre, artist or popularity.",
    detailedDescription: "An intelligent recommendation engine utilizing NLP techniques to analyze semantic lyric patterns and context, delivering tailored musical recommendations beyond conventional popularity charts.",
    features: [
      "NLP-driven lyrical semantic analysis.",
      "Content-based similarity matching algorithms.",
      "Recommendations tailored to user listening context and emotion.",
      "Interactive clean user interface for song discovery.",
      "Dynamic search and candidate ranking."
    ],
    metrics: [
      { label: "Engine Type", value: "NLP / ML" },
      { label: "Recommendation Basis", value: "Lyrical Semantics" },
      { label: "Interface", value: "Interactive Web" },
      { label: "Project Nature", value: "Academic Research" }
    ]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Information Technology & Engineering",
    institution: "P. P. Savani University, Kosamba, Gujarat",
    duration: "2022 – 2025",
    type: "Undergraduate Degree",
    description: "Advanced engineering coursework focusing on web application architectures, software engineering methodologies, database design, computer networks, and full stack modern frameworks."
  },
  {
    degree: "Diploma in Software Engineering",
    institution: "A.Y. Dadabhai Technical Institute, Kosamba, Gujarat",
    duration: "2019 – 2022",
    type: "Diploma",
    cgpa: "8.25",
    description: "Strong foundational training in core programming, algorithms, relational database administration, software lifecycle development, and practical laboratory projects."
  }
];

export const certificationsData = [
  {
    title: "Full Stack Development",
    institution: "Skywin IT Academy, Surat",
    duration: "Nov 2025 – Jun 2026",
    grade: "Grade A+",
    icon: "Award",
    description: "Intensive training covering modern React, Next.js, Node.js server architectures, MySQL databases, and real-world deployment practices."
  },
  {
    title: "Modern JavaScript From The Beginning 2.0",
    institution: "Brad Traversy",
    year: "2024",
    icon: "FileCode",
    description: "Deep dive into modern ECMAScript standards, asynchronous patterns, DOM manipulation, promises, fetch API, and component design."
  },
  {
    title: "AWS Academy Cloud Foundations",
    institution: "Amazon Web Services (AWS)",
    year: "Certified",
    icon: "Cloud",
    description: "Fundamental knowledge of AWS Cloud concepts, compute services, storage, networking, security, and architectural best practices."
  },
  {
    title: "Advanced IoT with Raspberry Pi",
    institution: "Technex, IIT Varanasi",
    year: "Certified",
    icon: "Cpu",
    description: "Hands-on implementation of hardware sensor interfacing, embedded Linux programming, and edge device communication."
  },
  {
    title: "UI/UX Design and Game Development",
    institution: "Coursera",
    year: "Certified",
    icon: "Layout",
    description: "User research, wireframing, high-fidelity interaction design, information architecture, and user flow optimization."
  }
];


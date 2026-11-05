export const content = {
  profile: {
    name: "Alvee Ishraque",
    tagline: "AI/ML Enthusiast.",
    email: "alveeeiii@gmail.com",
    scholar: "https://scholar.google.com",
    github: "https://github.com/alveeishraque",
    linkedin: "https://www.linkedin.com/in/alvee-ishraque-366789236/",
    youtube: "https://www.youtube.com/@alveeishraque9934",
    cv: `${import.meta.env.BASE_URL}resume.pdf`,
  },
  about: {
    bio: `Hi! I'm Alvee Ishraque, a Computer Science & Engineering graduate from BRAC University.

I'm someone who loves exploring new ideas and seeing how different fields connect. That curiosity pulled me into AI and machine learning, where I enjoy working on problems across many areas. My interests include multimodal machine learning, deep learning, computer vision, natural language processing, bioinformatics, and federated learning.

I like learning by doing, and I'm always open to new ideas and collaborations. You can explore my research, projects, and skills on this website, and feel free to reach out if you'd like to connect!`,

    seeking: {
      prefix: "",
      highlight: "",
    },
  },
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "BRAC University",
      period: "2022 – 2026",
      details: {
        cgpa: "",
        // thesis: "Multimodal Representation Learning for Low-Dose CT Denoising and Lesion Segmentation",
        // supervisor: "Prof. Jane Doe",
        coursework: ["Deep Learning", "Computer Vision", "Natural Language Processing.", "Machine Learning", "Algorithms","Artificial Intelligence"],
      },
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "New Govt. Degree College, Rajshahi",
      period: "2019 – 2020",
      details: {
        result: " ",
        focus: "Science",
      },
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Rajshahi Collegiate School",
      period: "2016 – 2018",
      details: {
        result: " ", 
        focus: "Science",
      },
    },
  ],
  honors: [
    {
      title: "Dean's List & Academic Excellence Scholarship",
      organization: "BRAC University",
      date: "2024 – 2025",
      // description: "Awarded for maintaining top 1% academic standing across six consecutive semesters.",
    }
    // {
    //   title: "Finalist, National Biomedical Datathon",
    //   organization: "HealthTech AI Consortium",
    //   date: "2024",
    //   description: "Ranked 2nd out of 120+ teams for developing a lightweight real-time ECG arrhythmia classification pipeline.",
    // },
  ],
  researchInterests: [
    "Multi-Modal Machine Learning",
    "Deep Learning Architectures",
    "Medical Imaging",
    "Bioinformatics",
    "AI in Healthcare",
    "Federated Learning",
    "Computational Social Science",
    "AI/ML",
    "Natural Language Processing"
  ],

  publications: [
    {
      title: "Calibrated Uncertainty Estimation in High-Resolution Chest Radiograph Diagnosis",
      type: "Conference",
      authors: "Alex Morgan, Sarah Chen, Jane Doe",
      venue: "MICCAI 2025 (Under Review)",
      year: "2025",
      doi: "https://doi.org/10.1000/182",
      pdf: `${import.meta.env.BASE_URL}resume.pdf`,
    },
    {
      title: "Contrastive Multi-View Alignment for Low-Resource Histopathological Staining",
      type: "Journal",
      authors: "Alex Morgan, David K. Miller, Jane Doe",
      venue: "IEEE Transactions on Medical Imaging (TMI)",
      year: "2024",
      doi: "https://doi.org/10.1000/183",
      pdf: `${import.meta.env.BASE_URL}resume.pdf`,
    },
    {
      title: "Towards Robust Domain Adaptation for Dermatological Screening Across Diverse Skin Tones",
      type: "Preprint",
      authors: "Alex Morgan, Elena Rostova, Jane Doe",
      venue: "arXiv preprint arXiv:2408.01234",
      year: "2024",
      doi: "https://doi.org/10.48550/arXiv.2408.01234",
      pdf: `${import.meta.env.BASE_URL}resume.pdf`,
    },
  ],
  

projects: [
  {
    title: "Comparison of Word Representations for Multi-Class Text Classification",

    category: "AI/ML & NLP",
    status: "completed",
    period: "2025",

    subtitle: "Natural Language Processing & Deep Sequence Modeling",

    description:
      "Compared traditional and neural word representations for multi-class text classification using machine learning and deep learning models.",

    longDescription:
      "This project investigates the effectiveness of different word representation techniques for multi-class text classification. BoW, TF-IDF, GloVe, and Skip-gram representations were evaluated using traditional machine learning classifiers and neural network architectures. The experiments used 340,000 question-answer pairs distributed across ten categories.",

    technologies: [
      "Python",
      "BoW",
      "TF-IDF",
      "GloVe",
      "Skip-gram",
      "RNN",
      "GRU",
      "BiLSTM"
    ],

    highlights: [
      "Worked with a dataset containing 340,000 question-answer pairs.",
      "Covered ten text classification categories.",
      "Compared traditional machine learning and neural network approaches.",
      "Evaluated multiple word representation techniques."
    ],

    code: "YOUR_WORD_CLASSIFICATION_GITHUB_URL",
    website: "",
  },

  {
    title: "Flood Prediction Using Machine Learning",

    category: "AI/ML & Research",
    status: "completed",
    period: "2025",

    subtitle: "Environmental Data Science & Predictive Analytics",

    description:
      "Analyzed meteorological data, river flow, and land use patterns to develop machine learning models for flood risk prediction.",

    longDescription:
      "This project explores the application of machine learning in flood prediction by analyzing meteorological conditions, river flow information, and land use patterns. Multiple algorithms were implemented and evaluated to investigate their effectiveness in identifying flood risk patterns.",

    technologies: [
      "Python",
      "Decision Tree",
      "Random Forest",
      "SVM",
      "KNN",
      "Neural Networks"
    ],

    highlights: [
      "Analyzed meteorological and environmental data.",
      "Explored river flow and land use patterns.",
      "Implemented multiple machine learning algorithms.",
      "Compared different approaches for flood risk prediction."
    ],

    code: "YOUR_FLOOD_PREDICTION_GITHUB_URL",
    website: "",
  },

  {
    title: "PetSphere: Full-Stack Pet Care Platform",

    category: "Web & Software",
    status: "completed",
    period: "2025",

    subtitle: "MERN Stack Web Engineering",

    description:
      "Built a full-stack pet care platform supporting pet adoption, healthcare management, and related services.",

    longDescription:
      "PetSphere is a full-stack web application designed to bring pet adoption, healthcare management, and pet-related services together in one platform. The application includes REST API integration, JWT-based authentication, role-based dashboards, pet profiles, medical records, adoption workflows, and lost-and-found notifications.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST API",
      "JWT",
      "JavaScript"
    ],

    highlights: [
      "Developed a full-stack MERN application.",
      "Implemented REST APIs and JWT authentication.",
      "Created role-based dashboards.",
      "Added pet profiles and medical logs.",
      "Implemented adoption workflows and lost-and-found notifications."
    ],

    code: "YOUR_PETSPHERE_GITHUB_URL",
    website: "",
  },
],

// skills: {
  //   Programming: ["Python", "C/C++", "PyTorch", "JAX", "SQL", "Git"],
  //   "Machine Learning": ["Computer Vision", "Self-Supervised Learning", "Bayesian Deep Learning", "Vision Transformers", "Diffusion Models", "Interpretability (SHAP, Grad-CAM)"],
  //   Tools: ["Linux", "Hugging Face", "CUDA"],
  
  // },
  skills: {
  "Programming Languages": {
    icon: "code",
    items: [
      "Python",
      "C/C++",
      "JavaScript",
      "PHP",
      "SQL",
      "JAX"
    ]
  },

  "Machine Learning & Deep Learning": {
    icon: "brain",
    items: [
      "PyTorch",
      "Computer Vision",
      "Self-Supervised Learning",
      "Bayesian Deep Learning",
      "Vision Transformers",
      "Diffusion Models",
      "Interpretability (SHAP, Grad-CAM)"
    ]
  },

  "Web Development": {
    icon: "globe",
    items: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "HTML5 & CSS3",
      "Tailwind CSS"
    ]
  },

  "Tools & Technologies": {
    icon: "wrench",
    items: [
      "Git",
      "Linux",
      "Hugging Face",
      "CUDA"
    ]
  }
},
  extracurricular: [
    {
      role: "Senior Executive, Finance Department",
      organization: "BRAC University Environment Club",
      period: "2025 – 2026",
      description: "Led core organizational operations and financial management for environmental awareness and sustainability drives.",
    },
    {
      role: "Volunteer — 16th Convocation",
      organization: "BRAC University",
      period: "2025",
      description: "Supported event operations, guest coordination, and crowd management for the successful execution of the convocation ceremony.",
    },
    // {
    //   role: "Active Competitive Programmer",
    //   organization: "ICPC Regional & Inter-University Contests",
    //   period: "2022 – 2024",
    //   description: "Solved 800+ algorithmic problems across Codeforces and LeetCode; represented university in regional programming contests.",
    // },
    // {
    //   role: "Student Member",
    //   organization: "IEEE Computer Society & MICCAI Student Association",
    //   period: "2022 – Present",
    //   description: "Active member participating in journal clubs, conference workshops, and open-source biomedical challenges.",
    // },
  ],
  contact: {
    text: "Let's connect! Feel free to contact me. I'd be happy to hear from you!",
  },
}

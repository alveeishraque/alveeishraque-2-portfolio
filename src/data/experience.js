export const education = [
  {
    id: "edu-bsc",
    level: "Undergraduate Degree",
    degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    period: "January 2022 – January 2026",
    grade: "CGPA: 3.64 / 4.00",
    gradeLabel: "CGPA",
    gradeValue: "3.64 / 4.00",
    scale: "4.00",
    status: "Graduated",
    isVerified: true,
    thesisInterest: "AI-ML, Deep Learning, Biomedical Applications",
    highlights: [
      "Concentration in Multimodal Deep Learning, Medical Imaging, and Natural Language Processing.",
      "Contributed to the development of XEB-FuseNet, an undergraduate research project focused on multimodal deep learning and medical image-based disease diagnosis.",
      "Completed advanced coursework including CSE427: Machine Learning and CSE440: Natural Language Processing."
    ],
    relevantCourses: [
      "CSE427: Machine Learning",
      "CSE440: Natural Language Processing",
      "Design & Analysis of Algorithms",
      "Data Structures",
      "Database Systems",
      "Operating Systems",
      "Linear Algebra & Vector Analysis",
      "Probability & Statistics for Engineers"
    ]
  },
  {
    id: "edu-hsc",
    level: "Higher Secondary Education",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "New Govt. Degree College, Rajshahi",
    location: "Rajshahi, Bangladesh",
    period: "2018 – 2020",
    grade: "GPA: 5.00 / 5.00",
    gradeLabel: "GPA",
    gradeValue: "5.00 / 5.00",
    scale: "5.00",
    status: "Completed (Perfect Score)",
    isVerified: true,
    highlights: [
      "Achieved the highest possible academic distinction of GPA 5.00/5.00 in the Science group.",
      "Studied advanced Physics, Chemistry, Higher Mathematics, and Biology.",
      "New Govt. Degree College is one of the premier higher secondary academic institutions in Northern Bangladesh."
    ]
  },
  {
    id: "edu-ssc",
    level: "Secondary School Education",
    degree: "Secondary School Certificate (SSC)",
    institution: "Rajshahi Collegiate School, Rajshahi",
    location: "Rajshahi, Bangladesh",
    period: "2016 – 2018",
    grade: "GPA: 5.00 / 5.00",
    gradeLabel: "GPA",
    gradeValue: "5.00 / 5.00",
    scale: "5.00",
    status: "Completed (Perfect Score)",
    isVerified: true,
    highlights: [
      "Achieved a perfect GPA 5.00/5.00 in the Science group.",
      "Rajshahi Collegiate School is the historic first modern educational institution in Bangladesh (established 1828).",
      "Built rigorous early fundamentals in mathematics, scientific reasoning, and analytical problem-solving."
    ]
  }
];

export const extracurriculars = [
  {
    id: "ec-env-club",
    role: "Senior Executive, Finance Department",
    organization: "BRAC University Environment Club",
    period: "2025 – 2026",
    location: "BRAC University, Dhaka",
    isVerified: true,
    description: "Led core organizational operations and financial management for environmental awareness and sustainability drives.",
    contributions: [
      "Oversaw recruitment, onboarding, and team coordination for new club members.",
      "Assisted in budget planning, financial allocation, and logistical coordination for campus-wide sustainability events."
    ]
  },
  {
    id: "ec-convocation",
    role: "Volunteer — 16th Convocation",
    organization: "BRAC University",
    period: "2025",
    location: "Dhaka, Bangladesh",
    isVerified: true,
    description: "Official volunteer in supporting large-scale institutional operations for the university graduation ceremony.",
    contributions: [
      "Supported event operations, guest coordination, and crowd management for the successful execution of the convocation ceremony."
    ]
  }
];

export const researchExperience = [
  {
    id: "res-thesis",
    role: "Undergraduate Researcher — XEB-FuseNet Multimodal Fusion Framework",
    institution: "BRAC University, Department of Computer Science & Engineering",
    period: "2023 – Present",
    location: "Dhaka, Bangladesh",
    status: "Thesis Completed / Manuscript in Review",
    isVerified: true,
    supervisors: "Supervised by Dr. Amitabha Chakrabarty & Md. Saiful Bari Siddiqui",
    description: "Formulated and evaluated XEB-FuseNet, an attention-driven multimodal diagnostic fusion model combining Chest X-rays, ECG waveforms, and blood laboratory profiles.",
    contributions: [
      "Developed a multimodal deep learning framework fusing chest X-rays, ECGs, and blood data via hierarchical attention for thoracic disease diagnosis.",
      "Evaluated multiple backbones (e.g., Inception V3, DenseNet-121), achieving a peak AUC of 0.9052 and outperforming unimodal baselines.",
      "Formulated cross-attention bottlenecks allowing spatial visual features to query cardiac rhythm signals and laboratory biomarkers dynamically."
    ]
  }
];

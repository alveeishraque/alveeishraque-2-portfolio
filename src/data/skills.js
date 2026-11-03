export const skillCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages utilized across algorithmic problem solving, machine learning research, and low-level computing.",
    skills: [
      { name: "Python", level: "Advanced", highlight: true, note: "Primary language for PyTorch, NLP, data pipelines, & ML research" },
      { name: "C / C++", level: "Proficient", highlight: true, note: "Data structures, algorithmic complexity, competitive programming" },
      { name: "JavaScript (ES6+)", level: "Proficient", highlight: true, note: "Full-stack web applications, asynchronous APIs, React" },
      { name: "SQL", level: "Proficient", highlight: true, note: "Relational database querying, schema design, joins" },
      { name: "Assembly Language", level: "Academic", highlight: false, note: "Low-level computer architecture and instruction set execution" },
    ]
  },
  {
    id: "mldl_nlp",
    name: "Machine Learning, Deep Learning & NLP",
    description: "Architectures, representations, and frameworks for predictive and multimodal intelligence.",
    skills: [
      { name: "PyTorch", level: "Advanced", highlight: true, note: "Custom loss functions, multimodal training, tensor ops" },
      { name: "Multimodal Fusion", level: "Advanced", highlight: true, note: "Hierarchical cross-attention, early/late/bottleneck fusion" },
      { name: "Natural Language Processing (NLP)", level: "Advanced", highlight: true, note: "CSE440: BoW, TF-IDF, GloVe, Word2Vec, Skip-gram" },
      { name: "Sequential Models (Bi-LSTM, GRU, RNN)", level: "Advanced", highlight: true, note: "Text classification & time-series waveform modeling" },
      { name: "Scikit-Learn", level: "Advanced", highlight: true, note: "CSE427: SVM, Random Forest, Decision Trees, KNN, Naive Bayes" },
      { name: "Deep Vision Backbones", level: "Advanced", highlight: true, note: "Inception V3, DenseNet-121, ResNet for medical radiography" },
    ]
  },
  {
    id: "web",
    name: "Web Development",
    description: "Modern full-stack technologies and web architectures demonstrated in PetSphere.",
    skills: [
      { name: "MERN Stack", level: "Proficient", highlight: true, note: "MongoDB, Express.js, React.js, Node.js full-stack development" },
      { name: "React.js", level: "Proficient", highlight: true, note: "Interactive components, state management, hooks" },
      { name: "RESTful APIs", level: "Proficient", highlight: true, note: "JWT authentication, CRUD endpoints, role-based access" },
      { name: "HTML5 & CSS3 / Tailwind CSS", level: "Proficient", highlight: false, note: "Semantic structure, responsive layouts, modern design" },
      { name: "PHP", level: "Intermediate", highlight: false, note: "Server-side scripting and web backend foundations" },
    ]
  },
  {
    id: "tools",
    name: "Tools & Productivity",
    description: "Version control, collaboration platforms, and engineering toolsets.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", highlight: true, note: "Version control, repository management, collaborative branching" },
      { name: "Google Workspace", level: "Advanced", highlight: false, note: "Collaborative research documentation, drive, sheets" },
      { name: "Canva", level: "Proficient", highlight: false, note: "Visual design, research presentations, club media" },
      { name: "MS Office Suite", level: "Proficient", highlight: false, note: "Word, Excel data tabulation, PowerPoint presentations" },
      // { name: "IELTS Academic", level: "Overall 6.5", highlight: true, note: "Certified Academic English language proficiency" },
    ]
  }
];

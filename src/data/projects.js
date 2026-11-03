export const projects = [
  {
    id: "xeb-fusenet",
    title: "XEB-FuseNet: Hierarchical Attention Multimodal Fusion for Thoracic Diagnosis",
    subtitle: "Undergraduate Thesis & Flagship Research",
    featured: true,
    category: "AI/ML & Research",
    modalities: ["Chest X-Rays (2D Spatial)", "12-Lead ECG (1D Time-Series)", "Blood Lab Data (Tabular)"],
    status: "Peak AUC: 0.9052 (Verified)",
    summary: "A multimodal deep learning framework fusing chest X-rays, ECGs, and blood laboratory data via hierarchical cross-attention for thoracic disease diagnosis, achieving an outstanding peak AUC of 0.9052.",
    problemStatement: "Single-modality automated diagnostics (e.g., chest X-ray alone or ECG alone) frequently fail to capture comprehensive cardiopulmonary pathology. Clinical doctors rely on multimodal data—radiographs, electrophysiology, and serological biomarkers—to diagnose complex thoracic conditions. XEB-FuseNet addresses cross-modal feature alignment across asynchronous spatial, temporal, and tabular domains.",
    methodology: [
      "Chest X-Ray Pathway: Evaluated high-capacity vision backbones including Inception V3 and DenseNet-121 for localized thoracic feature extraction.",
      "ECG Signal Pathway: Utilized 1D convolutional and temporal attention networks to encode 12-lead electrophysiological rhythm dynamics.",
      "Blood Laboratory Pathway: Employed regularized dense projection layers for clinical biomarker profiling.",
      "Hierarchical Attention Fusion: Dynamic cross-attention module allowing mutual querying between visual tokens, rhythm states, and laboratory values before joint classification."
    ],
    technologies: ["PyTorch", "Inception V3", "DenseNet-121", "Torchvision", "OpenCV", "Scikit-Learn", "NumPy", "Pandas"],
    evaluation: "Achieved a verified peak AUC of 0.9052, significantly outperforming unimodal baselines (CXR-only, ECG-only, and Lab-only) across clinical evaluation sets.",
    github: "https://github.com/alveeishraque",
    paperLink: "#research",
    demoLink: null,
    metrics: [
      { label: "Peak Model AUC", value: "0.9052" },
      { label: "Backbone Architectures", value: "Inception V3, DenseNet-121" },
      { label: "Modalities Fused", value: "CXR + ECG + Blood Data" },
      { label: "Supervision", value: "BRAC University Faculty" }
    ]
  },
  {
    id: "word-representations-nlp",
    title: "Comparison of Word Representations for Multi-Class Text Classification",
    subtitle: "Natural Language Processing & Deep Sequence Modeling",
    featured: false,
    category: "AI/ML & NLP",
    modalities: ["Text & Sequential Language"],
    status: "Completed Research Project",
    summary: "Large-scale benchmark evaluating traditional and neural word representations across ML and deep sequential architectures on 340,000 question-answer pairs spanning 10 distinct categories.",
    problemStatement: "Selecting optimal text representation techniques is critical for domain-specific NLP pipelines. This project empirically compared dense vs sparse embeddings across diverse linear, ensemble, and recurrent neural architectures.",
    methodology: [
      "Constructed and preprocessed a massive corpus of 340,000 question-answer pairs categorized across 10 subject classes.",
      "Implemented and evaluated sparse representations (Bag of Words, TF-IDF) and dense pre-trained embeddings (GloVe, Skip-gram).",
      "Benchmarked classical machine learning models (Logistic Regression, Naive Bayes, Random Forest) alongside deep neural networks (DNN, RNN, GRU, and Bidirectional LSTM)."
    ],
    technologies: ["Python", "PyTorch / TensorFlow", "Scikit-Learn", "GloVe", "Word2Vec", "Bi-LSTM", "GRU", "Pandas", "NumPy"],
    evaluation: "Demonstrated superior multi-class classification accuracy and semantic stability with Bidirectional LSTM and fine-tuned GloVe embeddings over 340,000 sample pairs.",
    github: "https://github.com/alveeishraque",
    paperLink: null,
    demoLink: null,
    metrics: [
      { label: "Dataset Scale", value: "340,000 QA Pairs" },
      { label: "Categories", value: "10 Classes" },
      { label: "Models Evaluated", value: "ML (RF, NB, LR) + NN (BiLSTM, GRU, RNN)" },
      { label: "Representations", value: "BoW, TF-IDF, GloVe, Skip-gram" }
    ]
  },
  {
    id: "flood-prediction-ml",
    title: "Flood Prediction Using Machine Learning",
    subtitle: "Environmental Data Science & Risk Analytics",
    featured: false,
    category: "AI/ML & Research",
    modalities: ["Meteorological & Hydrological Data"],
    status: "Completed Project",
    summary: "Predictive machine learning pipeline modeling meteorological conditions, river flow dynamics, and regional land use patterns to anticipate flood risks.",
    problemStatement: "Early flood detection is crucial in riverine countries like Bangladesh to minimize loss of life and agricultural damage caused by monsoon overflow.",
    methodology: [
      "Aggregated and curated multi-source environmental datasets spanning precipitation metrics, river discharge rates, and terrain characteristics.",
      "Trained and cross-validated Decision Trees, Random Forests, Support Vector Machines (SVM), K-Nearest Neighbors (KNN), and Neural Networks.",
      "Conducted comparative performance analysis based on precision, recall, and ROC-AUC."
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    evaluation: "Ensemble Random Forest and Neural Network models yielded the highest predictive sensitivity for critical flood threshold detection.",
    github: "https://github.com/alveeishraque",
    paperLink: null,
    demoLink: null,
    metrics: [
      { label: "Domain", value: "Disaster Risk Analytics" },
      { label: "Data Sources", value: "Meteorology & River Flow" },
      { label: "Algorithms", value: "Random Forest, SVM, KNN, NNs" }
    ]
  },
  {
    id: "petsphere-mern",
    title: "PetSphere: Full-Stack Pet Care & Services Platform",
    subtitle: "MERN Stack Web Engineering",
    featured: false,
    category: "Web & Software",
    modalities: ["Full-Stack Web Application"],
    status: "Completed Project",
    summary: "A production-ready full-stack MERN platform facilitating pet adoptions, veterinary health tracking, lost-and-found alerts, and role-based service management.",
    problemStatement: "Pet owners and adoption shelters often lack a unified, secure digital platform for managing pet healthcare histories, legal adoption procedures, and emergency lost pet broadcasts.",
    methodology: [
      "Engineered full RESTful API architecture with Node.js and Express, backed by MongoDB for schemaless document storage.",
      "Implemented robust JWT (JSON Web Token) authentication, bcrypt password hashing, and role-based access control (Admin, Shelter, User).",
      "Designed an intuitive responsive frontend using React and Tailwind CSS, featuring adoption request workflows and lost-and-found community notifications."
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js (MERN)", "JWT", "Tailwind CSS", "REST APIs"],
    evaluation: "Delivered an end-to-end web system with authenticated user dashboards, automated adoption state machines, and real-time alerts.",
    github: "https://github.com/alveeishraque",
    paperLink: null,
    demoLink: null,
    metrics: [
      { label: "Architecture", value: "Full-Stack MERN" },
      { label: "Security", value: "JWT Auth & RBAC" },
      { label: "Core Modules", value: "Adoption, Medical Logs, Lost & Found" }
    ]
  }
];

export const projectCategories = [
  "All",
  "AI/ML & Research",
  "AI/ML & NLP",
  "Web & Software"
];

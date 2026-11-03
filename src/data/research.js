export const researchData = {
  thesis: {
    title: "XEB-FuseNet: A Hierarchical Attention-Based Multimodal Fusion Framework Integrating Chest X-Rays, ECG Signals, and Blood Data for Thoracic Disease Diagnosis",
    type: "Undergraduate Thesis & Flagship Research",
    institution: "BRAC University, Department of Computer Science & Engineering",
    authors: ["Alvee Ishraque", "Tarek Alam Bhuiyan", "Md Radwan Ahamed", "Ovilash Moitra", "Md. Saiful Bari Siddiqui", "Amitabha Chakrabarty"],
    supervisors: [
      { name: "Dr. Amitabha Chakrabarty", title: "Senior Member, IEEE, Professor, Dept. of CSE, BRAC University", email: "amitabha@bracu.ac.bd", role: "Thesis Supervisor" },
      { name: "Md. Saiful Bari Siddiqui", title: "Graduate Student Member, IEEE, Senior Lecturer, Dept. of CSE, BRAC University", email: "saiful.bari@bracu.ac.bd", website: "https://saiful-bari.github.io", role: "Thesis Co-Supervisor" }
    ],
    status: "Completed Thesis / Manuscript in Review",
    peakMetric: "Peak AUC of 0.9052",
    codeUrl: "https://github.com/alveeishraque/XEB-Fuse-Net",
    paperUrl: null,
    venue: "IEEE Journal of Biomedical and Health Informatics (JBHI)",
    
    abstract: `Thoracic disease diagnosis often exhibits clinical ambiguity when relying on a single examination modality. In clinical environments, medical experts diagnose cardiopulmonary conditions by jointly evaluating radiographs (Chest X-Rays), electrophysiological waveforms (12-lead ECGs), and serological blood laboratory tests.
    
    XEB-FuseNet introduces a hierarchical attention-based multimodal deep learning framework fusing Chest X-rays, ECGs, and blood data via hierarchical attention. By systematically benchmarking high-capacity backbones including Inception V3 and DenseNet-121 alongside specialized 1D temporal networks and dense tabular projections, XEB-FuseNet achieved a peak AUC of 0.9052, significantly outperforming unimodal diagnostic baselines.`,

    architectureHighlights: [
      {
        step: "01",
        name: "Deep Vision Backbones (CXR)",
        description: "Evaluated high-capacity vision architectures including Inception V3 and DenseNet-121 for localized feature extraction on chest radiographs."
      },
      {
        step: "02",
        name: "Temporal Waveform Modeling (ECG)",
        description: "Captures cardiac electrophysiological rhythm irregularities across 12-lead ECG signals using 1D convolutional and temporal attention modules."
      },
      {
        step: "03",
        name: "Clinical Biomarker Projection (Blood)",
        description: "Encodes structured serological laboratory panels through normalized dense projection layers with outlier robustness."
      },
      {
        step: "04",
        name: "Hierarchical Attention Bottleneck & Classification",
        description: "Computes cross-modal attention maps allowing spatial visual features to query cardiac rhythm signals and laboratory biomarkers before final prediction, achieving a peak AUC of 0.9052."
      }
    ],

    modalities: [
      {
        name: "Chest X-Rays (CXR)",
        type: "2D Spatial Radiograph",
        role: "Captures anatomical opacities, cardiothoracic ratio, pulmonary consolidation, and effusions.",
        tech: "Inception V3 & DenseNet-121"
      },
      {
        name: "12-Lead ECG Signals",
        type: "1D Temporal Waveform",
        role: "Reveals electrophysiological conduction delays, rhythm abnormalities, and ischemia.",
        tech: "1D-CNN + Temporal Attention"
      },
      {
        name: "Blood Laboratory Data",
        type: "Tabular Biomarkers",
        role: "Quantifies systemic inflammation, cardiac markers, and serological metrics.",
        tech: "Normalized Dense Projection Network"
      }
    ],

    bibtex: `@article{ishraque2026xebfusenet,
  title     = {XEB-FuseNet: A Hierarchical Attention-Based Multimodal Fusion Framework for Thoracic Disease Diagnosis},
  author    = {Ishraque, Alvee and Bhuiyan, Tarek Alam and Ahamed, Md Radwan and Moitra, Ovilash and Siddiqui, Md. Saiful Bari and Chakrabarty, Amitabha},
  journal   = {IEEE Journal of Biomedical and Health Informatics},
  year      = {2026},
  note      = {Manuscript under review. Code: https://github.com/alveeishraque/XEB-Fuse-Net}
}`
  },

  // Exact Research Interests matching your CV items
  researchInterests: [
    {
      title: "Multi-Modal Machine Learning",
      description: "Developing cross-attention bottlenecks that integrate heterogeneous clinical modalities (imaging, continuous signals, and structured clinical labs)."
    },
    {
      title: "Deep Learning Architectures",
      description: "Exploring advanced convolutional and transformer backbones (Inception V3, DenseNet-121) tailored for biomedical signal processing and sequence analysis."
    },
    {
      title: "Medical Imaging",
      description: "Formulating computer vision methodologies for automated detection of thoracic and cardiopulmonary conditions on chest radiographs."
    },
    {
      title: "Bioinformatics",
      description: "Analyzing high-dimensional clinical laboratory metrics and electrophysiological temporal signals for biological and clinical pattern recognition."
    },
    {
      title: "AI in Healthcare",
      description: "Designing clinically interpretable, mathematically grounded machine learning frameworks to solve real-world diagnostic challenges."
    },
    {
      title: "Federated Learning",
      description: "Investigating privacy-preserving distributed learning methodologies for collaborative and equitable medical data utilization."
    },
    {
      title: "Computational Social Science",
      description: "Applying quantitative computational modeling to study complex socio-technical phenomena and public health frameworks."
    },
    {
      title: "AI/ML",
      description: "Building robust predictive models and comparative optimization pipelines across large-scale datasets."
    },
    {
      title: "Natural Language Processing",
      description: "Benchmarking dense and sequential language models across large-scale multi-class corpora and biomedical text tasks."
    }
  ]
};
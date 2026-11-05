
import React, { useState } from 'react'

import { Card } from '../Card'
import { Chip } from '../Chip'
import { Button } from '../Button'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'

import {
  Github,
  ArrowUpRight,
  X,
  FileText,
  ExternalLink,
  Layers,
  Brain,
  ScanLine,
  Dna,
  HeartPulse,
  LockKeyhole,
  Network,
  Cpu,
  MessageSquare,
} from 'lucide-react'

const GITHUB_PROFILE = 'https://github.com/alveeishraque'

const researchInterestIcons = {
  'Multi-Modal Machine Learning': Layers,
  'Deep Learning Architectures': Brain,
  'Medical Imaging': ScanLine,
  Bioinformatics: Dna,
  'AI in Healthcare': HeartPulse,
  'Federated Learning': LockKeyhole,
  'Computational Social Science': Network,
  'AI/ML': Cpu,
  'Natural Language Processing': MessageSquare,
}

export function Research({
  researchInterests = [],
  projects = [],
}) {
  const [activeProjectFilter, setActiveProjectFilter] = useState('All')
  const [showThesisDetails, setShowThesisDetails] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Undergraduate Thesis
  const thesis = {
    title:
      'XEB-FuseNet: A Hierarchical Attention-Based Multimodal Fusion Framework for Thoracic Disease Diagnosis',

    shortDescription:
      'A multimodal deep learning framework integrating Chest X-rays, ECG signals, and blood laboratory data for thoracic disease diagnosis.',

    abstract: `Clinical diagnosis is inherently multimodal, yet most deep learning systems for thoracic disease detection remain unimodal, and the few that fuse modalities typically do so in a single step that weights all sources equally and symmetrically.

We propose XEB-FuseNet, a multimodal framework that factorizes fusion into a clinically ordered two-stage hierarchy: chest X-ray (CXR) and electrocardiogram (ECG) features are first combined into a cardiopulmonary representation, which is then integrated with blood laboratory biomarkers to add biochemical context.

At each stage, a per-sample gated attention mechanism computes content-dependent modality weights, allowing the network to emphasize reliable evidence and attenuate sources that are noisy, missing, or diagnostically uninformative for the condition at hand. Because the fusion logic operates on projected embeddings, it is independent of the choice of encoder, and we evaluate it across several CXR and ECG backbones rather than a single tuned network.

On the Symile-MIMIC dataset, across five conditions (Atelectasis, Cardiomegaly, Edema, Lung Opacity, and Pleural Effusion), the framework improves over the corresponding unimodal CXR baselines for every condition, reaching an AUC of 0.9052 for Edema and 0.8835 for Pleural Effusion.

The hierarchy further makes each modality's contribution separately attributable, revealing that fusion benefit is predictable rather than uniform: the cardiopulmonary stage improves performance for all five conditions, whereas the biochemical stage contributes substantially only for pathologies with a measurable systemic signature and is effectively suppressed for predominantly anatomical ones, a separation confirmed by DeLong's test.

These results support a modality-selective view of clinical fusion, in which the objective is not to assume that every additional modality helps, but to learn what each is worth for a given pathology.`,

    dataset: 'Symile-MIMIC',

    modalities: [
      'Chest X-rays (CXR)',
      'Electrocardiograms (ECG)',
      'Blood Laboratory Data',
    ],

    diseases: [
      'Atelectasis',
      'Cardiomegaly',
      'Edema',
      'Lung Opacity',
      'Pleural Effusion',
    ],

    methodology: [
      {
        title: 'Stage 1: Cardiopulmonary Fusion',
        description:
          'CXR and ECG representations are combined using per-sample gated attention to generate a 256-dimensional cardiopulmonary representation.',
      },
      {
        title: 'Stage 2: Biochemical Integration',
        description:
          'The intermediate representation is integrated with blood laboratory features through a second attention mechanism, producing a unified 128-dimensional multimodal representation.',
      },
    ],

    github: 'https://github.com/alveeishraque/XEB-Fuse-Net',
  }

  // Project Categories
  const projectFilters = [
    'All',
    'AI/ML & Research',
    'AI/ML & NLP',
    'Web & Software',
  ]

  // Filter Projects
  const filteredProjects =
    activeProjectFilter === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeProjectFilter
        )

  // Close project modal
  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
    <section
      id="research"
      className="scroll-mt-[104px] desktop:scroll-mt-[64px]"
    >
      <SectionHeading id="heading-research">
        Research
      </SectionHeading>

      {/* ========================================= */}
      {/* RESEARCH INTERESTS */}
      {/* ========================================= */}

      <Reveal>
        <div className="mb-8">
          <h3 className="text-[1.05rem] font-semibold text-mute mt-4 mb-4">
            Research Interests
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            {researchInterests.map((interest) => (
              <div
                key={interest}
                className="
                  flex items-center gap-4 py-3
                  border-b border-dashed border-[var(--research-underline)]
                  group transition-colors duration-300
                "
              >
              {React.createElement(researchInterestIcons[interest] || Layers, {
                className: 'w-6 h-6 text-accent shrink-0 transition-transform group-hover:scale-110',
              })}

                <span
                  className="
                    text-sm text-fg font-medium
                    group-hover:text-accent
                    transition-colors
                  "
                >
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ========================================= */}
      {/* UNDERGRADUATE THESIS */}
      {/* ========================================= */}

      <Reveal>
        <div className="mt-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[1.05rem] font-semibold text-mute">
              Undergraduate Thesis
            </h3>

            {/* <span className="text-xs text-mute">
              2025–2026
            </span> */}
          </div>

          {/* Updated Thesis Card Styling */}
          <Card
            className="
              group flex flex-col sm:flex-row gap-5
              rounded-2xl
              border border-line
              bg-card
              p-5
              transition-all duration-300
              hover:border-accent/40
              hover:-translate-y-1
              cursor-pointer
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
            "
            role="button"
            tabIndex={0}
            aria-label="View undergraduate thesis details"
            onClick={() => setShowThesisDetails(true)}
            onKeyDown={(event) => {
              if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault()
                setShowThesisDetails(true)
              }
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}undergrad%20thesis.png`}
              alt="XEB-FuseNet model architecture"
              className="w-full h-40 sm:w-1/3 sm:h-48 sm:self-center shrink-0 rounded-lg border border-line bg-white object-contain"
            />

            <div className="flex min-w-0 flex-1 flex-col gap-4">
              {/* Category */}
              <div className="flex items-center justify-between gap-3">
                <Chip variant="default">
                  Multimodal Deep Learning
                </Chip>

                <span className="text-xs text-mute">
                  2025-2026
                </span>
              </div>

              {/* Thesis Title */}
              <h4
                className="
                  text-base sm:text-lg
                  font-semibold text-fg
                  leading-relaxed
                  group-hover:text-accent-t
                  transition-colors duration-200
                "
              >
                {thesis.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-mute leading-relaxed">
                {thesis.shortDescription}
              </p>

              {/* Modalities */}
              <div className="flex flex-wrap gap-2">
                {thesis.modalities.map((modality) => (
                  <Chip key={modality} variant="skill">
                    {modality}
                  </Chip>
                ))}
              </div>

              {/* Actions */}
              <div
                className="
                  flex flex-wrap items-center justify-between
                  gap-3 pt-4
                  border-t border-line
                "
              >
                <a
                  href={thesis.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="
                    inline-flex items-center gap-2
                    text-sm text-mute
                    hover:text-accent
                    transition-colors
                  "
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                  <ArrowUpRight size={13} />
                </a>

              </div>
            </div>
          </Card>
        </div>
      </Reveal>

      {/* ========================================= */}
      {/* THESIS DETAILS MODAL */}
      {/* ========================================= */}

      {showThesisDetails && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/70 backdrop-blur-sm p-4
          "
          onClick={() => setShowThesisDetails(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="thesis-modal-title"
            className="
              relative w-full max-w-3xl
              max-h-[85vh] overflow-y-auto
              bg-bg border border-line
              rounded-xl shadow-2xl
              p-5 sm:p-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FileText size={17} className="text-accent" />

                <span
                  className="
                    text-xs uppercase
                    tracking-[0.12em]
                    font-semibold text-mute
                  "
                >
                  Undergraduate Thesis
                </span>
              </div>

              <button
                type="button"
                onClick={() => setShowThesisDetails(false)}
                aria-label="Close thesis details"
                className="
                  p-2 rounded-lg
                  text-mute hover:text-fg
                  hover:bg-hover
                  transition-colors
                "
              >
                <X size={19} />
              </button>
            </div>

            {/* Title */}
            <h2
              id="thesis-modal-title"
              className="
                text-xl sm:text-2xl
                font-bold text-fg
                leading-relaxed
              "
            >
              {thesis.title}
            </h2>

            <div className="flex flex-wrap gap-2 mt-4 mb-6">
              <Chip variant="default">
                Multimodal Deep Learning
              </Chip>

              <Chip variant="skill">
                2025–2026
              </Chip>
            </div>

            {/* Abstract */}
            <div className="mt-6">
              <h3 className="text-base font-semibold text-fg mb-4">
                Abstract
              </h3>

              <div
                className="
                  text-sm sm:text-[0.9rem]
                  text-mute leading-[1.9]
                  space-y-4
                "
              >
                {thesis.abstract.split('\n\n').map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Dataset */}
            <div className="mt-8 pt-6 border-t border-line">
              <h3 className="text-sm font-semibold text-fg mb-3">
                Dataset & Modalities
              </h3>

              <p className="text-sm text-mute mb-3">
                Dataset:{' '}
                <span className="text-fg font-medium">
                  {thesis.dataset}
                </span>
              </p>

              <div className="flex flex-wrap gap-2">
                {thesis.modalities.map((modality) => (
                  <Chip key={modality} variant="skill">
                    {modality}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Target Conditions */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-fg mb-3">
                Target Conditions
              </h3>

              <div className="flex flex-wrap gap-2">
                {thesis.diseases.map((disease) => (
                  <Chip key={disease} variant="default">
                    {disease}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div className="mt-7">
              <h3 className="text-sm font-semibold text-fg mb-4">
                Proposed Methodology
              </h3>

              <div className="space-y-5">
                {thesis.methodology.map((stage) => (
                  <div
                    key={stage.title}
                    className="border-l-2 border-accent/50 pl-4"
                  >
                    <p className="text-sm font-semibold text-fg">
                      {stage.title}
                    </p>

                    <p className="text-sm text-mute leading-relaxed mt-2">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div
              className="
                mt-8 pt-5
                border-t border-line
                flex flex-wrap items-center
                justify-between gap-4
              "
            >
              <a
                href={thesis.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  text-sm font-medium text-fg
                  hover:text-accent
                  transition-colors
                "
              >
                <Github size={16} />
                View Source Code
                <ArrowUpRight size={14} />
              </a>

              <Button
                variant="secondary"
                onClick={() => setShowThesisDetails(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>

      {/* ========================================= */}
      {/* PROJECTS SECTION */}
      {/* ========================================= */}

    <section
      id="projects"
      className="scroll-mt-[104px] desktop:scroll-mt-[64px]"
    >
      <Reveal>
        <div className="mt-12">
          {/* Projects Heading */}
          <h3
            className="
              text-2xl sm:text-[2rem]
              font-bold tracking-tight
              text-fg mb-7
            "
          >
            Projects
          </h3>

          {/* Project Filters */}
          <div
            className="
              flex flex-wrap items-center
              gap-2 sm:gap-4
              pb-4 mb-7
              border-b border-line
            "
          >
            <span className="text-xs text-mute mr-1">
              Filter By:
            </span>

            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveProjectFilter(filter)}
                aria-pressed={activeProjectFilter === filter}
                className={`
                  rounded-lg px-3 py-2
                  text-xs font-medium
                  border transition-all duration-200
                  ${
                    activeProjectFilter === filter
                      ? 'bg-hover border-line text-accent'
                      : 'border-transparent text-mute hover:text-fg hover:bg-hover'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          {filteredProjects.length > 0 ? (
            <div
              className="
                grid grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-4
              "
            >
              {filteredProjects.map((proj, idx) => {
                const technologies =
                  proj.technologies || proj.techStack || proj.tags || []

                const visibleTechnologies = technologies.slice(0, 4)

                const remainingCount =
                  technologies.length - visibleTechnologies.length

                return (
                  <Reveal
                    key={proj.title}
                    delay={idx * 80}
                    className="h-full"
                  >
                    <article
                      className="
                        group h-full min-h-[345px]
                        flex flex-col
                        rounded-2xl
                        border border-line
                        bg-card
                        p-5
                        transition-all duration-300
                        hover:border-accent/40
                        hover:-translate-y-1
                      "
                    >
                      {/* Card Header */}
                      <div
                        className="
                          flex items-center
                          justify-between
                          gap-2 mb-4
                        "
                      >
                        <span
                          className="
                            inline-flex items-center
                            rounded-md
                            border border-line
                            px-2.5 py-1
                            text-[11px]
                            font-medium
                            text-mute
                          "
                        >
                          {proj.category || 'Project'}
                        </span>

                        <span
                          className="
                            text-[10px]
                            font-mono
                            text-mute
                            whitespace-nowrap
                          "
                        >
                          {proj.status === 'current'
                            ? 'Ongoing Project'
                            : 'Completed Project'}
                        </span>
                      </div>

                      {/* Project Content */}
                      <div className="flex-1 flex flex-col">
                        <h4
                          className="
                            text-[0.96rem]
                            font-semibold
                            text-fg
                            leading-snug
                            mb-1.5
                            group-hover:text-accent-t
                            transition-colors duration-200
                          "
                        >
                          {proj.title}
                        </h4>

                        {proj.subtitle && (
                          <p
                            className="
                              text-xs
                              text-accent-t
                              font-medium
                              leading-relaxed
                              mb-3
                            "
                          >
                            {proj.subtitle}
                          </p>
                        )}

                        <p
                          className="
                            text-[0.82rem]
                            text-fg
                            leading-relaxed
                            line-clamp-3
                            mb-4
                          "
                        >
                          {proj.description}
                        </p>

                        {/* Technology Tags */}
                        {technologies.length > 0 && (
                          <div
                            className="
                              flex flex-wrap
                              gap-1.5 mt-auto
                            "
                          >
                            {visibleTechnologies.map((tech) => (
                              <span
                                key={tech}
                                className="
                                  inline-flex items-center
                                  rounded-md
                                  border border-line
                                  bg-hover
                                  px-2 py-1
                                  text-[10px]
                                  font-mono
                                  text-mute
                                "
                              >
                                {tech}
                              </span>
                            ))}

                            {remainingCount > 0 && (
                              <span
                                className="
                                  inline-flex items-center
                                  px-1.5 py-1
                                  text-[10px]
                                  font-mono
                                  text-mute
                                "
                              >
                                +{remainingCount}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Card Footer */}
                      <div
                        className="
                          flex items-center
                          justify-between
                          gap-3
                          mt-6 pt-4
                          border-t border-line
                        "
                      >
                        {/* View Details */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(proj)}
                          className="
                            inline-flex items-center
                            gap-1.5
                            text-xs font-medium
                            text-accent-t
                            hover:text-accent
                            transition-colors
                          "
                        >
                          View Details
                          <ArrowUpRight size={14} />
                        </button>

                        {/* GitHub */}
                        {(proj.code || proj.github) && (
                          <a
                            href={proj.code || proj.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`GitHub repository for ${proj.title}`}
                            className="
                              p-1.5
                              text-mute
                              hover:text-fg
                              transition-colors
                            "
                          >
                            <Github
                              size={16}
                              strokeWidth={1.6}
                            />
                          </a>
                        )}
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          ) : (
            <div
              className="
                rounded-xl
                border border-line
                bg-card
                p-10
                text-center
              "
            >
              <p className="text-sm text-mute">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* View More Projects */}
          <div className="mt-8 flex justify-center">
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center
                justify-center gap-2
                rounded-lg
                border border-line
                bg-card
                px-5 py-3
                text-sm font-medium
                text-fg
                transition-all duration-300
                hover:border-accent/50
                hover:bg-hover
                hover:text-accent
              "
            >
              <Github size={16} />
              View More Projects
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </Reveal>

      {/* ========================================= */}
      {/* PROJECT DETAILS POPUP */}
      {/* ========================================= */}

      {selectedProject && (
        <div
          className="
            fixed inset-0 z-[110]
            flex items-center justify-center
            bg-black/70 backdrop-blur-sm
            p-4
          "
          onClick={closeProjectModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="
              relative w-full max-w-2xl
              max-h-[85vh] overflow-y-auto
              bg-bg
              border border-line
              rounded-xl
              shadow-2xl
              p-5 sm:p-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="
                flex items-center
                justify-between
                gap-4 mb-6
              "
            >
              <div className="flex items-center gap-2">
                <FileText
                  size={17}
                  className="text-accent"
                />

                <span
                  className="
                    text-xs uppercase
                    tracking-[0.12em]
                    font-semibold text-mute
                  "
                >
                  Project Details
                </span>
              </div>

              <button
                type="button"
                onClick={closeProjectModal}
                aria-label="Close project details"
                className="
                  p-2 rounded-lg
                  text-mute
                  hover:text-fg
                  hover:bg-hover
                  transition-colors
                "
              >
                <X size={19} />
              </button>
            </div>

            {/* Project Category and Status */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Chip variant="default">
                {selectedProject.category || 'Project'}
              </Chip>

              <Chip variant="skill">
                {selectedProject.status === 'current'
                  ? 'Ongoing'
                  : 'Completed'}
              </Chip>

              {selectedProject.period && (
                <span className="text-xs text-mute">
                  {selectedProject.period}
                </span>
              )}
            </div>

            {/* Project Title */}
            <h2
              id="project-modal-title"
              className="
                text-xl sm:text-2xl
                font-bold text-fg
                leading-relaxed
              "
            >
              {selectedProject.title}
            </h2>

            {/* Subtitle */}
            {selectedProject.subtitle && (
              <p
                className="
                  mt-3
                  text-sm font-medium
                  text-accent-t
                  leading-relaxed
                "
              >
                {selectedProject.subtitle}
              </p>
            )}

            {/* Description */}
            <div className="mt-7">
              <h3
                className="
                  text-sm font-semibold
                  text-fg mb-3
                "
              >
                Overview
              </h3>

              <p
                className="
                  text-sm text-mute
                  leading-[1.9]
                "
              >
                {selectedProject.longDescription ||
                  selectedProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-7">
              <h3
                className="
                  text-sm font-semibold
                  text-fg mb-3
                "
              >
                Technologies & Tools
              </h3>

              <div className="flex flex-wrap gap-2">
                {(
                  selectedProject.technologies ||
                  selectedProject.techStack ||
                  selectedProject.tags ||
                  []
                ).map((tech) => (
                  <Chip key={tech} variant="skill">
                    {tech}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Optional Additional Details */}
            {selectedProject.highlights?.length > 0 && (
              <div className="mt-7">
                <h3
                  className="
                    text-sm font-semibold
                    text-fg mb-3
                  "
                >
                  Key Highlights
                </h3>

                <ul className="space-y-3">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="
                        flex items-start gap-3
                        text-sm text-mute
                        leading-relaxed
                      "
                    >
                      <span
                        className="
                          w-1.5 h-1.5
                          rounded-full
                          bg-accent
                          shrink-0 mt-2
                        "
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Footer */}
            <div
              className="
                mt-8 pt-5
                border-t border-line
                flex flex-wrap
                items-center
                justify-between gap-4
              "
            >
              <div className="flex flex-wrap items-center gap-4">
                {(selectedProject.code || selectedProject.github) && (
                  <a
                    href={selectedProject.code || selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-medium
                      text-fg
                      hover:text-accent
                      transition-colors
                    "
                  >
                    <Github size={16} />
                    GitHub Repository
                    <ArrowUpRight size={14} />
                  </a>
                )}

                {selectedProject.website && (
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-medium
                      text-fg
                      hover:text-accent
                      transition-colors
                    "
                  >
                    <ExternalLink size={15} />
                    Live Project
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>

              <Button
                variant="secondary"
                onClick={closeProjectModal}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  )
}

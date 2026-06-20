import { motion } from 'framer-motion';
import { ArrowUpRight, Folder } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    id: 'docmind',
    title: 'DocMind AI',
    date: 'Ongoing — June 2026',
    featured: true,
    tech: ['Python', 'FastAPI', 'LangChain', 'RAG', 'ChromaDB', 'Embeddings', 'Vector Search'],
    description:
      'Built an AI-powered document intelligence platform enabling users to upload complex PDFs that are processed, indexed, and made queryable in natural language. Utilizes advanced Retrieval-Augmented Generation (RAG) to serve context-rich, cited answers.',
    impacts: [
      'Engineered semantic vector search pipelines ensuring context-aware citation and response verification.',
      'Developed high-throughput FastAPI endpoints facilitating efficient PDF parsing, chunking, and parallelized embedding generation.',
      'Optimized query speeds and accuracy by tweaking retrieval models and fine-tuning vector dimensions.'
    ],
    github: 'https://github.com/harisbalajee/docmind-ai',
  },
  {
    id: 'derbi',
    title: 'Derbi Analysis System',
    date: 'January 2026',
    featured: false,
    tech: ['Python', 'Jupyter Notebook', 'CSS', 'Scikit-Learn', 'SciPy'],
    description:
      'Developed an AI-powered Space Situational Awareness (SSA) system targeting orbital debris tracking and live collision risk assessment for operational satellites.',
    impacts: [
      'Leveraged historical orbital elements to build predictive trajectory models, minimizing false-alarm warning rates.',
      'Calculated orbital conjunction probabilities, empowering mission controllers with optimized satellite fuel-burn maneuvers.'
    ],
    github: 'https://github.com/harisbalajee',
  },
  {
    id: 'finsight',
    title: 'FinSight-AI',
    date: 'December 2025',
    featured: false,
    tech: ['Python (AI Libraries)', 'TypeScript', 'CSS', 'LLM Agents'],
    description:
      'Created a conversational business intelligence platform that allows non-technical stakeholders to analyze complex financial datasets using intuitive natural language interfaces.',
    impacts: [
      'Configured agentic reporting pipelines translating raw numerical data sheets into clear executive summaries.',
      'Designed interactive front-end analytics widgets displaying real-time financial trajectory charts.'
    ],
    github: 'https://github.com/harisbalajee',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 w-full px-6 md:px-12 lg:px-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-accent mb-4 block">
              02 / Work
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              Selected Creations
            </h2>
          </div>
          <p className="font-sans text-zinc-500 text-sm max-w-xs mt-4 md:mt-0">
            Applying machine learning models and rigorous software architecture to real-world problems.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`glass-panel glass-panel-hover p-8 md:p-10 rounded-sm flex flex-col justify-between group transition-all duration-300 relative overflow-hidden ${
                project.featured ? 'lg:col-span-12' : 'lg:col-span-6'
              }`}
            >
              {/* Radial Hover glow */}
              <div className="absolute inset-0 bg-radial from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/5 border border-white/5 rounded-sm text-accent group-hover:scale-110 transition-transform duration-300">
                      <Folder className="w-5 h-5" />
                    </div>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-zinc-500">
                      {project.date}
                    </span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 border border-white/5 rounded-full text-zinc-400 hover:text-accent hover:border-accent/40 transition-all duration-300"
                    aria-label={`View ${project.title} code`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Title & Desc */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>
                <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-6 max-w-4xl">
                  {project.description}
                </p>

                {/* Key Bullet Impact Points */}
                <ul className="space-y-3 mb-8">
                  {project.impacts.map((impact, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-zinc-400 font-sans text-xs sm:text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] sm:text-xs text-zinc-300 font-sans tracking-wide rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

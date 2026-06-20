import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const titleWordVariants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full flex flex-col items-start"
      >
        {/* Modern Label */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-sans text-xs uppercase tracking-widest text-zinc-400">
            Available for Research & Collaborations
          </span>
        </motion.div>

        {/* Confident Typography */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={titleWordVariants}
            className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-none"
          >
            HARIS BALAJEE
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.div
            variants={titleWordVariants}
            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
          >
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-zinc-400">
              AI & Software Engineer
            </h2>
            <span className="text-accent text-3xl font-display hidden sm:inline">•</span>
            <span className="text-zinc-500 font-sans text-sm tracking-widest uppercase">
              B.E. Computer Science
            </span>
          </motion.div>
        </div>

        {/* Value Prop */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-3xl font-light leading-relaxed mb-12"
        >
          Developing intelligent systems at the intersection of{' '}
          <span className="text-white font-medium underline decoration-accent/40 decoration-2 underline-offset-4">
            Retrieval-Augmented Generation (RAG)
          </span>
          ,{' '}
          <span className="text-white font-medium underline decoration-accent/40 decoration-2 underline-offset-4">
            vector databases
          </span>
          , and{' '}
          <span className="text-white font-medium underline decoration-accent/40 decoration-2 underline-offset-4">
            Space Situational Awareness
          </span>
          .
        </motion.p>

        {/* Socials & CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-6"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3.5 bg-accent hover:bg-accent-hover text-bg-deep font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-lg shadow-accent/10"
          >
            View Projects
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/harisbalajee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/5 bg-white/5 hover:border-accent/40 hover:bg-accent-muted/10 text-zinc-400 hover:text-white rounded-full transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/5 bg-white/5 hover:border-accent/40 hover:bg-accent-muted/10 text-zinc-400 hover:text-white rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:harisbalajee61@gmail.com"
              className="p-3 border border-white/5 bg-white/5 hover:border-accent/40 hover:bg-accent-muted/10 text-zinc-400 hover:text-white rounded-full transition-all duration-300"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hidden md:flex"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-500">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

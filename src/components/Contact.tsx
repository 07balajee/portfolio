import { useState } from 'react';
import { motion } from 'framer-motion';

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

const CopyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'harisbalajee61@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="contact" className="pt-24 md:pt-32 pb-12 w-full px-6 md:px-12 lg:px-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto flex flex-col min-h-[60vh] justify-between">
        
        {/* Main CTA Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col items-start max-w-5xl"
        >
          <motion.span
            variants={itemVariants}
            className="font-sans text-xs uppercase tracking-widest text-accent mb-4 block"
          >
            05 / Contact
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-none mb-8"
          >
            Let's Collaborate <br />
            On The Next Frontier.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-sans text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-12"
          >
            I am always open to discussing research roles, open-source AI projects, competitive programming, or backend engineering internships. Let's start a conversation.
          </motion.p>

          {/* Contact Details & Copy Box */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Email Copier */}
            <div className="flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/5 rounded-sm relative group hover:border-accent-border/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-accent" />
                <span className="font-sans text-sm font-light text-zinc-300">{email}</span>
              </div>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-white/5 rounded text-zinc-400 hover:text-white transition-colors"
                aria-label="Copy email address"
              >
                {copied ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Send button */}
            <a
              href={`mailto:${email}`}
              className="px-6 py-4 bg-accent hover:bg-accent-hover text-bg-deep font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 text-center"
            >
              Send Message
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display font-bold text-sm tracking-tight text-white">
              HARIS BALAJEE PL
            </span>
            <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/harisbalajee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-accent font-sans text-xs uppercase tracking-widest transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-accent font-sans text-xs uppercase tracking-widest transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 border border-white/5 rounded-full text-zinc-400 hover:text-accent hover:border-accent/40 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

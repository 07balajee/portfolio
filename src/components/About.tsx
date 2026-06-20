import { motion } from 'framer-motion';
import { Sparkles, Brain, Code } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const stats = [
    { icon: <Brain className="w-5 h-5 text-accent" />, label: 'CGPA', value: '8.17/10' },
    { icon: <Code className="w-5 h-5 text-accent" />, label: 'LeetCode Solved', value: '125+' },
    { icon: <Sparkles className="w-5 h-5 text-accent" />, label: 'SkillRack Solved', value: '880+' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 w-full px-6 md:px-12 lg:px-24 border-t border-white/5 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
      >
        {/* Left column: Header & Pull Quote */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <motion.span
            variants={itemVariants}
            className="font-sans text-xs uppercase tracking-widest text-accent mb-4 block"
          >
            01 / Profile
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-8"
          >
            Engineering With Precision
          </motion.h2>

          {/* Styled Stats Box */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 mt-auto pt-8 border-t border-white/10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="mb-2 p-2 bg-white/5 border border-white/5 rounded">
                  {stat.icon}
                </div>
                <span className="font-display text-lg font-bold text-white">{stat.value}</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-500 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column: synthesized bio */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-6"
          >
            I am currently pursuing my Bachelor of Engineering (B.E.) in Computer Science at{' '}
            <strong className="text-white font-medium">Sri Eshwar College of Engineering</strong>{' '}
            (Class of 2028). Driven by curiosity and a desire to build systems that scale, I specialize in
            crafting high-performance backends and AI-augmented applications.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="font-sans text-base text-zinc-400 font-light leading-relaxed mb-6"
          >
            My engineering philosophy centers around strong computational foundations. I invest heavily in
            mastering Data Structures & Algorithms, Object-Oriented Programming, and Database Management
            Systems. By pairing these traditional principles with state-of-the-art AI tooling—such as
            LangChain, Hugging Face, and chroma vector stores—I develop applications that solve complex,
            real-world issues.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="font-sans text-base text-zinc-400 font-light leading-relaxed"
          >
            Whether it's building predictive models for orbital debris tracking (SSA) or engineering
            conversational analytics platforms for complex financial pipelines, I aim to merge high algorithmic
            efficiency with clean, user-centric system architecture.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

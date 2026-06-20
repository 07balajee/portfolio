import { motion } from 'framer-motion';
import { Database, Terminal, Cloud, Layers, Award, Target, Trophy } from 'lucide-react';

const skillCategories = [
  {
    icon: <Terminal className="w-5 h-5 text-accent" />,
    title: 'Languages',
    skills: ['Python', 'SQL', 'C++'],
  },
  {
    icon: <Layers className="w-5 h-5 text-accent" />,
    title: 'Frameworks & Libraries',
    skills: ['FastAPI', 'LangChain', 'ReactJS', 'Node.js', 'Express.js', 'Scikit-Learn', 'Transformers'],
  },
  {
    icon: <Database className="w-5 h-5 text-accent" />,
    title: 'Databases & Vector Stores',
    skills: ['MongoDB', 'SQL', 'ChromaDB'],
  },
  {
    icon: <Cloud className="w-5 h-5 text-accent" />,
    title: 'Cloud & Developer Tools',
    skills: ['AWS EC2', 'AWS S3', 'Docker', 'Git', 'GitHub', 'Postman', 'Power BI', 'Vercel', 'Hugging Face'],
  },
  {
    icon: <Target className="w-5 h-5 text-accent" />,
    title: 'AI/ML & Core Concepts',
    skills: ['RAG', 'Prompt Engineering', 'Embeddings', 'Vector Search', 'DSA', 'OOP', 'DBMS', 'Computer Networking'],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 w-full px-6 md:px-12 lg:px-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-accent mb-4 block">
              03 / Expertise
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              Skills & Metrics
            </h2>
          </div>
          <p className="font-sans text-zinc-500 text-sm max-w-xs mt-4 md:mt-0">
            A breakdown of my technical toolkit alongside verified competitive programming milestones.
          </p>
        </div>

        {/* Bento Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Coding Profile Stats Widget (Featured Bento Card) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-sm relative overflow-hidden flex flex-col justify-between border-accent/20 shadow-lg shadow-accent/5"
          >
            {/* Ambient gold glow */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent-muted/20 border border-accent-border/30 rounded-sm text-accent">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                    Coding Profiles & Benchmarks
                  </h3>
                  <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest">
                    Live stats & verification
                  </span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* LeetCode */}
                <div className="p-6 bg-white/5 border border-white/5 rounded-sm flex flex-col justify-between hover:border-accent-border/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans font-bold text-sm text-zinc-200">LeetCode</span>
                    <Trophy className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="font-display text-3xl font-extrabold text-white block">125+</span>
                    <span className="font-sans text-[11px] text-zinc-400 block mt-1">Problems Solved</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-2 text-[10px] sm:text-xs font-sans text-zinc-500">
                    <div>
                      <span>Max Rating</span>
                      <span className="block font-bold text-white mt-0.5">1489</span>
                    </div>
                    <div>
                      <span>Global Rank</span>
                      <span className="block font-bold text-white mt-0.5">4,15,018</span>
                    </div>
                  </div>
                </div>

                {/* SkillRack */}
                <div className="p-6 bg-white/5 border border-white/5 rounded-sm flex flex-col justify-between hover:border-accent-border/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans font-bold text-sm text-zinc-200">SkillRack</span>
                    <Target className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="font-display text-3xl font-extrabold text-white block">880+</span>
                    <span className="font-sans text-[11px] text-zinc-400 block mt-1">Problems Solved</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 text-[10px] sm:text-xs font-sans text-zinc-500">
                    <span>Target Areas</span>
                    <span className="block font-bold text-white mt-0.5">Data Structures & Core C++ / Python</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivation Quote */}
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light italic leading-relaxed border-l-2 border-accent pl-4 py-1">
              "Competitive programming is not just about solving questions, but refining algorithmic mindset, reducing runtime complexity, and building optimal logical pipelines."
            </p>
          </motion.div>

          {/* Skill Blocks */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel p-6 rounded-sm hover:border-white/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 border border-white/5 rounded-sm">
                    {category.icon}
                  </div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-white/5 border border-white/5 text-[11px] text-zinc-300 font-sans tracking-wide rounded-sm hover:text-accent hover:border-accent-border/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

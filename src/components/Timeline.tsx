import { motion } from 'framer-motion';
import { Calendar, Award, GraduationCap, Flame } from 'lucide-react';

const timelineEvents = [
  {
    year: '2024 — 2028',
    category: 'education',
    icon: <GraduationCap className="w-4 h-4 text-accent" />,
    title: 'Sri Eshwar College of Engineering',
    subtitle: 'B.E. Computer Science & Engineering',
    details: 'Currently in III Semester. Maintaining an active CGPA of 8.17/10. Focus on Core Computing, OOPs, Data Structures, and AI integrations.',
  },
  {
    year: '2026',
    category: 'achievement',
    icon: <Award className="w-4 h-4 text-accent" />,
    title: 'Hackathon Finalist & Runner-Up Milestones',
    subtitle: 'Multiple Contest Achievements',
    details: [
      'Finalist — GDG Hackathon | iamneo.ai',
      'Finalist — IFET Hack Warriors | IFET College of Engineering',
      'Runner-Up — Inter-College Design Thinking Contest | Sri Eshwar College of Engineering',
      'Finalist — GDG x Hyrup | Online Hackathon'
    ],
  },
  {
    year: '2026',
    category: 'certification',
    icon: <Flame className="w-4 h-4 text-accent" />,
    title: 'Data Science & Machine Learning Bootcamp',
    subtitle: 'Udemy Professional Certification',
    details: 'Comprehensive training covering statistical data modeling, predictive analytics pipelines, supervised/unsupervised algorithms, and neural network frameworks.',
  },
  {
    year: '2025',
    category: 'certification',
    icon: <Flame className="w-4 h-4 text-accent" />,
    title: 'Mastering Data Structures & Algorithms using C++',
    subtitle: 'Udemy Professional Certification',
    details: 'Rigorous algorithmic training centering on complexity analysis (Big O), tree-balancing, graph traversals, recursion, and advanced dynamic programming strategies.',
  },
  {
    year: '2023 — 2024',
    category: 'education',
    icon: <GraduationCap className="w-4 h-4 text-zinc-500" />,
    title: 'Sri Chaitanya Techno School',
    subtitle: 'Class XII (Senior Secondary)',
    details: 'Completed High School curriculum with a concentration in Mathematics, Physics, and Chemistry. Secured 71.8%.',
  },
  {
    year: '2021 — 2022',
    category: 'education',
    icon: <GraduationCap className="w-4 h-4 text-zinc-500" />,
    title: 'Vedanta Academy Senior Secondary School',
    subtitle: 'Class X (Secondary School)',
    details: 'Completed general secondary education under CBSE. Secured 82%.',
  },
];

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="timeline" className="py-24 md:py-32 w-full px-6 md:px-12 lg:px-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-accent mb-4 block">
              04 / Timeline
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              Path & Milestones
            </h2>
          </div>
          <p className="font-sans text-zinc-500 text-sm max-w-xs mt-4 md:mt-0">
            A chronological mapping of my academic trajectory, hackathon contests, and specialization pathways.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
          {/* Vertical Glowing Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-white/10 to-transparent pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Bullet Node */}
                <div className="absolute -left-[41px] md:-left-[73px] top-1.5 p-2 bg-bg-deep border border-white/10 rounded-full group-hover:border-accent/40 group-hover:bg-accent-muted/20 transition-all duration-300 z-10 flex items-center justify-center">
                  {event.icon}
                </div>

                {/* Event Card */}
                <div className="glass-panel p-6 md:p-8 rounded-sm hover:border-white/10 transition-all duration-300 relative">
                  {/* Subtle Date Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-wider text-accent uppercase">
                      {event.year}
                    </span>
                    <span className="text-zinc-700 font-sans">•</span>
                    <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest">
                      {event.category}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-tight mb-1">
                    {event.title}
                  </h3>
                  <h4 className="font-sans text-xs sm:text-sm text-zinc-400 font-medium mb-4">
                    {event.subtitle}
                  </h4>

                  {/* Details Body */}
                  {Array.isArray(event.details) ? (
                    <ul className="space-y-2 mt-2">
                      {event.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-zinc-400 font-sans text-xs sm:text-sm font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed font-light">
                      {event.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

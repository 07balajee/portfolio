import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills & Stats', href: '#skills' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = ['hero', 'about', 'projects', 'skills', 'timeline', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-bg-deep/80 backdrop-blur-md border-b border-white/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="font-display font-bold text-xl tracking-tight text-white group flex items-center gap-1.5"
          >
            <span>HARIS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
            <span className="text-zinc-500 font-normal text-sm font-sans tracking-widest ml-1 hidden sm:inline">BALAJEE</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href)}
                      className={`relative font-sans text-xs uppercase tracking-widest transition-colors duration-300 py-1 ${
                        isActive ? 'text-accent' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="navActiveLine"
                          className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-accent"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="mailto:harisbalajee61@gmail.com"
              className="px-4 py-2 border border-accent/30 bg-accent-muted/20 text-accent font-sans text-xs uppercase tracking-widest rounded-sm hover:bg-accent hover:text-bg-deep transition-all duration-300 flex items-center gap-2"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] bg-bg-deep/95 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center px-8 border-t border-white/5"
          >
            <ul className="flex flex-col gap-6 mb-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className="font-display font-bold text-3xl text-zinc-300 hover:text-accent transition-colors flex items-center justify-between"
                  >
                    {item.name}
                    <span className="text-zinc-600 font-sans text-sm font-normal">
                      /{item.href.replace('#', '0')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:harisbalajee61@gmail.com"
              className="py-4 border border-accent/20 bg-accent-muted/10 text-accent text-center font-sans text-sm uppercase tracking-widest rounded hover:bg-accent hover:text-bg-deep transition-all duration-300"
            >
              Email Me Directly
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

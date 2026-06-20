import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { useLenis } from './hooks/useLenis';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="relative min-h-screen bg-bg-deep text-zinc-300 font-sans selection:bg-accent selection:text-bg-deep antialiased">
      {/* Noise texture overlay */}
      <div className="noise-bg" />

      {/* Living Interactive Mesh Background */}
      <CanvasBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 130,
    };

    // Scroll progress
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.8;
      }

      update() {
        if (prefersReducedMotion) return;

        // Base velocity drift
        this.x += this.vx;
        this.y += this.vy;

        // Boundaries loop
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse interaction (gentle repulsion)
        if (mouse.x > -1000) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 1.2;
            this.y += Math.sin(angle) * force * 1.2;
          }
        }
      }

      draw() {
        if (!ctx) return;
        // Parallax effect on scroll
        const parallaxY = scrollY * 0.06;
        const drawY = (this.y - parallaxY + height * 2) % height;
        
        ctx.beginPath();
        ctx.arc(this.x, drawY, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(251, 191, 36, 0.22)'; // Amber shade
        ctx.fill();
      }
    }

    // Initialize particles based on screen size
    const particleCount = Math.min(50, Math.floor((width * height) / 30000));
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Render loop
    const render = () => {
      // Ease mouse coordinates
      if (mouse.x === -1000) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }

      // Clear with background color
      ctx.fillStyle = 'hsl(240, 10%, 4%)';
      ctx.fillRect(0, 0, width, height);

      // Draw premium gradient blob mesh in background
      const gradX = width / 2 + Math.sin(Date.now() * 0.0003) * (width * 0.2);
      const gradY = height / 2 + Math.cos(Date.now() * 0.0002) * (height * 0.2) - (scrollY * 0.1);
      
      const gradient = ctx.createRadialGradient(
        gradX,
        gradY,
        50,
        gradX,
        gradY,
        Math.max(width, height) * 0.7
      );
      
      // Electric Amber and dark slate blend
      gradient.addColorStop(0, 'rgba(251, 191, 36, 0.035)');
      gradient.addColorStop(0.4, 'rgba(124, 58, 237, 0.012)'); // Subtle violet/indigo hue mix
      gradient.addColorStop(1, 'rgba(10, 10, 12, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw particle mesh
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connection lines
      if (!prefersReducedMotion) {
        ctx.lineWidth = 0.5;
        const parallaxY = scrollY * 0.06;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const p1y = (p1.y - parallaxY + height * 2) % height;
            const p2y = (p2.y - parallaxY + height * 2) % height;

            const dx = p1.x - p2.x;
            const dy = p1y - p2y;
            const dist = Math.hypot(dx, dy);

            if (dist < 140) {
              const alpha = ((140 - dist) / 140) * 0.07;
              ctx.strokeStyle = `rgba(251, 191, 36, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1y);
              ctx.lineTo(p2.x, p2y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 block pointer-events-none" />;
}

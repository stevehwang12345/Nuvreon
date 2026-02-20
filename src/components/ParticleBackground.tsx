"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
}

interface Burst {
  x: number;
  y: number;
  particles: Particle[];
  age: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let bursts: Burst[] = [];
    let ambient: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    // Create a burst of particles
    const createBurst = () => {
      const bx = Math.random() * w();
      const by = Math.random() * h();
      const count = 8 + Math.floor(Math.random() * 12);
      const particles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 0.3 + Math.random() * 1.2;
        const maxLife = 60 + Math.random() * 80;
        particles.push({
          x: bx,
          y: by,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife,
          size: 1 + Math.random() * 2,
          opacity: 0.15 + Math.random() * 0.25,
        });
      }

      bursts.push({ x: bx, y: by, particles, age: 0 });
    };

    // Ambient floating particles
    const createAmbient = () => {
      ambient.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.1 - Math.random() * 0.3,
        life: 0,
        maxLife: 200 + Math.random() * 200,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.05 + Math.random() * 0.15,
      });
    };

    // Seed initial ambient particles
    for (let i = 0; i < 3; i++) {
      const p = {
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.1 - Math.random() * 0.3,
        life: Math.random() * 200,
        maxLife: 200 + Math.random() * 200,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0.05 + Math.random() * 0.15,
      };
      ambient.push(p);
    }

    let frameCount = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      frameCount++;

      // Spawn bursts periodically (every ~5 seconds)
      if (frameCount % 300 === 0) createBurst();

      // Spawn ambient particles (keep only 2-3)
      if (frameCount % 60 === 0 && ambient.length < 3) createAmbient();

      // Draw & update ambient particles
      ambient = ambient.filter((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        const fade = progress < 0.2 ? progress / 0.2 : progress > 0.8 ? (1 - progress) / 0.2 : 1;
        const alpha = p.opacity * fade;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fill();

        return p.life < p.maxLife;
      });

      // Draw & update bursts
      bursts = bursts.filter((burst) => {
        burst.age++;
        let alive = false;

        burst.particles = burst.particles.filter((p) => {
          p.life++;
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.99;
          p.vy *= 0.99;

          const progress = p.life / p.maxLife;
          const fade = progress < 0.1 ? progress / 0.1 : 1 - progress;
          const alpha = p.opacity * Math.max(0, fade);

          if (alpha > 0.005) {
            // Glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.3})`;
            ctx.fill();

            // Core
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(147, 197, 253, ${alpha})`;
            ctx.fill();

            alive = true;
          }

          return p.life < p.maxLife;
        });

        return alive && burst.particles.length > 0;
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

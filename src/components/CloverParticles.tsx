import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  type: 'clover' | 'sparkle';
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
}

export const CloverParticles: React.FC = () => {
  const particles: Particle[] = useMemo(() => {
    const items: Particle[] = [];

    // Ambient floating 4-leaf clovers
    for (let i = 0; i < 14; i++) {
      items.push({
        id: i,
        type: 'clover',
        x: Math.floor(Math.random() * 95),
        y: Math.floor(Math.random() * 100),
        size: Math.floor(Math.random() * 20) + 18,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 4,
        rotate: Math.random() * 360,
      });
    }

    // Floating gold sparkles
    for (let i = 0; i < 22; i++) {
      items.push({
        id: 20 + i,
        type: 'sparkle',
        x: Math.floor(Math.random() * 96),
        y: Math.floor(Math.random() * 100),
        size: Math.floor(Math.random() * 7) + 3,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
        rotate: 0,
      });
    }

    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient background glows */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl" />

      {particles.map((p) => {
        if (p.type === 'clover') {
          return (
            <motion.div
              key={p.id}
              className="absolute text-emerald-400/40 drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
              }}
              animate={{
                y: [0, -35, 0],
                x: [0, 15, -10, 0],
                rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
                opacity: [0.3, 0.65, 0.3],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            >
              🍀
            </motion.div>
          );
        }

        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-amber-300/45 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              scale: [0.5, 1.4, 0.5],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

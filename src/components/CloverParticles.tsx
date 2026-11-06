import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  type: 'clover' | 'number' | 'sparkle';
  value?: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
}

export const CloverParticles: React.FC = () => {
  const particles: Particle[] = useMemo(() => {
    const luckyNumbers = ['07', '13', '21', '33', '55', '77', '88', '99', '00'];
    const items: Particle[] = [];

    // Ambient floating 4-leaf clovers
    for (let i = 0; i < 14; i++) {
      items.push({
        id: i,
        type: 'clover',
        x: Math.floor(Math.random() * 95),
        y: Math.floor(Math.random() * 100),
        size: Math.floor(Math.random() * 20) + 18,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 5,
        rotate: Math.random() * 360,
      });
    }

    // Floating lucky numbers
    for (let i = 0; i < 10; i++) {
      items.push({
        id: 20 + i,
        type: 'number',
        value: luckyNumbers[i % luckyNumbers.length],
        x: Math.floor(Math.random() * 90) + 5,
        y: Math.floor(Math.random() * 90) + 5,
        size: Math.floor(Math.random() * 8) + 13,
        duration: Math.random() * 10 + 14,
        delay: Math.random() * 6,
        rotate: Math.random() * 40 - 20,
      });
    }

    // Sparkles
    for (let i = 0; i < 16; i++) {
      items.push({
        id: 40 + i,
        type: 'sparkle',
        x: Math.floor(Math.random() * 96),
        y: Math.floor(Math.random() * 100),
        size: Math.floor(Math.random() * 8) + 4,
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
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />

      {particles.map((p) => {
        if (p.type === 'clover') {
          return (
            <motion.div
              key={p.id}
              className="absolute text-emerald-400/35 drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
              }}
              animate={{
                y: [0, -35, 0],
                x: [0, 15, -10, 0],
                rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
                opacity: [0.25, 0.55, 0.25],
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

        if (p.type === 'number') {
          return (
            <motion.div
              key={p.id}
              className="absolute font-mono font-bold text-amber-300/30 select-none border border-amber-400/20 rounded-full px-2 py-0.5 backdrop-blur-[1px]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
              }}
              animate={{
                y: [0, -45, 0],
                rotate: [p.rotate, p.rotate + 10, p.rotate - 10, p.rotate],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            >
              {p.value}
            </motion.div>
          );
        }

        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-amber-300/40"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              scale: [0.5, 1.4, 0.5],
              opacity: [0.15, 0.7, 0.15],
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

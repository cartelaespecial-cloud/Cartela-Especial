import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { WHATSAPP_GROUP_URL } from '../types';
import { playLuckyChime, playTickSound } from '../utils/audio';

interface WheelSector {
  label: string;
  sub: string;
  luckyNumber: string;
  color: string;
}

const SECTORS: WheelSector[] = [
  { label: 'Trevo Dourado', sub: 'Cota Alta Probabilidade', luckyNumber: '77', color: '#10B981' },
  { label: 'Dezena Mestra', sub: 'Palpite dos Campeões', luckyNumber: '13', color: '#F59E0B' },
  { label: 'Sorte Tripla', sub: 'Três Vezes Premiado', luckyNumber: '33', color: '#059669' },
  { label: 'Estrela Real', sub: 'Final com Maior Frequência', luckyNumber: '07', color: '#D97706' },
  { label: 'Dupla da Fortuna', sub: 'Palpite em Par', luckyNumber: '88', color: '#047857' },
  { label: 'Amuleto 99', sub: 'O Número do Fechamento', luckyNumber: '99', color: '#B45309' },
];

export const LuckyWheel: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<WheelSector | null>(null);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    // Audio clicks
    let tickCount = 0;
    const tickInterval = setInterval(() => {
      playTickSound();
      tickCount++;
      if (tickCount > 25) clearInterval(tickInterval);
    }, 120);

    const randomSectorIndex = Math.floor(Math.random() * SECTORS.length);
    const sectorAngle = 360 / SECTORS.length;
    // Calculate final rotation with at least 5 full spins
    const extraSpins = 360 * 5;
    const targetAngle = extraSpins + (SECTORS.length - 1 - randomSectorIndex) * sectorAngle + sectorAngle / 2;
    const finalRotation = rotation + targetAngle;

    setRotation(finalRotation);

    setTimeout(() => {
      setSpinning(false);
      setResult(SECTORS[randomSectorIndex]);
      playLuckyChime();
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10B981', '#F59E0B', '#34D399', '#FBBF24', '#FFFFFF'],
      });
    }, 3200);
  };

  const handleClaim = () => {
    if (!result) return;
    playLuckyChime();
    const msg = encodeURIComponent(
      `Olá! Girei a Roleta do Trevo no site da Cartelas Especial e tirei o amuleto [ ${result.label} ] com a dezena da sorte [ ${result.luckyNumber} ]! Quero garantir no grupo.`
    );
    window.open(`${WHATSAPP_GROUP_URL}&text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-900/60 border-t border-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <span>🎡</span>
            <span>Experiência Animada</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-amber-400">Roleta da Fortuna</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
            Gire a <span className="gold-gradient-text">Roleta do Trevo de 4 Folhas</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Teste sua intuição agora mesmo! Descubra seu amuleto de proteção e receba uma 
            recomendação especial de número para participar da próxima extração.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-4xl mx-auto">
          
          {/* Wheel Graphic */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              
              {/* Pointer indicator */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-amber-400 text-3xl filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]">
                ▼
              </div>

              {/* Outer Golden Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.25)] pointer-events-none" />

              {/* Animated Wheel */}
              <motion.div
                className="w-full h-full rounded-full relative overflow-hidden border-4 border-neutral-900 bg-neutral-950 shadow-2xl"
                animate={{ rotate: rotation }}
                transition={{
                  duration: 3.2,
                  ease: [0.15, 0.9, 0.2, 1], // Realistic spin deceleration
                }}
              >
                {SECTORS.map((sector, idx) => {
                  const angle = (360 / SECTORS.length) * idx;
                  return (
                    <div
                      key={sector.label}
                      className="absolute w-1/2 h-full top-0 right-0 origin-left flex items-center justify-center"
                      style={{
                        transform: `rotate(${angle}deg)`,
                      }}
                    >
                      <div
                        className="w-full h-full flex items-center justify-end pr-4 text-[11px] sm:text-xs font-bold text-white tracking-tight"
                        style={{
                          background: `conic-gradient(from -30deg at 0% 50%, ${sector.color}25 0deg, ${sector.color}55 60deg, transparent 60deg)`,
                        }}
                      >
                        <div className="text-right pr-2">
                          <div className="text-white drop-shadow">{sector.label}</div>
                          <div className="font-mono text-amber-300 text-[10px]">#{sector.luckyNumber} 🍀</div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Center Clover Hub */}
                <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-4 border-neutral-950 flex items-center justify-center shadow-lg z-10 text-2xl">
                  🍀
                </div>
              </motion.div>
            </div>

            {/* Spin Trigger Button */}
            <div className="mt-8">
              <button
                onClick={spinWheel}
                disabled={spinning}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 rounded-xl hover:brightness-110 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all cursor-pointer disabled:opacity-50 active:scale-95"
              >
                <span>🍀</span>
                <span>{spinning ? 'Girando a Fortuna...' : 'Girar Roleta da Sorte'}</span>
              </button>
            </div>
          </div>

          {/* Result / Oracle Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/90 p-6 shadow-xl backdrop-blur-sm text-center">
              {result ? (
                <div className="space-y-4">
                  <div className="text-4xl animate-bounce">🍀</div>
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                    Seu Amuleto Revelado
                  </div>
                  <h3 className="text-2xl font-black font-display text-white">
                    {result.label}
                  </h3>
                  <div className="inline-block px-4 py-2 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300 font-mono text-2xl font-black">
                    Número {result.luckyNumber}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {result.sub}. Este número carrega a vibração positiva da rodada atual!
                  </p>
                  <button
                    onClick={handleClaim}
                    className="w-full py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-emerald-400 to-amber-300 rounded-xl hover:brightness-110 transition-all cursor-pointer"
                  >
                    Garantir Este Número no WhatsApp
                  </button>
                </div>
              ) : (
                <div className="space-y-4 py-6">
                  <div className="text-4xl">🎰</div>
                  <h3 className="text-lg font-bold text-white">
                    Pronto para Revelar sua Sorte?
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Toque no botão e gire a roleta. O ponteiro apontará seu amuleto exclusivo 
                    e um palpite certeiro de 00 a 99 para você tentar a sorte na Federal.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

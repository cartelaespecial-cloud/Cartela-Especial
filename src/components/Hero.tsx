import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { WHATSAPP_GROUP_URL } from '../types';
import { playLuckyChime } from '../utils/audio';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 18,
    minutes: 42,
    seconds: 15,
  });

  // Countdown timer toward next Federal draw (simulated dynamic countdown)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleJoinWhatsApp = () => {
    playLuckyChime();
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#F59E0B', '#34D399', '#FBBF24', '#FFFFFF'],
    });
    window.open(WHATSAPP_GROUP_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_GROUP_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & High-Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
              <span className="text-base">🍀</span>
              <span>Comunidade Oficial da Sorte</span>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span className="text-amber-400">Extração Oficial Federal</span>
            </div>

            {/* Headline with strict type scale & balanced wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight [text-wrap:balance]">
              Rifas de Cartela <span className="gold-gradient-text">00 a 99</span> com Resultado pela <span className="emerald-gradient-text">Loteria Federal</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              O grupo oficial mais transparente e seguro de rifas de cartela fechada. 
              São apenas 100 números por rodada, chances reais de vitória e apuração 
              100% auditada pela Caixa Econômica Federal.
            </p>

            {/* Quick trust metrics row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-neutral-400 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Apenas 100 cotas por cartela</span>
              </div>
              <span className="text-neutral-700 hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>PIX imediato ao vencedor</span>
              </div>
              <span className="text-neutral-700 hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Sorteio às quartas e sábados</span>
              </div>
            </div>

            {/* CTA action cluster */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={handleJoinWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-bold text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 rounded-xl hover:brightness-110 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all cursor-pointer active:scale-95"
              >
                <svg className="w-5 h-5 fill-current text-emerald-950" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.536 1.771.848 2.796.848 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.634-5.768-5.634zm3.385 8.167c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.122-.519-1.823-.756-3.003-2.607-3.094-2.729-.091-.122-.741-.986-.741-1.88 0-.895.467-1.336.634-1.516.166-.18.363-.225.484-.225.122 0 .243.001.349.006.111.006.26-.042.406.31.152.365.517 1.261.562 1.353.045.092.076.2.015.321-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.471.777 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.122.456-.531.577-.714.122-.182.243-.152.409-.091.167.061 1.062.501 1.244.592.182.091.303.136.349.213.045.076.045.441-.099.846z"/>
                </svg>
                <span>Entrar no Grupo no WhatsApp</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700/80 rounded-xl hover:bg-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-400">✓</span>
                    <span>Link Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copiar Link de Convite</span>
                  </>
                )}
              </button>
            </div>

            {/* Live Draw Countdown Mini Bar */}
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="text-amber-400 text-sm">⏳</span>
                  <span className="font-semibold text-white">Próximo Sorteio Federal:</span>
                  <span className="text-neutral-400">Quarta/Sábado 19h</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono font-bold text-amber-300 text-sm tabular-nums">
                  <span className="bg-neutral-950 px-2 py-1 rounded border border-amber-500/30">
                    {String(timeLeft.hours).padStart(2, '0')}h
                  </span>
                  <span>:</span>
                  <span className="bg-neutral-950 px-2 py-1 rounded border border-amber-500/30">
                    {String(timeLeft.minutes).padStart(2, '0')}m
                  </span>
                  <span>:</span>
                  <span className="bg-neutral-950 px-2 py-1 rounded border border-amber-500/30">
                    {String(timeLeft.seconds).padStart(2, '0')}s
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset with Glass Carrier and Floating Accents */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 via-amber-500/15 to-transparent rounded-3xl blur-2xl transform scale-95" />

            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/90 shadow-2xl p-3">
              
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between px-3 py-2 text-xs border-b border-neutral-800/80 text-neutral-400 mb-2">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span>🍀</span> Cartela Especial VIP
                </span>
                <span className="font-mono text-amber-400">Edição 00 a 99</span>
              </div>

              {/* Verified Image Asset */}
              <div className="relative aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                <img
                  src="/src/assets/images/hero_trevo_sorte_1793991951177.jpg"
                  alt="Trevo de 4 folhas da sorte com orbes dourados e números de rifa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Lucky Badge */}
                <motion.div
                  className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-amber-400/30 text-xs flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🍀</span>
                    <div>
                      <div className="font-bold text-white">Trevo da Sorte Ativo</div>
                      <div className="text-[11px] text-neutral-400">Sua chance de levar o prêmio da semana</div>
                    </div>
                  </div>
                  <a
                    href="#cartela-interativa"
                    className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded hover:bg-emerald-500/30 transition-colors"
                  >
                    Ver Números
                  </a>
                </motion.div>
              </div>

              {/* Status info bar */}
              <div className="mt-3 px-2 py-1 text-center text-xs text-neutral-400">
                <span>Resultado oficial conferido pelos 2 últimos números do 1º prêmio</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

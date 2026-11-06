import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { playLuckyChime, playTickSound } from '../utils/audio';

export const FederalExplainer: React.FC = () => {
  const [simulatedTicket, setSimulatedTicket] = useState('73849');
  const [isSimulating, setIsSimulating] = useState(false);

  const winningNumber = simulatedTicket.slice(-2);

  const simulateFederalDraw = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let count = 0;
    const interval = setInterval(() => {
      const rand = String(Math.floor(Math.random() * 90000) + 10000);
      setSimulatedTicket(rand);
      playTickSound();
      count++;

      if (count > 10) {
        clearInterval(interval);
        const finalTicket = String(Math.floor(Math.random() * 90000) + 10000);
        setSimulatedTicket(finalTicket);
        setIsSimulating(false);
        playLuckyChime();
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.6 },
          colors: ['#34D399', '#FBBF24', '#10B981'],
        });
      }
    }, 100);
  };

  return (
    <section id="extracao-federal" className="py-16 md:py-24 bg-neutral-900/40 border-y border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 p-3 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800/80">
                <img
                  src="/src/assets/images/cartela_rifa_federal_1793991952209.jpg"
                  alt="Cartela de rifa oficial numerada de 00 a 99 com trevo de ouro"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-neutral-950/80 backdrop-blur-md rounded-lg border border-neutral-700/60 text-xs">
                  <div className="flex items-center justify-between font-mono text-neutral-300">
                    <span className="text-emerald-400 font-bold">✓ Cartela Fechada 00 a 99</span>
                    <span className="text-amber-400">100 Cotas</span>
                  </div>
                  <p className="mt-1 text-[11px] text-neutral-400">
                    Auditada e verificada pelo concurso oficial da Caixa Econômica Federal.
                  </p>
                </div>
              </div>

              {/* Security Badges */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-emerald-400 block font-bold">100% Auditável</span>
                  <span className="text-[11px] text-neutral-400">Qualquer pessoa confere</span>
                </div>
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-amber-400 block font-bold">Sem Intermediação</span>
                  <span className="text-[11px] text-neutral-400">Extração pública Caixa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Explaining the Federal Rule & Interactive Simulator */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
              <span>🏛️</span>
              <span>Auditoria Pública</span>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span className="text-amber-400">Regra de Ouro</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              Como Funciona a <span className="gold-gradient-text">Extração pela Loteria Federal</span>?
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Diferente de sorteios manuais ou geradores aleatórios na internet que podem ser manipulados, 
              as rifas da <strong>Cartelas Especial</strong> utilizam o resultado oficial 
              da <strong>Loteria Federal da Caixa Econômica Federal</strong>.
            </p>

            {/* Interactive Rule Box */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-2">
                <span className="font-semibold text-white">Demonstração Prática da Regra</span>
                <span>Últimos 2 Dígitos do 1º Prêmio</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
                <div>
                  <span className="text-xs text-neutral-400 block mb-1">
                    Exemplo de Bilhete Sorteado (1º Prêmio Federal):
                  </span>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold tracking-widest text-neutral-200">
                    <span>{simulatedTicket.slice(0, 3)}</span>
                    <span className="bg-amber-400 text-neutral-950 px-2 py-0.5 rounded ml-1 font-black shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                      {winningNumber}
                    </span>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <span className="text-xs text-neutral-400 block mb-1">Cota Vencedora:</span>
                  <div className="font-mono text-2xl sm:text-3xl font-black text-emerald-400">
                    Número {winningNumber} 🍀
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-2 border-t border-neutral-800/80">
                <button
                  onClick={simulateFederalDraw}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50"
                >
                  <span>🎲</span>
                  <span>{isSimulating ? 'Sorteando...' : 'Testar Outro Bilhete'}</span>
                </button>
                <span className="text-[11px] text-neutral-400">
                  Sorteios oficiais ocorrem toda quarta e sábado às 19:00
                </span>
              </div>
            </div>

            {/* Step list explanation */}
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">1.</span>
                <p>
                  A Caixa sorteia 5 prêmios compostos por bilhetes de 5 dígitos (ex: 73.8<strong>49</strong>).
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">2.</span>
                <p>
                  O número vencedor da nossa cartela de 100 números (00 a 99) corresponde exatamente à <strong>dezena final (dois últimos dígitos)</strong> do 1º prêmio.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">3.</span>
                <p>
                  Você pode acompanhar a extração ao vivo no canal oficial da Caixa no YouTube ou pelo site Loterias Caixa.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

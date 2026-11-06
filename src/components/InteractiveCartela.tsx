import React, { useState, useId } from 'react';
import confetti from 'canvas-confetti';
import { WHATSAPP_GROUP_URL } from '../types';
import { playTickSound, playLuckyChime } from '../utils/audio';

const LUCKY_NUMBERS = ['07', '13', '21', '33', '44', '55', '77', '88', '99'];

export const InteractiveCartela: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>(['07']);
  const [isSpinning, setIsSpinning] = useState(false);
  const [filterMode, setFilterMode] = useState<'all' | 'even' | 'odd' | 'lucky'>('all');
  const [quotaPrice] = useState<number>(20); // R$ 20 per cota default
  const numberGridId = useId();

  // Generate 00 to 99
  const allNumbers = Array.from({ length: 100 }, (_, i) => String(i).padStart(2, '0'));

  const toggleNumber = (num: string) => {
    playTickSound();
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else {
      if (selectedNumbers.length >= 10) {
        alert('Você pode selecionar até 10 números de uma vez no simulador.');
        return;
      }
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  const handleRandomLuckyNumber = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    let counter = 0;
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * 100);
      const tempNum = String(randomIdx).padStart(2, '0');
      setSelectedNumbers([tempNum]);
      playTickSound();
      counter++;

      if (counter >= 15) {
        clearInterval(interval);
        const finalNum = String(Math.floor(Math.random() * 100)).padStart(2, '0');
        setSelectedNumbers([finalNum]);
        setIsSpinning(false);
        playLuckyChime();
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#F59E0B', '#10B981', '#FBBF24'],
        });
      }
    }, 90);
  };

  const clearSelection = () => {
    setSelectedNumbers([]);
  };

  const handleReserveOnWhatsApp = () => {
    if (selectedNumbers.length === 0) {
      alert('Por favor, selecione ao menos um número na cartela.');
      return;
    }
    playLuckyChime();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#10B981', '#F59E0B', '#34D399'],
    });

    const numbersStr = selectedNumbers.join(', ');
    const message = encodeURIComponent(
      `Olá! Vim pelo site da Cartelas Especial e gostaria de garantir meus números da sorte na cartela: [ ${numbersStr} ]. Como faço o pagamento via PIX?`
    );
    // WhatsApp group URL or direct prefilled message intent
    const url = `${WHATSAPP_GROUP_URL}&text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const isVisible = (num: string) => {
    const val = parseInt(num, 10);
    if (filterMode === 'all') return true;
    if (filterMode === 'even') return val % 2 === 0;
    if (filterMode === 'odd') return val % 2 !== 0;
    if (filterMode === 'lucky') return LUCKY_NUMBERS.includes(num);
    return true;
  };

  return (
    <section id="cartela-interativa" className="py-16 md:py-24 bg-neutral-900/60 border-y border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <span>🍀</span>
            <span>Simulador Interativo Oficial</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-amber-400">00 ao 99</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
            Escolha o Seu <span className="gold-gradient-text">Número da Sorte</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Navegue pelos 100 números da cartela, faça combinações ou use nosso gerador de palpites da sorte. 
            Depois, reserve direto com os organizadores no grupo do WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main 10x10 Cartela Grid */}
          <div className="lg:col-span-8 bg-neutral-950/90 rounded-2xl border border-neutral-800 p-4 sm:p-6 shadow-xl backdrop-blur-sm">
            
            {/* Filter bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-neutral-800 text-xs">
              <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-lg">
                <button
                  onClick={() => setFilterMode('all')}
                  className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                    filterMode === 'all' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Todos (00-99)
                </button>
                <button
                  onClick={() => setFilterMode('even')}
                  className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                    filterMode === 'even' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Pares
                </button>
                <button
                  onClick={() => setFilterMode('odd')}
                  className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                    filterMode === 'odd' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Ímpares
                </button>
                <button
                  onClick={() => setFilterMode('lucky')}
                  className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                    filterMode === 'lucky' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Trevos da Sorte 🍀
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRandomLuckyNumber}
                  disabled={isSpinning}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-300 hover:bg-amber-500/25 transition-colors cursor-pointer font-semibold disabled:opacity-50"
                >
                  <span>🎲</span>
                  <span>{isSpinning ? 'Sorteando...' : 'Gerar Palpite Rápido'}</span>
                </button>
                {selectedNumbers.length > 0 && (
                  <button
                    onClick={clearSelection}
                    className="px-2 py-1.5 text-neutral-400 hover:text-rose-400 transition-colors cursor-pointer"
                    title="Limpar seleção"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>

            {/* Grid 10x10 */}
            <div
              id={numberGridId}
              className="grid grid-cols-10 gap-1.5 sm:gap-2.5 max-h-[480px] overflow-y-auto pr-1"
            >
              {allNumbers.map((num) => {
                const selected = selectedNumbers.includes(num);
                const isLucky = LUCKY_NUMBERS.includes(num);
                const visible = isVisible(num);

                if (!visible) return null;

                return (
                  <button
                    key={num}
                    onClick={() => toggleNumber(num)}
                    className={`relative aspect-square flex flex-col items-center justify-center rounded-lg font-mono font-bold text-xs sm:text-sm tabular-nums transition-all cursor-pointer ${
                      selected
                        ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-neutral-950 font-black shadow-[0_0_15px_rgba(251,191,36,0.5)] scale-105 z-10 border border-amber-200'
                        : isLucky
                        ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-800/40 hover:scale-105'
                        : 'bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/80'
                    }`}
                  >
                    <span>{num}</span>
                    {isLucky && !selected && (
                      <span className="text-[9px] absolute -top-1 -right-1 text-emerald-400">
                        🍀
                      </span>
                    )}
                    {selected && (
                      <span className="text-[8px] uppercase tracking-tighter absolute bottom-0.5 text-neutral-950 font-bold">
                        meu
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-amber-400 inline-block border border-amber-300" />
                  <span>Selecionado</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-emerald-950 border border-emerald-500/40 inline-block" />
                  <span>Trevo Quente</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-neutral-900 border border-neutral-800 inline-block" />
                  <span>Disponível</span>
                </div>
              </div>
              <div>
                <span>Toque para selecionar / desmarcar</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quota Summary & WhatsApp Action */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-neutral-950/90 rounded-2xl border border-neutral-800 p-6 shadow-xl backdrop-blur-sm space-y-5">
              
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  Resumo do Palpite
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  Cartela Fechada 100
                </span>
              </div>

              {/* Selected numbers pill list */}
              <div>
                <label className="text-xs text-neutral-400 block mb-2">
                  Números Escolhidos ({selectedNumbers.length}):
                </label>
                {selectedNumbers.length === 0 ? (
                  <div className="p-4 rounded-xl border border-dashed border-neutral-800 text-center text-xs text-neutral-500">
                    Nenhum número selecionado ainda. Toque na cartela ou clique em "Gerar Palpite Rápido".
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {selectedNumbers.map((num) => (
                      <span
                        key={num}
                        onClick={() => toggleNumber(num)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold cursor-pointer hover:bg-rose-500/20 hover:border-rose-400 hover:text-rose-300 transition-colors"
                        title="Clique para remover"
                      >
                        <span>{num}</span>
                        <span className="text-[10px] text-neutral-400">×</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Calculation */}
              <div className="space-y-2 pt-2 border-t border-neutral-800/80 text-sm">
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Valor médio por cota:</span>
                  <span className="font-mono tabular-nums text-white">R$ {quotaPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Quantidade selecionada:</span>
                  <span className="font-mono tabular-nums text-white">{selectedNumbers.length} cota(s)</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-800 text-base font-bold text-white">
                  <span>Total estimado:</span>
                  <span className="font-mono tabular-nums text-emerald-400 text-lg">
                    R$ {(selectedNumbers.length * quotaPrice).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* High-conversion WhatsApp CTA */}
              <button
                onClick={handleReserveOnWhatsApp}
                disabled={selectedNumbers.length === 0}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 rounded-xl hover:brightness-110 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 fill-current text-emerald-950" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.536 1.771.848 2.796.848 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.634-5.768-5.634zm3.385 8.167c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.122-.519-1.823-.756-3.003-2.607-3.094-2.729-.091-.122-.741-.986-.741-1.88 0-.895.467-1.336.634-1.516.166-.18.363-.225.484-.225.122 0 .243.001.349.006.111.006.26-.042.406.31.152.365.517 1.261.562 1.353.045.092.076.2.015.321-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.471.777 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.122.456-.531.577-.714.122-.182.243-.152.409-.091.167.061 1.062.501 1.244.592.182.091.303.136.349.213.045.076.045.441-.099.846z"/>
                </svg>
                <span>Garantir Números no Grupo</span>
              </button>

              <div className="text-[11px] text-neutral-400 text-center leading-relaxed">
                Ao clicar, você será direcionado ao nosso grupo oficial com a mensagem pronta para envio. 
                Os organizadores confirmam a reserva após o comprovante PIX.
              </div>

            </div>

            {/* Lucky tip card */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/25 text-xs text-emerald-300 flex items-start gap-3">
              <span className="text-xl shrink-0">🍀</span>
              <p>
                <strong>Dica de Sorte:</strong> Na Loteria Federal de quarta e sábado, 
                os números que mais saem nas duas pontas variam entre 00 e 99. 
                Garantir 2 ou 3 cotas aumenta suas probabilidades estatísticas!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import confetti from 'canvas-confetti';
import { WinnerTestimonial, RaffleEdition, WHATSAPP_GROUP_URL } from '../types';
import { playLuckyChime } from '../utils/audio';

const RECENT_WINNERS: WinnerTestimonial[] = [
  {
    id: '1',
    name: 'Marcos Silveira',
    city: 'Campinas - SP',
    prize: 'PIX R$ 1.200,00 na Hora',
    number: '47',
    drawDate: 'Quarta-feira passada',
    concursoFederal: 'Concurso Federal 5912',
    quote: 'Peguei apenas o 47 porque era o dia do aniversário do meu filho. Quando vi o 1º prêmio da Federal terminando em 47 meu coração disparou! O PIX caiu em 5 minutos.',
    amount: 'R$ 1.200,00',
  },
  {
    id: '2',
    name: 'Juliana Mendes',
    city: 'Belo Horizonte - MG',
    prize: 'Smart TV 55" 4K Crystal',
    number: '88',
    drawDate: 'Sábado passado',
    concursoFederal: 'Concurso Federal 5911',
    quote: 'Grupo super organizado e sério. A lista atualizada no WhatsApp dá total segurança pra gente conferir. Já recomendei pra toda a família!',
    amount: 'R$ 2.400,00 (Opção em PIX)',
  },
  {
    id: '3',
    name: 'Rodrigo Barbosa',
    city: 'Curitiba - PR',
    prize: 'PIX R$ 1.000,00 Relâmpago',
    number: '13',
    drawDate: 'Edição Especial',
    concursoFederal: 'Concurso Federal 5909',
    quote: 'O número 13 da sorte me deu esse prêmio maravilhoso. Administração honesta, comprovante enviado na hora com transparência total.',
    amount: 'R$ 1.000,00',
  },
];

const ACTIVE_EDITIONS: RaffleEdition[] = [
  {
    id: 'ed-1',
    title: 'Edição Ouro: R$ 1.500 no PIX',
    status: 'ultimas_cotas',
    pricePerNumber: 'R$ 20,00',
    totalNumbers: 100,
    availableNumbers: 14,
    prizeDescription: 'R$ 1.500,00 livre na conta via PIX imediato',
    extraPrize: '+ R$ 200 para a maior quantidade de cotas',
    drawDateEstimate: 'Próxima Extração Federal (Quarta-feira 19h)',
    highlight: true,
  },
  {
    id: 'ed-2',
    title: 'Edição Tech: Smartphone 128GB ou R$ 1.300',
    status: 'aberta',
    pricePerNumber: 'R$ 18,00',
    totalNumbers: 100,
    availableNumbers: 42,
    prizeDescription: 'Aparelho novo lacrado com NF ou valor em PIX',
    drawDateEstimate: 'Próxima Extração Federal (Sábado 19h)',
    highlight: false,
  },
];

export const PrizesAndWinners: React.FC = () => {
  const handleParticipate = () => {
    playLuckyChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#10B981'],
    });
    window.open(WHATSAPP_GROUP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="ganhadores" className="py-16 md:py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <span>🏆</span>
            <span>Galeria de Conquistas</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-amber-400">Ganhadores Reais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
            Prêmios Entregues e <span className="gold-gradient-text">Ganhadores da Sorte</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            A cada concurso da Federal, um novo ganhador celebra com a gente. 
            Veja quem já faturou prêmios incríveis e confira as cartelas ativas da semana!
          </p>
        </div>

        {/* Highlight Banner with Generated Trophy Image */}
        <div className="mb-14 rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl">
                <img
                  src="/src/assets/images/ganhadores_premio_1793991951777.jpg"
                  alt="Troféu dourado da vitória com trevo de 4 folhas e confetes de celebração"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
                <span>🍀</span>
                <span>Mais de R$ 50.000,00 em prêmios pagos com PIX imediato</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Sua Vez de Subir no Pódio da Sorte
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed max-w-2xl">
                Todas as premiações são registradas em vídeo e foto com comprovante bancário 
                compartilhado diretamente no grupo de WhatsApp. Segurança absoluta para você e seus amigos.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleParticipate}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 rounded-xl hover:brightness-110 transition-all cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <span>Entrar no Grupo e Concorrer Agora</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Active Raffles Editions Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span>📋</span> Cartelas em Andamento no Grupo
            </h3>
            <span className="text-xs text-neutral-400">Atualizado hoje</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACTIVE_EDITIONS.map((ed) => (
              <div
                key={ed.id}
                className={`rounded-2xl p-6 border transition-all ${
                  ed.highlight
                    ? 'bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15)]'
                    : 'bg-neutral-900/60 border-neutral-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono text-amber-400 font-bold px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800">
                    {ed.pricePerNumber} por cota
                  </span>
                  <span
                    className={`font-semibold ${
                      ed.status === 'ultimas_cotas' ? 'text-rose-400 animate-pulse' : 'text-emerald-400'
                    }`}
                  >
                    {ed.status === 'ultimas_cotas' ? '🔥 Últimas Cotas Disponíveis!' : 'Aberta para Escolha'}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{ed.title}</h4>
                <p className="text-sm text-neutral-300 mb-4">{ed.prizeDescription}</p>

                {ed.extraPrize && (
                  <div className="mb-4 p-2.5 rounded-lg bg-amber-400/10 border border-amber-400/20 text-xs text-amber-300">
                    🎁 <strong>Prêmio Extra:</strong> {ed.extraPrize}
                  </div>
                )}

                {/* Progress bar of sold numbers */}
                <div className="space-y-1.5 mb-5 text-xs text-neutral-400">
                  <div className="flex justify-between">
                    <span>Cotas vendidas:</span>
                    <span className="font-mono text-white">
                      {ed.totalNumbers - ed.availableNumbers} / {ed.totalNumbers}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full"
                      style={{
                        width: `${((ed.totalNumbers - ed.availableNumbers) / ed.totalNumbers) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                  <span>📅 Extração:</span>
                  <span className="text-neutral-200">{ed.drawDateEstimate}</span>
                </div>

                <button
                  onClick={handleParticipate}
                  className="w-full py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-emerald-400 to-amber-300 rounded-xl hover:brightness-110 transition-all cursor-pointer"
                >
                  Escolher Minhas Cotas no WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Cards */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>💬</span> Depoimentos de Quem Ganhou e Recebeu
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECENT_WINNERS.map((winner) => (
              <div
                key={winner.id}
                className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-amber-400">
                      Cota Premiada: #{winner.number} 🍀
                    </span>
                    <span className="text-neutral-500">{winner.drawDate}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                    "{winner.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80">
                  <div className="font-bold text-sm text-white">{winner.name}</div>
                  <div className="text-xs text-neutral-400">{winner.city}</div>
                  <div className="text-xs font-semibold text-emerald-400 mt-1">
                    Prêmio: {winner.prize}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

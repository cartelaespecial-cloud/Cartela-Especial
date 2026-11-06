import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Comment {
  id: number;
  name: string;
  city: string;
  time: string;
  avatarBg: string;
  initials: string;
  rating: number;
  text: string;
}

const COMMENTS: Comment[] = [
  {
    id: 1,
    name: 'Lucas Moreira',
    city: 'São Paulo - SP',
    time: 'há 6 minutos',
    avatarBg: 'from-emerald-500 to-teal-700',
    initials: 'LM',
    rating: 5,
    text: 'Eu gosto muito desse grupo! Atendimento nota 10 dos administradores e tudo super transparente. Já garanti minhas cartelas da semana!',
  },
  {
    id: 2,
    name: 'Camila Santos',
    city: 'Belo Horizonte - MG',
    time: 'há 18 minutos',
    avatarBg: 'from-amber-500 to-orange-600',
    initials: 'CS',
    rating: 5,
    text: 'Melhor grupo do WhatsApp sem dúvidas! A lista atualizada em tempo real passa muita confiança pra gente conferir tudo certinho.',
  },
  {
    id: 3,
    name: 'Rafael Barbosa',
    city: 'Curitiba - PR',
    time: 'há 32 minutos',
    avatarBg: 'from-blue-500 to-indigo-700',
    initials: 'RB',
    rating: 5,
    text: 'Peguei minha cota de R$ 3,00 na furadeira e o PIX caiu na minha conta no mesmo dia. Pessoal honesto demais, recomendo de olhos fechados!',
  },
  {
    id: 4,
    name: 'Juliana Ferreira',
    city: 'Goiânia - GO',
    time: 'há 45 minutos',
    avatarBg: 'from-rose-500 to-pink-700',
    initials: 'JF',
    rating: 5,
    text: 'Comunidade muito top e organizada! Todo mundo se ajuda no grupo e a administração é super rápida para responder e confirmar as cotas.',
  },
  {
    id: 5,
    name: 'Diego Ribeiro',
    city: 'Campinas - SP',
    time: 'há 1 hora',
    avatarBg: 'from-purple-500 to-indigo-800',
    initials: 'DR',
    rating: 5,
    text: 'Entrei por indicação de um colega de trabalho semana passada e já virei membro fiel. Muito fácil participar e muito seguro!',
  },
  {
    id: 6,
    name: 'Marcos Vinicius',
    city: 'Rio de Janeiro - RJ',
    time: 'há 2 horas',
    avatarBg: 'from-yellow-500 to-amber-700',
    initials: 'MV',
    rating: 5,
    text: 'Já participei de vários grupos mas esse aqui é diferenciado no respeito e agilidade. Parabéns a toda equipe do Cartelas Especiais!',
  },
];

export const RotatingComments: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance comments every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % COMMENTS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + COMMENTS.length) % COMMENTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % COMMENTS.length);
  };

  const currentComment = COMMENTS[currentIndex];

  return (
    <div className="w-full max-w-sm mt-6 text-left">
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5 px-1">
        <div className="flex items-center gap-1.5 text-xs font-bold text-white">
          <span className="text-amber-400">💬</span>
          <span>O que os membros dizem no grupo:</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-neutral-400">
          <span className="text-emerald-400 font-bold">4.9/5</span>
          <span>(850+ membros)</span>
        </div>
      </div>

      {/* Rotating Card */}
      <div className="relative rounded-2xl bg-neutral-900/80 border border-neutral-800/90 p-4 shadow-xl backdrop-blur-md overflow-hidden min-h-[140px] flex flex-col justify-between">
        
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentComment.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-2.5"
          >
            {/* User row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-tr ${currentComment.avatarBg} flex items-center justify-center font-bold text-xs text-white shadow-sm shrink-0`}
                >
                  {currentComment.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 leading-tight">
                    <span className="text-xs font-bold text-white">{currentComment.name}</span>
                    <span className="text-[10px] text-emerald-400 font-medium bg-emerald-500/15 border border-emerald-500/30 px-1 rounded">
                      ✓ Verificado
                    </span>
                  </div>
                  <div className="text-[10px] text-neutral-400">{currentComment.city}</div>
                </div>
              </div>

              {/* Time & Stars */}
              <div className="text-right">
                <div className="text-amber-400 text-xs tracking-tighter">
                  {'★'.repeat(currentComment.rating)}
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">{currentComment.time}</div>
              </div>
            </div>

            {/* Comment Text */}
            <p className="text-xs text-neutral-200 leading-relaxed italic">
              "{currentComment.text}"
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators and Controls */}
        <div className="flex items-center justify-between pt-2 mt-2 border-t border-neutral-800/60">
          <div className="flex items-center gap-1.5">
            {COMMENTS.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === currentIndex ? 'w-5 bg-amber-400' : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Ver comentário ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="w-6 h-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Comentário anterior"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="w-6 h-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Próximo comentário"
            >
              ›
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

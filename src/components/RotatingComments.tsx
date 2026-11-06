import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FeedbackItem {
  id: number;
  author: string;
  location: string;
  initials: string;
  topic: string;
  text: string;
}

const COMMUNITY_FEEDBACK: FeedbackItem[] = [
  {
    id: 1,
    author: 'Mariana C.',
    location: 'Belo Horizonte - MG',
    initials: 'MC',
    topic: 'Organização do Grupo',
    text: 'O grupo é muito bem estruturado e organizado. As informações sobre as regras e o andamento das cartelas são atualizadas de forma clara para todo mundo.',
  },
  {
    id: 2,
    author: 'Thiago R.',
    location: 'São Paulo - SP',
    initials: 'TR',
    topic: 'Transparência nas Informações',
    text: 'A facilidade para acompanhar as atualizações pelo WhatsApp é excelente. Os administradores respondem rápido e tiram todas as dúvidas com atenção.',
  },
  {
    id: 3,
    author: 'Felipe M.',
    location: 'Curitiba - PR',
    initials: 'FM',
    topic: 'Experiência na Comunidade',
    text: 'Ambiente respeitoso e dinâmico. Participo com tranquilidade porque as listas são públicas no grupo e tudo é conferido de forma transparente.',
  },
];

export const RotatingComments: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % COMMUNITY_FEEDBACK.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = COMMUNITY_FEEDBACK[currentIndex];

  return (
    <section className="w-full max-w-sm text-left my-2">
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <span>💬</span>
          <span>Experiência dos Participantes</span>
        </span>
        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          Comunidade Ativa
        </span>
      </div>

      <div className="relative rounded-2xl bg-neutral-900/85 border border-neutral-800 p-4 shadow-lg backdrop-blur-md overflow-hidden min-h-[130px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0">
                  {current.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {current.author}
                  </div>
                  <div className="text-[10px] text-neutral-400">{current.location}</div>
                </div>
              </div>

              <span className="text-[10px] font-medium text-amber-300/90 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-md">
                {current.topic}
              </span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed italic">
              "{current.text}"
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Indicator dots */}
        <div className="flex items-center justify-center gap-1.5 pt-2 mt-2 border-t border-neutral-800/60">
          {COMMUNITY_FEEDBACK.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? 'w-5 bg-emerald-400' : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
              }`}
              aria-label={`Ver avaliação ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

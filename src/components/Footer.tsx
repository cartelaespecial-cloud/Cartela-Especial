import React from 'react';
import { WHATSAPP_GROUP_URL } from '../types';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12 text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🍀</span>
            <span className="text-base font-bold font-display text-white">
              Cartelas <span className="gold-gradient-text">Especial</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-300">
            <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">
              Como Funciona
            </a>
            <a href="#cartela-interativa" className="hover:text-emerald-400 transition-colors">
              Simulador 00-99
            </a>
            <a href="#extracao-federal" className="hover:text-emerald-400 transition-colors">
              Extração Federal
            </a>
            <a href="#ganhadores" className="hover:text-emerald-400 transition-colors">
              Ganhadores
            </a>
            <a href="#duvidas" className="hover:text-emerald-400 transition-colors">
              Dúvidas
            </a>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              Entrar no WhatsApp
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 transition-colors cursor-pointer"
          >
            ↑ Voltar ao topo
          </button>
        </div>

        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-neutral-500">
          <p>
            © {new Date().getFullYear()} Cartelas Especial. Resultados apurados com base na extração oficial da Loteria Federal.
          </p>
          <p>
            Destinado a maiores de 18 anos. Jogue com responsabilidade.
          </p>
        </div>

      </div>
    </footer>
  );
};

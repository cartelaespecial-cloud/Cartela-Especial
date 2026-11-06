import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { WHATSAPP_GROUP_URL } from '../types';
import { playLuckyChime } from '../utils/audio';

interface NavbarProps {
  onJoinClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    playLuckyChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#10B981', '#F59E0B', '#34D399', '#FBBF24', '#FFFFFF'],
    });
    if (onJoinClick) onJoinClick();
    window.open(WHATSAPP_GROUP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold font-display tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
              🍀
            </span>
            <span className="font-extrabold tracking-tight">
              Cartelas <span className="gold-gradient-text font-black">Especial</span>
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#como-funciona" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Como Funciona
            </a>
            <a href="#cartela-interativa" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Simulador 00-99
            </a>
            <a href="#extracao-federal" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Extração Federal
            </a>
            <a href="#ganhadores" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Ganhadores
            </a>
            <a href="#duvidas" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleJoinClick}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 rounded-lg hover:brightness-110 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95"
            >
              <svg className="w-4 h-4 text-emerald-950 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.536 1.771.848 2.796.848 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.634-5.768-5.634zm3.385 8.167c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.122-.519-1.823-.756-3.003-2.607-3.094-2.729-.091-.122-.741-.986-.741-1.88 0-.895.467-1.336.634-1.516.166-.18.363-.225.484-.225.122 0 .243.001.349.006.111.006.26-.042.406.31.152.365.517 1.261.562 1.353.045.092.076.2.015.321-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.471.777 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.122.456-.531.577-.714.122-.182.243-.152.409-.091.167.061 1.062.501 1.244.592.182.091.303.136.349.213.045.076.045.441-.099.846z"/>
              </svg>
              <span>Entrar no Grupo</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 px-4 pt-3 pb-4 space-y-2 text-sm">
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300 hover:text-emerald-400"
          >
            Como Funciona
          </a>
          <a
            href="#cartela-interativa"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300 hover:text-emerald-400"
          >
            Simulador 00-99
          </a>
          <a
            href="#extracao-federal"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300 hover:text-emerald-400"
          >
            Extração Federal
          </a>
          <a
            href="#ganhadores"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300 hover:text-emerald-400"
          >
            Ganhadores
          </a>
          <a
            href="#duvidas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-300 hover:text-emerald-400"
          >
            Dúvidas
          </a>
        </div>
      )}
    </header>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { CloverParticles } from './components/CloverParticles';
import { RotatingComments } from './components/RotatingComments';
import { LegalModal } from './components/LegalModals';
import { playLuckyChime } from './utils/audio';

const WHATSAPP_GROUP_URL =
  'https://chat.whatsapp.com/IKmfvq14rNy7woxeibYQGa?s=sw&p=i&mlu=4&ilr=4&iam=2';

const HERO_IMAGE_URL =
  '/assets/aistudio/Entre_na_Comunidade_Cartelas_Especiais_e8aebe05.png';

// Helper to check if current route is /grupo
function isGrupoRoute(): boolean {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  return path === '/grupo' || path.startsWith('/grupo/');
}

export default function App() {
  const [isGrupo, setIsGrupo] = useState(() => isGrupoRoute());
  const [activeLegalModal, setActiveLegalModal] = useState<'terms' | 'privacy' | null>(null);

  // Handle route change listener
  useEffect(() => {
    const handlePopState = () => {
      setIsGrupo(isGrupoRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // When on /grupo, fire the Kwai Pixel and redirect to WhatsApp
  useEffect(() => {
    if (isGrupo) {
      try {
        const win = window as unknown as { kwaiq?: { page: () => void; track: (event: string) => void } };
        if (win.kwaiq) {
          win.kwaiq.page();
          win.kwaiq.track('contentView');
        }
      } catch {
        // ignore
      }

      const timer = setTimeout(() => {
        window.location.href = WHATSAPP_GROUP_URL;
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [isGrupo]);

  const handleJoinWhatsApp = () => {
    playLuckyChime();
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#22C55E', '#EAB308', '#FACC15', '#10B981', '#FFFFFF'],
    });

    try {
      window.history.pushState({}, '', '/grupo');
      setIsGrupo(true);
    } catch {
      window.location.href = '/grupo';
    }
  };

  // If on /grupo route: render redirect screen
  if (isGrupo) {
    return (
      <div className="relative min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-white">
        <CloverParticles />

        <header className="relative z-10 pt-6 pb-2 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] backdrop-blur-md">
            <span className="text-emerald-400 text-sm">🍀</span>
            <span className="font-display font-extrabold text-sm sm:text-base tracking-widest text-white uppercase">
              CARTELAS <span className="gold-gradient-text font-black">ESPECIAIS</span>
            </span>
          </div>
        </header>

        <main className="relative z-10 max-w-md mx-auto w-full px-4 py-8 flex flex-col items-center text-center my-auto">
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full border-4 border-neutral-800 border-t-emerald-400 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl animate-pulse">
              🍀
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white leading-tight mb-2">
            Redirecionando para o <span className="emerald-gradient-text">WhatsApp</span>...
          </h1>

          <p className="text-sm text-neutral-300 max-w-xs mx-auto leading-relaxed mb-6">
            Você está sendo encaminhado para a comunidade oficial <strong>Cartelas Especiais</strong>.
          </p>

          <a
            href={WHATSAPP_GROUP_URL}
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-black text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 rounded-2xl hover:brightness-110 shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all cursor-pointer uppercase tracking-tight"
          >
            <span>Entrar Agora Manualmente</span>
            <span>→</span>
          </a>

          <p className="text-[11px] text-neutral-500 mt-4">
            Caso o aplicativo não abra automaticamente, toque no botão acima.
          </p>
        </main>

        <footer className="relative z-10 py-3 px-4 text-center text-[11px] text-neutral-500 border-t border-neutral-900">
          <p>Cartelas Especiais · Comunidade Oficial · 18+</p>
        </footer>
      </div>
    );
  }

  // Main Landing / Pre-sell Page (Lean, Modern, Mobile-First)
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Ambient background particles */}
      <CloverParticles />

      {/* 1. TOP LOGO: CARTELAS ESPECIAIS */}
      <header className="relative z-10 pt-4 pb-2 px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
          <span className="font-display font-extrabold text-sm sm:text-base tracking-widest text-white uppercase">
            CARTELAS <span className="gold-gradient-text font-black">ESPECIAIS</span>
          </span>
          <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-400/30">
            COMUNIDADE
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-md mx-auto w-full px-4 py-2 flex flex-col items-center text-center my-auto space-y-4">
        
        {/* 2. TÍTULO E SUBTÍTULO */}
        <div className="space-y-1.5 pt-1">
          <h1 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white leading-tight [text-wrap:balance]">
            💚 VENHA FAZER PARTE DA NOSSA COMUNIDADE!
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed [text-wrap:balance] max-w-sm mx-auto">
            Conheça a comunidade Cartelas Especiais e acompanhe nossas novidades pelo WhatsApp!
          </p>
        </div>

        {/* 3. IMAGEM PRINCIPAL (1:1 QUADRADA, EM DESTAQUE, SEM CORTES) */}
        <motion.div
          className="relative w-full max-w-[340px] sm:max-w-[380px] cursor-pointer group"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onClick={handleJoinWhatsApp}
          title="Toque para entrar no grupo"
        >
          {/* Glowing emerald & gold aura */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/35 via-amber-500/25 to-emerald-500/35 rounded-3xl blur-2xl transform scale-102 group-hover:scale-108 transition-transform duration-500 pointer-events-none" />

          {/* Card Frame keeping the complete 1:1 image without cuts */}
          <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-emerald-400/60 via-neutral-900 to-amber-500/50 border-2 border-emerald-400/70 shadow-[0_12px_40px_rgba(16,185,129,0.35)] backdrop-blur-md overflow-hidden transform group-hover:scale-101 transition-all duration-300">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-950">
              <img
                src={HERO_IMAGE_URL}
                alt="Cartelas Especiais - Participe já do nosso grupo no WhatsApp"
                className="w-full h-full object-contain block rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* 4. BOTÃO PRINCIPAL: PARTICIPAR DO GRUPO */}
        <div className="w-full max-w-sm">
          <button
            onClick={handleJoinWhatsApp}
            className="w-full group relative inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base sm:text-lg font-black text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 rounded-2xl hover:brightness-110 shadow-[0_8px_30px_rgba(16,185,129,0.55)] transition-all cursor-pointer active:scale-95 animate-pulse border border-emerald-200/50"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-950/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 fill-current text-neutral-950" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.536 1.771.848 2.796.848 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.634-5.768-5.634zm3.385 8.167c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.122-.519-1.823-.756-3.003-2.607-3.094-2.729-.091-.122-.741-.986-.741-1.88 0-.895.467-1.336.634-1.516.166-.18.363-.225.484-.225.122 0 .243.001.349.006.111.006.26-.042.406.31.152.365.517 1.261.562 1.353.045.092.076.2.015.321-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.471.777 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.122.456-.531.577-.714.122-.182.243-.152.409-.091.167.061 1.062.501 1.244.592.182.091.303.136.349.213.045.076.045.441-.099.846z"/>
              </svg>
            </div>
            <span className="tracking-tight uppercase">🟢 PARTICIPAR DO GRUPO</span>
            <span className="text-neutral-900 font-black text-lg group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>


        {/* 6. COMENTÁRIOS REAIS DE PARTICIPANTES */}
        <RotatingComments />

        {/* 7. BOTÃO FINAL: QUERO ENTRAR NA COMUNIDADE */}
        <div className="w-full max-w-sm pt-1">
          <button
            onClick={handleJoinWhatsApp}
            className="w-full group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-black text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 rounded-2xl hover:brightness-110 shadow-[0_8px_25px_rgba(16,185,129,0.45)] transition-all cursor-pointer active:scale-95"
          >
            <span>🟢 QUERO ENTRAR NA COMUNIDADE</span>
            <span className="text-neutral-900 font-bold group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>

      </main>

      {/* 8. RODAPÉ TRANSPARENTE E LEGAL */}
      <footer className="relative z-10 py-5 px-4 text-center text-xs text-neutral-400 border-t border-neutral-900 space-y-2 max-w-lg mx-auto w-full">
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px]">
          <button
            onClick={() => setActiveLegalModal('terms')}
            className="hover:text-emerald-400 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Termos de Uso
          </button>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <button
            onClick={() => setActiveLegalModal('privacy')}
            className="hover:text-emerald-400 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>
          <span className="text-neutral-600" aria-hidden="true">·</span>
          <a
            href="mailto:cartelaespecial@gmail.com"
            className="hover:text-emerald-400 transition-colors"
          >
            Contato Oficial
          </a>
        </div>

        <p className="text-[11px] text-neutral-400">
          Responsável: Cartelas Especiais · Contato: <span className="text-neutral-300">cartelaespecial@gmail.com</span>
        </p>

        <p className="text-[10px] text-neutral-500">
          Comunidade voltada exclusivamente para maiores de 18 anos. Participe com consciência e responsabilidade.
        </p>
      </footer>

      {/* Legal Disclosure Modal */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}

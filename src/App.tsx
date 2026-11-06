/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { CloverParticles } from './components/CloverParticles';
import { playLuckyChime } from './utils/audio';

const WHATSAPP_GROUP_URL =
  'https://chat.whatsapp.com/IKmfvq14rNy7woxeibYQGa?s=sw&p=i&mlu=4&ilr=4&iam=2';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [zoomModalOpen, setZoomModalOpen] = useState(false);

  const handleJoinWhatsApp = () => {
    playLuckyChime();
    confetti({
      particleCount: 80,
      spread: 75,
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
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Ambient background clovers and sparkles */}
      <CloverParticles />

      {/* Minimal Top Brand Bar */}
      <header className="relative z-10 pt-4 pb-2 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 shadow-lg backdrop-blur-md">
          <span className="text-emerald-400 text-sm">🍀</span>
          <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white">
            Cartelas <span className="gold-gradient-text font-black">Especial</span>
          </span>
          <span className="text-neutral-600 text-xs" aria-hidden="true">·</span>
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
            Rifa Oficial
          </span>
        </div>
      </header>

      {/* Main Pressell Body */}
      <main className="relative z-10 max-w-lg mx-auto w-full px-4 py-3 sm:py-5 flex flex-col items-center text-center my-auto">
        
        {/* Floating Cartela Card with 3D levitation motion */}
        <motion.div
          className="relative mb-5 cursor-pointer group"
          animate={{
            y: [0, -12, 0],
            rotate: [-1.2, 1.2, -1.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Intense glowing backdrop behind the card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/40 via-emerald-500/35 to-amber-600/35 rounded-2xl blur-xl transform scale-105 group-hover:scale-115 transition-transform duration-500" />

          {/* Floating Card Frame */}
          <div className="relative w-64 sm:w-72 aspect-[2/3] rounded-2xl p-2 bg-gradient-to-b from-amber-400/40 via-neutral-900 to-amber-500/30 border-2 border-amber-400/60 shadow-[0_15px_45px_rgba(245,158,11,0.35)] backdrop-blur-md overflow-hidden transform group-hover:scale-102 transition-all duration-300">
            
            {/* Top Bar of Cartela Card */}
            <div className="flex items-center justify-between px-2 py-1 mb-1 text-[11px] font-mono border-b border-amber-400/20 bg-neutral-950/70 rounded-t-xl">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span>🍀</span> 00 A 99
              </span>
              <span className="text-amber-300 font-extrabold bg-amber-500/20 border border-amber-400/30 px-1.5 py-0.5 rounded text-[10px]">
                R$ 3,00 CADA
              </span>
            </div>

            {/* User Uploaded Image Slot */}
            <div
              className="relative w-full h-[85%] rounded-xl overflow-hidden border border-amber-400/30 bg-neutral-950"
              onClick={() => setZoomModalOpen(true)}
              title="Toque para ampliar a cartela"
            >
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-06_at_5.02.34_PM_1e64f292.jpeg"
                alt="Rifa Especial - Concorra a essa Super Furadeira 48V Completa por apenas R$ 3,00"
                className="w-full h-full object-cover object-top"
              />

              {/* Tap to expand hint */}
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-neutral-950/80 border border-amber-400/30 text-[10px] text-amber-300 font-semibold backdrop-blur-sm flex items-center gap-1">
                <span>🔍</span> Ver Completa
              </div>
            </div>

            {/* Micro instruction */}
            <div className="mt-1 text-center text-[10px] text-neutral-400 font-medium">
              Toque na cartela para ampliar ou no botão abaixo para entrar
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white leading-tight [text-wrap:balance] mb-2">
          Concorra à <span className="gold-gradient-text">Super Furadeira 48V</span> por apenas <span className="emerald-gradient-text">R$ 3,00</span>!
        </h1>

        {/* Subtitle / Hook */}
        <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed mb-4">
          Cartela especial de <strong>00 a 99</strong> com resultado oficial pela <strong>Loteria Federal</strong>. 
          Entre no grupo do WhatsApp para garantir os seus números da sorte!
        </p>

        {/* Urgency Strip */}
        <div className="w-full max-w-sm mb-4 py-2 px-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-neutral-200 font-semibold">Cotas Abertas no Grupo</span>
          </div>
          <span className="font-mono text-amber-400 font-bold">Apenas 100 Números</span>
        </div>

        {/* High-Impact Green WhatsApp CTA */}
        <div className="w-full max-w-sm space-y-2.5">
          <button
            onClick={handleJoinWhatsApp}
            className="w-full group relative inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-black text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 rounded-2xl hover:brightness-110 shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-all cursor-pointer active:scale-95 animate-pulse"
          >
            <svg className="w-6 h-6 fill-current text-emerald-950 shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.536 1.771.848 2.796.848 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.634-5.768-5.634zm3.385 8.167c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.122-.519-1.823-.756-3.003-2.607-3.094-2.729-.091-.122-.741-.986-.741-1.88 0-.895.467-1.336.634-1.516.166-.18.363-.225.484-.225.122 0 .243.001.349.006.111.006.26-.042.406.31.152.365.517 1.261.562 1.353.045.092.076.2.015.321-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.471.777 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.122.456-.531.577-.714.122-.182.243-.152.409-.091.167.061 1.062.501 1.244.592.182.091.303.136.349.213.045.076.045.441-.099.846z"/>
            </svg>
            <span className="tracking-tight uppercase">ENTRAR NO GRUPO DO WHATSAPP</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-neutral-300 bg-neutral-900/80 border border-neutral-800 rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {copied ? (
              <span className="text-emerald-400 font-bold">✓ Link do Grupo Copiado!</span>
            ) : (
              <span>Copiar Link de Convite</span>
            )}
          </button>
        </div>

        {/* 3 Fast Trust Points */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-sm mt-5 text-[11px] text-neutral-400">
          <div className="p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
            <span className="text-sm block mb-0.5">💰</span>
            <span className="text-amber-400 font-bold block">R$ 3,00</span>
            <span>Cada número</span>
          </div>
          <div className="p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
            <span className="text-sm block mb-0.5">🍀</span>
            <span className="text-emerald-300 font-bold block">00 a 99</span>
            <span>100 números</span>
          </div>
          <div className="p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/80">
            <span className="text-sm block mb-0.5">🏛️</span>
            <span className="text-neutral-200 font-bold block">Federal</span>
            <span>100% Auditado</span>
          </div>
        </div>

      </main>

      {/* Modal to view complete high-res cartela image */}
      {zoomModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setZoomModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full rounded-2xl bg-neutral-900 border border-amber-400/40 p-3 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800 text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>🍀</span> Cartela Rifa Especial (00 a 99)
              </span>
              <button
                onClick={() => setZoomModalOpen(false)}
                className="text-neutral-400 hover:text-white text-lg font-bold px-2 py-0.5 rounded bg-neutral-800"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto rounded-xl">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-06_at_5.02.34_PM_1e64f292.jpeg"
                alt="Cartela completa Super Furadeira 48V"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="mt-3">
              <button
                onClick={() => {
                  setZoomModalOpen(false);
                  handleJoinWhatsApp();
                }}
                className="w-full py-3 text-sm font-black text-neutral-950 bg-gradient-to-r from-emerald-400 to-amber-300 rounded-xl hover:brightness-110 shadow-lg cursor-pointer"
              >
                Garantir Meus Números no WhatsApp →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Minimal Footer */}
      <footer className="relative z-10 py-3 px-4 text-center text-[11px] text-neutral-500 border-t border-neutral-900">
        <p>Cartelas Especial · Resultados pela Loteria Federal · 18+</p>
      </footer>
    </div>
  );
}

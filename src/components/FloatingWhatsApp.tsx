import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { WHATSAPP_GROUP_URL } from '../types';
import { playLuckyChime } from '../utils/audio';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    playLuckyChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10B981', '#F59E0B', '#34D399', '#FFFFFF'],
    });
    window.open(WHATSAPP_GROUP_URL, '_blank', 'noopener,noreferrer');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <div className="hidden sm:block px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-emerald-500/30 text-xs text-neutral-200 shadow-xl backdrop-blur-md animate-bounce">
        🍀 <span>Participe da rodada ativa no WhatsApp!</span>
      </div>

      <button
        onClick={handleClick}
        className="relative group p-3.5 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 text-neutral-950 shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Entrar no Grupo do WhatsApp"
        title="Entrar no Grupo Oficial do WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />
        <svg className="w-6 h-6 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.981.536 1.771.848 2.796.848 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.634-5.768-5.634zm3.385 8.167c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.122-.519-1.823-.756-3.003-2.607-3.094-2.729-.091-.122-.741-.986-.741-1.88 0-.895.467-1.336.634-1.516.166-.18.363-.225.484-.225.122 0 .243.001.349.006.111.006.26-.042.406.31.152.365.517 1.261.562 1.353.045.092.076.2.015.321-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.471.777 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.122.456-.531.577-.714.122-.182.243-.152.409-.091.167.061 1.062.501 1.244.592.182.091.303.136.349.213.045.076.045.441-.099.846z"/>
        </svg>
      </button>
    </div>
  );
};

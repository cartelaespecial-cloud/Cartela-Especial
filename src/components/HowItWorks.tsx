import React from 'react';
import { WHATSAPP_GROUP_URL } from '../types';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Acesse o Grupo no WhatsApp',
      description:
        'Entre pelo link oficial seguro da Cartelas Especial. O acesso é instantâneo e você já confere a cartela ativa da semana.',
      icon: '📲',
    },
    {
      number: '02',
      title: 'Escolha seu Número (00 a 99)',
      description:
        'Cada cartela possui exatamente 100 cotas. Escolha seus números da sorte favoritos na lista atualizada em tempo real.',
      icon: '🍀',
    },
    {
      number: '03',
      title: 'Confirmação e PIX Seguro',
      description:
        'Realize o pagamento seguro via PIX direto com a administração. Seu nome e cotas são confirmados publicamente no grupo.',
      icon: '⚡',
    },
    {
      number: '04',
      title: 'Extração Oficial pela Loteria Federal',
      description:
        'Sem softwares duvidosos ou sorteios caseiros: o ganhador é definido estritamente pela extração oficial da Caixa Econômica Federal.',
      icon: '🏛️',
    },
    {
      number: '05',
      title: 'Prêmio Pago na Mesma Hora',
      description:
        'Assim que a Caixa divulga o resultado do concurso, o PIX do valor do prêmio cai direto na conta bancária do ganhador com comprovante.',
      icon: '🏆',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <span>🍀</span>
            <span>Transparência e Credibilidade</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-amber-400">5 Passos Simples</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
            Como Funciona a <span className="gold-gradient-text">Cartelas Especial</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Processo 100% transparente do início ao fim. Nada de sorteios internos: aqui você 
            concorre com a seriedade da maior loteria oficial do Brasil.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all group backdrop-blur-sm ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2 border-emerald-500/30 bg-emerald-950/20' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="font-mono text-xs font-bold text-amber-400/80 px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800">
                    Etapa {step.number}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx === 4 && (
                <div className="mt-6 pt-4 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-emerald-300 flex items-center gap-2">
                    <span>✓</span> Comprovantes postados no grupo para todos conferirem
                  </div>
                  <a
                    href={WHATSAPP_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-neutral-950 bg-gradient-to-r from-emerald-400 to-amber-300 rounded-lg hover:brightness-110 transition-all whitespace-nowrap"
                  >
                    <span>Quero Participar da Rodada Atual</span>
                    <span>→</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

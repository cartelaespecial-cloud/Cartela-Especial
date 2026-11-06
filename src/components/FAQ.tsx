import React, { useState } from 'react';
import { FAQItem } from '../types';

const FAQS: FAQItem[] = [
  {
    question: 'Como funciona o sorteio pela Loteria Federal?',
    answer:
      'Utilizamos exclusivamente a extração oficial da Loteria Federal organizada pela Caixa Econômica Federal às quartas e sábados (às 19h). O número vencedor da nossa cartela (00 a 99) corresponde exatamente aos dois últimos dígitos (a dezena final) do 1º prêmio oficial. Qualquer participante pode conferir ao vivo na TV ou no site da Caixa.',
  },
  {
    question: 'Quantos números existem em cada cartela?',
    answer:
      'Cada cartela da Cartelas Especial é fechada rigorosamente com 100 números, variando de 00 a 99. Isso garante chances reais e muito superiores a loterias tradicionais, pois apenas 100 participantes concorrem pelo prêmio.',
  },
  {
    question: 'Como compro minhas cotas e garanto meu número?',
    answer:
      'Ao entrar no nosso grupo oficial de WhatsApp, você visualiza a lista em tempo real de cotas livres. Basta solicitar seu número com a administração e efetuar o pagamento via PIX. Assim que confirmado, seu nome é adicionado publicamente na lista oficial do grupo.',
  },
  {
    question: 'Em quanto tempo o prêmio é pago ao ganhador?',
    answer:
      'O pagamento é instantâneo via PIX. Assim que o resultado oficial da Loteria Federal é homologado pela Caixa, a administração entra em contato imediatamente no grupo e realiza a transferência para a chave PIX do ganhador, publicando o comprovante na hora.',
  },
  {
    question: 'O que acontece se uma cartela não fechar antes do concurso?',
    answer:
      'Para garantir total justiça e transparência, o sorteio só é homologado na extração da Federal quando a cartela atinge 100% de preenchimento. Caso a cartela não feche até as 18h do dia do sorteio, ela é transferida automaticamente para a extração da Federal seguinte (quarta ou sábado).',
  },
  {
    question: 'Posso participar de mais de um número na mesma cartela?',
    answer:
      'Sim! Não há limite de cotas por participante. Muitos membros adquirem 2, 5 ou 10 números para multiplicar consideravelmente suas chances matemáticas de vitória.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-16 md:py-24 bg-neutral-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <span>❓</span>
            <span>Tire Suas Dúvidas</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-amber-400">Perguntas Frequentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
            Tudo o que Você Precisa Saber
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Segurança, regras claras e honestidade são as prioridades absolutas da Cartelas Especial.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="text-neutral-400 font-mono text-lg shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

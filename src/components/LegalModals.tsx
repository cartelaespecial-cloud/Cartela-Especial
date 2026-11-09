import React from 'react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full rounded-2xl bg-neutral-900 border border-neutral-700 p-6 shadow-2xl text-left max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
          <h3 className="text-lg font-bold text-white font-display">
            {type === 'terms' ? 'Termos de Uso da Comunidade' : 'Política de Privacidade'}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {type === 'terms' ? (
            <>
              <p>
                <strong>1. Sobre o Grupo de Ofertas:</strong> Esta página é um canal de divulgação e acesso ao nosso grupo no WhatsApp, criado para compartilhar novidades, ofertas e achadinhos encontrados na internet entre os participantes.
              </p>
              <p>
                <strong>2. Acesso Gratuito e Voluntário:</strong> O acesso ao grupo de WhatsApp é 100% gratuito e voluntário. Não cobramos mensalidades nem taxas de entrada. Qualquer participante pode sair a qualquer momento.
              </p>
              <p>
                <strong>3. Disponibilidade de Ofertas:</strong> As ofertas, preços e promoções divulgadas são de responsabilidade das lojas e plataformas de origem, estando sujeitas a alterações de valores e estoque sem aviso prévio.
              </p>
              <p>
                <strong>4. Regras de Convivência:</strong> É fundamental manter um ambiente respeitoso e cordial. É proibido qualquer tipo de ofensa, spam ou mensagens inadequadas no grupo.
              </p>
              <p>
                <strong>5. Contato:</strong> Para dúvidas ou falar com os administradores, entre em contato pelo e-mail <strong>cartelaespecial@gmail.com</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Privacidade:</strong> Esta página não coleta dados pessoais sensíveis, não solicita preenchimento de cadastros e não armazena dados bancários.
              </p>
              <p>
                <strong>2. Aplicativo WhatsApp:</strong> Ao entrar no grupo, seus dados de perfil (como nome e foto) seguem as configurações de privacidade que você mesmo escolheu no aplicativo WhatsApp.
              </p>
              <p>
                <strong>3. Métricas e Segurança:</strong> Utilizamos métricas básicas de tráfego estritamente para medir a quantidade de acessos à página, respeitando integralmente a LGPD (Lei Geral de Proteção de Dados).
              </p>
              <p>
                <strong>4. Contato Oficial:</strong> Em caso de dúvidas sobre privacidade, envie uma mensagem para <strong>cartelaespecial@gmail.com</strong>.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

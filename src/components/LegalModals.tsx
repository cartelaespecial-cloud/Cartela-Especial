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
                <strong>1. Sobre a Comunidade:</strong> A <strong>Cartelas Especiais</strong> é uma comunidade organizada via grupo de WhatsApp destinada ao entretenimento, relacionamento e divulgação de rodadas de cartelas numeradas entre participantes cadastrados.
              </p>
              <p>
                <strong>2. Acesso ao Grupo:</strong> O acesso ao grupo de WhatsApp é facultativo e gratuito. O participante deve ser maior de 18 (dezoito) anos e concordar em manter uma conduta respeitosa com todos os membros e administradores.
              </p>
              <p>
                <strong>3. Participação em Cartelas:</strong> A adesão a cartelas específicas ocorre de forma voluntária e pode envolver custos por cota informados previamente no grupo. A aquisição de cotas confere direito exclusivo à participação nas regras pré-estabelecidas e divulgadas no grupo, não constituindo compra direta, entrega garantida ou venda de produtos comerciais.
              </p>
              <p>
                <strong>4. Transparência:</strong> Todas as informações, listas de cotas e andamentos são compartilhados publicamente dentro do grupo oficial para livre conferência dos membros.
              </p>
              <p>
                <strong>5. Contato:</strong> Dúvidas podem ser esclarecidas diretamente com a administração através do e-mail <strong>cartelaespecial@gmail.com</strong> ou no grupo oficial.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Coleta de Informações:</strong> Esta pré-página não solicita dados pessoais confidenciais diretamente em formulários. Ao acessar o grupo do WhatsApp, os dados visíveis aos outros membros limitam-se ao perfil público configurado pelo próprio usuário no aplicativo WhatsApp.
              </p>
              <p>
                <strong>2. Uso de Cookies e Métricas:</strong> Utilizamos identificadores de navegação (como tags de conversão do Kwai) estritamente para medir o volume de acessos e aprimorar a experiência de navegação e publicidade responsável.
              </p>
              <p>
                <strong>3. Segurança e Direitos (LGPD):</strong> Respeitamos a legislação brasileira de proteção de dados (Lei nº 13.709/2018 - LGPD). Nenhuma informação de participantes é vendida ou transferida a terceiros não autorizados.
              </p>
              <p>
                <strong>4. Responsável pelo Tratamento:</strong> Cartelas Especiais. Para solicitações sobre privacidade ou remoção de contatos, escreva para <strong>cartelaespecial@gmail.com</strong>.
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

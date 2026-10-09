import React from 'react';
import { X, Download, Share, PlusSquare, Check } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: any;
  onInstalled: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onInstalled,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        onInstalled();
      }
    } else {
      // Copy current link or show iOS instructions
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-[#E8DFD5] text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* App Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-[#FAF7F2] border-2 border-[#E8DFD5] p-2 flex items-center justify-center shadow-inner mb-4">
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <circle cx="40" cy="40" r="34" fill="#B85D3B" />
            <path d="M26 48 h28 v-6 h-28 z" fill="#FFFFFF" />
            <path d="M30 42 h20 v-6 h-20 z" fill="#FCEAC7" />
            <rect x="38" y="26" width="4" height="8" rx="2" fill="#FFFFFF" />
            <circle cx="40" cy="22" r="2.5" fill="#F5D061" />
          </svg>
        </div>

        <h3 className="text-lg font-bold text-[#2C1E1A] font-editorial">
          Links Andreia Cakes USA
        </h3>
        <p className="text-xs text-[#6B5A52] mt-1 mb-5">
          Adicione à tela de início do seu celular para acessar cursos, o aplicativo e novidades com 1 toque.
        </p>

        {deferredPrompt ? (
          <button
            onClick={handleInstallClick}
            className="w-full py-3 px-4 rounded-xl bg-[#B85D3B] text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#A04728] transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Instalar Aplicativo Agora
          </button>
        ) : (
          <div className="space-y-3 text-left bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE8DF] text-xs text-[#5C4D46]">
            <div className="font-semibold text-[#2C1E1A] flex items-center gap-1.5">
              <span>Como instalar no iPhone ou Android:</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-white border border-[#E8DFD5] flex items-center justify-center text-[10px] font-bold text-[#B85D3B] shrink-0">
                1
              </span>
              <span>
                No Safari ou Chrome, toque no botão <strong>Compartilhar</strong> (
                <Share className="w-3 h-3 inline mx-0.5 text-[#B85D3B]" />
                ) ou nos 3 pontinhos.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-white border border-[#E8DFD5] flex items-center justify-center text-[10px] font-bold text-[#B85D3B] shrink-0">
                2
              </span>
              <span>
                Role e escolha{' '}
                <strong>
                  Adicionar à Tela de Início (
                  <PlusSquare className="w-3 h-3 inline mx-0.5 text-[#B85D3B]" />
                  )
                </strong>
                .
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-white border border-[#E8DFD5] flex items-center justify-center text-[10px] font-bold text-[#B85D3B] shrink-0">
                3
              </span>
              <span>
                Confirme o nome <strong>Links Andreia Cakes USA</strong> e clique em Adicionar!
              </span>
            </div>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-[#F2ECE4]">
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="w-full py-2.5 px-4 rounded-xl border border-[#E8DFD5] text-[#2C1E1A] text-xs font-medium hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Link Copiado!</span>
              </>
            ) : (
              <>
                <Share className="w-3.5 h-3.5 text-[#B85D3B]" />
                <span>Copiar Link da Página</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

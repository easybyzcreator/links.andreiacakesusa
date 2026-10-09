import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, Sparkles } from 'lucide-react';

interface LinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
  onUpdateUrl?: (newUrl: string) => void;
}

export const LinkModal: React.FC<LinkModalProps> = ({
  isOpen,
  onClose,
  title,
  url,
  onUpdateUrl,
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [customUrl, setCustomUrl] = useState(url);

  React.useEffect(() => {
    setCustomUrl(url);
    setIsEditing(false);
  }, [url]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(customUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (onUpdateUrl) {
      onUpdateUrl(customUrl);
    }
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-[#E8DFD5] text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#B85D3B]" />
          <span className="text-[11px] font-bold tracking-wider text-[#B85D3B] uppercase">
            Direcionamento de Link
          </span>
        </div>

        <h3 className="text-base font-bold text-[#2C1E1A] font-editorial mb-1">
          {title}
        </h3>

        <p className="text-xs text-[#6B5A52] mb-4">
          Você será direcionado para o link oficial da Andréia Cakes USA:
        </p>

        {/* URL Box */}
        <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DF] mb-4 text-xs">
          {isEditing ? (
            <div className="space-y-2">
              <label className="text-[11px] font-semibold text-[#2C1E1A]">
                Editar URL de destino:
              </label>
              <input
                type="url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white border border-[#E8DFD5] text-xs text-[#2C1E1A] focus:outline-none focus:ring-2 focus:ring-[#B85D3B]"
                placeholder="https://..."
              />
              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-2.5 py-1 text-xs text-slate-500 hover:text-slate-700"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-3 py-1 text-xs font-semibold rounded-md bg-[#B85D3B] text-white hover:bg-[#A04728]"
                >
                  Salvar
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-[#873B20] truncate">
                {customUrl}
              </span>
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="text-[11px] text-[#A66E2E] hover:underline font-medium shrink-0"
              >
                Alterar
              </button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <a
            href={customUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#B85D3B] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#A04728] transition-colors shadow-xs"
          >
            <span>Acessar Link Agora</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full py-2.5 px-4 rounded-xl border border-[#E8DFD5] text-[#2C1E1A] text-xs font-medium hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Link Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copiar Link para Área de Transferência</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

import { X, ExternalLink, Download } from "lucide-react";

interface DocumentPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
  type: string;
}

export default function DocumentPreviewModal({ isOpen, onClose, title, url, type }: DocumentPreviewModalProps) {
  if (!isOpen) return null;

  const previewUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-3 overflow-hidden">
                <span className="shrink-0 px-2 py-1 text-xs font-bold uppercase bg-slate-100 text-slate-600 rounded">
                    {type}
                </span>
                <h3 className="font-bold text-slate-900 truncate" title={title}>
                    {title}
                </h3>
            </div>
            
            <div className="flex items-center gap-2 shrink-0 ml-4">
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 text-slate-500 hover:text-primary hover:bg-blue-50 rounded-full transition-colors"
                    title="Mở trong tab mới / Tải xuống"
                >
                    <Download className="w-5 h-5" />
                </a>
                <button 
                    onClick={onClose}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Viewer Area */}
        <div className="flex-1 bg-slate-100 relative">
            <iframe 
                src={previewUrl}
                className="w-full h-full border-0"
                title="Document Preview"
            />
        </div>
        
        {/* Footer Hint */}
        {type !== 'PDF' && (
             <div className="px-6 py-2 bg-slate-50 text-[10px] text-slate-400 text-center border-t border-slate-100">
                 Đang xem bản xem trước qua Google Docs Viewer. Định dạng có thể khác so với bản gốc.
             </div>
        )}
      </div>
    </div>
  );
}

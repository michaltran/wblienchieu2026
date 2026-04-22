import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import type { Photo } from "../../data/photos";
import { useI18n } from "../../i18n/I18nContext";

interface PhotoLightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
}

export default function PhotoLightbox({ photo, onClose, onNext, onPrev, currentIndex, total }: PhotoLightboxProps) {
  const { t } = useI18n();

  // Keyboard navigation and locking scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200" role="dialog" aria-modal="true">
        
        {/* Close Button */}
        <button 
           onClick={onClose}
           className="absolute top-4 right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
        >
            <X className="w-8 h-8" />
        </button>

        {/* Navigation - Left */}
        <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden md:block z-50"
        >
            <ChevronLeft className="w-10 h-10" />
        </button>

        {/* Navigation - Right */}
        <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden md:block z-50"
        >
            <ChevronRight className="w-10 h-10" />
        </button>

        {/* Main Content */}
        <div className="relative w-full h-full flex flex-col py-12 px-4 md:px-20">
            <div className="flex-1 flex items-center justify-center overflow-hidden">
                <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                />
            </div>

            {/* Info Bar */}
            <div className="mt-4 flex flex-col md:flex-row items-center justify-between text-white max-w-6xl mx-auto w-full gap-4">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold">{photo.title}</h3>
                    <p className="text-white/60 text-sm">
                        {currentIndex + 1} / {total} {t('photo_stats_photos')}
                    </p>
                </div>

                <a 
                    href={photo.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm font-medium"
                >
                    <Download className="w-4 h-4" />
                    {t('photo_download')}
                </a>
            </div>
        </div>
        
    </div>
  );
}

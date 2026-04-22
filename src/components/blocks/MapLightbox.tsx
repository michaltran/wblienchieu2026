import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { MapItem } from "../../data/hospitalMaps";

interface MapLightboxProps {
  mapItem: MapItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function MapLightbox({ mapItem, onClose, onNext, onPrev }: MapLightboxProps) {
  
  // Keyboard nav
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
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-200" role="dialog" aria-modal="true">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 text-white bg-black/20">
            <h3 className="text-lg font-bold">{mapItem.title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-8 h-8" />
            </button>
        </div>

        {/* Main View */}
        <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden">
            {/* Prev */}
            <button 
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 hidden md:block"
            >
                <ChevronLeft className="w-12 h-12" />
            </button>

            <img 
                src={mapItem.imageSrc} 
                alt={mapItem.title} 
                className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
            />

            {/* Next */}
             <button 
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 hidden md:block"
            >
                <ChevronRight className="w-12 h-12" />
            </button>
        </div>
        
        {/* Footer info */}
        <div className="p-6 text-center text-white/70 text-sm pb-8">
            {mapItem.description}
        </div>
    </div>
  );
}

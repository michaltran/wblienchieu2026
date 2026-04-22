import { Maximize2, Download } from "lucide-react";
import type { MapItem } from "../../data/hospitalMaps";

interface MapViewerProps {
  mapItem: MapItem;
  onOpenLightbox: () => void;
}

export default function MapViewer({ mapItem, onOpenLightbox }: MapViewerProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-[#1E73BE] text-lg">{mapItem.title}</h3>
            <div className="flex gap-2">
                 <button 
                    onClick={onOpenLightbox}
                    className="p-2 text-slate-500 hover:text-[#1E73BE] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200" 
                    title="Phóng to"
                >
                    <Maximize2 className="w-5 h-5" />
                 </button>
                 <a 
                    href={mapItem.imageSrc} 
                    download={`sodo-${mapItem.id}.svg`}
                    className="p-2 text-slate-500 hover:text-[#1E73BE] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200" 
                    title="Tải ảnh"
                >
                    <Download className="w-5 h-5" />
                 </a>
            </div>
        </div>

        {/* Image Area */}
        <div className="relative aspect-[16/10] bg-slate-100 flex items-center justify-center p-4 cursor-zoom-in group" onClick={onOpenLightbox}>
            <img 
                src={mapItem.imageSrc} 
                alt={mapItem.title}
                className="w-full h-full object-contain drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                 <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                    Nhấn để phóng to
                 </span>
            </div>
        </div>

        {/* Description */}
        <div className="p-4 bg-white border-t border-slate-100">
            <p className="text-slate-600 text-sm">{mapItem.description}</p>
        </div>
    </div>
  );
}

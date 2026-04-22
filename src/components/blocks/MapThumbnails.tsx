import type { MapItem } from "../../data/hospitalMaps";
import { cn } from "../../lib/cn";

interface MapThumbnailsProps {
  maps: MapItem[];
  currentMapId: string;
  onSelect: (id: string) => void;
}

export default function MapThumbnails({ maps, currentMapId, onSelect }: MapThumbnailsProps) {
  return (
    <div className="mt-8">
        <h4 className="text-sm font-bold text-slate-500 uppercase mb-4">Các khu vực khác</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {maps.map((map) => (
                <button
                    key={map.id}
                    onClick={() => onSelect(map.id)}
                    className={cn(
                        "group relative aspect-video rounded-xl overflow-hidden border-2 transition-all",
                        currentMapId === map.id
                          ? "border-[#1E73BE] ring-2 ring-[#1E73BE]/30" 
                          : "border-transparent hover:border-slate-300 opacity-70 hover:opacity-100"
                    )}
                >
                    <img src={map.imageSrc} alt={map.title} className="w-full h-full object-cover" />
                    <div className={cn(
                        "absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs font-bold transition-colors",
                        currentMapId === map.id ? "bg-[#1E73BE]/80" : "group-hover:bg-black/20"
                    )}>
                        {map.title}
                    </div>
                </button>
            ))}
        </div>
    </div>
  );
}

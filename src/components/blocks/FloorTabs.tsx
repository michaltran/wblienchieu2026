import type { MapItem } from "../../data/hospitalMaps";
import { cn } from "../../lib/cn";

interface FloorTabsProps {
  maps: MapItem[];
  currentMapId: string;
  onSelect: (id: string) => void;
}

export default function FloorTabs({ maps, currentMapId, onSelect }: FloorTabsProps) {
  return (
    <div className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide sticky top-[60px] z-20 bg-white/90 backdrop-blur-md py-2 border-b border-transparent">
        {maps.map((map) => (
            <button
                key={map.id}
                onClick={() => onSelect(map.id)}
                className={cn(
                    "px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all border",
                    currentMapId === map.id
                        ? "bg-[#1E73BE] text-white border-[#1E73BE] shadow-md shadow-blue-200"
                        : "bg-white text-slate-600 border-slate-200 hover:border-[#1E73BE] hover:text-[#1E73BE]"
                )}
            >
                {map.title}
            </button>
        ))}
    </div>
  );
}

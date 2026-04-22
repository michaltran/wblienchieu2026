import { useI18n } from "../../i18n/I18nContext";
import type { Album } from "../../lib/api/content";
import { cn } from "../../lib/cn";
import { LayoutGrid } from "lucide-react";

interface AlbumStripProps {
  albums: Album[];
  selectedAlbumId: string | 'all';
  onSelectAlbum: (id: string | 'all') => void;
}

export default function AlbumStrip({ albums, selectedAlbumId, onSelectAlbum }: AlbumStripProps) {
  const { t } = useI18n();

  return (
    <div className="py-6 border-b border-slate-100 sticky top-[60px] z-30 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 min-w-max pb-2">
            {/* 'All' Option */}
            <button
                onClick={() => onSelectAlbum('all')}
                className={cn(
                    "relative group flex items-center gap-3 pl-2 pr-6 py-2 rounded-full transition-all border",
                    selectedAlbumId === 'all' 
                        ? "bg-[#1E73BE] text-white border-[#1E73BE] shadow-md shadow-blue-200" 
                        : "bg-white text-slate-600 border-slate-200 hover:border-[#1E73BE] hover:text-[#1E73BE]"
                )}
            >
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    selectedAlbumId === 'all' ? "bg-white/20" : "bg-slate-100 group-hover:bg-blue-50"
                )}>
                    <LayoutGrid className="w-5 h-5" />
                </div>
                <div className="text-left">
                    <div className="font-bold text-sm">{t('photo_all_albums')}</div>
                    <div className={cn("text-xs opacity-80", selectedAlbumId === 'all' ? "text-blue-100" : "text-slate-400")}>
                        {albums.length} {t('photo_stats_albums')}
                    </div>
                </div>
            </button>

            {/* Album Items */}
            {albums.map((album) => (
                <button
                    key={album.id}
                    onClick={() => onSelectAlbum(album.id)}
                    className={cn(
                        "relative group flex items-center gap-3 pl-2 pr-6 py-2 rounded-full transition-all border max-w-[280px]",
                        selectedAlbumId === album.id 
                            ? "bg-[#1E73BE] text-white border-[#1E73BE] shadow-md shadow-blue-200" 
                            : "bg-white text-slate-600 border-slate-200 hover:border-[#1E73BE] hover:text-[#1E73BE]"
                    )}
                >
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/20">
                        <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left overflow-hidden">
                        <div className="font-bold text-sm truncate w-full">{album.title}</div>
                        <div className={cn("text-xs opacity-80", selectedAlbumId === album.id ? "text-blue-100" : "text-slate-400")}>
                            {(album as any).photos?.length || 0} {t('photo_stats_photos')}
                        </div>
                    </div>
                </button>
            ))}
        </div>
      </div>
    </div>
  );
}

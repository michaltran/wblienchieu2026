import type { Photo } from "../../data/photos";
import { Maximize2, Download } from "lucide-react";
import { cn } from "../../lib/cn";

interface PhotoMasonryProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo, index: number) => void;
}

export default function PhotoMasonry({ photos, onPhotoClick }: PhotoMasonryProps) {
  if (photos.length === 0) {
      return <div className="py-20 text-center text-slate-500">Không tìm thấy ảnh nào.</div>;
  }

  return (
    <div className="container pb-12">
        {/* CSS Masonry using columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {photos.map((photo, index) => (
                <div 
                    key={photo.id}
                    className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-slate-200 cursor-zoom-in shadow-sm hover:shadow-lg transition-all duration-300"
                    onClick={() => onPhotoClick(photo, index)}
                >
                    <img 
                        src={photo.url} 
                        alt={photo.title} 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-semibold text-sm line-clamp-2">{photo.title}</h3>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-white/80 text-xs">Phóng to</span>
                            <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm text-white hover:bg-white hover:text-[#1E73BE] transition-colors">
                                <Maximize2 className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

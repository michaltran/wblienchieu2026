import { useState, useMemo } from "react";
import PhotoHero from "../components/blocks/PhotoHero";
import AlbumStrip from "../components/blocks/AlbumStrip";
import PhotoToolbar from "../components/blocks/PhotoToolbar";
import PhotoMasonry from "../components/blocks/PhotoMasonry";
import PhotoLightbox from "../components/blocks/PhotoLightbox";
import { Button } from "../components/ui/Button";
import { Phone, Calendar, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { usePublicAlbums, usePublicMedia } from "../hooks/useContent";

export default function PhotoLibrary() {
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'az'>('newest');
  
  // API Data
  const { data: albumsData } = usePublicAlbums({ limit: 100 });
  const { data: mediaData, isLoading: isLoadingMedia } = usePublicMedia({ limit: 500, type: 'image' });

  const albums = albumsData?.items || [];
  const allPhotos = mediaData?.items || [];

  // Lightbox State
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState<number | null>(null);

  // Filter Logic
  const filteredPhotos = useMemo(() => {
    let result = selectedAlbumId === 'all' 
        ? allPhotos 
        : allPhotos.filter((p: any) => p.albumId === selectedAlbumId || String(p.albumId) === String(selectedAlbumId));
    
    // Search
    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        result = result.filter((p: any) => 
            p.title?.toLowerCase().includes(q) || 
            p.tags?.some((tag: string) => tag.toLowerCase().includes(q)) ||
            p.description?.toLowerCase().includes(q)
        );
    }
    
    // Sort
    return result.sort((a: any, b: any) => {
        if (sortOrder === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        if (sortOrder === 'oldest') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        if (sortOrder === 'az') return (a.title || '').localeCompare(b.title || '');
        return 0;
    });
  }, [allPhotos, selectedAlbumId, searchQuery, sortOrder]);

  // Lightbox handlers
  const currentLightboxPhoto = lightboxPhotoIndex !== null ? filteredPhotos[lightboxPhotoIndex] : null;

  const handleNext = () => {
    if (lightboxPhotoIndex !== null) {
        setLightboxPhotoIndex((prev) => (prev! + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (lightboxPhotoIndex !== null) {
        setLightboxPhotoIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
       <PhotoHero 
            albumCount={albums.length} 
            photoCount={allPhotos.length} 
       />
       
       {albums.length > 0 && (
         <AlbumStrip 
              albums={albums}
              selectedAlbumId={selectedAlbumId}
              onSelectAlbum={(id) => {
                  setSelectedAlbumId(id);
                  setSearchQuery(""); // Reset search on album change optional
              }}
         />
       )}

       <PhotoToolbar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
       />

       {isLoadingMedia ? (
          <div className="py-20 flex justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
       ) : (
          <PhotoMasonry 
               photos={filteredPhotos}
               onPhotoClick={(_, index) => setLightboxPhotoIndex(index)}
          />
       )}

       {/* Load More Mock */}
       {filteredPhotos.length > 0 && (
           <div className="container pb-20 flex justify-center">
               <button className="px-8 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-600 hover:text-[#1E73BE] hover:border-[#1E73BE] shadow-sm transition-all hover:shadow-md">
                   Xem thêm
               </button>
           </div>
       )}

       {/* CTA Strip */}
       <div className="container pb-12">
            <div className="bg-gradient-to-r from-[#1E73BE] to-[#155FA0] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-900/10">
                <div>
                    <h3 className="text-2xl font-bold mb-2">Bạn cần hỗ trợ hoặc đăng ký khám?</h3>
                    <p className="text-blue-100">Đội ngũ y bác sĩ tận tâm của chúng tôi luôn sẵn sàng phục vụ bạn.</p>
                </div>
                <div className="flex gap-4">
                    <a href="tel:0905453677">
                        <Button variant="secondary" size="lg" className="rounded-full shadow-lg">
                            <Phone className="w-5 h-5 mr-2" />
                            0905453677
                        </Button>
                    </a>
                    <Link to="/dang-ky-kham">
                        <Button variant="outline" size="lg" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                            <Calendar className="w-5 h-5 mr-2" />
                            Đăng ký khám
                        </Button>
                    </Link>
                </div>
            </div>
       </div>

       {/* Lightbox Modal */}
       {currentLightboxPhoto && (
           <PhotoLightbox 
                photo={currentLightboxPhoto}
                onClose={() => setLightboxPhotoIndex(null)}
                onNext={handleNext}
                onPrev={handlePrev}
                currentIndex={lightboxPhotoIndex!}
                total={filteredPhotos.length}
           />
       )}
    </div>
  );
}

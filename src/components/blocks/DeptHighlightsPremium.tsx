import { useRef, useState, useEffect } from "react";
import { ST } from "../../styles/specialtyTokens";
import type { Department } from "../../lib/api/hospital";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, Image as ImageIcon } from "lucide-react";
import Lightbox from "../ui/Lightbox";
import { cn } from "../../lib/cn";

interface Props {
  dept: Department;
}

export default function DeptHighlightsPremium({ dept }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const slideInterval = useRef<ReturnType<typeof setTimeout>>();

  const slides = dept.highlights || [];
  const count = slides.length;

  // Autoplay
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentSlide]);

  const startAutoplay = () => {
    stopAutoplay();
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 6000); // 6s
  };

  const stopAutoplay = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % count);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + count) % count);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (count === 0) return null;

  return (
    <div id="hoat-dong" className="scroll-mt-40">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                <Sparkles className="w-5 h-5" />
            </div>
            <h2 className={ST.sectionTitle}>Hoạt động tiêu biểu</h2>
        </div>

        {/* Main Carousel Wrapper */}
        <div 
            className="group relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-700 ease-in-out",
                        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                >
                    <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Caption Bar */}
                    <div className="absolute botom-0 left-0 right-0 p-8 md:p-12 flex flex-col justify-end h-full text-white">
                         <div className="transform translate-y-4 opacity-0 transition-all duration-700 delay-300 group-hover:translate-y-0 group-hover:opacity-100">
                             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-3 border border-white/10">
                                 <ImageIcon className="w-3 h-3" />
                                 Ảnh hoạt động
                             </div>
                             <h3 className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl drop-shadow-md">
                                 {slide.title}
                             </h3>
                             <p className="mt-2 text-white/80 line-clamp-2 max-w-2xl text-sm md:text-base">
                                 Một trong những hoạt động nổi bật, thể hiện tinh thần chuyên nghiệp và tận tâm.
                             </p>
                         </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows (Desktop) */}
            <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-white/20 items-center justify-center text-white transition-all hover:scale-110 z-20"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-white/20 items-center justify-center text-white transition-all hover:scale-110 z-20"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Trigger (Icon) */}
            <button 
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all z-20 border border-white/10 hover:scale-105"
                title="Phóng to"
            >
                <Maximize2 className="w-5 h-5" />
            </button>

            {/* Slide Counter */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-mono font-bold z-20 border border-white/10">
                {currentSlide + 1} / {count}
            </div>

        </div>

        {/* Thumbnails Strip */}
        <div className="mt-6">
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            "relative shrink-0 w-32 md:w-40 aspect-video rounded-xl overflow-hidden transition-all duration-300 snap-start border-2",
                            index === currentSlide 
                            ? "border-[#1E73BE] ring-2 ring-[#1E73BE]/20 scale-105 shadow-lg" 
                            : "border-transparent opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                        )}
                    >
                        <img 
                            src={slide.image} 
                            alt={`Thumb ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>

        {/* Lightbox Modal */}
        <Lightbox 
            isOpen={isLightboxOpen}
            onClose={() => setIsLightboxOpen(false)}
            images={slides.map(s => s.image)}
            initialIndex={currentSlide}
        />
    </div>
  );
}

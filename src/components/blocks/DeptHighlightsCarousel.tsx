import { ST } from "../../styles/specialtyTokens";
import type { Department } from "../../lib/api/hospital";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Lightbox from "../ui/Lightbox";
import { cn } from "../../lib/cn";

interface Props {
  dept: Department;
}

export default function DeptHighlightsCarousel({ dept }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    
    // Autoplay
    useEffect(() => {
        if (lightboxOpen) return;
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % dept.highlights.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [dept.highlights.length, lightboxOpen]);

    const next = () => setCurrentIndex(prev => (prev + 1) % dept.highlights.length);
    const prev = () => setCurrentIndex(prev => (prev - 1 + dept.highlights.length) % dept.highlights.length);

    return (
        <div id="activities" className="scroll-mt-40">
           <div className="flex items-end justify-between mb-8">
               <div>
                   <h2 className={ST.sectionTitle}>Hình ảnh hoạt động</h2>
                   <p className={ST.sectionDesc}>Những khoảnh khắc tiêu biểu của {dept.name}</p>
               </div>
               <div className="flex gap-2">
                   <button onClick={prev} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#1E73BE] hover:text-white transition-colors">
                       <ChevronLeft className="w-5 h-5" />
                   </button>
                   <button onClick={next} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#1E73BE] hover:text-white transition-colors">
                       <ChevronRight className="w-5 h-5" />
                   </button>
               </div>
           </div>

           {/* Main Stage */}
           <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg group">
               <div 
                  className="w-full h-full cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
               >
                   {dept.highlights.map((item, idx) => (
                       <div 
                           key={idx}
                           className={cn(
                               "absolute inset-0 transition-opacity duration-700 ease-in-out bg-slate-100",
                               idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                           )}
                       >
                           <img 
                               src={item.image} 
                               alt={item.title} 
                               className="w-full h-full object-cover"
                               onError={(e) => {
                                   e.currentTarget.style.display = 'none'; // Should show placeholder
                                   e.currentTarget.parentElement?.classList.add('bg-slate-200'); // Fallback bg
                               }}
                           />
                           
                           {/* Caption Gradient */}
                           <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 md:p-12 text-white">
                               <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                               <div className="text-sm font-medium opacity-80">
                                   Ảnh {idx + 1} / {dept.highlights.length}
                               </div>
                           </div>
                       </div>
                   ))}
               </div>
               
               {/* Zoom Hint */}
               <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white p-2 rounded-lg backdrop-blur-sm pointer-events-none">
                   <Maximize2 className="w-5 h-5" />
               </div>
           </div>

           {/* Thumbs Strip */}
           <div className="mt-4 flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
               {dept.highlights.map((item, idx) => (
                   <button
                       key={idx}
                       onClick={() => setCurrentIndex(idx)}
                       className={cn(
                           "flex-none w-24 h-16 rounded-lg overflow-hidden border-2 transition-all snap-start",
                           idx === currentIndex ? "border-[#1E73BE] ring-2 ring-[#1E73BE]/30" : "border-transparent opacity-60 hover:opacity-100"
                       )}
                   >
                       <img src={item.image} alt="" className="w-full h-full object-cover" />
                   </button>
               ))}
           </div>

           <Lightbox 
               isOpen={lightboxOpen} 
               onClose={() => setLightboxOpen(false)}
               images={dept.highlights.map(h => h.image)}
               initialIndex={currentIndex}
           />
        </div>
    );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, CalendarCheck, Info } from "lucide-react";
import { Button } from "../ui/Button";
import { useI18n } from "../../i18n/I18nContext";

// Import banners
import banner1 from "../../assets/banners/banner-01.svg";
import banner2 from "../../assets/banners/banner-02.svg";
import banner3 from "../../assets/banners/banner-03.svg";
import banner4 from "../../assets/banners/banner-04.svg";
import banner5 from "../../assets/banners/banner-05.svg";

const banners = [banner1, banner2, banner3, banner4, banner5];

export default function HomeHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div 
      className="relative w-full h-[260px] md:h-[380px] lg:h-[520px] overflow-hidden group bg-slate-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
             <img src={src} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
             {/* Gradient Overlay for Text Readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Text Overlay (Static Position, Dynamic Content) */}
      <div className="absolute inset-0 flex items-center">
        <div className="container px-4 md:px-6">
           <div className="max-w-xl md:max-w-2xl animate-in fade-in slide-in-from-left-10 duration-700">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4">
                 {t('hero_h1')} <br/>
                 <span className="text-[#1E73BE]">{t('hero_h1_emphasis')}</span>
              </h1>
              <p className="text-slate-600 text-sm md:text-lg mb-8 max-w-lg leading-relaxed">
                 {t('hero_desc')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <Link to="/dang-ky-kham">
                    <Button size="lg" className="rounded-full shadow-lg shadow-blue-500/30 px-6 md:px-8 py-6 text-base">
                       <CalendarCheck className="w-5 h-5 mr-2" />
                       {t('cta_book')}
                    </Button>
                 </Link>
                 <Link to="/gioi-thieu">
                    <Button variant="outline" size="lg" className="rounded-full bg-white/50 border-blue-200 text-[#1E73BE] hover:bg-white px-6 md:px-8 py-6 text-base">
                       <Info className="w-5 h-5 mr-2" />
                       {t('cta_service')}
                    </Button>
                 </Link>
              </div>
           </div>
        </div>
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md opacity-0 group-hover:opacity-100 transition-all hidden md:block"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md opacity-0 group-hover:opacity-100 transition-all hidden md:block"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === idx ? "bg-[#1E73BE] w-8" : "bg-slate-300 hover:bg-[#1E73BE]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

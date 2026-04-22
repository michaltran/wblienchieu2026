import { useState, useEffect, useRef } from "react";
import partner1 from "../../assets/partners/bn-psn-danang.png";
import partner2 from "../../assets/partners/bv-danang.png";
import partner3 from "../../assets/partners/bv-phcn.png";
import partner4 from "../../assets/partners/bv-da-lieu.png";

interface Partner {
  id: number;
  name: string;
  website: string;
  logo?: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Bệnh viện Phụ Sản - Nhi Đà Nẵng",
    website: "https://phusannhidanang.org.vn/",
    logo: partner1
  },
  {
    id: 2,
    name: "Bệnh viện Đà Nẵng",
    website: "https://bvdn.danang.gov.vn/",
    logo: partner2
  },
  {
    id: 3,
    name: "Bệnh viện Da Liễu Đà Nẵng",
    website: "https://dalieudanang.com/",
    logo: partner4
  },
  {
    id: 4,
    name: "Bệnh viện Phục hồi chức năng",
    website: "", // Missing website
    logo: partner3
  },
  // Mock Data
  {
    id: 5,
    name: "Tập đoàn Y khoa Hoàn Mỹ",
    website: "https://hoanmy.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Logo_Hoan_My_Medical_Corporation.png"
  },
  {
    id: 6,
    name: "Bệnh viện Vinmec",
    website: "https://www.vinmec.com/",
    logo: "https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-Benh-Vien-Da-Khoa-Quoc-Te-Vinmec.png"
  },
  {
    id: 7,
    name: "Trung tâm Tiêm chủng VNVC",
    website: "https://vnvc.vn/",
    logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-VNVC-Vang-Xanh-Duong.png"
  },
  {
    id: 8,
    name: "Hệ thống Nhà thuốc Pharmacity",
    website: "https://www.pharmacity.vn/",
    logo: "https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-Pharmacity.png"
  }
];

export default function PartnersSection() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const itemsPerPage = 3; 

  const handleImgError = (id: number) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (partners.length - itemsPerPage + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  // Drag Handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setStartX(clientX);
    // Disable transition during drag
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const currentPosition = clientX - startX;
    setCurrentTranslate(currentPosition);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate;
    
    // Threshold to change slide (e.g., 50px)
    if (movedBy < -50) {
        if (currentIndex < partners.length - itemsPerPage) nextSlide();
    } else if (movedBy > 50) {
        if (currentIndex > 0) prevSlide();
    }
    
    setCurrentTranslate(0);
  };

  // Auto-slide (pause if dragging or hovering - handled by simple clear on unmount for now, simplified)
  useEffect(() => {
    if (isDragging) return; // Pause auto-slide while dragging

    const timer = setInterval(() => {
        setCurrentIndex(prev => {
            const maxIndex = partners.length - itemsPerPage;
            return prev >= maxIndex ? 0 : prev + 1;
        });
    }, 4000);
    return () => clearInterval(timer);
  }, [isDragging]);

  return (
    <section className="py-16 bg-white overflow-hidden select-none">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[28px] font-bold text-[#1E73BE] uppercase tracking-wide mb-4">
            Đối tác của chúng tôi
          </h2>
          <div className="w-[60px] h-[3px] bg-[#1E73BE] mx-auto rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-12">
           <div 
             className="overflow-hidden cursor-grab active:cursor-grabbing"
             onMouseDown={handleDragStart}
             onMouseMove={handleDragMove}
             onMouseUp={handleDragEnd}
             onMouseLeave={handleDragEnd}
             onTouchStart={handleDragStart}
             onTouchMove={handleDragMove}
             onTouchEnd={handleDragEnd}
             ref={containerRef}
           >
               <div 
                 className={`flex will-change-transform ${isDragging ? '' : 'transition-transform duration-700 ease-in-out'}`}
                 style={{ 
                     transform: `translateX(calc(-${currentIndex * (100 / itemsPerPage)}% + ${currentTranslate}px))` 
                 }}
               >
                   {partners.map((partner) => {
                       const isClickable = !!partner.website;
                       const Wrapper = isClickable ? "a" : "div";
                       // Prevent linking while dragging
                       const props = isClickable ? { 
                            href: partner.website, 
                            target: "_blank", 
                            rel: "noreferrer noopener",
                            onClick: (e: React.MouseEvent) => {
                                if (Math.abs(currentTranslate) > 5) e.preventDefault();
                            }
                        } : {};

                       return (
                           <div key={partner.id} className="min-w-[33.333%] px-4 flex justify-center flex-shrink-0">
                               <Wrapper
                                    {...props}
                                    draggable="false" // Prevent native drag
                                    className={`group flex flex-col items-center justify-center relative w-full h-32 ${
                                        isClickable ? "cursor-pointer" : "cursor-default"
                                    }`}
                               >
                                   <div className="h-20 w-full flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 pointer-events-none">
                                        {!imgErrors[partner.id] && partner.logo ? (
                                            <img 
                                                src={partner.logo} 
                                                alt={partner.name} 
                                                className="max-h-full max-w-[180px] object-contain select-none"
                                                loading="lazy"
                                                onError={() => handleImgError(partner.id)}
                                            />
                                        ) : (
                                            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 p-2 text-center text-[10px] font-bold select-none">
                                                {partner.name}
                                            </div>
                                        )}
                                   </div>
                                    
                                   {!isClickable && (
                                       <span className="absolute bottom-2 text-[10px] text-slate-400 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity select-none">
                                          (Đang cập nhật)
                                       </span>
                                   )}
                               </Wrapper>
                           </div>
                       );
                   })}
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}

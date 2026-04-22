import { ST } from "../../styles/specialtyTokens";
import { cn } from "../../lib/cn";
import { useEffect, useState } from "react";

const SECTIONS = [
    { id: 'structures', label: 'Cơ cấu tổ chức' },
    { id: 'functions', label: 'Chức năng - Nhiệm vụ' },
    { id: 'info', label: 'Thông tin' },
    { id: 'activities', label: 'Hoạt động nổi bật' }
];

export default function DeptSectionNav() {
    const [activeId, setActiveId] = useState('structures');

    // Sticky and Scroll Spy could be added here
    useEffect(() => {
        const handleScroll = () => {
             // Simple Scroll Spy logic if needed
             // For now, simple anchor linking
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 180; // Adjust for sticky header + nav
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveId(id);
        }
    };

    return (
        <div className="sticky top-[73px] z-20 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm hidden md:block">
            <div className={ST.container}>
                <div className="flex items-center gap-8">
                    {SECTIONS.map((sec) => (
                        <button
                            key={sec.id}
                            onClick={() => scrollTo(sec.id)}
                            className={cn(
                                "py-4 text-sm font-bold uppercase tracking-wide border-b-2 transition-all hover:text-[#1E73BE]",
                                activeId === sec.id 
                                    ? "text-[#1E73BE] border-[#1E73BE]" 
                                    : "text-slate-500 border-transparent hover:border-slate-300"
                            )}
                        >
                            {sec.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

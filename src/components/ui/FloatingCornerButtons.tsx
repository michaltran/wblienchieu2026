import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { cn } from "../../lib/cn";

export default function FloatingCornerButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3 items-center">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={cn(
          "w-[52px] h-[52px] rounded-full bg-white border border-slate-200 text-slate-500 shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-slate-50 hover:text-slate-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
          showTopBtn
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Call Button */}
      <a
        href="tel:0905453677"
        aria-label="Call 0905453677"
        className="w-[52px] h-[52px] rounded-full bg-[#39B54A] text-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:bg-[#32a342] hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus:ring-offset-2 animate-bounce-subtle"
      >
        <Phone className="w-6 h-6 fill-current" />
      </a>
      
      {/* Pulse animation keyframes if not already in tailwind config, we can add inline styles or assume animate-pulse is available, simply using standard classes */}
      {/* Using 'fill-current' on Phone icon gives it a solid look if icon supports it, else standard stroke is fine. Lucide Phone is outlined. */}
    </div>
  );
}

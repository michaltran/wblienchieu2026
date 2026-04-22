import { Quote } from "lucide-react";

export default function ServiceMottoQuote() {
  return (
    <div className="mb-16 bg-[#1E73BE]/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <Quote className="absolute top-6 left-6 w-16 h-16 text-[#1E73BE]/10" />
        
        <div className="relative z-10 text-center">
            <div className="text-sm font-bold text-[#1E73BE] uppercase tracking-widest mb-4">Phương châm phục vụ</div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-800 leading-tight">
                "Lắng nghe – Giải thích dễ hiểu – <br className="hidden md:block"/>Lấy người bệnh làm trung tâm"
            </h2>
            <div className="w-24 h-1 bg-[#1E73BE] mx-auto mt-8 rounded-full" />
        </div>
    </div>
  );
}

import { Target, Eye } from "lucide-react";

export default function MissionVisionBlocks() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Mission */}
        <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1E73BE]" />
            <div className="flex items-start justify-between mb-6">
                 <span className="bg-blue-50 text-[#1E73BE] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Sứ mệnh
                 </span>
                 <Target className="w-8 h-8 text-[#1E73BE]/20 group-hover:text-[#1E73BE] transition-colors" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#1E73BE] transition-colors">
                Chăm sóc tận tâm
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-lg">
                "Cung cấp dịch vụ chăm sóc sức khỏe an toàn, kịp thời và nhân văn; lấy người bệnh làm trung tâm, hướng tới chất lượng và cải tiến liên tục."
            </p>
        </div>

        {/* Vision */}
        <div className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#1E73BE]" />
            <div className="flex items-start justify-between mb-6">
                 <span className="bg-blue-50 text-[#1E73BE] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Tầm nhìn
                 </span>
                 <Eye className="w-8 h-8 text-[#1E73BE]/20 group-hover:text-[#1E73BE] transition-colors" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#1E73BE] transition-colors">
                Địa chỉ tin cậy
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-lg">
                "Trở thành địa chỉ y tế tin cậy của cộng đồng, nâng cao năng lực chuyên môn và trải nghiệm người bệnh bằng quy trình chuẩn hóa và công nghệ phù hợp."
            </p>
        </div>
    </div>
  );
}

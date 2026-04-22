import { useParams } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import { usePublicDepartmentBySlug } from "../hooks/useHospital";
import { Loader2 } from "lucide-react";

// Premium Blocks
import DeptHeroPremium from "../components/blocks/DeptHeroPremium";
import DeptSectionNav from "../components/blocks/DeptSectionNav";
import DeptLeadershipPremium from "../components/blocks/DeptLeadershipPremium";
import DeptMissionDutiesPremium from "../components/blocks/DeptMissionDutiesPremium";
import DeptInfoTilesPremium from "../components/blocks/DeptInfoTilesPremium";
import DeptHighlightsPremium from "../components/blocks/DeptHighlightsPremium";
import { ST } from "../styles/specialtyTokens";

export default function DepartmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { } = useI18n(); // No nav_home check needed here as breadcrumb is inside Hero
  const { data: dept, isLoading, error } = usePublicDepartmentBySlug(slug);

  if (isLoading) {
     return (
        <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
     );
  }

  if (error || !dept) {
     return <div className="min-h-screen flex items-center justify-center text-slate-500">Không tìm thấy khoa/phòng này.</div>;
  }

  return (
    <div className="bg-white min-h-screen pb-20">
       
       {/* 1. Premium Hero */}
       <DeptHeroPremium dept={dept as any} />

       {/* 2. Sticky Section Nav */}
       <DeptSectionNav />

       {/* 3. Main Content Container */}
       <div className={`${ST.container} py-12 md:py-16 space-y-20`}>
           
           {/* Section 1: Co cau to chuc (Structures) */}
           <DeptLeadershipPremium dept={dept as any} />

           <div className="h-px bg-slate-100" />

           {/* Section 2: Chuc nang nhiem vu (Mission/Duties) */}
           <DeptMissionDutiesPremium dept={dept as any} />

           <div className="h-px bg-slate-100" />

           {/* Section 3: Thong tin (Info & Services) */}
           <DeptInfoTilesPremium dept={dept as any} />

           <div className="h-px bg-slate-100" />
           
           {/* Section 4: Hoat dong (Highlights) */}
           <DeptHighlightsPremium dept={dept as any} />

           {/* CTA Strip */}
           <div className="bg-gradient-to-r from-[#1E73BE] to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
               <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 block">Cần tư vấn hoặc đặt lịch khám?</h3>
               <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10 block">
                   Đội ngũ y bác sĩ tại {dept.name} luôn sẵn sàng hỗ trợ bạn.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                   <a 
                       href={`/dang-ky-kham?dept=${dept.slug}`} 
                       className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#1E73BE] font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
                   >
                       Đăng ký khám ngay
                   </a>
                   <a 
                       href="tel:0905453677" 
                       className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                   >
                       Gọi Hotline 0905 453 677
                   </a>
               </div>
           </div>

       </div>

       {/* 4. Disclaimer Footer */}
       <div className={`${ST.container} pb-12`}>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center text-slate-500 text-sm font-medium">
                "Nội dung đang được cập nhật. Vui lòng liên hệ 0905453677 để được hướng dẫn chi tiết."
            </div>
       </div>

    </div>
  );
}

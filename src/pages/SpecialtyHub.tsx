import { useParams } from "react-router-dom";
import type { Department } from "../lib/api/hospital";
import { useI18n } from "../i18n/I18nContext";
import { useState, useMemo } from "react";
import SpecialtiesHero from "../components/blocks/SpecialtiesHero";
import SpecialtiesToolbar from "../components/blocks/SpecialtiesToolbar";
import DepartmentCardPremium from "../components/blocks/DepartmentCardPremium";
import { ST } from "../styles/specialtyTokens";
import Breadcrumb from "../components/ui/Breadcrumb";
import { usePublicDepartments } from "../hooks/useHospital";
import { Loader2 } from "lucide-react";

const BLOCK_TITLES: Record<string, string> = {
  "lam-sang": "Khối Lâm sàng",
  "can-lam-sang": "Khối Cận lâm sàng",
  "hanh-chinh": "Khối Hành chính"
};

const BLOCK_DESCRIPTIONS: Record<string, string> = {
    "lam-sang": "Cung cấp các dịch vụ khám, chữa bệnh và chăm sóc sức khỏe toàn diện với đội ngũ y bác sĩ chuyên môn cao.",
    "can-lam-sang": "Hỗ trợ chẩn đoán và điều trị chính xác thông qua các kỹ thuật xét nghiệm, hình ảnh và thăm dò chức năng hiện đại.",
    "hanh-chinh": "Đảm bảo hoạt động vận hành, quản lý và hỗ trợ hiệu quả cho toàn bộ hệ thống y tế của Trung tâm."
};

export default function SpecialtyHub() {
  const { block } = useParams<{ block: string }>();
  const { t } = useI18n();
  const { data, isLoading } = usePublicDepartments({ limit: 100 });
  const departments = data?.items || [];
  
  const currentBlock = block as string;
  const title = BLOCK_TITLES[currentBlock] || "Chuyên khoa";
  const description = BLOCK_DESCRIPTIONS[currentBlock] || "";

  // State
  const [search, setSearch] = useState("");
  const [sortMode, setSortMode] = useState<'default' | 'az'>('default');

  // Logic
  const filteredDepartments = useMemo(() => {
      let result = departments.filter((d: any) => d.block === currentBlock);
      
      if (search) {
          const lower = search.toLowerCase();
          result = result.filter((d: any) => 
              d.name.toLowerCase().includes(lower) || 
              (d.missionText && d.missionText.toLowerCase().includes(lower))
          );
      }

      if (sortMode === 'az') {
          result = [...result].sort((a, b) => a.name.localeCompare(b.name));
      }

      return result;
  }, [departments, currentBlock, search, sortMode]);

  // Fallback for invalid block
  if (!BLOCK_TITLES[currentBlock]) {
     return <div className="min-h-screen flex items-center justify-center text-slate-500">Khối chuyên khoa không tồn tại.</div>;
  }

  const resultCount = filteredDepartments.length;
  const countLabel = currentBlock === 'hanh-chinh' ? 'Phòng' : 'Khoa';

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero */}
      <SpecialtiesHero 
         title={title} 
         subtitle={description} 
         stats={{ count: resultCount, label: `${countLabel} trực thuộc` }} 
      />

      {/* Breadcrumb - Overlapping Hero bottom slightly or just below */}
      <div className="-mt-8 relative z-20 mb-8">
           <div className={ST.container}>
               <div className="bg-white/90 backdrop-blur rounded-xl px-6 py-3 shadow-sm border border-slate-100 inline-block">
                    <Breadcrumb 
                        items={[
                            { label: t("nav_home"), href: "/" },
                            { label: "Chuyên khoa", href: "#" },
                            { label: title, href: `/chuyen-khoa/${block}` }
                        ]}
                    />
               </div>
           </div>
      </div>

      {/* Toolbar */}
      <SpecialtiesToolbar 
         onSearch={setSearch} 
         onSort={setSortMode}
         totalResults={resultCount}
      />

      {/* Results Grid */}
      <div className={ST.container}>
         {isLoading ? (
            <div className="py-20 flex justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
         ) : resultCount > 0 ? (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredDepartments.map((dept: any) => (
                    <DepartmentCardPremium key={dept.id} dept={dept as any} />
                ))}
             </div>
         ) : (
             <div className="py-20 text-center">
                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
                     <span className="text-2xl">?</span>
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-2">Không tìm thấy kết quả</h3>
                 <p className="text-slate-500 mb-6 max-w-xs mx-auto">
                     Thử thay đổi từ khóa tìm kiếm hoặc chọn bộ lọc khác.
                 </p>
                 <button 
                    onClick={() => setSearch("")}
                    className={ST.primaryBtn}
                 >
                    Xóa tìm kiếm
                 </button>
             </div>
         )}
      </div>

    </div>
  );
}

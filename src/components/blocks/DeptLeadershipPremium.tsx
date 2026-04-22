import { ST } from "../../styles/specialtyTokens";
import type { Department } from "../../data/departments";
import { User, Users } from "lucide-react";

interface Props {
  dept: Department;
}

export default function DeptLeadershipPremium({ dept }: Props) {
  const isHanhChinh = dept.block === 'hanh-chinh';
  
  return (
    <div id="co-cau" className="scroll-mt-40">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1E73BE]">
                <Users className="w-5 h-5" />
            </div>
            <h2 className={ST.sectionTitle}>Cơ cấu tổ chức</h2>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Leaders Cards (5 cols) */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-4">
                {dept.leaders.map((leader, idx) => {
                    // Logic for title display
                    let displayTitle = leader.title;
                    if (isHanhChinh) {
                        if (leader.title.toLowerCase().includes("trưởng khoa")) displayTitle = "Trưởng phòng";
                        if (leader.title.toLowerCase().includes("phó trưởng khoa")) displayTitle = "Phó trưởng phòng";
                    }

                    return (
                        <div key={idx} className="group bg-white rounded-2xl p-5 flex items-center gap-5 border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                             <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 shrink-0 border-2 border-white shadow-sm overflow-hidden relative">
                                <User className="w-10 h-10 absolute" />
                             </div>
                             <div>
                                 <div className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1E73BE] text-xs font-bold uppercase tracking-wider mb-2">
                                     {displayTitle}
                                 </div>
                                 <div className="text-xl font-bold text-slate-900 mb-0.5">
                                     {leader.name}
                                 </div>
                                 <div className="text-sm text-slate-500 font-medium">
                                    {isHanhChinh ? "Lãnh đạo phòng" : "Lãnh đạo khoa"}
                                 </div>
                             </div>
                        </div>
                    );
                })}
            </div>

            {/* Team Image (7 cols) */}
            <div className="lg:col-span-12 xl:col-span-7">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-sm group">
                    <div className="absolute inset-0 bg-slate-50 flex items-center justify-center text-slate-300">
                         {/* Placeholder Pattern */}
                         <Users className="w-16 h-16 opacity-20" />
                    </div>
                    {/* Real Image if available */}
                    <img 
                        src={dept.teamImage} 
                        alt={`Tập thể ${dept.name}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
                        <h4 className="text-white text-lg font-bold">Tập thể {dept.name}</h4>
                        <p className="text-white/80 text-sm">Đoàn kết - Chuyên nghiệp - Tận tâm</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

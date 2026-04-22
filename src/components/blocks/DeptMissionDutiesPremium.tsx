import { ST } from "../../styles/specialtyTokens";
import type { Department } from "../../data/departments";
import { CheckCircle2, Quote, Target } from "lucide-react";

interface Props {
  dept: Department;
}

export default function DeptMissionDutiesPremium({ dept }: Props) {
  return (
    <div id="chuc-nang" className="scroll-mt-40">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Target className="w-5 h-5" />
            </div>
            <h2 className={ST.sectionTitle}>Chức năng & Nhiệm vụ</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
            
            {/* Left: Mission (Quote Style) */}
            <div className="relative">
                 <div className="absolute -top-4 -left-4 text-slate-100">
                     <Quote className="w-16 h-16" />
                 </div>
                 <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl">
                     <h3 className="text-lg font-bold opacity-80 mb-4 uppercase tracking-widest text-[10px]">Sứ mệnh hoạt động</h3>
                     <p className="text-2xl font-medium leading-relaxed italic">
                        "{dept.missionText}"
                     </p>
                 </div>
            </div>

       </div>
    </div>
  );
}

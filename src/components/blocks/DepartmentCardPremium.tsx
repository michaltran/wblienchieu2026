import { ST } from "../../styles/specialtyTokens";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import type { Department } from "../../data/departments";

interface Props {
  dept: Department;
  isFeatured?: boolean;
}

export default function DepartmentCardPremium({ dept, isFeatured = false }: Props) {
  return (
    <div className={`${ST.card} ${ST.cardHover} relative flex flex-col h-full group`}>
      {/* Optional Featured Highlight */}
      {isFeatured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header: Icon + Name */}
        <div className="flex items-start justify-between mb-4">
            <div className={`${ST.iconBox} bg-blue-50 group-hover:bg-[#1E73BE] group-hover:text-white transition-colors duration-300`}>
                <Stethoscope className="w-5 h-5" />
            </div>
            {isFeatured && (
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Nổi bật
                </span>
            )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1E73BE] transition-colors line-clamp-2">
            {dept.name}
        </h3>
        
        <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-1 leading-relaxed">
            {dept.missionText}
        </p>

        {/* Action Row */}
        <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between gap-3">
            <Link 
                to={`/chuyen-khoa/${dept.block}/${dept.slug}`}
                className="text-sm font-semibold text-[#1E73BE] flex items-center gap-1 hover:gap-2 transition-all"
            >
                Xem giới thiệu
                <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
                to={`/dang-ky-kham?dept=${dept.slug}&block=${dept.block}`}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-500 hover:bg-[#1E73BE] hover:text-white transition-colors"
                title="Đặt lịch khám"
            >
                <span className="sr-only">Đặt lịch khám</span>
                {/* Calendar Icon or relevant icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-plus"><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><line x1="19" x2="19" y1="16" y2="22"/><line x1="16" x2="22" y1="19" y2="19"/></svg>
            </Link>
        </div>
      </div>
    </div>
  );
}

import { ST } from "../../styles/specialtyTokens";
import { Calendar, Phone, Mail, Clock, MapPin } from "lucide-react";
import Breadcrumb from "../ui/Breadcrumb";
import { useI18n } from "../../i18n/I18nContext";
import type { Department } from "../../lib/api/hospital";
import { Link } from "react-router-dom";

interface Props {
  dept: Department;
}

export default function DeptHeroPremium({ dept }: Props) {
  const { t } = useI18n();

  return (
    <div className="relative bg-[#F8FAFC] min-h-[500px] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
             <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] bg-[#1E73BE] rounded-full blur-3xl opacity-20" />
             <svg className="absolute top-0 right-0 w-1/2 h-full text-slate-200" fill="none" viewBox="0 0 400 400">
                <defs>
                    <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-pattern)" />
             </svg>
        </div>

        <div className={`${ST.container} relative z-10 w-full`}>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                
                {/* Left: Content (8 cols) */}
                <div className="lg:col-span-8 space-y-6 pt-4">
                     {/* Breadcrumb */}
                     <div className="inline-block mb-2">
                        <Breadcrumb 
                            items={[
                                { label: t("nav_home"), href: "/" },
                                { label: "Chuyên khoa", href: "/chuyen-khoa" },
                                { label: dept.block === 'lam-sang' ? 'Lâm sàng' : dept.block === 'can-lam-sang' ? 'Cận lâm sàng' : 'Hành chính', href: `/chuyen-khoa/${dept.block}` },
                                { label: dept.name, href: "#" }
                            ]}
                            className="text-slate-500"
                        />
                     </div>
                     
                     <div>
                         <div className="flex items-center gap-3 mb-4">
                             <span className="bg-blue-100 text-[#1E73BE] text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider border border-blue-200">
                                {dept.block === 'lam-sang' ? 'Khối Lâm sàng' : dept.block === 'can-lam-sang' ? 'Khối Cận lâm sàng' : 'Khối Hành chính'}
                             </span>
                         </div>
                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                             {dept.name}
                         </h1>
                         <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
                             {dept.missionText}
                         </p>

                         {/* Chips Row */}
                         <div className="flex flex-wrap gap-3 mt-6">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-700">
                                <Phone className="w-4 h-4 text-[#1E73BE]" />
                                <span>Hotline: {dept.info.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-700">
                                <Mail className="w-4 h-4 text-[#1E73BE]" />
                                <span>{dept.info.email}</span>
                            </div>
                         </div>
                     </div>
                </div>

                {/* Right: Sticky Action Card (4 cols) */}
                <div className="hidden lg:col-span-4 lg:block relative">
                    <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 z-20">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                            Đặt lịch khám
                        </h3>
                        <p className="text-slate-500 text-sm mb-6">
                            Chọn thời gian phù hợp để giảm thời gian chờ đợi.
                        </p>
                        
                        <div className="space-y-3">
                            <Link 
                                to={`/dang-ky-kham?dept=${dept.slug}&block=${dept.block}`}
                                className="flex items-center justify-center gap-2 w-full bg-[#1E73BE] text-white font-bold py-3.5 rounded-xl hover:bg-[#1664a8] transition-all shadow-lg shadow-blue-500/30 active:scale-95"
                            >
                                <Calendar className="w-5 h-5" />
                                Đặt lịch ngay
                            </Link>
                            
                            <a 
                                href={`tel:${dept.info.phone}`}
                                className="flex items-center justify-center gap-2 w-full bg-white text-slate-700 font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-all border-2 border-slate-200 hover:border-[#1E73BE]"
                            >
                                <Phone className="w-5 h-5" />
                                Gọi {dept.info.phone}
                            </a>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                             <Link to="/lien-he" className="text-sm font-medium text-[#1E73BE] hover:underline">
                                 Liên hệ tư vấn chi tiết &rarr;
                             </Link>
                             <p className="text-[11px] text-slate-400 mt-2">
                                 Trung tâm sẽ liên hệ xác nhận lịch hẹn.
                             </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

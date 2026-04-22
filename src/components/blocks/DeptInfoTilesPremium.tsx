import { ST } from "../../styles/specialtyTokens";
import type { Department } from "../../data/departments";
import { Phone, Syringe, ArrowRight, Info } from "lucide-react";
import { cn } from "../../lib/cn";

interface Props {
  dept: Department;
}

export default function DeptInfoTilesPremium({ dept }: Props) {
  const tiles = [
      {
          icon: Phone,
          label: "Hotline liên hệ",
          value: dept.info.phone,
          isLink: true,
          href: `tel:${dept.info.phone}`,
          color: "text-green-600 bg-green-50"
      },
      // Services Tile - Special treatment
      {
          icon: Syringe,
          label: "Danh mục kỹ thuật",
          value: "Dịch vụ nổi bật",
          color: "text-rose-600 bg-rose-50",
          isServices: true
      },
  ];

  return (
    <div id="thong-tin" className="scroll-mt-40">
       <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <Info className="w-5 h-5" />
            </div>
            <h2 className={ST.sectionTitle}>Thông tin khoa/phòng</h2>
       </div>
       
       <div className="grid md:grid-cols-2 gap-6">
            {tiles.map((tile, idx) => (
                <div key={idx} className={cn(
                    "bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300",
                    // Make tiles full height to match each other
                    "h-full min-h-[200px]"
                )}>
                    {tile.isServices ? (
                        /* Special Services Tile Layout */
                        <div className="h-full flex flex-col">
                             <div className="flex items-center gap-4 mb-4">
                                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", tile.color)}>
                                    <tile.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                                        {tile.label}
                                    </div>
                                    <div className="font-bold text-slate-900">
                                        {dept.info.services.length} Danh mục
                                    </div>
                                </div>
                             </div>
                             
                             <ul className="space-y-2 mb-4 flex-1">
                                 {dept.info.services.slice(0, 5).map((svc, sIdx) => (
                                     <li key={sIdx} className="flex items-start gap-2 text-sm text-slate-600">
                                         <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                         <span className="line-clamp-1">{svc}</span>
                                     </li>
                                 ))}
                                 {dept.info.services.length > 5 && (
                                     <li className="text-xs text-slate-400 font-medium pl-3.5">
                                         +{dept.info.services.length - 5} dịch vụ khác...
                                     </li>
                                 )}
                             </ul>

                             <button className="text-sm font-bold text-[#1E73BE] flex items-center gap-1 hover:gap-2 transition-all self-start mt-auto">
                                 Xem chi tiết <ArrowRight className="w-4 h-4" />
                             </button>
                        </div>
                    ) : (
                        /* Standard Info Tile (Hotline) */
                        <div className="h-full flex flex-col justify-between">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                     <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                                         {tile.label}
                                     </div>
                                     <a href={tile.href} className="text-3xl font-black text-slate-900 hover:text-[#1E73BE] track-tight">
                                         {tile.value}
                                     </a>
                                     <p className="text-sm text-slate-500 mt-2 font-medium">
                                        Hỗ trợ tư vấn 24/7
                                     </p>
                                </div>
                                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0", tile.color)}>
                                    <tile.icon className="w-8 h-8" />
                                </div>
                            </div>
                            
                            <a 
                                href={tile.href || "#"} 
                                className="w-full bg-slate-50 hover:bg-[#1E73BE] hover:text-white border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-auto"
                            >
                                <Phone className="w-4 h-4" /> Gọi điện ngay
                            </a>
                        </div>
                    )}
                </div>
            ))}
       </div>
    </div>
  );
}

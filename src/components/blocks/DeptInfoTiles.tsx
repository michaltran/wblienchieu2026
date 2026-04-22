import { ST } from "../../styles/specialtyTokens";
import type { Department } from "../../lib/api/hospital";
import { MapPin, Phone, Mail, Clock, Facebook, Globe, Stethoscope, Share2, Syringe } from "lucide-react";
import { cn } from "../../lib/cn";

interface Props {
  dept: Department;
}

export default function DeptInfoTiles({ dept }: Props) {
  const tiles = [
      {
          icon: Clock,
          label: "Giờ làm việc",
          value: dept.info.workingHours,
          color: "text-blue-600 bg-blue-50"
      },
      {
          icon: Phone,
          label: "Hotline liên hệ",
          value: dept.info.phone,
          isLink: true,
          href: `tel:${dept.info.phone}`,
          color: "text-green-600 bg-green-50"
      },
      {
          icon: Mail,
          label: "Email công vụ",
          value: dept.info.email,
           isLink: true,
          href: `mailto:${dept.info.email}`,
          color: "text-amber-600 bg-amber-50"
      },
      {
          icon: MapPin,
          label: "Vị trí",
          value: dept.info.location,
          color: "text-purple-600 bg-purple-50",
          action: "Chỉ đường"
      },
      {
          icon: Share2,
          label: "Mạng xã hội",
          value: "Facebook Page",
          color: "text-indigo-600 bg-indigo-50",
          isLink: true,
          href: "#"
      },
      {
          icon: Syringe,
          label: "Dịch vụ chính",
          value: `${dept.info.services.length} dịch vụ kỹ thuật`,
          color: "text-rose-600 bg-rose-50"
      },
  ];

  return (
    <div id="info" className="scroll-mt-40">
       <h2 className={ST.sectionTitle}>Thông tin liên hệ & Dịch vụ</h2>
       
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiles.map((tile, idx) => (
                <div key={idx} className={`${ST.card} p-6 flex flex-col justify-between hover:shadow-md transition-shadow`}>
                    <div className="flex items-start justify-between mb-4">
                        <div>
                             <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                                 {tile.label}
                             </div>
                             {tile.isLink ? (
                                 <a href={tile.href} className="text-lg font-bold text-slate-900 hover:text-[#1E73BE] break-all">
                                     {tile.value}
                                 </a>
                             ) : (
                                 <div className="text-lg font-bold text-slate-900 leading-snug">
                                     {tile.value}
                                 </div>
                             )}
                        </div>
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", tile.color)}>
                            <tile.icon className="w-5 h-5" />
                        </div>
                    </div>
                    
                    {tile.action && (
                        <button className="text-sm font-semibold text-[#1E73BE] self-start hover:underline">
                            {tile.action} &rarr;
                        </button>
                    )}
                </div>
            ))}
       </div>

       {/* Expanded Services List */}
       <div className={`${ST.card} mt-8 p-8 bg-slate-50 border-slate-200`}>
             <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <Syringe className="w-5 h-5 text-[#1E73BE]" />
                 Danh sách dịch vụ kỹ thuật
             </h3>
             <div className="flex flex-wrap gap-2">
                 {dept.info.services.map((svc, i) => (
                     <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                         {svc}
                     </span>
                 ))}
             </div>
       </div>
    </div>
  );
}

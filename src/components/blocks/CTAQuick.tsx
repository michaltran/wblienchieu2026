import { Link } from "react-router-dom";
import { Phone, Calendar, UserSearch } from "lucide-react";
import { useState } from "react";
import HotlinePopup from "./HotlinePopup";

export default function CTAQuick() {
  const [isHotlineOpen, setIsHotlineOpen] = useState(false);

  const actions = [
    {
      icon: Phone,
      title: "Gọi tổng đài",
      desc: "Hỗ trợ 24/7",
      action: "0905453677",
      onClick: () => setIsHotlineOpen(true),
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Calendar,
      title: "Đăng ký khám",
      desc: "Đặt lịch nhanh chóng",
      action: "Đặt ngay",
      link: "/dang-ky-kham",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: UserSearch,
      title: "Tìm bác sĩ",
      desc: "Đội ngũ chuyên gia",
      action: "Tra cứu",
      link: "/chuyen-gia-y-te", // Placeholder route
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <>
      <section className="relative z-10 -mt-20 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actions.map((item, idx) => {
               const CardContent = (
                 <>
                  <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                 </>
               );

               if (item.onClick) {
                 return (
                   <button 
                      key={idx}
                      onClick={item.onClick}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 transition-transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-4 group w-full"
                   >
                      {CardContent}
                   </button>
                 );
               }

               return (
                <Link 
                  key={idx} 
                  to={item.link || "#"}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 transition-transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-4 group"
                >
                  {CardContent}
                </Link>
               );
            })}
          </div>
        </div>
      </section>
      
      <HotlinePopup open={isHotlineOpen} onClose={() => setIsHotlineOpen(false)} />
    </>
  );
}

import PageShell from "../../components/layout/PageShell";
import Section from "../../components/ui/Section";
import InfoCard from "../../components/ui/InfoCard";
import { Link } from "react-router-dom";
import { Check, Phone, Calendar, ArrowRight, HelpCircle } from "lucide-react";
import { healthCheckPackages, healthCheckFaq } from "../../data/healthCheckPackages";

export default function HealthCheck() {
  const breadcrumbs = [
    { label: "Hoạt động", href: "#" },
    { label: "Khám sức khỏe" }
  ];

  return (
    <PageShell
      title="Khám Sức Khỏe"
      subtitle="Gói khám sức khỏe tổng quát, định kỳ và chuyên sâu dành cho cá nhân và doanh nghiệp."
      breadcrumbs={breadcrumbs}
      rightSlot={
         <div className="flex gap-3">
             <a href="tel:0905453677" className="hidden sm:inline-flex items-center px-4 py-2 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                 <Phone className="w-4 h-4 mr-2" /> 0905 453 677
             </a>
             <Link to="/dang-ky-kham" className="inline-flex items-center px-6 py-2 bg-[#1E73BE] text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
                 <Calendar className="w-4 h-4 mr-2" />
                 Đăng ký khám
             </Link>
         </div>
      }
    >
       {/* Packages Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
           {healthCheckPackages.map(pkg => (
               <div key={pkg.id} className={`relative flex flex-col p-6 rounded-2xl border ${pkg.highlight ? 'border-[#1E73BE] shadow-xl scale-105 z-10 bg-white' : 'border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg'} transition-all`}>
                   {pkg.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E73BE] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Phổ biến nhất</div>}
                   
                   <div className="mb-6">
                       <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                       <p className="text-sm text-slate-500 mb-4">{pkg.target}</p>
                       <div className="text-2xl font-black text-[#1E73BE]">{pkg.price}</div>
                       <p className="text-xs text-slate-400 mt-1">Thời gian: {pkg.duration}</p>
                   </div>

                   <ul className="space-y-3 mb-8 flex-1">
                       {pkg.includes.map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                               <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                               <span className="text-sm text-slate-600">{item}</span>
                           </li>
                       ))}
                   </ul>

                   <Link to="/dang-ky-kham" className={`w-full py-3 rounded-xl font-bold text-center transition-colors ${pkg.highlight ? 'bg-[#1E73BE] text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                       Đăng ký ngay
                   </Link>
               </div>
           ))}
       </div>

       {/* Process */}
       <Section title="Quy trình khám sức khỏe" description="Quy trình khám khoa học, nhanh chóng, giảm thiểu thời gian chờ đợi.">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               {[
                   "Đăng ký & Tư vấn gói khám",
                   "Tiếp nhận & Kích hoạt hồ sơ",
                   "Khám lâm sàng & Xét nghiệm",
                   "Nhận kết quả & Bác sĩ tư vấn"
               ].map((step, i) => (
                   <div key={i} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center group hover:bg-blue-50 transition-colors">
                       <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center font-black text-[#1E73BE] shadow-sm mb-4 group-hover:scale-110 transition-transform">{i + 1}</div>
                       <h4 className="font-bold text-slate-900">{step}</h4>
                       {i < 3 && <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-slate-300"></div>}
                   </div>
               ))}
           </div>
       </Section>

       {/* FAQ */}
       <Section title="Câu hỏi thường gặp">
           <div className="grid md:grid-cols-2 gap-6">
               {healthCheckFaq.map((faq, i) => (
                   <InfoCard key={i} className="flex gap-4">
                       <HelpCircle className="w-6 h-6 text-[#1E73BE] shrink-0" />
                       <div>
                           <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                           <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                       </div>
                   </InfoCard>
               ))}
           </div>
       </Section>
    </PageShell>
  );
}

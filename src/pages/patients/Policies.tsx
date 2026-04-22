import PatientCategoryLayout from "../../components/layout/PatientCategoryLayout";
import { ShieldCheck, BookOpen, AlertCircle, FileText } from "lucide-react";

export default function Policies() {
  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Dành cho người bệnh", href: "#" },
    { label: "Chế độ & Chính sách" },
  ];

  const policies = [
      {
          icon: ShieldCheck,
          title: "Quyền lợi BHYT",
          desc: "Thông tin về mức hưởng BHYT đúng tuyến (80%, 95%, 100%), khám trái tuyến và các quy đổi quyền lợi ưu tiên."
      },
      {
          icon: BookOpen,
          title: "Nội quy Bệnh viện",
          desc: "Quy định giờ thăm nuôi (6:00-7:00, 11:30-13:00, 17:00-21:00), giữ gìn vệ sinh chung và bảo mật thông tin."
      },
      {
          icon: FileText,
          title: "Thủ tục Chuyển tuyến",
          desc: "Hướng dẫn xin giấy chuyển tuyến, các giấy tờ cần thiết để được hưởng chế độ BHYT khi chuyển viện."
      },
      {
          icon: AlertCircle,
          title: "Chính sách Miễn giảm",
          desc: "Các đối tượng được miễn giảm viện phí, hỗ trợ người nghèo và các chương trình nhân đạo của Trung tâm."
      }
  ];

  return (
    <PatientCategoryLayout
      title="Chế độ & Chính sách"
      description="Quyền lợi người bệnh, hướng dẫn thanh toán bảo hiểm y tế và các quy định hành chính liên quan."
      breadcrumbs={breadcrumbs}
    >
      <div className="grid grid-cols-1 gap-4">
         {policies.map((p, idx) => (
             <div key={idx} className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#1E73BE] hover:shadow-md transition-all cursor-pointer flex gap-4 items-start">
                 <div className="w-12 h-12 bg-blue-50 text-[#1E73BE] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                     <p.icon className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#1E73BE] transition-colors">{p.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">{p.desc}</p>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#1E73BE] transition-colors flex items-center gap-1">
                        Xem chi tiết <span className="text-lg leading-none">&rsaquo;</span>
                    </span>
                 </div>
             </div>
         ))}
      </div>
    </PatientCategoryLayout>
  );
}

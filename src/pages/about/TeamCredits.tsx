import PageShell from "../../components/layout/PageShell";
import { Link } from "react-router-dom";
import { Github, Mail, Globe, Heart, ArrowRight } from "lucide-react";

// Team Data
const teamMembers = [
  {
    name: "Trần Hữu Tiến Đạt",
    role: "Phụ trách sản phẩm, Triển khai, UX/UI, Developer",
    bio: "Chịu trách nhiệm định hướng phát triển sản phẩm, Thiết kế giao diện người dùng (UI/UX), quản lý dự án và đảm bảo chất lượng đầu ra cho hệ thống website.",
    avatar: "/src/assets/team/tien-dat.svg",
    links: { web: "#", email: "#" }
  },
  {
    name: "Tăng Thượng Phúc",
    role: "Phụ trách Backend, API, Database, Developer",
    bio: "Thiết kế giao diện người dùng (UI/UX), xây dựng cấu trúc nội dung và tối ưu hóa trải nghiệm thị giác cho người bệnh.",
    avatar: "/src/assets/team/thuong-phuc.svg",
    links: { web: "#", email: "#" }
  },
  {
    name: "Nguyễn Minh An",
    role: "Phụ trách Frontend, UI/UX, Developer",
    bio: "Thiết kế giao diện người dùng (UI/UX), xây dựng cấu trúc nội dung và tối ưu hóa trải nghiệm thị giác cho người bệnh.",
    avatar: "/src/assets/team/minh-an.svg",
    links: { web: "#", email: "#" }
  }
];

export default function TeamCredits() {
  return (
    <PageShell
      title="Người thực hiện website"
      subtitle="Nhóm phụ trách thiết kế, phát triển và vận hành hệ thống thông tin điện tử Trung tâm Y tế."
      breadcrumbs={[
        { label: "Người thực hiện" }
      ]}
    >
      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
             {/* Avatar Area */}
             <div className="bg-slate-50 p-8 flex justify-center items-center border-b border-slate-100 group-hover:bg-blue-50/50 transition-colors">
                <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg ring-4 ring-white">
                   <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover bg-slate-100" />
                </div>
             </div>
             
             {/* Content */}
             <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4 bg-blue-50 inline-block px-3 py-1 rounded-full">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                   {member.bio}
                </p>

                {/* Chips */}
                <div className="flex justify-center gap-3">
                   <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 cursor-not-allowed">
                      <Globe className="w-3 h-3" /> Web
                   </span>
                   <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 cursor-not-allowed">
                      <Mail className="w-3 h-3" /> Email
                   </span>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Thank You Section */}
      <div className="bg-gradient-to-br from-[#1E73BE] to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
             <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white fill-white" />
             </div>
             <h2 className="text-2xl md:text-3xl font-bold mb-4">Lời cảm ơn</h2>
             <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Cảm ơn Ban Giám đốc và đội ngũ y bác sĩ TTYT Liên Chiểu đã tin tưởng và hỗ trợ chúng tôi hoàn thành dự án này. Chúng tôi hy vọng website sẽ là cầu nối hữu ích giữa Trung tâm và người dân.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition shadow-lg">
                   Về Trang chủ
                </Link>
                <Link to="/lien-he" className="px-6 py-3 border border-white/30 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition backdrop-blur-sm flex items-center justify-center gap-2">
                   Liên hệ với chúng tôi <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
          </div>
      </div>
    </PageShell>
  );
}

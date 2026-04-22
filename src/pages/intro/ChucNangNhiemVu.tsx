import IntroLayout from "../../components/layout/IntroLayout";
import IntroHero from "../../components/blocks/intro/IntroHero";
import KeyPillars from "../../components/blocks/intro/KeyPillars";
import Section from "../../components/ui/Section";
import { Stethoscope, Activity, ShieldPlus, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChucNangNhiemVu() {
  const breadcrumbs = [
    { label: "Giới thiệu", href: "#" },
    { label: "Chức năng nhiệm vụ" }
  ];

  const pillars = [
    {
      title: "Khám chữa bệnh đa khoa",
      desc: "Cung cấp dịch vụ khám, chữa bệnh ngoại trú, nội trú và phục hồi chức năng chuyên nghiệp.",
      icon: Stethoscope
    },
    {
      title: "Cấp cứu – Hồi sức",
      desc: "Tiếp nhận cấp cứu 24/7, xử lý kịp thời các tình huống y tế khẩn cấp, bảo vệ tính mạng người bệnh.",
      icon: Activity
    },
    {
      title: "Dự phòng & Kiểm soát bệnh",
      desc: "Triển khai các chương trình y tế quốc gia, tiêm chủng mở rộng và phòng chống dịch bệnh.",
      icon: ShieldPlus
    },
    {
      title: "Chăm sóc sức khỏe cộng đồng",
      desc: "Tư vấn sức khỏe, truyền thông giáo dục và chăm sóc sức khỏe ban đầu cho nhân dân.",
      icon: Heart
    }
  ];

  const tasksLeft = [
    "Tiếp nhận, khám và điều trị bệnh nhân nội trú, ngoại trú.",
    "Thực hiện sơ cấp cứu và chuyển tuyến kịp thời.",
    "Quản lý thai nghén, đỡ đẻ thường và chăm sóc sức khỏe sinh sản.",
    "Thực hiện các kỹ thuật, thủ thuật y tế theo phân tuyến.",
    "Khám sức khỏe, giám định y khoa theo quy định."
  ];

  const tasksRight = [
    "Triển khai các hoạt động y tế dự phòng, phòng chống dịch bệnh.",
    "Tuyên truyền, giáo dục sức khỏe cho cộng đồng.",
    "Đào tạo, bồi dưỡng chuyên môn cho cán bộ y tế cơ sở.",
    "Nghiên cứu khoa học và áp dụng kỹ thuật mới.",
    "Quản lý kinh tế y tế và thực hiện các nhiệm vụ khác được giao."
  ];

  return (
    <IntroLayout currentPath="/gioi-thieu/chuc-nang-nhiem-vu">
       <IntroHero 
         title="Chức năng, Nhiệm vụ" 
         subtitle="Định hướng hoạt động và trách nhiệm phục vụ người dân của TRUNG TÂM Y TẾ KHU VỰC LIÊN CHIỂU."
         breadcrumbs={breadcrumbs}
         chips={["Phục vụ cộng đồng", "Chất lượng", "Trách nhiệm"]}
       />

       <div className="space-y-16">
          {/* Section 1: Pillars */}
          <Section title="Chức năng chính" description="Những trụ cột cốt lõi trong hoạt động của Trung tâm.">
             <KeyPillars items={pillars} />
          </Section>

          {/* Section 2: Tasks List */}
          <Section title="Nhiệm vụ trọng tâm" className="bg-slate-50 p-8 rounded-3xl">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <ul className="space-y-4">
                  {tasksLeft.map((task, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E73BE] mt-2.5 shrink-0"></span>
                      <span className="text-slate-700 leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {tasksRight.map((task, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E73BE] mt-2.5 shrink-0"></span>
                      <span className="text-slate-700 leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </Section>

          {/* Section 3: Commitment */}
          <Section title="Cam kết chất lượng">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                   <h4 className="font-bold text-lg text-slate-900 mb-2">Người bệnh là trung tâm</h4>
                   <p className="text-sm text-slate-600">Luôn lắng nghe và tôn trọng quyền lợi của người bệnh trong mọi hoạt động.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                   <h4 className="font-bold text-lg text-slate-900 mb-2">Minh bạch - Đúng quy trình</h4>
                   <p className="text-sm text-slate-600">Tuân thủ nghiêm ngặt quy chế chuyên môn và công khai chi phí dịch vụ.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center">
                   <h4 className="font-bold text-lg text-slate-900 mb-2">Cải tiến liên tục</h4>
                   <p className="text-sm text-slate-600">Không ngừng nâng cao chất lượng dịch vụ và thái độ phục vụ.</p>
                </div>
             </div>

             <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/hoat-dong/cai-cach-hanh-chinh" className="px-6 py-3 bg-[#1E73BE] text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                  Công tác quản lý chất lượng
                </Link>
                <Link to="/hoat-dong/khao-sat-hai-long-nguoi-benh" className="px-6 py-3 bg-white text-[#1E73BE] border border-blue-200 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                  Khảo sát hài lòng
                </Link>
             </div>
          </Section>

           {/* Footer CTA */}
           <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Cần tư vấn hoặc hỗ trợ y tế?</h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                   Đội ngũ y bác sĩ của chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ ngay hôm nay.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <a href="tel:0905453677" className="px-6 py-3 bg-[#60A5FA] text-slate-900 font-bold rounded-xl hover:bg-white transition-colors">
                     Gọi Hotline: 0905 453 677
                   </a>
                   <Link to="/dang-ky-kham" className="px-6 py-3 bg-white/10 backdrop-blur text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-colors">
                     Đăng ký khám bệnh
                   </Link>
                </div>
              </div>
           </div>
       </div>
    </IntroLayout>
  );
}

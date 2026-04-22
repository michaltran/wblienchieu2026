import PageShell from "../../components/layout/PageShell";
import { Info, Layout, ShieldCheck, Mail } from "lucide-react";

export default function AboutWebsite() {
  return (
    <PageShell
      title="Giới thiệu website"
      subtitle="Thông tin về thiết kế, cấu trúc và định hướng phát triển của Cổng thông tin điện tử Trung tâm Y tế."
      breadcrumbs={[
        { label: "Giới thiệu website" }
      ]}
      className="max-w-4xl"
    >
      <div className="space-y-12">
        {/* Section 1: Goals */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
           <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                 <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                 <h2 className="text-xl font-bold text-slate-900 mb-3">Mục tiêu xây dựng</h2>
                 <p className="text-slate-600 leading-relaxed">
                    Website được xây dựng nhằm cung cấp thông tin y tế chính thống, minh bạch và kịp thời cho người dân. 
                    Đây cũng là kênh kết nối trực tuyến giúp người bệnh dễ dàng tiếp cận các dịch vụ y tế như đặt lịch khám, 
                    tra cứu kết quả xét nghiệm và tư vấn sức khỏe từ xa.
                 </p>
              </div>
           </div>
        </section>

        {/* Section 2: Structure */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
               <div className="flex items-center gap-3 mb-4">
                  <Layout className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-slate-800">Cấu trúc chuyên mục</h3>
               </div>
               <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2 before:content-['•'] before:text-blue-300">Thông tin giới thiệu & tổ chức</li>
                  <li className="flex items-center gap-2 before:content-['•'] before:text-blue-300">Dịch vụ y tế & Bảng giá</li>
                  <li className="flex items-center gap-2 before:content-['•'] before:text-blue-300">Tin tức hoạt động & Sự kiện</li>
                  <li className="flex items-center gap-2 before:content-['•'] before:text-blue-300">Kiến thức y học thường thức</li>
                  <li className="flex items-center gap-2 before:content-['•'] before:text-blue-300">Cổng thông tin người bệnh</li>
               </ul>
           </div>

           <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
               <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-slate-800">Tiêu chuẩn kỹ thuật</h3>
               </div>
               <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2 before:content-['•'] before:text-blue-300">Giao diện Responsive (Mobile-first)</li>
                  <li className="flex items-center gap-2 before:content-['•'] before:text-blue-300">Tốc độ tải trang tối ưu</li>
                  <li className="flex items-center gap-2 before:content-['•'] before:text-blue-300">Bảo mật dữ liệu người dùng (SSL)</li>
                  <li className="flex items-center gap-2 before:content-['•'] before:text-blue-300">Tuân thủ chuẩn Accessibility (WCAG)</li>
               </ul>
           </div>
        </section>

        {/* Section 3: Tech Contact */}
        <section className="bg-blue-50 rounded-2xl border border-blue-100 p-8 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Liên hệ quản trị website</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
               Nếu bạn phát hiện lỗi kỹ thuật hoặc có góp ý để cải thiện website, vui lòng liên hệ với đội ngũ quản trị.
            </p>
            <a href="mailto:admin@ttytlienchieu.vn" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-blue-100 transition shadow-sm">
               <Mail className="w-4 h-4" />
               Gửi góp ý
            </a>
        </section>
      </div>
    </PageShell>
  );
}

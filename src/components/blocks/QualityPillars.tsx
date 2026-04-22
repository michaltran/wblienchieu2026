import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function QualityPillars() {
  const pillars = [
    "Kiểm soát nhiễm khuẩn",
    "Quản lý rủi ro & sự cố",
    "An toàn thuốc",
    "Trải nghiệm người bệnh",
    "Đánh giá tuân thủ quy trình",
    "Đào tạo chất lượng"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trọng tâm chất lượng</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-slate-600">
            Các lĩnh vực then chốt được Trung tâm tập trung nguồn lực để giám sát và cải thiện mỗi ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 border border-slate-100 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                 <CheckCircle2 className="w-8 h-8 text-[#1E73BE] opacity-80" />
                 <span className="text-4xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{item}</h3>
              <p className="text-slate-500 text-sm mb-6">
                Triển khai đồng bộ các giải pháp nhằm đảm bảo tuân thủ các tiêu chí định hướng của Bộ Y tế.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-[#1E73BE] hover:underline">
                Tìm hiểu thêm <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

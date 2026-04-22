import { CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    "Đội ngũ bác sĩ giàu kinh nghiệm, tận tâm.",
    "Trang thiết bị y tế hiện đại, tiên tiến.",
    "Quy trình khám chữa bệnh nhanh chóng, chuyên nghiệp.",
    "Chi phí hợp lý, minh bạch, áp dụng BHYT.",
    "Môi trường khám chữa bệnh sạch sẽ, an toàn.",
    "Hỗ trợ tư vấn trực tuyến 24/7."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative z-10">
              {/* Image Placeholder */}
              <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                [Ảnh Bác sĩ/Cơ sở vật chất]
              </div>
            </div>
            {/* Decor dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full -z-0" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Tại sao chọn <br className="hidden md:block"/> 
              <span className="text-primary">Trung tâm Y tế Liên Chiểu?</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Chúng tôi tự hào là đơn vị y tế uy tín, luôn đặt sức khỏe và sự hài lòng của người bệnh lên hàng đầu. Với phương châm "Y tế gần dân, Ân cần chăm sóc", chúng tôi không ngừng nỗ lực nâng cao chất lượng dịch vụ.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

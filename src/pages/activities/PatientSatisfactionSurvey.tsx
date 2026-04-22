import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { departments } from "../../data/departments";
import { submitSurvey, type SurveyPayload } from "../../lib/api/surveyApi";
import { cn } from "../../lib/cn";

export default function PatientSatisfactionSurvey() {
  const [formData, setFormData] = useState<Partial<SurveyPayload>>({
    visitDate: new Date().toISOString().split('T')[0],
    visitType: "BHYT",
    department: "",
    waitingTime: "15-30p",
    booked: false,
    ratings: { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0 },
    consent: false,
    company: "" // honeypot
  });

  const [formOpenTime] = useState(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean; id?: string; msg?: string} | null>(null);

  const handleChange = (field: keyof SurveyPayload, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRatingChange = (q: string, val: number) => {
    setFormData(prev => ({
      ...prev,
      ratings: { ...prev.ratings!, [q]: val }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Time trap (prevent bots submitting too fast)
    if (Date.now() - formOpenTime < 2000) {
        return; 
    }

    if (!formData.consent) {
        alert("Vui lòng đồng ý với điều khoản sử dụng dữ liệu.");
        return;
    }

    // Check required ratings
    const ratings = formData.ratings!;
    if (Object.values(ratings).some(v => v === 0)) {
        alert("Vui lòng đánh giá đầy đủ các mục từ 1 đến 5 sao.");
        return;
    }

    setIsSubmitting(true);
    
    const payload = formData as SurveyPayload;
    const res = await submitSurvey(payload);

    setIsSubmitting(false);
    if (res.ok) {
        setSubmitResult({ success: true, id: res.submissionId });
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        setSubmitResult({ success: false, msg: res.message });
    }
  };

  if (submitResult?.success) {
      return (
          <div className="container py-20 min-h-[60vh] flex items-center justify-center">
              <div className="max-w-xl w-full bg-white p-8 rounded-3xl shadow-xl border border-green-100 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Cảm ơn Quý khách!</h2>
                  <p className="text-slate-600 mb-6">
                      Ý kiến đóng góp của Quý khách đã được ghi nhận. <br/>
                      Mã khảo sát: <span className="font-mono font-bold text-[#1E73BE]">{submitResult.id}</span>
                  </p>
                  {formData.email && (
                      <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-8">
                          Một email xác nhận đã được gửi đến <strong>{formData.email}</strong>
                      </p>
                  )}
                  <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-[#1E73BE] text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                      Trở về Trang chủ
                  </Link>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero */}
      <div className="bg-[#1E73BE] text-white py-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
         <div className="container relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 text-blue-200 text-sm font-medium mb-4">
               <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
               <ChevronRight className="w-3 h-3" />
               <span>Hoạt động</span>
               <ChevronRight className="w-3 h-3" />
               <span className="text-white">Khảo sát hài lòng</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Khảo sát hài lòng người bệnh</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
                Ý kiến của Quý khách là thước đo quan trọng giúp chúng tôi cải tiến chất lượng phục vụ mỗi ngày.
            </p>
         </div>
      </div>

      <div className="container -mt-8 relative z-20">
         <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
             
             {/* Section 1: Personal Info */}
             <div className="p-8 border-b border-slate-100">
                 <h3 className="text-lg font-bold text-[#1E73BE] mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-sm">01</span>
                    Thông tin chung
                 </h3>
                 <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-700">Họ và tên</label>
                         <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] transition-all"
                            placeholder="Nguyễn Văn A (Không bắt buộc)"
                            value={formData.name || ""}
                            onChange={e => handleChange("name", e.target.value)}
                         />
                     </div>
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-700">Số điện thoại</label>
                         <input 
                            type="tel" 
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] transition-all"
                            placeholder="0905..."
                            value={formData.phone || ""}
                            onChange={e => handleChange("phone", e.target.value)}
                         />
                     </div>
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-700">Email (Để nhận xác nhận)</label>
                         <input 
                            type="email" 
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] transition-all"
                            placeholder="email@example.com"
                            value={formData.email || ""}
                            onChange={e => handleChange("email", e.target.value)}
                         />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                             <label className="text-sm font-medium text-slate-700">Độ tuổi</label>
                             <select 
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                                value={formData.ageGroup || ""}
                                onChange={e => handleChange("ageGroup", e.target.value)}
                             >
                                 <option value="">Chọn...</option>
                                 <option value="duoi-18">&lt; 18 tuổi</option>
                                 <option value="18-30">18 - 30 tuổi</option>
                                 <option value="31-45">31 - 45 tuổi</option>
                                 <option value="46-60">46 - 60 tuổi</option>
                                 <option value="tren-60">&gt; 60 tuổi</option>
                             </select>
                         </div>
                         <div className="space-y-2">
                             <label className="text-sm font-medium text-slate-700">Giới tính</label>
                             <select 
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                                value={formData.gender || ""}
                                onChange={e => handleChange("gender", e.target.value)}
                             >
                                 <option value="">Chọn...</option>
                                 <option value="nam">Nam</option>
                                 <option value="nu">Nữ</option>
                                 <option value="khac">Khác</option>
                             </select>
                         </div>
                     </div>
                 </div>
             </div>

             {/* Section 2: Visit Info */}
             <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                 <h3 className="text-lg font-bold text-[#1E73BE] mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-sm">02</span>
                    Thông tin lượt khám
                 </h3>
                 <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-700">Ngày khám <span className="text-red-500">*</span></label>
                         <input 
                            type="date" 
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                            value={formData.visitDate}
                            onChange={e => handleChange("visitDate", e.target.value)}
                         />
                     </div>
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-700">Hình thức khám <span className="text-red-500">*</span></label>
                         <select 
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                            value={formData.visitType}
                            onChange={e => handleChange("visitType", e.target.value)}
                         >
                             <option value="BHYT">Khám BHYT</option>
                             <option value="DichVu">Khám Dịch vụ</option>
                             <option value="CapCuu">Cấp cứu</option>
                             <option value="Khac">Khác</option>
                         </select>
                     </div>
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-700">Khoa / Phòng <span className="text-red-500">*</span></label>
                         <select 
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                            value={formData.department}
                            onChange={e => handleChange("department", e.target.value)}
                         >
                             <option value="">Chọn khoa phòng...</option>
                             {departments.map(d => (
                                 <option key={d.slug} value={d.name}>{d.name}</option>
                             ))}
                             <option value="Khac">Khác</option>
                         </select>
                     </div>
                     <div className="space-y-2">
                         <label className="text-sm font-medium text-slate-700">Thời gian chờ</label>
                         <select 
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                            value={formData.waitingTime}
                            onChange={e => handleChange("waitingTime", e.target.value)}
                         >
                             <option value="duoi-15p">&lt; 15 phút</option>
                             <option value="15-30p">15 - 30 phút</option>
                             <option value="30-60p">30 - 60 phút</option>
                             <option value="tren-60p">&gt; 60 phút</option>
                         </select>
                     </div>
                 </div>
                 <div className="mt-4 flex items-center gap-2">
                     <input 
                        type="checkbox" 
                        id="booked"
                        className="w-4 h-4 rounded text-[#1E73BE] focus:ring-[#1E73BE]"
                        checked={formData.booked}
                        onChange={e => handleChange("booked", e.target.checked)}
                     />
                     <label htmlFor="booked" className="text-sm text-slate-700 select-none">Tôi đã đặt lịch hẹn trước</label>
                 </div>
             </div>

             {/* Section 3: Ratings */}
             <div className="p-8 border-b border-slate-100">
                 <h3 className="text-lg font-bold text-[#1E73BE] mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-sm">03</span>
                    Đánh giá mức độ hài lòng
                 </h3>
                 <p className="text-sm text-slate-500 mb-6 italic">* Chọn mức điểm từ 1 (Rất không hài lòng) đến 5 (Rất hài lòng)</p>

                 <div className="space-y-6">
                     {[
                         { k: "q1", l: "Tiếp đón & Hướng dẫn" },
                         { k: "q2", l: "Thái độ phục vụ của nhân viên" },
                         { k: "q3", l: "Bác sĩ tư vấn & giải thích bệnh" },
                         { k: "q4", l: "Thời gian chờ khám & xét nghiệm" },
                         { k: "q5", l: "Cơ sở vật chất & vệ sinh" },
                         { k: "q6", l: "Thủ tục hành chính (đăng ký, thanh toán)" },
                         { k: "q7", l: "Cấp phát thuốc (Nhà thuốc)" },
                         { k: "q8", l: "MỨC ĐỘ HÀI LÒNG CHUNG" },
                     ].map((item) => (
                         <div key={item.k} className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2 border-b border-slate-50 last:border-0">
                             <span className={cn("text-slate-800 font-medium", item.k === 'q8' && "text-[#1E73BE] font-bold uppercase")}>
                                 {item.l} <span className="text-red-500">*</span>
                             </span>
                             <div className="flex gap-2">
                                 {[1, 2, 3, 4, 5].map(star => (
                                     <button
                                        key={star}
                                        type="button"
                                        onClick={() => handleRatingChange(item.k, star)}
                                        className={cn(
                                            "w-10 h-10 rounded-lg flex items-center justify-center transition-all",
                                            formData.ratings![item.k as keyof typeof formData.ratings] >= star 
                                                ? "bg-yellow-400 text-white shadow-md shadow-yellow-200 scale-105" 
                                                : "bg-slate-100 text-slate-300 hover:bg-slate-200"
                                        )}
                                        title={`${star} sao`}
                                     >
                                         <Star className="w-5 h-5" fill="currentColor" />
                                     </button>
                                 ))}
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

             {/* Section 4: Feedback */}
             <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                 <h3 className="text-lg font-bold text-[#1E73BE] mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-sm">04</span>
                    Ý kiến đóng góp
                 </h3>
                 <div className="space-y-4">
                     <div>
                         <label className="text-sm font-medium text-slate-700 block mb-2">Điều gì làm Quý khách hài lòng nhất?</label>
                         <textarea 
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] h-20"
                            placeholder="Nhập nội dung..."
                            value={formData.best || ""}
                            onChange={e => handleChange("best", e.target.value)}
                         ></textarea>
                     </div>
                     <div>
                         <label className="text-sm font-medium text-slate-700 block mb-2">Điều gì chúng tôi cần cải thiện?</label>
                         <textarea 
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] h-20"
                            placeholder="Nhập nội dung..."
                            value={formData.improve || ""}
                            onChange={e => handleChange("improve", e.target.value)}
                         ></textarea>
                     </div>
                 </div>
             </div>

             {/* Footer */}
             <div className="p-8 bg-white">
                 <div className="mb-8">
                     <label className="flex items-start gap-3 p-4 rounded-xl border border-blue-100 bg-blue-50 cursor-pointer hover:bg-blue-100/50 transition-colors">
                         <input 
                            type="checkbox" 
                            required
                            className="mt-1 w-5 h-5 rounded text-[#1E73BE] focus:ring-[#1E73BE]"
                            checked={formData.consent}
                            onChange={e => handleChange("consent", e.target.checked)}
                         />
                         <span className="text-sm text-slate-700">
                             Tôi xác nhận các thông tin trên là chính xác và đồng ý để Trung tâm Y tế sử dụng dữ liệu khảo sát này cho mục đích cải tiến chất lượng dịch vụ.
                         </span>
                     </label>
                 </div>

                 {/* Hidden honeypot */}
                 <input type="text" name="company" className="hidden" value={formData.company} onChange={e => handleChange("company", e.target.value)} tabIndex={-1} autoComplete="off" />

                 <div className="flex flex-col gap-4">
                    {submitResult?.success === false && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 text-sm border border-red-100">
                            <AlertCircle className="w-4 h-4" />
                            {submitResult.msg || "Có lỗi xảy ra, vui lòng thử lại sau."}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#1E73BE] hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Đang gửi đánh giá...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Gửi khảo sát
                            </>
                        )}
                    </button>
                 </div>
             </div>
         </form>

         <p className="text-center text-slate-400 text-xs mt-8 pb-4">
             Bản quyền © 2024 Trung tâm Y tế Khu vực Liên Chiểu.
         </p>
      </div>
    </div>
  );
}

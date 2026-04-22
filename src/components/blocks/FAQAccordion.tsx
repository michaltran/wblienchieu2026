import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { cn } from "../../lib/cn";
import { Link } from "react-router-dom";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Tôi muốn đặt lịch khám thì làm thế nào?",
      answer: "Bạn có thể đặt lịch khám trực tuyến qua website tại mục 'Đăng ký khám' hoặc gọi điện thoại đến số 0905453677 để được hỗ trợ.",
      link: "/dang-ky-kham",
      linkText: "Đặt lịch ngay"
    },
    {
      question: "Tôi cần chuẩn bị gì khi đi khám?",
      answer: "Vui lòng mang theo CMND/CCCD, thẻ Bảo hiểm y tế (nếu có) và các kết quả khám cũ. Nên nhịn ăn sáng nếu cần xét nghiệm máu.",
    },
    {
      question: "Có hỗ trợ tiếp nhận phản ánh góp ý không?",
      answer: "Có. Chúng tôi luôn lắng nghe ý kiến của bạn. Vui lòng gửi phản ánh qua form liên hệ trên trang này hoặc email trực tiếp.",
    },
    {
      question: "Tôi có thể nhận kết quả bằng cách nào?",
      answer: "Kết quả có thể được trả trực tiếp tại quầy hoặc tra cứu trực tuyến (nếu đăng ký). Một số kết quả xét nghiệm sẽ được thông báo qua tin nhắn.",
    },
    {
      question: "Khi nào Trung tâm phản hồi yêu cầu?",
      answer: "Với các yêu cầu gửi qua website, chúng tôi thường phản hồi trong vòng 24 giờ làm việc hành chính.",
    },
    {
      question: "Quy định bảo mật thông tin ra sao?",
      answer: "Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân và hồ sơ bệnh án của người bệnh theo quy định của pháp luật.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
           <span className="inline-block p-3 rounded-2xl bg-primary/5 text-primary mb-4">
             <MessageCircle className="w-8 h-8" />
           </span>
           <h2 className="text-3xl font-bold text-slate-900">Câu hỏi thường gặp</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={cn(
                  "border rounded-2xl transition-all duration-300 overflow-hidden",
                  isOpen ? "border-primary/30 bg-primary/5 shadow-sm" : "border-slate-100 bg-white hover:border-slate-200"
                )}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                
                <div 
                  className={cn(
                    "px-5 text-slate-600 leading-relaxed transition-all duration-300 grid",
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    {faq.answer}
                    {faq.link && (
                      <div className="mt-2">
                        <Link to={faq.link} className="text-primary font-semibold hover:underline text-sm">
                          {faq.linkText} &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

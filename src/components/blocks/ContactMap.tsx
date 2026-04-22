import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Liên hệ với chúng tôi</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Địa chỉ</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    525 Tôn Đức Thắng, phường Hòa Khánh, <br/>
                    thành phố Đà Nẵng, Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Điện thoại</h3>
                  <p className="text-slate-600 text-sm">
                    <a href="tel:0905453677" className="hover:text-primary transition-colors font-medium">0905453677</a>
                  </p>
                  <p className="text-slate-500 text-xs mt-1">Hỗ trợ tư vấn & đặt lịch</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600 text-sm break-all">
                    trungtamytelienchieu@danang.gov.vn
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Giờ làm việc</h3>
                  <p className="text-slate-600 text-sm">
                    <div className="space-y-1 mt-1">
                       <p><span className="font-medium text-slate-800">T2 - T6:</span> 7h00-11h30 & 13h30-17h00</p>
                       <p><span className="font-medium text-slate-800">Sáng T7:</span> 7h00-11h30</p>
                       <p className="text-red-600 font-bold pt-1">Cấp cứu: 24/7 - Hotline 115</p>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden bg-slate-200 relative min-h-[400px]">
            {/* Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6!2d108.15!3d16.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDA0JzEyLjAiTiAxMDjCsDA5JzAwLjAiRQ!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

import Breadcrumb from "../components/ui/Breadcrumb";
import ContactHero from "../components/blocks/ContactHero";
import ContactForm from "../components/blocks/ContactForm";
import FAQAccordion from "../components/blocks/FAQAccordion";
import EmergencyStrip from "../components/blocks/EmergencyStrip";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
       <ContactHero />

       <div className="container py-8">
          <Breadcrumb items={[{ label: "Liên hệ" }]} />
       </div>

       {/* Contact Grid Section */}
       <section className="py-12 md:py-20">
         <div className="container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
             {/* Left: Form */}
             <div className="order-2 lg:order-1">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full">
                   <ContactForm />
                </div>
             </div>

             {/* Right: Info & Map */}
             <div className="order-1 lg:order-2 space-y-8">
                {/* Info Cards */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group">
                     <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">Địa chỉ</h4>
                        <p className="text-slate-600 leading-relaxed">
                          525 Tôn Đức Thắng, phường Hòa Khánh,
                          thành phố Đà Nẵng
                        </p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all group">
                     <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">Điện thoại</h4>
                        <p className="text-slate-600 mb-1">
                           <a href="tel:0905453677" className="font-bold hover:text-primary">0905453677</a>
                        </p>
                        <p className="text-xs text-slate-400">Hỗ trợ tư vấn & đặt lịch</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all group">
                     <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">Email</h4>
                        <p className="text-slate-600 break-all">
                           trungtamytelienchieu@danang.gov.vn
                        </p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50 transition-all group">
                     <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Clock className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">Giờ làm việc</h4>
                        <div className="text-slate-600 text-sm space-y-2">
                          <div>
                            <span className="font-semibold block text-slate-900">Khám BHYT (T2 - T6):</span>
                            Sáng: 7h00 - 11h30 | Chiều: 13h30 - 17h00
                          </div>
                          <div>
                            <span className="font-semibold block text-slate-900">Sáng Thứ 7:</span>
                             7h00 - 11h30
                          </div>
                          <div className="pt-1">
                             <span className="font-bold text-red-600 block">Cấp cứu 24/7 - Hotline: 115</span>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Map */}
                <div className="h-[300px] w-full bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative group">
                   <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6!2d108.15!3d16.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDA0JzEyLjAiTiAxMDjCsDA5JzAwLjAiRQ!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
             </div>
           </div>
         </div>
       </section>

       <FAQAccordion />
       <EmergencyStrip />
    </div>
  );
}

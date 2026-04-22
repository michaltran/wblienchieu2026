import { Phone, Mail, MapPin, Calendar, ShieldCheck, HeartHandshake, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 pt-12 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#1E73BE 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Liên hệ <span className="text-primary">Hỗ trợ</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Trung tâm Y tế Khu vực Liên Chiểu luôn sẵn sàng lắng nghe và hỗ trợ bạn. <br className="hidden md:block"/>
              Kết nối với chúng tôi qua các kênh dưới đây.
            </p>
          </div>
          
          {/* Trust Strip */}
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-700">
             <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200">
                <Clock className="w-4 h-4 text-primary" />
                <span>Tiếp nhận 24/7</span>
             </div>
             <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200">
                <HeartHandshake className="w-4 h-4 text-primary" />
                <span>Tận tâm phục vụ</span>
             </div>
             <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Bảo mật thông tin</span>
             </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="tel:0905453677" className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">Gọi tổng đài</h3>
            <p className="text-slate-500 text-sm">0905453677</p>
          </a>

          <a href="mailto:trungtamytelienchieu@danang.gov.vn" className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">Gửi Email</h3>
            <p className="text-slate-500 text-sm truncate">trungtamytelienchieu@...</p>
          </a>

          <a href="https://goo.gl/maps/XYZ" target="_blank" rel="noreferrer" className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">Chỉ đường</h3>
            <p className="text-slate-500 text-sm">525 Tôn Đức Thắng</p>
          </a>

          <Link to="/dang-ky-kham" className="group bg-primary p-6 rounded-2xl shadow-lg shadow-primary/25 border border-primary hover:shadow-xl hover:bg-primary/90 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Đăng ký khám</h3>
            <p className="text-blue-100 text-sm">Đặt lịch hẹn trực tuyến</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

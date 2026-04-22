import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Search, Calendar, FileText, Phone, Activity } from "lucide-react";
import logo from "../assets/logo.png";

export default function NotFound() {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Đăng ký khám", href: "/dang-ky-kham", icon: Calendar },
    { label: "Tin tức & Sự kiện", href: "/hoat-dong/tin-tuc-su-kien", icon: FileText },
    { label: "Y học thường thức", href: "/hoat-dong/y-hoc-thuong-thuc", icon: Activity },
    { label: "Chuyên khoa", href: "/chuyen-khoa", icon: Activity },
    { label: "Tra cứu thuốc", href: "/thuoc", icon: Search }, // Assuming '/thuoc' exists based on request
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1E73BE]/5 via-white to-white p-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
          
          {/* Decorative Background Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo & 404 */}
            <div className="mb-6 relative">
                 <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-4 border border-slate-100 relative z-10">
                    <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                 </div>
                 <div className="absolute -top-4 -right-12 bg-red-50 text-red-500 font-black text-6xl rotate-12 opacity-20 select-none">
                    404
                 </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              Không tìm thấy trang
            </h1>
            <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
              Đường dẫn bạn truy cập có thể đã thay đổi hoặc không còn tồn tại trên hệ thống.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <Link 
                to="/" 
                className="px-6 py-3 bg-[#1E73BE] text-white font-bold rounded-xl hover:bg-[#155a96] transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" /> Về Trang chủ
              </Link>
              <button 
                onClick={() => navigate(-1)}
                className="px-6 py-3 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" /> Quay lại
              </button>
            </div>

            <div className="w-full h-px bg-slate-100 mb-8" />

            {/* Quick Links */}
            <div className="w-full">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Các liên kết phổ biến</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {quickLinks.map((link, idx) => (
                        <Link 
                            key={idx} 
                            to={link.href}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#1E73BE] rounded-full text-sm font-medium transition border border-transparent hover:border-blue-100"
                        >
                            <link.icon className="w-4 h-4" />
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 flex flex-col items-center text-slate-500 text-sm">
             <div className="flex items-center gap-2 mb-1">
                 <Phone className="w-4 h-4" />
                 <span>Hỗ trợ kỹ thuật: </span>
                 <a href="tel:0905453677" className="font-bold text-[#1E73BE] hover:underline">0905453677</a>
             </div>
             <p className="opacity-70">© 2026 Design by Đạt Đạt</p>
        </div>

      </div>
    </div>
  );
}

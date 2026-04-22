import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Brand */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-4 uppercase">TRUNG TÂM Y TẾ KV LIÊN CHIỂU</h3>
          <p className="text-slate-600 mb-4 text-sm leading-relaxed">
            Y tế gần dân, Ân cần chăm sóc.
            Chúng tôi cam kết mang lại dịch vụ y tế chất lượng cao cho cộng đồng.
          </p>
          <div className="flex items-start gap-3 text-slate-600 text-sm">
            <MapPin className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
            <span>525 Tôn Đức Thắng, Hòa Khánh, Đà Nẵng</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4">Liên kết nhanh</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><Link to="/" className="hover:text-primary">Trang chủ</Link></li>
            <li><Link to="/gioi-thieu" className="hover:text-primary">Giới thiệu</Link></li>
            <li><Link to="/chuyen-khoa" className="hover:text-primary">Chuyên khoa</Link></li>
            <li><Link to="/bai-viet" className="hover:text-primary">Tin tức & Sự kiện</Link></li>
            <li><Link to="/dang-ky-kham" className="hover:text-primary font-medium text-primary">Đăng ký khám</Link></li>
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4">Liên hệ</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:0905453677" className="hover:text-primary">0905453677</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:trungtamytelienchieu@danang.gov.vn" className="hover:text-primary break-all">trungtamytelienchieu@danang.gov.vn</a>
            </li>
            <li className="pt-2">
              <span className="font-medium text-slate-800 block mb-1">Giờ làm việc:</span>
              <span>T2-T6: 7h00-11h30 | 13h30-17h00</span><br/>
              <span>Sáng T7: 7h00-11h30</span><br/>
              <span className="font-bold text-red-600">Cấp cứu 24/7 - Hotline: 115</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Connect */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4">Kết nối</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/benhviendakhoalienchieu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@ttytquanlienchieu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors" aria-label="Youtube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://zalo.me/121478389306891900" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-500 font-bold text-xs hover:bg-blue-500 hover:text-white transition-colors" aria-label="Zalo">
              Zalo
            </a>
          </div>
        </div>
      </div>

      <div className="container border-t border-slate-200 pt-8 pb-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-500 text-center md:text-left">
            © 2026 Design by Đạt Đạt. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <Link className="hover:text-[#1E73BE] hover:underline transition-colors" to="/cam-ket-bao-mat">Cam kết bảo mật</Link>
            <span className="text-slate-300">|</span>
            <Link className="hover:text-[#1E73BE] hover:underline transition-colors" to="/gioi-thieu-website">Giới thiệu website</Link>
            <span className="text-slate-300">|</span>
            <Link className="hover:text-[#1E73BE] hover:underline transition-colors" to="/nguoi-thuc-hien">Người thực hiện</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

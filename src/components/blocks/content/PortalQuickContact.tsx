import { Phone, Mail, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import InfoCard from "../../ui/InfoCard";

export default function PortalQuickContact() {
  return (
    <InfoCard className="space-y-6">
      <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
        <span className="w-1 h-5 bg-[#1E73BE] rounded-full"></span>
        Liên hệ nhanh
      </h3>

      <div className="space-y-4">
        <a href="tel:0905453677" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E73BE] flex items-center justify-center shrink-0 group-hover:bg-[#1E73BE] group-hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-0.5">Hotline</p>
            <p className="text-slate-900 font-bold group-hover:text-[#1E73BE] transition-colors">0905 453 677</p>
          </div>
        </a>

        <a href="mailto:trungtamytelienchieu@danang.gov.vn" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E73BE] flex items-center justify-center shrink-0 group-hover:bg-[#1E73BE] group-hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-slate-500 uppercase mb-0.5">Email</p>
            <p className="text-slate-900 font-bold truncate group-hover:text-[#1E73BE] transition-colors" title="trungtamytelienchieu@danang.gov.vn">trungtamytelienchieu...</p>
          </div>
        </a>

        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E73BE] flex items-center justify-center shrink-0 group-hover:bg-[#1E73BE] group-hover:text-white transition-colors">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase mb-0.5">Địa chỉ</p>
            <p className="text-slate-900 text-sm leading-snug group-hover:text-[#1E73BE] transition-colors">
              525 Tôn Đức Thắng, P. Hòa Khánh Nam, Q. Liên Chiểu, Đà Nẵng
            </p>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2">
        <Link to="/dang-ky-kham" className="flex items-center justify-center gap-2 py-2.5 bg-[#1E73BE] text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-100">
          <Calendar className="w-4 h-4" />
          Đăng ký
        </Link>
        <Link to="/lien-he" className="flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-200 transition-colors">
          Liên hệ
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </InfoCard>
  );
}

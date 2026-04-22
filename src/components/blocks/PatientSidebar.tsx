import { Phone, Calendar, Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function PatientSidebar() {
  return (
    <div className="space-y-6 sticky top-24">
      {/* 1. Hotline Block */}
      <div className="bg-[#1E73BE] rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
        <h3 className="text-sm font-bold uppercase tracking-wider opacity-80 mb-2">Tổng đài hỗ trợ</h3>
        <a href="tel:0905453677" className="flex items-center gap-3 text-2xl font-black mb-2 hover:opacity-90 transition-opacity">
           <Phone className="w-6 h-6 animate-pulse" />
           0905 453 677
        </a>
        <p className="text-xs text-blue-100 font-medium">Tư vấn & Đặt lịch khám (7:00 - 17:00)</p>
      </div>

      {/* 2. Quick Links */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-100">
             <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#1E73BE]"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Liên kết nhanh
             </h3>
        </div>
        <div className="divide-y divide-slate-100">
            <Link to="/dang-ky-kham" className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1E73BE] flex items-center justify-center group-hover:bg-[#1E73BE] group-hover:text-white transition-colors">
                    <Calendar className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-[#1E73BE]">Đăng ký khám bệnh</span>
            </Link>
             <Link to="/thuoc" className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Search className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-teal-600">Tra cứu thuốc</span>
            </Link>
             <Link to="/lien-he" className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-purple-600">Sơ đồ bệnh viện</span>
            </Link>
        </div>
      </div>


    </div>
  );
}

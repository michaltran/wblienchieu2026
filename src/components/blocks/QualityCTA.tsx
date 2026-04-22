import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function QualityCTA() {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Cần tư vấn hoặc góp ý?</h3>
            <p className="text-slate-400">Chúng tôi luôn sẵn sàng lắng nghe để phục vụ bạn tốt hơn.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
                href="tel:0905453677"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1E73BE] hover:bg-blue-600 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/30"
            >
                <Phone className="w-5 h-5 mr-2" />
                Gọi 0905453677
            </a>
            <Link 
                to="/dang-ky-kham"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-bold transition-all"
            >
                <Calendar className="w-5 h-5 mr-2" />
                Đăng ký khám
            </Link>
             <Link 
                to="/lien-he"
                className="inline-flex items-center justify-center px-6 py-3 text-slate-300 hover:text-white font-medium transition-all"
            >
                Liên hệ
                <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        </div>
    </div>
  );
}

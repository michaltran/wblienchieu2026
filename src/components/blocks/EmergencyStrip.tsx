import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export default function EmergencyStrip() {
  return (
    <div className="bg-slate-900 py-12 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Thông tin mang tính tham khảo
        </h3>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Nội dung trên website không thay thế cho việc chẩn đoán hoặc điều trị y khoa. 
          Trong trường hợp khẩn cấp, vui lòng đến ngay cơ sở y tế gần nhất hoặc gọi cấp cứu.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:0905453677">
             <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-0">
               <Phone className="w-5 h-5 mr-2" />
               Gọi 0905453677
             </Button>
          </a>
          <Link to="/dang-ky-kham">
             <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white hover:border-slate-600">
               Đăng ký khám trực tuyến
             </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ChevronRight, Phone, MessageSquare } from "lucide-react";
import { Button } from "../ui/Button";

export default function QualityHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-12 pb-16 md:py-24 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 -skew-x-12 translate-x-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Hoạt động TTYT
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
            Quản lý <span className="text-primary">Chất lượng</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 border-l-4 border-primary/30 pl-6">
            Chúng tôi xây dựng hệ thống quản lý chất lượng nhằm nâng cao an toàn người bệnh, 
            chuẩn hóa quy trình và cải tiến liên tục, hướng tới sự hài lòng cao nhất của người dân.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/dang-ky-kham">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25">
                Đăng ký khám
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/lien-he">
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-white hover:bg-slate-50 border-slate-200">
                <MessageSquare className="w-4 h-4 mr-2" />
                Liên hệ phản hồi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

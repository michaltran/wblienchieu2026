import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-bl-[100px] -z-10" />
      
      <div className="container pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
            Y tế gần dân, <br/>
            <span className="text-primary">Ân cần chăm sóc</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Trung tâm Y tế Khu vực Liên Chiểu cam kết cung cấp dịch vụ khám chữa bệnh chất lượng cao, tận tâm vì sức khỏe cộng đồng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/dang-ky-kham">
              <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25">
                <Calendar className="mr-2 w-5 h-5" />
                Đăng ký khám ngay
              </Button>
            </Link>
            <Link to="/chuyen-khoa">
               <Button variant="outline" size="lg" className="h-14 px-8 text-base rounded-full bg-white">
                Tìm hiểu dịch vụ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import Breadcrumb from "../ui/Breadcrumb";
import { Phone, Mail } from "lucide-react";
import { Button } from "../ui/Button";

interface SimpleContentPageProps {
  title: string;
  parentLabel?: string;
  parentHref?: string;
  children?: React.ReactNode;
}

export default function SimpleContentPage({ title, parentLabel, parentHref, children }: SimpleContentPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white border-b border-slate-100">
         <div className="container py-4">
             <Breadcrumb 
                items={[
                  { label: "Trang chủ", href: "/" },
                  ...(parentLabel ? [{ label: parentLabel, href: parentHref || "#" }] : []),
                  { label: title, href: "#" },
                ]} 
             />
         </div>
      </div>

      <div className="container py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 min-h-[400px]">
           <h1 className="text-3xl md:text-4xl font-bold text-[#1E73BE] mb-6">{title}</h1>
           <div className="w-20 h-1.5 bg-yellow-400 rounded-full mb-8"></div>
           
           {children ? children : (
             <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">Đang cập nhật nội dung</h3>
                <p className="text-slate-500 max-w-md">
                    Nội dung cho mục "{title}" đang được biên tập và sẽ sớm ra mắt.
                    Vui lòng quay lại sau!
                </p>
             </div>
           )}
        </div>

        {/* Generic CTA Strip */}
        <div className="mt-12 bg-gradient-to-r from-[#1E73BE] to-[#155FA0] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-900/10">
            <div>
                <h3 className="text-2xl font-bold mb-2">Cần hỗ trợ tư vấn?</h3>
                <p className="text-blue-100">Liên hệ ngay với chúng tôi để được giải đáp mọi thắc mắc.</p>
            </div>
            <div className="flex gap-4">
                <a href="tel:0905453677">
                    <Button variant="secondary" size="lg" className="rounded-full shadow-lg">
                        <Phone className="w-5 h-5 mr-2" />
                        0905453677
                    </Button>
                </a>
                <a href="/lien-he">
                    <Button variant="outline" size="lg" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                        <Mail className="w-5 h-5 mr-2" />
                        Gửi câu hỏi
                    </Button>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

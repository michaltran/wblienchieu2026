import Breadcrumb from "../components/ui/Breadcrumb";
import QualityHero from "../components/blocks/QualityHero";
import QualityHighlights from "../components/blocks/QualityHighlights";
import QualityPillars from "../components/blocks/QualityPillars";
import QualityDocuments from "../components/blocks/QualityDocuments";
import QualityPosts from "../components/blocks/QualityPosts";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function QualityManagement() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Breadcrumb Overlay */}
      <div className="bg-white border-b border-slate-100">
          <div className="container py-3">
             <Breadcrumb 
                items={[
                  { label: "Trang chủ", href: "/" },
                  { label: "Hoạt động", href: "#" },
                  { label: "Quản lý chất lượng", href: "/hoat-dong/quan-ly-chat-luong" },
                ]} 
              />
          </div>
      </div>

      <QualityHero />
      <QualityHighlights />
      <QualityPillars />
      <QualityDocuments />
      <QualityPosts />

      {/* CTA Strip */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-12 border-t border-blue-100">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Bạn cần hỗ trợ hoặc góp ý cải tiến dịch vụ?</h3>
                  <p className="text-slate-600">Những ý kiến đóng góp của Quý khách là cơ sở để chúng tôi cải thiện chất lượng mỗi ngày.</p>
              </div>
              <div className="flex gap-4">
                  <a href="tel:0905453677">
                      <Button className="rounded-full shadow-lg shadow-blue-500/20">
                          <Phone className="w-4 h-4 mr-2" />
                          Gọi 0905453677
                      </Button>
                  </a>
                  <Link to="/lien-he">
                      <Button variant="outline" className="rounded-full bg-white">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Gửi phản hồi
                      </Button>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
}

import PatientCategoryLayout from "../../components/layout/PatientCategoryLayout";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProcedureGuide() {
  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Dành cho người bệnh", href: "#" },
    { label: "Hướng dẫn & Quy trình" },
  ];

  return (
    <PatientCategoryLayout
        title="Hướng dẫn & Quy trình"
        description="Thông tin chi tiết các bước đăng ký, giấy tờ cần thiết và quy trình khám chữa bệnh BHYT/Dịch vụ."
        breadcrumbs={breadcrumbs}
    >
         <div className="grid grid-cols-1 gap-6 mb-12">
            {[
                { step: 1, title: "Đăng ký khám", desc: "Lấy số thứ tự tại quầy đón tiếp tầng 1 hoặc đặt lịch trực tuyến." },
                { step: 2, title: "Khám chuyên khoa", desc: "Đến phòng khám theo số thứ tự trên phiếu. Bác sĩ tư vấn và chỉ định Cận lâm sàng." },
                { step: 3, title: "Thực hiện CLS", desc: "Thực hiện xét nghiệm, chụp chiếu tại khu Cận lâm sàng (nếu có)." },
                { step: 4, title: "Kết luận & Lấy thuốc", desc: "Bác sĩ đọc kết quả, kê đơn. Người bệnh thanh toán và lấy thuốc BHYT/Dịch vụ." }
            ].map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#1E73BE] text-white flex items-center justify-center text-xl font-bold shrink-0 shadow-lg shadow-blue-200">
                        {item.step}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                </div>
            ))}
         </div>

         <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 text-center">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Bạn vẫn còn thắc mắc?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <a href="tel:0905453677" className="inline-flex items-center justify-center px-6 py-3 bg-[#1E73BE] text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi Hotline: 0905 453 677
                 </a>
                 <Link to="/lien-he" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                    Xem sơ đồ bệnh viện <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
            </div>
         </div>
    </PatientCategoryLayout>
  );
}

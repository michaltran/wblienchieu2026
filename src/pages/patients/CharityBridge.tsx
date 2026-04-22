import PatientCategoryLayout from "../../components/layout/PatientCategoryLayout";
import { Heart, HandHeart, Gift } from "lucide-react";

export default function CharityBridge() {
  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Dành cho người bệnh", href: "#" },
    { label: "Nhịp cầu nhân ái" },
  ];

  return (
    <PatientCategoryLayout
      title="Nhịp cầu nhân ái"
      description="Kết nối những tấm lòng vàng, hỗ trợ bệnh nhân có hoàn cảnh khó khăn đang điều trị tại Trung tâm Y tế."
      breadcrumbs={breadcrumbs}
    >
      <div className="grid grid-cols-1 gap-8">
          {/* Hero Banner */}
          <div className="bg-rose-50 rounded-2xl p-6 md:p-8 flex items-center gap-6 border border-rose-100">
             <div className="shrink-0 hidden md:block">
                 <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center animate-pulse">
                    <Heart className="w-10 h-10 text-rose-500" fill="currentColor" />
                 </div>
             </div>
             <div>
                 <h2 className="text-xl font-bold text-slate-900 mb-2">Chung tay vì người bệnh nghèo</h2>
                 <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                     "Một miếng khi đói bằng một gói khi no". Mọi sự đóng góp của quý mạnh thường quân sẽ được chuyển trực tiếp đến tay những bệnh nhân có hoàn cảnh đặc biệt khó khăn.
                 </p>
                 <button className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg shadow-lg shadow-rose-200 transition-all active:scale-95 text-sm">
                     Đóng góp ngay
                 </button>
             </div>
          </div>

          {/* Activities List */}
          <div>
               <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 text-lg">
                   <HandHeart className="w-5 h-5 text-rose-500" />
                   Hoạt động mới nhất
               </h3>
               <div className="space-y-4">
                    {[
                        { title: "Trao 50 suất quà Tết cho bệnh nhân chạy thận", date: "10/01/2024", img: "bg-slate-200" },
                        { title: "Nồi cháo tình thương: Ấm lòng người bệnh", date: "05/01/2024", img: "bg-orange-100" },
                        { title: "Hỗ trợ viện phí cho bệnh nhi H.T.A (5 tuổi)", date: "28/12/2023", img: "bg-blue-100" },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-all cursor-pointer group">
                            <div className={`w-24 h-16 ${item.img} rounded-lg shrink-0`}></div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-rose-600 transition-colors line-clamp-2">{item.title}</h4>
                                <span className="text-xs text-slate-400">{item.date}</span>
                            </div>
                        </div>
                    ))}
               </div>
          </div>

          {/* Donation Info */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
               <h3 className="font-bold text-lg mb-2 relative z-10">Thông tin tiếp nhận</h3>
               <p className="text-white/80 text-sm mb-6 relative z-10">Mọi sự đóng góp xin gửi về Phòng Công tác Xã hội</p>
               
               <div className="bg-white/10 p-4 rounded-xl mb-4 backdrop-blur-sm relative z-10 border border-white/10">
                   <p className="text-xs uppercase opacity-60 mb-1">Số tài khoản</p>
                   <p className="font-mono text-xl font-bold tracking-wider">1234 5678 9999</p>
                   <p className="text-xs mt-1 text-rose-200 font-medium">Vietcombank - CN Đà Nẵng</p>
               </div>
               
               <p className="text-xs text-center opacity-60 relative z-10">
                   Nội dung: [Ten_MTQ] Ung ho benh nhan
               </p>
          </div>
      </div>
    </PatientCategoryLayout>
  );
}

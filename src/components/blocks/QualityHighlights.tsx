import { ShieldCheck, Workflow, TrendingUp, BarChart3 } from "lucide-react";

export default function QualityHighlights() {
  const items = [
    {
      icon: ShieldCheck,
      title: "An toàn người bệnh",
      desc: "Ưu tiên hàng đầu trong mọi quyết định điều trị và chăm sóc."
    },
    {
      icon: Workflow,
      title: "Chuẩn hóa quy trình",
      desc: "Hệ thống phác đồ và quy trình được cập nhật thường xuyên."
    },
    {
      icon: TrendingUp,
      title: "Cải tiến liên tục",
      desc: "Không ngừng đổi mới để nâng cao chất lượng dịch vụ."
    },
    {
      icon: BarChart3,
      title: "Đo lường & báo cáo",
      desc: "Minh bạch hóa các chỉ số chất lượng bệnh viện."
    }
  ];

  return (
    <section className="py-12 -mt-10 relative z-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

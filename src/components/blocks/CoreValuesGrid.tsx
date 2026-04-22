import { Heart, ShieldCheck, UserCheck, Users, TrendingUp, Award } from "lucide-react";

const values = [
    { icon: Heart, label: "Tận tâm", desc: "Hết lòng vì người bệnh" },
    { icon:  Award, label: "Chuyên nghiệp", desc: "Giỏi chuyên môn, chuẩn tác phong" },
    { icon: ShieldCheck, label: "An toàn", desc: "Đặt an toàn người bệnh lên hàng đầu" },
    { icon: UserCheck, label: "Minh bạch", desc: "Rõ ràng trong mọi hoạt động" },
    { icon: Users, label: "Hợp tác", desc: "Đoàn kết tạo sức mạnh" },
    { icon: TrendingUp, label: "Cải tiến", desc: "Luôn học hỏi và đổi mới" },
]

export default function CoreValuesGrid() {
  return (
    <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1E73BE] mb-8 text-center uppercase tracking-wide">
            Giá trị cốt lõi
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#1E73BE]/10 flex items-center justify-center text-[#1E73BE] mb-4 group-hover:scale-110 transition-transform">
                        <v.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1">{v.label}</h3>
                    <p className="text-sm text-slate-500">{v.desc}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

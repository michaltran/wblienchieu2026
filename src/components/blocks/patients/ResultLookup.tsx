import { useState } from "react";
import { Search, Loader2, AlertCircle, FileText, Download } from "lucide-react";
import InfoCard from "../../ui/InfoCard";

interface ResultLookupProps {
  title: string;
  description: string;
  type: "lab" | "imaging";
}

export default function ResultLookup({ title, description, type }: ResultLookupProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    phone: "",
    idCard: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    // Mock API call
    setTimeout(() => {
      setLoading(false);
      // Demo logic: If phone ends with 1, show success. Else show "Not found"
      if (formData.phone.endsWith("1")) {
        setResult({
          patientName: "Nguyễn Văn A",
          date: "12/01/2026",
          items: type === "lab" ? [
             { name: "Tổng phân tích tế bào máu", status: "Đã có kết quả" },
             { name: "Sinh hóa máu", status: "Đã có kết quả" }
          ] : [
             { name: "Chụp X-Quang Ngực thẳng", status: "Đã có kết quả" },
             { name: "Siêu âm ổ bụng", status: "Đã có kết quả" }
          ]
        });
      } else {
        setError("Không tìm thấy kết quả nào với thông tin đã nhập. Vui lòng kiểm tra lại.");
      }
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{title}</h1>
        <p className="text-slate-600">{description}</p>
      </div>

      <InfoCard className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Số điện thoại <span className="text-red-500">*</span></label>
              <input 
                required
                type="tel" 
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E73BE] transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">CCCD / CMND <span className="text-red-500">*</span></label>
              <input 
                required
                type="text" 
                placeholder="Nhập số CCCD/CMND"
                value={formData.idCard}
                onChange={e => setFormData({...formData, idCard: e.target.value})}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E73BE] transition-all"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-[#1E73BE] text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
            {loading ? "Đang tra cứu..." : "Tra cứu kết quả"}
          </button>
        </form>

        {error && (
           <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3 border border-red-100">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="text-sm font-medium">{error}</span>
           </div>
        )}

        {result && (
          <div className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="bg-green-50 border border-green-100 p-6 rounded-2xl mb-6">
                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                   <FileText className="w-5 h-5" />
                   Kết quả tra cứu
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                   <div>
                      <span className="text-slate-500 block text-xs uppercase font-bold mb-1">Bệnh nhân</span>
                      <span className="font-medium text-slate-900">{result.patientName}</span>
                   </div>
                   <div>
                      <span className="text-slate-500 block text-xs uppercase font-bold mb-1">Ngày khám</span>
                      <span className="font-medium text-slate-900">{result.date}</span>
                   </div>
                </div>
                
                <div className="space-y-2">
                   {result.items.map((item: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                         <span className="font-medium text-slate-700">{item.name}</span>
                         <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{item.status}</span>
                      </div>
                   ))}
                </div>
             </div>
             
             <div className="text-center">
                 <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                    <Download className="w-4 h-4" />
                    Tải về kết quả chi tiết (PDF)
                 </button>
             </div>
          </div>
        )}
      </InfoCard>

      <div className="mt-8 text-center">
         <p className="text-slate-500 text-sm">
            Nếu gặp vấn đề khi tra cứu, vui lòng liên hệ <strong className="text-slate-900">1900 xxxx</strong> để được hỗ trợ.
         </p>
      </div>
    </div>
  );
}

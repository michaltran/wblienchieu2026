import { Phone, MapPin, Clock, Download } from "lucide-react";
import { mapInfo } from "../../data/hospitalMaps";
import { Button } from "../ui/Button";

export default function MapQuickInfo() {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-8">
        {/* Info Cards */}
        {mapInfo.map((info, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col justify-center shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#1E73BE]">
                    {info.icon === 'phone' && <Phone className="w-4 h-4" />}
                    {info.icon === 'pin' && <MapPin className="w-4 h-4" />}
                    {info.icon === 'clock' && <Clock className="w-4 h-4" />}
                    <span className="font-bold text-xs uppercase">{info.label}</span>
                </div>
                <div className="text-sm font-semibold text-slate-700 leading-snug">
                    {info.value}
                </div>
            </div>
        ))}
        
        {/* Download Guide Button (Placeholder) */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <Button variant="outline" size="sm" className="w-full mb-1 border-blue-200 text-[#1E73BE] hover:bg-blue-100" disabled>
                <Download className="w-4 h-4 mr-2" />
                Tải bản đồ PDF
            </Button>
            <span className="text-[10px] text-slate-400 italic">Đang cập nhật</span>
        </div>
    </div>
  );
}

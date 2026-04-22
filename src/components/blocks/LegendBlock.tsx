import { mapLegend } from "../../data/hospitalMaps";
import { Info, HelpCircle } from "lucide-react";

export default function LegendBlock() {
  return (
    <div className="space-y-6">
        {/* Legend */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <Info className="w-5 h-5 text-[#1E73BE]" />
                <h4 className="font-bold text-slate-800">Chú thích</h4>
            </div>
            <div className="space-y-3">
                {mapLegend.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <span 
                            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm shrink-0"
                            style={{ backgroundColor: item.color || '#94a3b8' }}
                        >
                            {item.iconLabel}
                        </span>
                        <span className="text-sm text-slate-600 font-medium">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Search Tips */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-slate-400" />
                <h4 className="font-bold text-slate-700">Mẹo tìm đường</h4>
            </div>
            <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4 marker:text-[#1E73BE]">
                <li>Quét mã QR tại sảnh chính để tải bản đồ về điện thoại.</li>
                <li>Hỏi nhân viên tại "Quầy hướng dẫn" (áo dài xanh) nếu cần trợ giúp.</li>
                <li>Sử dụng thang máy trung tâm để di chuyển giữa các tầng nội trú.</li>
            </ul>
        </div>
    </div>
  );
}

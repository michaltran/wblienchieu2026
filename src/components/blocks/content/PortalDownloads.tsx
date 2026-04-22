import { FileText, Download } from "lucide-react";
import InfoCard from "../../ui/InfoCard";

export interface DownloadItem {
  label: string;
  href: string;
  fileType?: "PDF" | "DOCX" | "XLSX";
}

interface PortalDownloadsProps {
  items: DownloadItem[];
}

export default function PortalDownloads({ items }: PortalDownloadsProps) {
  if (!items || items.length === 0) return null;

  return (
    <InfoCard className="space-y-4">
      <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
        <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
        Biểu mẫu / Tải về
      </h3>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="group relative pl-4 border-l-2 border-slate-100 hover:border-orange-200 transition-colors py-1">
             <a href={item.href} className="block">
                <p className="text-sm font-medium text-slate-700 group-hover:text-[#1E73BE] transition-colors line-clamp-2 mb-1">
                  {item.label}
                </p>
                <div className="flex items-center gap-2">
                  {item.fileType && (
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">
                      {item.fileType}
                    </span>
                  )}
                  <span className="text-xs text-[#1E73BE] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                     <Download className="w-3 h-3" /> Tải về
                  </span>
                </div>
             </a>
          </div>
        ))}
      </div>
    </InfoCard>
  );
}

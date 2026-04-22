import { useState } from "react";
import { FileText, Eye, Download } from "lucide-react";
import { qualityDocs } from "../../data/qualityDocs";
import type { QualityDoc } from "../../data/qualityDocs";
import { Button } from "../ui/Button";
import DocumentPreviewModal from "../ui/DocumentPreviewModal";

export default function QualityDocuments() {
  const [selectedDoc, setSelectedDoc] = useState<QualityDoc | null>(null);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
           <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Tài liệu & Hướng dẫn</h2>
              <p className="text-slate-600">Các văn bản công khai và biểu mẫu hướng dẫn người bệnh.</p>
           </div>
           <Button variant="outline">Xem tất cả tài liệu</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {qualityDocs.map((doc) => (
            <div 
                key={doc.id} 
                className="group bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelectedDoc(doc)}
            >
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-slate-500 group-hover:text-primary transition-colors">
                    <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-800 truncate mb-1 group-hover:text-primary transition-colors" title={doc.title}>
                        {doc.title}
                    </h4>
                    <div className="text-xs text-slate-400 flex items-center gap-3">
                        <span className="uppercase font-bold text-slate-500 bg-slate-100 px-1.5 rounded">{doc.type}</span>
                        <span>{doc.size}</span>
                        <span>• {doc.date}</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button 
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors" 
                        title="Xem trước"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDoc(doc);
                        }}
                    >
                        <Eye className="w-4 h-4" />
                    </button>
                    <a 
                        href={doc.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors" 
                        title="Tải xuống"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Download className="w-4 h-4" />
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedDoc && (
        <DocumentPreviewModal 
            isOpen={true}
            onClose={() => setSelectedDoc(null)}
            title={selectedDoc.title}
            url={selectedDoc.url}
            type={selectedDoc.type}
        />
      )}
    </section>
  );
}

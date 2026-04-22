import { Link } from "react-router-dom";
import type { Drug } from "../../data/drugs";
import { Pagination } from "../ui/Pagination";
import { ArrowRight, Pill } from "lucide-react";

interface DrugListProps {
  drugs: Drug[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function DrugList({ drugs, currentPage, totalPages, onPageChange }: DrugListProps) {
  if (drugs.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
        <Pill className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-slate-900">Không tìm thấy thuốc nào</h3>
        <p className="text-slate-500">Vui lòng thử lại với từ khóa hoặc bộ lọc khác.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
        {drugs.map((drug) => (
          <Link 
            key={drug.slug} 
            to={`/thuoc/${drug.slug}`}
            className="group bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="font-bold text-lg">{drug.letter}</span>
            </div>
            <div className="flex-1 min-w-0">
               <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors truncate">{drug.name}</h4>
               <p className="text-xs text-slate-500 truncate">{drug.groupEffect || "Chưa cập nhật nhóm"}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors self-center" />
          </Link>
        ))}
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

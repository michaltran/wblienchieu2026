import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/cn";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function HealthPagination({ currentPage, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-[#1E73BE] hover:text-[#1E73BE] disabled:opacity-30 disabled:pointer-events-none transition-all"
        >
            <ChevronLeft className="w-5 h-5" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
                key={p}
                onClick={() => onPageChange(p)}
                className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all",
                    currentPage === p 
                    ? "bg-[#1E73BE] text-white shadow-lg shadow-blue-500/30" 
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                )}
            >
                {p}
            </button>
        ))}

        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-[#1E73BE] hover:text-[#1E73BE] disabled:opacity-30 disabled:pointer-events-none transition-all"
        >
            <ChevronRight className="w-5 h-5" />
        </button>
    </div>
  );
}

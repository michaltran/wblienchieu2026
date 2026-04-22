import { ListFilter } from "lucide-react";
import type { HealthCategory } from "../../data/healthCategories";

interface Props {
  activeCategory: HealthCategory | undefined;
  totalResults: number;
  sortValue: "newest" | "oldest" | "a-z";
  onSortChange: (val: "newest" | "oldest" | "a-z") => void;
}

export default function HealthToolbar({ activeCategory, totalResults, sortValue, onSortChange }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
         <div>
             <h2 className="text-2xl font-bold text-slate-900">
                 {activeCategory ? activeCategory.name : "Tất cả bài viết"}
             </h2>
             <p className="text-sm text-slate-500 mt-1">
                 Hiển thị {totalResults} kết quả
             </p>
         </div>

         <div className="flex items-center gap-3">
             <div className="relative">
                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                     <ListFilter className="w-4 h-4" />
                 </div>
                 <select
                     value={sortValue}
                     onChange={(e) => onSortChange(e.target.value as any)}
                     className="appearance-none pl-10 pr-8 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE]/20 outline-none cursor-pointer hover:border-slate-300 transition-colors shadow-sm"
                 >
                     <option value="newest">Mới nhất</option>
                     <option value="oldest">Cũ nhất</option>
                     <option value="a-z">Tiêu đề A-Z</option>
                 </select>
             </div>
         </div>
    </div>
  );
}

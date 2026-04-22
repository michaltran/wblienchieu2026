import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { cn } from "../../../lib/cn";
import { useState } from "react";

interface ContentToolbarProps {
  onSearch: (q: string) => void;
  onFilterTag: (tag: string | null) => void;
  onSort: (dir: 'desc' | 'asc') => void;
  tags: string[];
  activeTag: string | null;
  totalResults: number;
}

export default function ContentToolbar({
  onSearch,
  onFilterTag,
  onSort,
  tags,
  activeTag,
  totalResults
}: ContentToolbarProps) {
  const [sortDesc, setSortDesc] = useState(true);

  const toggleSort = () => {
    const newDir = !sortDesc;
    setSortDesc(newDir);
    onSort(newDir ? 'desc' : 'asc');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E73BE] transition-all"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>

        {/* Filters & Sort */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
          <button 
            onClick={toggleSort}
            className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shrink-0"
          >
            <ArrowUpDown className="w-4 h-4" />
            {sortDesc ? "Mới nhất" : "Cũ nhất"}
          </button>
          
          <div className="w-px h-6 bg-slate-200 mx-1 shrink-0"></div>
          
          <button
             onClick={() => onFilterTag(null)}
             className={cn(
               "px-4 py-2 rounded-xl text-sm font-medium shrink-0 transition-colors",
               activeTag === null ? "bg-[#1E73BE] text-white" : "text-slate-600 hover:bg-slate-50"
             )}
          >
            Tất cả
          </button>
          
          {tags.map(tag => (
             <button
                key={tag}
                onClick={() => onFilterTag(tag)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium shrink-0 transition-colors border border-transparent",
                  activeTag === tag ? "bg-blue-100 text-[#1E73BE] border-blue-200" : "text-slate-600 hover:bg-slate-50"
                )}
             >
                {tag}
             </button>
          ))}
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mt-4 text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
          Tìm thấy {totalResults} kết quả
      </div>
    </div>
  );
}

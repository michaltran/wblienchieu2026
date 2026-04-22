import { Search, Filter, SortAsc, LayoutTemplate, Grid } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { cn } from "../../lib/cn";

interface PhotoToolbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  sortOrder: 'newest' | 'oldest' | 'az';
  setSortOrder: (s: 'newest' | 'oldest' | 'az') => void;
//   viewMode: 'masonry' | 'grid';
//   setViewMode: (v: 'masonry' | 'grid') => void;
}

export default function PhotoToolbar({ searchQuery, setSearchQuery, sortOrder, setSortOrder }: PhotoToolbarProps) {
  const { t } = useI18n();

  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
                type="text" 
                placeholder={t('photo_search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#1E73BE] transition-all"
            />
        </div>

        {/* Filters Right */}
        <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {/* Sort Dropdown (Simplified as tabs for demo) */}
            <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
                <button 
                   onClick={() => setSortOrder('newest')}
                   className={cn("px-3 py-1.5 text-xs font-semibold rounded-lg transition-all", sortOrder === 'newest' ? "bg-white text-[#1E73BE] shadow-sm" : "text-slate-500 hover:text-slate-700")}
                >
                    {t('photo_sort_newest')}
                </button>
                <button 
                   onClick={() => setSortOrder('oldest')}
                   className={cn("px-3 py-1.5 text-xs font-semibold rounded-lg transition-all", sortOrder === 'oldest' ? "bg-white text-[#1E73BE] shadow-sm" : "text-slate-500 hover:text-slate-700")}
                >
                    {t('photo_sort_oldest')}
                </button>
                <button 
                   onClick={() => setSortOrder('az')}
                   className={cn("px-3 py-1.5 text-xs font-semibold rounded-lg transition-all", sortOrder === 'az' ? "bg-white text-[#1E73BE] shadow-sm" : "text-slate-500 hover:text-slate-700")}
                >
                    {t('photo_sort_az')}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

import { ST } from "../../styles/specialtyTokens";
import { Search, ArrowDownAZ, ArrowUpAZ, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/cn";

interface Props {
  onSearch: (term: string) => void;
  onSort: (mode: 'default' | 'az') => void;
  totalResults: number;
}

export default function SpecialtiesToolbar({ onSearch, onSort, totalResults }: Props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortMode, setSortMode] = useState<'default' | 'az'>('default');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearchTerm(val);
        onSearch(val);
    };

    const clearSearch = () => {
        setSearchTerm("");
        onSearch("");
    };

    const toggleSort = () => {
        const newMode = sortMode === 'default' ? 'az' : 'default';
        setSortMode(newMode);
        onSort(newMode);
    };

    return (
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 mb-8">
            <div className={ST.container}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Search Input */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                            type="text" 
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Tìm kiếm khoa phòng..."
                            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#1E73BE]/20 focus:border-[#1E73BE] transition-all outline-none text-slate-700 placeholder:text-slate-400"
                        />
                        {searchTerm && (
                            <button 
                                onClick={clearSearch}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-3">
                         <div className="text-sm font-medium text-slate-500 hidden sm:block">
                            Hiển thị <strong className="text-slate-900">{totalResults}</strong> kết quả
                         </div>
                         <div className="h-6 w-px bg-slate-200 hidden sm:block" />
                         
                         <button 
                            onClick={toggleSort}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border",
                                sortMode === 'az' 
                                    ? "bg-[#1E73BE]/10 text-[#1E73BE] border-[#1E73BE]/20" 
                                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                            )}
                         >
                            {sortMode === 'default' ? <ArrowDownAZ className="w-4 h-4" /> : <ArrowUpAZ className="w-4 h-4" />}
                            {sortMode === 'default' ? "Mặc định" : "Tên A-Z"}
                         </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import type { HealthCategory } from "../../data/healthCategories";

import { cn } from "../../lib/cn";
import { ChevronRight, LayoutGrid } from "lucide-react";

interface Props {
  categories: HealthCategory[];
  activeSlug: string;
  onSelect: (slug: string) => void;
}

export default function HealthCategoryPanel({ categories, activeSlug, onSelect }: Props) {
  // Split categories for 2-column layout on desktop
  const midPoint = Math.ceil(categories.length / 2);
  const leftCol = categories.slice(0, midPoint);
  const rightCol = categories.slice(midPoint);

  const CategoryItem = ({ cat }: { cat: HealthCategory }) => (
    <button
        onClick={() => onSelect(cat.slug)}
        className={cn(
            "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group",
            activeSlug === cat.slug 
            ? "bg-[#1E73BE] text-white shadow-md" 
            : "text-slate-600 hover:bg-slate-50 hover:text-[#1E73BE]"
        )}
    >
        <span>{cat.name}</span>
        {activeSlug === cat.slug && <ChevronRight className="w-4 h-4" />}
    </button>
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-[#1E73BE]" />
            <h3 className="font-bold text-slate-900">Chuyên mục</h3>
        </div>
        
        <div className="p-4">
             {/* Desktop 2-Col Layout */}
             <div className="hidden lg:grid grid-cols-2 gap-x-4 gap-y-1">
                 <div className="flex flex-col gap-1">
                     {leftCol.map(c => <CategoryItem key={c.id} cat={c} />)}
                 </div>
                 <div className="flex flex-col gap-1">
                     {rightCol.map(c => <CategoryItem key={c.id} cat={c} />)}
                 </div>
             </div>

             {/* Mobile/Tablet Single Col (Accordion style in parent perhaps, but here just simple list) */}
             <div className="lg:hidden flex flex-col gap-1 max-h-[300px] overflow-y-auto custom-scrollbar">
                 {categories.map(c => <CategoryItem key={c.id} cat={c} />)}
             </div>
        </div>
    </div>
  );
}

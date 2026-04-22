import { Search, Loader2 } from "lucide-react";
import { Input } from "../ui/Input";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Drug } from "../../lib/api/hospital";
import { usePublicDrugs } from "../../hooks/useHospital";
import { cn } from "../../lib/cn";

export default function DrugSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // Use debounced search or just fetch dynamically
  const { data, isLoading } = usePublicDrugs({ search: query, limit: 8 });
  const results = data?.items || [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 1) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto z-20">
      <div className="relative">
        <Input 
          placeholder="Nhập tên thuốc cần tra cứu..." 
          className="pl-12 h-14 text-lg rounded-full shadow-lg shadow-primary/5 border-primary/20 focus-visible:ring-primary"
          value={query}
          onChange={handleSearch}
          onFocus={() => query.length > 1 && setIsOpen(true)}
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-6 h-6" />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          {results.length > 0 ? (
            <>
              <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase">
                Gợi ý tra cứu
              </div>
              <ul>
                {results.map((drug) => (
                  <li key={drug.slug}>
                    <Link 
                      to={`/thuoc/${drug.slug}`}
                      className="block px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors border-b border-slate-50 last:border-0"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-semibold">{drug.name}</span>
                      <span className="block text-xs text-slate-500 mt-1">{drug.groupEffect}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-2 bg-slate-50 border-t border-slate-100 text-center">
                 <Link 
                   to={`/thuoc?q=${query}`}
                   className="text-sm font-bold text-primary hover:underline"
                   onClick={() => setIsOpen(false)}
                 >
                   Xem tất cả kết quả cho "{query}"
                 </Link>
              </div>
            </>
          ) : (
            <div className="p-6 text-center text-slate-500">
              Không tìm thấy kết quả nào cho "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}

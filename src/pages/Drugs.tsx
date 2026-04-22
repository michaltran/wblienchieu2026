import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { drugs } from "../data/drugs";
import AlphabetFilter from "../components/blocks/AlphabetFilter";
import DrugSearch from "../components/blocks/DrugSearch";
import DrugList from "../components/blocks/DrugList";
import Breadcrumb from "../components/ui/Breadcrumb";

const ITEMS_PER_PAGE = 20;

export default function Drugs() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get filter states from URL or default
  const activeLetter = searchParams.get("letter") || undefined;
  const searchQuery = searchParams.get("q") || "";
  const currentPage = parseInt(searchParams.get("page") || "1");

  // Filtering Logic
  const filteredDrugs = useMemo(() => {
    return drugs.filter((drug) => {
      const matchLetter = activeLetter ? drug.letter === activeLetter : true;
      const matchSearch = searchQuery 
         ? drug.name.toLowerCase().includes(searchQuery.toLowerCase()) 
         : true;
      return matchLetter && matchSearch;
    });
  }, [activeLetter, searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredDrugs.length / ITEMS_PER_PAGE);
  const currentDrugs = filteredDrugs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers
  const handleLetterSelect = (letter: string | undefined) => {
    const params = new URLSearchParams(searchParams);
    if (letter) params.set("letter", letter);
    else params.delete("letter");
    
    params.set("page", "1"); // Reset to page 1
    params.delete("q"); // Optional: clear search when picking letter
    setSearchParams(params);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header / Hero */}
      <div className="bg-white border-b border-slate-100 pt-8 pb-12 mb-8">
        <div className="container">
           <Breadcrumb items={[{ label: "Tra cứu thuốc" }]} className="mb-8" />
           <div className="text-center max-w-2xl mx-auto">
             <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Danh mục thuốc & Dược điển</h1>
             <p className="text-slate-600 mb-10">
               Tra cứu thông tin chi tiết về hàng nghìn loại thuốc, hoạt chất, cách dùng và liều lượng.
             </p>
             <DrugSearch />
             
             {searchQuery && (
               <div className="mt-4 text-sm text-slate-500">
                 Hiển thị kết quả cho từ khóa: <span className="font-bold text-slate-900">"{searchQuery}"</span>
                 <button 
                   onClick={() => setSearchParams({})}
                   className="ml-4 text-primary hover:underline"
                 >
                   Xóa bộ lọc
                 </button>
               </div>
             )}
           </div>
        </div>
      </div>

      <div className="container">
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
               <div className="sticky top-24">
                 <AlphabetFilter activeLetter={activeLetter} onSelect={handleLetterSelect} />
                 
                 {/* Sidebar Info */}
                 <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-primary mb-2">Lưu ý quan trọng</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Thông tin thuốc trên website chỉ mang tính chất tham khảo. Tuyệt đối không tự ý mua và sử dụng thuốc khi chưa có chỉ định của bác sĩ.
                    </p>
                 </div>
               </div>
            </div>

            <div className="lg:col-span-3">
               <div className="mb-6 flex justify-between items-center">
                 <h2 className="text-xl font-bold text-slate-900">
                    {activeLetter ? `Thuốc bắt đầu bằng "${activeLetter}"` : "Tất cả thuốc"}
                 </h2>
                 <span className="text-sm text-slate-500">
                   Tìm thấy {filteredDrugs.length} kết quả
                 </span>
               </div>
               
               <DrugList 
                 drugs={currentDrugs}
                 currentPage={currentPage}
                 totalPages={totalPages}
                 onPageChange={handlePageChange}
               />
            </div>
         </div>
      </div>
    </div>
  );
}

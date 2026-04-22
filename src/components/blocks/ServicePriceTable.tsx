import { useState, useMemo, useEffect } from "react";
import { Search, Info, CloudLightning, Loader2, RefreshCw } from "lucide-react";
import { servicePrices, type ServicePrice } from "../../data/servicePrices";
import { fetchPricingFromSheet } from "../../lib/googleSheets";
import SimplePagination from "../ui/SimplePagination";
import { cn } from "../../lib/cn";

// CONFIGuration: Replace this ID with your publicly published Sheet ID
// Format: Google Sheet > File > Share > Publish to web > CSV
const GOOGLE_SHEET_ID = ""; // Leave empty to use local data by default

const ITEMS_PER_PAGE = 15;

const categories = [
  { id: "all", label: "Tất cả" },
  { id: "kham-benh", label: "Khám bệnh" },
  { id: "xet-nghiem", label: "Xét nghiệm" },
  { id: "chan-doan-hinh-anh", label: "CĐ Hình ảnh" },
  { id: "thu-thuat", label: "Thủ thuật & Khác" },
];

export default function ServicePriceTable() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Data State
  const [liveData, setLiveData] = useState<ServicePrice[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUsingCloud, setIsUsingCloud] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const loadData = async () => {
    if (!GOOGLE_SHEET_ID) return;
    
    setIsLoading(true);
    setFetchError(false);
    try {
        const data = await fetchPricingFromSheet(GOOGLE_SHEET_ID);
        if (data && data.length > 0) {
            setLiveData(data);
            setIsUsingCloud(true);
        }
    } catch (err) {
        console.error("Failed to load live prices", err);
        setFetchError(true);
        setIsUsingCloud(false);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const activeData = isUsingCloud ? liveData : servicePrices;

  const filteredData = useMemo(() => {
    return activeData.filter(item => {
      const matchCategory = activeCategory === "all" || item.category === activeCategory;
      const matchSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.code.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchCategory && matchSearch;
    });
  }, [activeData, activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentItems = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const formatPrice = (price?: number) => {
    return price 
      ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price) 
      : "-";
  };

  return (
    <div className="space-y-6">
      {/* 1. Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
          {/* Tabs */}
          <div className="flex flex-col gap-3 w-full md:w-auto">
             <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => { setActiveCategory(cat.id); setCurrentPage(1); }}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                            activeCategory === cat.id 
                                ? "bg-[#1E73BE] text-white shadow-md shadow-blue-200" 
                                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                        )}
                    >
                        {cat.label}
                    </button>
                ))}
             </div>
             
             {/* Cloud Status Indicator */}
             {GOOGLE_SHEET_ID && (
                <div className="flex items-center gap-3 text-xs px-1">
                    {isLoading ? (
                        <span className="flex items-center gap-1.5 text-slate-500 animate-pulse">
                            <Loader2 className="w-3 h-3 animate-spin" /> Đang cập nhật dữ liệu...
                        </span>
                    ) : isUsingCloud ? (
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1.5 text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                <CloudLightning className="w-3 h-3" /> Live Update
                            </span>
                            <button onClick={loadData} className="text-slate-400 hover:text-[#1E73BE] transition-colors" title="Làm mới">
                                <RefreshCw className="w-3 h-3" />
                            </button>
                        </div>
                    ) : (
                         <span className="flex items-center gap-1.5 text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100" title="Đang sử dụng dữ liệu mặc định">
                            ● Dữ liệu Offline
                        </span>
                    )}
                </div>
             )}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Tìm tên hoặc mã dịch vụ..."
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#1E73BE] outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
      </div>

      {/* 2. Data Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-bold text-slate-700 w-32">Mã DV</th>
                <th className="px-6 py-4 font-bold text-slate-700">Tên dịch vụ</th>
                <th className="px-6 py-4 font-bold text-slate-700 w-24">Đơn vị</th>
                <th className="px-6 py-4 font-bold text-slate-700 text-right w-36">Giá BHYT</th>
                <th className="px-6 py-4 font-bold text-slate-700 text-right w-36">Giá Dịch vụ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentItems.length > 0 ? (
                currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-slate-500">{item.code}</td>
                    <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 text-slate-600">{item.unit}</td>
                    <td className="px-6 py-4 text-right text-slate-600">
                        {item.insurancePrice ? (
                            <span className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-bold">
                                {formatPrice(item.insurancePrice)}
                            </span>
                        ) : "-"}
                    </td>
                     <td className="px-6 py-4 text-right text-[#1E73BE] font-bold">
                        {formatPrice(item.price)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                        Không tìm thấy dịch vụ nào phù hợp.
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Pagination */}
      <SimplePagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
        
      {/* 4. Note */}
      <div className="flex gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-xs text-slate-600 mt-4">
         <Info className="w-5 h-5 text-[#1E73BE] shrink-0" />
         <div>
             <p className="font-bold text-[#1E73BE] mb-1">Lưu ý quan trọng:</p>
             <ul className="list-disc pl-4 space-y-1">
                 <li>Giá trên là giá niêm yết tham khảo, có thể thay đổi tùy theo thời điểm và chính sách của bệnh viện.</li>
                 <li>Giá BHYT áp dụng cho đối tượng có thẻ Bảo hiểm y tế đúng tuyến hoặc trường hợp cấp cứu.</li>
                 <li>Để biết chi phí chính xác cho trường hợp của mình, vui lòng liên hệ quầy tư vấn hoặc tổng đài 0905 453 677.</li>
             </ul>
         </div>
      </div>
    </div>
  );
}

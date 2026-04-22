import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Phone } from "lucide-react";
import { doctors } from "../data/doctors";
import DoctorCard from "../components/blocks/DoctorCard";
import DoctorFilters, { type FilterState } from "../components/blocks/DoctorFilters";
import { Pagination } from "../components/ui/Pagination";
import { Button } from "../components/ui/Button";

const ITEMS_PER_PAGE = 9;

export default function Doctors() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    specialty: [],
    department: [],
    search: "",
  });

  // Filter Logic
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      // Search
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchName = doc.name.toLowerCase().includes(query);
        const matchSpecialty = doc.specialty.toLowerCase().includes(query);
        const matchTags = doc.tags.some(tag => tag.toLowerCase().includes(query));
        if (!matchName && !matchSpecialty && !matchTags) return false;
      }

      // Specialty
      if (filters.specialty.length > 0) {
        if (!filters.specialty.includes(doc.specialty)) return false;
      }

      // Department
      if (filters.department.length > 0) {
        if (!filters.department.includes(doc.department || "")) return false;
      }

      return true;
    });
  }, [filters]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE);
  const currentDoctors = filteredDoctors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-10 pb-16">
        <div className="container">
           <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                  <h1 className="text-3xl md:text-4xl font-black text-primary mb-3">Chuyên gia y tế</h1>
                  <p className="text-slate-600 text-lg">Tra cứu đội ngũ bác sĩ — TRUNG TÂM Y TẾ KHU VỰC LIÊN CHIỂU</p>
              </div>
              <div className="flex gap-3">
                 <a href="tel:0905453677">
                    <Button variant="outline" className="rounded-full bg-white">
                       <Phone className="w-4 h-4 mr-2" />
                       Gọi 0905453677
                    </Button>
                 </a>
                 <Link to="/dang-ky-kham">
                    <Button className="rounded-full shadow-lg shadow-blue-500/20">
                       <MapPin className="w-4 h-4 mr-2" />
                       Đăng ký khám
                    </Button>
                 </Link>
              </div>
           </div>

           {/* Search Bar */}
           <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100 max-w-3xl mx-auto flex items-center">
              <Search className="w-5 h-5 text-slate-400 ml-3 flex-shrink-0" />
              <input 
                type="text"
                placeholder="Tìm theo tên bác sĩ, chuyên khoa, kỹ thuật..."
                className="w-full h-10 px-3 outline-none text-slate-700 placeholder:text-slate-400"
                value={filters.search}
                onChange={(e) => {
                   setFilters({ ...filters, search: e.target.value });
                   setCurrentPage(1); // Reset page on search
                }}
              />
              <div className="text-xs font-semibold text-slate-400 px-3 border-l border-slate-100 flex-shrink-0">
                 {filteredDoctors.length} bác sĩ
              </div>
           </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white min-h-[600px]">
         <div className="container lg:flex gap-8">
            {/* Sidebar */}
            <DoctorFilters 
               filters={filters} 
               setFilters={(f) => {
                  setFilters(f);
                  setCurrentPage(1);
               }} 
            />

            {/* Grid */}
            <div className="flex-1">
               {currentDoctors.length > 0 ? (
                  <>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {currentDoctors.map(doctor => (
                           <DoctorCard key={doctor.id} doctor={doctor} />
                        ))}
                     </div>
                     
                     {/* Pagination */}
                     {totalPages > 1 && (
                        <div className="flex justify-center">
                           <Pagination 
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={handlePageChange}
                           />
                        </div>
                     )}
                  </>
               ) : (
                  <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-slate-300">
                         <Search className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Không tìm thấy kết quả</h3>
                      <p className="text-slate-500 mb-6 max-w-md mx-auto">
                         Không có bác sĩ nào phù hợp với bộ lọc hiện tại. Vui lòng thử lại với các tiêu chí khác.
                      </p>
                      <Button variant="outline" onClick={() => setFilters({ specialty: [], department: [], search: "" })}>
                         Xóa bộ lọc
                      </Button>
                  </div>
               )}
            </div>
         </div>
      </section>
    </>
  );
}

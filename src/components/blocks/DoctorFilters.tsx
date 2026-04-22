import { Button } from "../ui/Button";
import { Filter, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { cn } from "../../lib/cn";

export interface FilterState {
  specialty: string[];
  department: string[];
  search: string;
}

interface DoctorFiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  className?: string;
}

const specialties = ["Nội khoa", "Ngoại khoa", "Sản phụ khoa", "Nhi khoa", "Tai Mũi Họng", "Răng Hàm Mặt", "Mắt", "Da liễu", "Y học cổ truyền", "Dinh dưỡng", "Chẩn đoán hình ảnh"];
const departments = ["Khoa Nội", "Khoa Ngoại", "Khoa Sản", "Khoa Nhi", "Khoa Liên Chuyên Khoa", "Khoa Khám bệnh", "Khoa Dinh dưỡng", "Khoa YHCT", "Khoa CĐHA"];

export default function DoctorFilters({ filters, setFilters, className }: DoctorFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSpecialty = (item: string) => {
    const current = filters.specialty;
    const next = current.includes(item)
      ? current.filter((i) => i !== item)
      : [...current, item];
    setFilters({ ...filters, specialty: next });
  };

  const toggleDepartment = (item: string) => {
    const current = filters.department;
    const next = current.includes(item)
      ? current.filter((i) => i !== item)
      : [...current, item];
    setFilters({ ...filters, department: next });
  };

  const clearFilters = () => {
    setFilters({ ...filters, specialty: [], department: [] });
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Header for Mobile */}
      <div className="flex items-center justify-between lg:hidden mb-6">
        <h3 className="font-bold text-lg text-slate-900">Bộ lọc tìm kiếm</h3>
        <button onClick={() => setMobileOpen(false)} className="p-2 -mr-2 text-slate-400 hover:text-slate-600">
           <X className="w-5 h-5" />
        </button>
      </div>

      {/* Specialties */}
      <div>
        <h3 className="font-bold text-slate-900 mb-3 flex items-center justify-between">
          Chuyên khoa
          {filters.specialty.length > 0 && (
             <span className="text-xs font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full">{filters.specialty.length}</span>
          )}
        </h3>
        <div className="space-y-2">
          {specialties.map((item) => (
            <label key={item} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={cn(
                  "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                  filters.specialty.includes(item)
                    ? "bg-primary border-primary"
                    : "border-slate-300 bg-white group-hover:border-primary"
                )}
              >
                 {filters.specialty.includes(item) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={filters.specialty.includes(item)}
                onChange={() => toggleSpecialty(item)}
              />
              <span className={cn("text-sm transition-colors", filters.specialty.includes(item) ? "text-primary font-medium" : "text-slate-600 group-hover:text-primary")}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div>
        <h3 className="font-bold text-slate-900 mb-3 flex items-center justify-between">
          Khoa / Phòng
          {filters.department.length > 0 && (
             <span className="text-xs font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full">{filters.department.length}</span>
          )}
        </h3>
        <div className="space-y-2">
          {departments.map((item) => (
            <label key={item} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={cn(
                  "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                  filters.department.includes(item)
                    ? "bg-primary border-primary"
                    : "border-slate-300 bg-white group-hover:border-primary"
                )}
              >
                 {filters.department.includes(item) && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={filters.department.includes(item)}
                onChange={() => toggleDepartment(item)}
              />
              <span className={cn("text-sm transition-colors", filters.department.includes(item) ? "text-primary font-medium" : "text-slate-600 group-hover:text-primary")}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Actions */}
      {(filters.specialty.length > 0 || filters.department.length > 0) && (
        <div className="pt-4 border-t border-slate-100">
          <Button variant="outline" className="w-full text-sm h-9" onClick={clearFilters}>
            Xóa bộ lọc
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={cn("hidden lg:block w-64 flex-shrink-0", className)}>
         <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm sticky top-24">
             <FilterContent />
         </div>
      </div>

      {/* Mobile Trigger */}
      <div className="lg:hidden mb-4">
        <Button variant="outline" className="w-full flex items-center justify-between" onClick={() => setMobileOpen(true)}>
           <span className="flex items-center gap-2">
             <Filter className="w-4 h-4" />
             Bộ lọc tìm kiếm
           </span>
           {(filters.specialty.length > 0 || filters.department.length > 0) && (
             <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
               {filters.specialty.length + filters.department.length}
             </span>
           )}
        </Button>
      </div>

      {/* Mobile Drawer */}
      <Transition appear show={mobileOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={() => setMobileOpen(false)}>
           <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
           >
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
           </Transition.Child>

           <div className="fixed inset-0 overflow-hidden">
             <div className="absolute inset-0 overflow-hidden">
                 <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-300 sm:duration-500"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-300 sm:duration-500"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                         <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                            <div className="px-4">
                               <FilterContent />
                            </div>
                         </div>
                      </Dialog.Panel>
                    </Transition.Child>
                 </div>
             </div>
           </div>
        </Dialog>
      </Transition>
    </>
  );
}

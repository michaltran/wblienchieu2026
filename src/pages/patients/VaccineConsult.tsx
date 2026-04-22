import { useState, useMemo } from "react";
import PatientCategoryLayout from "../../components/layout/PatientCategoryLayout";
import PatientPostList from "../../components/blocks/PatientPostList";
import SimplePagination from "../../components/ui/SimplePagination";
import { patientPosts } from "../../data/patientPosts";
import { patientCategories } from "../../data/patientCategories";

const POSTS_PER_PAGE = 10;

export default function VaccineConsult() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const category = patientCategories.find(c => c.key === "vaccine");
  
  if (!category) return null;

  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Dành cho người bệnh", href: "#" },
    { label: category.title },
  ];

  // Filter & Pagination Logic
  const filteredPosts = useMemo(() => {
    return patientPosts
      .filter(p => p.categoryKey === "vaccine")
      .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <PatientCategoryLayout
      title={category.title}
      description={category.description}
      breadcrumbs={breadcrumbs}
    >
      {/* Search Bar */}
      <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchQuery}
            onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to page 1 on search
            }}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
      </div>

      {/* Post List */}
      <PatientPostList posts={currentPosts} categorySlug="tu-van-tiem-chung-vac-xin" />

      {/* Pagination */}
      <div className="mt-8 border-t border-slate-100 pt-8">
          <SimplePagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
      </div>
    </PatientCategoryLayout>
  );
}

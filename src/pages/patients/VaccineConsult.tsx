import { useState } from "react";
import PatientCategoryLayout from "../../components/layout/PatientCategoryLayout";
import PatientPostList from "../../components/blocks/PatientPostList";
import SimplePagination from "../../components/ui/SimplePagination";
import { usePublicPostsList } from "../../hooks/usePublicPosts";
import { Loader2 } from "lucide-react";

const POSTS_PER_PAGE = 10;

export default function VaccineConsult() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = usePublicPostsList({
    type: 'health',
    tag: 'tiem-chung',
    search: searchQuery || undefined,
    page: currentPage,
    limit: POSTS_PER_PAGE,
  });

  const posts = data?.items || [];
  const totalPages = data?.totalPages || 1;

  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Dành cho người bệnh", href: "#" },
    { label: "Tư vấn tiêm chủng" },
  ];

  return (
    <PatientCategoryLayout
      title="Tư vấn tiêm chủng – Vắc xin"
      description="Thông tin về lịch tiêm chủng, các loại vắc xin và hướng dẫn phòng bệnh cho mọi lứa tuổi."
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
                setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
      </div>

      {/* Post List */}
      {isLoading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-[#1E73BE]" />
        </div>
      ) : (
        <>
          <PatientPostList posts={posts} categorySlug="tu-van-tiem-chung-vac-xin" />
          {posts.length === 0 && (
            <p className="text-center text-slate-500 italic py-12">
              Chưa có bài viết nào trong chuyên mục này.
            </p>
          )}
        </>
      )}

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

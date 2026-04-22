import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ArticleSidebar from "../components/blocks/ArticleSidebar";
import { Pagination } from "../components/ui/Pagination";
import { usePublicPosts } from "../hooks/usePosts";
import { Calendar, Loader2 } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const categories = [
  { name: "Tất cả", slug: "" },
  { name: "Tin tức - Sự kiện", slug: "tin-tuc-su-kien" },
  { name: "Y học thường thức", slug: "y-hoc-thuong-thuc" },
  { name: "Đào tạo - NCKH", slug: "dao-tao-nckh" },
];

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSlug = searchParams.get("category") || "";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data, isLoading, isError } = usePublicPosts({
    page: currentPage,
    limit: itemsPerPage,
    ...(currentSlug ? { categorySlug: currentSlug } : {}),
  });

  const posts = data?.items || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-12 mb-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tin tức & Sự kiện</h1>
          <p className="text-slate-600 max-w-2xl">
            Cập nhật những thông tin y tế mới nhất, kiến thức chăm sóc sức khỏe và các hoạt động của Trung tâm Y tế.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <Button 
                  key={cat.name}
                  variant={currentSlug === cat.slug ? "default" : "outline"}
                  onClick={() => {
                    setSearchParams(cat.slug ? { category: cat.slug } : {});
                    setCurrentPage(1);
                  }}
                  className="rounded-full"
                  size="sm"
                >
                  {cat.name}
                </Button>
              ))}
            </div>

            {/* Posts List */}
            {isLoading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : isError ? (
              <div className="text-center py-20 text-red-500">
                Có lỗi xảy ra khi tải bài viết.
              </div>
            ) : (
              <div className="grid gap-8">
                {posts.map((post: any) => (
                  <article key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all">
                    <div className="w-full md:w-1/3 aspect-video bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center text-slate-400 text-sm">
                      {post.coverUrl ? (
                        <img src={post.coverUrl} alt={post.title} className="w-full h-full object-cover" />
                      ) : (
                        "[Ảnh minh hoạ]"
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-primary bg-primary/5 hover:bg-primary/10">
                          {post.category?.name || 'Chưa phân loại'}
                        </Badge>
                        <span className="text-xs text-slate-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" /> {new Date(post.publishedAt || post.createdAt).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                      <Link to={`/bai-viet/${post.slug}`}>
                        <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <Link to={`/bai-viet/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                        Đọc tiếp
                      </Link>
                    </div>
                  </article>
                ))}
                
                {posts.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 italic text-slate-500">
                    Không tìm thấy bài viết nào trong chuyên mục này.
                  </div>
                )}
              </div>
            )}

            {/* Pagination */}
            {posts.length > 0 && totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ArticleSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

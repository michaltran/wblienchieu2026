import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ArticleSidebar from "../components/blocks/ArticleSidebar";
import { Pagination } from "../components/ui/Pagination";
import { posts } from "../data/posts";
import { Calendar } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "Tất cả";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter logic
  const filteredPosts = currentCategory === "Tất cả" 
    ? posts 
    : posts.filter(post => post.category === currentCategory);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  
  // Categories for tabs
  const categories = ["Tất cả", "Tin tức", "Sức khỏe", "Hướng dẫn"];

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
                  key={cat}
                  variant={currentCategory === cat ? "default" : "outline"}
                  onClick={() => setSearchParams({ category: cat })}
                  className="rounded-full"
                  size="sm"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Posts List */}
            <div className="grid gap-8">
              {filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((post) => (
                <article key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all">
                  <div className="w-full md:w-1/3 aspect-video bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-sm">
                    [Ảnh {post.id}]
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-primary bg-primary/5 hover:bg-primary/10">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-slate-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> {post.date}
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
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 italic text-slate-500">
                  Không tìm thấy bài viết nào trong chuyên mục này.
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredPosts.length > 0 && (
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

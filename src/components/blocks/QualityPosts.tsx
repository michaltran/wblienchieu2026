import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { qualityPosts } from "../../data/qualityPosts";

const ITEMS_PER_PAGE = 6;

export default function QualityPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(qualityPosts.length / ITEMS_PER_PAGE);

  const displayedPosts = qualityPosts.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Tin hoạt động chất lượng</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedPosts.map((post) => (
                <article key={post.id} className="group flex flex-col h-full bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-slate-100 relative overflow-hidden">
                        {/* Placeholder generic image since we don't have real thumbnails yet */}
                         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-200 flex items-center justify-center text-slate-300">
                             <span className="font-bold text-4xl opacity-20">TTYT</span>
                         </div>
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col">
                        <div className="flex gap-2 mb-3">
                            {post.tags.slice(0, 1).map(tag => (
                                <span key={tag} className="text-[10px] uppercase font-bold text-primary bg-blue-50 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            <Link to={`/bai-viet/${post.slug}`}>{post.title}</Link>
                        </h3>
                        
                        <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-1">
                            {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-xs text-slate-400 mt-auto pt-4 border-t border-slate-50">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.date).toLocaleDateString('vi-VN')}
                        </div>
                    </div>
                </article>
            ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm font-medium text-slate-600">
                    Trang {currentPage} / {totalPages}
                </span>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        )}
      </div>
    </section>
  );
}

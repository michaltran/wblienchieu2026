import { Link } from "react-router-dom";
import { posts } from "../../data/posts";
import { Calendar, ArrowRight } from "lucide-react";

export default function LatestPosts() {
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tin y tế mới</h2>
            <p className="text-slate-600">Cập nhật tin tức hoạt động và kiến thức y khoa bổ ích.</p>
          </div>
          <Link to="/bai-viet" className="hidden md:inline-flex items-center text-primary font-medium hover:underline">
            Xem tất cả bài viết <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-slate-200 rounded-2xl mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500 group-hover:scale-105 transition-transform duration-500">
                  [Ảnh minh họa bài viết]
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center text-xs text-slate-500 mb-3">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                {post.date}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                <Link to={`/bai-viet/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link to={`/bai-viet/${post.slug}`} className="text-sm font-bold text-primary inline-flex items-center hover:underline">
                Đọc tiếp
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/bai-viet" className="btn-outline">Xem tất cả</Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Loader2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { usePublicPosts } from "../../hooks/usePosts";

export default function ArticleSidebar() {
  const { data, isLoading } = usePublicPosts({ limit: 5 });
  const recentPosts = data?.items || [];
  
  const categories = [
    { name: "Tin tức - Sự kiện", slug: "tin-tuc-su-kien" },
    { name: "Y học thường thức", slug: "y-hoc-thuong-thuc" },
    { name: "Đào tạo - NCKH", slug: "dao-tao-nckh" }
  ];

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-900 mb-4">Tìm kiếm</h3>
        <div className="flex gap-2">
          <Input placeholder="Tìm bài viết..." />
          <Button size="icon">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-900 mb-4">Chuyên mục</h3>
        <ul className="space-y-2">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <Link to={`/bai-viet?category=${cat.slug}`} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-primary transition-colors text-sm">
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-900 mb-4">Bài viết mới</h3>
        {isLoading ? (
          <div className="flex justify-center py-4">
             <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="space-y-4">
            {recentPosts.map((post: any) => (
              <Link key={post.id} to={`/bai-viet/${post.slug}`} className="group block">
                <h4 className="text-sm font-medium text-slate-800 group-hover:text-primary line-clamp-2 mb-1 transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center text-xs text-slate-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(post.publishedAt || post.createdAt).toLocaleDateString('vi-VN')}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

       {/* Consultation CTA Widget */}
       <div className="bg-primary p-6 rounded-2xl text-white">
        <h3 className="font-bold text-lg mb-2">Cần tư vấn?</h3>
        <p className="text-white/80 text-sm mb-4">Để lại thông tin, chúng tôi sẽ liên hệ lại ngay.</p>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Họ tên của bạn" className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30" />
          <Input placeholder="Số điện thoại" className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30" />
          <Button variant="secondary" className="w-full text-primary hover:bg-white">Gửi yêu cầu</Button>
        </form>
      </div>
    </div>
  );
}

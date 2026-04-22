import { useParams, Link } from "react-router-dom";
import { healthPosts } from "../../data/healthPosts";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { Calendar, Tag, ArrowLeft, Clock } from "lucide-react";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import ArticleSidebar from "../../components/blocks/ArticleSidebar";

export default function HealthPostDetail() {
  const { slug } = useParams();
  const post = healthPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h2>
        <Link to="/hoat-dong/y-hoc-thuong-thuc">
          <Button>Quay lại danh sách</Button>
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Hoạt động", href: "#" },
    { label: "Y học thường thức", href: "/hoat-dong/y-hoc-thuong-thuc" },
    { label: post.categorySlug, href: `/hoat-dong/y-hoc-thuong-thuc?cat=${post.categorySlug}` },
    { label: post.title },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="container">
        <Breadcrumb items={breadcrumbs} className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <header className="mb-8 border-b border-slate-100 pb-8">
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-[#1E73BE]">{post.categorySlug}</Badge>
                </div>
                <h1 className="text-3xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString("vi-VN")}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime} phút đọc
                  </span>
                </div>
              </header>

              <div className="prose prose-slate max-w-none mb-10 text-slate-700">
                <p className="lead font-medium text-lg text-slate-900 mb-6">{post.excerpt}</p>
                
                {post.content ? (
                    post.content.map((block, idx) => {
                        if (block.type === 'h2') return <h2 key={idx} className="text-xl font-bold mt-8 mb-4 text-slate-900">{block.value}</h2>;
                        if (block.type === 'p') return <p key={idx} className="mb-4">{block.value}</p>;
                        if (block.type === 'ul' && Array.isArray(block.value)) {
                            return (
                                <ul key={idx} className="list-disc pl-5 mb-4 space-y-2">
                                    {block.value.map((li, i) => <li key={i}>{li}</li>)}
                                </ul>
                            );
                        }
                        return null;
                    })
                ) : (
                    <>
                        <p>
                        Thông tin chi tiết đang được cập nhật. Đây là bài viết mẫu mô phỏng giao diện hiển thị.
                        Nội dung y khoa sẽ được biên tập bởi đội ngũ chuyên gia của TTYT Liên Chiểu.
                        </p>
                        <div className="my-8 p-6 bg-blue-50 border-l-4 border-[#1E73BE] rounded-r-lg">
                        <h4 className="font-bold text-[#1E73BE] mb-2 font-sans text-lg">Lưu ý quan trọng</h4>
                        <p className="m-0 text-sm">
                            Các thông tin trên website chỉ mang tính chất tham khảo. Không thay thế cho việc chẩn đoán và điều trị y khoa.
                        </p>
                        </div>
                    </>
                )}
              </div>

              <div className="border-t border-slate-100 pt-8 mt-8">
                <div className="flex items-center justify-between">
                   <Link to="/hoat-dong/y-hoc-thuong-thuc" className="inline-flex items-center text-slate-500 hover:text-[#1E73BE] font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Quay lại danh sách
                   </Link>
                </div>
              </div>
            </article>

            {/* Related Posts */}
             <div className="mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Bài viết cùng chuyên mục</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {healthPosts
                    .filter(p => p.slug !== post.slug && p.categorySlug === post.categorySlug)
                    .slice(0, 2)
                    .map(related => (
                    <Link key={related.slug} to={`/hoat-dong/y-hoc-thuong-thuc/${related.slug}`} className="bg-white p-5 rounded-xl block border border-slate-100 hover:shadow-md transition-all group">
                      <div className="text-xs text-slate-500 mb-2">{new Date(related.date).toLocaleDateString('vi-VN')}</div>
                      <h4 className="font-bold text-slate-900 line-clamp-2 group-hover:text-[#1E73BE] transition-colors">{related.title}</h4>
                    </Link>
                 ))}
              </div>
            </div>
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

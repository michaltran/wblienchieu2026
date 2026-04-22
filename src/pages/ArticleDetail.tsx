import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";
import ArticleSidebar from "../components/blocks/ArticleSidebar";
import Breadcrumb from "../components/ui/Breadcrumb";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

export default function ArticleDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h2>
        <Link to="/bai-viet">
          <Button>Quay lại danh sách</Button>
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Bài viết", href: "/bai-viet" },
    { label: post.category, href: `/bai-viet?category=${post.category}` },
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
                  <Badge>{post.category}</Badge>
                </div>
                <h1 className="text-3xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    {post.category}
                  </span>
                </div>
              </header>

              <div className="prose prose-slate max-w-none mb-10 text-slate-700">
                <p className="lead font-medium text-lg text-slate-900 mb-6">{post.excerpt}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                  <h4 className="font-bold text-slate-900 mb-2 font-sans text-lg">Tóm tắt nhanh</h4>
                  <p className="m-0 text-sm">
                    Đây là nội dung tóm tắt quan trọng mà người đọc cần ghi nhớ. Box callout này giúp làm nổi bật thông tin chính.
                  </p>
                </div>
                <h3>Nội dung chính</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul>
                  <li>Điểm quan trọng thứ nhất cần lưu ý.</li>
                  <li>Điểm quan trọng thứ hai cần lưu ý.</li>
                  <li>Điểm quan trọng thứ ba cần lưu ý.</li>
                </ul>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-8 mt-8">
                <div className="flex items-center justify-between">
                   <Link to="/bai-viet" className="inline-flex items-center text-slate-500 hover:text-primary font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Quay lại danh sách
                   </Link>
                </div>
              </div>
            </article>

            {/* Related Posts */}
             <div className="mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Bài viết liên quan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2).map(related => (
                    <Link key={related.id} to={`/bai-viet/${related.slug}`} className="bg-white p-5 rounded-xl block border border-slate-100 hover:shadow-md transition-all">
                      <div className="text-xs text-slate-500 mb-2">{related.date}</div>
                      <h4 className="font-bold text-slate-900 line-clamp-2 hover:text-primary transition-colors">{related.title}</h4>
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

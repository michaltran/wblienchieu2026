import { useParams, Link } from "react-router-dom";
import { usePublicPostBySlug, usePublicPosts } from "../hooks/usePosts";
import ArticleSidebar from "../components/blocks/ArticleSidebar";
import Breadcrumb from "../components/ui/Breadcrumb";
import { Calendar, Tag, ArrowLeft, Loader2 } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

export default function ArticleDetail() {
  const { slug } = useParams();
  const { data: post, isLoading, isError } = usePublicPostBySlug(slug);

  const { data: relatedData } = usePublicPosts({
    limit: 3,
    categoryId: post?.categoryId || undefined,
  });
  const relatedPosts = relatedData?.items?.filter(p => p.id !== post?.id).slice(0, 2) || [];

  if (isLoading) {
    return (
      <div className="container py-20 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !post) {
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
    { label: post.category?.name || "Chưa phân loại", href: `/bai-viet?category=${post.category?.slug || ""}` },
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
                  <Badge>{post.category?.name || "Chưa phân loại"}</Badge>
                </div>
                <h1 className="text-3xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString('vi-VN')}
                  </span>
                  {post.tags && post.tags.length > 0 && (
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      {post.tags.join(", ")}
                    </span>
                  )}
                </div>
              </header>

              <div className="prose prose-slate max-w-none mb-10 text-slate-700">
                {post.excerpt && <p className="lead font-medium text-lg text-slate-900 mb-6">{post.excerpt}</p>}
                
                {/* DANGEROUSLY SET HTML FOR REAL CONTENT */}
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
            {relatedPosts.length > 0 && (
             <div className="mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Bài viết liên quan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {relatedPosts.map((related: any) => (
                    <Link key={related.id} to={`/bai-viet/${related.slug}`} className="bg-white p-5 rounded-xl block border border-slate-100 hover:shadow-md transition-all">
                      <div className="text-xs text-slate-500 mb-2">{new Date(related.publishedAt || related.createdAt).toLocaleDateString('vi-VN')}</div>
                      <h4 className="font-bold text-slate-900 line-clamp-2 hover:text-primary transition-colors">{related.title}</h4>
                    </Link>
                 ))}
              </div>
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

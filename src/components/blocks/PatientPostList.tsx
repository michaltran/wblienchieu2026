import { Link } from "react-router-dom";
import type { PatientPost } from "../../types/content";

interface PatientPostListProps {
  posts: PatientPost[];
  categorySlug: string; // e.g., 'vaccine'
}

export default function PatientPostList({ posts, categorySlug }: PatientPostListProps) {
  if (posts.length === 0) {
    return <div className="text-slate-500 text-center py-10">Chưa có bài viết nào trong mục này.</div>;
  }

  return (
    <div className="flex flex-col">
      {posts.map((post) => {
        const rawDate = post.date || post.createdAt;
        const displayDate = rawDate ? new Date(rawDate).toLocaleDateString('vi-VN') : '';
        return (
          <div key={post.slug} className="group py-5 first:pt-0 border-b border-slate-100 last:border-0 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <div className="flex-1">
                  <Link
                      to={`/nguoi-benh/${categorySlug}/${post.slug}`}
                      className="text-base sm:text-lg font-bold text-slate-800 hover:text-[#1E73BE] hover:underline decoration-1 underline-offset-4 transition-colors leading-snug block mb-2"
                  >
                      {post.title}
                  </Link>
                  {post.excerpt && (
                      <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                      </p>
                  )}
              </div>
              {displayDate && (
                <div className="text-xs text-slate-400 font-medium whitespace-nowrap shrink-0 pt-1">
                    {displayDate}
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
}


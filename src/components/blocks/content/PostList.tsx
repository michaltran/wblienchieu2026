import { Link } from "react-router-dom";
import { Calendar, Download, ArrowRight } from "lucide-react";
import type { ContentPost } from "../../../types/content";

interface PostListProps {
  posts: ContentPost[];
  baseUrl: string;
}

export default function PostList({ posts, baseUrl }: PostListProps) {
  if (posts.length === 0) {
      return (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-500">Không tìm thấy bài viết nào.</p>
          </div>
      );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => {
        const displayDate = post.date ?? post.createdAt?.slice(0, 10);
        const firstTag = (post.tags ?? [])[0];
        return (
          <div key={post.slug} className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
               <div className="flex-1">
                   <div className="flex items-center gap-3 mb-2">
                       <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider group-hover:bg-blue-50 group-hover:text-[#1E73BE] transition-colors">
                           {firstTag}
                       </span>
                       <span className="text-xs text-slate-400 flex items-center gap-1">
                           <Calendar className="w-3 h-3" /> {displayDate}
                       </span>
                   </div>

                   <Link to={`${baseUrl}/${post.slug}`} className="block">
                       <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1E73BE] transition-colors">
                           {post.title}
                       </h3>
                       <p className="text-slate-600 text-sm line-clamp-2 md:line-clamp-1 mb-4">
                           {post.excerpt}
                       </p>
                   </Link>

                   {post.fileUrl ? (
                       <div className="flex gap-2">
                           <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-[#1E73BE] hover:text-white hover:border-[#1E73BE] transition-colors group/btn">
                               <Download className="w-3.5 h-3.5" />
                               Tải tài liệu đính kèm
                           </button>
                       </div>
                   ) : (
                      <Link to={`${baseUrl}/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-[#1E73BE] hover:underline">
                          Xem chi tiết <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                   )}
               </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

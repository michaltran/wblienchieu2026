import { Link } from "react-router-dom";
import type { HealthPost } from "../../data/healthPosts";
import { Clock, ArrowRight, User } from "lucide-react";
import { cn } from "../../lib/cn";

interface Props {
  post: HealthPost;
  compact?: boolean;
}

export default function HealthPostCard({ post, compact }: Props) {
  return (
    <div className={cn(
        "group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full",
        compact ? "flex-row h-auto min-h-[120px]" : ""
    )}>
        {/* Cover Image */}
        <div className={cn(
            "relative overflow-hidden bg-slate-100 shrink-0",
            compact ? "w-1/3" : "aspect-[16/10]"
        )}>
             <img 
                 src={post.cover} 
                 alt={post.title}
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 loading="lazy"
             />
             <div className="absolute top-3 left-3">
                 <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#1E73BE] shadow-sm">
                     {post.categorySlug}
                 </span>
             </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
            <h3 className={cn(
                "font-bold text-slate-900 group-hover:text-[#1E73BE] transition-colors leading-snug mb-3",
                compact ? "text-base line-clamp-2" : "text-xl line-clamp-2"
            )}>
                <Link to={`/hoat-dong/y-hoc-thuong-thuc/${post.slug}`}>
                    {post.title}
                </Link>
            </h3>

            {!compact && (
                <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">
                    {post.excerpt}
                </p>
            )}

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                 <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                     <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                     <span className="flex items-center gap-1">
                         <Clock className="w-3 h-3" /> {post.readTime}p
                     </span>
                 </div>
                 
                 {!compact && (
                     <Link 
                        to={`/hoat-dong/y-hoc-thuong-thuc/${post.slug}`} 
                        className="text-xs font-bold text-[#1E73BE] flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                     >
                        Đọc tiếp <ArrowRight className="w-3 h-3" />
                     </Link>
                 )}
            </div>
        </div>
    </div>
  );
}

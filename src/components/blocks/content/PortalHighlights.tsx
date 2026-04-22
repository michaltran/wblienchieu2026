import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import InfoCard from "../../ui/InfoCard";
import type { ContentPost } from "../../../types/content";

interface PortalHighlightsProps {
  posts: ContentPost[];
  baseUrl: string;
}

export default function PortalHighlights({ posts, baseUrl }: PortalHighlightsProps) {
  if (!posts || posts.length === 0) return null;
  // Take top 5
  const items = posts.slice(0, 5);

  return (
    <InfoCard className="space-y-4">
      <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
        <span className="w-1 h-5 bg-red-500 rounded-full"></span>
        Thông báo nổi bật
      </h3>

      <div className="space-y-4">
        {items.map((post) => (
          <div key={post.slug} className="group pb-4 border-b border-slate-50 last:border-0 last:pb-0">
             <Link to={`${baseUrl}/${post.slug}`} className="block">
                <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#1E73BE] transition-colors line-clamp-2 mb-1.5 leading-snug">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                   <Calendar className="w-3 h-3" />
                   {post.date}
                </div>
             </Link>
          </div>
        ))}
      </div>
    </InfoCard>
  );
}

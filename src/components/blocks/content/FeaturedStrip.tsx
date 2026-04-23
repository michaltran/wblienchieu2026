import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import type { ContentPost } from "../../../types/content";

interface FeaturedStripProps {
  posts: ContentPost[];
  baseUrl: string; // e.g. /hoat-dong/dao-tao-va-nckh
}

export default function FeaturedStrip({ posts, baseUrl }: FeaturedStripProps) {
  if (posts.length === 0) return null;

  const mainPost = posts[0];
  const subPosts = posts.slice(1, 4);

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-[#1E73BE] rounded-full"></span>
        Tin nổi bật
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {/* Main Hero Post */}
        <Link to={`${baseUrl}/${mainPost.slug}`} className="group relative rounded-2xl overflow-hidden block bg-slate-900 aspect-video lg:aspect-auto">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
           {/* Placeholder Image Logic could go here, for now just colored bg */}
           <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700"></div> 
           
           <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full">
              <div className="flex gap-2 mb-3">
                  {(mainPost.tags ?? []).slice(0, 2).map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-[#1E73BE] text-white text-xs font-bold uppercase tracking-wider">{tag}</span>
                  ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
                  {mainPost.title}
              </h3>
              <p className="text-white/80 line-clamp-2 mb-4 hidden md:block">{mainPost.excerpt}</p>
              <div className="flex items-center text-white/60 text-sm gap-4">
                  <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {mainPost.date ?? mainPost.createdAt?.slice(0, 10)}
                  </span>
              </div>
           </div>
        </Link>

        {/* Sub Posts */}
        <div className="flex flex-col gap-4">
           {subPosts.map(post => (
               <Link key={post.slug} to={`${baseUrl}/${post.slug}`} className="group flex gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all h-full">
                    <div className="w-24 md:w-32 aspect-video bg-slate-100 rounded-lg shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-slate-200 group-hover:scale-110 transition-transform"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-1.5">
                            {(post.tags ?? []).slice(0,1).map(t => (
                                <span key={t} className="text-[10px] font-bold uppercase text-[#1E73BE] tracking-wide">{t}</span>
                            ))}
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 group-hover:text-[#1E73BE] transition-colors line-clamp-2">
                            {post.title}
                        </h4>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                             <Calendar className="w-3 h-3" /> {post.date ?? post.createdAt?.slice(0, 10)}
                        </span>
                    </div>
               </Link>
           ))}
        </div>
      </div>
    </div>
  );
}

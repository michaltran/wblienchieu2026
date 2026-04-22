import { Link } from "react-router-dom";
import type { HealthPost } from "../../data/healthPosts";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "../../lib/cn";

interface Props {
  posts: HealthPost[];
}

export default function HealthFeatured({ posts }: Props) {
  if (!posts || posts.length === 0) return null;

  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 4);

  return (
    <div className="py-12 border-b border-slate-100">
        <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Featured (8 cols) */}
            <div className="lg:col-span-8 group cursor-pointer relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Link to={`/hoat-dong/y-hoc-thuong-thuc/${mainPost.slug}`} className="block h-full">
                    <div className="absolute inset-0 bg-slate-200">
                        <img 
                            src={mainPost.cover} 
                            alt={mainPost.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <span className="inline-block px-3 py-1 bg-[#1E73BE] rounded-lg text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
                            Nổi bật
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4 group-hover:text-blue-200 transition-colors">
                            {mainPost.title}
                        </h2>
                        <p className="text-white/80 line-clamp-2 max-w-2xl text-lg font-light mb-6">
                            {mainPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium opacity-80">
                            <span>{new Date(mainPost.date).toLocaleDateString('vi-VN')}</span>
                            <span className="w-1 h-1 bg-white rounded-full" />
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" /> {mainPost.readTime} phút đọc
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Side Posts (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
                {sidePosts.map((post) => (
                    <Link 
                        key={post.slug} 
                        to={`/hoat-dong/y-hoc-thuong-thuc/${post.slug}`}
                        className="flex-1 flex gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                    >
                        <div className="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden shrink-0 relative">
                             <img 
                                src={post.cover} 
                                alt={post.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                             />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-[10px] font-bold text-[#1E73BE] uppercase tracking-wider mb-1">
                                {post.categorySlug}
                            </span>
                            <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-2 group-hover:text-[#1E73BE] transition-colors">
                                {post.title}
                            </h3>
                            <div className="text-xs text-slate-400 mt-auto flex items-center gap-2">
                                <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                            </div>
                        </div>
                    </Link>
                ))}
                
                {sidePosts.length < 3 && (
                    <div className="flex-1 flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                        <span className="text-slate-400 text-sm">Quảng cáo / Banner</span>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}

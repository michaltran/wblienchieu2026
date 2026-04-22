import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, PlayCircle, X } from "lucide-react";
import { videos } from "../data/videos";
import type { VideoCategory } from "../data/videos";
import Breadcrumb from "../components/ui/Breadcrumb";
import { cn } from "../lib/cn";

const categories: (VideoCategory | "Tất cả")[] = [
  "Tất cả",
  "Nội khoa",
  "Ngoại Khoa",
  "Chăm sóc sức khỏe sinh sản",
  "Dinh dưỡng",
  "Hoạt động của Trung tâm",
  "Dự phòng Truyền nhiễm"
];

const categoryColors: Record<VideoCategory, string> = {
  "Nội khoa": "bg-blue-50 text-blue-700",
  "Ngoại Khoa": "bg-emerald-50 text-emerald-700",
  "Chăm sóc sức khỏe sinh sản": "bg-pink-50 text-pink-700",
  "Dinh dưỡng": "bg-orange-50 text-orange-700",
  "Hoạt động của Trung tâm": "bg-purple-50 text-purple-700",
  "Dự phòng Truyền nhiễm": "bg-red-50 text-red-700"
};

export default function VideoLibrary() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "Tất cả">("Tất cả");
  const [sort, setSort] = useState<"newest" | "oldest" | "az">("newest");

  const filteredVideos = useMemo(() => {
    let result = videos;

    // Filter by Category
    if (activeCategory !== "Tất cả") {
      result = result.filter(v => v.category === activeCategory);
    }

    // Filter by Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(v => 
        v.title.toLowerCase().includes(q) || 
        v.description.toLowerCase().includes(q)
      );
    }

    // Sort
    result = [...result].sort((a, b) => {
        if (sort === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
        if (sort === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
        if (sort === "az") return a.title.localeCompare(b.title);
        return 0;
    });

    return result;
  }, [videos, activeCategory, search, sort]);

  const clearFilters = () => {
      setSearch("");
      setActiveCategory("Tất cả");
      setSort("newest");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-100 mb-8">
        <div className="container py-4">
          <Breadcrumb 
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Thư viện", href: "#" },
              { label: "Video", href: "/thu-vien/video" },
            ]} 
          />
        </div>
        
        <div className="container pb-12 pt-4 text-center max-w-2xl mx-auto">
           <h1 className="text-3xl md:text-4xl font-black text-[#1E73BE] uppercase tracking-tight mb-4 leading-tight">
             Thư viện Video
           </h1>
           <p className="text-slate-500 text-lg leading-relaxed">
             Tổng hợp các video tư vấn sức khỏe, hướng dẫn kỹ thuật và hoạt động nổi bật của Trung tâm Y tế.
           </p>
        </div>
      </div>

      <div className="container py-8">

        {/* Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-10">
           
           <div className="flex flex-col md:flex-row gap-6 mb-8">
               {/* Search */}
               <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text"
                    placeholder="Tìm video theo tiêu đề..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
               </div>

               {/* Sort */}
               <div className="w-full md:w-48">
                   <select 
                      value={sort}
                      onChange={(e) => setSort(e.target.value as any)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
                   >
                       <option value="newest">Mới nhất</option>
                       <option value="oldest">Cũ nhất</option>
                       <option value="az">Tiêu đề A → Z</option>
                   </select>
               </div>
           </div>

           {/* Category Pills */}
           <div>
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Danh mục</div>
               <div className="flex flex-wrap gap-2">
                   {categories.map((cat) => (
                       <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={cn(
                              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                              activeCategory === cat 
                                ? "bg-primary text-white shadow-md shadow-primary/25"
                                : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          )}
                       >
                           {cat}
                       </button>
                   ))}
               </div>
           </div>
        </div>
        
        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
            <div className="text-slate-600 font-medium">
                Tìm thấy <span className="text-primary font-bold">{filteredVideos.length}</span> video
            </div>
        </div>

        {/* Grid */}
        {filteredVideos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video) => (
                    <div key={video.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all group">
                        {/* Thumbnail */}
                        <div className="relative aspect-video bg-slate-200 group-hover:opacity-90 transition-opacity">
                            {video.youtubeId ? (
                                <img 
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
                                    Chưa cập nhật video
                                </div>
                            )}
                            
                            {/* Play Icon Overlay */}
                            <a 
                                href={video.youtubeId ? `https://www.youtube.com/watch?v=${video.youtubeId}` : "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all cursor-pointer"
                            > 
                                <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                            <div className="flex gap-2 mb-3">
                                <span className={cn("text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide", categoryColors[video.category])}>
                                    {video.category}
                                </span>
                            </div>
                            
                            <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                <a href={video.youtubeId ? `https://www.youtube.com/watch?v=${video.youtubeId}` : "#"} target="_blank" rel="noreferrer">
                                    {video.title}
                                </a>
                            </h3>
                            
                            <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                                {video.description}
                            </p>
                            
                            <div className="flex items-center text-xs text-slate-400">
                                <span>{new Date(video.date).toLocaleDateString("vi-VN")}</span>
                                <span className="mx-2">•</span>
                                <span>{video.views?.toLocaleString()} lượt xem</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
                 <div className="inline-flex w-16 h-16 bg-slate-50 rounded-full items-center justify-center text-slate-300 mb-4">
                     <Search className="w-8 h-8" />
                 </div>
                 <h3 className="text-slate-900 font-bold text-lg mb-2">Không tìm thấy video nào</h3>
                 <p className="text-slate-500 mb-6">Thử thay đổi từ khóa hoặc bộ lọc của bạn.</p>
                 <button 
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-100 text-slate-700 font-medium rounded-full hover:bg-slate-200 transition-colors"
                 >
                     <X className="w-4 h-4" />
                     Xóa bộ lọc
                 </button>
            </div>
        )}

      </div>
    </div>
  );
}

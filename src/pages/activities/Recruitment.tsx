import { useState } from "react";
import PageShell from "../../components/layout/PageShell";
import ContentToolbar from "../../components/blocks/content/ContentToolbar";
import FeaturedStrip from "../../components/blocks/content/FeaturedStrip";
import PostList from "../../components/blocks/content/PostList";
import SimplePagination from "../../components/ui/SimplePagination";
import { recruitmentPosts } from "../../data/recruitmentPosts";
import { filterByQuery, filterByTag, sortByDate, paginate } from "../../lib/content/listing";
import { Users } from "lucide-react";
import PortalQuickContact from "../../components/blocks/content/PortalQuickContact";
import PortalHighlights from "../../components/blocks/content/PortalHighlights";
import PortalDownloads from "../../components/blocks/content/PortalDownloads";
import PortalTags from "../../components/blocks/content/PortalTags";
import { getDownloads } from "../../data/portalDownloads";

export default function Recruitment() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  let data = filterByQuery(recruitmentPosts, query);
  data = filterByTag(data, tag);
  data = sortByDate(data, sort);
  const total = data.length;
  const paginatedData = paginate(data, pageSize, page);

  const allTags = Array.from(new Set(recruitmentPosts.flatMap(p => p.tags)));
  const downloads = getDownloads("tuyen-dung");

  const breadcrumbs = [
    { label: "Hoạt động", href: "#" },
    { label: "Tuyển dụng" }
  ];

  return (
    <PageShell 
      title="Tuyển dụng nhân sự"
      subtitle="Cơ hội nghề nghiệp và phát triển sự nghiệp tại Trung tâm Y tế Khu vực Liên Chiểu."
      breadcrumbs={breadcrumbs}
      rightSlot={
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-50 text-[#1E73BE] rounded-full flex items-center justify-center">
                 <Users className="w-5 h-5" />
             </div>
             <div>
                 <p className="text-xs text-slate-500 font-bold uppercase">Phòng Tổ chức cán bộ</p>
                 <p className="font-bold text-slate-900">0236 3123 456</p>
             </div>
        </div>
      }
      className="py-6 md:py-10"
    >
      <FeaturedStrip posts={recruitmentPosts.filter(p => p.featured)} baseUrl="/hoat-dong/tuyen-dung" />

      <ContentToolbar 
        onSearch={setQuery}
        onFilterTag={setTag}
        onSort={setSort}
        tags={allTags}
        activeTag={tag}
        totalResults={total}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <main className="lg:col-span-8">
              <PostList posts={paginatedData} baseUrl="/hoat-dong/tuyen-dung" />
              
              <div className="mt-8">
                <SimplePagination currentPage={page} totalPages={Math.ceil(total / pageSize)} onPageChange={setPage} />
              </div>
          </main>

          <aside className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">
                 <PortalQuickContact />
                 <PortalDownloads items={downloads} />
                 <PortalHighlights posts={recruitmentPosts} baseUrl="/hoat-dong/tuyen-dung" />
                 <PortalTags tags={allTags} activeTag={tag} onTagClick={setTag} />
              </div>
          </aside>
      </div>
    </PageShell>
  );
}

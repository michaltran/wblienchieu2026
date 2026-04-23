import { useState } from "react";
import PageShell from "../../components/layout/PageShell";
import ContentToolbar from "../../components/blocks/content/ContentToolbar";
import FeaturedStrip from "../../components/blocks/content/FeaturedStrip";
import PostList from "../../components/blocks/content/PostList";
import SimplePagination from "../../components/ui/SimplePagination";
import PortalQuickContact from "../../components/blocks/content/PortalQuickContact";
import PortalHighlights from "../../components/blocks/content/PortalHighlights";
import PortalTags from "../../components/blocks/content/PortalTags";
import { usePublicPostsList } from "../../hooks/usePublicPosts";
import { Users, Loader2 } from "lucide-react";

const PAGE_SIZE = 10;
const BASE_URL = "/hoat-dong/tuyen-dung";

export default function Recruitment() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);

  const { data, isLoading } = usePublicPostsList({
    type: 'recruitment',
    search: query || undefined,
    tag: tag || undefined,
    page,
    limit: PAGE_SIZE,
  });

  const posts = data?.items || [];
  const total = data?.total || 0;
  const totalPages = data?.totalPages || 1;
  const allTags = Array.from(new Set(posts.flatMap((p: any) => p.tags || [])));
  const featuredPosts = posts.filter((p: any) => p.isFeatured);

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
      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#1E73BE]" />
        </div>
      ) : (
        <>
          <FeaturedStrip posts={featuredPosts} baseUrl={BASE_URL} />

          <ContentToolbar
            onSearch={(q) => { setQuery(q); setPage(1); }}
            onFilterTag={(t) => { setTag(t); setPage(1); }}
            onSort={setSort}
            tags={allTags}
            activeTag={tag}
            totalResults={total}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            <main className="lg:col-span-8">
              <PostList posts={posts} baseUrl={BASE_URL} />
              <div className="mt-8">
                <SimplePagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
              </div>
            </main>

            <aside className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">
                <PortalQuickContact />
                <PortalHighlights posts={posts} baseUrl={BASE_URL} />
                <PortalTags tags={allTags} activeTag={tag} onTagClick={(t) => { setTag(t); setPage(1); }} />
              </div>
            </aside>
          </div>
        </>
      )}
    </PageShell>
  );
}

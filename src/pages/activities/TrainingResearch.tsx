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
import { Loader2 } from "lucide-react";

const PAGE_SIZE = 10;
const BASE_URL = "/hoat-dong/dao-tao-nckh";

export default function TrainingResearch() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);

  const { data, isLoading } = usePublicPostsList({
    type: 'training',
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
    { label: "Đào tạo & NCKH" }
  ];

  return (
    <PageShell
      title="Đào tạo & Nghiên cứu Khoa học"
      subtitle="Cập nhật thông tin về các chương trình đào tạo, hội thảo chuyên môn và hoạt động nghiên cứu khoa học tại Trung tâm."
      breadcrumbs={breadcrumbs}
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

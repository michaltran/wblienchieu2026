import { useState } from "react";
import PageShell from "../../components/layout/PageShell";
import ContentToolbar from "../../components/blocks/content/ContentToolbar";
import FeaturedStrip from "../../components/blocks/content/FeaturedStrip";
import PostList from "../../components/blocks/content/PostList";
import SimplePagination from "../../components/ui/SimplePagination";
import { trainingResearchPosts } from "../../data/trainingResearchPosts";
import { filterByQuery, filterByTag, sortByDate, paginate } from "../../lib/content/listing";
import PortalQuickContact from "../../components/blocks/content/PortalQuickContact";
import PortalHighlights from "../../components/blocks/content/PortalHighlights";
import PortalDownloads from "../../components/blocks/content/PortalDownloads";
import PortalTags from "../../components/blocks/content/PortalTags";
import { getDownloads } from "../../data/portalDownloads";

export default function TrainingResearch() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Derive Data
  let data = filterByQuery(trainingResearchPosts, query);
  data = filterByTag(data, tag);
  data = sortByDate(data, sort);
  const total = data.length;
  const paginatedData = paginate(data, pageSize, page);

  const allTags = Array.from(new Set(trainingResearchPosts.flatMap(p => p.tags)));
  const downloads = getDownloads("dao-tao-nckh");

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
      <FeaturedStrip posts={trainingResearchPosts.filter(p => p.featured)} baseUrl="/hoat-dong/dao-tao-nckh" />
      
      <ContentToolbar 
        onSearch={setQuery}
        onFilterTag={setTag}
        onSort={setSort}
        tags={allTags}
        activeTag={tag}
        totalResults={total}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Main Content */}
          <main className="lg:col-span-8">
              <PostList posts={paginatedData} baseUrl="/hoat-dong/dao-tao-nckh" />
              
              <div className="mt-8">
                <SimplePagination currentPage={page} totalPages={Math.ceil(total / pageSize)} onPageChange={setPage} />
              </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">
                  <PortalQuickContact />
                  <PortalDownloads items={downloads} />
                  <PortalHighlights posts={trainingResearchPosts} baseUrl="/hoat-dong/dao-tao-nckh" />
                  <PortalTags tags={allTags} activeTag={tag} onTagClick={setTag} />
              </div>
          </aside>
      </div>
    </PageShell>
  );
}

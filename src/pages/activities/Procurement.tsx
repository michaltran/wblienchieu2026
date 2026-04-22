import { useState } from "react";
import PageShell from "../../components/layout/PageShell";
import ContentToolbar from "../../components/blocks/content/ContentToolbar";
import FeaturedStrip from "../../components/blocks/content/FeaturedStrip";
import PostList from "../../components/blocks/content/PostList";
import SimplePagination from "../../components/ui/SimplePagination";
import { procurementPosts } from "../../data/procurementPosts";
import { filterByQuery, filterByTag, sortByDate, paginate } from "../../lib/content/listing";
import PortalQuickContact from "../../components/blocks/content/PortalQuickContact";
import PortalHighlights from "../../components/blocks/content/PortalHighlights";
import PortalDownloads from "../../components/blocks/content/PortalDownloads";
import PortalTags from "../../components/blocks/content/PortalTags";
import { getDownloads } from "../../data/portalDownloads";

export default function Procurement() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  let data = filterByQuery(procurementPosts, query);
  data = filterByTag(data, tag);
  data = sortByDate(data, sort);
  const total = data.length;
  const paginatedData = paginate(data, pageSize, page);

  const allTags = Array.from(new Set(procurementPosts.flatMap(p => p.tags)));
  const downloads = getDownloads("dau-thau-mua-sam");

  const breadcrumbs = [
    { label: "Hoạt động", href: "#" },
    { label: "Đấu thầu mua sắm" }
  ];

  return (
    <PageShell 
      title="Đấu thầu & Mua sắm"
      subtitle="Công khai, minh bạch các thông tin về kế hoạch lựa chọn nhà thầu và kết quả đấu thầu trang thiết bị y tế."
      breadcrumbs={breadcrumbs}
      className="py-6 md:py-10"
    >
      <FeaturedStrip posts={procurementPosts.filter(p => p.featured)} baseUrl="/hoat-dong/dau-thau-mua-sam" />
      
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
              <PostList posts={paginatedData} baseUrl="/hoat-dong/dau-thau-mua-sam" />
              
              <div className="mt-8">
                <SimplePagination currentPage={page} totalPages={Math.ceil(total / pageSize)} onPageChange={setPage} />
              </div>
          </main>

          <aside className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">
                 <PortalQuickContact />
                 <PortalDownloads items={downloads} />
                 <PortalHighlights posts={procurementPosts} baseUrl="/hoat-dong/dau-thau-mua-sam" />
                 <PortalTags tags={allTags} activeTag={tag} onTagClick={setTag} />
              </div>
          </aside>
      </div>
    </PageShell>
  );
}

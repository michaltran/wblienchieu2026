import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ST } from "../../styles/specialtyTokens";
import { healthCategories } from "../../data/healthCategories";
import { healthPosts } from "../../data/healthPosts";
import { filterHealthPosts, paginatePosts } from "../../lib/healthFilters";

// Components
import HealthHero from "../../components/blocks/HealthHero";
import HealthFeatured from "../../components/blocks/HealthFeatured";
import HealthCategoryPanel from "../../components/blocks/HealthCategoryPanel";
import HealthToolbar from "../../components/blocks/HealthToolbar";
import HealthPostGrid from "../../components/blocks/HealthPostGrid";
import HealthPagination from "../../components/blocks/HealthPagination";

// Layouts
import IntroLayout from "../../components/layout/IntroLayout"; // Assuming generic layout exists

const POSTS_PER_PAGE = 8;

export default function HealthKnowledge() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State from URL or defauls
  const categorySlug = searchParams.get("cat") || "tong-hop";
  const searchQuery = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const sortBy = (searchParams.get("sort") as any) || "newest";

  // Update URL helper
  const updateParams = (newParams: Record<string, any>) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([k, v]) => {
      if (v === null || v === undefined || v === "") {
        next.delete(k);
      } else {
        next.set(k, String(v));
      }
    });
    setSearchParams(next);
    // Reset page on filter change
    if (!newParams.page && (newParams.cat || newParams.q)) {
        next.set("page", "1");
        setSearchParams(next);
    }
  };

  // Filter Data
  const filteredPosts = filterHealthPosts(healthPosts, {
      categorySlug,
      searchQuery,
      sortBy
  });
  
  const { data: pagePosts, totalPages } = paginatePosts(filteredPosts, page, POSTS_PER_PAGE);

  // Derived
  const activeCategory = healthCategories.find(c => c.slug === categorySlug);
  const featuredPosts = healthPosts.filter(p => p.featured).slice(0, 4);

  // Creating a dedicated event listener for Hero chips
  useEffect(() => {
    const handleSelectCategory = (e: CustomEvent<string>) => {
        updateParams({ cat: e.detail, page: 1 });
        const el = document.getElementById("main-content");
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('select-health-category' as any, handleSelectCategory);
    return () => window.removeEventListener('select-health-category' as any, handleSelectCategory);
  }, [searchParams]);

  return (
    <div className="bg-white min-h-screen font-oswald text-slate-800">
      
      <main>
          {/* 1. Hero */}
          <HealthHero onSearch={(q) => updateParams({ q, page: 1 })} />

          <div className={ST.container}>
              
              {/* 2. Featured (Only show on 'tong-hop' or no search) */}
              {!searchQuery && categorySlug === 'tong-hop' && (
                  <HealthFeatured posts={featuredPosts} />
              )}

              {/* 3. Main Content: 2-Col Layout */}
              <div id="main-content" className="py-12 md:py-16 grid lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left: Category Panel (Sticky) - 4 Cols */}
                  <div className="lg:col-span-3">
                      <HealthCategoryPanel 
                          categories={healthCategories} 
                          activeSlug={categorySlug}
                          onSelect={(slug) => updateParams({ cat: slug, page: 1 })}
                      />
                  </div>

                  {/* Right: Posts Grid - 8 Cols */}
                  <div className="lg:col-span-9">
                      <HealthToolbar 
                          activeCategory={activeCategory}
                          totalResults={filteredPosts.length}
                          sortValue={sortBy}
                          onSortChange={(val) => updateParams({ sort: val })}
                      />

                      <HealthPostGrid posts={pagePosts} />

                      <HealthPagination 
                          currentPage={page}
                          totalPages={totalPages}
                          onPageChange={(p) => updateParams({ page: p })}
                      />
                  </div>

              </div>

              {/* 4. Bottom CTA */}
              <div className="pb-16">
                   <div className="bg-gradient-to-r from-[#1E73BE] to-sky-600 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
                       <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern.svg')] opacity-10" />
                       <div className="relative z-10">
                           <h2 className="text-3xl font-bold mb-4">Cần tư vấn chuyên sâu?</h2>
                           <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                               Nếu bạn có thắc mắc về các vấn đề sức khỏe, đừng ngần ngại liên hệ với đội ngũ y bác sĩ của chúng tôi.
                           </p>
                           <div className="flex flex-col sm:flex-row justify-center gap-4">
                               <a href="tel:0905453677" className="px-8 py-4 bg-white text-[#1E73BE] font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-all">
                                   Gọi 0905 453 677
                               </a>
                               <a href="/dang-ky-kham" className="px-8 py-4 bg-blue-600/30 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-blue-600/50 transition-all">
                                   Đăng ký khám
                               </a>
                           </div>
                       </div>
                   </div>
              </div>

          </div>
      </main>
    </div>
  );
}

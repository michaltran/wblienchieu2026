import { useParams, Link } from "react-router-dom";
import { drugs } from "../data/drugs";
import Breadcrumb from "../components/ui/Breadcrumb";
import { Button } from "../components/ui/Button";
import { AlertTriangle, Phone, Loader2 } from "lucide-react";
import { usePublicPosts } from "../hooks/usePosts";

export default function DrugDetail() {
  const { slug } = useParams();
  const drug = drugs.find((d) => d.slug === slug);

  const { data: relatedData, isLoading: isLoadingPosts } = usePublicPosts({
    limit: 2,
  });
  const relatedPosts = relatedData?.items || [];

  if (!drug) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy thông tin thuốc</h2>
        <Link to="/thuoc">
          <Button>Quay lại danh mục</Button>
        </Link>
      </div>
    );
  }

  const sections = [
    { id: "dang-bao-che", title: "Dạng bào chế - Biệt dược", content: drug.formBrand },
    { id: "nhom-thuoc", title: "Nhóm thuốc - Tác dụng", content: drug.groupEffect },
    { id: "chi-dinh", title: "Chỉ định", list: drug.indications },
    { id: "chong-chi-dinh", title: "Chống chỉ định", list: drug.contraindications },
    { id: "than-trong", title: "Thận trọng", list: drug.cautions },
    { id: "tac-dung-phu", title: "Tác dụng không mong muốn", list: drug.adverseEffects },
    { id: "lieu-dung", title: "Liều và cách dùng", list: drug.dosage },
    { id: "chu-y", title: "Chú ý khi sử dụng", list: drug.notes },
    { id: "tai-lieu", title: "Tài liệu tham khảo", list: drug.references },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="container">
        <Breadcrumb 
          items={[
            { label: "Tra cứu thuốc", href: "/thuoc" },
            { label: drug.name }
          ]} 
          className="mb-8" 
        />

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl">
              {drug.letter}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900">{drug.name}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Scrollspy / Navigation */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="font-bold text-slate-900 mb-4 px-2">Mục lục</h3>
               <nav className="flex flex-col space-y-1">
                 {sections.map(section => {
                   // Only show link if content exists
                   if (!section.content && (!section.list || section.list.length === 0)) return null;
                   return (
                     <a 
                       key={section.id} 
                       href={`#${section.id}`} 
                       className="text-sm py-2 px-3 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors block border-l-2 border-transparent hover:border-primary"
                     >
                       {section.title}
                     </a>
                   );
                 })}
               </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              {sections.map((section) => {
                const hasContent = section.content || (section.list && section.list.length > 0);
                if (!hasContent) return null;

                return (
                  <section key={section.id} id={section.id} className="mb-10 last:mb-0 scroll-mt-28">
                    <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-slate-100">
                      {section.title}
                    </h3>
                    <div className="text-slate-700 leading-relaxed">
                      {section.content && <p>{section.content}</p>}
                      {section.list && (
                        <ul className="list-disc pl-5 space-y-2">
                          {section.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex gap-4">
               <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
               <div>
                  <h4 className="font-bold text-amber-700 mb-1">Miễn trừ trách nhiệm</h4>
                  <p className="text-sm text-amber-800/80 mb-4">
                    Thông tin trên website chỉ mang tính chất tham khảo. Không thay thế cho việc chẩn đoán hoặc điều trị y khoa. 
                    Vui lòng liên hệ bác sĩ hoặc dược sĩ để được tư vấn chính xác.
                  </p>
                  <a href="tel:0905453677" className="inline-flex items-center text-sm font-bold text-amber-700 border border-amber-300 rounded-full px-4 py-2 hover:bg-amber-100">
                     <Phone className="w-4 h-4 mr-2" />
                     Tổng đài tư vấn: 0905453677
                  </a>
               </div>
            </div>
            
            {/* Related Posts */}
            <div className="mt-12">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Bài viết liên quan</h3>
               {isLoadingPosts ? (
                 <div className="flex justify-center py-4">
                   <Loader2 className="w-6 h-6 animate-spin text-primary" />
                 </div>
               ) : relatedPosts.length === 0 ? (
                 <div className="text-sm text-slate-500 italic">Chưa có bài viết nào.</div>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {relatedPosts.map((post: any) => (
                     <Link key={post.id} to={`/bai-viet/${post.slug}`} className="group bg-white p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                        <div className="text-xs text-primary font-bold mb-2 uppercase">{post.category?.name || 'Tin tức'}</div>
                        <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                     </Link>
                   ))}
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

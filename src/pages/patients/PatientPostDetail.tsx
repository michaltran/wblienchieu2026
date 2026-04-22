import { useParams } from "react-router-dom";
import PatientCategoryLayout from "../../components/layout/PatientCategoryLayout";
import { patientPosts } from "../../data/patientPosts";
import { patientCategories } from "../../data/patientCategories";
import { Calendar, User } from "lucide-react";

export default function PatientPostDetail() {
  const { slug } = useParams();
  
  // Find post
  const post = patientPosts.find(p => p.slug === slug);

  if (!post) {
      return <div className="p-20 text-center">Bài viết không tồn tại.</div>; 
  }

  // Find category
  const category = patientCategories.find(c => c.key === post.categoryKey);

  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Dành cho người bệnh", href: "#" },
    { label: category?.title || "Bài viết", href: category?.route },
    { label: post.title }, // Current page
  ];

  return (
    <PatientCategoryLayout
      title={category?.title || ""}
      description={category?.description}
      breadcrumbs={breadcrumbs}
    >
        <article className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
                <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('vi-VN')}
                </span>
                <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Ban biên tập
                </span>
            </div>

            {/* Render Content */}
            <div className="space-y-6 text-slate-800 leading-relaxed">
                {post.excerpt && (
                    <p className="font-semibold text-lg text-slate-600 bg-slate-50 p-4 rounded-xl border-l-4 border-[#1E73BE]">
                        {post.excerpt}
                    </p>
                )}
                
                {post.content ? (
                    post.content.map((block, idx) => {
                        if (block.type === 'h2') return <h2 key={idx} className="text-xl font-bold text-[#1E73BE] mt-8 mb-4">{block.value}</h2>;
                        if (block.type === 'p') return <p key={idx}>{block.value}</p>;
                        return null;
                    })
                ) : (
                    <>
                         <p>Nội dung đang được cập nhật...</p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                         <h2 className="text-xl font-bold text-[#1E73BE] mt-8 mb-4">1. Thông tin quan trọng</h2>
                         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                         <h2 className="text-xl font-bold text-[#1E73BE] mt-8 mb-4">2. Hướng dẫn chi tiết</h2>
                         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </>
                )}
            </div>
        </article>
    </PatientCategoryLayout>
  );
}

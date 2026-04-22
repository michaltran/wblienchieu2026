import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSavePost, usePublishPost } from "../../hooks/usePosts";
import { usePost } from "../../hooks/usePost";
import { useUploadImage } from "../../hooks/useUpload";
import { ArrowLeft, Save, Globe, Image as ImageIcon, Loader2 } from "lucide-react";
import type { PostType, PostStatus } from "../../lib/api/posts";
import FullPageLoader from "../../components/ui/FullPageLoader";

export default function AdminPostEditor() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === 'new';
  const navigate = useNavigate();

  const { data: post, isLoading: isLoadingPost } = usePost(isNew ? "" : id!);
  const saveMutation = useSavePost();
  const publishMutation = usePublishPost();
  const uploadMutation = useUploadImage();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    type: "news" as PostType,
    excerpt: "",
    content: "", // This would be rich text in a real app
    coverUrl: "",
    status: "draft" as PostStatus
  });

  // Sync data when loaded
  useEffect(() => {
    if (post) {
      setForm({
        title: post.title,
        slug: post.slug,
        type: post.type,
        excerpt: post.excerpt || "",
        content: post.content || "",
        coverUrl: post.coverUrl || "",
        status: post.status
      });
    }
  }, [post]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const savedPost = await saveMutation.mutateAsync({
        ...(isNew ? {} : { id }),
        ...form
      });
      if (isNew) {
        navigate(`/admin/posts/${savedPost.id}`);
      } else {
        alert("Lưu thành công!");
      }
    } catch (error) {
      alert("Có lỗi xảy ra khi lưu.");
    }
  };

  const handlePublishToggle = async () => {
    if (!id) return;
    try {
        await publishMutation.mutateAsync({ id, publish: form.status === 'draft' });
        // Optimistic update handled by hook, but we update status locally for UI responsiveness immediately if needed or wait for re-fetch
    } catch (error) {
        console.error(error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
          const res = await uploadMutation.mutateAsync(file);
          setForm(prev => ({ ...prev, coverUrl: res.url }));
      } catch (err) {
          alert("Upload failed");
      }
  };

  if (isLoadingPost && !isNew) return <FullPageLoader label="Đang tải dữ liệu bài viết..." className="h-[50vh] min-h-0 bg-transparent" />;

  return (
    <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
                <Link to="/admin/posts" className="p-2 hover:bg-slate-200 rounded-full transition"><ArrowLeft className="w-5 h-5"/></Link>
                <h1 className="text-2xl font-bold text-slate-800">{isNew ? "Tạo bài viết mới" : "Chỉnh sửa bài viết"}</h1>
                {!isNew && (
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${post?.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                        {post?.status}
                    </span>
                )}
            </div>
            <div className="flex gap-2">
                 {!isNew && (
                     <button
                        type="button" 
                        onClick={handlePublishToggle}
                        className={`px-4 py-2 border font-bold rounded-lg flex items-center gap-2 ${post?.status === 'published' ? 'border-orange-200 text-orange-600 hover:bg-orange-50' : 'border-green-200 text-green-600 hover:bg-green-50'}`}
                     >
                         <Globe className="w-4 h-4" /> {post?.status === 'published' ? 'Gỡ bài' : 'Xuất bản'}
                     </button>
                 )}
                 <button 
                   onClick={handleSave}
                   disabled={saveMutation.isPending}
                   className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center gap-2 disabled:opacity-70"
                 >
                     {saveMutation.isPending ? <Loader2 className="animate-spin w-4 h-4"/> : <Save className="w-4 h-4" />}
                     Lưu lại
                 </button>
            </div>
        </div>

        <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
                 {/* Title */}
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                     <div>
                         <label className="block text-sm font-bold text-slate-700 mb-1">Tiêu đề bài viết</label>
                         <input 
                           type="text" 
                           value={form.title}
                           onChange={e => setForm({...form, title: e.target.value})}
                           className="w-full px-4 py-2 text-lg font-medium border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                           placeholder="Nhập tiêu đề..."
                         />
                     </div>
                     <div>
                         <label className="block text-sm font-bold text-slate-700 mb-1">Slug (URL)</label>
                         <input 
                           type="text" 
                           value={form.slug}
                           onChange={e => setForm({...form, slug: e.target.value})}
                           className="w-full px-4 py-2 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm text-slate-600"
                           placeholder="tieu-de-bai-viet"
                         />
                     </div>
                     <div>
                         <label className="block text-sm font-bold text-slate-700 mb-1">Mô tả ngắn (Excerpt)</label>
                         <textarea 
                           rows={3}
                           value={form.excerpt}
                           onChange={e => setForm({...form, excerpt: e.target.value})}
                           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                           placeholder="Mô tả ngắn gọn về nội dung..."
                         />
                     </div>
                 </div>

                 {/* Content Editor Placeholder */}
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 min-h-[500px]">
                     <label className="block text-sm font-bold text-slate-700 mb-4">Nội dung chi tiết</label>
                     <textarea 
                        className="w-full h-[400px] border p-4 rounded-lg font-mono text-sm"
                        value={form.content}
                        onChange={e => setForm({...form, content: e.target.value})}
                        placeholder="<html> Viết nội dung ở đây hoặc tích hợp CKEditor/TinyMCE </html>"
                     />
                 </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                     <div>
                         <label className="block text-sm font-bold text-slate-700 mb-1">Danh mục</label>
                         <select 
                             value={form.type}
                             onChange={e => setForm({...form, type: e.target.value as PostType})}
                             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                         >
                             <option value="news">Tin tức</option>
                             <option value="health">Y học thường thức</option>
                             <option value="training">Đào tạo & NCKH</option>
                             <option value="procurement">Đấu thầu</option>
                             <option value="recruitment">Tuyển dụng</option>
                             <option value="adminReform">Cải cách hành chính</option>
                         </select>
                     </div>
                     
                     <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">Ảnh đại diện</label>
                         <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-slate-50 transition cursor-pointer relative overflow-hidden group">
                             <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageUpload} accept="image/*" />
                             {form.coverUrl ? (
                                 <img src={form.coverUrl} alt="Cover" className="w-full aspect-video object-cover rounded-md" />
                             ) : (
                                 <div className="py-8">
                                     <ImageIcon className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                                     <span className="text-sm text-slate-500 block">Click để tải ảnh lên</span>
                                     {uploadMutation.isPending && <span className="text-xs text-blue-500">Đang tải lên...</span>}
                                 </div>
                             )}
                         </div>
                     </div>
                 </div>
            </div>
        </form>
    </div>
  );
}

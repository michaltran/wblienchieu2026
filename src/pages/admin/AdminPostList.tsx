import { useState } from "react";
import { Link } from "react-router-dom";
import { usePosts, useDeletePost } from "../../hooks/usePosts";
import { Plus, Search, Edit, Trash2, Globe, EyeOff, FileText } from "lucide-react";
import type { PostType } from "../../lib/api/posts";
import LoadingLogo from "../../components/ui/LoadingLogo";

export default function AdminPostList() {
  const [page, setPage] = useState(1);
  const [type, setType] = useState<PostType | "">("");
  const [search, setSearch] = useState("");
  
  const { data, isLoading, isError } = usePosts({ page, limit: 10, type: type || undefined, search });
  const deleteMutation = useDeletePost();

  const handleDelete = async (id: string) => {
      if (confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
        await deleteMutation.mutateAsync(id);
      }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
           <div>
               <h2 className="text-2xl font-bold text-slate-800">Danh sách bài viết</h2>
               <p className="text-slate-500 text-sm">Quản lý toàn bộ nội dung website</p>
           </div>
           <Link to="/admin/posts/new" className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center gap-2">
               <Plus className="w-5 h-5" /> Thêm bài mới
           </Link>
       </div>

       {/* Toolbar */}
       <div className="flex flex-col md:flex-row gap-4 mb-6">
           <div className="relative flex-1">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
               <input 
                 type="text" 
                 placeholder="Tìm kiếm bài viết..." 
                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                 value={search}
                 onChange={e => setSearch(e.target.value)}
               />
           </div>
           <select 
             className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
             value={type}
             onChange={e => setType(e.target.value as PostType)}
           >
               <option value="">Tất cả danh mục</option>
               <option value="news">Tin tức</option>
               <option value="health">Y học thường thức</option>
               <option value="training">Đào tạo & NCKH</option>
               <option value="procurement">Đấu thầu</option>
               <option value="recruitment">Tuyển dụng</option>
               <option value="adminReform">Cải cách hành chính</option>
           </select>
       </div>

       {/* List */}
       {isLoading && <div className="py-20"><LoadingLogo variant="card" label="Đang tải danh sách..." /></div>}
       
       {isError && <div className="text-center py-20 text-red-500">Có lỗi xảy ra khi tải dữ liệu.</div>}

       {!isLoading && !isError && (
           <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                   <thead>
                       <tr className="border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                           <th className="py-3 font-semibold">Tiêu đề</th>
                           <th className="py-3 font-semibold w-32">Danh mục</th>
                           <th className="py-3 font-semibold w-32">Trạng thái</th>
                           <th className="py-3 font-semibold w-24">Ngày tạo</th>
                           <th className="py-3 font-semibold w-32 text-right">Hành động</th>
                       </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                       {data?.items.map(post => (
                           <tr key={post.id} className="hover:bg-slate-50">
                               <td className="py-4 pr-4">
                                   <div className="font-medium text-slate-900 line-clamp-1">{post.title}</div>
                                   <div className="text-xs text-slate-500 font-mono mt-1">{post.id}</div>
                               </td>
                               <td className="py-4">
                                   <span className="inline-block px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-bold uppercase">
                                       {post.type}
                                   </span>
                               </td>
                               <td className="py-4">
                                    {post.status === 'published' ? (
                                        <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded w-fit">
                                            <Globe className="w-3 h-3" /> Published
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-slate-500 text-xs font-bold bg-slate-100 px-2 py-1 rounded w-fit">
                                            <EyeOff className="w-3 h-3" /> Draft
                                        </span>
                                    )}
                               </td>
                               <td className="py-4 text-sm text-slate-500">
                                   {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                               </td>
                               <td className="py-4 text-right">
                                   <div className="flex items-center justify-end gap-2">
                                       <Link to={`/admin/posts/${post.id}`} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                                           <Edit className="w-4 h-4" />
                                       </Link>
                                       <button 
                                         onClick={() => handleDelete(post.id)}
                                         className="p-2 text-red-500 hover:bg-red-50 rounded"
                                         disabled={deleteMutation.isPending}
                                       >
                                           <Trash2 className="w-4 h-4" />
                                       </button>
                                   </div>
                               </td>
                           </tr>
                       ))}
                       {data?.items.length === 0 && (
                           <tr>
                               <td colSpan={5} className="text-center py-12 text-slate-500 flex flex-col items-center">
                                   <FileText className="w-12 h-12 text-slate-200 mb-2" />
                                   Không tìm thấy bài viết nào.
                               </td>
                           </tr>
                       )}
                   </tbody>
               </table>
           </div>
       )}

       {/* Pagination (Simple) */}
        <div className="mt-6 flex justify-between items-center">
             <button 
                disabled={page === 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                className="px-4 py-2 border rounded-lg disabled:opacity-50"
             >
                 Previous
             </button>
             <span className="text-sm text-slate-500">Page {page} of {data?.totalPages || 1}</span>
             <button 
                disabled={page === (data?.totalPages || 1)}
                onClick={() => setPage(p => p + 1)}
                className="px-4 py-2 border rounded-lg disabled:opacity-50"
             >
                 Next
             </button>
        </div>
    </div>
  );
}

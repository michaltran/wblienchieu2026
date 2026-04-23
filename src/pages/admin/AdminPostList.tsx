import { useState } from "react";
import { Link } from "react-router-dom";
import { usePosts, useDeletePost, usePublishPost } from "../../hooks/usePosts";
import { Plus, Search, Edit, Trash2, Globe, EyeOff, FileText, Filter } from "lucide-react";
import type { PostType } from "../../lib/api/posts";
import LoadingLogo from "../../components/ui/LoadingLogo";

// ============================================================
// Cấu hình type tabs — thêm type mới vào đây
// ============================================================
const POST_TYPES: { value: PostType | ""; label: string; color: string; bg: string }[] = [
  { value: "",             label: "Tất cả",            color: "text-slate-700",   bg: "bg-slate-100" },
  { value: "news",         label: "Tin tức",            color: "text-blue-700",    bg: "bg-blue-50" },
  { value: "health",       label: "Y học thường thức",  color: "text-green-700",   bg: "bg-green-50" },
  { value: "training",     label: "Đào tạo & NCKH",     color: "text-purple-700",  bg: "bg-purple-50" },
  { value: "procurement",  label: "Đấu thầu",           color: "text-orange-700",  bg: "bg-orange-50" },
  { value: "recruitment",  label: "Tuyển dụng",         color: "text-rose-700",    bg: "bg-rose-50" },
  { value: "adminReform",  label: "Cải cách HC",        color: "text-cyan-700",    bg: "bg-cyan-50" },
  { value: "other",        label: "Khác",               color: "text-slate-500",   bg: "bg-slate-100" },
];

const TYPE_LABEL: Record<string, { label: string; color: string; bg: string }> = Object.fromEntries(
  POST_TYPES.filter(t => t.value).map(t => [t.value, { label: t.label, color: t.color, bg: t.bg }])
);

export default function AdminPostList() {
  const [page, setPage] = useState(1);
  const [type, setType] = useState<PostType | "">("");
  const [status, setStatus] = useState<"" | "published" | "draft">("");
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = usePosts({
    page,
    limit: 15,
    type: type || undefined,
    status: status || undefined,
    search: search || undefined,
  });

  const deleteMutation = useDeletePost();
  const publishMutation = usePublishPost();

  const handleDelete = async (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
      await deleteMutation.mutateAsync(id);
    }
  };

  const handleTogglePublish = async (post: any) => {
    await publishMutation.mutateAsync({ id: post.id, publish: post.status !== 'published' });
  };

  // Reset page khi filter thay đổi
  const handleTypeChange = (v: PostType | "") => { setType(v); setPage(1); };
  const handleStatusChange = (v: "" | "published" | "draft") => { setStatus(v); setPage(1); };
  const handleSearch = (v: string) => { setSearch(v); setPage(1); };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Quản lý bài viết</h1>
          <p className="text-slate-500 text-sm mt-1">
            Tổng cộng <span className="font-bold text-slate-700">{data?.total ?? "..."}</span> bài viết
            {type && ` • Đang lọc: ${TYPE_LABEL[type]?.label}`}
          </p>
        </div>
        <Link
          to="/admin/posts/new"
          className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" /> Thêm bài mới
        </Link>
      </div>

      {/* Type Tabs */}
      <div className="flex flex-wrap gap-2">
        {POST_TYPES.map((t) => (
          <button
            key={t.value}
            onClick={() => handleTypeChange(t.value as PostType | "")}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
              type === t.value
                ? `${t.bg} ${t.color} border-current shadow-sm`
                : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Search + Status Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm tiêu đề bài viết..."
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            value={search}
            onChange={e => handleSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            className="px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
            value={status}
            onChange={e => handleStatusChange(e.target.value as any)}
          >
            <option value="">Tất cả trạng thái</option>
            <option value="published">Đã đăng</option>
            <option value="draft">Nháp</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {isLoading && (
          <div className="py-20 flex justify-center">
            <LoadingLogo variant="card" label="Đang tải danh sách..." />
          </div>
        )}

        {isError && (
          <div className="text-center py-20 text-red-500">Có lỗi xảy ra khi tải dữ liệu.</div>
        )}

        {!isLoading && !isError && (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr className="text-slate-500 text-xs uppercase tracking-wider">
                  <th className="px-4 py-3 font-semibold">Bài viết</th>
                  <th className="px-4 py-3 font-semibold w-36">Loại</th>
                  <th className="px-4 py-3 font-semibold w-28">Trạng thái</th>
                  <th className="px-4 py-3 font-semibold w-28">Ngày tạo</th>
                  <th className="px-4 py-3 font-semibold w-36 text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data?.items.map(post => {
                  const typeInfo = TYPE_LABEL[post.type] || { label: post.type, color: "text-slate-600", bg: "bg-slate-100" };
                  return (
                    <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-900 line-clamp-1 max-w-md">{post.title}</div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5 truncate max-w-xs">/{post.slug}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${typeInfo.bg} ${typeInfo.color}`}>
                          {typeInfo.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleTogglePublish(post)}
                          title="Nhấn để đổi trạng thái"
                          disabled={publishMutation.isPending}
                          className="cursor-pointer"
                        >
                          {post.status === 'published' ? (
                            <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2.5 py-1 rounded-full border border-green-200 hover:bg-green-100 transition-colors">
                              <Globe className="w-3 h-3" /> Đã đăng
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-slate-500 text-xs font-bold bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 hover:bg-slate-200 transition-colors">
                              <EyeOff className="w-3 h-3" /> Nháp
                            </span>
                          )}
                        </button>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-500">
                        {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <Link
                            to={`/admin/posts/${post.id}`}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Chỉnh sửa"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            disabled={deleteMutation.isPending}
                            title="Xóa"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {data?.items.length === 0 && (
                  <tr>
                    <td colSpan={5}>
                      <div className="text-center py-16 text-slate-400 flex flex-col items-center gap-3">
                        <FileText className="w-12 h-12 text-slate-200" />
                        <span>Không có bài viết nào{type ? ` trong mục "${TYPE_LABEL[type]?.label}"` : ""}.</span>
                        <Link to="/admin/posts/new" className="text-blue-600 hover:underline text-sm font-medium">
                          + Thêm bài viết mới
                        </Link>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {(data?.totalPages ?? 1) > 1 && (
          <div className="px-4 py-4 border-t border-slate-100 flex justify-between items-center">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium disabled:opacity-40 hover:bg-slate-50 transition-colors"
            >
              ← Trước
            </button>
            <span className="text-sm text-slate-500">
              Trang <span className="font-bold text-slate-700">{page}</span> / {data?.totalPages || 1}
            </span>
            <button
              disabled={page === (data?.totalPages || 1)}
              onClick={() => setPage(p => p + 1)}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium disabled:opacity-40 hover:bg-slate-50 transition-colors"
            >
              Sau →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

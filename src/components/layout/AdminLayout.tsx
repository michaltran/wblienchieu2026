import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LogOut } from "lucide-react";
import FullPageLoader from "../ui/FullPageLoader";

export default function AdminLayout() {
  const { user, isLoading, logout } = useAuth();
  
  if (isLoading) {
    return <FullPageLoader label="Đang xác thực..." />;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
             <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded">ADMIN</div>
             <nav className="flex items-center gap-1 ml-4 border-l border-slate-200 pl-4 h-8">
                <a href="/admin/analytics" className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded transition-colors">Tổng quan</a>
                <a href="/admin/posts" className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded transition-colors">Bài viết</a>
             </nav>
        <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-600">Xin chào, {user.name}</span>
            <button 
                onClick={() => logout()}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-500 hover:text-red-600 transition-colors"
                title="Đăng xuất"
            >
                <LogOut className="w-5 h-5" />
            </button>
        </div>
      </header>
      <main className="container max-w-7xl mx-auto py-8 px-4">
         <Outlet />
      </main>
    </div>
  );
}

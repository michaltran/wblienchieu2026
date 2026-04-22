import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "../../lib/cn";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageShellProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  rightSlot?: ReactNode;
  children: ReactNode;
  className?: string; // Content container class
}

export default function PageShell({ 
  title, 
  subtitle, 
  breadcrumbs = [], 
  rightSlot, 
  children,
  className 
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-100 pb-12 pt-8">
        <div className="container max-w-6xl px-4 md:px-6 mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link to="/" className="hover:text-[#1E73BE] transition-colors flex items-center gap-1">
               <Home className="w-3.5 h-3.5" />
               Trang chủ
            </Link>
            {breadcrumbs.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                {item.href ? (
                  <Link to={item.href} className="hover:text-[#1E73BE] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-slate-900 font-medium">{item.label}</span>
                )}
              </div>
            ))}
          </nav>

          {/* Header Content */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3 text-balance">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-slate-500 font-medium leading-relaxed text-balance">
                  {subtitle}
                </p>
              )}
            </div>
            {rightSlot && (
              <div className="shrink-0">
                {rightSlot}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn("container max-w-6xl px-4 md:px-6 mx-auto py-10", className)}>
        {children}
      </div>
    </div>
  );
}

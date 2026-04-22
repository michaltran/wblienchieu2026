import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface IntroHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  chips?: string[];
}

export default function IntroHero({ title, subtitle, breadcrumbs, chips }: IntroHeroProps) {
  return (
    <div className="bg-gradient-to-b from-blue-50/50 to-white pt-8 pb-10 border-b border-slate-100 mb-8">
      <div className="container max-w-6xl px-4 md:px-0 mx-auto">
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

        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-600 font-medium leading-relaxed text-balance">
              {subtitle}
            </p>
          )}
          
          {chips && chips.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {chips.map((chip, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-blue-100 text-[#1E73BE] text-xs font-bold uppercase tracking-wide">
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

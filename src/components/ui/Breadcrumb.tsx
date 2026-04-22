import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex items-center text-sm text-slate-500", className)}>
      <Link to="/" className="hover:text-primary transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2" />
          {item.href ? (
            <Link to={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-slate-900 line-clamp-1 max-w-[200px] md:max-w-xs">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

import type { ReactNode } from "react";
import Breadcrumb from "../ui/Breadcrumb";

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
  children: ReactNode;
}

export default function ContentHubPage({ title, subtitle, breadcrumbs, children }: Props) {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      {/* Hero Section */}
      <div className="bg-blue-50/50 border-b border-slate-100 py-12 md:py-16">
        <div className="container">
          <Breadcrumb items={breadcrumbs} className="mb-6" />
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container -mt-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10 min-h-[400px]">
          {children}
        </div>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import Breadcrumb from "../ui/Breadcrumb";
import PatientSidebar from "../blocks/PatientSidebar";

interface PatientCategoryLayoutProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
  children: ReactNode;
}

export default function PatientCategoryLayout({ title, description, breadcrumbs, children }: PatientCategoryLayoutProps) {
  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20">
      {/* Top Header Region */}
      <div className="bg-white border-b border-slate-100">
          <div className="container py-8">
               <Breadcrumb items={breadcrumbs} className="mb-4" />
               <div className="max-w-4xl">
                   <h1 className="text-2xl md:text-4xl font-black text-[#1E73BE] mb-3 uppercase leading-tight">
                       {title}
                   </h1>
                   {description && (
                       <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-slate-200 pl-4">
                           {description}
                       </p>
                   )}
               </div>
          </div>
      </div>

      {/* Main Content Area */}
      <div className="container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Content List */}
              <div className="lg:col-span-8">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 min-h-[500px]">
                      {children}
                  </div>
              </div>

              {/* Right Column: Sidebar */}
              <div className="lg:col-span-4">
                  <PatientSidebar />
              </div>
          </div>
      </div>
    </div>
  );
}

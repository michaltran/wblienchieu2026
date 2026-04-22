import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { parseDoctorSlug } from "../lib/doctorSlug";
import DoctorProfileHero from "../components/blocks/DoctorProfileHero";
import DoctorProfileTabs from "../components/blocks/DoctorProfileTabs";
import DoctorProfileSections from "../components/blocks/DoctorProfileSections";
import DoctorCard from "../components/blocks/DoctorCard";
import Breadcrumb from "../components/ui/Breadcrumb";
import { usePublicDoctorBySlug, usePublicDoctors } from "../hooks/useHospital";
import { Loader2 } from "lucide-react";

export default function DoctorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState("overview");

  // Parse Slug
  const { slug: baseSlug } = parseDoctorSlug(slug || "");
  
  const { data: doctor, isLoading, error } = usePublicDoctorBySlug(baseSlug || slug);
  const { data: allDoctorsData } = usePublicDoctors({ limit: 50 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) return <Navigate to="/chuyen-gia-y-te" replace />;

  if (isLoading) {
    return (
        <div className="min-h-[50vh] flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
    );
  }

  if (error || !doctor) {
     return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Không tìm thấy bác sĩ</h2>
            <p className="text-slate-600">Bác sĩ bạn đang tìm kiếm không tồn tại hoặc đường dẫn không đúng.</p>
        </div>
     );
  }

  const handleTabClick = (id: string) => {
      setActiveTab(id);
      const element = document.getElementById(id);
      if (element) {
          const offset = 120; // Header + Tab bar height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
          });
      }
  };
  
  // Related Doctors
  const allDoctors = allDoctorsData?.items || [];
  const relatedDoctors = allDoctors
    .filter((d: any) => d.id !== doctor.id && d.departmentId === doctor.departmentId)
    .slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-white">
         <div className="container pt-4">
             <Breadcrumb 
                items={[
                    { label: "Chuyên gia y tế", href: "/chuyen-gia-y-te" },
                    { label: doctor.name }
                ]} 
             />
         </div>
      </div>

      <DoctorProfileHero doctor={doctor as any} />
      
      <DoctorProfileTabs activeSection={activeTab} onTabClick={handleTabClick} />
      
      <div className="container lg:flex gap-12 items-start">
         <div className="flex-1 min-w-0">
             <DoctorProfileSections doctor={doctor as any} />
             
             {/* Related Doctors */}
             <div className="mt-12 pt-12 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Chuyên gia cùng chuyên khoa</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedDoctors.map((d: any) => (
                        <DoctorCard key={d.id} doctor={d as any} className="border-slate-200 shadow-none hover:shadow-lg" />
                    ))}
                </div>
                {relatedDoctors.length === 0 && (
                    <p className="text-slate-500 italic">Không có bác sĩ khác cùng chuyên khoa.</p>
                )}
             </div>
         </div>
         
         {/* Right Sidebar Placeholder (Desktop) - to balance layout */}
         <div className="hidden lg:block w-80 flex-shrink-0" />
      </div>
    </div>
  );
}

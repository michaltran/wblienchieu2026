import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doctors } from "../data/doctors";
import { parseDoctorSlug } from "../lib/doctorSlug";
import DoctorProfileHero from "../components/blocks/DoctorProfileHero";
import DoctorProfileTabs from "../components/blocks/DoctorProfileTabs";
import DoctorProfileSections from "../components/blocks/DoctorProfileSections";
import DoctorCard from "../components/blocks/DoctorCard";
import Breadcrumb from "../components/ui/Breadcrumb";

export default function DoctorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState("overview");

  if (!slug) return <Navigate to="/chuyen-gia-y-te" replace />;

  // Parse Slug & Find Doctor
  const { slug: baseSlug, externalId } = parseDoctorSlug(slug);
  
  const doctor = doctors.find((d) => {
    if (externalId && d.externalId) {
        return d.externalId.toString() === externalId;
    }
    return d.slug === baseSlug || d.slug === slug; // Fallback to standard slug match
  });

  if (!doctor) {
     return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Không tìm thấy bác sĩ</h2>
            <p className="text-slate-600">Bác sĩ bạn đang tìm kiếm không tồn tại hoặc đường dẫn không đúng.</p>
        </div>
     );
  }

  // Scroll Spy Logic (Simplified)
  useEffect(() => {
    const handleScroll = () => {
        // Implement complex scroll spy if needed, for now manual click is main Nav
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  
  // Related Doctors (Same specialty or random fallback)
  const relatedDoctors = doctors
    .filter(d => d.id !== doctor.id && d.specialty === doctor.specialty)
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

      <DoctorProfileHero doctor={doctor} />
      
      <DoctorProfileTabs activeSection={activeTab} onTabClick={handleTabClick} />
      
      <div className="container lg:flex gap-12 items-start">
         <div className="flex-1 min-w-0">
             <DoctorProfileSections doctor={doctor} />
             
             {/* Related Doctors */}
             <div className="mt-12 pt-12 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Chuyên gia cùng chuyên khoa</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedDoctors.map(d => (
                        <DoctorCard key={d.id} doctor={d} className="border-slate-200 shadow-none hover:shadow-lg" />
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

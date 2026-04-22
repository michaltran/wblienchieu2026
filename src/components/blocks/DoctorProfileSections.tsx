import type { Doctor } from "../../data/doctors";
import { User, Briefcase, GraduationCap, BookOpen, Clock, Stethoscope } from "lucide-react";

interface DoctorProfileSectionsProps {
  doctor: Doctor;
}

export default function DoctorProfileSections({ doctor }: DoctorProfileSectionsProps) {
  const Card = ({ title, icon: Icon, children, id }: { title: string, icon: any, children: React.ReactNode, id: string }) => (
    <div id={id} className="scroll-mt-24 mb-8 bg-white rounded-2xl border border-slate-100 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
         <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
            <Icon className="w-5 h-5" />
         </div>
         <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );

  return (
    <div className="py-8">
      {/* Overview */}
      <Card title="Tổng quan" icon={User} id="overview">
         <p className="text-slate-600 leading-relaxed mb-4">{doctor.bio}</p>
         <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <div className="flex gap-2">
                <span className="font-semibold text-slate-900">Ngôn ngữ:</span>
                <span className="text-slate-600">{doctor.languages.join(", ")}</span>
            </div>
            {doctor.experienceYears > 0 && (
                <div className="flex gap-2">
                    <span className="font-semibold text-slate-900">Kinh nghiệm:</span>
                    <span className="text-slate-600">{doctor.experienceYears} năm</span>
                </div>
            )}
         </div>
      </Card>

      {/* Expertise */}
      {doctor.expertise && doctor.expertise.length > 0 && (
        <Card title="Thế mạnh chuyên môn" icon={Stethoscope} id="expertise">
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {doctor.expertise.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                  </li>
              ))}
           </ul>
        </Card>
      )}

      {/* Experience */}
      {doctor.experience && doctor.experience.length > 0 && (
        <Card title="Quá trình công tác" icon={Briefcase} id="experience">
           <ul className="space-y-4">
              {doctor.experience.map((item, idx) => (
                  <li key={idx} className="flex gap-4 relative">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary/20 border-2 border-primary mt-1.5 z-10" />
                      {doctor.experience && idx !== doctor.experience.length - 1 && (
                          <div className="absolute top-4 left-[5px] w-0.5 h-full bg-slate-100 -z-0" />
                      )}
                      <span className="text-slate-700">{item}</span>
                  </li>
              ))}
           </ul>
        </Card>
      )}

       {/* Education */}
       {doctor.education && doctor.education.length > 0 && (
        <Card title="Quá trình đào tạo" icon={GraduationCap} id="education">
           <ul className="space-y-3">
              {doctor.education.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-sm bg-blue-300 rotate-45" />
                      <span className="text-slate-700">{item}</span>
                  </li>
              ))}
           </ul>
        </Card>
      )}

      {/* Publications */}
      {doctor.publications && doctor.publications.length > 0 && (
        <Card title="Bài viết & Công trình nghiên cứu" icon={BookOpen} id="publications">
           <ul className="space-y-3">
              {doctor.publications.map((item, idx) => (
                  <li key={idx} className="text-slate-700">
                      • {item}
                  </li>
              ))}
           </ul>
        </Card>
      )}

      {/* Schedule */}
       <Card title="Lịch khám tại trung tâm" icon={Clock} id="schedule">
         <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-orange-800 text-sm font-medium inline-block">
            {doctor.scheduleNote}
         </div>
         <p className="mt-4 text-sm text-slate-500 italic">
            * Lịch khám có thể thay đổi đột xuất. Vui lòng đặt lịch trước hoặc gọi tổng đài để xác nhận.
         </p>
      </Card>
    </div>
  );
}

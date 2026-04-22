import { Link } from "react-router-dom";
import type { Doctor } from "../../data/doctors";
import { Button } from "../ui/Button";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";

interface DoctorProfileHeroProps {
  doctor: Doctor;
}

export default function DoctorProfileHero({ doctor }: DoctorProfileHeroProps) {
  const initials = doctor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(-2);

  return (
    <div className="bg-white border-b border-slate-100 pb-8 pt-8 md:pt-12">
      <div className="container lg:flex gap-12 items-start">
        {/* Left: Info */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-50 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                {doctor.avatar ? (
                  <img src={doctor.avatar} alt={doctor.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-primary">{initials}</span>
                )}
              </div>
            </div>
            
            <div className="text-center md:text-left flex-1">
               <div className="mb-2">
                 <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                    {doctor.specialty}
                 </span>
               </div>
               <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{doctor.name}</h1>
               <p className="text-lg text-slate-600 font-medium mb-3">{doctor.title}</p>
               
               {doctor.facility && (
                 <div className="flex items-center justify-center md:justify-start text-sm text-slate-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    {doctor.facility}
                 </div>
               )}

               <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {(doctor.tags || []).map(tag => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                          #{tag}
                      </span>
                  ))}
               </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed md:ml-48">
              <div dangerouslySetInnerHTML={{ __html: doctor.bio || '' }} />
          </div>
        </div>

        {/* Right: Sticky CTA Card */}
        <div className="lg:w-80 flex-shrink-0 mt-8 lg:mt-0 sticky top-24">
           <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h3 className="font-bold text-slate-900 mb-4 text-center">Đặt lịch khám</h3>
              
              <Link to={`/dang-ky-kham?doctor=${doctor.slug}&specialty=${doctor.specialtyId}`}>
                 <Button className="w-full mb-3 rounded-lg h-11 text-base shadow-lg shadow-blue-500/20">
                    <Calendar className="w-4 h-4 mr-2" />
                    Đăng ký khám
                 </Button>
              </Link>
              
              <a href="tel:0905453677" className="block w-full">
                 <Button variant="outline" className="w-full mb-4 rounded-lg h-11">
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi 0905453677
                 </Button>
              </a>

              <p className="text-[11px] text-center text-slate-400 mb-6 px-4 leading-tight">
                 Trung tâm sẽ liên hệ xác nhận lịch hẹn của bạn trong thời gian sớm nhất.
              </p>

              <div className="border-t border-slate-100 pt-4 space-y-3">
                 <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Thông tin liên hệ</h4>
                 <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary flex-shrink-0">
                       <Phone className="w-4 h-4" />
                    </div>
                    <span>0905 453 677</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary flex-shrink-0">
                       <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs truncate">trungtamytelienchieu@danang.gov.vn</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

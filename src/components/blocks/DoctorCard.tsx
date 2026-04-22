import { Link } from "react-router-dom";
import type { Doctor } from "../../data/doctors";
import { Button } from "../ui/Button";
import { User, Calendar } from "lucide-react";
import { cn } from "../../lib/cn";

interface DoctorCardProps {
  doctor: Doctor;
  className?: string;
}

export default function DoctorCard({ doctor, className }: DoctorCardProps) {
  // Initials for avatar placeholder
  const initials = doctor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(-2);

  return (
    <div className={cn("bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full", className)}>
      <div className="p-6 flex flex-col items-center text-center flex-grow">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-blue-50 text-primary flex items-center justify-center text-2xl font-bold mb-4 border-2 border-white shadow-sm ring-1 ring-blue-100">
          {doctor.avatar ? (
            <img src={doctor.avatar} alt={doctor.name} className="w-full h-full object-cover rounded-full" />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        {/* Info */}
        <div className="mb-1">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/5 px-2 py-0.5 rounded-full inline-block mb-2">
            {doctor.specialty}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{doctor.name}</h3>
        <p className="text-sm text-slate-500 mb-3 font-medium">{doctor.title}</p>
        
        <div className="text-xs text-slate-500 mb-4 line-clamp-2 min-h-[2.5em]">
            {doctor.bio}
        </div>

        {/* Meta / Tags */}
        <div className="flex flex-wrap gap-1 justify-center mb-6">
            {doctor.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                    {tag}
                </span>
            ))}
            {doctor.tags.length > 2 && (
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                    +{doctor.tags.length - 2}
                </span>
            )}
        </div>
        
        <div className="mt-autow-full pt-4 border-t border-slate-50 w-full grid grid-cols-2 gap-3 mt-auto">
            <Link to={`/chuyen-gia-y-te/${doctor.slug}`} className="w-full">
                <Button variant="outline" className="w-full text-xs h-9 rounded-lg px-2">
                    <User className="w-3 h-3 mr-1.5" />
                    Xem hồ sơ
                </Button>
            </Link>
            <Link to={`/dang-ky-kham?doctor=${doctor.slug}&specialty=${doctor.specialtyId}`} className="w-full">
                <Button className="w-full text-xs h-9 rounded-lg px-2">
                    <Calendar className="w-3 h-3 mr-1.5" />
                    Đặt khám
                </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

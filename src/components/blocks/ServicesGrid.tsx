import { Link } from "react-router-dom";
import { usePublicServices } from "../../hooks/useHospital";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function ServicesGrid() {
  const { data, isLoading } = usePublicServices({ limit: 6 });
  const services = data?.items || [];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dịch vụ nổi bật</h2>
          <p className="text-slate-600">
            Cung cấp đa dạng các dịch vụ khám chữa bệnh chất lượng cao, đáp ứng nhu cầu chăm sóc sức khỏe toàn diện.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <Icons.Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-10 text-slate-500 italic">Chưa có dịch vụ nào.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              // Dynamic icon rendering, fallback to Activity if not found or no icon specified
              const IconComponent = (service.icon && Icons[service.icon as keyof typeof Icons] as LucideIcon) || Icons.Activity;
              
              return (
                <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-slate-100">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                  <Link to={`/dich-vu`} className="text-primary font-medium text-sm hover:underline inline-flex items-center">
                    Xem chi tiết
                    <Icons.ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link to="/dich-vu" className="btn-outline">
            Xem tất cả dịch vụ
          </Link>
        </div>
      </div>
    </section>
  );
}

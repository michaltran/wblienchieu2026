import { ST } from "../../styles/specialtyTokens";
import { Activity, Phone } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  stats: {
    count: number;
    label: string;
  };
}

export default function SpecialtiesHero({ title, subtitle, stats }: Props) {
  return (
    <div className="relative bg-[#1E73BE] text-white pt-32 pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className={ST.container}>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-sm font-medium backdrop-blur-sm mb-6">
                    <Activity className="w-4 h-4" />
                    <span>Lĩnh vực chuyên môn</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                    {title}
                </h1>
                <p className="text-lg text-blue-100/90 font-medium max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                    <span className="text-3xl font-bold">{stats.count}</span>
                    <span className="text-sm font-medium text-blue-100 leading-tight block w-16">
                        {stats.label}
                    </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                    <Phone className="w-8 h-8 opacity-80" />
                    <div>
                         <div className="text-xs text-blue-200 uppercase tracking-wider font-bold">Hotline</div>
                         <div className="text-lg font-bold">0905 453 677</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";

interface PillarItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface KeyPillarsProps {
  items: PillarItem[];
}

export default function KeyPillars({ items }: KeyPillarsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E73BE] flex items-center justify-center mb-4 group-hover:bg-[#1E73BE] group-hover:text-white transition-colors">
            <item.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1E73BE] transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

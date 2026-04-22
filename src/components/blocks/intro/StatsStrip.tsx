interface StatItem {
  label: string;
  value: string;
}

interface StatsStripProps {
  stats: StatItem[];
}

export default function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-slate-900 text-white p-6 rounded-2xl text-center">
          <p className="text-2xl md:text-3xl font-black text-[#60A5FA] mb-1">
            {stat.value}
          </p>
          <p className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

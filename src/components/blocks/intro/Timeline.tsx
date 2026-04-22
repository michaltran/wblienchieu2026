

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative space-y-8 pl-8 md:pl-0 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-[35px] md:after:left-1/2 after:w-px after:bg-slate-200">
      {events.map((evt, idx) => (
        <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Content Card */}
          <div className="flex-1 md:w-1/2">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
              {/* Arrow */}
              <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-b border-l border-slate-200 rotate-45 ${idx % 2 === 0 ? '-left-2' : '-right-2 border-l-0 border-b-0 border-t border-r'}`}></div>
              
              <span className="inline-block px-3 py-1 rounded bg-blue-50 text-[#1E73BE] text-xs font-bold mb-2">
                Năm {evt.year}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {evt.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {evt.desc}
              </p>
            </div>
          </div>

          {/* Dot */}
          <div className="absolute left-[35px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#1E73BE] z-10 shadow-sm"></div>

          {/* Spacer for other side */}
          <div className="bg-transparent flex-1 md:w-1/2 hidden md:block"></div>
        </div>
      ))}
    </div>
  );
}

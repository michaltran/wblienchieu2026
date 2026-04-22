import { leaders } from "../../data/orgStructure";
import { User, Mail } from "lucide-react";

export default function LeadershipBlock() {
  return (
    <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#1E73BE] uppercase tracking-wide">
                Ban lãnh đạo
            </h2>
            <div className="h-[1px] bg-blue-100 flex-1" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader) => (
                <div key={leader.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center">
                    
                    {/* Avatar Placeholder */}
                    <div className="w-24 h-24 rounded-full bg-slate-100 mb-6 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#1E73BE] transition-colors overflow-hidden border-4 border-white shadow-inner">
                        <User className="w-12 h-12" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-[#1E73BE] transition-colors">
                        {leader.name}
                    </h3>
                    <p className="text-[#1E73BE] font-medium mb-4 text-sm uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                        {leader.title}
                    </p>

                    {leader.email && (
                         <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                            <Mail className="w-4 h-4" />
                            {leader.email}
                        </div>
                    )}
                    
                    <p className="text-sm text-slate-500 leading-relaxed italic border-t border-slate-100 pt-4 w-full">
                        "{leader.bio}"
                    </p>
                </div>
            ))}
        </div>
    </section>
  );
}

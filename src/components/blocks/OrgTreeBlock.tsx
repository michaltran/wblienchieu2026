import { useState } from "react";
import { orgStructure } from "../../data/orgStructure";
import { Search, ChevronDown, ChevronRight, Building2 } from "lucide-react";
import { cn } from "../../lib/cn";

export default function OrgTreeBlock() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<string[]>(orgStructure.map(g => g.id));

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => 
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (expandedGroups.length === orgStructure.length) {
        setExpandedGroups([]);
    } else {
        setExpandedGroups(orgStructure.map(g => g.id));
    }
  };

  // Filter logic
  const filteredStructure = orgStructure.map(group => ({
    ...group,
    nodes: group.nodes.filter(node => 
        node.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.nodes.length > 0);

  return (
    <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#1E73BE] uppercase tracking-wide">
                Sơ đồ tổ chức bộ máy
            </h2>
            
            <div className="flex gap-4">
                 {/* Search */}
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Tìm đơn vị..." 
                        className="pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1E73BE] w-full md:w-64 text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
                
                {/* Toggle All */}
                <button 
                    onClick={toggleAll}
                    className="whitespace-nowrap px-4 py-2 text-sm font-bold text-[#1E73BE] bg-blue-50 hover:bg-blue-100 rounded-full transition-colors hidden md:block"
                >
                    {expandedGroups.length === orgStructure.length ? "Thu gọn tất cả" : "Mở rộng tất cả"}
                </button>
            </div>
        </div>

        <div className="grid gap-6">
            {filteredStructure.map((group) => {
                const isExpanded = expandedGroups.includes(group.id) || searchTerm !== "";
                
                return (
                    <div key={group.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        {/* Group Header */}
                        <button 
                            onClick={() => toggleGroup(group.id)}
                            className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#1E73BE] flex items-center justify-center text-white shadow-sm">
                                    <Building2 className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg text-left">{group.title}</h3>
                                <span className="bg-white border border-slate-200 px-2 py-0.5 rounded-full text-xs font-bold text-slate-500">
                                    {group.nodes.length}
                                </span>
                            </div>
                            {isExpanded ? <ChevronDown className="w-5 h-5 text-slate-400" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
                        </button>

                        {/* Nodes List */}
                        <div className={cn(
                            "grid gap-1 transition-all duration-300",
                            isExpanded ? "p-2 opacity-100" : "h-0 overflow-hidden opacity-0 p-0"
                        )}>
                            {group.nodes.map((node) => (
                                <div key={node.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 group transition-colors ml-4 md:ml-12 border-l-2 border-slate-100 hover:border-[#1E73BE]">
                                    <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#1E73BE]" />
                                    <span className="font-medium text-slate-700 group-hover:text-[#1E73BE] group-hover:translate-x-1 transition-all">
                                        {node.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}

            {filteredStructure.length === 0 && (
                <div className="text-center py-12 text-slate-500 italic">
                    Không tìm thấy đơn vị nào phù hợp với "{searchTerm}"
                </div>
            )}
        </div>
    </section>
  );
}

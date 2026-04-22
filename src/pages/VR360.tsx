import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Search, Map, ChevronDown, ChevronRight, Maximize2, Menu, X } from "lucide-react";
import VR360Viewer from "../features/vr360/VR360Viewer";
import LoadingLogo from "../components/ui/LoadingLogo";
import { cn } from "../lib/cn";

interface SceneItem {
  id: string;
  name: string;
  sceneId: string;
}

interface Group {
  title: string;
  items: SceneItem[];
}

interface TourData {
  groups: Group[];
  scenes: any;
  default?: any;
}

export default function VR360() {
  const [tourData, setTourData] = useState<TourData | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/vr360/tour.json")
      .then(res => res.json())
      .then((data: TourData) => {
        setTourData(data);
        const defaultScene = data.default?.firstScene || data.groups[0]?.items[0]?.sceneId;
        setCurrentSceneId(defaultScene);
        setExpandedGroups(data.groups.map(g => g.title));
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load tour data", err);
        setIsLoading(false);
      });
  }, []);

  const toggleGroup = (title: string) => {
    setExpandedGroups(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const handleSceneChange = (sceneId: string) => {
      setCurrentSceneId(sceneId);
  };

  const filteredGroups = tourData?.groups.map(group => ({
      ...group,
      items: group.items.filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  })).filter(group => group.items.length > 0);

  if (isLoading) return <div className="h-screen flex items-center justify-center"><LoadingLogo variant="page" /></div>;
  if (!tourData) return <div className="h-screen flex items-center justify-center text-red-500">Không thể tải dữ liệu VR360</div>;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-slate-900">
      {/* Top Bar */}
      <header className="h-14 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-4 shrink-0 z-20 shadow-md">
         <div className="flex items-center gap-4">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">
               <Home className="w-5 h-5" />
            </Link>
            <div className="h-6 w-px bg-slate-700 mx-1"></div>
            <h1 className="text-white font-bold text-lg hidden md:block">Tham quan thực tế ảo (VR360)</h1>
            <h1 className="text-white font-bold text-base md:hidden">VR360</h1>
         </div>

         <div className="flex items-center gap-3">
             <div className="relative hidden md:block">
                 <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                 <input 
                    type="text" 
                    placeholder="Tìm kiếm khu vực..." 
                    className="bg-slate-800 border-none rounded-full py-1.5 pl-9 pr-4 text-sm text-white focus:ring-1 focus:ring-primary w-64 placeholder:text-slate-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                 />
             </div>
             
             <button 
               onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
               className="md:hidden p-2 text-slate-300 hover:text-white"
             >
                 {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
         </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
         
         {/* Sidebar Navigation */}
         <aside className={cn(
             "absolute inset-y-0 left-0 z-10 w-80 bg-slate-900/95 backdrop-blur-md border-r border-slate-700 transition-transform duration-300 ease-in-out md:relative md:transform-none md:bg-slate-900",
             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
         )}>
             {/* Mobile Search */}
             <div className="p-4 md:hidden border-b border-slate-800">
                <div className="relative">
                   <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                   <input 
                      type="text" 
                      placeholder="Tìm kiếm..." 
                      className="bg-slate-800 border-none rounded-lg w-full py-2 pl-9 pr-4 text-sm text-white focus:ring-1 focus:ring-primary"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                   />
                </div>
             </div>

             <div className="h-full overflow-y-auto p-4 pb-20 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                 {filteredGroups?.map((group, idx) => (
                     <div key={idx} className="mb-6">
                         <button 
                            onClick={() => toggleGroup(group.title)}
                            className="flex items-center justify-between w-full text-left text-blue-400 font-bold uppercase text-xs tracking-wider mb-2 hover:text-blue-300"
                         >
                             {group.title}
                             {expandedGroups.includes(group.title) ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                         </button>
                         
                         {expandedGroups.includes(group.title) && (
                             <div className="space-y-1">
                                {group.items.map(item => (
                                    <button
                                       key={item.id}
                                       onClick={() => {
                                           handleSceneChange(item.sceneId);
                                           if (window.innerWidth < 768) setIsSidebarOpen(false);
                                       }}
                                       className={cn(
                                           "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                                           currentSceneId === item.sceneId 
                                             ? "bg-[#1E73BE] text-white shadow-lg shadow-blue-500/20 font-medium" 
                                             : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                                       )}
                                    >
                                        <Map className="w-4 h-4 opacity-70 shrink-0" />
                                        <span className="truncate">{item.name}</span>
                                    </button>
                                ))}
                             </div>
                         )}
                     </div>
                 ))}
                 
                 {filteredGroups?.length === 0 && (
                     <p className="text-slate-500 text-sm text-center py-4">Không tìm thấy địa điểm nào.</p>
                 )}
             </div>
         </aside>

         {/* Viewer Canvas */}
         <main className="flex-1 relative bg-black">
             <VR360Viewer 
                tourConfig={tourData as any} 
                currentSceneId={currentSceneId}
                onSceneChange={handleSceneChange}
             />
             
             {/* Current Scene Info Overlay (Bottom Left) */}
             <div className="absolute bottom-6 left-6 z-10 pointer-events-none hidden md:block">
                 <div className="bg-black/50 backdrop-blur text-white px-4 py-2 rounded-lg border border-white/10">
                     <p className="text-xs text-slate-300 uppercase">Đang xem</p>
                     <p className="font-bold text-lg">
                        {(Object.values(tourData.scenes).find((s:any) => s.panorama?.includes(currentSceneId) || currentSceneId === Object.keys(tourData.scenes).find(k => tourData.scenes[k] === s)) as any)?.title || "Khu vực"}
                     </p>
                 </div>
             </div>
         </main>
      </div>
    </div>
  );
}

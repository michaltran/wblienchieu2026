import { useEffect, useRef, useState } from "react";
import "pannellum/build/pannellum.css";
import "pannellum/build/pannellum.js";
import { generateDemoEquirectDataUrl, generateDemoEquirectBlobUrl } from "./demoPanorama";
import type { DemoTheme } from "./demoPanorama";
import { cn } from "../../lib/cn";

declare global {
  interface Window {
    pannellum: any;
    handleSceneClick?: (sceneId: string) => void;
  }
}

interface Hotspot {
  pitch: number;
  yaw: number;
  type: "scene" | "info";
  text: string;
  sceneId?: string;
  target?: string;
  label?: string;
}

interface SceneConfig {
  title: string;
  type: string;
  panorama?: string;
  tilePath?: string;
  autoLoad?: boolean;
  hotSpots?: Hotspot[];
  demoHotspots?: Hotspot[]; 
  yaw?: number;
  pitch?: number;
  hfov?: number;
  fallback?: {
      type: "equirectangular" | "generated";
      panorama?: string; 
      theme?: DemoTheme; 
  };
  panoNav?: {
    prev?: { yaw?: number; pitch?: number; label?: string };
    next?: { yaw?: number; pitch?: number; label?: string };
  };
  annotations?: {
    yaw: number;
    pitch: number;
    label: string;
    text: string;
  }[];
}

interface TourConfig {
  default: any;
  scenes: Record<string, SceneConfig>;
  paths?: { demo?: string[] };
}

interface VR360ViewerProps {
  tourConfig: TourConfig;
  currentSceneId: string;
  onSceneChange: (sceneId: string) => void;
  isDemoMode?: boolean; 
}

export default function VR360Viewer({ tourConfig, currentSceneId, onSceneChange, isDemoMode = false }: VR360ViewerProps) {
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  // Keep track of generated blobs to revoke them on unmount
  const blobRegistryRef = useRef<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeMode, setActiveMode] = useState<"multires" | "equirect" | "demo" | null>(null);
  
  const [annotationsEnabled, setAnnotationsEnabled] = useState(() => localStorage.getItem("vr360_annotations") !== "false");

  useEffect(() => {
    localStorage.setItem("vr360_annotations", annotationsEnabled.toString());
  }, [annotationsEnabled]);

  // Expose handler globally for Pannellum
  useEffect(() => {
     window.handleSceneClick = (sceneId: string) => {
         setIsTransitioning(true);
         setTimeout(() => {
            onSceneChange(sceneId);
         }, 300); 
     };
     return () => {
         delete window.handleSceneClick;
     };
  }, [onSceneChange]);

  // Inject custom styles
  useEffect(() => {
    const styleId = "vr360-street-styles";
    if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.innerHTML = `
            /* Street View Ground Arrow (triangle3d) */
            .street-arrow {
                width: 60px;
                height: 60px;
                cursor: pointer;
                /* 3D Perspective Transform */
                transform: translateY(0) rotateX(60deg) scale(0.8); 
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.27);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.9;
                z-index: 10;
            }
            .street-arrow:hover {
                transform: translateY(-5px) rotateX(40deg) scale(1.1);
                opacity: 1;
                z-index: 20;
            }
            /* The Disc Base */
            .street-arrow-base {
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(255,255,255,0.4);
                border-radius: 50%;
                box-shadow: 0 0 10px rgba(0,0,0,0.2);
                border: 2px solid rgba(255,255,255,0.6);
            }
            .street-arrow:hover .street-arrow-base {
                background: rgba(30, 115, 190, 0.2);
                border-color: #1E73BE;
            }
            /* The Arrow Shape */
            .street-arrow-shape {
                position: relative;
                width: 0; 
                height: 0; 
                border-left: 14px solid transparent;
                border-right: 14px solid transparent;
                border-bottom: 24px solid #fff;
                filter: drop-shadow(0 4px 2px rgba(0,0,0,0.3));
                transform: translateY(-2px);
            }
            .street-arrow:hover .street-arrow-shape {
                border-bottom-color: #1E73BE;
            }
            
            /* Tooltip for Arrow */
            .street-arrow-label {
                position: absolute;
                bottom: 140%;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(15, 23, 42, 0.9);
                color: white;
                padding: 6px 10px;
                border-radius: 8px;
                font-size: 13px;
                font-weight: 600;
                white-space: nowrap;
                opacity: 0;
                pointer-events: none;
                transition: all 0.2s;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            }
            .street-arrow:hover .street-arrow-label {
                opacity: 1;
                transform: translateX(-50%) translateY(-5px);
            }

            /* Info Annotation Marker */
            .info-marker {
                width: 32px;
                height: 32px;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: help;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                transition: transform 0.2s;
                border: 2px solid #3b82f6;
            }
            .info-marker:hover {
                transform: scale(1.1);
                background: #3b82f6;
            }
            .info-marker svg {
                width: 18px;
                height: 18px;
                color: #3b82f6;
            }
            .info-marker:hover svg {
                color: white;
            }
            .info-label {
                position: absolute;
                top: 0;
                left: 40px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                max-width: 200px;
                width: max-content;
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    }
  }, []);

  // Helper to construct scene configuration
  const getSceneConfiguration = async (sceneId: string) => {
      const sceneConfig = tourConfig.scenes[sceneId];
      if (!sceneConfig) return null;

      let finalConfigType = sceneConfig.type || 'equirectangular';
      let finalPanorama = sceneConfig.panorama;
      let isGenerated = false;

      // Fallback Logic
      const hasFallback = !!sceneConfig.fallback;
      if (hasFallback) {
        let shouldUseFallback = false;
        
        if (sceneConfig.fallback?.type === 'generated') {
            shouldUseFallback = true;
        } else if (sceneConfig.fallback?.type === 'equirectangular' && sceneConfig.fallback.panorama) {
             try {
                 const res = await fetch(sceneConfig.fallback.panorama, { method: 'HEAD' });
                 if (res.ok) shouldUseFallback = true;
             } catch(e) {}
        }

        if (shouldUseFallback) {
            finalConfigType = 'equirectangular';
            if (sceneConfig.fallback?.type === 'generated') {
                isGenerated = true;
                const theme = sceneConfig.fallback.theme || 
                              (sceneConfig.title.includes("Khu A") || sceneConfig.title.includes("tiếp đón") ? "reception" :
                               sceneConfig.title.includes("Cấp cứu") ? "emergency" : "internal");
                
                finalPanorama = await generateDemoEquirectBlobUrl({
                    title: sceneConfig.title,
                    theme: theme,
                });
                blobRegistryRef.current.add(finalPanorama);
            } else {
                finalPanorama = sceneConfig.fallback!.panorama;
            }
        }
      }

      // Hotspots
      let finalHotSpots: any[] = [];
      const standardHotSpots = sceneConfig.hotSpots || [];
      const useDemoHotspots = isGenerated || isDemoMode;
      const navLinks = (useDemoHotspots && sceneConfig.demoHotspots) 
                       ? sceneConfig.demoHotspots 
                       : standardHotSpots;

       navLinks?.forEach(h => {
        finalHotSpots.push({
            pitch: h.pitch || -10, 
            yaw: h.yaw,
            cssClass: 'street-arrow',
            createTooltipFunc: (div: HTMLElement) => {
                div.innerHTML = `
                   <div class="street-arrow-base"></div>
                   <div class="street-arrow-shape"></div>
                   <div class="street-arrow-label">Đi tới: ${h.text || h.label}</div>
                `;
            },
            clickHandlerFunc: () => window.handleSceneClick?.(h.target || '')
        });
      });

      // Path calc
      const path = tourConfig.paths?.demo || [];
      const idx = path.indexOf(sceneId);
      if (idx !== -1) {
         const prevId = idx > 0 ? path[idx - 1] : null;
         const nextId = idx < path.length - 1 ? path[idx + 1] : null;

         const exists = (target: string) => finalHotSpots.some(h => h.clickHandlerFunc?.toString().includes(target) || navLinks?.some(n => n.target === target));

         if (prevId && !exists(prevId)) {
             const title = tourConfig.scenes[prevId]?.title;
             finalHotSpots.push({
                 pitch: -20, 
                 yaw: -120, 
                 cssClass: 'street-arrow',
                 createTooltipFunc: (div: HTMLElement) => {
                     div.innerHTML = `<div class="street-arrow-base"></div><div class="street-arrow-shape"></div><div class="street-arrow-label">Quay lại: ${title}</div>`;
                 },
                 clickHandlerFunc: () => window.handleSceneClick?.(prevId)
             });
         }
         if (nextId && !exists(nextId)) {
             const title = tourConfig.scenes[nextId]?.title;
             finalHotSpots.push({
               pitch: -15, 
               yaw: 0, 
               cssClass: 'street-arrow',
               createTooltipFunc: (div: HTMLElement) => {
                   div.innerHTML = `<div class="street-arrow-base"></div><div class="street-arrow-shape"></div><div class="street-arrow-label">Đi tiếp: ${title}</div>`;
               },
               clickHandlerFunc: () => window.handleSceneClick?.(nextId)
           });
         }
      }
      
      // Annotations
      if (annotationsEnabled && sceneConfig.annotations) {
          sceneConfig.annotations.forEach(a => {
              finalHotSpots.push({
                  pitch: a.pitch,
                  yaw: a.yaw,
                  cssClass: 'info-marker',
                  createTooltipFunc: (div: HTMLElement) => {
                      div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill-opacity="0.2"/><path d="M11 7h2v2h-2zm0 4h2v6h-2z"/></svg>
                                       <div class="info-label">
                                           <strong>${a.label}</strong><br/>
                                           <span style="opacity:0.8">${a.text}</span>
                                       </div>`;
                  }
              });
          });
      }

      return {
          originalConfig: sceneConfig,
          pannellumConfig: {
            ...sceneConfig,
            type: finalConfigType,
            panorama: finalPanorama,
            hotSpots: finalHotSpots
          },
          mode: isGenerated ? 'demo' : (finalConfigType === 'multires' ? 'multires' : 'equirect')
      };
  };

  // 1. Initialize Viewer ONCE
  useEffect(() => {
    if (!viewerContainerRef.current || !window.pannellum) return;
    
    // Initial dummy config, we will load the scene dynamically in the next effect
    const viewer = window.pannellum.viewer(viewerContainerRef.current, {
        default: {
            sceneFadeDuration: 1000, 
            autoLoad: true,
            pitch: 0,
            yaw: 0,
            hfov: 110,
            hotSpotDebug: false,
            strings: { loadingLabel: "", errorMsg: "Lỗi tải ảnh 360" }
        },
        scenes: {} // Empty scenes initially
    });

    viewer.on('load', () => {
        setIsLoaded(true);
        setIsTransitioning(false);
        setError(null);
    });
    
    viewer.on('error', (err: any) => {
        console.error("Pannellum Error:", err);
        setError("Không thể tải hình ảnh 360 độ.");
        setIsLoaded(true); 
        setIsTransitioning(false); 
    });

    viewerRef.current = viewer;

    return () => {
        if (viewerRef.current) {
            viewerRef.current.destroy();
            viewerRef.current = null;
        }
        // Cleanup blobs
        blobRegistryRef.current.forEach(blobUrl => URL.revokeObjectURL(blobUrl));
        blobRegistryRef.current.clear();
    };
  }, []); // Run once on mount

  // 2. Load Scene when currentSceneId changes
  useEffect(() => {
      if (!viewerRef.current || !currentSceneId) return;

      let isMounted = true;
      const load = async () => {
          if (!isTransitioning) setError(null); // Clear error if starting new load
          
          try {
              // Prepare scene config
              const configData = await getSceneConfiguration(currentSceneId);
              if (!isMounted) return;
              
              if (!configData) {
                  setError("Không tìm thấy cảnh.");
                  return;
              }

              // Update Mode UI
              setActiveMode(configData.mode as any);

              // Register scene if not already
              // Note: Pannellum doesn't have an easy public API to check if scene exists, 
              // but adding it again overwrites it, which is fine for updates.
              viewerRef.current.addScene(currentSceneId, configData.pannellumConfig);
              
              // Load it
              viewerRef.current.loadScene(currentSceneId);

          } catch (e) {
              console.error("Load Scene Error", e);
              setError("Lỗi khi tải cảnh.");
          }
      };

      load();

      return () => { isMounted = false; };
  }, [currentSceneId, annotationsEnabled, isDemoMode, tourConfig]);

  return (
    <div className="w-full h-full relative bg-slate-900 overflow-hidden group">
      
      {/* 1. The Viewer */}
      <div ref={viewerContainerRef} className={`w-full h-full transition-opacity duration-700 ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`} />
      
      {/* 2. Transition Overlay */}
      <div className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-500 z-30 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`} />

      {/* 3. Toggles (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
         <button 
            onClick={() => setAnnotationsEnabled(!annotationsEnabled)}
            className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur border transition-all ${annotationsEnabled ? 'bg-blue-600/80 text-white border-blue-500' : 'bg-black/50 text-slate-300 border-white/20'}`}
         >
            {annotationsEnabled ? 'Ẩn chú thích' : 'Hiện chú thích'}
         </button>
      </div>

      {/* 4. Mode Badge */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none flex flex-col gap-2 items-end">
         <div className={cn(
             "px-3 py-1 rounded-full text-xs font-bold border shadow-sm backdrop-blur transition-all",
             activeMode === 'demo' ? "bg-purple-500/20 text-purple-300 border-purple-500/30" : 
             activeMode === 'equirect' ? "bg-green-500/20 text-green-300 border-green-500/30" : 
             "bg-blue-500/20 text-blue-300 border-blue-500/30",
             !isLoaded && "opacity-0"
         )}>
             {activeMode === 'demo' ? "Demo Mode (Generated)" : 
              activeMode === 'equirect' ? "360 Image (Equirect)" : "Multires Tiles"}
         </div>
      </div>
      
      {/* 5. Loading State */}
      {(!isLoaded && !error) && (
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black/50 z-10">
           <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* 6. Error State */}
      {error && !isTransitioning && (
         <div className="absolute inset-0 flex items-center justify-center bg-slate-900/90 z-20 p-8 text-center animate-in fade-in">
             <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 max-w-lg shadow-2xl">
                 <h3 className="text-xl font-bold text-white mb-2">Chưa có dữ liệu ảnh 360</h3>
                 
                 <div className="mt-4 text-left bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                    <h4 className="text-yellow-400 font-bold text-sm mb-2">Cách tự thêm ảnh để test:</h4>
                    <ol className="list-decimal list-inside text-slate-400 text-sm space-y-1 ml-1">
                        <li>Chuẩn bị ảnh Panorama (JPG/PNG) tỉ lệ 2:1.</li>
                        <li>Đổi tên thành: <code className="text-white font-mono bg-slate-800 px-1 rounded">{currentSceneId}.jpg</code></li>
                        <li>Copy vào: `public/vr360/panos/`</li>
                    </ol>
                        <p className="text-sm text-slate-300 mb-2">Hoặc bật Chế độ Demo:</p>
                        <p className="text-xs text-slate-500">Nếu bạn muốn xem giả lập, hãy bật "Chế độ Demo" trên thanh công cụ.</p>
                    </div>
                 </div>
             </div>
      )}
    </div>
  );
}


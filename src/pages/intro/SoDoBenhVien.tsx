import { useState } from "react";
import IntroLayout from "../../components/layout/IntroLayout";
import HospitalMapHero from "../../components/blocks/HospitalMapHero";
import MapQuickInfo from "../../components/blocks/MapQuickInfo";
import MapViewer from "../../components/blocks/MapViewer";
import FloorTabs from "../../components/blocks/FloorTabs";
import MapThumbnails from "../../components/blocks/MapThumbnails";
import LegendBlock from "../../components/blocks/LegendBlock";
import MapLightbox from "../../components/blocks/MapLightbox";
import QualityCTA from "../../components/blocks/QualityCTA";
import { hospitalMaps } from "../../data/hospitalMaps";

export default function SoDoBenhVien() {
  const [currentMapId, setCurrentMapId] = useState(hospitalMaps[0].id);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentMap = hospitalMaps.find(m => m.id === currentMapId) || hospitalMaps[0];
  const currentIndex = hospitalMaps.findIndex(m => m.id === currentMapId);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % hospitalMaps.length;
    setCurrentMapId(hospitalMaps[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + hospitalMaps.length) % hospitalMaps.length;
    setCurrentMapId(hospitalMaps[prevIndex].id);
  };

  return (
    <IntroLayout currentPath="/gioi-thieu/so-do-benh-vien">
        <HospitalMapHero />
        <MapQuickInfo />
        
        <FloorTabs 
            maps={hospitalMaps} 
            currentMapId={currentMapId} 
            onSelect={setCurrentMapId} 
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-4">
            {/* Main Viewer - Wide */}
            <div className="lg:w-3/4">
                <MapViewer 
                    mapItem={currentMap} 
                    onOpenLightbox={() => setIsLightboxOpen(true)}
                />
            </div>

            {/* Legend - Narrow */}
            <div className="lg:w-1/4 min-w-[280px]">
                <LegendBlock />
            </div>
        </div>

        <MapThumbnails 
             maps={hospitalMaps} 
             currentMapId={currentMapId} 
             onSelect={setCurrentMapId}
        />

        <div className="mt-16">
            <QualityCTA />
        </div>

        {/* Lightbox */}
        {isLightboxOpen && (
            <MapLightbox 
                mapItem={currentMap}
                onClose={() => setIsLightboxOpen(false)}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        )}
    </IntroLayout>
  );
}

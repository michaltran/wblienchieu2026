import { useI18n } from "../../i18n/I18nContext";
import Breadcrumb from "../ui/Breadcrumb";

interface PhotoHeroProps {
  albumCount: number;
  photoCount: number;
}

export default function PhotoHero({ albumCount, photoCount }: PhotoHeroProps) {
  const { t } = useI18n();
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white border-b border-slate-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E73BE 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container py-8 md:py-12 relative z-10">
        <Breadcrumb 
            items={[
                { label: t('nav_intro'), href: "/" }, // Should be Home ideally, but prompt said Breadcrumb: Trang chủ / Thư viện / Thư viện hình ảnh
                { label: t('nav_library'), href: "#" },
                { label: t('photo_lib_title'), href: "#" }
            ]} 
        />
        
        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-black text-[#1E73BE] mb-4 tracking-tight">
                    {t('photo_lib_title')}
                </h1>
                <p className="text-slate-600 text-sm md:text-lg font-medium">
                    {t('photo_lib_subtitle')}
                </p>
            </div>
            
            <div className="flex gap-3 shrink-0">
                <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center min-w-[80px]">
                    <span className="text-2xl font-bold text-[#1E73BE]">{albumCount}</span>
                    <span className="text-xs text-slate-500 uppercase font-semibold">{t('photo_stats_albums')}</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center min-w-[80px]">
                    <span className="text-2xl font-bold text-[#1E73BE]">{photoCount}</span>
                    <span className="text-xs text-slate-500 uppercase font-semibold">{t('photo_stats_photos')}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

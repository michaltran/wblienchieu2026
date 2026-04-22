import { useI18n } from "../../i18n/I18nContext";
import Breadcrumb from "../ui/Breadcrumb";

export default function MissionVisionHero() {
  const { t } = useI18n();

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-blue-50/50 mb-12">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 p-8 md:p-12">
        <Breadcrumb 
            items={[
                { label: t('nav_intro'), href: "/gioi-thieu" },
                { label: t('nav_intro_mission'), href: "#" }
            ]} 
        />
        
        <div className="mt-6">
            <h1 className="text-3xl md:text-5xl font-black text-[#1E73BE] mb-4 tracking-tight uppercase">
                {t('nav_intro_mission')}
            </h1>
            <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                TRUNG TÂM Y TẾ KHU VỰC LIÊN CHIỂU<br/>
                <span className="text-[#1E73BE] font-bold">"Y tế gần dân, Ân cần chăm sóc"</span>
            </p>
        </div>

        <div className="absolute top-8 right-8 text-8xl font-black text-[#1E73BE]/5 hidden md:block select-none">
            01
        </div>
      </div>
    </div>
  );
}

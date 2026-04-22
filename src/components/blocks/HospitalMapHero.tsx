import { useI18n } from "../../i18n/I18nContext";
import Breadcrumb from "../ui/Breadcrumb";

export default function HospitalMapHero() {
  const { t } = useI18n();

  return (
    <div className="bg-[#1E73BE]/5 rounded-3xl p-8 mb-8">
        <Breadcrumb 
            items={[
                { label: t('nav_intro'), href: "/gioi-thieu" },
                { label: t('nav_intro_hospital_map'), href: "#" }
            ]} 
        />
        
        <div className="mt-4">
            <h1 className="text-3xl font-black text-[#1E73BE] uppercase mb-2">
                {t('nav_intro_hospital_map')}
            </h1>
            <p className="text-slate-600 font-medium">
                Hướng dẫn tìm đường - Vị trí các khoa phòng - Sơ đồ thoát hiểm
            </p>
        </div>
    </div>
  );
}

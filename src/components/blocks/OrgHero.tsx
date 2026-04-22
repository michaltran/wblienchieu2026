import { useI18n } from "../../i18n/I18nContext";
import Breadcrumb from "../ui/Breadcrumb";

export default function OrgHero() {
  const { t } = useI18n();

  return (
    <div className="bg-[#1E73BE]/5 rounded-3xl p-8 mb-12">
        <Breadcrumb 
            items={[
                { label: t('nav_intro'), href: "/gioi-thieu" },
                { label: t('nav_intro_org_structure'), href: "#" }
            ]} 
        />
        
        <div className="mt-6">
            <h1 className="text-3xl font-black text-[#1E73BE] uppercase mb-4">
                {t('nav_intro_org_structure')}
            </h1>
            <p className="text-slate-600 font-medium text-lg">
                Cơ cấu tổ chức bộ máy tinh gọn, hiệu quả, chuyên nghiệp
            </p>
        </div>
    </div>
  );
}

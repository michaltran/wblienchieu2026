import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import Breadcrumb from "../components/ui/Breadcrumb";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { t } = useI18n();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-white border-b border-slate-100">
         <div className="container py-4">
             <Breadcrumb 
                items={[
                  { label: "Home", href: "/" },
                  { label: t('search_results'), href: "#" },
                ]} 
             />
         </div>
      </div>

      <div className="container py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <SearchIcon className="w-8 h-8 text-primary" />
            {t('search_results')}: "{query}"
        </h1>

        <div className="bg-white rounded-xl p-12 text-center border border-slate-100 shadow-sm">
            <div className="inline-flex w-16 h-16 bg-slate-50 rounded-full items-center justify-center text-slate-300 mb-4">
                <SearchIcon className="w-8 h-8" />
            </div>
            {query.trim() ? (
                <p className="text-slate-500 text-lg">{t('search_no_results')}</p>
            ) : (
                <p className="text-slate-500 text-lg">{t('search_enter_keyword')}</p>
            )}
        </div>
      </div>
    </div>
  );
}

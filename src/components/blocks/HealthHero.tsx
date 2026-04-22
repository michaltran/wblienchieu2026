import { ST } from "../../styles/specialtyTokens";
import { Search } from "lucide-react";
import Breadcrumb from "../ui/Breadcrumb";
import { useI18n } from "../../i18n/I18nContext";

interface Props {
  onSearch: (query: string) => void;
}

export default function HealthHero({ onSearch }: Props) {
  const { t } = useI18n();

  const quickChips = [
    { label: "Tim mạch", slug: "tim-mach" },
    { label: "Nhi khoa", slug: "nhi" },
    { label: "Sức khỏe phụ nữ", slug: "suc-khoe-phu-nu" },
    { label: "Tiêu hóa", slug: "tieu-hoa-gan-mat" },
    { label: "Cơ xương khớp", slug: "chan-thuong-chinh-hinh" },
  ];

  return (
    <div className="relative bg-slate-50 py-12 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-[#1E73BE]/5 rounded-full blur-3xl" />
          <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10 text-[#1E73BE]" viewBox="0 0 1440 320" preserveAspectRatio="none">
             <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
      </div>

      <div className={`${ST.container} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Breadcrumb 
                  items={[
                    { label: t("nav_home"), href: "/" },
                    { label: "Hoạt động", href: "#" },
                    { label: "Y học thường thức", href: "/hoat-dong/y-hoc-thuong-thuc" }
                  ]}
                  className="bg-white/50 backdrop-blur px-4 py-1.5 rounded-full"
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                  <span className="text-[#1E73BE]">Y Học</span> Thường Thức
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-light">
                  Chia sẻ kiến thức y khoa uy tín, dễ hiểu và cập nhật liên tục từ đội ngũ chuyên gia TTYT Liên Chiểu.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-8 group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1E73BE] transition-colors">
                      <Search className="w-6 h-6" />
                  </div>
                  <input 
                      type="text"
                      placeholder="Tìm kiếm bệnh học, triệu chứng, bí quyết sống khỏe..."
                      className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-[#1E73BE] focus:ring-4 focus:ring-[#1E73BE]/10 shadow-lg shadow-blue-900/5 outline-none transition-all text-lg"
                      onChange={(e) => onSearch(e.target.value)}
                  />
              </div>

              {/* Quick Chips */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="text-sm font-semibold text-slate-400 mr-2">Phổ biến:</span>
                  {quickChips.map((chip) => (
                      <button 
                          key={chip.slug}
                          onClick={() => {
                             // This simplistic version assumes the parent handles filter logic by watching URL or state
                             // For now we just direct user to select category
                             const evt = new CustomEvent('select-health-category', { detail: chip.slug });
                             window.dispatchEvent(evt);
                          }}
                          className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-[#1E73BE] hover:text-[#1E73BE] hover:bg-blue-50 transition-all shadow-sm active:scale-95"
                      >
                          {chip.label}
                      </button>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
}

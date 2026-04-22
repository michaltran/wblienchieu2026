import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Search, Calendar, Globe, Stethoscope, FlaskConical, FileText, ArrowRight } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { useI18n } from "../../i18n/I18nContext";
import { cn } from "../../lib/cn";
import { mainNavConfig } from "../../config/nav";
import type { NavItem } from "../../config/nav";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100">
      {/* Topbar */}
      <div className="bg-[#1E73BE] text-white text-sm py-2">
        <div className="container flex justify-between items-center">
          <div className="flex gap-4">
            <a href="tel:0905453677" className="flex items-center gap-2 hover:text-white/90">
              <Phone className="w-4 h-4" />
              <span>0905453677</span>
            </a>
            <a href="mailto:trungtamytelienchieu@danang.gov.vn" className="items-center gap-2 hover:text-white/90 hidden sm:flex">
              <Mail className="w-4 h-4" />
              <span>trungtamytelienchieu@danang.gov.vn</span>
            </a>
          </div>
          <div className="hidden md:flex gap-4">
            <Link to="/chuyen-gia-y-te" className="hover:underline">{t('nav_doctors')}</Link>
            <Link to="/thuoc" className="hover:underline">{t('nav_drugs')}</Link>
            <Link to="/vr360" className="hover:underline font-bold text-yellow-300">Tham quan VR360</Link>
            <Link to="/bai-viet" className="hover:underline">{t('nav_articles')}</Link>
            <Link to="/lien-he" className="hover:underline">{t('nav_contact')}</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
               <h1 className="text-sm md:text-lg font-black text-[#1E73BE] uppercase leading-tight md:leading-none max-w-[200px] md:max-w-none">
                 Trung tâm Y tế Khu vực Liên Chiểu
               </h1>
               <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-wide">
                 Y tế gần dân, Ân cần chăm sóc
               </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 font-medium text-slate-700 text-sm">
            {mainNavConfig.map((item) => (
               <div key={item.key} className="relative group">
                  {item.children ? (
                     <>
                        <button className="flex items-center gap-1 hover:text-[#1E73BE] transition-colors py-4">
                           {t(item.key as any)}
                        </button>
                        
                        {/* Dropdown Logic */}
                        {item.children.some(child => child.isHeader) ? (
                            /* Mega Menu (Premium 3 Columns) */
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl bg-white shadow-2xl rounded-3xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-sm z-50 p-8 grid grid-cols-3 gap-10 overflow-hidden">
                                {/* Decorative Background Gradient */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                
                                {item.children.map((col) => {
                                    // Map Icons
                                    let BlockIcon = Menu;
                                    let blockDesc = "";
                                    let blockColor = "text-slate-900";
                                    let blockBg = "bg-slate-100";

                                    if (col.key === "Khối Lâm sàng") {
                                        BlockIcon = Stethoscope;
                                        blockDesc = "Khám, chữa bệnh và chăm sóc sức khỏe";
                                        blockColor = "text-blue-600";
                                        blockBg = "bg-blue-50";
                                    } else if (col.key === "Khối Cận lâm sàng") {
                                        BlockIcon = FlaskConical;
                                        blockDesc = "Xét nghiệm, chẩn đoán hình ảnh";
                                        blockColor = "text-teal-600";
                                        blockBg = "bg-teal-50";
                                    } else if (col.key === "Khối Hành chính") {
                                        BlockIcon = FileText;
                                        blockDesc = "Quản lý, điều hành và hỗ trợ";
                                        blockColor = "text-purple-600";
                                        blockBg = "bg-purple-50";
                                    }

                                    return (
                                        <div key={col.key} className="relative z-10 flex flex-col h-full">
                                            {/* Block Header */}
                                            <Link to={col.href || "#"} className="flex items-start gap-4 mb-6 group/block">
                                                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover/block:scale-110", blockBg, blockColor)}>
                                                    <BlockIcon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-slate-900 group-hover/block:text-[#1E73BE] transition-colors">
                                                        {col.key}
                                                    </h3>
                                                    <p className="text-xs text-slate-500 font-medium mt-1">
                                                        {blockDesc}
                                                    </p>
                                                </div>
                                            </Link>

                                            {/* Departments List */}
                                            <div className="flex-1 space-y-1">
                                                {col.children?.map(dept => (
                                                    <Link 
                                                        key={dept.key} 
                                                        to={dept.href || "#"} 
                                                        className="flex items-center gap-3 px-4 py-2.5 -mx-4 rounded-xl text-slate-600 hover:text-[#1E73BE] hover:bg-slate-50 transition-all group/item"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-[#1E73BE] transition-colors" />
                                                        <span className="font-medium truncate">{dept.key}</span>
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* 'View All' Link */}
                                            <Link 
                                                to={col.href || "#"}
                                                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-[#1E73BE] transition-colors self-start"
                                            >
                                                Xem tất cả
                                                <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : item.key === 'nav_patients' ? (
                            /* Patients Menu (Standard Style with Star) */
                            <div className="absolute top-full left-0 w-72 bg-white shadow-lg rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 text-sm z-50">
                                {item.children.map((child, idx) => {
                                    const isCharity = child.key === 'nav_patients_charity';
                                    return (
                                        <Link 
                                            key={child.key} 
                                            to={child.href || "#"} 
                                            className={cn(
                                                "px-4 py-3 hover:bg-slate-50 hover:text-[#1E73BE] transition-colors flex items-center gap-2",
                                                idx === 0 && "rounded-t-xl",
                                                idx === item.children!.length - 1 && "rounded-b-xl",
                                                isCharity && "text-[#1E73BE] font-bold bg-blue-50/30"
                                            )}
                                        >   
                                            {isCharity && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4 shrink-0 text-yellow-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                            )}
                                            
                                            {t(child.key as any)}
                                        </Link>
                                    );
                                })}
                            </div>
                        ) : (
                            /* SImple Dropdown (Default) */
                            <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 text-sm z-50">
                                {item.children.map((child, idx) => (
                                    <Link 
                                        key={child.key} 
                                        to={child.href || "#"} 
                                        className={cn(
                                            "block px-4 py-3 hover:bg-slate-50 hover:text-[#1E73BE] transition-colors",
                                            idx === 0 && "rounded-t-xl",
                                            idx === item.children!.length - 1 && "rounded-b-xl"
                                        )}
                                    >
                                        {t(child.key as any) || child.key}
                                    </Link>
                                ))}
                            </div>
                        )}
                     </>
                  ) : (
                     <Link to={item.href || "#"} className="hover:text-[#1E73BE] transition-colors py-4 block">
                        {t(item.key as any)}
                     </Link>
                  )}
               </div>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
             {/* Search */}
             <form onSubmit={handleSearch} className="hidden lg:flex items-center relative">
                 <input 
                    type="text" 
                    placeholder={t('search_placeholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#1E73BE] text-slate-700 placeholder:text-slate-400"
                 />
                 <Search className="w-4 h-4 absolute left-3 text-slate-400" />
             </form>

             {/* Booking Icon */}
             <Link to="/dang-ky-kham" title={t('book_appointment')}>
               <button className="p-2.5 rounded-full hover:bg-blue-50 text-[#1E73BE] transition-colors focus:ring-2 focus:ring-blue-100">
                  <Calendar className="w-5 h-5" />
               </button>
             </Link>

             {/* Language Switch */}
             <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
                  className="flex items-center gap-1.5 p-1.5 rounded-full hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                   <img 
                      src={lang === 'vi' ? "https://flagcdn.com/w40/vn.png" : "https://flagcdn.com/w40/us.png"} 
                      alt={lang === 'vi' ? "Tiếng Việt" : "English"}
                      className="w-6 h-4 object-cover rounded shadow-sm"
                   />
                </button>
                
                {isLangOpen && (
                   <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-slate-100 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                      <button 
                        onClick={() => setLang('vi')}
                        className={cn("w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3", lang === 'vi' && "bg-blue-50 text-[#1E73BE] font-bold")}
                      >
                        <img src="https://flagcdn.com/w40/vn.png" alt="VN" className="w-5 h-3.5 object-cover rounded shadow-sm" />
                        Tiếng Việt
                      </button>
                      <button 
                        onClick={() => setLang('en')}
                        className={cn("w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3", lang === 'en' && "bg-blue-50 text-[#1E73BE] font-bold")}
                      >
                         <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-5 h-3.5 object-cover rounded shadow-sm" />
                        English
                      </button>
                   </div>
                )}
             </div>

            <button className="xl:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

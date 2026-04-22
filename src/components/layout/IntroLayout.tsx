import { useNavigate } from "react-router-dom";
import { mainNavConfig } from "../../config/nav";
import { useI18n } from "../../i18n/I18nContext";
import { cn } from "../../lib/cn";
import { ChevronRight } from "lucide-react";

interface IntroLayoutProps {
  children: React.ReactNode;
  currentPath: string;
}

export default function IntroLayout({ children, currentPath }: IntroLayoutProps) {
  const { t } = useI18n();
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <div className="container py-8 md:py-16">
          {/* Main Content */}
          <main className="w-full">
            {children}
          </main>
      </div>
    </div>
  );
}

import { cn } from "../../lib/cn";

export const sections = [
  { id: "overview", label: "Tổng quan" },
  { id: "expertise", label: "Chuyên môn" },
  { id: "experience", label: "Kinh nghiệm" },
  { id: "education", label: "Đào tạo" },
  { id: "publications", label: "Công trình NC" },
  { id: "schedule", label: "Lịch khám" },
];

interface DoctorProfileTabsProps {
  activeSection: string;
  onTabClick: (id: string) => void;
}

export default function DoctorProfileTabs({ activeSection, onTabClick }: DoctorProfileTabsProps) {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onTabClick(section.id)}
              className={cn(
                "py-4 text-sm font-semibold whitespace-nowrap transition-colors relative",
                activeSection === section.id ? "text-primary" : "text-slate-500 hover:text-slate-800"
              )}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

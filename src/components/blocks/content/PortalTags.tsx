import InfoCard from "../../ui/InfoCard";
import { cn } from "../../../lib/cn";

interface PortalTagsProps {
  tags: string[];
  activeTag: string | null;
  onTagClick: (tag: string) => void;
}

export default function PortalTags({ tags, activeTag, onTagClick }: PortalTagsProps) {
  if (!tags || tags.length === 0) return null;
  // Take top 15 tags max to avoid clutter
  const displayTags = tags.slice(0, 15);

  return (
    <InfoCard className="space-y-4">
      <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
        <span className="w-1 h-5 bg-green-500 rounded-full"></span>
        Chủ đề
      </h3>

      <div className="flex flex-wrap gap-2">
        {displayTags.map(tag => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border",
              activeTag === tag
                ? "bg-[#1E73BE] text-white border-[#1E73BE] shadow-md shadow-blue-100"
                : "bg-slate-50 text-slate-600 border-slate-100 hover:bg-white hover:border-blue-200 hover:text-[#1E73BE]"
            )}
          >
            {tag}
          </button>
        ))}
      </div>
    </InfoCard>
  );
}

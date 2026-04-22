import { cn } from "../../lib/cn";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

interface AlphabetFilterProps {
  activeLetter?: string;
  onSelect: (letter: string | undefined) => void;
}

export default function AlphabetFilter({ activeLetter, onSelect }: AlphabetFilterProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-900">Tra cứu theo chữ cái</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-sm font-medium flex items-center hover:underline"
        >
          {isExpanded ? "Thu gọn" : "Mở rộng"}
          {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
        </button>
      </div>

      {isExpanded && (
        <div className="flex flex-wrap gap-2">
            <button
               onClick={() => onSelect(undefined)}
               className={cn(
                 "w-10 h-10 rounded-lg text-sm font-semibold transition-all border",
                 !activeLetter
                   ? "bg-primary text-white border-primary shadow-md shadow-primary/25"
                   : "bg-slate-50 text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
               )}
            >
              All
            </button>
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => onSelect(letter)}
              className={cn(
                "w-10 h-10 rounded-lg text-sm font-semibold transition-all border",
                activeLetter === letter
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/25"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
              )}
            >
              {letter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

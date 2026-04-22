import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

interface InfoCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function InfoCard({ children, className, hoverEffect = true }: InfoCardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl border border-slate-200 p-6 md:p-8",
        hoverEffect && "hover:shadow-md hover:border-blue-200 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

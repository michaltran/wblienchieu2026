import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ title, description, children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-10 md:py-14 border-b border-slate-100 last:border-0", className)}>
      {(title || description) && (
        <div className="mb-8 md:mb-10 max-w-3xl">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-slate-600 text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

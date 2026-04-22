import LoadingLogo from "./LoadingLogo";

interface FullPageLoaderProps {
    label?: string;
    className?: string; // Allow custom classNames
}

export default function FullPageLoader({ label, className = "" }: FullPageLoaderProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-slate-50/50 ${className}`}>
        <LoadingLogo variant="page" size={64} label={label} />
    </div>
  );
}

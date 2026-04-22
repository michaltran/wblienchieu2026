import logo from "../../assets/logo.png";

interface LoadingLogoProps {
  size?: number;
  label?: string;
  variant?: "inline" | "card" | "page";
  className?: string; // Add className prop for more flexibility
}

export default function LoadingLogo({ 
  size = 56, 
  label = "Đang tải...", 
  variant = "inline",
  className = ""
}: LoadingLogoProps) {
  
  const spinnerSize = size;
  const logoSize = Math.floor(size * 0.6); // Logo is 60% of container
  const borderWidth = Math.max(2, Math.floor(size / 15)); // Dynamic border width

  const containerClasses = {
    inline: "inline-flex",
    card: "flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100",
    page: "flex flex-col items-center justify-center min-h-[50vh] w-full"
  };

  return (
    <div 
      role="status" 
      className={`${containerClasses[variant]} ${className}`}
    >
      <div className="relative flex items-center justify-center" style={{ width: spinnerSize, height: spinnerSize }}>
        
        {/* Pulse Glow Background */}
        <div className="absolute inset-0 rounded-full bg-[#1E73BE]/10 animate-pulse" />
        
        {/* Rotating Spinner Ring */}
        <div 
          className="absolute inset-0 rounded-full border-slate-200 border-t-[#1E73BE] animate-spin"
          style={{ borderWidth: `${borderWidth}px` }}
        />
        
        {/* Logo Container */}
        <div className="relative z-10 bg-white rounded-full flex items-center justify-center shadow-sm"
             style={{ width: logoSize, height: logoSize }}>
          <img 
            src={logo} 
            alt="Loading..." 
            className="object-contain w-full h-full p-1 rounded-full"
          />
        </div>
      </div>
      
      {/* Label */}
      {(variant === "card" || variant === "page") && (
        <p className="mt-4 text-sm font-medium text-slate-500 animate-pulse">{label}</p>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

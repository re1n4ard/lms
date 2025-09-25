import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
  color?: string;
  showLabel?: boolean;
}

export default function ProgressBar({ 
  value, 
  className, 
  color = "primary", 
  showLabel = false 
}: ProgressBarProps) {
  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary",
      secondary: "bg-secondary", 
      accent: "bg-accent",
      purple: "bg-purple",
      success: "bg-success",
      warning: "bg-warning"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-primary";
  };

  const getGlowClasses = (color: string) => {
    const glowMap = {
      primary: "shadow-primary/30",
      secondary: "shadow-secondary/30", 
      accent: "shadow-accent/30",
      purple: "shadow-purple/30",
      success: "shadow-success/30",
      warning: "shadow-warning/30"
    };
    return glowMap[color as keyof typeof glowMap] || "shadow-primary/30";
  };

  return (
    <div className="space-y-1">
      <div className={cn(
        "w-full bg-muted rounded-full overflow-hidden",
        className
      )}>
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out relative",
            getColorClasses(color),
            "shadow-lg",
            getGlowClasses(color)
          )}
          style={{ 
            width: `${Math.min(100, Math.max(0, value))}%`,
            transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
        </div>
      </div>
      {showLabel && (
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Progress</span>
          <span>{value}%</span>
        </div>
      )}
    </div>
  );
}
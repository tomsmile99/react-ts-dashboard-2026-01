import type { ReactNode } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock3,
} from "lucide-react";

export type ProgressColor =
  | "blue"
  | "green"
  | "red"
  | "amber"
  | "purple"
  | "slate";

export type ProgressStatus =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "processing";

type ProgressBarProps = {
  label?: string;
  value: number;
  max?: number;
  description?: string;
  helperText?: string;
  color?: ProgressColor;
  status?: ProgressStatus;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  showStatusIcon?: boolean;
  striped?: boolean;
  animated?: boolean;
  icon?: ReactNode;
  className?: string;
};

const colorMap: Record<ProgressColor, string> = {
  blue: "bg-blue-500",
  green: "bg-emerald-500",
  red: "bg-red-500",
  amber: "bg-amber-500",
  purple: "bg-purple-500",
  slate: "bg-slate-500",
};

const statusColorMap: Record<ProgressStatus, ProgressColor> = {
  default: "blue",
  success: "green",
  warning: "amber",
  danger: "red",
  processing: "blue",
};

const statusIconMap: Record<ProgressStatus, ReactNode> = {
  default: null,
  success: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
  warning: <AlertTriangle className="w-4 h-4 text-amber-600" />,
  danger: <XCircle className="w-4 h-4 text-red-600" />,
  processing: <Clock3 className="w-4 h-4 text-blue-600" />,
};

const sizeMap = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

const clamp = (value: number, max: number) => {
  const percent = (value / max) * 100;
  if (percent < 0) return 0;
  if (percent > 100) return 100;
  return percent;
};

const ProgressBar = ({
  label,
  value,
  max = 100,
  description,
  helperText,
  color,
  status = "default",
  size = "md",
  showValue = true,
  showStatusIcon = true,
  striped = false,
  animated = false,
  icon,
  className = "",
}: ProgressBarProps) => {
  const percent = clamp(value, max);
  const finalColor = color ?? statusColorMap[status];

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue || icon || showStatusIcon) && (
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="min-w-0">
            {label && (
              <div className="flex items-center gap-2">
                {icon && <span className="shrink-0 text-slate-500">{icon}</span>}
                <p className="text-sm font-medium truncate text-slate-700">
                  {label}
                </p>
                {showStatusIcon && statusIconMap[status]}
              </div>
            )}

            {description && (
              <p className="mt-1 text-xs text-slate-500">{description}</p>
            )}
          </div>

          {showValue && (
            <span className="text-sm font-semibold shrink-0 text-slate-700">
              {Math.round(percent)}%
            </span>
          )}
        </div>
      )}

      <div
        className={`w-full overflow-hidden rounded-full bg-slate-200 ${sizeMap[size]}`}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ${colorMap[finalColor]} ${
            striped
              ? "bg-[linear-gradient(45deg,rgba(255,255,255,.35)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.35)_50%,rgba(255,255,255,.35)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"
              : ""
          } ${animated ? "animate-pulse" : ""}`}
          style={{ width: `${percent}%` }}
        />
      </div>

      {helperText && <p className="mt-2 text-xs text-slate-500">{helperText}</p>}
    </div>
  );
};

export default ProgressBar;
export type CircularProgressColor =
  | "blue"
  | "green"
  | "red"
  | "amber"
  | "purple"
  | "slate";

type CircularProgressProps = {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  color?: CircularProgressColor;
  showValue?: boolean;
  className?: string;
};

const strokeMap: Record<CircularProgressColor, string> = {
  blue: "stroke-blue-500",
  green: "stroke-emerald-500",
  red: "stroke-red-500",
  amber: "stroke-amber-500",
  purple: "stroke-purple-500",
  slate: "stroke-slate-500",
};

const clamp = (value: number, max: number) => {
  const percent = (value / max) * 100;
  if (percent < 0) return 0;
  if (percent > 100) return 100;
  return percent;
};

const CircularProgress = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 10,
  label,
  color = "blue",
  showValue = true,
  className = "",
}: CircularProgressProps) => {
  const percent = clamp(value, max);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            className="stroke-slate-200"
          />

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={`transition-all duration-700 ${strokeMap[color]}`}
          />
        </svg>

        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-semibold text-slate-800">
              {Math.round(percent)}%
            </span>
          </div>
        )}
      </div>

      {label && (
        <p className="mt-3 text-sm font-medium text-center text-slate-600">
          {label}
        </p>
      )}
    </div>
  );
};

export default CircularProgress;
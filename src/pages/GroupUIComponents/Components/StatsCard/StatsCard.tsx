import type { ReactNode } from "react";

type StatsCardProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  subtitle?: string;
  color?:
    | "blue"
    | "green"
    | "red"
    | "amber"
    | "purple"
    | "slate";
  className?: string;
};

const colorMap = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-emerald-100 text-emerald-600",
  red: "bg-red-100 text-red-600",
  amber: "bg-amber-100 text-amber-600",
  purple: "bg-purple-100 text-purple-600",
  slate: "bg-slate-100 text-slate-600",
};

const StatsCard = ({
  title,
  value,
  icon,
  subtitle,
  color = "blue",
  className = "",
}: StatsCardProps) => {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <p className="mt-2 text-2xl font-semibold text-slate-800">
            {value}
          </p>

          {subtitle && (
            <p className="mt-1 text-xs text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        {icon && (
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${colorMap[color]}`}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

export type MetricTrend = "up" | "down" | "neutral";
export type MetricColor = "blue" | "green" | "red" | "amber" | "purple" | "slate";

type MetricCardProps = {
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
  icon?: ReactNode;
  trend?: MetricTrend;
  trendValue?: string;
  color?: MetricColor;
  footer?: ReactNode;
  compact?: boolean;
  loading?: boolean;
  className?: string;
};

const colorMap: Record<MetricColor, string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-emerald-100 text-emerald-600",
  red: "bg-red-100 text-red-600",
  amber: "bg-amber-100 text-amber-600",
  purple: "bg-purple-100 text-purple-600",
  slate: "bg-slate-100 text-slate-600",
};

const trendMap = {
  up: {
    className: "bg-emerald-100 text-emerald-700",
    icon: <ArrowUpRight className="w-4 h-4" />,
  },
  down: {
    className: "bg-red-100 text-red-700",
    icon: <ArrowDownRight className="w-4 h-4" />,
  },
  neutral: {
    className: "bg-slate-100 text-slate-600",
    icon: <Minus className="w-4 h-4" />,
  },
};

const MetricCard = ({
  label,
  value,
  unit,
  description,
  icon,
  trend = "neutral",
  trendValue,
  color = "blue",
  footer,
  compact = false,
  loading = false,
  className = "",
}: MetricCardProps) => {
  if (loading) {
    return (
      <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
        <div className="space-y-4 animate-pulse">
          <div className="h-4 rounded w-28 bg-slate-200" />
          <div className="h-8 rounded w-36 bg-slate-200" />
          <div className="w-48 h-4 rounded bg-slate-200" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white ${
        compact ? "p-4" : "p-5"
      } shadow-sm transition hover:shadow-md ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500">{label}</p>

          <div className="flex flex-wrap items-end gap-2 mt-2">
            <p className={`${compact ? "text-xl" : "text-3xl"} font-semibold text-slate-800`}>
              {value}
            </p>

            {unit && (
              <span className="pb-1 text-sm font-medium text-slate-400">
                {unit}
              </span>
            )}

            {trendValue && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${trendMap[trend].className}`}
              >
                {trendMap[trend].icon}
                {trendValue}
              </span>
            )}
          </div>

          {description && (
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {description}
            </p>
          )}
        </div>

        {icon && (
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${colorMap[color]}`}>
            {icon}
          </div>
        )}
      </div>

      {footer && (
        <div className="pt-3 mt-4 text-xs border-t border-slate-200 text-slate-500">
          {footer}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
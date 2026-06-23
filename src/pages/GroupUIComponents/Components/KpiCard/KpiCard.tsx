import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

type KpiTrend = "up" | "down" | "neutral";

type KpiCardProps = {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: KpiTrend;
  trendValue?: string;
  footer?: string;
  loading?: boolean;
  className?: string;
};

const trendStyle = {
  up: "bg-emerald-100 text-emerald-700",
  down: "bg-red-100 text-red-700",
  neutral: "bg-slate-100 text-slate-600",
};

const trendIcon = {
  up: <ArrowUpRight className="w-4 h-4" />,
  down: <ArrowDownRight className="w-4 h-4" />,
  neutral: <Minus className="w-4 h-4" />,
};

const KpiCard = ({
  title,
  value,
  description,
  icon,
  trend = "neutral",
  trendValue,
  footer,
  loading = false,
  className = "",
}: KpiCardProps) => {
  if (loading) {
    return (
      <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
        <div className="space-y-4 animate-pulse">
          <div className="w-32 h-4 rounded bg-slate-200" />
          <div className="w-40 h-8 rounded bg-slate-200" />
          <div className="h-4 rounded w-52 bg-slate-200" />
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <div className="flex flex-wrap items-end gap-2 mt-2">
            <p className="text-2xl font-semibold text-slate-800 sm:text-3xl">
              {value}
            </p>

            {trendValue && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${trendStyle[trend]}`}
              >
                {trendIcon[trend]}
                {trendValue}
              </span>
            )}
          </div>

          {description && (
            <p className="mt-2 text-sm text-slate-500">{description}</p>
          )}
        </div>

        {icon && (
          <div className="flex items-center justify-center w-12 h-12 text-blue-600 bg-blue-100 shrink-0 rounded-2xl">
            {icon}
          </div>
        )}
      </div>

      {footer && (
        <div className="pt-3 mt-4 border-t border-slate-200">
          <p className="text-xs text-slate-400">{footer}</p>
        </div>
      )}
    </div>
  );
};

export default KpiCard;
export type { KpiTrend };
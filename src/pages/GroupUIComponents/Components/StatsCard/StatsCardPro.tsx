import type { ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Minus,
  AlertTriangle,
} from "lucide-react";

import Sparkline from "./Sparkline";

export type StatsCardProTrend = "up" | "down" | "neutral";
export type StatsCardProColor =
  | "blue"
  | "green"
  | "red"
  | "amber"
  | "purple"
  | "slate";

type StatsCardProProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;

  subtitle?: string;
  description?: string;

  trend?: StatsCardProTrend;
  trendValue?: string;
  comparison?: string;

  progress?: number;
  target?: string;

  sparkline?: number[];

  color?: StatsCardProColor;
  alert?: boolean;
  alertText?: string;

  footer?: ReactNode;
  action?: ReactNode;

  loading?: boolean;
  className?: string;
};

const colorMap: Record<
  StatsCardProColor,
  {
    iconBox: string;
    progress: string;
    sparkline: string;
  }
> = {
  blue: {
    iconBox: "bg-blue-100 text-blue-600",
    progress: "bg-blue-500",
    sparkline: "bg-blue-400",
  },
  green: {
    iconBox: "bg-emerald-100 text-emerald-600",
    progress: "bg-emerald-500",
    sparkline: "bg-emerald-400",
  },
  red: {
    iconBox: "bg-red-100 text-red-600",
    progress: "bg-red-500",
    sparkline: "bg-red-400",
  },
  amber: {
    iconBox: "bg-amber-100 text-amber-600",
    progress: "bg-amber-500",
    sparkline: "bg-amber-400",
  },
  purple: {
    iconBox: "bg-purple-100 text-purple-600",
    progress: "bg-purple-500",
    sparkline: "bg-purple-400",
  },
  slate: {
    iconBox: "bg-slate-100 text-slate-600",
    progress: "bg-slate-500",
    sparkline: "bg-slate-400",
  },
};

const trendMap: Record<
  StatsCardProTrend,
  {
    className: string;
    icon: ReactNode;
  }
> = {
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

const clampProgress = (value: number) => {
  if (value < 0) return 0;
  if (value > 100) return 100;
  return value;
};

const StatsCardPro = ({
  title,
  value,
  icon,
  subtitle,
  description,
  trend = "neutral",
  trendValue,
  comparison,
  progress,
  target,
  sparkline,
  color = "blue",
  alert = false,
  alertText,
  footer,
  action,
  loading = false,
  className = "",
}: StatsCardProProps) => {
  const safeProgress =
    typeof progress === "number" ? clampProgress(progress) : undefined;

  if (loading) {
    return (
      <div
        className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}
      >
        <div className="space-y-4 animate-pulse">
          <div className="flex items-center justify-between">
            <div className="w-32 h-4 rounded bg-slate-200" />
            <div className="w-10 h-10 rounded-xl bg-slate-200" />
          </div>
          <div className="w-40 h-8 rounded bg-slate-200" />
          <div className="h-4 rounded w-52 bg-slate-200" />
          <div className="w-full h-2 rounded bg-slate-200" />
          <div className="w-full h-10 rounded bg-slate-200" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <div className="flex flex-wrap items-end gap-2 mt-2">
            <p className="text-2xl font-semibold text-slate-800 sm:text-3xl">
              {value}
            </p>

            {trendValue && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${trendMap[trend].className}`}
              >
                {trendMap[trend].icon}
                {trendValue}
              </span>
            )}
          </div>

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          )}

          {comparison && (
            <p className="mt-1 text-xs text-slate-400">{comparison}</p>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {action}

          {icon && (
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${colorMap[color].iconBox}`}
            >
              {icon}
            </div>
          )}
        </div>
      </div>

      {description && (
        <p className="mt-4 text-sm leading-6 text-slate-500">{description}</p>
      )}

      {typeof safeProgress === "number" && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2 text-xs">
            <span className="font-medium text-slate-500">Progress</span>
            <span className="font-semibold text-slate-700">
              {safeProgress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full transition-all ${colorMap[color].progress}`}
              style={{ width: `${safeProgress}%` }}
            />
          </div>

          {target && <p className="mt-2 text-xs text-slate-500">{target}</p>}
        </div>
      )}

      {sparkline && sparkline.length > 0 && (
        <div className="mt-4">
          <Sparkline data={sparkline} barClassName={colorMap[color].sparkline} />
        </div>
      )}

      {alert && (
        <div className="flex items-start gap-2 px-3 py-2 mt-4 text-xs border rounded-xl border-amber-200 bg-amber-50 text-amber-700">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{alertText || "มีรายการที่ควรตรวจสอบเพิ่มเติม"}</span>
        </div>
      )}

      {footer && (
        <div className="pt-3 mt-4 text-xs border-t border-slate-200 text-slate-500">
          {footer}
        </div>
      )}
    </div>
  );
};

export default StatsCardPro;
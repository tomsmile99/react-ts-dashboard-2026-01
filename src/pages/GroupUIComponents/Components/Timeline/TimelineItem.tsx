import type { ReactNode } from "react";
import {
  CheckCircle2,
  Clock3,
  AlertTriangle,
  XCircle,
  Info,
} from "lucide-react";

export type TimelineStatus =
  | "success"
  | "processing"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

export type TimelineItemData = {
  id: string | number;
  title: string;
  description?: string;
  time?: string;
  date?: string;
  user?: string;
  status?: TimelineStatus;
  icon?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
};

type TimelineItemProps = {
  item: TimelineItemData;
  isLast?: boolean;
  variant?: "default" | "compact" | "card";
};

const statusMap: Record<
  TimelineStatus,
  {
    dot: string;
    line: string;
    badge: string;
    icon: ReactNode;
  }
> = {
  success: {
    dot: "bg-emerald-500 text-white",
    line: "bg-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
  processing: {
    dot: "bg-blue-500 text-white",
    line: "bg-blue-200",
    badge: "bg-blue-100 text-blue-700",
    icon: <Clock3 className="w-4 h-4" />,
  },
  warning: {
    dot: "bg-amber-500 text-white",
    line: "bg-amber-200",
    badge: "bg-amber-100 text-amber-700",
    icon: <AlertTriangle className="w-4 h-4" />,
  },
  danger: {
    dot: "bg-red-500 text-white",
    line: "bg-red-200",
    badge: "bg-red-100 text-red-700",
    icon: <XCircle className="w-4 h-4" />,
  },
  info: {
    dot: "bg-purple-500 text-white",
    line: "bg-purple-200",
    badge: "bg-purple-100 text-purple-700",
    icon: <Info className="w-4 h-4" />,
  },
  neutral: {
    dot: "bg-slate-400 text-white",
    line: "bg-slate-200",
    badge: "bg-slate-100 text-slate-600",
    icon: <Clock3 className="w-4 h-4" />,
  },
};

const TimelineItem = ({
  item,
  isLast = false,
  variant = "default",
}: TimelineItemProps) => {
  const status = item.status ?? "neutral";
  const statusStyle = statusMap[status];

  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-sm ${statusStyle.dot}`}
        >
          {item.icon || statusStyle.icon}
        </div>

        {!isLast && (
          <div className={`w-px flex-1 ${statusStyle.line}`} />
        )}
      </div>

      <div className={`min-w-0 flex-1 pb-6 ${variant === "compact" ? "pb-4" : ""}`}>
        <div
          className={
            variant === "card"
              ? "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              : ""
          }
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold text-slate-800">
                  {item.title}
                </h3>

                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyle.badge}`}
                >
                  {status}
                </span>
              </div>

              {item.description && (
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              )}

              {(item.user || item.date || item.time) && (
                <div className="flex flex-wrap gap-2 mt-2 text-xs text-slate-400">
                  {item.user && <span>โดย {item.user}</span>}
                  {item.date && <span>• {item.date}</span>}
                  {item.time && <span>• {item.time}</span>}
                </div>
              )}

              {item.meta && <div className="mt-3">{item.meta}</div>}
            </div>

            {item.actions && (
              <div className="shrink-0">
                {item.actions}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
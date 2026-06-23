import type { ReactNode } from "react";
import { Download, RefreshCw, MoreHorizontal } from "lucide-react";

import ChartLoading from "./ChartLoading";
import ChartEmptyState from "./ChartEmptyState";

type ChartCardProps = {
  title: string;
  description?: string;
  badge?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  loading?: boolean;
  empty?: boolean;
  heightClass?: string;
  className?: string;
};

const ChartCard = ({
  title,
  description,
  badge,
  actions,
  children,
  loading = false,
  empty = false,
  heightClass = "h-80",
  className = "",
}: ChartCardProps) => {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}
    >
      <div className="flex flex-col gap-3 mb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-800">{title}</h3>
            {badge}
          </div>

          {description && (
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {actions || (
            <>
              <button
                type="button"
                className="inline-flex items-center justify-center transition bg-white border h-9 w-9 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center transition bg-white border h-9 w-9 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <Download className="w-4 h-4" />
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center transition bg-white border h-9 w-9 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {loading ? (
        <ChartLoading />
      ) : empty ? (
        <ChartEmptyState />
      ) : (
        <div className={`relative w-full ${heightClass}`}>{children}</div>
      )}
    </div>
  );
};

export default ChartCard;
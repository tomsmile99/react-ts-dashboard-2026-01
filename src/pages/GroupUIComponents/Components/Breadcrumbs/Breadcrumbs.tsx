import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: ReactNode;
  current?: boolean;
  onClick?: () => void;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  showHome?: boolean;
  homeLabel?: string;
  onHomeClick?: () => void;
  className?: string;
};

const Breadcrumbs = ({
  items,
  showHome = false,
  //homeLabel = "Home",
  onHomeClick,
  className = "",
}: BreadcrumbsProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {showHome && (
          <>
            <li>
              <button
                type="button"
                onClick={onHomeClick}
                className="inline-flex items-center gap-1 px-1 py-1 transition rounded-lg cursor-pointer text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              >
                {/* <LayoutDashboard className="w-4 h-4" /> */}
                {/* <span>{homeLabel}</span> */}
                <span>ระบบจัดการเทมเพลต</span>
              </button>
            </li>
            {items.length > 0 && (
              <li className="text-slate-400">
                <ChevronRight className="w-4 h-4" />
              </li>
            )}
          </>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = item.current ?? isLast;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {item.href || item.onClick ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className={`inline-flex items-center gap-1 rounded-lg px-1 py-1 transition ${
                    isCurrent
                      ? "cursor-default text-slate-800"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                  }`}
                  disabled={isCurrent}
                >
                  {item.icon && <span className="shrink-0">{item.icon}</span>}
                  <span className={isCurrent ? "font-medium text-slate-800" : ""}>
                    {item.label}
                  </span>
                </button>
              ) : (
                <span
                  className={`inline-flex items-center gap-1 rounded-lg px-1 py-1 ${
                    isCurrent
                      ? "font-medium text-slate-800"
                      : "text-slate-500"
                  }`}
                >
                  {item.icon && <span className="shrink-0">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              )}

              {!isLast && (
                <span className="text-slate-400">
                  <ChevronRight className="w-4 h-4" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
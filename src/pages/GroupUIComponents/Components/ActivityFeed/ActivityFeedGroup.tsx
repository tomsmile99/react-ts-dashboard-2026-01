import type { ReactNode } from "react";

type ActivityFeedGroupProps = {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
};

const ActivityFeedGroup = ({
  title,
  description,
  actions,
  children,
  className = "",
}: ActivityFeedGroupProps) => {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}
    >
      {(title || description || actions) && (
        <div className="flex flex-col gap-3 mb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {title && (
              <h3 className="text-base font-semibold text-slate-800">{title}</h3>
            )}

            {description && (
              <p className="mt-1 text-sm text-slate-500">{description}</p>
            )}
          </div>

          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      )}

      {children}
    </div>
  );
};

export default ActivityFeedGroup;
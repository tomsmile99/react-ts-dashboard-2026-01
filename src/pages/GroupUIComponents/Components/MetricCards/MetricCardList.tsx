import type { ReactNode } from "react";

type MetricCardListProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

const MetricCardList = ({
  children,
  title,
  description,
  className = "",
}: MetricCardListProps) => {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      {(title || description) && (
        <div className="mb-4">
          {title && <h3 className="text-base font-semibold text-slate-800">{title}</h3>}
          {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
        </div>
      )}

      <div className="space-y-3">{children}</div>
    </div>
  );
};

export default MetricCardList;
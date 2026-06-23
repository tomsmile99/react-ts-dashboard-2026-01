import type { ReactNode } from "react";

type KpiCardGridProps = {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
};

const KpiCardGrid = ({
  children,
  columns = 4,
  className = "",
}: KpiCardGridProps) => {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 xl:grid-cols-3",
    4: "md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 gap-4 ${gridClass[columns]} ${className}`}>
      {children}
    </div>
  );
};

export default KpiCardGrid;
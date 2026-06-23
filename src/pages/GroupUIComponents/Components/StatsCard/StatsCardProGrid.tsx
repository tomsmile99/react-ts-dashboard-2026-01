import type { ReactNode } from "react";

type StatsCardProGridProps = {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
};

const StatsCardProGrid = ({
  children,
  columns = 4,
  className = "",
}: StatsCardProGridProps) => {
  const gridClass = {
    1: "grid-cols-1",
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

export default StatsCardProGrid;
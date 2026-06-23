import type { ReactNode } from "react";

type EmptyStateGridProps = {
  children: ReactNode;
  columns?: 2 | 3;
  className?: string;
};

const EmptyStateGrid = ({
  children,
  columns = 2,
  className = "",
}: EmptyStateGridProps) => {
  const gridClass = {
    2: "xl:grid-cols-2",
    3: "lg:grid-cols-2 xl:grid-cols-3",
  };

  return (
    <div className={`grid grid-cols-1 gap-5 ${gridClass[columns]} ${className}`}>
      {children}
    </div>
  );
};

export default EmptyStateGrid;
import type { ReactNode } from "react";

type DescriptionsProps = {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  bordered?: boolean;
  className?: string;
};

const Descriptions = ({
  children,
  columns = 3,
  bordered = false,
  className = "",
}: DescriptionsProps) => {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div
      className={`grid gap-4 ${gridClass[columns]} ${
        bordered ? "rounded-2xl border border-slate-200 bg-slate-50 p-4" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Descriptions;
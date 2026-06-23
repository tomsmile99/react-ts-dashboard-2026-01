import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const StatsCardGrid = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {children}
    </div>
  );
};

export default StatsCardGrid;
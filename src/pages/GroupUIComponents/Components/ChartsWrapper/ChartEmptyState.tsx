import { BarChart3 } from "lucide-react";

type ChartEmptyStateProps = {
  title?: string;
  description?: string;
};

const ChartEmptyState = ({
  title = "ไม่พบข้อมูลกราฟ",
  description = "ยังไม่มีข้อมูลเพียงพอสำหรับแสดงผลกราฟนี้",
}: ChartEmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center h-72 rounded-2xl bg-slate-50">
      <div className="p-4 mb-4 bg-white shadow-sm rounded-2xl">
        <BarChart3 className="w-8 h-8 text-slate-400" />
      </div>

      <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      <p className="max-w-md mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
};

export default ChartEmptyState;
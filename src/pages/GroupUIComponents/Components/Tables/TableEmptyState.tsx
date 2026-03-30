import { Search } from "lucide-react";

type TableEmptyStateProps = {
  title?: string;
  description?: string;
};

const TableEmptyState = ({
  title = "ไม่พบข้อมูล",
  description = "ลองปรับคำค้นหา ตัวกรอง หรือเพิ่มข้อมูลใหม่เพื่อให้แสดงผลในตารางนี้",
}: TableEmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="p-4 mb-4 rounded-2xl bg-slate-100">
        <Search className="w-8 h-8 text-slate-400" />
      </div>

      <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      <p className="max-w-md mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
};

export default TableEmptyState;
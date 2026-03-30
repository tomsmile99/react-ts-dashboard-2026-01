export type TableStatus = "Active" | "Pending" | "Suspended" | "Inactive";

const statusMap: Record<TableStatus, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Suspended: "bg-red-100 text-red-700",
  Inactive: "bg-slate-200 text-slate-700",
};

type TableStatusBadgeProps = {
  status: TableStatus;
};

const TableStatusBadge = ({ status }: TableStatusBadgeProps) => {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusMap[status]}`}
    >
      {status}
    </span>
  );
};

export default TableStatusBadge;
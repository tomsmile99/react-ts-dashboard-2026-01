import type { ReactNode } from "react";
import { Check } from "lucide-react";

type DropdownItemProps = {
  label: string;
  icon?: ReactNode;
  active?: boolean;
  danger?: boolean;
  onClick?: () => void;
  suffix?: ReactNode;
};

const DropdownItem = ({
  label,
  icon,
  active = false,
  danger = false,
  onClick,
  suffix,
}: DropdownItemProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${
        danger
          ? "text-red-600 hover:bg-red-50"
          : active
          ? "bg-blue-50 text-blue-700"
          : "text-slate-700 hover:bg-slate-100"
      }`}
    >
      <span className="flex items-center gap-2">
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{label}</span>
      </span>

      {suffix ? (
        suffix
      ) : active && !danger ? (
        <Check className="w-4 h-4" />
      ) : null}
    </button>
  );
};

export default DropdownItem;
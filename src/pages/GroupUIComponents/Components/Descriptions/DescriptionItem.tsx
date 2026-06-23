import type { ReactNode } from "react";

export type DescriptionItemProps = {
  label: string;
  value?: ReactNode;
  helperText?: string;
  badge?: ReactNode;
  icon?: ReactNode;
  copyable?: boolean;
  className?: string;
};

const DescriptionItem = ({
  label,
  value = "-",
  helperText,
  badge,
  icon,
  copyable = false,
  className = "",
}: DescriptionItemProps) => {
  const handleCopy = async () => {
    if (!copyable) return;
    if (typeof value !== "string" && typeof value !== "number") return;

    await navigator.clipboard.writeText(String(value));
  };

  return (
    <div className={`min-w-0 rounded-xl border border-slate-200 bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center min-w-0 gap-2">
          {icon && <span className="shrink-0 text-slate-400">{icon}</span>}
          <p className="text-xs font-medium tracking-wide uppercase truncate text-slate-400">
            {label}
          </p>
        </div>

        {badge}
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-medium wrap-break-word text-slate-800">
            {value}
          </div>

          {helperText && (
            <p className="mt-1 text-xs leading-5 text-slate-500">
              {helperText}
            </p>
          )}
        </div>

        {copyable && (
          <button
            type="button"
            onClick={handleCopy}
            className="px-2 py-1 text-xs font-medium transition border rounded-lg shrink-0 border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default DescriptionItem;
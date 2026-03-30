import type { ReactNode } from "react";

type FieldWrapperProps = {
  label: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  children: ReactNode;
};

const FieldWrapper = ({
  label,
  required = false,
  error,
  helperText,
  children,
}: FieldWrapperProps) => {
  return (
    <div className="space-y-2">
      <label className="inline-flex items-center gap-1 text-sm font-medium text-slate-700">
        <span>{label}</span>
        {required && <span className="text-red-500">*</span>}
      </label>

      {children}

      {error ? (
        <p className="text-xs text-red-500">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
};

export default FieldWrapper;
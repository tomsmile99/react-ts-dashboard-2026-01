type FormTextareaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
  helperText?: string;
  disabled?: boolean;
};

const FormTextarea = ({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  required = false,
  error,
  helperText,
  disabled = false,
}: FormTextareaProps) => {
  return (
    <div className="space-y-2">
      <label className="inline-flex items-center gap-1 text-sm font-medium text-slate-700">
        <span>{label}</span>
        {required && <span className="text-red-500">*</span>}
      </label>

      <textarea
        value={value}
        rows={rows}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
          error
            ? "border-red-300 bg-red-50 text-slate-800 placeholder:text-red-300 focus:border-red-400"
            : "border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-blue-400"
        } ${disabled ? "cursor-not-allowed bg-slate-100 text-slate-400" : ""}`}
      />

      {error ? (
        <p className="text-xs text-red-500">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
};

export default FormTextarea;
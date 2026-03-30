type FormSelectOption = {
  label: string;
  value: string;
};

type FormSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: FormSelectOption[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  disabled?: boolean;
};

const FormSelect = ({
  label,
  value,
  onChange,
  options,
  placeholder = "กรุณาเลือก",
  required = false,
  error,
  helperText,
  disabled = false,
}: FormSelectProps) => {
  return (
    <div className="space-y-2">
      <label className="inline-flex items-center gap-1 text-sm font-medium text-slate-700">
        <span>{label}</span>
        {required && <span className="text-red-500">*</span>}
      </label>

      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition ${
          error
            ? "border-red-300 bg-red-50 text-slate-800 focus:border-red-400"
            : "border-slate-200 bg-white text-slate-800 focus:border-blue-400"
        } ${disabled ? "cursor-not-allowed bg-slate-100 text-slate-400" : ""}`}
      >
        <option value="">{placeholder}</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="text-xs text-red-500">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
};

export default FormSelect;
export type { FormSelectOption };
type FormCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  helperText?: string;
};

const FormCheckbox = ({
  label,
  checked,
  onChange,
  helperText,
}: FormCheckboxProps) => {
  return (
    <label className="flex items-start gap-3 px-4 py-3 transition bg-white border cursor-pointer rounded-xl border-slate-200 hover:bg-slate-50">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-400"
      />

      <span>
        <span className="block text-sm font-medium text-slate-700">{label}</span>
        {helperText && (
          <span className="block mt-1 text-xs text-slate-500">{helperText}</span>
        )}
      </span>
    </label>
  );
};

export default FormCheckbox;
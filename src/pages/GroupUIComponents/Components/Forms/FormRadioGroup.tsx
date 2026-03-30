type RadioOption = {
  label: string;
  value: string;
  helperText?: string;
};

type FormRadioGroupProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  required?: boolean;
  error?: string;
};

const FormRadioGroup = ({
  label,
  value,
  onChange,
  options,
  required = false,
  error,
}: FormRadioGroupProps) => {
  return (
    <div className="space-y-2">
      <label className="inline-flex items-center gap-1 text-sm font-medium text-slate-700">
        <span>{label}</span>
        {required && <span className="text-red-500">*</span>}
      </label>

      <div className="space-y-3">
        {options.map((item) => (
          <label
            key={item.value}
            className="flex items-start gap-3 px-4 py-3 transition bg-white border cursor-pointer rounded-xl border-slate-200 hover:bg-slate-50"
          >
            <input
              type="radio"
              name={label}
              checked={value === item.value}
              onChange={() => onChange(item.value)}
              className="mt-0.5 h-4 w-4 border-slate-300 text-blue-500 focus:ring-blue-400"
            />

            <span>
              <span className="block text-sm font-medium text-slate-700">
                {item.label}
              </span>
              {item.helperText && (
                <span className="block mt-1 text-xs text-slate-500">
                  {item.helperText}
                </span>
              )}
            </span>
          </label>
        ))}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FormRadioGroup;
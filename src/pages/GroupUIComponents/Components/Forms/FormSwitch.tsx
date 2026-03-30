type FormSwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  helperText?: string;
};

const FormSwitch = ({
  label,
  checked,
  onChange,
  helperText,
}: FormSwitchProps) => {
  return (
    <div className="flex items-start justify-between gap-4 px-4 py-3 bg-white border rounded-2xl border-slate-200">
      <div>
        <p className="text-sm font-medium text-slate-700">{label}</p>
        {helperText && <p className="mt-1 text-xs text-slate-500">{helperText}</p>}
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition ${
          checked ? "bg-blue-500" : "bg-slate-300"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default FormSwitch;
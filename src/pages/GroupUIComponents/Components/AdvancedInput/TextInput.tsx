import FieldWrapper from "./FieldWrapper";

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  disabled?: boolean;
};

const TextInput = ({
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
  error,
  helperText,
  disabled = false,
}: TextInputProps) => {
  return (
    <FieldWrapper
      label={label}
      required={required}
      error={error}
      helperText={helperText}
    >
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition ${
          error
            ? "border-red-300 bg-red-50 text-slate-800 placeholder:text-red-300 focus:border-red-400"
            : "border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-blue-400"
        } ${disabled ? "cursor-not-allowed bg-slate-100 text-slate-400" : ""}`}
      />
    </FieldWrapper>
  );
};

export default TextInput;
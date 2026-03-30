import FieldWrapper from "./FieldWrapper";

type NumberInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  error?: string;
};

const NumberInput = ({
  label,
  value,
  onChange,
  placeholder = "0",
  helperText,
  error,
}: NumberInputProps) => {
  return (
    <FieldWrapper label={label} helperText={helperText} error={error}>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition ${
          error
            ? "border-red-300 bg-red-50 text-slate-800 placeholder:text-red-300 focus:border-red-400"
            : "border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-blue-400"
        }`}
      />
    </FieldWrapper>
  );
};

export default NumberInput;
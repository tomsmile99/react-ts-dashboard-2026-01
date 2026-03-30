import type { ReactNode } from "react";
import FieldWrapper from "./FieldWrapper";

type PrefixSuffixInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  helperText?: string;
  error?: string;
};

const PrefixSuffixInput = ({
  label,
  value,
  onChange,
  placeholder = "",
  prefix,
  suffix,
  helperText,
  error,
}: PrefixSuffixInputProps) => {
  return (
    <FieldWrapper label={label} helperText={helperText} error={error}>
      <div
        className={`flex items-center rounded-xl border px-4 py-2.5 transition ${
          error
            ? "border-red-300 bg-red-50 focus-within:border-red-400"
            : "border-slate-200 bg-white focus-within:border-blue-400"
        }`}
      >
        {prefix && <span className="mr-2 text-sm text-slate-500">{prefix}</span>}

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
        />

        {suffix && <span className="ml-2 text-sm text-slate-500">{suffix}</span>}
      </div>
    </FieldWrapper>
  );
};

export default PrefixSuffixInput;
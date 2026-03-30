import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import FieldWrapper from "./FieldWrapper";

type PasswordInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
};

const PasswordInput = ({
  label,
  value,
  onChange,
  placeholder = "กรอกรหัสผ่าน",
  required = false,
  error,
  helperText,
}: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <FieldWrapper
      label={label}
      required={required}
      error={error}
      helperText={helperText}
    >
      <div
        className={`flex items-center rounded-xl border px-4 py-2.5 transition ${
          error
            ? "border-red-300 bg-red-50 focus-within:border-red-400"
            : "border-slate-200 bg-white focus-within:border-blue-400"
        }`}
      >
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
        />

        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="ml-2 transition text-slate-400 hover:text-slate-600"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </FieldWrapper>
  );
};

export default PasswordInput;
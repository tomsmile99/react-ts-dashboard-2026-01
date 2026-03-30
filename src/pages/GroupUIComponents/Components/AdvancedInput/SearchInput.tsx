import { Search } from "lucide-react";
import FieldWrapper from "./FieldWrapper";

type SearchInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helperText?: string;
};

const SearchInput = ({
  label,
  value,
  onChange,
  placeholder = "ค้นหา...",
  helperText,
}: SearchInputProps) => {
  return (
    <FieldWrapper label={label} helperText={helperText}>
      <div className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-blue-400">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full text-sm bg-transparent outline-none placeholder:text-slate-400"
        />
      </div>
    </FieldWrapper>
  );
};

export default SearchInput;
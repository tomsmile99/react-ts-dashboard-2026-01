import { Search } from "lucide-react";

type NavbarSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const NavbarSearch = ({
  value,
  onChange,
  placeholder = "ค้นหา...",
}: NavbarSearchProps) => {
  return (
    <div className="hidden w-full max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-blue-400 lg:flex">
      <Search className="w-4 h-4 text-slate-400" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-sm bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
      />
    </div>
  );
};

export default NavbarSearch;
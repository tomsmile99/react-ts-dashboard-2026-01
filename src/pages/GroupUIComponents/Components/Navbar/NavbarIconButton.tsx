import type { ReactNode } from "react";

type NavbarIconButtonProps = {
  icon: ReactNode;
  badge?: number | string;
  onClick?: () => void;
  label?: string;
};

const NavbarIconButton = ({
  icon,
  badge,
  onClick,
  label,
}: NavbarIconButtonProps) => {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative inline-flex items-center justify-center w-10 h-10 transition bg-white border rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800"
    >
      {icon}

      {badge !== undefined && (
        <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-semibold text-white">
          {badge}
        </span>
      )}
    </button>
  );
};

export default NavbarIconButton;
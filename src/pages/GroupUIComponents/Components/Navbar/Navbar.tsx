import type { ReactNode } from "react";
import { Menu } from "lucide-react";

type NavbarProps = {
  title?: string;
  subtitle?: string;
  leftContent?: ReactNode;
  centerContent?: ReactNode;
  rightContent?: ReactNode;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  sticky?: boolean;
};

const Navbar = ({
  title,
  subtitle,
  leftContent,
  centerContent,
  rightContent,
  onMenuClick,
  showMenuButton = true,
  sticky = false,
}: NavbarProps) => {
  return (
    <header
      className={`z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur ${
        sticky ? "sticky top-0" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 min-h-16">
        <div className="flex items-center min-w-0 gap-3">
          {showMenuButton && (
            <button
              type="button"
              onClick={onMenuClick}
              className="inline-flex items-center justify-center w-10 h-10 transition bg-white border rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {leftContent ? (
            leftContent
          ) : (
            <div className="min-w-0">
              {title && (
                <h1 className="text-base font-semibold truncate text-slate-800 sm:text-lg">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-xs truncate text-slate-500 sm:text-sm">
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>

        {centerContent && (
          <div className="justify-center flex-1 hidden lg:flex">
            {centerContent}
          </div>
        )}

        {rightContent && (
          <div className="flex items-center gap-2 shrink-0">{rightContent}</div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
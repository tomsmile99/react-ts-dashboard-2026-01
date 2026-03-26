import { useState, useEffect } from "react";
import { Moon, Sun, Menu } from "lucide-react";

type HeaderProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ collapsed, setCollapsed, setMobileOpen }: HeaderProps) => {
  function useDarkMode() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") {
        setDark(true);
        document.documentElement.classList.add("dark");
      }
    }, []);

    const toggle = () => {
      setDark((prev) => {
        const next = !prev;

        if (next) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }

        return next;
      });
    };

    return { dark, toggle };
  }

  const { dark, toggle } = useDarkMode();

  const handleMenuClick = () => {
    if (window.innerWidth < 1024) {
      setMobileOpen(true);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <header className="bg-blue-100 px-2 py-2 shadow-[0_2px_10px_rgba(15,23,42,0.18)] sm:px-4 lg:px-4 dark:bg-slate-900 dark:text-white">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleMenuClick}
            className="flex items-center justify-center w-10 h-10 transition cursor-pointer rounded-xl text-slate-800 hover:bg-white/50 dark:text-white dark:hover:bg-slate-800"
            title={collapsed ? "ขยายเมนู" : "ย่อเมนู"}
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h3 className="flex justify-start text-base font-bold text-slate-800 dark:text-white">
              Dashboard Overview
            </h3>
            <p className="flex justify-start mt-1 text-sm text-slate-500 dark:text-slate-300">
              ภาพรวมข้อมูลการขายและสถานะงานของวันนี้
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-slate-800 bg-slate-50 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-400"
          >
            {dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
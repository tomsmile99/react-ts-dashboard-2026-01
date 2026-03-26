
import { useState, useEffect } from "react"

const Header = () => {

  // 🌗 Dark Mode Hook
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
      setDark(!dark);
      if (!dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };

    return { dark, toggle };
  }

  const { dark, toggle } = useDarkMode()

  return (
    <>
       <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800! dark:text-white!">
              Dashboard Overview
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-white">
              ภาพรวมข้อมูลการขายและสถานะงานของวันนี้
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="ค้นหาสาขา / ผู้ใช้งาน"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-72 dark:text-white"
            />
            <button
              onClick={toggle}
              className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

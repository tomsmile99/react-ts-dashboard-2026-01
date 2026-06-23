import { useEffect, useState } from "react";
import { CommandPalette } from "./CommandPalette";

export default function CommandPaletteDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const commands = [
    {
      id: "dashboard",
      title: "Dashboard",
      description: "หน้า Dashboard หลัก",
      onSelect: () => alert("Dashboard"),
    },
    {
      id: "insurance",
      title: "Insurance",
      description: "จัดการข้อมูลประกันภัย",
      onSelect: () => alert("Insurance"),
    },
    {
      id: "reports",
      title: "Reports",
      description: "รายงานระบบ",
      onSelect: () => alert("Reports"),
    },
    {
      id: "users",
      title: "Users",
      description: "จัดการผู้ใช้งาน",
      onSelect: () => alert("Users"),
    },
    {
      id: "settings",
      title: "Settings",
      description: "ตั้งค่าระบบ",
      onSelect: () => alert("Settings"),
    },
  ];

  return (
    <>
      <div className="text-center">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Command Palette Pro
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          กด Ctrl + K หรือ Cmd + K เพื่อค้นหาเมนู
        </p>

        <button
          onClick={() => setOpen(true)}
          className="px-5 py-3 mt-6 text-white rounded-xl bg-slate-900 hover:bg-slate-800"
        >
          Open Command Palette
        </button>
      </div>

      <CommandPalette
        open={open}
        commands={commands}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
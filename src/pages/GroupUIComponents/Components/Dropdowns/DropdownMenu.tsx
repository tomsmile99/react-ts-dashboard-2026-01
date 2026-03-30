import { useEffect, useRef, useState, type ReactNode } from "react";

type DropdownMenuProps = {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  widthClass?: string;
};

const DropdownMenu = ({
  trigger,
  children,
  align = "left",
  widthClass = "w-56",
}: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="outline-none"
      >
        {trigger}
      </button>

      <div
        className={`absolute z-50 mt-2 ${widthClass} ${
          align === "right" ? "right-0" : "left-0"
        } origin-top rounded-2xl border border-slate-200 bg-white p-2 shadow-xl transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownMenu;
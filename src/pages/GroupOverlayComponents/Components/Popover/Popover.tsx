import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type PopoverPosition = "top" | "bottom" | "left" | "right";

type PopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
  position?: PopoverPosition;
  width?: string;
  disabled?: boolean;
  closeOnClickOutside?: boolean;
};

const positionClasses: Record<PopoverPosition, string> = {
  top: "bottom-full left-1/2 mb-3 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-3 -translate-x-1/2",
  left: "right-full top-1/2 mr-3 -translate-y-1/2",
  right: "left-full top-1/2 ml-3 -translate-y-1/2",
};

export function Popover({
  trigger,
  children,
  position = "bottom",
  width = "w-64",
  disabled = false,
  closeOnClickOutside = true,
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!closeOnClickOutside) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeOnClickOutside]);

  return (
    <div ref={popoverRef} className="relative inline-flex">
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        className="inline-flex"
      >
        {trigger}
      </button>

      {open && !disabled && (
        <div
          className={`
            absolute z-50 rounded-2xl border border-slate-200
            bg-white p-4 shadow-xl shadow-slate-200/70
            ${width}
            ${positionClasses[position]}
          `}
        >
          {children}
        </div>
      )}
    </div>
  );
}
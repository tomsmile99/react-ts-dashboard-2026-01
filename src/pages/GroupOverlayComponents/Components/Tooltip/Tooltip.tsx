import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type TooltipPosition = "top" | "bottom" | "left" | "right";

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  position?: TooltipPosition;
  disabled?: boolean;
};

export function Tooltip({
  children,
  content,
  position = "top",
  disabled = false,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!open || !triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const gap = 8;

    const nextCoords = {
      top: rect.top,
      left: rect.left,
    };

    if (position === "top") {
      nextCoords.top = rect.top - gap;
      nextCoords.left = rect.left + rect.width / 2;
    }

    if (position === "bottom") {
      nextCoords.top = rect.bottom + gap;
      nextCoords.left = rect.left + rect.width / 2;
    }

    if (position === "left") {
      nextCoords.top = rect.top + rect.height / 2;
      nextCoords.left = rect.left - gap;
    }

    if (position === "right") {
      nextCoords.top = rect.top + rect.height / 2;
      nextCoords.left = rect.right + gap;
    }

    setCoords(nextCoords);
  }, [open, position]);

  const transformClasses: Record<TooltipPosition, string> = {
    top: "-translate-x-1/2 -translate-y-full",
    bottom: "-translate-x-1/2",
    left: "-translate-x-full -translate-y-1/2",
    right: "-translate-y-1/2",
  };

  return (
    <span
      ref={triggerRef}
      className="inline-flex"
      onMouseEnter={() => !disabled && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => !disabled && setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}

      {open &&
        !disabled &&
        createPortal(
          <span
            className={`
              pointer-events-none fixed z-999999 whitespace-nowrap rounded-lg
              bg-slate-900 px-3 py-1.5 text-xs font-medium text-white
              shadow-lg
              ${transformClasses[position]}
            `}
            style={{
              top: coords.top,
              left: coords.left,
            }}
          >
            {content}
          </span>,
          document.body
        )}
    </span>
  );
}
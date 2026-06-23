import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type DrawerPosition = "right" | "left" | "bottom";
type DrawerSize = "sm" | "md" | "lg" | "xl" | "full";

type DrawerProps = {
  open: boolean;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  position?: DrawerPosition;
  size?: DrawerSize;
  closeOnOverlayClick?: boolean;
  onClose: () => void;
};

const sizeClasses: Record<DrawerSize, string> = {
  sm: "w-full max-w-sm",
  md: "w-full max-w-md",
  lg: "w-full max-w-2xl",
  xl: "w-full max-w-4xl",
  full: "w-full",
};

const positionClasses: Record<DrawerPosition, string> = {
  right: "right-0 top-0 h-full",
  left: "left-0 top-0 h-full",
  bottom: "bottom-0 left-0 w-full max-w-none rounded-t-3xl",
};

const openAnimationClasses: Record<DrawerPosition, string> = {
  right: "animate-[drawerRightIn_0.25s_ease-out]",
  left: "animate-[drawerLeftIn_0.25s_ease-out]",
  bottom: "animate-[drawerBottomIn_0.25s_ease-out]",
};

const closeAnimationClasses: Record<DrawerPosition, string> = {
  right: "animate-[drawerRightOut_0.25s_ease-in]",
  left: "animate-[drawerLeftOut_0.25s_ease-in]",
  bottom: "animate-[drawerBottomOut_0.25s_ease-in]",
};

export function Drawer({
  open,
  title,
  description,
  children,
  footer,
  position = "right",
  size = "md",
  closeOnOverlayClick = true,
  onClose,
}: DrawerProps) {
  const [shouldRender, setShouldRender] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);

      const timer = window.setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 250);

      return () => window.clearTimeout(timer);
    }
  }, [open, shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [shouldRender, onClose]);

  if (!shouldRender) return null;

  const isBottom = position === "bottom";

  return createPortal(
    <div className="fixed inset-0 z-[999999]">
      <button
        type="button"
        aria-label="Close drawer overlay"
        onClick={closeOnOverlayClick ? onClose : undefined}
        className={`
          absolute inset-0 bg-slate-950/45 backdrop-blur-sm
          transition-opacity duration-250
          ${isClosing ? "opacity-0" : "opacity-100"}
        `}
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={`
          fixed flex flex-col border-slate-200 bg-white shadow-2xl
          shadow-slate-900/20 dark:border-slate-700 dark:bg-slate-900
          ${positionClasses[position]}
          ${isBottom ? "max-h-[85vh] border-t" : "border-l"}
          ${isBottom ? "" : sizeClasses[size]}
          ${
            isClosing
              ? closeAnimationClasses[position]
              : openAnimationClasses[position]
          }
        `}
      >
        <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            {title && (
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {description}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 transition rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">{children}</div>

        {footer && (
          <div className="p-6 border-t border-slate-200 dark:border-slate-700">
            {footer}
          </div>
        )}
      </aside>
    </div>,
    document.body
  );
}
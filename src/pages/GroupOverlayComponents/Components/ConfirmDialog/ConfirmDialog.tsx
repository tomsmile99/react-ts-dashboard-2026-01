import { useEffect } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  AlertTriangle,
  CheckCircle,
  Info,
  ShieldAlert,
  X,
} from "lucide-react";

type ConfirmDialogType = "danger" | "warning" | "info" | "success";

type ConfirmDialogProps = {
  open: boolean;
  title: string;
  description?: string;
  type?: ConfirmDialogType;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  children?: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
};

const typeStyles: Record<
  ConfirmDialogType,
  {
    icon: ReactNode;
    iconBox: string;
    confirmButton: string;
  }
> = {
  danger: {
    icon: <ShieldAlert size={24} />,
    iconBox: "bg-red-50 text-red-600 ring-red-100",
    confirmButton: "bg-red-600 hover:bg-red-700 focus:ring-red-200",
  },
  warning: {
    icon: <AlertTriangle size={24} />,
    iconBox: "bg-amber-50 text-amber-600 ring-amber-100",
    confirmButton: "bg-amber-500 hover:bg-amber-600 focus:ring-amber-200",
  },
  info: {
    icon: <Info size={24} />,
    iconBox: "bg-blue-50 text-blue-600 ring-blue-100",
    confirmButton: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-200",
  },
  success: {
    icon: <CheckCircle size={24} />,
    iconBox: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    confirmButton: "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200",
  },
};

export function ConfirmDialog({
  open,
  title,
  description,
  type = "danger",
  confirmText = "ยืนยัน",
  cancelText = "ยกเลิก",
  loading = false,
  children,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCancel();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onCancel]);

  if (!open) return null;

  const styles = typeStyles[type];

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close dialog overlay"
        className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
        onClick={onCancel}
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md overflow-hidden bg-white border shadow-2xl  rounded-3xl border-slate-200 shadow-slate-900/20 dark:border-slate-700 dark:bg-slate-900"
      >
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="absolute p-2 transition  right-4 top-4 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <X size={18} />
        </button>

        <div className="p-6">
          <div
            className={`
              mb-5 flex h-14 w-14 items-center justify-center rounded-2xl
              ring-8
              ${styles.iconBox}
            `}
          >
            {styles.icon}
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>

          {description && (
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {description}
            </p>
          )}

          {children && (
            <div className="p-4 mt-5 text-sm border rounded-2xl border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {children}
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 mt-7 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="
                rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold
                text-slate-700 transition hover:bg-slate-50
                disabled:cursor-not-allowed disabled:opacity-50
                dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800
              "
            >
              {cancelText}
            </button>

            <button
              type="button"
              onClick={onConfirm}
              disabled={loading}
              className={`
                inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5
                text-sm font-semibold text-white shadow-sm transition
                focus:outline-none focus:ring-4
                disabled:cursor-not-allowed disabled:opacity-70
                ${styles.confirmButton}
              `}
            >
              {loading && (
                <span className="w-4 h-4 border-2 rounded-full animate-spin border-white/40 border-t-white" />
              )}
              {loading ? "กำลังดำเนินการ..." : confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
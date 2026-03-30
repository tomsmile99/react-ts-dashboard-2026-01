import { useEffect, type ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
  closeOnOverlay?: boolean;
};

const Modal = ({
  open,
  onClose,
  children,
  maxWidth = "max-w-lg",
  closeOnOverlay = true,
}: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4
        bg-slate-900/50 backdrop-blur-[2px]
        transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-hidden={!open}
      onClick={() => {
        if (closeOnOverlay && open) onClose();
      }}
    >
      <div
        className={`w-full ${maxWidth} rounded-2xl border border-slate-200 bg-white shadow-xl
          transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
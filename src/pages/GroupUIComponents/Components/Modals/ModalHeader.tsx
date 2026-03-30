import { type ReactNode } from "react";
import { X } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  onClose?: () => void;
  children?: ReactNode;
};

const ModalHeader = ({ title, subtitle, onClose, children }: Props) => {
  return (
    <div className="flex items-start justify-between gap-4 px-5 py-4 border-b">
      <div>
        {title && (
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        )}

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        )}

        {children}
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="p-2 rounded-xl hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ModalHeader;
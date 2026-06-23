import type { ReactNode } from "react";

type EmptyStateActionProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  icon?: ReactNode;
  onClick?: () => void;
};

const EmptyStateAction = ({
  children,
  variant = "primary",
  icon,
  onClick,
}: EmptyStateActionProps) => {
  const variantClass = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary:
      "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${variantClass[variant]}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default EmptyStateAction;
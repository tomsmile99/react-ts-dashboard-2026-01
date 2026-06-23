type SpinnerSize = "sm" | "md" | "lg" | "xl";

type SpinnerProps = {
  size?: SpinnerSize;
  label?: string;
};

const sizeClasses: Record<SpinnerSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-4",
  xl: "h-12 w-12 border-4",
};

export function Spinner({ size = "md", label }: SpinnerProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <span
        className={`
          inline-block animate-spin rounded-full
          border-slate-300 border-t-blue-600
          ${sizeClasses[size]}
        `}
      />

      {label && (
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {label}
        </span>
      )}
    </div>
  );
}
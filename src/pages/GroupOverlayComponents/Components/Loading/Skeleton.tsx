type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-lg bg-slate-200 shadow-inner
        dark:bg-slate-700
        ${className}
      `}
    >
      <div
        className="
          absolute inset-0 -translate-x-full
          animate-[shimmer_1.8s_infinite]
          bg-linear-to-r
          from-transparent
          via-white/60
          to-transparent
          dark:via-white/10
        "
      />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-900">
      <Skeleton className="w-32 h-5" />
      <Skeleton className="w-full h-4 mt-4" />
      <Skeleton className="w-4/5 h-4 mt-2" />
      <Skeleton className="w-full h-10 mt-6 rounded-xl" />
    </div>
  );
}

export function SkeletonProfile() {
  return (
    <div className="flex items-center gap-4 p-5 bg-white border shadow-sm rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-900">
      <Skeleton className="rounded-full h-14 w-14" />

      <div className="flex-1">
        <Skeleton className="w-40 h-4" />
        <Skeleton className="h-3 mt-3 w-28" />
      </div>
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-900">
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="grid grid-cols-4 gap-4">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
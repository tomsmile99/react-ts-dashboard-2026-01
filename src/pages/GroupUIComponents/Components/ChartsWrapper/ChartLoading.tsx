const ChartLoading = () => {
  return (
    <div className="flex items-center justify-center h-72 rounded-2xl bg-slate-50">
      <div className="w-full max-w-md px-6 space-y-4 animate-pulse">
        <div className="w-40 h-4 rounded bg-slate-200" />
        <div className="h-56 rounded-2xl bg-slate-200" />
      </div>
    </div>
  );
};

export default ChartLoading;
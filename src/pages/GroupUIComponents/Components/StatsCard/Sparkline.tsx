type SparklineProps = {
  data: number[];
  barClassName?: string;
};

const Sparkline = ({
  data,
  barClassName = "bg-blue-400",
}: SparklineProps) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="flex items-end h-12 gap-1">
      {data.map((item, index) => {
        const height = ((item - min) / range) * 75 + 25;

        return (
          <div
            key={`${item}-${index}`}
            className={`flex-1 rounded-t ${barClassName}`}
            style={{ height: `${height}%` }}
            title={String(item)}
          />
        );
      })}
    </div>
  );
};

export default Sparkline;
import TimelineItem, { type TimelineItemData } from "./TimelineItem";

type TimelineProps = {
  items: TimelineItemData[];
  variant?: "default" | "compact" | "card";
  emptyText?: string;
  className?: string;
};

const Timeline = ({
  items,
  variant = "default",
  emptyText = "ยังไม่มีรายการ Timeline",
  className = "",
}: TimelineProps) => {
  if (items.length === 0) {
    return (
      <div className="p-8 text-sm text-center border rounded-2xl border-slate-200 bg-slate-50 text-slate-500">
        {emptyText}
      </div>
    );
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          isLast={index === items.length - 1}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default Timeline;
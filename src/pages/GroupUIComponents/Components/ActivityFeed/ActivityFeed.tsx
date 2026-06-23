import ActivityFeedItem, { type ActivityFeedItemData } from "./ActivityFeedItem";

type ActivityFeedProps = {
  activities: ActivityFeedItemData[];
  compact?: boolean;
  showConnector?: boolean;
  emptyText?: string;
  className?: string;
};

const ActivityFeed = ({
  activities,
  compact = false,
  showConnector = true,
  emptyText = "ยังไม่มีกิจกรรมล่าสุด",
  className = "",
}: ActivityFeedProps) => {
  if (activities.length === 0) {
    return (
      <div className="p-8 text-sm text-center border rounded-2xl border-slate-200 bg-slate-50 text-slate-500">
        {emptyText}
      </div>
    );
  }

  return (
    <div className={className}>
      {activities.map((item, index) => (
        <ActivityFeedItem
          key={item.id}
          item={item}
          compact={compact}
          showConnector={showConnector}
          isLast={index === activities.length - 1}
        />
      ))}
    </div>
  );
};

export default ActivityFeed;
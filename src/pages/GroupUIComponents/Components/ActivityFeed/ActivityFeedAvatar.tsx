import type { ReactNode } from "react";

type ActivityFeedAvatarProps = {
  name?: string;
  avatar?: string;
  icon?: ReactNode;
  color?: "blue" | "green" | "red" | "amber" | "purple" | "slate";
};

const colorMap = {
  blue: "bg-blue-500 text-white",
  green: "bg-emerald-500 text-white",
  red: "bg-red-500 text-white",
  amber: "bg-amber-500 text-white",
  purple: "bg-purple-500 text-white",
  slate: "bg-slate-500 text-white",
};

const getInitials = (name?: string) => {
  if (!name) return "SY";

  return name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const ActivityFeedAvatar = ({
  name,
  avatar,
  icon,
  color = "blue",
}: ActivityFeedAvatarProps) => {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name || "avatar"}
        className="object-cover w-10 h-10 rounded-full"
      />
    );
  }

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${colorMap[color]}`}
    >
      {icon || getInitials(name)}
    </div>
  );
};

export default ActivityFeedAvatar;
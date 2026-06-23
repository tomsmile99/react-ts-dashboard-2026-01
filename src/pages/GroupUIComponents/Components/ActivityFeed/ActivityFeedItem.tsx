import type { ReactNode } from "react";
import {
  AlertTriangle,
  Download,
  LogIn,
  LogOut,
  MessageCircle,
  Pencil,
  Plus,
  ShieldCheck,
  Trash2,
  Upload,
  XCircle,
  Settings,
} from "lucide-react";

import ActivityFeedAvatar from "./ActivityFeedAvatar";

export type ActivityType =
  | "login"
  | "logout"
  | "create"
  | "update"
  | "delete"
  | "approve"
  | "reject"
  | "upload"
  | "download"
  | "comment"
  | "system"
  | "warning"
  | "error";

export type ActivitySeverity = "success" | "info" | "warning" | "danger" | "neutral";

export type ActivityFeedItemData = {
  id: string | number;
  user?: string;
  avatar?: string;
  action: string;
  target?: string;
  description?: string;
  timestamp?: string;
  date?: string;
  type?: ActivityType;
  severity?: ActivitySeverity;
  meta?: ReactNode;
  badge?: ReactNode;
  actions?: ReactNode;
};

type ActivityFeedItemProps = {
  item: ActivityFeedItemData;
  compact?: boolean;
  showConnector?: boolean;
  isLast?: boolean;
};

const typeIconMap: Record<ActivityType, ReactNode> = {
  login: <LogIn className="w-4 h-4" />,
  logout: <LogOut className="w-4 h-4" />,
  create: <Plus className="w-4 h-4" />,
  update: <Pencil className="w-4 h-4" />,
  delete: <Trash2 className="w-4 h-4" />,
  approve: <ShieldCheck className="w-4 h-4" />,
  reject: <XCircle className="w-4 h-4" />,
  upload: <Upload className="w-4 h-4" />,
  download: <Download className="w-4 h-4" />,
  comment: <MessageCircle className="w-4 h-4" />,
  system: <Settings className="w-4 h-4" />,
  warning: <AlertTriangle className="w-4 h-4" />,
  error: <XCircle className="w-4 h-4" />,
};

const severityMap: Record<
  ActivitySeverity,
  {
    avatarColor: "blue" | "green" | "red" | "amber" | "purple" | "slate";
    badgeClass: string;
    connector: string;
  }
> = {
  success: {
    avatarColor: "green",
    badgeClass: "bg-emerald-100 text-emerald-700",
    connector: "bg-emerald-200",
  },
  info: {
    avatarColor: "blue",
    badgeClass: "bg-blue-100 text-blue-700",
    connector: "bg-blue-200",
  },
  warning: {
    avatarColor: "amber",
    badgeClass: "bg-amber-100 text-amber-700",
    connector: "bg-amber-200",
  },
  danger: {
    avatarColor: "red",
    badgeClass: "bg-red-100 text-red-700",
    connector: "bg-red-200",
  },
  neutral: {
    avatarColor: "slate",
    badgeClass: "bg-slate-100 text-slate-600",
    connector: "bg-slate-200",
  },
};

const ActivityFeedItem = ({
  item,
  compact = false,
  showConnector = true,
  isLast = false,
}: ActivityFeedItemProps) => {
  const severity = item.severity ?? "neutral";
  const type = item.type ?? "system";
  const style = severityMap[severity];

  return (
    <div className="relative flex gap-3">
      <div className="flex flex-col items-center">
        <ActivityFeedAvatar
          name={item.user}
          avatar={item.avatar}
          icon={typeIconMap[type]}
          color={style.avatarColor}
        />

        {showConnector && !isLast && (
          <div className={`mt-2 w-px flex-1 ${style.connector}`} />
        )}
      </div>

      <div className={`min-w-0 flex-1 ${compact ? "pb-4" : "pb-6"}`}>
        <div className="p-4 transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                {item.user && (
                  <span className="text-sm font-semibold text-slate-800">
                    {item.user}
                  </span>
                )}

                <span className="text-sm text-slate-600">{item.action}</span>

                {item.target && (
                  <span className="rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                    {item.target}
                  </span>
                )}

                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${style.badgeClass}`}
                >
                  {type}
                </span>

                {item.badge}
              </div>

              {item.description && (
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              )}

              {(item.timestamp || item.date) && (
                <div className="flex flex-wrap gap-2 mt-2 text-xs text-slate-400">
                  {item.timestamp && <span>{item.timestamp}</span>}
                  {item.date && <span>• {item.date}</span>}
                </div>
              )}

              {item.meta && <div className="mt-3">{item.meta}</div>}
            </div>

            {item.actions && <div className="shrink-0">{item.actions}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeedItem;
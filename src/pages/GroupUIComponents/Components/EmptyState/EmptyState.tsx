import type { ReactNode } from "react";
import {
  Search,
  Inbox,
  FileX2,
  AlertTriangle,
  Lock,
  WifiOff,
  Plus,
} from "lucide-react";

export type EmptyStateVariant =
  | "default"
  | "search"
  | "inbox"
  | "file"
  | "error"
  | "permission"
  | "offline"
  | "create";

type EmptyStateProps = {
  title?: string;
  description?: string;
  variant?: EmptyStateVariant;
  icon?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  align?: "center" | "left";
  className?: string;
};

const variantMap: Record<
  EmptyStateVariant,
  {
    icon: ReactNode;
    iconClass: string;
    title: string;
    description: string;
  }
> = {
  default: {
    icon: <Inbox className="w-8 h-8" />,
    iconClass: "bg-slate-100 text-slate-500",
    title: "ยังไม่มีข้อมูล",
    description: "เมื่อมีข้อมูลแล้ว ระบบจะแสดงรายการในส่วนนี้",
  },
  search: {
    icon: <Search className="w-8 h-8" />,
    iconClass: "bg-blue-100 text-blue-600",
    title: "ไม่พบผลลัพธ์",
    description: "ลองเปลี่ยนคำค้นหา หรือล้างตัวกรองแล้วค้นหาใหม่อีกครั้ง",
  },
  inbox: {
    icon: <Inbox className="w-8 h-8" />,
    iconClass: "bg-slate-100 text-slate-500",
    title: "กล่องรายการว่างเปล่า",
    description: "ยังไม่มีรายการใหม่เข้ามาในตอนนี้",
  },
  file: {
    icon: <FileX2 className="w-8 h-8" />,
    iconClass: "bg-purple-100 text-purple-600",
    title: "ยังไม่มีไฟล์",
    description: "อัปโหลดไฟล์เพื่อเริ่มต้นจัดเก็บเอกสารในระบบ",
  },
  error: {
    icon: <AlertTriangle className="w-8 h-8" />,
    iconClass: "bg-red-100 text-red-600",
    title: "เกิดข้อผิดพลาด",
    description: "ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง",
  },
  permission: {
    icon: <Lock className="w-8 h-8" />,
    iconClass: "bg-amber-100 text-amber-600",
    title: "ไม่มีสิทธิ์เข้าถึง",
    description: "บัญชีของคุณยังไม่มีสิทธิ์ในการดูข้อมูลส่วนนี้",
  },
  offline: {
    icon: <WifiOff className="w-8 h-8" />,
    iconClass: "bg-slate-100 text-slate-600",
    title: "ไม่สามารถเชื่อมต่อได้",
    description: "ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
  },
  create: {
    icon: <Plus className="w-8 h-8" />,
    iconClass: "bg-emerald-100 text-emerald-600",
    title: "เริ่มต้นสร้างข้อมูลใหม่",
    description: "ยังไม่มีข้อมูลในหน้านี้ คุณสามารถเพิ่มรายการแรกได้เลย",
  },
};

const sizeClass = {
  sm: "px-4 py-8",
  md: "px-6 py-14",
  lg: "px-8 py-20",
};

const EmptyState = ({
  title,
  description,
  variant = "default",
  icon,
  actions,
  children,
  size = "md",
  align = "center",
  className = "",
}: EmptyStateProps) => {
  const current = variantMap[variant];

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white ${sizeClass[size]} ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      <div
        className={`flex ${
          align === "center" ? "items-center" : "items-start"
        } flex-col`}
      >
        <div
          className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${current.iconClass}`}
        >
          {icon || current.icon}
        </div>

        <h3 className="text-lg font-semibold text-slate-800">
          {title || current.title}
        </h3>

        <p className="max-w-md mt-2 text-sm leading-6 text-slate-500">
          {description || current.description}
        </p>

        {children && <div className="w-full max-w-md mt-4">{children}</div>}

        {actions && (
          <div
            className={`mt-5 flex flex-wrap gap-3 ${
              align === "center" ? "justify-center" : "justify-start"
            }`}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
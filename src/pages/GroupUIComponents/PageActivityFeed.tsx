import {
  Download,
  Eye,
  FolderKanban,
  RefreshCw,
  ShieldCheck,
  SquareActivity
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import {
  ActivityFeed,
  ActivityFeedGroup,
  type ActivityFeedItemData,
} from "@/pages/GroupUIComponents/Components/ActivityFeed/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const todayActivities: ActivityFeedItemData[] = [
  {
    id: 1,
    user: "Smile Admin",
    action: "อนุมัติรายการประกันภัย",
    target: "INS-2026-0001",
    description: "ตรวจสอบข้อมูลลูกค้าและอนุมัติรายการเรียบร้อยแล้ว",
    timestamp: "2 minutes ago",
    date: "17 Jun 2026",
    type: "approve",
    severity: "success",
    badge: (
      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
        Approved
      </span>
    ),
  },
  {
    id: 2,
    user: "System",
    action: "ส่งข้อมูลไปยัง External API สำเร็จ",
    target: "TXN-88912003",
    description: "ระบบส่งข้อมูลรายการประกันไปยังคู่ค้าภายนอกสำเร็จ",
    timestamp: "5 minutes ago",
    date: "17 Jun 2026",
    type: "system",
    severity: "info",
    meta: (
      <div className="p-3 text-xs text-blue-700 border border-blue-200 rounded-xl bg-blue-50">
        Response time: 428ms • Status: 200 OK
      </div>
    ),
  },
  {
    id: 3,
    user: "Branch Staff",
    action: "สร้างรายการใหม่",
    target: "INS-2026-0002",
    description: "สาขาอุตรดิตถ์บันทึกข้อมูลคำขอประกันภัยใหม่",
    timestamp: "12 minutes ago",
    type: "create",
    severity: "info",
  },
  {
    id: 4,
    user: "Finance User",
    action: "Export รายงานประจำเดือน",
    target: "Monthly Report",
    description: "ดาวน์โหลดรายงาน Excel สำหรับสรุปยอดขายผู้บริหาร",
    timestamp: "25 minutes ago",
    type: "download",
    severity: "neutral",
  },
];

const auditActivities: ActivityFeedItemData[] = [
  {
    id: 1,
    user: "Admin User",
    action: "แก้ไขสิทธิ์ผู้ใช้งาน",
    target: "john@example.com",
    description: "เปลี่ยน role จาก Staff เป็น Manager",
    timestamp: "09:30",
    type: "update",
    severity: "warning",
    actions: (
      <button className="px-3 py-2 text-xs font-medium bg-white border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50">
        View
      </button>
    ),
  },
  {
    id: 2,
    user: "System",
    action: "ตรวจพบการ Login ล้มเหลวหลายครั้ง",
    target: "192.168.1.20",
    description: "มีการพยายามเข้าสู่ระบบผิดพลาดเกิน 5 ครั้ง",
    timestamp: "08:45",
    type: "warning",
    severity: "danger",
    meta: (
      <div className="p-3 text-xs text-red-700 border border-red-200 rounded-xl bg-red-50">
        Security warning: failed login attempts exceeded threshold
      </div>
    ),
  },
];

const PageActivityFeed = () => {
  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              ActivityFeed
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "ActivityFeed", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <SquareActivity className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>

      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          <div>
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Activity Feed
            </span>

            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <span className="cursor-pointer hover:text-blue-500">
                ระบบบริหารจัดการข้อมูล
              </span>
              <span className="mx-2">•</span>
              <span className="cursor-pointer">Display Components</span>
              <span className="mx-2">•</span>
              <span className="text-gray-700">Activity Feed</span>
            </div>
          </div>

          <div className="mr-5">
            <FolderKanban className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>

      <div className="w-full pb-2">
        <div className="space-y-5">
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Recent Activity Feed
            </h2>

            <ActivityFeedGroup
              title="Recent Activities"
              description="กิจกรรมล่าสุดที่เกิดขึ้นในระบบ"
              actions={
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              }
            >
              <ActivityFeed activities={todayActivities} />
            </ActivityFeedGroup>

            <div className="mt-4">
              <div className={contentBox}>
                Activity Feed ใช้แสดงกิจกรรมล่าสุดของระบบ เช่น login, create, approve, export, upload หรือ error log
              </div>
            </div>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Compact Activity Feed
            </h2>

            <ActivityFeedGroup
              title="Dashboard Widget"
              description="เหมาะกับ widget ด้านขวาของ dashboard"
            >
              <ActivityFeed activities={todayActivities.slice(0, 3)} compact />
            </ActivityFeedGroup>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Audit / Security Feed
            </h2>

            <ActivityFeedGroup
              title="Audit Logs"
              description="รายการกิจกรรมด้านความปลอดภัยและการเปลี่ยนแปลงสิทธิ์"
              actions={
                <button className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-600">
                  <Eye className="w-4 h-4" />
                  View All
                </button>
              }
            >
              <ActivityFeed activities={auditActivities} />
            </ActivityFeedGroup>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Insurance System Example
            </h2>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <ActivityFeedGroup
                title="Insurance Operations"
                description="กิจกรรมการทำรายการประกันภัย"
              >
                <ActivityFeed activities={todayActivities} />
              </ActivityFeedGroup>

              <ActivityFeedGroup
                title="Quick Summary"
                description="สรุปเหตุการณ์สำคัญ"
              >
                <div className="space-y-3">
                  <div className="p-4 border rounded-2xl border-emerald-200 bg-emerald-50">
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                      <ShieldCheck className="w-4 h-4" />
                      Approved Today
                    </div>
                    <p className="mt-2 text-2xl font-semibold text-emerald-800">
                      128
                    </p>
                  </div>

                  <div className="p-4 border border-blue-200 rounded-2xl bg-blue-50">
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
                      <Download className="w-4 h-4" />
                      Export Reports
                    </div>
                    <p className="mt-2 text-2xl font-semibold text-blue-800">
                      12
                    </p>
                  </div>
                </div>
              </ActivityFeedGroup>
            </div>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Empty Activity Feed
            </h2>

            <ActivityFeedGroup title="No Activities">
              <ActivityFeed activities={[]} />
            </ActivityFeedGroup>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageActivityFeed;
import {
  CheckCircle2,
  Clock3,
  FileText,
  RefreshCw,
  ShieldCheck,
  Truck,
  UserCheck,
  XCircle,
  ChartNoAxesGantt as TimelineIcon
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import {
  Timeline,
  TimelineGroup,
  type TimelineItemData,
} from "@/pages/GroupUIComponents/Components/Timeline";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const approvalTimeline: TimelineItemData[] = [
  {
    id: 1,
    title: "สร้างรายการใหม่",
    description: "พนักงานสาขาบันทึกข้อมูลคำขอประกันภัยเข้าสู่ระบบ",
    status: "success",
    user: "สาขาอุตรดิตถ์",
    date: "17 Jun 2026",
    time: "09:12",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "รอเจ้าหน้าที่ตรวจสอบ",
    description: "รายการถูกส่งเข้าสู่คิวตรวจสอบของเจ้าหน้าที่ส่วนกลาง",
    status: "processing",
    user: "System",
    date: "17 Jun 2026",
    time: "09:14",
    icon: <Clock3 className="w-4 h-4" />,
  },
  {
    id: 3,
    title: "อนุมัติรายการ",
    description: "เจ้าหน้าที่ตรวจสอบข้อมูลครบถ้วนและอนุมัติรายการ",
    status: "success",
    user: "Admin User",
    date: "17 Jun 2026",
    time: "10:05",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  {
    id: 4,
    title: "ส่งข้อมูลไปยังระบบภายนอก",
    description: "ระบบกำลังส่งข้อมูลไปยัง API ของคู่ค้า",
    status: "processing",
    user: "Integration Service",
    date: "17 Jun 2026",
    time: "10:06",
    icon: <RefreshCw className="w-4 h-4" />,
  },
];

const orderTimeline: TimelineItemData[] = [
  {
    id: "order-1",
    title: "Order Created",
    description: "ลูกค้าสร้างคำสั่งซื้อเรียบร้อยแล้ว",
    status: "success",
    date: "17 Jun 2026",
    time: "08:30",
  },
  {
    id: "order-2",
    title: "Payment Verified",
    description: "ตรวจสอบการชำระเงินสำเร็จ",
    status: "success",
    date: "17 Jun 2026",
    time: "08:42",
  },
  {
    id: "order-3",
    title: "Preparing Shipment",
    description: "กำลังจัดเตรียมสินค้าเพื่อส่งต่อให้ขนส่ง",
    status: "processing",
    date: "17 Jun 2026",
    time: "09:10",
    icon: <Truck className="w-4 h-4" />,
  },
  {
    id: "order-4",
    title: "Delivery Pending",
    description: "รอขนส่งเข้ารับสินค้า",
    status: "neutral",
    date: "17 Jun 2026",
    time: "Pending",
  },
];

const errorTimeline: TimelineItemData[] = [
  {
    id: 1,
    title: "ส่งข้อมูลไม่สำเร็จ",
    description: "External API ตอบกลับ error timeout กรุณาลองส่งใหม่อีกครั้ง",
    status: "danger",
    user: "Integration Service",
    date: "17 Jun 2026",
    time: "10:22",
    icon: <XCircle className="w-4 h-4" />,
    meta: (
      <div className="p-3 text-xs text-red-700 border border-red-200 rounded-xl bg-red-50">
        Error: Request timeout after 30 seconds
      </div>
    ),
    actions: (
      <button
        type="button"
        className="px-3 py-2 text-xs font-medium text-red-600 transition bg-white border border-red-200 rounded-xl hover:bg-red-50"
      >
        Retry
      </button>
    ),
  },
  {
    id: 2,
    title: "รอตรวจสอบจากเจ้าหน้าที่",
    description: "ระบบบันทึกสถานะ fail แล้ว และรอเจ้าหน้าที่กดส่งข้อมูลใหม่",
    status: "warning",
    user: "System",
    date: "17 Jun 2026",
    time: "10:23",
  },
];

const PageTimeline = () => {
  return (
    <>

      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Time Line
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Time Line", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <TimelineIcon className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>

      <div className="w-full pb-2">
        <div className="space-y-5">
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Timeline
            </h2>

            <TimelineGroup
              title="Insurance Approval Timeline"
              description="ลำดับเหตุการณ์ของรายการประกันภัยตั้งแต่สร้างรายการจนถึงส่ง API"
            >
              <Timeline items={approvalTimeline} />
            </TimelineGroup>

            <div className="mt-4">
              <div className={contentBox}>
                Timeline ใช้แสดงลำดับเหตุการณ์ เช่น approval flow, order tracking, activity log หรือ integration log
              </div>
            </div>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Card Timeline
            </h2>

            <TimelineGroup
              title="Order Tracking"
              description="Timeline แบบ card เหมาะกับข้อมูลที่ต้องอ่านรายละเอียดเยอะ"
            >
              <Timeline items={orderTimeline} variant="card" />
            </TimelineGroup>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Error / Retry Timeline
            </h2>

            <TimelineGroup
              title="Integration Error Timeline"
              description="ตัวอย่างใช้กับระบบส่งข้อมูลไป API ภายนอก"
              actions={
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white transition bg-blue-500 rounded-xl hover:bg-blue-600"
                >
                  View Logs
                </button>
              }
            >
              <Timeline items={errorTimeline} variant="card" />
            </TimelineGroup>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Compact Timeline
            </h2>

            <TimelineGroup
              title="Recent Activities"
              description="เหมาะกับ widget ด้านข้างหรือ dashboard summary"
            >
              <Timeline
                variant="compact"
                items={[
                  {
                    id: 1,
                    title: "User login",
                    description: "Tom Smile เข้าสู่ระบบ",
                    status: "success",
                    time: "2 minutes ago",
                    icon: <UserCheck className="w-4 h-4" />,
                  },
                  {
                    id: 2,
                    title: "Document approved",
                    description: "เอกสารเลขที่ DOC-2026-001 ถูกอนุมัติ",
                    status: "success",
                    time: "12 minutes ago",
                    icon: <CheckCircle2 className="w-4 h-4" />,
                  },
                  {
                    id: 3,
                    title: "Waiting review",
                    description: "มีรายการใหม่รอตรวจสอบ",
                    status: "processing",
                    time: "25 minutes ago",
                    icon: <Clock3 className="w-4 h-4" />,
                  },
                ]}
              />
            </TimelineGroup>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Real World Examples
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Approval Flow
                </p>

                <TimelineGroup>
                  <Timeline items={approvalTimeline.slice(0, 3)} />
                </TimelineGroup>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Integration Logs
                </p>

                <TimelineGroup>
                  <Timeline items={errorTimeline} variant="card" />
                </TimelineGroup>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageTimeline;
import { useState } from "react";
import { Edit3, Eye, FileText, Settings } from "lucide-react";
import { Drawer } from "./Drawer";

type DrawerCase = "detail" | "edit" | "settings" | null;

export default function DrawerDemo() {
  const [drawer, setDrawer] = useState<DrawerCase>(null);

  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Drawer / Slide Panel Pro
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          ใช้เปิดรายละเอียดหรือฟอร์มด้านข้าง โดยไม่ต้องออกจากหน้าหลัก
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setDrawer("detail")}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <Eye size={16} />
          View Detail
        </button>

        <button
          onClick={() => setDrawer("edit")}
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <Edit3 size={16} />
          Edit Form
        </button>

        <button
          onClick={() => setDrawer("settings")}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-900"
        >
          <Settings size={16} />
          Settings
        </button>
      </div>

      <Drawer
        open={drawer === "detail"}
        title="รายละเอียดรายการประกันภัย"
        description="ข้อมูลรายการขายและสถานะล่าสุด"
        size="lg"
        onClose={() => setDrawer(null)}
        footer={
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setDrawer(null)}
              className="px-4 py-2 text-sm font-semibold border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              ปิด
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700">
              พิมพ์รายงาน
            </button>
          </div>
        }
      >
        <div className="space-y-5">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800">
            <p className="text-sm text-slate-500">เลขอ้างอิง</p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">
              INS-2026-000128
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InfoItem label="ลูกค้า" value="สมชาย ใจดี" />
            <InfoItem label="เบี้ยประกัน" value="18,500 บาท" />
            <InfoItem label="สถานะ" value="รอตรวจสอบ" />
            <InfoItem label="สาขา" value="อุตรดิตถ์" />
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-slate-900 dark:text-white">
              Timeline
            </h3>
            <div className="space-y-3">
              <TimelineItem title="สร้างรายการ" time="18 มิ.ย. 2026 09:30" />
              <TimelineItem title="รอตรวจสอบเอกสาร" time="18 มิ.ย. 2026 10:15" />
              <TimelineItem title="รอส่ง API ภายนอก" time="18 มิ.ย. 2026 11:00" />
            </div>
          </div>
        </div>
      </Drawer>

      <Drawer
        open={drawer === "edit"}
        title="แก้ไขข้อมูลลูกค้า"
        description="ตัวอย่างฟอร์มแก้ไขข้อมูลใน Drawer"
        size="md"
        onClose={() => setDrawer(null)}
        footer={
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setDrawer(null)}
              className="px-4 py-2 text-sm font-semibold border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              ยกเลิก
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white rounded-xl bg-emerald-600 hover:bg-emerald-700">
              บันทึก
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input label="ชื่อ-นามสกุล" defaultValue="สมชาย ใจดี" />
          <Input label="เบอร์โทรศัพท์" defaultValue="081-234-5678" />
          <Input label="เลขบัตรประชาชน" defaultValue="1-2345-67890-12-3" />

          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              หมายเหตุ
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 text-sm border outline-none rounded-xl border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800"
              placeholder="ระบุหมายเหตุเพิ่มเติม"
            />
          </div>
        </div>
      </Drawer>

      <Drawer
        open={drawer === "settings"}
        title="Quick Settings"
        description="ตั้งค่าการแสดงผลและการแจ้งเตือน"
        position="bottom"
        size="full"
        onClose={() => setDrawer(null)}
      >
        <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto md:grid-cols-3">
          <SettingCard title="Email Alert" description="แจ้งเตือนผ่าน Email" />
          <SettingCard title="Telegram Alert" description="แจ้งเตือนผ่าน Telegram" />
          <SettingCard title="Auto Refresh" description="รีเฟรชข้อมูลอัตโนมัติ" />
        </div>
      </Drawer>
    </>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 border rounded-2xl border-slate-200 dark:border-slate-700">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

function TimelineItem({ title, time }: { title: string; time: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-3 h-3 mt-1 bg-blue-600 rounded-full" />
      <div>
        <p className="text-sm font-semibold text-slate-800 dark:text-white">
          {title}
        </p>
        <p className="text-xs text-slate-500">{time}</p>
      </div>
    </div>
  );
}

function Input({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        className="w-full px-4 py-3 text-sm border outline-none rounded-xl border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800"
      />
    </div>
  );
}

function SettingCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-900">
      <FileText className="mb-4 text-blue-600" size={22} />
      <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  );
}
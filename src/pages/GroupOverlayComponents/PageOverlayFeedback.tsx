import { useState } from "react";
import { 
  Info, 
  HelpCircle, 
  AlertCircle,
  SendToBack,
  MoreHorizontal,
  CheckCircle, 
  Send, 
  Trash2,
  XCircle
} from "lucide-react";

type DialogCase = "delete" | "approve" | "sendApi" | "cancel" | null;

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";


import { Tooltip } from "@/pages/GroupOverlayComponents/Components/Tooltip/Tooltip";
import { Popover } from "@/pages/GroupOverlayComponents/Components/Popover/Popover";
import ToastDemo from "@/pages/GroupOverlayComponents/Components/Toast/ToastDemo";

import { 
  SkeletonCard,
  SkeletonProfile,
  SkeletonTable 
} from "@/pages/GroupOverlayComponents/Components/Loading/Skeleton";
import { Spinner } from "@/pages/GroupOverlayComponents/Components/Loading/Spinner";
import { ConfirmDialog } from "@/pages/GroupOverlayComponents/Components/ConfirmDialog/ConfirmDialog";

import DrawerDemo from "@/pages/GroupOverlayComponents/Components/Drawer/DrawerDemo";
import CommandPaletteDemo from "@/pages/GroupOverlayComponents/Components/CommandPalette/CommandPaletteDemo";

export default function PageOverlayFeedback() {

  const [dialog, setDialog] = useState<DialogCase>(null);
  const [loading, setLoading] = useState(false);

  const closeDialog = () => {
    if (loading) return;
    setDialog(null);
  };

  const handleConfirm = () => {
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
      setDialog(null);
    }, 1200);
  };



  return (
    <>
      <div className="w-full gap-4 p-3 pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Overlay / Feedback
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "Overlay / Feedback", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <SendToBack className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full gap-4 p-3 pb-2">
        <h2 className="mb-4 text-lg font-semibold text-slate-800">Tooltip</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-6 dark:bg-slate-900 dark:text-white ">
            <h2 className="mb-6 text-lg font-semibold text-slate-900">
              Basic Tooltip
            </h2>
            <div className="flex flex-wrap gap-6">
              <Tooltip content="ข้อมูลเพิ่มเติมของรายการนี้" position="top">
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-xl border-slate-200 hover:bg-slate-50">
                  <Info size={16} />
                  Top
                </button>
              </Tooltip>

              <Tooltip content="แสดงด้านล่าง" position="bottom">
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-xl border-slate-200 hover:bg-slate-50">
                  <HelpCircle size={16} />
                  Bottom
                </button>
              </Tooltip>

              <Tooltip content="แจ้งเตือนความเสี่ยง" position="right">
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm text-red-700 border border-red-200 rounded-xl bg-red-50">
                  <AlertCircle size={16} />
                  Warning
                </button>
              </Tooltip>
              
              <Popover
                trigger={
                  <span className="px-4 py-2 text-sm border rounded-xl border-slate-200">
                    <MoreHorizontal size={16} />
                  </span>
                }
              >
              <div className="space-y-1">
                <button className="w-full px-3 py-2 text-sm text-left rounded-lg hover:bg-slate-100">
                  แก้ไขข้อมูล
                </button>
                <button className="w-full px-3 py-2 text-sm text-left rounded-lg hover:bg-slate-100">
                  ทำสำเนา
                </button>
                <button className="w-full px-3 py-2 text-sm text-left text-red-600 rounded-lg hover:bg-red-50">
                  ลบข้อมูล
                </button>
              </div>
            </Popover>
            </div>
          </div>
          <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-6 dark:bg-slate-900 dark:text-white ">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Tooltip ใช้กับ Field Label
            </h2>
            <div className="max-w-md space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                ยอดขายเป้าหมาย
                <Tooltip content="ยอดขายรวมที่ต้องทำให้ถึงในเดือนนี้">
                  <Info size={15} className="text-slate-400" />
                </Tooltip>
              </label>

              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="เช่น 3,000,000"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full gap-4 p-3 pb-2">
        <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
          <ToastDemo />
        </div>
      </div>
      
      <div className="w-full gap-4 p-3 pb-2">
        <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
          <div className="mb-6 text-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Loading Spinner / Skeleton Pro
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              ใช้แสดงสถานะระหว่างโหลดข้อมูลจาก API หรือรอประมวลผล
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Spinner Sizes
              </h3>

              <div className="flex flex-wrap items-center gap-6">
                <Spinner size="sm" label="Small" />
                <Spinner size="md" label="Medium" />
                <Spinner size="lg" label="Large" />
                <Spinner size="xl" label="Extra Large" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Skeleton Loading
              </h3>

              <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                <SkeletonCard />
                <SkeletonProfile />
                <SkeletonTable />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="w-full gap-4 p-3 pb-2">
        <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
          <div className="mb-6 text-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Confirm Dialog Pro
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              ใช้ยืนยันการทำรายการสำคัญ เช่น ลบข้อมูล อนุมัติรายการ หรือส่งข้อมูลไป API
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setDialog("delete")}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
            >
              <Trash2 size={16} />
              Delete
            </button>

            <button
              onClick={() => setDialog("approve")}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              <CheckCircle size={16} />
              Approve
            </button>

            <button
              onClick={() => setDialog("sendApi")}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <Send size={16} />
              Send API
            </button>

            <button
              onClick={() => setDialog("cancel")}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
            >
              <XCircle size={16} />
              Cancel
            </button>
          </div>

          <ConfirmDialog
            open={dialog === "delete"}
            type="danger"
            title="ลบข้อมูลรายการนี้?"
            description="เมื่อลบแล้ว ข้อมูลนี้จะไม่สามารถกู้คืนได้ กรุณาตรวจสอบให้แน่ใจก่อนดำเนินการ"
            confirmText="ลบข้อมูล"
            cancelText="ยกเลิก"
            loading={loading}
            onCancel={closeDialog}
            onConfirm={handleConfirm}
          >
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                รายการ: INS-2026-000128
              </p>
              <p>ลูกค้า: สมชาย ใจดี</p>
              <p>สถานะปัจจุบัน: รอตรวจสอบ</p>
            </div>
          </ConfirmDialog>

          <ConfirmDialog
            open={dialog === "approve"}
            type="success"
            title="อนุมัติรายการนี้?"
            description="ระบบจะเปลี่ยนสถานะรายการเป็นอนุมัติเรียบร้อย และแจ้งผลไปยังเจ้าหน้าที่ที่เกี่ยวข้อง"
            confirmText="อนุมัติ"
            cancelText="กลับไปตรวจสอบ"
            loading={loading}
            onCancel={closeDialog}
            onConfirm={handleConfirm}
          >
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                รายการขายประกันภัย
              </p>
              <p>เลขอ้างอิง: LV0-2026-00321</p>
              <p>เบี้ยประกัน: 18,500 บาท</p>
            </div>
          </ConfirmDialog>

          <ConfirmDialog
            open={dialog === "sendApi"}
            type="info"
            title="ส่งข้อมูลไปยัง API ภายนอก?"
            description="ระบบจะส่งข้อมูลรายการนี้ไปยังระบบปลายทาง หากสำเร็จสถานะจะถูกอัปเดตอัตโนมัติ"
            confirmText="ส่งข้อมูล"
            cancelText="ยังไม่ส่ง"
            loading={loading}
            onCancel={closeDialog}
            onConfirm={handleConfirm}
          >
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                External API
              </p>
              <p>Action: Submit Insurance Application</p>
              <p>Retry ได้หากส่งไม่สำเร็จ</p>
            </div>
          </ConfirmDialog>

          <ConfirmDialog
            open={dialog === "cancel"}
            type="warning"
            title="ยกเลิกรายการนี้?"
            description="รายการนี้จะถูกเปลี่ยนสถานะเป็นยกเลิก และอาจส่งผลต่อรายงานประจำวัน"
            confirmText="ยืนยันยกเลิก"
            cancelText="ไม่ยกเลิก"
            loading={loading}
            onCancel={closeDialog}
            onConfirm={handleConfirm}
          >
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                คำเตือน
              </p>
              <p>ควรระบุเหตุผลการยกเลิกในระบบก่อนดำเนินการจริง</p>
            </div>
          </ConfirmDialog>
        </div>
      </div>
      
      <div className="w-full gap-4 p-3 pb-2">
        <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
          <DrawerDemo/>
        </div>
      </div>
      <div className="w-full gap-4 p-3 pb-2">
        <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
          <CommandPaletteDemo/>
        </div>
      </div>
    </>

    
  );
}
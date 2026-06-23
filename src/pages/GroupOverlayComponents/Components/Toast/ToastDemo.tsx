import { useToast } from "./ToastProvider";

export default function ToastDemo() {
  const toast = useToast()

  return (
    <>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Toast Notification Pro
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          ใช้แจ้งผลลัพธ์ เช่น บันทึกสำเร็จ, เกิดข้อผิดพลาด, แจ้งเตือน หรือข้อมูลใหม่
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() =>
            toast.success("บันทึกข้อมูลสำเร็จ", "ข้อมูลถูกบันทึกเข้าระบบเรียบร้อยแล้ว")
          }
          className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-emerald-600 hover:bg-emerald-700"
        >
          Success Toast
        </button>

        <button
          onClick={() =>
            toast.error("บันทึกไม่สำเร็จ", "กรุณาตรวจสอบข้อมูลแล้วลองใหม่อีกครั้ง")
          }
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-xl hover:bg-red-700"
        >
          Error Toast
        </button>

        <button
          onClick={() =>
            toast.warning("กรุณาตรวจสอบข้อมูล", "มีบางช่องที่ยังไม่ได้กรอกให้ครบถ้วน")
          }
          className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-amber-500 hover:bg-amber-600"
        >
          Warning Toast
        </button>

        <button
          onClick={() =>
            toast.info("มีข้อมูลใหม่", "ระบบได้รับรายการใหม่จากสาขาแล้ว")
          }
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700"
        >
          Info Toast
        </button>
      </div>
    </>
    
  );
}
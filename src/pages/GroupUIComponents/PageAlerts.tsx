import {
  AlertCircle,
  AlertTriangle,
  BadgeInfo,
  CheckCircle2,
  X,
} from "lucide-react";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const PageAlerts = () => {

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Alerts
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <span className="cursor-pointer hover:text-blue-500">
                ระบบบริหารจัดการข้อมูล
              </span>
              <span className="mx-2">•</span>
              <span className="cursor-pointer">
                UI Components
              </span>
              <span className="mx-2">•</span>
              <span className="text-gray-700">
                Alerts
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <AlertTriangle className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Solid Alerts */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Solid Alerts</h2>

            <div className="space-y-4">
              <div className="px-4 py-3 text-white bg-blue-500 border border-blue-200 rounded-2xl">
                <div className="flex items-start gap-3">
                  <BadgeInfo className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Information</h3>
                    <p className="mt-1 text-sm text-blue-50">
                      This is an informational alert for the user.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 text-white border rounded-2xl border-emerald-200 bg-emerald-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Success</h3>
                    <p className="mt-1 text-sm text-emerald-50">
                      Your data has been saved successfully.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 text-white border rounded-2xl border-amber-200 bg-amber-500">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Warning</h3>
                    <p className="mt-1 text-sm text-amber-50">
                      Please double-check your input before continuing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 text-white border rounded-2xl border-rose-200 bg-rose-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Error</h3>
                    <p className="mt-1 text-sm text-rose-50">
                      Something went wrong. Please try again later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Soft Alerts */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Soft Alerts</h2>

            <div className="space-y-4">
              <div className="px-4 py-3 text-blue-800 border border-blue-200 rounded-2xl bg-blue-50">
                <div className="flex items-start gap-3">
                  <BadgeInfo className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Information Alert</h3>
                    <p className="mt-1 text-sm text-blue-700">
                      This page contains general information for users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 border rounded-2xl border-emerald-200 bg-emerald-50 text-emerald-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="font-semibold">Success Alert</h3>
                    <p className="mt-1 text-sm text-emerald-700">
                      The operation was completed successfully.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 border rounded-2xl border-amber-200 bg-amber-50 text-amber-800">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <h3 className="font-semibold">Warning Alert</h3>
                    <p className="mt-1 text-sm text-amber-700">
                      Your session will expire soon. Please save your changes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 border rounded-2xl border-rose-200 bg-rose-50 text-rose-800">
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                  <div>
                    <h3 className="font-semibold">Error Alert</h3>
                    <p className="mt-1 text-sm text-rose-700">
                      Unable to connect to the server at this time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Alerts with Close Button */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Dismissible Alerts
            </h2>

            <div className="space-y-4">
              <div className="flex items-start justify-between px-4 py-3 border border-blue-200 rounded-2xl bg-blue-50">
                <div className="flex items-start gap-3">
                  <BadgeInfo className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Closable Info</h3>
                    <p className="mt-1 text-sm text-blue-700">
                      You can add a dismiss button to hide this alert.
                    </p>
                  </div>
                </div>

                <button className="rounded-lg p-1.5 text-blue-500 hover:bg-blue-100">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-start justify-between px-4 py-3 border rounded-2xl border-emerald-200 bg-emerald-50">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="font-semibold text-emerald-800">Closable Success</h3>
                    <p className="mt-1 text-sm text-emerald-700">
                      Record has been updated successfully.
                    </p>
                  </div>
                </div>

                <button className="rounded-lg p-1.5 text-emerald-500 hover:bg-emerald-100">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Compact Alerts */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Compact Alerts</h2>

            <div className="space-y-3">
              <div className="px-3 py-2 text-sm text-blue-700 border border-blue-200 rounded-xl bg-blue-50">
                Info: ระบบจะปิดรับข้อมูลเวลา 16:30 น.
              </div>

              <div className="px-3 py-2 text-sm border rounded-xl border-emerald-200 bg-emerald-50 text-emerald-700">
                Success: บันทึกข้อมูลเรียบร้อยแล้ว
              </div>

              <div className="px-3 py-2 text-sm border rounded-xl border-amber-200 bg-amber-50 text-amber-700">
                Warning: กรุณาตรวจสอบข้อมูลก่อนกดยืนยัน
              </div>

              <div className="px-3 py-2 text-sm border rounded-xl border-rose-200 bg-rose-50 text-rose-700">
                Error: ไม่สามารถเชื่อมต่อฐานข้อมูลได้
              </div>
            </div>
          </section>

          {/* Alerts with Actions */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Alerts with Actions</h2>

            <div className="space-y-4">
              <div className="px-4 py-4 border rounded-2xl border-amber-200 bg-amber-50">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <div>
                      <h3 className="font-semibold text-amber-800">
                        Session Expiring Soon
                      </h3>
                      <p className="mt-1 text-sm text-amber-700">
                        Your session will expire in 2 minutes. Please save your work.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-medium bg-white border rounded-xl border-amber-200 text-amber-700">
                      Dismiss
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-amber-500">
                      Extend Session
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-4 py-4 border rounded-2xl border-rose-200 bg-rose-50">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                    <div>
                      <h3 className="font-semibold text-rose-800">
                        Delete Confirmation Needed
                      </h3>
                      <p className="mt-1 text-sm text-rose-700">
                        This action cannot be undone. Please confirm carefully.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-medium bg-white border rounded-xl border-rose-200 text-rose-700">
                      Cancel
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-rose-500">
                      Delete Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Real World Examples */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Real World Examples
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Form Result Alerts
                </p>

                <div className="space-y-3">
                  <div className="px-4 py-3 text-sm border rounded-xl border-emerald-200 bg-emerald-50 text-emerald-700">
                    บันทึกข้อมูลพนักงานเรียบร้อยแล้ว
                  </div>

                  <div className="px-4 py-3 text-sm border rounded-xl border-rose-200 bg-rose-50 text-rose-700">
                    ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Page Notice
                </p>

                <div className="px-4 py-4 border border-blue-200 rounded-2xl bg-blue-50">
                  <div className="flex items-start gap-3">
                    <BadgeInfo className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-blue-800">
                        Important Information
                      </h3>
                      <p className="mt-1 text-sm text-blue-700">
                        หน้านี้ใช้สำหรับจัดการข้อมูลผู้ใช้งานและกำหนดสิทธิ์การเข้าถึงระบบ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageAlerts

import { BadgeCheck } from "lucide-react";

const PageBadges = () => {

  const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Badges
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
                Badges
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <BadgeCheck className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
         {/* Solid Badges */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Solid Badges</h2>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                Primary
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-slate-700">
                Secondary
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-emerald-500">
                Success
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-amber-500">
                Warning
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-rose-500">
                Danger
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-white bg-purple-500 rounded-full">
                New
              </span>
            </div>
          </section>

          {/* Soft Badges */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Soft Badges</h2>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                Primary
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">
                Secondary
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                Success
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">
                Warning
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700">
                Danger
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-700">
                Draft
              </span>
            </div>
          </section>

          {/* Outline Badges */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Outline Badges</h2>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-200 rounded-full bg-blue-50">
                Primary
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-white border rounded-full text-slate-700 border-slate-200">
                Secondary
              </span>
              <span className="px-3 py-1 text-xs font-semibold border rounded-full text-emerald-700 border-emerald-200 bg-emerald-50">
                Success
              </span>
              <span className="px-3 py-1 text-xs font-semibold border rounded-full text-amber-700 border-amber-200 bg-amber-50">
                Warning
              </span>
              <span className="px-3 py-1 text-xs font-semibold border rounded-full text-rose-700 border-rose-200 bg-rose-50">
                Danger
              </span>
            </div>
          </section>

          {/* Status Badges */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Status Badges</h2>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                Active
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">
                Pending
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">
                Draft
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                Approved
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700">
                Cancelled
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-700">
                Processing
              </span>
            </div>
          </section>

          {/* Dot Badges */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Dot Badges</h2>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Online
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Pending
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Offline
              </span>
            </div>
          </section>

          {/* Size Variants */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Badge Sizes</h2>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-blue-100 text-blue-700">
                Small
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                Medium
              </span>
              <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-blue-100 text-blue-700">
                Large
              </span>
            </div>
          </section>

          {/* Badge with Number */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Badge with Number</h2>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                Messages
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 text-[10px] text-white bg-blue-500 rounded-full">
                  8
                </span>
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700">
                Notifications
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 text-[10px] text-white bg-rose-500 rounded-full">
                  12
                </span>
              </span>
            </div>
          </section>

          {/* Real World Examples */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Real World Examples</h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {/* Table Status */}
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">Table Status</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-xl border-slate-200">
                    <span className="text-sm text-slate-700">Order #1001</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-xl border-slate-200">
                    <span className="text-sm text-slate-700">Order #1002</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">
                      Pending
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-xl border-slate-200">
                    <span className="text-sm text-slate-700">Order #1003</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700">
                      Cancelled
                    </span>
                  </div>
                </div>
              </div>

              {/* User Role / Priority */}
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">User Role / Priority</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-xl border-slate-200">
                    <span className="text-sm text-slate-700">John Doe</span>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-700">
                        Admin
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700">
                        High
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-xl border-slate-200">
                    <span className="text-sm text-slate-700">Jane Smith</span>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                        Editor
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">
                        Medium
                      </span>
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

export default PageBadges

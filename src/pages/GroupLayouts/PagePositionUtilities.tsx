import { LocateFixed } from "lucide-react"
import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";


const PagePositionUtilities = () => {

  const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

  const labelClass = "mb-2 text-sm font-medium text-slate-600";

  const demoArea =
  "relative min-h-[180px] rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 overflow-hidden";



  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Position Utilities
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "Layout" },
                  { label: "Position Utilities", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <LocateFixed size={64}/>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Relative / Absolute */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Relative & Absolute
            </h2>

            <p className={labelClass}>Parent: relative / Child: absolute</p>
            <div className={demoArea}>
              <div className="flex items-center justify-center w-40 h-24 text-sm font-medium border rounded-xl bg-sky-100 border-sky-200 text-slate-700">
                relative parent
              </div>

              <div className="absolute px-4 py-2 text-sm font-medium border shadow-sm top-4 right-4 rounded-xl bg-rose-100 border-rose-200 text-slate-700">
                absolute top-4 right-4
              </div>
            </div>
          </section>

          {/* Top / Right / Bottom / Left */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Top / Right / Bottom / Left
            </h2>

            <div className={demoArea}>
              <div className="absolute px-3 py-2 text-sm bg-blue-100 border border-blue-200 rounded-lg top-3 left-3">
                top-3 left-3
              </div>

              <div className="absolute px-3 py-2 text-sm bg-green-100 border border-green-200 rounded-lg top-3 right-3">
                top-3 right-3
              </div>

              <div className="absolute px-3 py-2 text-sm border rounded-lg bottom-3 left-3 bg-amber-100 border-amber-200">
                bottom-3 left-3
              </div>

              <div className="absolute px-3 py-2 text-sm bg-purple-100 border border-purple-200 rounded-lg right-3 bottom-3">
                bottom-3 right-3
              </div>
            </div>
          </section>

          {/* Inset / Center */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Center Position
            </h2>

            <div className={demoArea}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-5 py-3 text-sm font-medium border shadow-sm rounded-xl bg-emerald-100 border-emerald-200 text-slate-700">
                  absolute inset-0 + flex center
                </div>
              </div>
            </div>
          </section>

          {/* Z-Index */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Z-Index</h2>

            <div className="relative h-40 p-4 border border-dashed rounded-2xl border-slate-300 bg-slate-50">
              <div className="absolute z-10 flex items-center justify-center w-32 h-20 text-sm font-medium border left-8 top-8 rounded-xl bg-sky-200 border-sky-300">
                z-10
              </div>

              <div className="absolute z-20 flex items-center justify-center w-32 h-20 text-sm font-medium border left-20 top-14 rounded-xl bg-rose-200 border-rose-300">
                z-20
              </div>

              <div className="absolute z-30 flex items-center justify-center w-32 h-20 text-sm font-medium border left-32 top-20 rounded-xl bg-amber-200 border-amber-300">
                z-30
              </div>
            </div>
          </section>

          {/* Fixed */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Fixed</h2>

            <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
              <p className="mb-3 text-sm text-slate-600">
                ใช้กับ element ที่ต้องลอยติดหน้าจอ เช่น floating action button,
                mobile menu, modal overlay
              </p>

              <div className="relative h-40 bg-white border border-dashed rounded-xl border-slate-300">
                <div className="absolute px-4 py-2 text-sm font-medium bg-blue-100 border border-blue-200 bottom-4 right-4 rounded-xl text-slate-700">
                  ตัวอย่างใน preview area
                </div>
              </div>

              <div className="px-4 py-3 mt-4 text-sm rounded-xl bg-slate-100 text-slate-700">
                className="fixed z-50 bottom-4 right-4"
              </div>
            </div>
          </section>

          {/* Sticky */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Sticky</h2>

            <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
              <p className="mb-3 text-sm text-slate-600">
                เหมาะกับ table header, page header, filter bar
              </p>

              <div className="h-56 overflow-y-auto bg-white border border-dashed rounded-xl border-slate-300">
                <div className="sticky top-0 z-10 px-4 py-3 text-sm font-medium border-b bg-emerald-100 border-emerald-200 text-slate-700">
                  sticky top-0
                </div>

                <div className="p-4 space-y-2">
                  <div className="p-3 rounded-lg bg-slate-100">Row 1</div>
                  <div className="p-3 rounded-lg bg-slate-100">Row 2</div>
                  <div className="p-3 rounded-lg bg-slate-100">Row 3</div>
                  <div className="p-3 rounded-lg bg-slate-100">Row 4</div>
                  <div className="p-3 rounded-lg bg-slate-100">Row 5</div>
                  <div className="p-3 rounded-lg bg-slate-100">Row 6</div>
                  <div className="p-3 rounded-lg bg-slate-100">Row 7</div>
                  <div className="p-3 rounded-lg bg-slate-100">Row 8</div>
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
              {/* Notification badge */}
              <div className="p-4 border border-slate-200 rounded-2xl bg-slate-50">
                <p className={labelClass}>Notification Badge</p>

                <div className="relative inline-flex">
                  <div className="flex items-center justify-center w-16 h-16 font-medium border rounded-2xl bg-sky-100 border-sky-200 text-slate-700">
                    Icon
                  </div>
                  <span className="absolute flex items-center justify-center h-6 px-1 text-xs font-semibold text-white rounded-full -top-2 -right-2 min-w-6 bg-rose-500">
                    9
                  </span>
                </div>

                <div className="px-4 py-3 mt-4 text-sm rounded-xl bg-slate-100 text-slate-700">
                  className="relative" + badge: "absolute -top-2 -right-2"
                </div>
              </div>

              {/* Close button */}
              <div className="p-4 border border-slate-200 rounded-2xl bg-slate-50">
                <p className={labelClass}>Card with Close Button</p>

                <div className="relative p-5 bg-white border rounded-2xl border-slate-200">
                  <button className="absolute w-8 h-8 rounded-full top-3 right-3 bg-slate-100 hover:bg-slate-200 text-slate-600">
                    ×
                  </button>
                  <h3 className="text-base font-semibold text-slate-800">
                    Example Card
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    ใช้ absolute กับปุ่ม close หรือ action มุมขวาบน
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PagePositionUtilities

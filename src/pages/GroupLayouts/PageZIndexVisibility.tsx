import { Layers } from "lucide-react";
import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";


const PageZIndexVisibility = () => {

  const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

  // const labelClass = "mb-2 text-sm font-medium text-slate-600";

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Flex Utilities
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "Layout" },
                  { label: "Flex Utilities", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Layers size={64}/>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Z-Index */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold">Z-Index</h2>

            <div className="relative h-40 border border-dashed bg-slate-50 rounded-xl">
              <div className="absolute z-10 flex items-center justify-center w-32 h-20 left-10 top-10 bg-sky-200 rounded-xl">
                z-10
              </div>
              <div className="absolute z-20 flex items-center justify-center w-32 h-20 left-20 top-16 bg-rose-200 rounded-xl">
                z-20
              </div>
              <div className="absolute z-30 flex items-center justify-center w-32 h-20 left-32 top-24 bg-amber-200 rounded-xl">
                z-30
              </div>
            </div>
          </section>

          {/* Visibility */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold">Visibility</h2>

            <div className="flex gap-4">
              <div className="visible px-4 py-3 bg-green-100 rounded-xl">
                visible
              </div>
              <div className="invisible px-4 py-3 bg-red-100 rounded-xl">
                invisible
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-500">
              invisible = ซ่อนแต่ยังจองพื้นที่อยู่
            </p>
          </section>

          {/* Opacity */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold">Opacity</h2>

            <div className="flex gap-4">
              <div className="px-4 py-3 bg-blue-100 opacity-100 rounded-xl">
                opacity-100
              </div>
              <div className="px-4 py-3 bg-blue-100 opacity-50 rounded-xl">
                opacity-50
              </div>
              <div className="px-4 py-3 bg-blue-100 opacity-20 rounded-xl">
                opacity-20
              </div>
            </div>
          </section>

          {/* Real Example */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold">Real Example</h2>

            <div className="relative p-6 bg-white border rounded-xl">
              <div className="absolute z-50 px-2 py-1 text-xs text-white bg-red-500 rounded-full top-2 right-2">
                Notification
              </div>

              <p className="text-sm text-slate-600">
                ใช้ z-50 สำหรับ badge / modal / dropdown
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageZIndexVisibility

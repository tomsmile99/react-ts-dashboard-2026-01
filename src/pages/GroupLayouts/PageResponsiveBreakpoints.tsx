
import { Smartphone, Tablet, Monitor, MonitorCog } from "lucide-react";
import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

const PageResponsiveBreakpoints = () => {

  const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

  const labelClass = "mb-2 text-sm font-medium text-slate-600";

  const boxClass =
  "rounded-xl border text-slate-700 text-sm font-medium text-center px-4 py-3";

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Responsive Breakpoints
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "Layout" },
                  { label: "Responsive Breakpoints", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <div className="flex items-center gap-2 mr-2">
              <Smartphone className="w-6 h-6 text-slate-600" />
              <Tablet className="w-7 h-7 text-slate-600" />
              <Monitor className="w-8 h-8 text-slate-600" />
              <MonitorCog className="w-9 h-9 text-slate-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Breakpoint Table */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Breakpoint Reference
            </h2>

            <div className="overflow-x-auto border rounded-xl border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left">Prefix</th>
                    <th className="px-4 py-3 text-left">Min Width</th>
                    <th className="px-4 py-3 text-left">Typical Device</th>
                    <th className="px-4 py-3 text-left">Example</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">default</td>
                    <td className="px-4 py-3">0px+</td>
                    <td className="px-4 py-3">Mobile</td>
                    <td className="px-4 py-3">text-sm</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">sm</td>
                    <td className="px-4 py-3">640px+</td>
                    <td className="px-4 py-3">Large Mobile / Small Tablet</td>
                    <td className="px-4 py-3">sm:text-base</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">md</td>
                    <td className="px-4 py-3">768px+</td>
                    <td className="px-4 py-3">Tablet</td>
                    <td className="px-4 py-3">md:grid-cols-2</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">lg</td>
                    <td className="px-4 py-3">1024px+</td>
                    <td className="px-4 py-3">Laptop</td>
                    <td className="px-4 py-3">lg:flex</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">xl</td>
                    <td className="px-4 py-3">1280px+</td>
                    <td className="px-4 py-3">Desktop</td>
                    <td className="px-4 py-3">xl:grid-cols-4</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">2xl</td>
                    <td className="px-4 py-3">1536px+</td>
                    <td className="px-4 py-3">Large Desktop</td>
                    <td className="px-4 py-3">2xl:max-w-7xl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Text Responsive */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Responsive Text
            </h2>

            <div className="p-4 border border-dashed rounded-2xl border-slate-300 bg-slate-50">
              <div className="px-4 py-4 text-sm font-semibold text-center bg-blue-100 border border-blue-200 rounded-xl text-slate-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
              </div>
            </div>
          </section>

          {/* Responsive Grid */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Responsive Grid
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className={`${boxClass} border-sky-200 bg-sky-100`}>Column 1</div>
              <div className={`${boxClass} border-sky-200 bg-sky-100`}>Column 2</div>
              <div className={`${boxClass} border-sky-200 bg-sky-100`}>Column 3</div>
              <div className={`${boxClass} border-sky-200 bg-sky-100`}>Column 4</div>
            </div>

            <div className="px-4 py-3 mt-4 text-sm rounded-xl bg-slate-100 text-slate-700">
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
            </div>
          </section>

          {/* Responsive Width */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Responsive Width
            </h2>

            <div className="flex justify-center">
              <div className="w-full px-4 py-3 text-sm font-medium text-center border rounded-xl border-emerald-200 bg-emerald-100 text-slate-700 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2">
                w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2
              </div>
            </div>
          </section>

          {/* Responsive Show / Hide */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Responsive Show / Hide
            </h2>

            <div className="space-y-4">
              <div className="block px-4 py-3 text-sm font-medium border rounded-xl border-rose-200 bg-rose-100 text-slate-700 md:hidden">
                แสดงเฉพาะหน้าจอเล็ก - block md:hidden
              </div>

              <div className="hidden px-4 py-3 text-sm font-medium bg-indigo-100 border border-indigo-200 rounded-xl text-slate-700 md:block">
                แสดงตั้งแต่ md ขึ้นไป - hidden md:block
              </div>

              <div className="hidden px-4 py-3 text-sm font-medium border rounded-xl border-amber-200 bg-amber-100 text-slate-700 lg:flex lg:items-center lg:justify-between">
                <span>แสดงแบบ flex ตั้งแต่ lg ขึ้นไป</span>
                <button className="rounded-lg bg-white px-3 py-1.5 text-sm shadow-sm">
                  Action
                </button>
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
                <p className={labelClass}>Page Header</p>
                <div className="flex flex-col gap-3 p-4 bg-white border rounded-xl border-slate-200 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 md:text-xl">
                      Dashboard Overview
                    </h3>
                    <p className="text-sm text-slate-500">
                      text-sm md:text-base
                    </p>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl">
                    Add New
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className={labelClass}>Responsive Card Layout</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="px-4 py-6 text-sm font-medium text-center bg-purple-100 rounded-xl text-slate-700">
                    Card 1
                  </div>
                  <div className="px-4 py-6 text-sm font-medium text-center bg-purple-100 rounded-xl text-slate-700">
                    Card 2
                  </div>
                  <div className="px-4 py-6 text-sm font-medium text-center bg-purple-100 rounded-xl text-slate-700">
                    Card 3
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

export default PageResponsiveBreakpoints

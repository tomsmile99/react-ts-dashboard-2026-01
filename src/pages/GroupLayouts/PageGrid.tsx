
import { LayoutPanelTop } from "lucide-react"


const PageGrid = () => {
  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Grid system
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <span className="cursor-pointer hover:text-blue-500">
                ระบบบริหารจัดการข้อมูล
              </span>
              <span className="mx-2">•</span>
              <span className="cursor-pointer">
                Layout
              </span>
              <span className="mx-2">•</span>
              <span className="text-gray-700">
                Grid system
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <LayoutPanelTop size={64}/>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          <section className="p-5 bg-white border shadow-sm border-slate-200 rounded-2xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Basic Grid</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 text-center rounded-xl bg-sky-100">Column 1</div>
              <div className="p-4 text-center rounded-xl bg-sky-100">Column 2</div>
              <div className="p-4 text-center rounded-xl bg-sky-100">Column 3</div>
              <div className="p-4 text-center rounded-xl bg-sky-100">Column 4</div>
            </div>
          </section>

          <section className="p-5 bg-white border shadow-sm border-slate-200 rounded-2xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">12 Column Grid</h2>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 p-4 text-center bg-purple-100 rounded-xl md:col-span-8">col-8</div>
              <div className="col-span-12 p-4 text-center bg-purple-100 rounded-xl md:col-span-4">col-4</div>

              <div className="col-span-12 p-4 text-center bg-green-100 rounded-xl md:col-span-3">col-3</div>
              <div className="col-span-12 p-4 text-center bg-green-100 rounded-xl md:col-span-6">col-6</div>
              <div className="col-span-12 p-4 text-center bg-green-100 rounded-xl md:col-span-3">col-3</div>
            </div>
          </section>

          <section className="p-5 bg-white border shadow-sm border-slate-200 rounded-2xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Responsive Example</h2>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 p-4 text-center rounded-xl bg-amber-100 md:col-span-6 xl:col-span-3">
                col-span-12 md:col-span-6 xl:col-span-3
              </div>
              <div className="col-span-12 p-4 text-center rounded-xl bg-amber-100 md:col-span-6 xl:col-span-3">
                col-span-12 md:col-span-6 xl:col-span-3
              </div>
              <div className="col-span-12 p-4 text-center rounded-xl bg-amber-100 md:col-span-6 xl:col-span-3">
                col-span-12 md:col-span-6 xl:col-span-3
              </div>
              <div className="col-span-12 p-4 text-center rounded-xl bg-amber-100 md:col-span-6 xl:col-span-3">
                col-span-12 md:col-span-6 xl:col-span-3
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageGrid

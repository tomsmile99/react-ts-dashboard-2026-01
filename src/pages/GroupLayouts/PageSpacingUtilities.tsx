import { TextAlignEnd } from "lucide-react"

const PageSpacingUtilities = () => {

  const boxClass =
  "rounded-xl bg-sky-100 border border-sky-200 text-slate-700 text-sm font-medium text-center";

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Spacing Utilities
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
                Spacing Utilities
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <TextAlignEnd size={64}/>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Padding */}
          <section className="p-5 bg-white border shadow-sm border-slate-200 rounded-2xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Padding</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className={`${boxClass} p-2`}>p-2</div>
              <div className={`${boxClass} p-4`}>p-4</div>
              <div className={`${boxClass} p-8`}>p-8</div>
            </div>
          </section>

          {/* Margin */}
          <section className="p-5 bg-white border shadow-sm border-slate-200 rounded-2xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Margin</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="border border-dashed bg-slate-50 rounded-xl border-slate-300">
                <div className={`${boxClass} m-2`}>m-2</div>
              </div>

              <div className="border border-dashed bg-slate-50 rounded-xl border-slate-300">
                <div className={`${boxClass} m-4`}>m-4</div>
              </div>

              <div className="border border-dashed bg-slate-50 rounded-xl border-slate-300">
                <div className={`${boxClass} m-8`}>m-8</div>
              </div>
            </div>
          </section>

          {/* Axis Spacing */}
          <section className="p-5 bg-white border shadow-sm border-slate-200 rounded-2xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Axis Spacing</h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-medium text-slate-600">Horizontal Padding (px)</p>
                <div className="space-y-3">
                  <div className={`${boxClass} px-2 py-3`}>px-2 py-3</div>
                  <div className={`${boxClass} px-4 py-3`}>px-4 py-3</div>
                  <div className={`${boxClass} px-8 py-3`}>px-8 py-3</div>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-600">Vertical Padding (py)</p>
                <div className="space-y-3">
                  <div className={`${boxClass} px-4 py-2`}>px-4 py-2</div>
                  <div className={`${boxClass} px-4 py-4`}>px-4 py-4</div>
                  <div className={`${boxClass} px-4 py-8`}>px-4 py-8</div>
                </div>
              </div>
            </div>
          </section>

          {/* Margin Axis */}
          <section className="p-5 bg-white border shadow-sm border-slate-200 rounded-2xl">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Margin Axis</h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-medium text-slate-600">Margin Top (mt)</p>
                <div className="p-2 border border-dashed bg-slate-50 rounded-xl border-slate-300">
                  <div className={`${boxClass} mt-2`}>mt-2</div>
                </div>
                <div className="p-2 mt-4 border border-dashed bg-slate-50 rounded-xl border-slate-300">
                  <div className={`${boxClass} mt-6`}>mt-6</div>
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-600">Margin X Auto</p>
                <div className="p-2 border border-dashed bg-slate-50 rounded-xl border-slate-300">
                  <div className={`${boxClass} mx-auto w-40 p-4`}>mx-auto</div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
      </div>
    </>
  )
}

export default PageSpacingUtilities

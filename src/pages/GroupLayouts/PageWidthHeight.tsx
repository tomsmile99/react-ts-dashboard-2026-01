import { Ruler } from "lucide-react"
import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";


const PageWidthHeight = () => {

  const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

  const demoBlock =
  "rounded-xl border border-sky-200 bg-sky-100 text-slate-700 text-sm font-medium text-center py-3";



  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Width & Height
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "Layout" },
                  { label: "Width & Height", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Ruler size={64}/>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Width */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Width</h2>

            <div className="space-y-4">
              <div className={`${demoBlock} w-full`}>w-full</div>
              <div className={`${demoBlock} w-1/2`}>w-1/2</div>
              <div className={`${demoBlock} w-1/3`}>w-1/3</div>
              <div className={`${demoBlock} w-1/4`}>w-1/4</div>
              <div className={`${demoBlock} w-64`}>w-64</div>
            </div>
          </section>

          {/* Max Width */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Max Width</h2>

            <div className="space-y-4">
              <div className={`${demoBlock} max-w-sm`}>max-w-sm</div>
              <div className={`${demoBlock} max-w-md`}>max-w-md</div>
              <div className={`${demoBlock} max-w-xl`}>max-w-xl</div>
              <div className={`${demoBlock} max-w-3xl`}>max-w-3xl</div>
              <div className={`${demoBlock} max-w-5xl`}>max-w-5xl</div>
            </div>
          </section>

          {/* Height */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Height</h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex items-center justify-center h-16 text-sm font-medium bg-purple-100 border border-purple-200 rounded-xl text-slate-700">
                h-16
              </div>
              <div className="flex items-center justify-center h-24 text-sm font-medium bg-purple-100 border border-purple-200 rounded-xl text-slate-700">
                h-24
              </div>
              <div className="flex items-center justify-center h-32 text-sm font-medium bg-purple-100 border border-purple-200 rounded-xl text-slate-700">
                h-32
              </div>
              <div className="flex items-center justify-center h-40 text-sm font-medium bg-purple-100 border border-purple-200 rounded-xl text-slate-700">
                h-40
              </div>
            </div>
          </section>

          {/* Min Height */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Min Height</h2>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="flex items-center justify-center min-h-[120px] rounded-xl border border-amber-200 bg-amber-100 text-sm font-medium text-slate-700">
                min-h-[120px]
              </div>

              <div className="flex items-center justify-center min-h-screen text-sm font-medium border rounded-xl border-amber-200 bg-amber-100 text-slate-700">
                min-h-screen
              </div>
            </div>
          </section>

          {/* Responsive Width */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Responsive Width</h2>

            <div className="flex justify-center">
              <div className="w-full py-3 text-sm font-medium text-center border rounded-xl border-emerald-200 bg-emerald-100 text-slate-700 sm:w-3/4 lg:w-1/2 xl:w-1/3">
                w-full sm:w-3/4 lg:w-1/2 xl:w-1/3
              </div>
            </div>
          </section>

          {/* Real World Examples */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Real World Examples</h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {/* Sidebar width */}
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Sidebar Width Example
                </p>
                <div className="flex gap-4">
                  <div className="w-20 py-6 text-sm font-medium text-center bg-blue-100 rounded-xl text-slate-700">
                    w-20
                  </div>
                  <div className="w-64 py-6 text-sm font-medium text-center bg-blue-200 rounded-xl text-slate-700">
                    w-64
                  </div>
                </div>
              </div>

              {/* Card height */}
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Card Height Example
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-center h-24 text-sm font-medium text-center rounded-xl bg-rose-100 text-slate-700">
                    h-24
                  </div>
                  <div className="flex items-center justify-center h-40 text-sm font-medium text-center rounded-xl bg-rose-200 text-slate-700">
                    h-40
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

export default PageWidthHeight

import { MonitorSmartphone } from "lucide-react"
import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";
const PageDisplayUtilities = () => {

  const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

  const labelClass = "mb-2 text-sm font-medium text-slate-600";

  const demoBox =
  "rounded-xl border border-sky-200 bg-sky-100 text-slate-700 text-sm font-medium text-center px-4 py-3";



  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Display Utilities
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "Layout" },
                  { label: "Display Utilities", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <MonitorSmartphone size={64}/>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Block / Inline / Inline-block */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Block / Inline / Inline-block
            </h2>

            <div className="space-y-5">
              <div>
                <p className={labelClass}>block</p>
                <div className="space-y-2">
                  <span className={`${demoBox} block`}>block</span>
                  <span className={`${demoBox} block`}>block</span>
                </div>
              </div>

              <div>
                <p className={labelClass}>inline</p>
                <div className="space-x-2">
                  <span className="inline px-3 py-2 text-sm font-medium border rounded-lg border-emerald-200 bg-emerald-100 text-slate-700">
                    inline
                  </span>
                  <span className="inline px-3 py-2 text-sm font-medium border rounded-lg border-emerald-200 bg-emerald-100 text-slate-700">
                    inline
                  </span>
                </div>
              </div>

              <div>
                <p className={labelClass}>inline-block</p>
                <div className="space-x-2">
                  <span className="inline-block px-4 py-2 text-sm font-medium border rounded-lg border-amber-200 bg-amber-100 text-slate-700">
                    inline-block
                  </span>
                  <span className="inline-block px-4 py-2 text-sm font-medium border rounded-lg border-amber-200 bg-amber-100 text-slate-700">
                    inline-block
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Hidden / Visible */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Hidden / Visible
            </h2>

            <div className="space-y-5">
              <div>
                <p className={labelClass}>hidden</p>
                <div className="p-4 border border-dashed rounded-xl border-slate-300 bg-slate-50">
                  <div className={`${demoBox} hidden`}>hidden</div>
                  <p className="text-sm text-slate-500">
                    element นี้ถูกซ่อนไว้ด้วย <code>hidden</code>
                  </p>
                </div>
              </div>

              <div>
                <p className={labelClass}>block</p>
                <div className="p-4 border border-dashed rounded-xl border-slate-300 bg-slate-50">
                  <div className={`${demoBox} block`}>block</div>
                </div>
              </div>
            </div>
          </section>

          {/* Flex / Grid */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Flex / Grid
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div>
                <p className={labelClass}>flex</p>
                <div className="flex gap-3 p-4 border border-dashed rounded-xl border-slate-300 bg-slate-50">
                  <div className={demoBox}>Item 1</div>
                  <div className={demoBox}>Item 2</div>
                  <div className={demoBox}>Item 3</div>
                </div>
              </div>

              <div>
                <p className={labelClass}>grid</p>
                <div className="grid grid-cols-3 gap-3 p-4 border border-dashed rounded-xl border-slate-300 bg-slate-50">
                  <div className={demoBox}>Item 1</div>
                  <div className={demoBox}>Item 2</div>
                  <div className={demoBox}>Item 3</div>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Display */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Responsive Display
            </h2>

            <div className="space-y-5">
              <div>
                <p className={labelClass}>Mobile only: block md:hidden</p>
                <div className="p-4 border border-dashed rounded-xl border-slate-300 bg-slate-50">
                  <div className="block px-4 py-3 text-sm font-medium border rounded-xl border-rose-200 bg-rose-100 text-slate-700 md:hidden">
                    แสดงเฉพาะ Mobile (block md:hidden)
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    ลองย่อ/ขยายหน้าจอเพื่อดูผลลัพธ์
                  </p>
                </div>
              </div>

              <div>
                <p className={labelClass}>Desktop only: hidden md:block</p>
                <div className="p-4 border border-dashed rounded-xl border-slate-300 bg-slate-50">
                  <div className="hidden px-4 py-3 text-sm font-medium bg-blue-100 border border-blue-200 rounded-xl text-slate-700 md:block">
                    แสดงเฉพาะ Desktop (hidden md:block)
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    ลองย่อ/ขยายหน้าจอเพื่อดูผลลัพธ์
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Table / Caption style explanation */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Common Use Cases
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className={labelClass}>Mobile Menu Toggle</p>
                <div className="space-y-3">
                  <div className="block px-4 py-3 text-sm font-medium rounded-xl bg-emerald-100 text-slate-700 lg:hidden">
                    Hamburger Button - block lg:hidden
                  </div>
                  <div className="hidden px-4 py-3 text-sm font-medium bg-indigo-100 rounded-xl text-slate-700 lg:block">
                    Desktop Sidebar - hidden lg:block
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className={labelClass}>Toolbar Layout Switch</p>
                <div className="space-y-3">
                  <div className="block px-4 py-3 text-sm font-medium rounded-xl bg-amber-100 text-slate-700 sm:hidden">
                    Mobile Toolbar
                  </div>
                  <div className="hidden px-4 py-3 text-sm font-medium rounded-xl bg-cyan-100 text-slate-700 sm:flex sm:items-center sm:justify-between">
                    <span>Desktop Toolbar</span>
                    <button className="rounded-lg bg-white px-3 py-1.5 text-sm shadow-sm">
                      Action
                    </button>
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

export default PageDisplayUtilities

import { AlignStartVertical } from "lucide-react"

const PageFlex = () => {

  const demoBox =
  "rounded-xl bg-sky-100 border border-sky-200 text-slate-700 text-sm font-medium text-center px-4 py-3";

  const smallItem =
    "rounded-lg bg-blue-100 border border-blue-200 text-slate-700 text-sm font-medium px-4 py-2 text-center min-w-[90px]";

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
              Flex Utilities
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
                Flex Utilities
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <AlignStartVertical size={64}/>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        {/* Basic Flex */}
        <section className={sectionCard}>
          <h2 className="mb-4 text-lg font-semibold text-slate-800">Basic Flex</h2>
          <div className="space-y-4">
            <div className="p-3 border border-dashed rounded-xl border-slate-300">
              <div className="flex gap-3">
                <div className={smallItem}>Item 1</div>
                <div className={smallItem}>Item 2</div>
                <div className={smallItem}>Item 3</div>
              </div>
            </div>

            <div className={demoBox}>className="flex gap-3"</div>
          </div>
        </section>

        {/* Justify Content */}
        <section className={sectionCard}>
          <h2 className="mb-4 text-lg font-semibold text-slate-800">Justify Content</h2>

          <div className="space-y-5">
            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">justify-start</p>
              <div className="flex justify-start gap-3 p-3 border border-dashed rounded-xl border-slate-300">
                <div className={smallItem}>A</div>
                <div className={smallItem}>B</div>
                <div className={smallItem}>C</div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">justify-center</p>
              <div className="flex justify-center gap-3 p-3 border border-dashed rounded-xl border-slate-300">
                <div className={smallItem}>A</div>
                <div className={smallItem}>B</div>
                <div className={smallItem}>C</div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">justify-between</p>
              <div className="flex justify-between gap-3 p-3 border border-dashed rounded-xl border-slate-300">
                <div className={smallItem}>A</div>
                <div className={smallItem}>B</div>
                <div className={smallItem}>C</div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">justify-around</p>
              <div className="flex justify-around gap-3 p-3 border border-dashed rounded-xl border-slate-300">
                <div className={smallItem}>A</div>
                <div className={smallItem}>B</div>
                <div className={smallItem}>C</div>
              </div>
            </div>
          </div>
        </section>

        {/* Align Items */}
        <section className={sectionCard}>
          <h2 className="mb-4 text-lg font-semibold text-slate-800">Align Items</h2>

          <div className="space-y-5">
            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">items-start</p>
              <div className="flex items-start gap-3 p-3 border border-dashed rounded-xl border-slate-300 min-h-[120px]">
                <div className="px-4 py-2 bg-purple-100 border border-purple-200 rounded-lg">Small</div>
                <div className="px-4 py-6 bg-purple-100 border border-purple-200 rounded-lg">Medium</div>
                <div className="px-4 py-10 bg-purple-100 border border-purple-200 rounded-lg">Large</div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">items-center</p>
              <div className="flex items-center gap-3 p-3 border border-dashed rounded-xl border-slate-300 min-h-[120px]">
                <div className="px-4 py-2 bg-purple-100 border border-purple-200 rounded-lg">Small</div>
                <div className="px-4 py-6 bg-purple-100 border border-purple-200 rounded-lg">Medium</div>
                <div className="px-4 py-10 bg-purple-100 border border-purple-200 rounded-lg">Large</div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">items-end</p>
              <div className="flex items-end gap-3 p-3 border border-dashed rounded-xl border-slate-300 min-h-[120px]">
                <div className="px-4 py-2 bg-purple-100 border border-purple-200 rounded-lg">Small</div>
                <div className="px-4 py-6 bg-purple-100 border border-purple-200 rounded-lg">Medium</div>
                <div className="px-4 py-10 bg-purple-100 border border-purple-200 rounded-lg">Large</div>
              </div>
            </div>
          </div>
        </section>

        {/* Flex Direction */}
        <section className={sectionCard}>
          <h2 className="mb-4 text-lg font-semibold text-slate-800">Flex Direction</h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">flex-row</p>
              <div className="flex flex-row gap-3 p-3 border border-dashed rounded-xl border-slate-300">
                <div className={smallItem}>1</div>
                <div className={smallItem}>2</div>
                <div className={smallItem}>3</div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">flex-col</p>
              <div className="flex flex-col gap-3 p-3 border border-dashed rounded-xl border-slate-300">
                <div className={smallItem}>1</div>
                <div className={smallItem}>2</div>
                <div className={smallItem}>3</div>
              </div>
            </div>
          </div>
        </section>

        {/* Flex Wrap */}
        <section className={sectionCard}>
          <h2 className="mb-4 text-lg font-semibold text-slate-800">Flex Wrap</h2>

          <div className="space-y-5">
            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">flex-nowrap</p>
              <div className="flex gap-3 p-3 overflow-x-auto border border-dashed flex-nowrap rounded-xl border-slate-300">
                <div className={smallItem}>Item 1</div>
                <div className={smallItem}>Item 2</div>
                <div className={smallItem}>Item 3</div>
                <div className={smallItem}>Item 4</div>
                <div className={smallItem}>Item 5</div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-600">flex-wrap</p>
              <div className="flex flex-wrap gap-3 p-3 border border-dashed rounded-xl border-slate-300">
                <div className={smallItem}>Item 1</div>
                <div className={smallItem}>Item 2</div>
                <div className={smallItem}>Item 3</div>
                <div className={smallItem}>Item 4</div>
                <div className={smallItem}>Item 5</div>
              </div>
            </div>
          </div>
        </section>

        {/* Real World Examples */}
        <section className={sectionCard}>
          <h2 className="mb-4 text-lg font-semibold text-slate-800">Real World Examples</h2>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Header Example */}
            <div className="p-4 border border-slate-200 rounded-2xl bg-slate-50">
              <p className="mb-3 text-sm font-medium text-slate-600">
                Header Layout - flex justify-between items-center
              </p>

              <div className="flex items-center justify-between p-4 bg-white border rounded-xl border-slate-200">
                <div>
                  <h3 className="text-base font-semibold text-slate-800">Page Title</h3>
                  <p className="text-sm text-slate-500">Description text here</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl">
                  Add New
                </button>
              </div>
            </div>

            {/* Badge Group */}
            <div className="p-4 border border-slate-200 rounded-2xl bg-slate-50">
              <p className="mb-3 text-sm font-medium text-slate-600">
                Badge Group - flex flex-wrap gap-2
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-700">
                  Active
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-700">
                  Pending
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-rose-100 text-rose-700">
                  Cancelled
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-sky-100 text-sky-700">
                  New
                </span>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}

export default PageFlex

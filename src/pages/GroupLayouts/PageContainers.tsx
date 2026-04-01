
import { Box } from "lucide-react"


import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";
const PageContainers = () => {
  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Container
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "Layout" },
                  { label: "Container", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Box size={64}/>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          <section className="p-5 bg-white border shadow-sm border-slate-200 rounded-2xl">
            {/* Container */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Container</h3>
              <div className="container px-4 py-4 mx-auto bg-blue-100 rounded-lg">
                container (responsive fixed width)
              </div>
            </div>

            {/* Container Fluid */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Container Fluid</h3>
              <div className="w-full px-4 py-4 bg-green-100 rounded-lg">
                container-fluid (full width)
              </div>
            </div>

            {/* Custom Container */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Custom Container</h3>
              <div className="max-w-5xl px-4 py-4 mx-auto bg-purple-100 rounded-lg">
                max-w-5xl (custom width)
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageContainers

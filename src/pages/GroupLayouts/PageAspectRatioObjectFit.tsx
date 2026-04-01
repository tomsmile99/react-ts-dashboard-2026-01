import { Image } from "lucide-react";
import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

const PageAspectRatioObjectFit = () => {

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
              Aspect Ratio & Object Fit
            </span>
            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "Layout" },
                  { label: "Aspect Ratio & Object Fit", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Image size={64}/>
          </div>
        </div>
      </div> 
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Aspect Ratio */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold">Aspect Ratio</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex items-center justify-center aspect-square bg-sky-100 rounded-xl">
                aspect-square
              </div>

              <div className="flex items-center justify-center aspect-video bg-rose-100 rounded-xl">
                aspect-video
              </div>

              <div className="aspect-[4/3] bg-amber-100 rounded-xl flex items-center justify-center">
                aspect-[4/3]
              </div>
            </div>
          </section>

          {/* Object Fit */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold">Object Fit</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm">object-cover</p>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  className="object-cover w-full h-40 rounded-xl"
                />
              </div>

              <div>
                <p className="mb-2 text-sm">object-contain</p>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  className="object-contain w-full h-40 rounded-xl bg-slate-100"
                />
              </div>
            </div>
          </section>

          {/* Real Example */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold">Real Example</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden bg-white border shadow-sm rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  className="object-cover w-full h-40"
                />
                <div className="p-3 text-sm font-medium">
                  Card Image (object-cover)
                </div>
              </div>

              <div className="overflow-hidden bg-white border shadow-sm rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  className="object-contain w-full h-40 bg-slate-100"
                />
                <div className="p-3 text-sm font-medium">
                  Card Image (object-contain)
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </>
  )
}

export default PageAspectRatioObjectFit

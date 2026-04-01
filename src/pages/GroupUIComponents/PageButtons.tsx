import { MousePointerClick, Download, Plus, Trash2 } from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

const PageButtons = () => {

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
              Buttons
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Buttons", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <MousePointerClick className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Variants */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Variants</h2>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 text-sm font-medium text-white transition bg-blue-500 rounded-xl hover:bg-blue-600">
                Primary
              </button>

              <button className="px-4 py-2 text-sm font-medium text-white transition rounded-xl bg-slate-700 hover:bg-slate-800">
                Secondary
              </button>

              <button className="px-4 py-2 text-sm font-medium text-white transition rounded-xl bg-emerald-500 hover:bg-emerald-600">
                Success
              </button>

              <button className="px-4 py-2 text-sm font-medium text-white transition rounded-xl bg-amber-500 hover:bg-amber-600">
                Warning
              </button>

              <button className="px-4 py-2 text-sm font-medium text-white transition rounded-xl bg-rose-500 hover:bg-rose-600">
                Danger
              </button>
            </div>
          </section>

          {/* Outline */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Outline Buttons</h2>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 transition border border-blue-200 rounded-xl bg-blue-50 hover:bg-blue-100">
                Primary
              </button>

              <button className="px-4 py-2 text-sm font-medium transition bg-white border rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50">
                Secondary
              </button>

              <button className="px-4 py-2 text-sm font-medium transition border text-emerald-600 rounded-xl border-emerald-200 bg-emerald-50 hover:bg-emerald-100">
                Success
              </button>

              <button className="px-4 py-2 text-sm font-medium transition border text-rose-600 rounded-xl border-rose-200 bg-rose-50 hover:bg-rose-100">
                Danger
              </button>
            </div>
          </section>

          {/* Sizes */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Sizes</h2>

            <div className="flex flex-wrap items-center gap-3">
              <button className="px-3 py-1.5 text-xs font-medium text-white bg-blue-500 rounded-lg">
                Small
              </button>

              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl">
                Medium
              </button>

              <button className="px-5 py-3 text-base font-medium text-white bg-blue-500 rounded-xl">
                Large
              </button>
            </div>
          </section>

          {/* Icon Buttons */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Icon Buttons</h2>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl hover:bg-blue-600">
                <Plus className="w-4 h-4" />
                Add New
              </button>

              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-xl bg-emerald-500 hover:bg-emerald-600">
                <Download className="w-4 h-4" />
                Export
              </button>

              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-xl bg-rose-500 hover:bg-rose-600">
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </section>

          {/* Soft Buttons */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Soft Buttons</h2>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 text-sm font-medium text-blue-700 transition bg-blue-100 rounded-xl hover:bg-blue-200">
                Soft Primary
              </button>

              <button className="px-4 py-2 text-sm font-medium transition rounded-xl text-emerald-700 bg-emerald-100 hover:bg-emerald-200">
                Soft Success
              </button>

              <button className="px-4 py-2 text-sm font-medium transition rounded-xl text-amber-700 bg-amber-100 hover:bg-amber-200">
                Soft Warning
              </button>

              <button className="px-4 py-2 text-sm font-medium transition rounded-xl text-rose-700 bg-rose-100 hover:bg-rose-200">
                Soft Danger
              </button>
            </div>
          </section>

          {/* Disabled / Full Width */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Disabled & Full Width</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <button
                disabled
                className="px-4 py-2 text-sm font-medium text-white cursor-not-allowed rounded-xl bg-slate-300"
              >
                Disabled Button
              </button>

              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl hover:bg-blue-600">
                Full Width Button
              </button>
            </div>
          </section>

          {/* Button Group */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Button Group</h2>

            <div className="inline-flex overflow-hidden border rounded-xl border-slate-200">
              <button className="px-4 py-2 text-sm font-medium bg-white hover:bg-slate-50">
                Left
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-white border-l border-r border-slate-200 hover:bg-slate-50">
                Center
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-white hover:bg-slate-50">
                Right
              </button>
            </div>
          </section>

          {/* Real World Examples */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Real World Examples</h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">Page Actions</p>
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl">
                    <Plus className="w-4 h-4" />
                    Add User
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border rounded-xl text-slate-700 border-slate-200">
                    Cancel
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">Table Actions</p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-lg">
                    View
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium text-amber-700 rounded-lg bg-amber-100">
                    Edit
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium text-rose-700 rounded-lg bg-rose-100">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageButtons

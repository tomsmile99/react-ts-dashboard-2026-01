import { CircleUserRound } from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const PageAvatars = () => {

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Avatars
            </span>
            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Avatars", current: true },
                ]}
              />
            </div>
           
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <CircleUserRound className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Avatar Sizes */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Avatar Sizes</h2>

            <div className="flex flex-wrap items-end gap-4">
              <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                JD
              </div>
              <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
                JD
              </div>
              <div className="flex items-center justify-center text-base font-semibold text-blue-700 bg-blue-100 rounded-full h-14 w-14">
                JD
              </div>
              <div className="flex items-center justify-center w-20 h-20 text-xl font-semibold text-blue-700 bg-blue-100 rounded-full">
                JD
              </div>
            </div>
          </section>

          {/* Initial Avatars */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Initial Avatars</h2>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center justify-center w-12 h-12 font-semibold text-blue-700 bg-blue-100 rounded-full">
                JD
              </div>
              <div className="flex items-center justify-center w-12 h-12 font-semibold rounded-full bg-emerald-100 text-emerald-700">
                SM
              </div>
              <div className="flex items-center justify-center w-12 h-12 font-semibold rounded-full bg-amber-100 text-amber-700">
                AL
              </div>
              <div className="flex items-center justify-center w-12 h-12 font-semibold rounded-full bg-rose-100 text-rose-700">
                MK
              </div>
              <div className="flex items-center justify-center w-12 h-12 font-semibold rounded-full bg-violet-100 text-violet-700">
                PT
              </div>
            </div>
          </section>

          {/* Image Avatars */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Image Avatars</h2>

            <div className="flex flex-wrap gap-4">
              <img
                src="https://i.pravatar.cc/100?img=1"
                alt="avatar"
                className="object-cover w-12 h-12 rounded-full"
              />
              <img
                src="https://i.pravatar.cc/100?img=2"
                alt="avatar"
                className="object-cover rounded-full h-14 w-14"
              />
              <img
                src="https://i.pravatar.cc/100?img=3"
                alt="avatar"
                className="object-cover w-16 h-16 rounded-full"
              />
            </div>
          </section>

          {/* Square / Rounded Avatars */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Square / Rounded Avatars
            </h2>

            <div className="flex flex-wrap gap-4">
              <img
                src="https://i.pravatar.cc/100?img=4"
                alt="avatar"
                className="object-cover rounded-lg h-14 w-14"
              />
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt="avatar"
                className="object-cover h-14 w-14 rounded-xl"
              />
              <div className="flex items-center justify-center font-semibold h-14 w-14 rounded-xl bg-slate-100 text-slate-700">
                UI
              </div>
            </div>
          </section>

          {/* Avatar with Status */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Avatar with Status
            </h2>

            <div className="flex flex-wrap gap-6">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/100?img=6"
                  alt="avatar"
                  className="object-cover rounded-full h-14 w-14"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-2 border-white rounded-full bg-emerald-500"></span>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center font-semibold rounded-full h-14 w-14 bg-amber-100 text-amber-700">
                  SM
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 border-2 border-white rounded-full bg-amber-500"></span>
              </div>

              <div className="relative">
                <img
                  src="https://i.pravatar.cc/100?img=7"
                  alt="avatar"
                  className="object-cover rounded-full h-14 w-14"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-2 border-white rounded-full bg-rose-500"></span>
              </div>
            </div>
          </section>

          {/* Avatar Group */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Avatar Group</h2>

            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/100?img=8"
                alt="avatar"
                className="object-cover w-12 h-12 border-2 border-white rounded-full"
              />
              <img
                src="https://i.pravatar.cc/100?img=9"
                alt="avatar"
                className="object-cover w-12 h-12 border-2 border-white rounded-full"
              />
              <img
                src="https://i.pravatar.cc/100?img=10"
                alt="avatar"
                className="object-cover w-12 h-12 border-2 border-white rounded-full"
              />
              <div className="flex items-center justify-center w-12 h-12 text-xs font-semibold border-2 border-white rounded-full bg-slate-100 text-slate-700">
                +5
              </div>
            </div>
          </section>

          {/* Avatar with Text */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Avatar with Text</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3 p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <img
                  src="https://i.pravatar.cc/100?img=11"
                  alt="avatar"
                  className="object-cover w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">John Doe</h3>
                  <p className="text-xs text-slate-500">Frontend Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <div className="flex items-center justify-center w-12 h-12 font-semibold rounded-full bg-violet-100 text-violet-700">
                  SS
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">Smile Sabai</h3>
                  <p className="text-xs text-slate-500">System Leader</p>
                </div>
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
                <p className="mb-3 text-sm font-medium text-slate-600">Team Members</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-xl border-slate-200">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://i.pravatar.cc/100?img=12"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-slate-800">John Doe</p>
                        <p className="text-xs text-slate-500">Admin</p>
                      </div>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>

                  <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-xl border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 font-semibold rounded-full bg-amber-100 text-amber-700">
                        JS
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">Jane Smith</p>
                        <p className="text-xs text-slate-500">Editor</p>
                      </div>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">Project Team</p>

                <div className="p-4 bg-white border rounded-xl border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">
                        Dashboard Redesign
                      </h3>
                      <p className="text-xs text-slate-500">8 team members</p>
                    </div>

                    <div className="flex -space-x-3">
                      <img
                        src="https://i.pravatar.cc/100?img=13"
                        alt="avatar"
                        className="object-cover w-10 h-10 border-2 border-white rounded-full"
                      />
                      <img
                        src="https://i.pravatar.cc/100?img=14"
                        alt="avatar"
                        className="object-cover w-10 h-10 border-2 border-white rounded-full"
                      />
                      <div className="flex items-center justify-center w-10 h-10 text-xs font-semibold border-2 border-white rounded-full bg-slate-100 text-slate-700">
                        +6
                      </div>
                    </div>
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

export default PageAvatars

import {
  MapPlus,
  FileText,
  Settings,
  User,
  BarChart3,
  CreditCard,
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";


const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";


const PageBreadcrumbs = () => {

  

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Breadcrumbs
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Breadcrumbs", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <MapPlus className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">      
          {/* Basic */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Breadcrumbs
            </h2>

            <Breadcrumbs
              items={[
                { label: "UI Components" },
                { label: "Navigation" },
                { label: "Breadcrumbs", current: true },
              ]}
            />

            <div className="mt-4">
              <div className={contentBox}>
                แบบพื้นฐานเหมาะกับหน้าทั่วไปที่ต้องการแสดงลำดับชั้นของหน้าแบบเรียบง่าย
              </div>
            </div>
          </section>

          {/* With Home */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Breadcrumbs with Home
            </h2>

            <Breadcrumbs
              showHome
              homeLabel="Dashboard"
              items={[
                { label: "Reports" },
                { label: "Monthly Report" },
                { label: "March 2026", current: true },
              ]}
            />

            <div className="mt-4">
              <div className={contentBox}>
                แบบมี Home เหมาะกับ dashboard หรือระบบ enterprise ที่มีหลายระดับเมนู
              </div>
            </div>
          </section>

          {/* With Icons */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Breadcrumbs with Icons
            </h2>

            <Breadcrumbs
              items={[
                { label: "Users", icon: <User className="w-4 h-4" /> },
                { label: "Settings", icon: <Settings className="w-4 h-4" /> },
                {
                  label: "Permissions",
                  icon: <FileText className="w-4 h-4" />,
                  current: true,
                },
              ]}
            />

            <div className="mt-4">
              <div className={contentBox}>
                แบบมี icon ช่วยให้ user อ่านตำแหน่งของหน้าได้เร็วขึ้น โดยเฉพาะระบบที่มีหลายหมวด
              </div>
            </div>
          </section>

          {/* Clickable */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Clickable Breadcrumbs
            </h2>

            <Breadcrumbs
              showHome
              items={[
                {
                  label: "Analytics",
                  icon: <BarChart3 className="w-4 h-4" />,
                  onClick: () => console.log("go analytics"),
                },
                {
                  label: "Sales",
                  onClick: () => console.log("go sales"),
                },
                {
                  label: "Insurance Dashboard",
                  current: true,
                },
              ]}
            />

            <div className="mt-4">
              <div className={contentBox}>
                ใช้ใน production จริงได้ โดยสามารถต่อ onClick หรือ route navigation ได้เลย
              </div>
            </div>
          </section>

          {/* Card / Header Example */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Page Header Example
            </h2>

            <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <Breadcrumbs
                    showHome
                    homeLabel="Home"
                    items={[
                      { label: "Billing", icon: <CreditCard className="w-4 h-4" /> },
                      { label: "Invoices" },
                      { label: "Invoice Detail", current: true },
                    ]}
                  />

                  <h3 className="mt-3 text-xl font-semibold text-slate-800">
                    Invoice Detail
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    แสดงข้อมูลรายละเอียดใบแจ้งหนี้ และสถานะการชำระเงิน
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                  >
                    Export PDF
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Real World */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Real World Examples
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  User Management
                </p>

                <div className="p-4 bg-white border rounded-xl border-slate-200">
                  <Breadcrumbs
                    showHome
                    homeLabel="Dashboard"
                    items={[
                      { label: "Users" },
                      { label: "User Management" },
                      { label: "Edit User", current: true },
                    ]}
                  />
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Report Center
                </p>

                <div className="p-4 bg-white border rounded-xl border-slate-200">
                  <Breadcrumbs
                    showHome
                    homeLabel="Dashboard"
                    items={[
                      { label: "Reports" },
                      { label: "Executive Reports" },
                      { label: "Monthly Sales", current: true },
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </>
  )
}

export default PageBreadcrumbs

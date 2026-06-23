import {
  Plus,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Users,
  BarChart3,
  FileText,
  ShieldCheck,
  CalendarDays,
  Filter,
  MoreHorizontal,
  PanelTop
} from "lucide-react";

import { Header } from "@/pages/GroupUIComponents/Components/Header";
import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import DropdownMenu from "@/pages/GroupUIComponents/Components/Dropdowns/DropdownMenu";
import DropdownItem from "@/pages/GroupUIComponents/Components/Dropdowns/DropdownItem";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const PageHeader = () => {
  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Page Header
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Page Header", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <PanelTop className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>



      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Page Header
            </h2>

            <Header
              title="Dashboard"
              description="ภาพรวมข้อมูลสำคัญของระบบ และสถานะการทำงานล่าสุด"
            />

            <div className="mt-4">
              <div className={contentBox}>
                Basic page header เหมาะกับหน้าทั่วไปที่ต้องมี title และคำอธิบายของหน้านั้น
              </div>
            </div>
          </section>

          {/* With Actions */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Page Header with Actions
            </h2>

            <Header
              title="User Management"
              description="จัดการผู้ใช้งาน บทบาท และสิทธิ์การเข้าถึงภายในระบบ"
              icon={<Users className="w-5 h-5" />}
              actions={
                <>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <Upload className="w-4 h-4" />
                    Import
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <Download className="w-4 h-4" />
                    Export
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                  >
                    <Plus className="w-4 h-4" />
                    Add User
                  </button>
                </>
              }
            />

            <div className="mt-4">
              <div className={contentBox}>
                ใช้กับหน้าจัดการข้อมูล เช่น User Management, Document List หรือ Product Management
              </div>
            </div>
          </section>

          {/* With Breadcrumb */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Page Header with Breadcrumb
            </h2>

            <Header
              title="Monthly Sales Report"
              description="รายงานยอดขายประจำเดือน แยกตามสาขา เขต และประเภทผลิตภัณฑ์"
              icon={<BarChart3 className="w-5 h-5" />}
              breadcrumb={
                <Breadcrumbs
                  showHome
                  homeLabel="Dashboard"
                  items={[
                    { label: "Reports" },
                    { label: "Executive Reports" },
                    { label: "Monthly Sales", current: true },
                  ]}
                />
              }
              actions={
                <>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                  >
                    <Download className="w-4 h-4" />
                    Export Report
                  </button>
                </>
              }
            />

            <div className="mt-4">
              <div className={contentBox}>
                ใช้กับหน้าที่มีลำดับชั้นหลายระดับ เช่น Report Center หรือ Detail Page
              </div>
            </div>
          </section>

          {/* With Badge */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Page Header with Badge
            </h2>

            <Header
              title="Approval Requests"
              description="รายการคำขอที่รออนุมัติจากผู้จัดการหรือผู้ดูแลระบบ"
              icon={<ShieldCheck className="w-5 h-5" />}
              badge={
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                  Pending 24
                </span>
              }
              actions={
                <>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                  >
                    Review All
                  </button>
                </>
              }
            />
          </section>

          {/* Header with Metrics */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Page Header with Summary Content
            </h2>

            <Header
              title="Executive Dashboard"
              description="สรุปภาพรวม KPI สำคัญสำหรับผู้บริหารแบบรายวัน"
              icon={<BarChart3 className="w-5 h-5" />}
              actions={
                <>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <CalendarDays className="w-4 h-4" />
                    วันนี้
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                  >
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </>
              }
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                  <p className="text-xs text-slate-500">Total Sales</p>
                  <p className="mt-1 text-xl font-semibold text-slate-800">
                    2,450,000
                  </p>
                </div>

                <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                  <p className="text-xs text-slate-500">New Orders</p>
                  <p className="mt-1 text-xl font-semibold text-slate-800">
                    128
                  </p>
                </div>

                <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                  <p className="text-xs text-slate-500">Pending Tasks</p>
                  <p className="mt-1 text-xl font-semibold text-slate-800">
                    24
                  </p>
                </div>
              </div>
            </Header>
          </section>

          {/* Compact Header */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Compact Page Header
            </h2>

            <Header
              title="System Settings"
              description="ตั้งค่าระบบ ความปลอดภัย และการแจ้งเตือน"
              icon={<Settings className="w-5 h-5" />}
              actions={
                <>
                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                </>
              }
            />
          </section>

          {/* Action Dropdown */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Page Header with Action Dropdown
            </h2>

            <Header
              title="Document Detail"
              description="รายละเอียดเอกสาร สถานะ และประวัติการดำเนินการ"
              icon={<FileText className="w-5 h-5" />}
              badge={
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  Approved
                </span>
              }
              actions={
                <>
                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Back
                  </button>

                  <DropdownMenu
                    align="right"
                    widthClass="w-52"
                    trigger={
                      <div className="inline-flex items-center justify-center w-10 h-10 transition bg-white border rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50">
                        <MoreHorizontal className="w-5 h-5" />
                      </div>
                    }
                  >
                    <div className="space-y-1">
                      <DropdownItem label="Print" />
                      <DropdownItem label="Download PDF" />
                      <DropdownItem label="View History" />
                      <DropdownItem label="Cancel Document" danger />
                    </div>
                  </DropdownMenu>
                </>
              }
            />
          </section>

          {/* Real World */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Real World Examples
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  User Management Header
                </p>

                <Header
                  title="User Management"
                  description="จัดการผู้ใช้งานและสิทธิ์ในระบบ"
                  icon={<Users className="w-5 h-5" />}
                  badge={
                    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                      320 Users
                    </span>
                  }
                  actions={
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white"
                    >
                      <Plus className="w-4 h-4" />
                      Add User
                    </button>
                  }
                />
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Report Header
                </p>

                <Header
                  title="Report Center"
                  description="ศูนย์รวมรายงานสำหรับผู้บริหาร"
                  icon={<BarChart3 className="w-5 h-5" />}
                  actions={
                    <>
                      <button
                        type="button"
                        className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700"
                      >
                        Filter
                      </button>
                      <button
                        type="button"
                        className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white"
                      >
                        Export
                      </button>
                    </>
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
import { useState } from "react";
import {
  Bell,
  HelpCircle,
  Mail,
  Moon,
  Plus,
  Search,
  Settings,
  User,
  LogOut,
  ChevronDown,
  PanelsTopLeft
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import {
  Navbar,
  NavbarSearch,
  NavbarIconButton,
} from "@/pages/GroupUIComponents/Components/Navbar";

import DropdownMenu from "@/pages/GroupUIComponents/Components/Dropdowns/DropdownMenu";
import DropdownItem from "@/pages/GroupUIComponents/Components/Dropdowns/DropdownItem";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const Divider = () => <div className="my-2 border-t border-slate-200" />;

const PageNavbar = () => {
  const [search, setSearch] = useState("");

  return (
    <> 
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Navbar / Topbar
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Navbar Topbar", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <PanelsTopLeft className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      
      

      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic Navbar */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Navbar
            </h2>

            <div className="overflow-hidden border rounded-2xl border-slate-200">
              <Navbar
                title="Dashboard"
                subtitle="ภาพรวมข้อมูลของระบบ"
                showMenuButton={false}
                rightContent={
                  <>
                    <NavbarIconButton
                      icon={<Bell className="w-5 h-5" />}
                      badge={3}
                      label="Notifications"
                    />
                    <NavbarIconButton
                      icon={<Settings className="w-5 h-5" />}
                      label="Settings"
                    />
                  </>
                }
              />
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                Basic navbar เหมาะกับหน้า dashboard หรือหน้า content ทั่วไปที่ต้องมี title และ action ด้านขวา
              </div>
            </div>
          </section>

          {/* Navbar with Search */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Navbar with Search
            </h2>

            <div className="overflow-hidden border rounded-2xl border-slate-200">
              <Navbar
                title="User Management"
                subtitle="จัดการผู้ใช้งานและสิทธิ์การเข้าถึง"
                showMenuButton={false}
                centerContent={
                  <NavbarSearch
                    value={search}
                    onChange={setSearch}
                    placeholder="ค้นหาผู้ใช้งาน, อีเมล, แผนก..."
                  />
                }
                rightContent={
                  <>
                    <NavbarIconButton
                      icon={<HelpCircle className="w-5 h-5" />}
                      label="Help"
                    />
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
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                ใช้กับหน้าที่ต้องมี search กลาง topbar เช่น User Management, Document List หรือ Report Center
              </div>
            </div>
          </section>

          {/* User Profile Topbar */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Topbar with User Menu
            </h2>

            <div className="overflow-hidden border rounded-2xl border-slate-200">
              <Navbar
                title="Insurance System"
                subtitle="ระบบบริหารจัดการประกันภัย"
                showMenuButton={false}
                centerContent={
                  <NavbarSearch
                    value={search}
                    onChange={setSearch}
                    placeholder="ค้นหาเลขที่รายการ, ลูกค้า, สาขา..."
                  />
                }
                rightContent={
                  <>
                    <NavbarIconButton
                      icon={<Mail className="w-5 h-5" />}
                      badge={5}
                      label="Messages"
                    />
                    <NavbarIconButton
                      icon={<Bell className="w-5 h-5" />}
                      badge={9}
                      label="Notifications"
                    />
                    <NavbarIconButton
                      icon={<Moon className="w-5 h-5" />}
                      label="Theme"
                    />

                    <DropdownMenu
                      align="right"
                      widthClass="w-72"
                      trigger={
                        <div className="inline-flex items-center gap-3 px-3 py-2 transition bg-white border rounded-2xl border-slate-200 hover:bg-slate-50">
                          <div className="flex items-center justify-center text-sm font-semibold text-white bg-blue-500 rounded-full h-9 w-9">
                            TS
                          </div>
                          <div className="hidden text-left md:block">
                            <p className="text-sm font-semibold text-slate-800">
                              Tom Smile
                            </p>
                            <p className="text-xs text-slate-500">
                              Administrator
                            </p>
                          </div>
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        </div>
                      }
                    >
                      <div className="px-3 py-2 mb-2 rounded-xl bg-slate-50">
                        <p className="text-sm font-semibold text-slate-800">
                          Tom Smile
                        </p>
                        <p className="text-xs text-slate-500">
                          tomsmile@example.com
                        </p>
                      </div>

                      <div className="space-y-1">
                        <DropdownItem
                          icon={<User className="w-4 h-4" />}
                          label="My Profile"
                        />
                        <DropdownItem
                          icon={<Settings className="w-4 h-4" />}
                          label="Account Settings"
                        />
                        <Divider />
                        <DropdownItem
                          icon={<LogOut className="w-4 h-4" />}
                          label="Logout"
                          danger
                        />
                      </div>
                    </DropdownMenu>
                  </>
                }
              />
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                เป็น topbar แบบใช้งานจริง มี search, notification, message, theme toggle และ user menu
              </div>
            </div>
          </section>

          {/* Mobile Friendly */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Mobile Friendly Navbar
            </h2>

            <div className="overflow-hidden border rounded-2xl border-slate-200">
              <Navbar
                title="Responsive Page"
                subtitle="รองรับ mobile และ sidebar toggle"
                showMenuButton
                onMenuClick={() => console.log("open sidebar")}
                rightContent={
                  <>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-10 h-10 transition bg-white border rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 lg:hidden"
                    >
                      <Search className="w-5 h-5" />
                    </button>

                    <NavbarIconButton
                      icon={<Bell className="w-5 h-5" />}
                      badge={2}
                      label="Notifications"
                    />

                    <div className="flex items-center justify-center text-sm font-semibold text-white bg-blue-500 rounded-full h-9 w-9">
                      TS
                    </div>
                  </>
                }
              />
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                Mobile navbar ควรมีปุ่ม menu สำหรับเปิด sidebar และซ่อน search input ขนาดใหญ่ไว้ในจอเล็ก
              </div>
            </div>
          </section>

          {/* Production Layout Preview */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Production Layout Preview
            </h2>

            <div className="overflow-hidden border rounded-2xl border-slate-200 bg-slate-100">
              <Navbar
                title="Executive Dashboard"
                subtitle="สรุป KPI และข้อมูลสำคัญประจำวัน"
                sticky
                centerContent={
                  <NavbarSearch
                    value={search}
                    onChange={setSearch}
                    placeholder="ค้นหารายงาน, สาขา, ลูกค้า..."
                  />
                }
                rightContent={
                  <>
                    <NavbarIconButton
                      icon={<Bell className="w-5 h-5" />}
                      badge={4}
                      label="Notifications"
                    />

                    <button
                      type="button"
                      className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 md:inline-flex"
                    >
                      Export
                    </button>

                    <button
                      type="button"
                      className="inline-flex rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                    >
                      Create
                    </button>
                  </>
                }
              />

              <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-3">
                <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
                  <p className="text-sm text-slate-500">Total Sales</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-800">
                    2,450,000
                  </p>
                </div>
                <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
                  <p className="text-sm text-slate-500">New Orders</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-800">
                    128
                  </p>
                </div>
                <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
                  <p className="text-sm text-slate-500">Pending Tasks</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-800">
                    24
                  </p>
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
                  Admin Panel Topbar
                </p>

                <div className="overflow-hidden border rounded-xl border-slate-200">
                  <Navbar
                    title="Admin Panel"
                    subtitle="ระบบจัดการข้อมูลหลังบ้าน"
                    showMenuButton={false}
                    rightContent={
                      <>
                        <NavbarIconButton
                          icon={<Bell className="w-5 h-5" />}
                          badge={1}
                        />
                        <div className="flex items-center justify-center text-sm font-semibold text-white bg-blue-500 rounded-full h-9 w-9">
                          A
                        </div>
                      </>
                    }
                  />
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Report Center Topbar
                </p>

                <div className="overflow-hidden border rounded-xl border-slate-200">
                  <Navbar
                    title="Report Center"
                    subtitle="ศูนย์รวมรายงานทั้งหมด"
                    showMenuButton={false}
                    rightContent={
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageNavbar;
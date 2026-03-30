import { useState } from "react";
import {
  ChevronDown,
  MoreHorizontal,
  User,
  Settings,
  LogOut,
  Eye,
  Pencil,
  Trash2,
  Filter,
  Bell,
  Check,
  Search,
  CalendarDays,
  Building2,
  FileText,
  ShieldCheck
} from "lucide-react";


import {
  DropdownMenu,
  DropdownItem,
} from "@/pages/GroupUIComponents/Components/Dropdowns/index";



const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const Divider = () => <div className="my-2 border-t border-slate-200" />;



  
const PageDropdowns = () => {

  const [selectedDepartment, setSelectedDepartment] = useState("ทั้งหมด");
  const [selectedSort, setSelectedSort] = useState("ล่าสุด");
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [selectedPeriod, setSelectedPeriod] = useState("เดือนนี้");
  const [selectedYear, setSelectedYear] = useState("2569");

  const [multiDepartments, setMultiDepartments] = useState<string[]>([
    "ฝ่ายขาย",
    "ฝ่ายไอที",
  ]);

  const departments = [
    "ทั้งหมด",
    "ฝ่ายขาย",
    "ฝ่ายการตลาด",
    "ฝ่ายไอที",
    "ฝ่ายบัญชี",
    "ฝ่ายทรัพยากรบุคคล",
  ];

  const sortOptions = ["ล่าสุด", "เก่าสุด", "A-Z", "Z-A"];
  const statuses = ["Active", "Pending", "Suspended", "Inactive"];
  const periods = ["วันนี้", "สัปดาห์นี้", "เดือนนี้", "ไตรมาสนี้", "ปีนี้"];
  const years = ["2569", "2568", "2567", "2566"];

  const toggleMultiDepartment = (value: string) => {
    setMultiDepartments((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  
  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Dropdowns
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <span className="cursor-pointer hover:text-blue-500">
                ระบบบริหารจัดการข้อมูล
              </span>
              <span className="mx-2">•</span>
              <span className="cursor-pointer">
                UI Components
              </span>
              <span className="mx-2">•</span>
              <span className="text-gray-700">
                Dropdowns
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Filter className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic Dropdown */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Dropdown
            </h2>

            <div className="flex flex-wrap gap-4">
              <DropdownMenu
                trigger={
                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                    เลือกเมนู
                    <ChevronDown className="w-4 h-4" />
                  </div>
                }
              >
                <div className="space-y-1">
                  <DropdownItem label="Dashboard" />
                  <DropdownItem label="Reports" />
                  <DropdownItem label="Settings" />
                </div>
              </DropdownMenu>

              <DropdownMenu
                trigger={
                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                    Quick Actions
                    <ChevronDown className="w-4 h-4" />
                  </div>
                }
              >
                <div className="space-y-1">
                  <DropdownItem icon={<Eye className="w-4 h-4" />} label="View" />
                  <DropdownItem icon={<Pencil className="w-4 h-4" />} label="Edit" />
                  <DropdownItem
                    icon={<Trash2 className="w-4 h-4" />}
                    label="Delete"
                    danger
                  />
                </div>
              </DropdownMenu>
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                Basic dropdown เหมาะกับเมนูทั่วไป เช่น ปุ่มคำสั่ง หรือ quick actions
              </div>
            </div>
          </section>

          {/* User Menu */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              User Menu Dropdown
            </h2>

            <DropdownMenu
              align="right"
              widthClass="w-72"
              trigger={
                <div className="inline-flex items-center gap-3 px-3 py-2 transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:bg-slate-50">
                  <div className="flex items-center justify-center w-10 h-10 font-semibold text-white bg-blue-500 rounded-full">
                    TS
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-800">
                      Tom Smile
                    </p>
                    <p className="text-xs text-slate-500">Administrator</p>
                  </div>

                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              }
            >
              <div className="px-3 py-2 mb-2 rounded-xl bg-slate-50">
                <p className="text-sm font-semibold text-slate-800">Tom Smile</p>
                <p className="text-xs text-slate-500">tomsmile@example.com</p>
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
                <DropdownItem
                  icon={<Bell className="w-4 h-4" />}
                  label="Notifications"
                  suffix={
                    <span className="px-2 py-0.5 text-[11px] font-medium text-white bg-red-500 rounded-full">
                      3
                    </span>
                  }
                />
                <Divider />
                <DropdownItem
                  icon={<LogOut className="w-4 h-4" />}
                  label="Logout"
                  danger
                />
              </div>
            </DropdownMenu>

            <div className="mt-4">
              <div className={contentBox}>
                ใช้กับโปรไฟล์ผู้ใช้ด้านบนของระบบ เช่น ดูข้อมูลส่วนตัว ตั้งค่าบัญชี และออกจากระบบ
              </div>
            </div>
          </section>

          {/* Action Menu */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Action Menu Dropdown
            </h2>

            <div className="flex flex-wrap gap-4">
              <DropdownMenu
                align="right"
                widthClass="w-52"
                trigger={
                  <div className="inline-flex items-center justify-center w-10 h-10 transition bg-white border rounded-xl border-slate-200 hover:bg-slate-50">
                    <MoreHorizontal className="w-5 h-5 text-slate-600" />
                  </div>
                }
              >
                <div className="space-y-1">
                  <DropdownItem
                    icon={<Eye className="w-4 h-4" />}
                    label="View Detail"
                  />
                  <DropdownItem
                    icon={<Pencil className="w-4 h-4" />}
                    label="Edit Item"
                  />
                  <DropdownItem
                    icon={<FileText className="w-4 h-4" />}
                    label="Export PDF"
                  />
                  <DropdownItem
                    icon={<Trash2 className="w-4 h-4" />}
                    label="Delete Item"
                    danger
                  />
                </div>
              </DropdownMenu>

              <DropdownMenu
                align="right"
                widthClass="w-56"
                trigger={
                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                    จัดการเอกสาร
                    <ChevronDown className="w-4 h-4" />
                  </div>
                }
              >
                <div className="space-y-1">
                  <DropdownItem label="ดูเอกสาร" />
                  <DropdownItem label="แก้ไขเอกสาร" />
                  <DropdownItem label="ส่งอนุมัติ" />
                  <DropdownItem label="ยกเลิกเอกสาร" danger />
                </div>
              </DropdownMenu>
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                เหมาะกับเมนู action ใน table, card, หรือรายการข้อมูล
              </div>
            </div>
          </section>

          {/* Filter / Sort / Status */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Filter / Sort / Status
            </h2>

            <div className="flex flex-wrap items-center gap-3">
              <DropdownMenu
                widthClass="w-60"
                trigger={
                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                    <Filter className="w-4 h-4" />
                    หน่วยงาน: {selectedDepartment}
                    <ChevronDown className="w-4 h-4" />
                  </div>
                }
              >
                <div className="space-y-1">
                  {departments.map((item) => (
                    <DropdownItem
                      key={item}
                      label={item}
                      active={selectedDepartment === item}
                      onClick={() => setSelectedDepartment(item)}
                    />
                  ))}
                </div>
              </DropdownMenu>

              <DropdownMenu
                widthClass="w-48"
                trigger={
                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                    Sort: {selectedSort}
                    <ChevronDown className="w-4 h-4" />
                  </div>
                }
              >
                <div className="space-y-1">
                  {sortOptions.map((item) => (
                    <DropdownItem
                      key={item}
                      label={item}
                      active={selectedSort === item}
                      onClick={() => setSelectedSort(item)}
                    />
                  ))}
                </div>
              </DropdownMenu>

              <DropdownMenu
                widthClass="w-48"
                trigger={
                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                    Status: {selectedStatus}
                    <ChevronDown className="w-4 h-4" />
                  </div>
                }
              >
                <div className="space-y-1">
                  {statuses.map((item) => (
                    <DropdownItem
                      key={item}
                      label={item}
                      active={selectedStatus === item}
                      onClick={() => setSelectedStatus(item)}
                    />
                  ))}
                </div>
              </DropdownMenu>
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                ใช้บ่อยมากในหน้า dashboard, report, table และ search panel
              </div>
            </div>
          </section>

          {/* Multi Select Checkbox */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Multi Select Dropdown (Checkbox Style)
            </h2>

            <DropdownMenu
              widthClass="w-72"
              trigger={
                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                  เลือกหลายหน่วยงาน
                  <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
                    {multiDepartments.length}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              }
            >
              <div className="px-3 pt-2 pb-1 text-xs font-medium uppercase text-slate-400">
                Departments
              </div>

              <div className="space-y-1">
                {departments
                  .filter((item) => item !== "ทั้งหมด")
                  .map((item) => {
                    const isActive = multiDepartments.includes(item);

                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => toggleMultiDepartment(item)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${
                          isActive
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span>{item}</span>

                        <span
                          className={`flex items-center justify-center w-5 h-5 rounded-md border ${
                            isActive
                              ? "border-blue-500 bg-blue-500 text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isActive && <Check className="w-3.5 h-3.5" />}
                        </span>
                      </button>
                    );
                  })}
              </div>

              <Divider />

              <div className="px-2 pt-1">
                <div className="flex flex-wrap gap-2">
                  {multiDepartments.length > 0 ? (
                    multiDepartments.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs text-blue-700 rounded-full bg-blue-100"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="px-1 text-xs text-slate-400">
                      ยังไม่ได้เลือกหน่วยงาน
                    </span>
                  )}
                </div>
              </div>
            </DropdownMenu>

            <div className="mt-4">
              <div className={contentBox}>
                อันนี้คือแบบ checkbox/multi-select ที่คุณถามถึง ใช้กับ filter หลายเขต หลายแผนก หลายสาขาได้ดีมาก
              </div>
            </div>
          </section>

          {/* Searchable Style */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Searchable Style Dropdown
            </h2>

            <DropdownMenu
              widthClass="w-80"
              trigger={
                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                  เลือกหน่วยงานจากรายการ
                  <ChevronDown className="w-4 h-4" />
                </div>
              }
            >
              <div className="px-2 pb-2">
                <div className="flex items-center gap-2 px-3 py-2 border rounded-xl border-slate-200 bg-slate-50">
                  <Search className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="ค้นหาหน่วยงาน..."
                    className="w-full text-sm bg-transparent outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <DropdownItem
                  icon={<Building2 className="w-4 h-4" />}
                  label="ฝ่ายเทคโนโลยีสารสนเทศ"
                />
                <DropdownItem
                  icon={<Building2 className="w-4 h-4" />}
                  label="ฝ่ายบริหารความเสี่ยง"
                />
                <DropdownItem
                  icon={<Building2 className="w-4 h-4" />}
                  label="ฝ่ายกำกับคุณภาพ"
                />
                <DropdownItem
                  icon={<Building2 className="w-4 h-4" />}
                  label="ฝ่ายบัญชีและการเงิน"
                />
              </div>
            </DropdownMenu>

            <div className="mt-4">
              <div className={contentBox}>
                เป็น searchable style สำหรับต่อยอดกับข้อมูลเยอะ ๆ เช่น รายชื่อสาขา ลูกค้า หรือผู้ใช้งาน
              </div>
            </div>
          </section>

          {/* Table Action */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Dropdown Inside Table
            </h2>

            <div className="overflow-hidden border rounded-2xl border-slate-200">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-slate-600">
                      <th className="px-4 py-3 font-medium">Name</th>
                      <th className="px-4 py-3 font-medium">Department</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-slate-200">
                    {[
                      { name: "John Doe", department: "IT", status: "Active" },
                      { name: "Jane Smith", department: "Finance", status: "Pending" },
                      { name: "Michael Lee", department: "Operations", status: "Suspended" },
                    ].map((item) => (
                      <tr key={item.name}>
                        <td className="px-4 py-3 text-slate-700">{item.name}</td>
                        <td className="px-4 py-3 text-slate-600">{item.department}</td>
                        <td className="px-4 py-3 text-slate-600">{item.status}</td>
                        <td className="px-4 py-3 text-right">
                          <DropdownMenu
                            align="right"
                            widthClass="w-48"
                            trigger={
                              <div className="inline-flex items-center justify-center transition border rounded-lg w-9 h-9 border-slate-200 hover:bg-slate-50">
                                <MoreHorizontal className="w-4 h-4 text-slate-600" />
                              </div>
                            }
                          >
                            <div className="space-y-1">
                              <DropdownItem
                                icon={<Eye className="w-4 h-4" />}
                                label="View"
                              />
                              <DropdownItem
                                icon={<Pencil className="w-4 h-4" />}
                                label="Edit"
                              />
                              <DropdownItem
                                icon={<ShieldCheck className="w-4 h-4" />}
                                label="Permission"
                              />
                              <DropdownItem
                                icon={<Trash2 className="w-4 h-4" />}
                                label="Delete"
                                danger
                              />
                            </div>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Toolbar Dropdowns */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Toolbar Dropdowns
            </h2>

            <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
              <div className="flex flex-wrap items-center gap-3">
                <DropdownMenu
                  widthClass="w-44"
                  trigger={
                    <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">
                      <CalendarDays className="w-4 h-4" />
                      ปี {selectedYear}
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  }
                >
                  <div className="space-y-1">
                    {years.map((item) => (
                      <DropdownItem
                        key={item}
                        label={item}
                        active={selectedYear === item}
                        onClick={() => setSelectedYear(item)}
                      />
                    ))}
                  </div>
                </DropdownMenu>

                <DropdownMenu
                  widthClass="w-48"
                  trigger={
                    <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">
                      ช่วงเวลา: {selectedPeriod}
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  }
                >
                  <div className="space-y-1">
                    {periods.map((item) => (
                      <DropdownItem
                        key={item}
                        label={item}
                        active={selectedPeriod === item}
                        onClick={() => setSelectedPeriod(item)}
                      />
                    ))}
                  </div>
                </DropdownMenu>

                <DropdownMenu
                  widthClass="w-56"
                  trigger={
                    <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">
                      ส่งออกข้อมูล
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  }
                >
                  <div className="space-y-1">
                    <DropdownItem label="Export Excel" />
                    <DropdownItem label="Export PDF" />
                    <DropdownItem label="Print Report" />
                  </div>
                </DropdownMenu>
              </div>

              <div className="px-4 py-4 mt-4 text-sm bg-white border rounded-xl text-slate-600 border-slate-200">
                เหมาะกับหน้า dashboard ผู้บริหาร หรือ report center
              </div>
            </div>
          </section>

          {/* Split Button */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Split Button Dropdown
            </h2>

            <div className="inline-flex overflow-hidden border shadow-sm rounded-2xl border-slate-200">
              <button
                type="button"
                className="px-5 py-2.5 text-sm font-medium text-white transition bg-blue-500 hover:bg-blue-600"
              >
                Save Changes
              </button>

              <DropdownMenu
                align="right"
                widthClass="w-52"
                trigger={
                  <div className="flex items-center justify-center h-full px-3 text-white transition bg-blue-500 border-l border-blue-400 hover:bg-blue-600">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                }
              >
                <div className="space-y-1">
                  <DropdownItem label="Save as Draft" />
                  <DropdownItem label="Save & Publish" />
                  <DropdownItem label="Save & Send Approval" />
                </div>
              </DropdownMenu>
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                เหมาะกับฟอร์มที่มี action หลัก 1 อย่าง แต่มีตัวเลือกย่อยเพิ่มเติม
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
                <p className="mb-3 text-sm font-medium text-slate-600">
                  User Management Dropdown
                </p>

                <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-xl border-slate-200">
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      สมชาย ใจดี
                    </p>
                    <p className="text-xs text-slate-500">Role: Manager</p>
                  </div>

                  <div className="inline-flex items-center justify-center w-10 h-10 border rounded-xl border-slate-200">
                    <MoreHorizontal className="w-5 h-5 text-slate-600" />
                  </div>
                </div>

                <div className="px-4 py-4 mt-4 text-sm bg-white border rounded-xl text-slate-600 border-slate-200">
                  เหมาะกับหน้า user management และ permission management
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Executive Dashboard Filters
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border rounded-xl border-slate-200 text-slate-700">
                    ปี 2569
                    <ChevronDown className="w-4 h-4" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border rounded-xl border-slate-200 text-slate-700">
                    รายเดือน
                    <ChevronDown className="w-4 h-4" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border rounded-xl border-slate-200 text-slate-700">
                    ภาคทั้งหมด
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                <div className="px-4 py-4 mt-4 text-sm bg-white border rounded-xl text-slate-600 border-slate-200">
                  เหมาะกับหน้า dashboard ที่ต้อง filter ตามปี ช่วงเวลา ภาค เขต หรือประเภทข้อมูล
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageDropdowns

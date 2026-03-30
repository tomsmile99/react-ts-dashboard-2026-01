import { useMemo, useState } from "react";
import {
  Search,
  Download,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  RefreshCw,
  ArrowUpDown,
  ShieldCheck,
  Table
} from "lucide-react";

import DropdownMenu from "@/pages/GroupUIComponents/Components/Dropdowns/DropdownMenu";
import DropdownItem from "@/pages/GroupUIComponents/Components/Dropdowns/DropdownItem";

import {
  TableCheckbox,
  TableStatusBadge,
  TableEmptyState,
  TableLoadingRows,
  type TableStatus,
} from "@/pages/GroupUIComponents/Components/Tables/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const tableWrapper =
  "overflow-hidden border rounded-2xl border-slate-200 bg-white";

const thClass =
  "px-4 py-3 text-left text-sm font-semibold text-slate-600 bg-slate-50";

const tdClass = "px-4 py-3 text-sm text-slate-700";

type Employee = {
  id: number;
  name: string;
  department: string;
  position: string;
  status: TableStatus;
  email: string;
  updatedAt: string;
};

const employees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    department: "IT",
    position: "Frontend Developer",
    status: "Active",
    email: "john@example.com",
    updatedAt: "2026-03-28 09:30",
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Finance",
    position: "Accountant",
    status: "Pending",
    email: "jane@example.com",
    updatedAt: "2026-03-27 14:10",
  },
  {
    id: 3,
    name: "Michael Lee",
    department: "Operations",
    position: "Operation Manager",
    status: "Suspended",
    email: "michael@example.com",
    updatedAt: "2026-03-26 11:45",
  },
  {
    id: 4,
    name: "Emily Johnson",
    department: "HR",
    position: "HR Specialist",
    status: "Active",
    email: "emily@example.com",
    updatedAt: "2026-03-25 16:20",
  },
  {
    id: 5,
    name: "David Brown",
    department: "Marketing",
    position: "Content Strategist",
    status: "Inactive",
    email: "david@example.com",
    updatedAt: "2026-03-24 10:05",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    department: "IT",
    position: "Backend Developer",
    status: "Active",
    email: "sophia@example.com",
    updatedAt: "2026-03-23 13:15",
  },
];


const PageTables = () => {

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("ทั้งหมด");
  const [statusFilter, setStatusFilter] = useState("ทั้งหมด");
  const [sortField, setSortField] = useState<keyof Employee>("updatedAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4;

  const departments = ["ทั้งหมด", "IT", "Finance", "Operations", "HR", "Marketing"];
  const statuses = ["ทั้งหมด", "Active", "Pending", "Suspended", "Inactive"];

  const filteredData = useMemo(() => {
    let data = [...employees];

    if (search.trim()) {
      const keyword = search.toLowerCase();
      data = data.filter(
        (item) =>
          item.name.toLowerCase().includes(keyword) ||
          item.email.toLowerCase().includes(keyword) ||
          item.department.toLowerCase().includes(keyword) ||
          item.position.toLowerCase().includes(keyword)
      );
    }

    if (departmentFilter !== "ทั้งหมด") {
      data = data.filter((item) => item.department === departmentFilter);
    }

    if (statusFilter !== "ทั้งหมด") {
      data = data.filter((item) => item.status === statusFilter);
    }

    data.sort((a, b) => {
      const aValue = String(a[sortField]).toLowerCase();
      const bValue = String(b[sortField]).toLowerCase();

      if (sortDirection === "asc") {
        return aValue.localeCompare(bValue);
      }
      return bValue.localeCompare(aValue);
    });

    return data;
  }, [search, departmentFilter, statusFilter, sortField, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage]);

  const isAllCurrentPageSelected =
    paginatedData.length > 0 &&
    paginatedData.every((item) => selectedIds.includes(item.id));

  const toggleSelectAllCurrentPage = () => {
    if (isAllCurrentPageSelected) {
      setSelectedIds((prev) =>
        prev.filter((id) => !paginatedData.some((item) => item.id === id))
      );
    } else {
      setSelectedIds((prev) => [
        ...new Set([...prev, ...paginatedData.map((item) => item.id)]),
      ]);
    }
  };

  const toggleSelectOne = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSort = (field: keyof Employee) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSortField(field);
    setSortDirection("asc");
  };

  const resetFilters = () => {
    setSearch("");
    setDepartmentFilter("ทั้งหมด");
    setStatusFilter("ทั้งหมด");
    setCurrentPage(1);
  };
  

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Tables
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
                Tables
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Table className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic Table */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Table
            </h2>

            <div className={tableWrapper}>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className={thClass}>Name</th>
                      <th className={thClass}>Department</th>
                      <th className={thClass}>Position</th>
                      <th className={thClass}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.slice(0, 4).map((item) => (
                      <tr key={item.id} className="border-t border-slate-200">
                        <td className={tdClass}>{item.name}</td>
                        <td className={tdClass}>{item.department}</td>
                        <td className={tdClass}>{item.position}</td>
                        <td className={tdClass}>
                          <TableStatusBadge status={item.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                Basic table เหมาะกับการแสดงข้อมูลพื้นฐานที่ไม่ซับซ้อน
              </div>
            </div>
          </section>

          {/* Striped Table */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Striped Table
            </h2>

            <div className={tableWrapper}>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className={thClass}>Name</th>
                      <th className={thClass}>Email</th>
                      <th className={thClass}>Department</th>
                      <th className={thClass}>Updated At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((item, index) => (
                      <tr
                        key={item.id}
                        className={`border-t border-slate-200 ${
                          index % 2 === 1 ? "bg-slate-50/70" : "bg-white"
                        }`}
                      >
                        <td className={tdClass}>{item.name}</td>
                        <td className={tdClass}>{item.email}</td>
                        <td className={tdClass}>{item.department}</td>
                        <td className={tdClass}>{item.updatedAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Selectable Rows */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Selectable Rows
            </h2>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-2 text-sm font-medium text-blue-700 rounded-xl bg-blue-50">
                เลือกแล้ว {selectedIds.length} รายการ
              </span>

              <button
                type="button"
                className="px-4 py-2 text-sm font-medium transition border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                Export Selected
              </button>

              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-red-600 transition border border-red-200 rounded-xl hover:bg-red-50"
              >
                Delete Selected
              </button>
            </div>

            <div className={tableWrapper}>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className={thClass}>
                        <TableCheckbox
                          checked={isAllCurrentPageSelected}
                          onChange={toggleSelectAllCurrentPage}
                        />
                      </th>
                      <th className={thClass}>Name</th>
                      <th className={thClass}>Department</th>
                      <th className={thClass}>Position</th>
                      <th className={thClass}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.slice(0, 4).map((item) => {
                      const checked = selectedIds.includes(item.id);

                      return (
                        <tr
                          key={item.id}
                          className={`border-t border-slate-200 transition ${
                            checked ? "bg-blue-50/50" : "bg-white"
                          }`}
                        >
                          <td className={tdClass}>
                            <TableCheckbox
                              checked={checked}
                              onChange={() => toggleSelectOne(item.id)}
                            />
                          </td>
                          <td className={tdClass}>{item.name}</td>
                          <td className={tdClass}>{item.department}</td>
                          <td className={tdClass}>{item.position}</td>
                          <td className={tdClass}>
                            <TableStatusBadge status={item.status} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Sortable Header */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Sortable Header
            </h2>

            <div className={tableWrapper}>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      {[
                        { label: "Name", field: "name" as keyof Employee },
                        {
                          label: "Department",
                          field: "department" as keyof Employee,
                        },
                        { label: "Position", field: "position" as keyof Employee },
                        { label: "Updated At", field: "updatedAt" as keyof Employee },
                      ].map((col) => (
                        <th key={col.field} className={thClass}>
                          <button
                            type="button"
                            onClick={() => handleSort(col.field)}
                            className="inline-flex items-center gap-2 transition hover:text-slate-800"
                          >
                            {col.label}
                            <ArrowUpDown className="w-4 h-4" />
                          </button>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.slice(0, 5).map((item) => (
                      <tr key={item.id} className="border-t border-slate-200">
                        <td className={tdClass}>{item.name}</td>
                        <td className={tdClass}>{item.department}</td>
                        <td className={tdClass}>{item.position}</td>
                        <td className={tdClass}>{item.updatedAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Production Table */}
          <section className={sectionCard}>
            <div className="flex flex-col gap-4 mb-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  Production Table Example
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  ตารางตัวอย่างแบบใช้งานจริง พร้อม toolbar, filter, sort, selection,
                  action และ pagination
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            <div className="p-4 mb-4 border rounded-2xl border-slate-200 bg-slate-50">
              <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-col flex-1 gap-3 md:flex-row">
                  <div className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 md:max-w-sm">
                    <Search className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="ค้นหาชื่อ, อีเมล, แผนก..."
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full text-sm bg-transparent outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <DropdownMenu
                    widthClass="w-56"
                    trigger={
                      <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">
                        <Filter className="w-4 h-4" />
                        แผนก: {departmentFilter}
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    }
                  >
                    <div className="space-y-1">
                      {departments.map((item) => (
                        <DropdownItem
                          key={item}
                          label={item}
                          active={departmentFilter === item}
                          onClick={() => {
                            setDepartmentFilter(item);
                            setCurrentPage(1);
                          }}
                        />
                      ))}
                    </div>
                  </DropdownMenu>

                  <DropdownMenu
                    widthClass="w-48"
                    trigger={
                      <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">
                        Status: {statusFilter}
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    }
                  >
                    <div className="space-y-1">
                      {statuses.map((item) => (
                        <DropdownItem
                          key={item}
                          label={item}
                          active={statusFilter === item}
                          onClick={() => {
                            setStatusFilter(item);
                            setCurrentPage(1);
                          }}
                        />
                      ))}
                    </div>
                  </DropdownMenu>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-white"
                  >
                    Reset
                  </button>

                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-white"
                  >
                    Bulk Action
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-2 text-sm rounded-xl bg-slate-100 text-slate-700">
                ทั้งหมด {filteredData.length} รายการ
              </span>
              <span className="px-3 py-2 text-sm text-blue-700 rounded-xl bg-blue-50">
                เลือกแล้ว {selectedIds.length} รายการ
              </span>
            </div>

            <div className={tableWrapper}>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className={thClass}>
                        <TableCheckbox
                          checked={isAllCurrentPageSelected}
                          onChange={toggleSelectAllCurrentPage}
                        />
                      </th>
                      <th className={thClass}>
                        <button
                          type="button"
                          onClick={() => handleSort("name")}
                          className="inline-flex items-center gap-2"
                        >
                          Name
                          <ArrowUpDown className="w-4 h-4" />
                        </button>
                      </th>
                      <th className={thClass}>
                        <button
                          type="button"
                          onClick={() => handleSort("department")}
                          className="inline-flex items-center gap-2"
                        >
                          Department
                          <ArrowUpDown className="w-4 h-4" />
                        </button>
                      </th>
                      <th className={thClass}>Position</th>
                      <th className={thClass}>Status</th>
                      <th className={thClass}>Updated At</th>
                      <th className={`${thClass} text-right`}>Action</th>
                    </tr>
                  </thead>

                  {paginatedData.length === 0 ? (
                    <tbody>
                      <tr>
                        <td colSpan={7}>
                          <TableEmptyState />
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody>
                      {paginatedData.map((item) => {
                        const checked = selectedIds.includes(item.id);

                        return (
                          <tr
                            key={item.id}
                            className={`border-t border-slate-200 transition hover:bg-slate-50 ${
                              checked ? "bg-blue-50/50" : ""
                            }`}
                          >
                            <td className={tdClass}>
                              <TableCheckbox
                                checked={checked}
                                onChange={() => toggleSelectOne(item.id)}
                              />
                            </td>
                            <td className={tdClass}>
                              <div>
                                <p className="font-medium text-slate-800">
                                  {item.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {item.email}
                                </p>
                              </div>
                            </td>
                            <td className={tdClass}>{item.department}</td>
                            <td className={tdClass}>{item.position}</td>
                            <td className={tdClass}>
                              <TableStatusBadge status={item.status} />
                            </td>
                            <td className={tdClass}>{item.updatedAt}</td>
                            <td className={`${tdClass} text-right`}>
                              <DropdownMenu
                                align="right"
                                widthClass="w-48"
                                trigger={
                                  <div className="inline-flex items-center justify-center transition border rounded-lg h-9 w-9 border-slate-200 hover:bg-slate-50">
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
                        );
                      })}
                    </tbody>
                  )}
                </table>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-4 mt-4 border rounded-2xl border-slate-200 bg-slate-50 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-600">
                แสดง{" "}
                <span className="font-semibold text-slate-800">
                  {paginatedData.length}
                </span>{" "}
                จาก{" "}
                <span className="font-semibold text-slate-800">
                  {filteredData.length}
                </span>{" "}
                รายการ
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition bg-white border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </button>

                <div className="px-4 py-2 text-sm font-medium bg-white border rounded-xl border-slate-200 text-slate-700">
                  Page {currentPage} / {totalPages}
                </div>

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition bg-white border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Empty State */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Empty State Table
            </h2>

            <div className={tableWrapper}>
              <TableEmptyState />
            </div>
          </section>

          {/* Loading State */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Loading State Table
            </h2>

            <div className={tableWrapper}>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className={thClass}>Name</th>
                      <th className={thClass}>Department</th>
                      <th className={thClass}>Position</th>
                      <th className={thClass}>Status</th>
                      <th className={thClass}>Updated At</th>
                    </tr>
                  </thead>
                  <TableLoadingRows columns={5} rows={5} />
                </table>
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
                  User Management Table
                </p>

                <div className="overflow-hidden bg-white border rounded-xl border-slate-200">
                  <div className="grid grid-cols-[1.4fr_1fr_100px] border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600">
                    <span>User</span>
                    <span>Status</span>
                    <span className="text-right">Action</span>
                  </div>

                  {employees.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-[1.4fr_1fr_100px] items-center border-b border-slate-200 px-4 py-3 last:border-b-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500">{item.email}</p>
                      </div>
                      <div>
                        <TableStatusBadge status={item.status} />
                      </div>
                      <div className="text-right">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center border rounded-lg h-9 w-9 border-slate-200"
                        >
                          <MoreHorizontal className="w-4 h-4 text-slate-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Report Summary Table
                </p>

                <div className="overflow-hidden bg-white border rounded-xl border-slate-200">
                  <div className="grid grid-cols-3 px-4 py-3 text-sm font-medium border-b border-slate-200 bg-slate-50 text-slate-600">
                    <span>Department</span>
                    <span>Users</span>
                    <span>Updated</span>
                  </div>

                  {[
                    { dept: "IT", users: 120, updated: "วันนี้" },
                    { dept: "Finance", users: 42, updated: "วันนี้" },
                    { dept: "Operations", users: 87, updated: "เมื่อวาน" },
                  ].map((item) => (
                    <div
                      key={item.dept}
                      className="grid grid-cols-3 px-4 py-3 text-sm border-b border-slate-200 text-slate-700 last:border-b-0"
                    >
                      <span>{item.dept}</span>
                      <span>{item.users}</span>
                      <span>{item.updated}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageTables

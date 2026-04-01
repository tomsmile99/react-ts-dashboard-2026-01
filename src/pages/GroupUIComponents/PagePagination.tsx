import { useState, useMemo } from "react";
import {
  Columns3
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";


import {
  Pagination
} from "@/pages/GroupUIComponents/Components/Pagination/index";





const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const allUsers = Array.from({ length: 127 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 3 === 0 ? "Admin" : index % 3 === 1 ? "Editor" : "Viewer",
}));

  
const PagePagination = () => {

  const [basicPage, setBasicPage] = useState(1);
  const [compactPage, setCompactPage] = useState(7);
  const [tablePage, setTablePage] = useState(1);
  const [tablePageSize, setTablePageSize] = useState(10);

  const totalPages = Math.ceil(allUsers.length / tablePageSize);

  const paginatedUsers = useMemo(() => {
    const start = (tablePage - 1) * tablePageSize;
    return allUsers.slice(start, start + tablePageSize);
  }, [tablePage, tablePageSize]);
  

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              PagePagination
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "PagePagination", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Columns3 className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">      
          {/* Basic */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Pagination
            </h2>

            <Pagination
              currentPage={basicPage}
              totalPages={8}
              onPageChange={setBasicPage}
            />

            <div className="mt-4">
              <div className={contentBox}>
                เวอร์ชันพื้นฐาน มี First / Prev / Next / Last และเลขหน้า
              </div>
            </div>
          </section>

          {/* Compact */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Compact Pagination
            </h2>

            <Pagination
              currentPage={compactPage}
              totalPages={30}
              onPageChange={setCompactPage}
              siblingCount={1}
              showPageInfo={false}
            />

            <div className="mt-4">
              <div className={contentBox}>
                เหมาะกับหน้าที่มีจำนวนหน้ามาก และต้องการความกระชับ
              </div>
            </div>
          </section>

          {/* Production Table Example */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Production Table Pagination
            </h2>

            <div className="overflow-hidden bg-white border rounded-2xl border-slate-200">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-sm font-semibold text-left bg-slate-50 text-slate-600">
                        Name
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-left bg-slate-50 text-slate-600">
                        Email
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-left bg-slate-50 text-slate-600">
                        Role
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {paginatedUsers.map((user) => (
                      <tr key={user.id} className="border-t border-slate-200">
                        <td className="px-4 py-3 text-sm text-slate-700">
                          {user.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          {user.email}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          {user.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t border-slate-200 bg-slate-50">
                <Pagination
                  currentPage={tablePage}
                  totalPages={totalPages}
                  totalItems={allUsers.length}
                  pageSize={tablePageSize}
                  onPageChange={setTablePage}
                  onPageSizeChange={(size) => {
                    setTablePageSize(size);
                    setTablePage(1);
                  }}
                  showRowsPerPage
                  showJumpToPage
                />
              </div>
            </div>
          </section>

          {/* Card Example */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Card Footer Example
            </h2>

            <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800">
                  Report Records
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  แสดงรายการข้อมูลพร้อม footer pagination
                </p>
              </div>

              <div className="p-6 text-sm border rounded-xl border-slate-200 bg-slate-50 text-slate-600">
                เนื้อหาตารางหรือรายการข้อมูลจะอยู่ในส่วนนี้
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200">
                <Pagination
                  currentPage={3}
                  totalPages={15}
                  totalItems={300}
                  pageSize={20}
                  onPageChange={(page) => console.log("page:", page)}
                  showJumpToPage
                />
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
                  <Pagination
                    currentPage={5}
                    totalPages={18}
                    totalItems={350}
                    pageSize={20}
                    onPageChange={(page) => console.log("user page:", page)}
                    showJumpToPage
                  />
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Report Center
                </p>

                <div className="p-4 bg-white border rounded-xl border-slate-200">
                  <Pagination
                    currentPage={1}
                    totalPages={6}
                    totalItems={120}
                    pageSize={20}
                    onPageChange={(page) => console.log("report page:", page)}
                    showRowsPerPage
                    onPageSizeChange={(size) => console.log("page size:", size)}
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

export default PagePagination

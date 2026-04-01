
import { Users } from "lucide-react"
import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

const UsersPage = () => {
  return (
    <>
      <div className="w-full pb-2">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            <span className="flex justify-start p-3 text-2xl text-gray-800">
              Users
            </span>
            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "จัดการระบบ" },
                  { label: "Users", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Users size={64}/>
          </div>
        </div>
      </div>
      
      {/* <div className="w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="p-4 bg-white shadow rounded-xl">Box 1</div>
          <div className="p-4 bg-white shadow rounded-xl">Box 2</div>
          <div className="p-4 bg-white shadow rounded-xl">Box 3</div>
          <div className="p-4 bg-white shadow rounded-xl">Box 4</div>
        </div>
      </div>
      <div className="overflow-x-auto bg-white shadow rounded-2xl dark:bg-slate-900">
        <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300">
          <thead className="text-xs uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">First</th>
              <th className="px-6 py-3">Last</th>
              <th className="px-6 py-3">Handle</th>
            </tr>
          </thead>

          <tbody>
            <tr className="transition border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
              <td className="px-6 py-4 font-medium">1</td>
              <td className="px-6 py-4">Mark</td>
              <td className="px-6 py-4">Otto</td>
              <td className="px-6 py-4">@mdo</td>
            </tr>

            <tr className="transition border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
              <td className="px-6 py-4 font-medium">2</td>
              <td className="px-6 py-4">Jacob</td>
              <td className="px-6 py-4">Thornton</td>
              <td className="px-6 py-4">@fat</td>
            </tr>

            <tr className="transition hover:bg-slate-50 dark:hover:bg-slate-800">
              <td className="px-6 py-4 font-medium">3</td>
              <td className="px-6 py-4">John</td>
              <td className="px-6 py-4">Doe</td>
              <td className="px-6 py-4">@social</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  )
}

export default UsersPage

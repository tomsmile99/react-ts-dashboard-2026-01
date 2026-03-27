
import { ScrollText } from "lucide-react"


const PageOverflowUtilities = () => {

  const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

  const labelClass = "mb-2 text-sm font-medium text-slate-600";

  const itemClass =
    "rounded-lg border border-sky-200 bg-sky-100 px-4 py-3 text-sm font-medium text-slate-700";


  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Overflow Utilities
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <span className="cursor-pointer hover:text-blue-500">
                ระบบบริหารจัดการข้อมูล
              </span>
              <span className="mx-2">•</span>
              <span className="cursor-pointer">
                Layout
              </span>
              <span className="mx-2">•</span>
              <span className="text-gray-700">
                Overflow Utilities
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <ScrollText size={64}/>
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* overflow-hidden */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              overflow-hidden
            </h2>

            <p className={labelClass}>
              ซ่อนส่วนที่ล้นออกนอกกล่อง
            </p>

            <div className="p-4 overflow-hidden border border-dashed rounded-2xl border-slate-300 bg-slate-50">
              <div className="w-[520px] rounded-xl border border-rose-200 bg-rose-100 px-4 py-3 text-sm font-medium text-slate-700">
                กล่องด้านในกว้างเกิน parent แต่ parent ใช้ overflow-hidden
              </div>
            </div>
          </section>

          {/* overflow-auto */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              overflow-auto
            </h2>

            <p className={labelClass}>
              มี scrollbar เฉพาะตอนที่เนื้อหาล้น
            </p>

            <div className="p-4 overflow-auto border border-dashed rounded-2xl border-slate-300 bg-slate-50 max-h-36">
              <div className="space-y-3">
                <div className={itemClass}>Row 1</div>
                <div className={itemClass}>Row 2</div>
                <div className={itemClass}>Row 3</div>
                <div className={itemClass}>Row 4</div>
                <div className={itemClass}>Row 5</div>
                <div className={itemClass}>Row 6</div>
              </div>
            </div>
          </section>

          {/* overflow-y-auto */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              overflow-y-auto
            </h2>

            <p className={labelClass}>
              เลื่อนเฉพาะแนวตั้ง เหมาะกับ sidebar หรือ modal body
            </p>

            <div className="h-48 p-4 overflow-y-auto border border-dashed rounded-2xl border-slate-300 bg-slate-50">
              <div className="space-y-3">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className={itemClass}>
                    Menu Item {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* overflow-x-auto */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              overflow-x-auto
            </h2>

            <p className={labelClass}>
              เลื่อนเฉพาะแนวนอน เหมาะกับ table กว้างเกินจอ
            </p>

            <div className="p-4 overflow-x-auto border border-dashed rounded-2xl border-slate-300 bg-slate-50">
              <div className="min-w-[900px]">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-200 text-slate-700">
                      <th className="p-3 text-left rounded-l-xl">Name</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Department</th>
                      <th className="p-3 text-left">Role</th>
                      <th className="p-3 text-left rounded-r-xl">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr>
                      <td className="p-3">John Doe</td>
                      <td className="p-3">john@example.com</td>
                      <td className="p-3">IT Support</td>
                      <td className="p-3">Admin</td>
                      <td className="p-3">Active</td>
                    </tr>
                    <tr>
                      <td className="p-3">Jane Smith</td>
                      <td className="p-3">jane@example.com</td>
                      <td className="p-3">Operations</td>
                      <td className="p-3">Manager</td>
                      <td className="p-3">Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* truncate / text overflow */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Text Overflow
            </h2>

            <div className="space-y-5">
              <div>
                <p className={labelClass}>truncate</p>
                <div className="w-64 p-4 border border-dashed rounded-xl border-slate-300 bg-slate-50">
                  <p className="text-sm truncate text-slate-700">
                    This is a very long text that will be truncated in a single line.
                  </p>
                </div>
              </div>

              <div>
                <p className={labelClass}>break-words</p>
                <div className="w-64 p-4 border border-dashed rounded-xl border-slate-300 bg-slate-50">
                  <p className="text-sm break-words text-slate-700">
                    super-long-email-address-example-for-demo-purpose@examplecompanydomain.com
                  </p>
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
              {/* Sidebar scroll */}
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className={labelClass}>Sidebar Menu Scroll</p>

                <div className="h-48 p-3 space-y-2 overflow-y-auto bg-white border rounded-xl border-slate-300">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm font-medium bg-blue-100 rounded-lg text-slate-700"
                    >
                      Sidebar Menu {index + 1}
                    </div>
                  ))}
                </div>

                <div className="px-4 py-3 mt-4 text-sm rounded-xl bg-slate-100 text-slate-700">
                  className="h-48 overflow-y-auto"
                </div>
              </div>

              {/* Modal body scroll */}
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className={labelClass}>Modal Body Scroll</p>

                <div className="bg-white border shadow-sm rounded-2xl border-slate-300">
                  <div className="px-4 py-3 font-medium border-b border-slate-200 text-slate-800">
                    Modal Header
                  </div>

                  <div className="px-4 py-3 space-y-3 overflow-y-auto max-h-40">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <p key={index} className="text-sm text-slate-600">
                        {longText}
                      </p>
                    ))}
                  </div>

                  <div className="px-4 py-3 text-right border-t border-slate-200">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl">
                      Save
                    </button>
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

export default PageOverflowUtilities

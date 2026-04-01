
import { LayoutDashboard } from "lucide-react"
import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

type StatCardProps = {
  title : string;
  value : string;
  subtitle : string;
};

function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="p-5 transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md dark:bg-slate-900 dark:text-white">
      <p className="text-sm font-medium text-slate-500 dark:text-white">{title}</p>
      <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 dark:text-white">{value}</h3>
      <p className="mt-2 text-sm text-slate-400 dark:text-white">{subtitle}</p>
    </div>
  );
}


const PageDashboard = () => {

  type TableRow = {
    id: number;
    branch: string;
    policy: number;
    premium: string;
    status: "สำเร็จ" | "รอตรวจสอบ" | "ค้างดำเนินการ";
  };

  const tableRows: TableRow[] = [
    { id: 1, branch: "สาขาพิจิตร", policy: 128, premium: "฿245,000", status: "สำเร็จ" },
    { id: 2, branch: "สาขานครสวรรค์", policy: 94, premium: "฿198,000", status: "รอตรวจสอบ" },
    { id: 3, branch: "สาขาพิษณุโลก", policy: 76, premium: "฿156,000", status: "ค้างดำเนินการ" },
    { id: 4, branch: "สาขากำแพงเพชร", policy: 142, premium: "฿302,000", status: "สำเร็จ" },
  ];

  function StatusBadge({ status }: { status: TableRow["status"] }) {
    const map = {
      สำเร็จ: "bg-emerald-100 text-emerald-700",
      รอตรวจสอบ: "bg-amber-100 text-amber-700",
      ค้างดำเนินการ: "bg-rose-100 text-rose-700",
    };

    return (
      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${map[status]}`}>
        {status}
      </span>
    );
  }



  return (
    <>
      <div className="w-full pb-2">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            <span className="flex justify-start p-3 text-2xl text-gray-800">
              Dashboard
            </span>
            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                // homeLabel="Dashboard"
                items={[
                  { label: "Dashboard", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <LayoutDashboard size={64}/>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 xl:grid-cols-4 dark:text-white">
        <StatCard title="ยอดเบี้ยรวม" value="฿1,245,000" subtitle="อัปเดตล่าสุด 10:30 น." />
        <StatCard title="จำนวนกรมธรรม์" value="440" subtitle="เพิ่มขึ้นจากเมื่อวาน 12%" />
        <StatCard title="รายได้ค่าคอมมิชชั่น" value="฿164,200" subtitle="คิดจากยอดสุทธิทั้งหมด" />
        <StatCard title="งานรอดำเนินการ" value="28" subtitle="รอตรวจสอบจากเจ้าหน้าที่" />
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6 xl:grid-cols-3 ">
        <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-2 dark:bg-slate-900 dark:text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">ยอดขายรายเดือน</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-white">ตัวอย่างพื้นที่สำหรับใส่กราฟในอนาคต</p>
            </div>
            <select className="px-3 py-2 text-sm border outline-none rounded-xl border-slate-300 focus:border-blue-500">
              <option>ปี 2569</option>
              <option>ปี 2570</option>
            </select>
          </div>

          <div className="flex items-center justify-center mt-6 border border-dashed h-80 rounded-2xl border-slate-300 bg-slate-50 text-slate-400">
            Chart Area
          </div>
        </div>

        <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200 dark:bg-slate-900 dark:text-white">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">สัดส่วนงาน</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-white">สรุปสถานะงานโดยรวม</p>

          <div className="mt-6 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-slate-600 dark:text-white">สำเร็จ</span>
                <span className="font-semibold text-slate-800 dark:text-white">68%</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100">
                <div className="h-3 w-[68%] rounded-full bg-emerald-500" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-slate-600 dark:text-white">รอตรวจสอบ</span>
                <span className="font-semibold text-slate-800 dark:text-white">21%</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100">
                <div className="h-3 w-[21%] rounded-full bg-amber-500" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-slate-600 dark:text-white">ค้างดำเนินการ</span>
                <span className="font-semibold text-slate-800 dark:text-white">11%</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100">
                <div className="h-3 w-[11%] rounded-full bg-rose-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 mt-6 bg-white border shadow-sm rounded-2xl border-slate-200 dark:bg-slate-900 dark:text-white">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between ">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">สรุปตามสาขา</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-white">รายการตัวอย่างสำหรับต่อยอดไปยังข้อมูลจริงจาก API</p>
          </div>
          <button className="px-4 py-2 text-sm font-medium transition border rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 dark:text-white dark:hover:bg-slate-500">
            ดูทั้งหมด
          </button>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="px-4 py-3 font-medium dark:text-white">สาขา</th>
                <th className="px-4 py-3 font-medium dark:text-white">จำนวนกรมธรรม์</th>
                <th className="px-4 py-3 font-medium dark:text-white">เบี้ยประกัน</th>
                <th className="px-4 py-3 font-medium dark:text-white">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-4 font-medium text-slate-800 dark:text-white">{row.branch}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-white">{row.policy}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-white">{row.premium}</td>
                  <td className="px-4 py-4 dark:text-white">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PageDashboard

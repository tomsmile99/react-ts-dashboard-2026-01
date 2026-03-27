import {
  CreditCard,
  TrendingUp,
  Users,
  DollarSign,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react";

const PageCards = () => {

  const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

  const uiCard =
  "rounded-2xl border border-slate-200 bg-white shadow-sm";


  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Cards
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
                Cards
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <CreditCard className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic Cards */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Basic Cards</h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className={`${uiCard} p-5`}>
                <h3 className="text-base font-semibold text-slate-800">Basic Card</h3>
                <p className="mt-2 text-sm text-slate-500">
                  This is a simple card with title and description content.
                </p>
              </div>

              <div className={`${uiCard} p-5`}>
                <h3 className="text-base font-semibold text-slate-800">Border Card</h3>
                <p className="mt-2 text-sm text-slate-500">
                  ใช้สำหรับแสดงข้อมูลทั่วไปในหน้า dashboard
                </p>
              </div>

              <div className="p-5 border border-blue-200 shadow-sm rounded-2xl bg-blue-50">
                <h3 className="text-base font-semibold text-blue-800">Soft Card</h3>
                <p className="mt-2 text-sm text-blue-700/80">
                  สามารถใช้สีอ่อนเพื่อแยกความสำคัญของ card ได้
                </p>
              </div>
            </div>
          </section>

          {/* Stats Cards */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Stats Cards</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className={`${uiCard} p-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Total Users</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-800">1,248</h3>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 text-blue-600 bg-blue-100 rounded-2xl">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm text-emerald-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12.5%</span>
                  <span className="text-slate-400">from last month</span>
                </div>
              </div>

              <div className={`${uiCard} p-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Revenue</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-800">$24,800</h3>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm text-emerald-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>+8.2%</span>
                  <span className="text-slate-400">from last week</span>
                </div>
              </div>

              <div className={`${uiCard} p-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Orders</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-800">532</h3>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-amber-600">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-rose-500">-2.1% from yesterday</div>
              </div>

              <div className={`${uiCard} p-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Projects</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-800">36</h3>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 text-purple-600 bg-purple-100 rounded-2xl">
                    <CreditCard className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-500">Active project tracking</div>
              </div>
            </div>
          </section>

          {/* Card Header / Body / Footer */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Card Header / Body / Footer
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className={uiCard}>
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-base font-semibold text-slate-800">
                      Team Members
                    </h3>
                    <p className="text-sm text-slate-500">Latest 5 members</p>
                  </div>

                  <button className="p-2 rounded-xl hover:bg-slate-100">
                    <MoreHorizontal className="w-5 h-5 text-slate-500" />
                  </button>
                </div>

                <div className="px-5 py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">John Doe</span>
                    <span className="text-xs text-slate-400">Admin</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Jane Smith</span>
                    <span className="text-xs text-slate-400">Editor</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Michael Lee</span>
                    <span className="text-xs text-slate-400">Viewer</span>
                  </div>
                </div>

                <div className="px-5 py-4 border-t border-slate-200">
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    View All Members
                  </button>
                </div>
              </div>

              <div className={uiCard}>
                <div className="px-5 py-4 border-b border-slate-200">
                  <h3 className="text-base font-semibold text-slate-800">
                    Monthly Performance
                  </h3>
                </div>

                <div className="px-5 py-10 text-sm text-center text-slate-400">
                  Chart / Graph Placeholder
                </div>

                <div className="px-5 py-4 text-sm border-t border-slate-200 text-slate-500">
                  Updated 5 minutes ago
                </div>
              </div>
            </div>
          </section>

          {/* Profile / User Card */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Profile Cards</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className={`${uiCard} p-6 text-center`}>
                <div className="flex items-center justify-center w-20 h-20 mx-auto text-xl font-bold text-blue-600 bg-blue-100 rounded-full">
                  JD
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-800">John Doe</h3>
                <p className="text-sm text-slate-500">Frontend Developer</p>
                <div className="flex justify-center gap-2 mt-5">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl">
                    View Profile
                  </button>
                  <button className="px-4 py-2 text-sm font-medium bg-white border rounded-xl border-slate-200 text-slate-700">
                    Message
                  </button>
                </div>
              </div>

              <div className={`${uiCard} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center font-semibold rounded-full h-14 w-14 bg-emerald-100 text-emerald-600">
                    SM
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-800">
                      Smile Sabai
                    </h3>
                    <p className="text-sm text-slate-500">System Leader</p>
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-sm text-slate-600">
                  <p>Email: smile@example.com</p>
                  <p>Status: Active</p>
                  <p>Location: Thailand</p>
                </div>
              </div>

              <div className="p-6 text-white border shadow-sm rounded-2xl border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700">
                <p className="text-sm text-slate-300">Premium Member</p>
                <h3 className="mt-2 text-xl font-semibold">Business Account</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Access advanced dashboard features and analytics tools.
                </p>
                <button className="px-4 py-2 mt-5 text-sm font-medium bg-white rounded-xl text-slate-800">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </section>

          {/* Action Cards */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Action Cards</h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <button className="p-5 text-left transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-base font-semibold text-slate-800">
                  Create Report
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Generate a new monthly or yearly report.
                </p>
              </button>

              <button className="p-5 text-left transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-base font-semibold text-slate-800">
                  Manage Users
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Add, update, and manage system users.
                </p>
              </button>

              <button className="p-5 text-left transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-base font-semibold text-slate-800">
                  View Analytics
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Explore charts, KPIs, and business performance.
                </p>
              </button>
            </div>
          </section>

          {/* Real World Example */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Real World Dashboard Cards
            </h2>

            <div className="grid grid-cols-1 gap-6 2xl:grid-cols-3">
              <div className={uiCard}>
                <div className="px-5 py-4 border-b border-slate-200">
                  <h3 className="text-base font-semibold text-slate-800">
                    Sales Overview
                  </h3>
                </div>
                <div className="px-5 py-10 text-sm text-center text-slate-400">
                  Chart Placeholder
                </div>
              </div>

              <div className={uiCard}>
                <div className="px-5 py-4 border-b border-slate-200">
                  <h3 className="text-base font-semibold text-slate-800">
                    Recent Orders
                  </h3>
                </div>
                <div className="px-5 py-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">Order #1024</span>
                    <span className="text-emerald-600">Completed</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">Order #1025</span>
                    <span className="text-amber-600">Pending</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">Order #1026</span>
                    <span className="text-rose-600">Cancelled</span>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-blue-200 shadow-sm rounded-2xl bg-blue-50">
                <p className="text-sm text-blue-700">Quick Summary</p>
                <h3 className="mt-2 text-3xl font-bold text-blue-900">$128,430</h3>
                <p className="mt-2 text-sm text-blue-700/80">
                  Total income this month from all active sales channels.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageCards

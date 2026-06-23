import {
  BadgeDollarSign,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
  Clock3,
  Diamond
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import { KpiCard, KpiCardGrid } from "@/pages/GroupUIComponents/Components/KpiCard";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const PageKPICards = () => {
  return (
    <>

      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              KPI Cards
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "KPI Cards", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Diamond className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      

      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic KPI Cards */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic KPI Cards
            </h2>

            <KpiCardGrid>
              <KpiCard
                title="Total Sales"
                value="2,450,000"
                description="ยอดขายรวมประจำเดือน"
                icon={<BadgeDollarSign className="w-6 h-6" />}
                trend="up"
                trendValue="+12.5%"
                footer="เทียบกับเดือนก่อน"
              />

              <KpiCard
                title="New Orders"
                value="1,284"
                description="รายการใหม่ทั้งหมด"
                icon={<ClipboardList className="w-6 h-6" />}
                trend="up"
                trendValue="+8.2%"
                footer="อัปเดตล่าสุดวันนี้"
              />

              <KpiCard
                title="Pending Tasks"
                value="46"
                description="รายการที่รอดำเนินการ"
                icon={<Clock3 className="w-6 h-6" />}
                trend="down"
                trendValue="-4.1%"
                footer="ลดลงจากสัปดาห์ก่อน"
              />

              <KpiCard
                title="Active Users"
                value="3,420"
                description="ผู้ใช้งานที่ active"
                icon={<Users className="w-6 h-6" />}
                trend="neutral"
                trendValue="0.0%"
                footer="คงที่จากช่วงก่อนหน้า"
              />
            </KpiCardGrid>

            <div className="mt-4">
              <div className={contentBox}>
                KPI Cards เหมาะกับหน้า Dashboard ที่ต้องการสรุปตัวเลขสำคัญแบบเร็ว ๆ เช่น ยอดขาย, จำนวนรายการ, งานค้าง, ผู้ใช้งาน
              </div>
            </div>
          </section>

          {/* Financial KPI */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Financial KPI Cards
            </h2>

            <KpiCardGrid columns={3}>
              <KpiCard
                title="Premium Amount"
                value="8,920,500"
                description="เบี้ยประกันรวม"
                icon={<WalletCards className="w-6 h-6" />}
                trend="up"
                trendValue="+18.4%"
                footer="เป้าหมายเดือนนี้ 10,000,000"
              />

              <KpiCard
                title="Commission"
                value="642,300"
                description="รายได้ค่าคอมมิชชั่น"
                icon={<BadgeDollarSign className="w-6 h-6" />}
                trend="up"
                trendValue="+9.7%"
                footer="คำนวณจากรายการสำเร็จ"
              />

              <KpiCard
                title="Success Rate"
                value="86.4%"
                description="อัตราปิดงานสำเร็จ"
                icon={<ShieldCheck className="w-6 h-6" />}
                trend="down"
                trendValue="-2.3%"
                footer="ควรตรวจสอบรายการ fail"
              />
            </KpiCardGrid>
          </section>

          {/* Loading State */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Loading KPI Cards
            </h2>

            <KpiCardGrid columns={3}>
              <KpiCard title="Loading" value="0" loading />
              <KpiCard title="Loading" value="0" loading />
              <KpiCard title="Loading" value="0" loading />
            </KpiCardGrid>
          </section>

          {/* Executive KPI */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Executive Dashboard Example
            </h2>

            <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
              <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-800">
                    Executive Summary
                  </h3>
                  <p className="text-sm text-slate-500">
                    สรุป KPI สำคัญสำหรับผู้บริหารประจำเดือน
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  Export Report
                </button>
              </div>

              <KpiCardGrid>
                <KpiCard
                  title="Target Achievement"
                  value="92.8%"
                  description="ทำได้เทียบกับเป้าหมาย"
                  icon={<TrendingUp className="w-6 h-6" />}
                  trend="up"
                  trendValue="+6.8%"
                />

                <KpiCard
                  title="Total Policies"
                  value="4,812"
                  description="จำนวนกรมธรรม์ทั้งหมด"
                  icon={<ClipboardList className="w-6 h-6" />}
                  trend="up"
                  trendValue="+342"
                />

                <KpiCard
                  title="Branch Performance"
                  value="74%"
                  description="สาขาที่ทำได้ตามเป้า"
                  icon={<ShieldCheck className="w-6 h-6" />}
                  trend="neutral"
                  trendValue="Stable"
                />

                <KpiCard
                  title="Pending Approval"
                  value="128"
                  description="รายการรออนุมัติ"
                  icon={<Clock3 className="w-6 h-6" />}
                  trend="down"
                  trendValue="-16"
                />
              </KpiCardGrid>
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
                  Insurance Dashboard
                </p>

                <KpiCard
                  title="รายการประกันใหม่"
                  value="326"
                  description="รายการใหม่ที่เข้ามาวันนี้"
                  icon={<ClipboardList className="w-6 h-6" />}
                  trend="up"
                  trendValue="+24"
                  footer="เหมาะกับหน้า Admin Dashboard"
                />
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Approval Dashboard
                </p>

                <KpiCard
                  title="รออนุมัติ"
                  value="58"
                  description="เอกสารที่รอตรวจสอบ"
                  icon={<ShieldCheck className="w-6 h-6" />}
                  trend="down"
                  trendValue="-7"
                  footer="เหมาะกับระบบ workflow / approval"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageKPICards;
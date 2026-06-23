import {
  AlertTriangle,
  ClipboardList,
  Clock3,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import {
  StatsCard,
  StatsCardGrid,
  StatsCardPro,
  StatsCardProGrid,
} from "@/pages/GroupUIComponents/Components/StatsCard/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const PageStatsCards = () => {
  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Stats Cards
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Stats Cards", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <WalletCards className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      
  

      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Dashboard Example */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Dashboard Example
            </h2>

            <StatsCardGrid>
              <StatsCard
                title="Users"
                value="3,421"
                subtitle="ผู้ใช้งานทั้งหมด"
                color="blue"
                icon={<Users className="w-5 h-5" />}
              />

              <StatsCard
                title="Orders"
                value="521"
                subtitle="รายการใหม่เดือนนี้"
                color="green"
                icon={<ClipboardList className="w-5 h-5" />}
              />

              <StatsCard
                title="Pending"
                value="24"
                subtitle="รายการรอดำเนินการ"
                color="amber"
                icon={<Clock3 className="w-5 h-5" />}
              />

              <StatsCard
                title="Errors"
                value="3"
                subtitle="รายการผิดพลาด"
                color="red"
                icon={<AlertTriangle className="w-5 h-5" />}
              />
            </StatsCardGrid>

            <div className="mt-4">
              <div className={contentBox}>
                Stats Cards เหมาะกับการแสดงข้อมูลสรุปหลายตัวใน Dashboard เช่น Users, Orders, Pending, Errors
              </div>
            </div>
          </section>

          {/* Insurance Dashboard */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Insurance Dashboard Stats
            </h2>

            <StatsCardGrid>
              <StatsCard
                title="New Policies"
                value="326"
                subtitle="รายการประกันใหม่วันนี้"
                color="blue"
                icon={<ClipboardList className="w-5 h-5" />}
              />

              <StatsCard
                title="Premium"
                value="฿2.45M"
                subtitle="เบี้ยประกันรวม"
                color="green"
                icon={<WalletCards className="w-5 h-5" />}
              />

              <StatsCard
                title="Waiting Approval"
                value="58"
                subtitle="รอเจ้าหน้าที่ตรวจสอบ"
                color="amber"
                icon={<Clock3 className="w-5 h-5" />}
              />

              <StatsCard
                title="Success Rate"
                value="92%"
                subtitle="อัตราทำรายการสำเร็จ"
                color="purple"
                icon={<ShieldCheck className="w-5 h-5" />}
              />
            </StatsCardGrid>
          </section>

          {/* Compact Stats */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Compact Stats
            </h2>

            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              <StatsCard
                title="Today"
                value="120"
                subtitle="รายการวันนี้"
                color="blue"
              />

              <StatsCard
                title="Yesterday"
                value="98"
                subtitle="รายการเมื่อวาน"
                color="slate"
              />

              <StatsCard
                title="Growth"
                value="+22%"
                subtitle="เทียบกับเมื่อวาน"
                color="green"
                icon={<TrendingUp className="w-5 h-5" />}
              />

              <StatsCard
                title="Drop"
                value="-4%"
                subtitle="รายการที่ลดลง"
                color="red"
                icon={<TrendingDown className="w-5 h-5" />}
              />
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
                  Admin Summary
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <StatsCard
                    title="Online"
                    value="284"
                    color="green"
                    icon={<Users className="w-5 h-5" />}
                  />

                  <StatsCard
                    title="Tasks"
                    value="36"
                    color="amber"
                    icon={<Clock3 className="w-5 h-5" />}
                  />
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Report Summary
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <StatsCard
                    title="Reports"
                    value="18"
                    color="blue"
                    icon={<ClipboardList className="w-5 h-5" />}
                  />

                  <StatsCard
                    title="Approved"
                    value="94%"
                    color="purple"
                    icon={<ShieldCheck className="w-5 h-5" />}
                  />
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-center text-slate-600">
                  Stats Card Pro
                </p>

                <div className="max-w-md mx-auto">
                  <StatsCardProGrid columns={1}>
                    <StatsCardPro
                      title="Revenue"
                      value="฿2.45M"
                      subtitle="รายได้รวมเดือนนี้"
                      icon={<WalletCards className="w-6 h-6" />}
                      trend="up"
                      trendValue="+18.2%"
                      comparison="เทียบกับเดือนก่อน"
                      progress={82}
                      target="Target ฿3M"
                      sparkline={[20, 40, 35, 60, 80, 76, 100]}
                      color="green"
                    />
                  </StatsCardProGrid>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageStatsCards;
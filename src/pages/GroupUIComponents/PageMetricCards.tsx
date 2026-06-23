import {
  BadgeDollarSign,
  Clock3,
  ClipboardList,
  Gauge,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
  Activity,
  Box
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import {
  MetricCard,
  MetricCardGrid,
  MetricCardList,
} from "@/pages/GroupUIComponents/Components/MetricCards/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const PageMetricCards = () => {
  return (
    <>

      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Metric Cards
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Metric Cards", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Box className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>


      <div className="w-full pb-2">
        <div className="space-y-5">
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Metric Cards
            </h2>

            <MetricCardGrid>
              <MetricCard
                label="Conversion Rate"
                value="18.4"
                unit="%"
                description="อัตราการเปลี่ยนจากผู้เข้าชมเป็นรายการสำเร็จ"
                icon={<TrendingUp className="w-5 h-5" />}
                trend="up"
                trendValue="+2.1%"
                color="green"
              />

              <MetricCard
                label="Average Response"
                value="428"
                unit="ms"
                description="ค่าเฉลี่ยเวลาตอบกลับของ API"
                icon={<Gauge className="w-5 h-5" />}
                trend="down"
                trendValue="-18ms"
                color="blue"
              />

              <MetricCard
                label="Success Rate"
                value="92.8"
                unit="%"
                description="เปอร์เซ็นต์รายการที่ดำเนินการสำเร็จ"
                icon={<ShieldCheck className="w-5 h-5" />}
                trend="up"
                trendValue="+4.6%"
                color="purple"
              />

              <MetricCard
                label="Pending SLA"
                value="24"
                unit="items"
                description="จำนวนรายการที่ใกล้เกิน SLA"
                icon={<Clock3 className="w-5 h-5" />}
                trend="neutral"
                trendValue="stable"
                color="amber"
              />
            </MetricCardGrid>

            <div className="mt-4">
              <div className={contentBox}>
                Metric Cards ใช้กับค่าชี้วัดเฉพาะ เช่น conversion rate, response time, success rate, SLA, API latency หรือ quality score
              </div>
            </div>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Business Metrics
            </h2>

            <MetricCardGrid columns={3}>
              <MetricCard
                label="Premium per Policy"
                value="18,520"
                unit="บาท"
                description="ค่าเบี้ยเฉลี่ยต่อกรมธรรม์"
                icon={<WalletCards className="w-5 h-5" />}
                trend="up"
                trendValue="+8.2%"
                color="green"
                footer="คำนวณจากรายการที่ออกกรมธรรม์สำเร็จ"
              />

              <MetricCard
                label="Commission Ratio"
                value="7.4"
                unit="%"
                description="อัตราค่าคอมมิชชั่นเทียบกับเบี้ยประกัน"
                icon={<BadgeDollarSign className="w-5 h-5" />}
                trend="neutral"
                trendValue="0.0%"
                color="blue"
                footer="ช่วงเป้าหมาย 7% - 9%"
              />

              <MetricCard
                label="Approval Time"
                value="1.8"
                unit="hrs"
                description="เวลาเฉลี่ยที่ใช้อนุมัติรายการ"
                icon={<Clock3 className="w-5 h-5" />}
                trend="down"
                trendValue="-0.4 hrs"
                color="purple"
                footer="เวลาน้อยลงถือว่าดีขึ้น"
              />
            </MetricCardGrid>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Compact Metric Cards
            </h2>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              <MetricCardList
                title="System Health"
                description="ค่าชี้วัดด้านระบบและ performance"
              >
                <MetricCard
                  compact
                  label="API Uptime"
                  value="99.98"
                  unit="%"
                  icon={<Activity className="w-5 h-5" />}
                  trend="up"
                  trendValue="+0.02%"
                  color="green"
                />

                <MetricCard
                  compact
                  label="Error Rate"
                  value="0.12"
                  unit="%"
                  icon={<Gauge className="w-5 h-5" />}
                  trend="down"
                  trendValue="-0.08%"
                  color="red"
                />

                <MetricCard
                  compact
                  label="Queue Waiting"
                  value="14"
                  unit="jobs"
                  icon={<Clock3 className="w-5 h-5" />}
                  color="amber"
                />
              </MetricCardList>

              <MetricCardList
                title="Operations Metrics"
                description="ค่าชี้วัดด้าน operation"
              >
                <MetricCard
                  compact
                  label="New Requests"
                  value="326"
                  unit="items"
                  icon={<ClipboardList className="w-5 h-5" />}
                  trend="up"
                  trendValue="+24"
                  color="blue"
                />

                <MetricCard
                  compact
                  label="Active Staff"
                  value="2,840"
                  unit="users"
                  icon={<Users className="w-5 h-5" />}
                  trend="neutral"
                  trendValue="stable"
                  color="purple"
                />

                <MetricCard
                  compact
                  label="Completed Today"
                  value="1,128"
                  unit="items"
                  icon={<ShieldCheck className="w-5 h-5" />}
                  trend="up"
                  trendValue="+12%"
                  color="green"
                />
              </MetricCardList>
            </div>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Loading Metrics
            </h2>

            <MetricCardGrid columns={3}>
              <MetricCard label="Loading" value="0" loading />
              <MetricCard label="Loading" value="0" loading />
              <MetricCard label="Loading" value="0" loading />
            </MetricCardGrid>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Executive Metric Dashboard
            </h2>

            <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
              <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-800">
                    Executive Metrics
                  </h3>
                  <p className="text-sm text-slate-500">
                    ค่าชี้วัดสำหรับผู้บริหารที่ใช้ดูคุณภาพและประสิทธิภาพของระบบ
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  Export Metrics
                </button>
              </div>

              <MetricCardGrid columns={4}>
                <MetricCard
                  label="Target Achievement"
                  value="92.8"
                  unit="%"
                  icon={<TrendingUp className="w-5 h-5" />}
                  trend="up"
                  trendValue="+6.4%"
                  color="green"
                />

                <MetricCard
                  label="Policy Quality"
                  value="96.2"
                  unit="%"
                  icon={<ShieldCheck className="w-5 h-5" />}
                  trend="up"
                  trendValue="+1.8%"
                  color="purple"
                />

                <MetricCard
                  label="Avg Processing"
                  value="3.4"
                  unit="min"
                  icon={<Clock3 className="w-5 h-5" />}
                  trend="down"
                  trendValue="-22s"
                  color="blue"
                />

                <MetricCard
                  label="Branch Coverage"
                  value="74"
                  unit="%"
                  icon={<Users className="w-5 h-5" />}
                  trend="neutral"
                  trendValue="stable"
                  color="amber"
                />
              </MetricCardGrid>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageMetricCards;
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

import {
  CalendarDays,
  Download,
  Filter,
  ChartColumn 
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import { ChartCard } from "@/pages/GroupUIComponents/Components/ChartsWrapper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        boxHeight: 8,
      },
    },
    tooltip: {
      backgroundColor: "rgba(15, 23, 42, 0.92)",
      padding: 12,
      cornerRadius: 12,
    },
  },
};

const PageChartsWrapper = () => {
  const monthlySalesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Premium",
        data: [1200000, 1450000, 1380000, 1780000, 2100000, 2450000, 2680000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.12)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Target",
        data: [1500000, 1500000, 1600000, 1800000, 2000000, 2300000, 2500000],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.08)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const branchBarData = {
    labels: ["Uttaradit", "Phrae", "Nan", "Sukhothai", "Phitsanulok"],
    datasets: [
      {
        label: "Premium",
        data: [2450000, 1980000, 1740000, 1520000, 1320000],
        backgroundColor: "#3b82f6",
        borderRadius: 10,
      },
    ],
  };

  const productPieData = {
    labels: ["Motor", "Fire", "PA", "Health", "Other"],
    datasets: [
      {
        label: "Policies",
        data: [42, 18, 16, 14, 10],
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
          "#64748b",
        ],
        borderWidth: 0,
      },
    ],
  };

  const horizontalBarData = {
    labels: [
      "Branch A",
      "Branch B",
      "Branch C",
      "Branch D",
      "Branch E",
      "Branch F",
    ],
    datasets: [
      {
        label: "Success Rate",
        data: [96, 92, 88, 84, 79, 72],
        backgroundColor: "#10b981",
        borderRadius: 10,
      },
    ],
  };

  return (
    <>

      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Charts Wrapper
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Charts Wrapper", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <ChartColumn className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>

      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Line Chart */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Line Chart Wrapper
            </h2>

            <ChartCard
              title="Monthly Premium Trend"
              description="แนวโน้มเบี้ยประกันรายเดือน เทียบกับเป้าหมาย"
              badge={
                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                  2026
                </span>
              }
              actions={
                <>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition bg-white border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    <CalendarDays className="w-4 h-4" />
                    ปี 2026
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition bg-blue-500 rounded-xl hover:bg-blue-600"
                  >
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </>
              }
            >
              <Line data={monthlySalesData} options={commonOptions} />
            </ChartCard>

            <div className="mt-4">
              <div className={contentBox}>
                ใช้กับข้อมูลแนวโน้ม เช่น ยอดขายรายเดือน, เป้าหมาย, รายได้ หรือข้อมูลที่ต้องดูการเปลี่ยนแปลงตามเวลา
              </div>
            </div>
          </section>

          {/* Dashboard Grid */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Dashboard Chart Grid
            </h2>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              <ChartCard
                title="Top Branch Premium"
                description="สาขาที่มียอดเบี้ยประกันสูงสุด"
              >
                <Bar data={branchBarData} options={commonOptions} />
              </ChartCard>

              <ChartCard
                title="Product Mix"
                description="สัดส่วนประเภทประกันภัย"
                heightClass="h-80"
              >
                <Doughnut data={productPieData} options={commonOptions} />
              </ChartCard>
            </div>
          </section>

          {/* Horizontal Bar */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Horizontal Bar Chart
            </h2>

            <ChartCard
              title="Branch Success Rate"
              description="อัตราทำรายการสำเร็จแยกตามสาขา"
              actions={
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition bg-white border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              }
            >
              <Bar
                data={horizontalBarData}
                options={{
                  ...commonOptions,
                  indexAxis: "y" as const,
                  scales: {
                    x: {
                      max: 100,
                      ticks: {
                        callback: (value) => `${value}%`,
                      },
                    },
                  },
                }}
              />
            </ChartCard>
          </section>

          {/* Loading / Empty */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Loading / Empty Chart States
            </h2>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              <ChartCard
                title="Loading Chart"
                description="ใช้ระหว่างรอ API ส่งข้อมูลกลับมา"
                loading
              >
                <div />
              </ChartCard>

              <ChartCard
                title="Empty Chart"
                description="ใช้เมื่อไม่มีข้อมูลสำหรับแสดงผล"
                empty
              >
                <div />
              </ChartCard>
            </div>
          </section>

          {/* Executive Example */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Executive Dashboard Example
            </h2>

            <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
              <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-800">
                    Executive Chart Summary
                  </h3>
                  <p className="text-sm text-slate-500">
                    รวมกราฟสำคัญสำหรับผู้บริหาร
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  Export Dashboard
                </button>
              </div>

              <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.4fr_1fr]">
                <ChartCard
                  title="Premium vs Target"
                  description="เทียบยอดจริงกับเป้าหมายรายเดือน"
                  heightClass="h-96"
                >
                  <Line data={monthlySalesData} options={commonOptions} />
                </ChartCard>

                <ChartCard
                  title="Product Share"
                  description="สัดส่วนยอดขายตามประเภทประกัน"
                  heightClass="h-96"
                >
                  <Doughnut data={productPieData} options={commonOptions} />
                </ChartCard>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageChartsWrapper;
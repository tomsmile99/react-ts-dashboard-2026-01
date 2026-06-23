import {
  BadgeDollarSign,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Upload,
  Users,
  WalletCards,
  AlertTriangle,
  BatteryMedium
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import {
  ProgressBar,
  CircularProgress,
  ProgressGroup,
} from "@/pages/GroupUIComponents/Components/ProgressBar";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const PageProgressBar = () => {
  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Progress Bar
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
            <BatteryMedium className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>



      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic Progress */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Progress Bars
            </h2>

            <div className="space-y-5">
              <ProgressBar
                label="Monthly Target"
                value={72}
                description="ความคืบหน้าของเป้าหมายประจำเดือน"
                helperText="เป้าหมายรวม 3,000,000 บาท"
                icon={<BadgeDollarSign className="w-4 h-4" />}
              />

              <ProgressBar
                label="Approval Progress"
                value={45}
                color="amber"
                description="รายการที่ผ่านขั้นตอนอนุมัติแล้ว"
                icon={<ShieldCheck className="w-4 h-4" />}
              />

              <ProgressBar
                label="Completed Tasks"
                value={92}
                status="success"
                description="งานที่ดำเนินการเสร็จแล้ว"
                icon={<CheckCircle2 className="w-4 h-4" />}
              />
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                Progress Bar ใช้แสดงความคืบหน้า เช่น เป้าหมายยอดขาย, การอัปโหลดไฟล์, Workflow หรือสถานะงาน
              </div>
            </div>
          </section>

          {/* Status Progress */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Status Progress Bars
            </h2>

            <ProgressGroup
              title="Workflow Status"
              description="ตัวอย่าง progress ตามสถานะการทำงาน"
            >
              <ProgressBar
                label="Processing"
                value={64}
                status="processing"
                striped
                animated
                helperText="ระบบกำลังประมวลผลข้อมูล"
                icon={<Clock3 className="w-4 h-4" />}
              />

              <ProgressBar
                label="Success"
                value={100}
                status="success"
                helperText="ดำเนินการสำเร็จครบถ้วน"
              />

              <ProgressBar
                label="Warning"
                value={58}
                status="warning"
                helperText="มีบางรายการที่ควรตรวจสอบ"
              />

              <ProgressBar
                label="Danger"
                value={28}
                status="danger"
                helperText="รายการล้มเหลวหรือผิดพลาดสูง"
              />
            </ProgressGroup>
          </section>

          {/* Sizes */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Progress Sizes
            </h2>

            <div className="space-y-5">
              <ProgressBar
                label="Small Progress"
                value={36}
                size="sm"
                showStatusIcon={false}
              />

              <ProgressBar
                label="Medium Progress"
                value={68}
                size="md"
                showStatusIcon={false}
              />

              <ProgressBar
                label="Large Progress"
                value={84}
                size="lg"
                showStatusIcon={false}
              />
            </div>
          </section>

          {/* Circular Progress */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Circular Progress
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="p-5 text-center border rounded-2xl border-slate-200 bg-slate-50">
                <CircularProgress
                  value={82}
                  color="green"
                  label="Revenue Target"
                />
              </div>

              <div className="p-5 text-center border rounded-2xl border-slate-200 bg-slate-50">
                <CircularProgress
                  value={64}
                  color="blue"
                  label="Task Progress"
                />
              </div>

              <div className="p-5 text-center border rounded-2xl border-slate-200 bg-slate-50">
                <CircularProgress
                  value={38}
                  color="amber"
                  label="Review Status"
                />
              </div>

              <div className="p-5 text-center border rounded-2xl border-slate-200 bg-slate-50">
                <CircularProgress
                  value={18}
                  color="red"
                  label="Failed Items"
                />
              </div>
            </div>
          </section>

          {/* Upload Progress */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Upload Progress Example
            </h2>

            <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-blue-600 bg-blue-100 rounded-2xl">
                  <Upload className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-800">
                    Uploading report_file.pdf
                  </h3>
                  <p className="text-sm text-slate-500">
                    กรุณารอสักครู่ ระบบกำลังอัปโหลดไฟล์
                  </p>
                </div>
              </div>

              <ProgressBar
                value={76}
                status="processing"
                striped
                animated
                helperText="76% completed • 12 MB of 16 MB"
                showStatusIcon={false}
              />
            </div>
          </section>

          {/* Dashboard Goal Tracking */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Dashboard Goal Tracking
            </h2>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              <ProgressGroup
                title="Insurance Monthly Target"
                description="เป้าหมายยอดขายประกันภัยประจำเดือน"
              >
                <ProgressBar
                  label="Premium Amount"
                  value={82}
                  status="success"
                  helperText="ทำได้ 8.2M จากเป้าหมาย 10M"
                  icon={<WalletCards className="w-4 h-4" />}
                />

                <ProgressBar
                  label="Policies Count"
                  value={68}
                  color="blue"
                  helperText="ออกกรมธรรม์แล้ว 680 จาก 1,000 รายการ"
                  icon={<ShieldCheck className="w-4 h-4" />}
                />

                <ProgressBar
                  label="Commission"
                  value={74}
                  color="purple"
                  helperText="ค่าคอมมิชชั่นสะสม 740K จากเป้าหมาย 1M"
                  icon={<BadgeDollarSign className="w-4 h-4" />}
                />
              </ProgressGroup>

              <ProgressGroup
                title="Team Performance"
                description="ประสิทธิภาพการทำงานของทีม"
              >
                <ProgressBar
                  label="Active Users"
                  value={91}
                  status="success"
                  helperText="พนักงานใช้งานระบบต่อเนื่อง"
                  icon={<Users className="w-4 h-4" />}
                />

                <ProgressBar
                  label="Pending Review"
                  value={44}
                  status="warning"
                  helperText="ยังมีรายการรอตรวจสอบ"
                  icon={<Clock3 className="w-4 h-4" />}
                />

                <ProgressBar
                  label="Failed Transactions"
                  value={12}
                  status="danger"
                  helperText="ควรตรวจสอบรายการผิดพลาด"
                  icon={<AlertTriangle className="w-4 h-4" />}
                />
              </ProgressGroup>
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
                  Executive KPI Progress
                </p>

                <div className="p-4 bg-white border rounded-2xl border-slate-200">
                  <ProgressBar
                    label="Target Achievement"
                    value={92}
                    status="success"
                    description="ทำได้เทียบกับเป้าหมายผู้บริหาร"
                    helperText="ยอดขายรวม 9.2M / 10M"
                  />
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Approval Workflow
                </p>

                <div className="p-4 bg-white border rounded-2xl border-slate-200">
                  <ProgressBar
                    label="Document Approval"
                    value={55}
                    status="processing"
                    striped
                    animated
                    description="เอกสารอยู่ระหว่างการอนุมัติ"
                    helperText="ผ่านแล้ว 2 จาก 4 ขั้นตอน"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageProgressBar;
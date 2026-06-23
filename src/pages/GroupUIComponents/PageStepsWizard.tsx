import { useState } from "react";
import {
  User,
  Building2,
  ShieldCheck,
  FileCheck2,
  CreditCard,
  Truck,
  PackageCheck,
  WandSparkles
} from "lucide-react";


import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import {
  Steps,
  Wizard,
  type StepItem,
} from "@/pages/GroupUIComponents/Components/Steps/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const basicSteps: StepItem[] = [
  {
    title: "Account",
    description: "ข้อมูลบัญชี",
    icon: <User className="w-5 h-5" />,
  },
  {
    title: "Company",
    description: "ข้อมูลองค์กร",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Permission",
    description: "สิทธิ์การใช้งาน",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Review",
    description: "ตรวจสอบข้อมูล",
    icon: <FileCheck2 className="w-5 h-5" />,
  },
];

const orderSteps: StepItem[] = [
  {
    title: "Cart",
    description: "ตรวจสอบสินค้า",
    icon: <PackageCheck className="w-5 h-5" />,
  },
  {
    title: "Payment",
    description: "ชำระเงิน",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    title: "Shipping",
    description: "จัดส่งสินค้า",
    icon: <Truck className="w-5 h-5" />,
  },
  {
    title: "Complete",
    description: "เสร็จสิ้น",
    icon: <FileCheck2 className="w-5 h-5" />,
  },
];

const PageStepsWizard = () => {
  const [basicStep, setBasicStep] = useState(1);
  const [verticalStep, setVerticalStep] = useState(2);
  const [wizardStep, setWizardStep] = useState(0);
  const [approvalStep, setApprovalStep] = useState(1);

  const goNextWizard = () => {
    setWizardStep((prev) => Math.min(prev + 1, basicSteps.length - 1));
  };

  const goPrevWizard = () => {
    setWizardStep((prev) => Math.max(prev - 1, 0));
  };

  const renderWizardContent = () => {
    if (wizardStep === 0) {
      return (
        <div>
          <h3 className="text-base font-semibold text-slate-800">
            Account Information
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            กรอกข้อมูลบัญชีผู้ใช้งาน เช่น ชื่อ อีเมล และรหัสพนักงาน
          </p>

          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <input
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-400"
              placeholder="Full name"
            />
            <input
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-400"
              placeholder="Email"
            />
          </div>
        </div>
      );
    }

    if (wizardStep === 1) {
      return (
        <div>
          <h3 className="text-base font-semibold text-slate-800">
            Company Information
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            เลือกหน่วยงาน ตำแหน่ง และข้อมูลที่เกี่ยวข้องกับองค์กร
          </p>

          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <select className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-400">
              <option>IT Department</option>
              <option>Finance Department</option>
              <option>HR Department</option>
            </select>
            <input
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-400"
              placeholder="Position"
            />
          </div>
        </div>
      );
    }

    if (wizardStep === 2) {
      return (
        <div>
          <h3 className="text-base font-semibold text-slate-800">
            Permission Settings
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            กำหนด role และ permission สำหรับผู้ใช้งาน
          </p>

          <div className="mt-4 space-y-3">
            {["View Dashboard", "Manage Users", "Export Reports"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 px-4 py-3 text-sm bg-white border rounded-xl border-slate-200 text-slate-700"
              >
                <input type="checkbox" className="w-4 h-4" />
                {item}
              </label>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3 className="text-base font-semibold text-slate-800">
          Review & Confirm
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          ตรวจสอบข้อมูลทั้งหมดก่อนบันทึกเข้าสู่ระบบ
        </p>

        <div className="p-4 mt-4 text-sm bg-white border rounded-xl border-slate-200 text-slate-600">
          ข้อมูลตัวอย่างสำหรับ review ก่อน submit จริง
        </div>
      </div>
    );
  };

  const approvalSteps: StepItem[] = [
    {
      title: "Created",
      description: "สร้างรายการแล้ว",
      status: "completed",
    },
    {
      title: "Waiting Approve",
      description: "รอผู้จัดการอนุมัติ",
      status: approvalStep === 1 ? "current" : "completed",
    },
    {
      title: "Finance Check",
      description: "ตรวจสอบโดยฝ่ายการเงิน",
      status:
        approvalStep === 2
          ? "current"
          : approvalStep > 2
          ? "completed"
          : "upcoming",
    },
    {
      title: "Completed",
      description: "ดำเนินการเสร็จสิ้น",
      status: approvalStep === 3 ? "current" : "upcoming",
    },
  ];

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Steps / Wizard
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Steps Wizard", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <WandSparkles className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>


      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic Horizontal */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Horizontal Steps
            </h2>

            <Steps
              steps={basicSteps}
              currentStep={basicStep}
              onStepClick={setBasicStep}
            />

            <div className="flex flex-wrap gap-2 mt-5">
              <button
                type="button"
                onClick={() => setBasicStep((prev) => Math.max(prev - 1, 0))}
                className="px-4 py-2 text-sm font-medium border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() =>
                  setBasicStep((prev) => Math.min(prev + 1, basicSteps.length - 1))
                }
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl hover:bg-blue-600"
              >
                Next
              </button>
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                Horizontal steps เหมาะกับ multi-step form, onboarding และขั้นตอนที่ไม่เยอะเกินไป
              </div>
            </div>
          </section>

          {/* Vertical */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Vertical Steps
            </h2>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[320px_1fr]">
              <Steps
                steps={orderSteps}
                currentStep={verticalStep}
                orientation="vertical"
                onStepClick={setVerticalStep}
              />

              <div className="p-5 border rounded-2xl border-slate-200 bg-slate-50">
                <h3 className="text-base font-semibold text-slate-800">
                  Current Step: {orderSteps[verticalStep].title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Vertical steps เหมาะกับ workflow ที่ต้องแสดงรายละเอียดด้านข้าง
                  เช่น checkout, approval หรือ process tracking
                </p>
              </div>
            </div>
          </section>

          {/* Wizard */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Wizard Form
            </h2>

            <Wizard
              steps={basicSteps}
              currentStep={wizardStep}
              onNext={goNextWizard}
              onPrev={goPrevWizard}
              onStepClick={setWizardStep}
              onFinish={() => alert("บันทึกข้อมูลเรียบร้อย")}
              nextText="ถัดไป"
              prevText="ย้อนกลับ"
              finishText="บันทึกข้อมูล"
            >
              {renderWizardContent()}
            </Wizard>
          </section>

          {/* Approval Flow */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Approval Flow Steps
            </h2>

            <Steps
              steps={approvalSteps}
              currentStep={approvalStep}
              orientation="vertical"
            />

            <div className="flex flex-wrap gap-2 mt-5">
              <button
                type="button"
                onClick={() => setApprovalStep((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 text-sm font-medium border rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                Previous Status
              </button>

              <button
                type="button"
                onClick={() => setApprovalStep((prev) => Math.min(prev + 1, 3))}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl hover:bg-blue-600"
              >
                Next Status
              </button>
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                เหมาะกับระบบอนุมัติ เช่น ใบขอซื้อ, เอกสารการเงิน, ประกันภัย หรือ workflow ภายในองค์กร
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
                  User Registration Wizard
                </p>

                <div className="p-4 bg-white border rounded-xl border-slate-200">
                  <Steps steps={basicSteps} currentStep={2} />
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Order Process
                </p>

                <div className="p-4 bg-white border rounded-xl border-slate-200">
                  <Steps steps={orderSteps} currentStep={1} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageStepsWizard;
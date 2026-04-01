import { useState } from "react";
import { ChevronDown, Rows3 } from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

  
const PageAccordion = () => {

  const [openBasic, setOpenBasic] = useState<number | null>(0);
  const [openSoft, setOpenSoft] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const basicItems = [
    {
      title: "What is an accordion component?",
      content:
        "Accordion คือ component ที่ใช้ยุบและขยายเนื้อหาเป็น section ช่วยให้หน้าไม่ยาวเกินไปและอ่านง่ายขึ้น",
    },
    {
      title: "When should I use accordion?",
      content:
        "เหมาะกับ FAQ, filter panel, settings, collapsible cards และข้อมูลที่ไม่จำเป็นต้องแสดงทั้งหมดพร้อมกัน",
    },
    {
      title: "Can I use accordion in admin dashboard?",
      content:
        "ได้แน่นอน และใช้บ่อยมาก โดยเฉพาะกับเมนูตั้งค่าและ advanced options",
    },
  ];

  const softItems = [
    {
      title: "User Management Settings",
      content: "ใช้จัดกลุ่มการตั้งค่าเกี่ยวกับ users, roles และ permissions",
    },
    {
      title: "Notification Preferences",
      content: "ใช้กำหนด email alerts, push notifications และ activity summaries",
    },
    {
      title: "System Appearance",
      content: "ใช้กำหนด theme, colors และ layout preferences ของระบบ",
    },
  ];

  const faqItems = [
    {
      title: "How do I reset my password?",
      content:
        "ไปที่หน้าโปรไฟล์ผู้ใช้ จากนั้นเลือกเมนู Security และกดปุ่ม Reset Password เพื่อเปลี่ยนรหัสผ่าน",
    },
    {
      title: "How can I add a new user to the system?",
      content:
        "ไปที่หน้า Users แล้วกดปุ่ม Add User จากนั้นกรอกข้อมูลที่จำเป็นและบันทึก",
    },
    {
      title: "Why can’t I access some menus?",
      content:
        "เมนูบางรายการถูกกำหนดตามสิทธิ์ของผู้ใช้งาน กรุณาตรวจสอบ role หรือ permissions ของบัญชีคุณ",
    },
  ];

  const renderAccordion = (
    items: { title: string; content: string }[],
    openIndex: number | null,
    setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>,
    variant: "basic" | "soft" = "basic"
  ) => {
    return (
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border ${
                variant === "soft"
                  ? "border-blue-100 bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex items-center justify-between w-full px-4 py-4 text-left"
              >
                <span
                  className={`text-sm font-semibold ${
                    variant === "soft" ? "text-blue-800" : "text-slate-800"
                  }`}
                >
                  {item.title}
                </span>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  } ${variant === "soft" ? "text-blue-600" : "text-slate-500"}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`border-t px-4 py-4 text-sm ${
                      variant === "soft"
                        ? "border-blue-100 text-blue-700"
                        : "border-slate-200 text-slate-600"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Accordion
            </span>
            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Accordion", current: true },
                ]}
              />
            </div>
            {/* <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <span className="cursor-pointer hover:text-blue-500">
                ระบบบริหารจัดการข้อมูล
              </span>
              <span className="mx-2">•</span>
              <span className="cursor-pointer">
                UI Components
              </span>
              <span className="mx-2">•</span>
              <span className="text-gray-700">
                Accordion
              </span>
            </div> */}
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Rows3 className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic Accordion */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Accordion
            </h2>

            {renderAccordion(basicItems, openBasic, setOpenBasic, "basic")}
          </section>

          {/* Soft Accordion */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Soft Accordion
            </h2>

            {renderAccordion(softItems, openSoft, setOpenSoft, "soft")}
          </section>

          {/* Compact Accordion */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Compact Accordion
            </h2>

            <div className="space-y-2">
              {["General Settings", "Security Options", "Advanced Configurations"].map(
                (title, index) => (
                  <div
                    key={index}
                    className="overflow-hidden bg-white border rounded-xl border-slate-200"
                  >
                    <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-slate-700">
                      <span>{title}</span>
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    </button>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Accordion Inside Card */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Accordion Inside Card
            </h2>

            <div className="overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-200">
              <div className="px-5 py-4 border-b border-slate-200">
                <h3 className="text-base font-semibold text-slate-800">
                  Project Information
                </h3>
              </div>

              <div className="space-y-0">
                {["Project Details", "Team Members", "Recent Updates"].map(
                  (title, index) => (
                    <div key={index} className="border-b border-slate-200 last:border-b-0">
                      <button className="flex items-center justify-between w-full px-5 py-4 text-left">
                        <span className="text-sm font-medium text-slate-700">
                          {title}
                        </span>
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              FAQ Accordion
            </h2>

            {renderAccordion(faqItems, openFaq, setOpenFaq, "basic")}
          </section>

          {/* Real World Examples */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Real World Examples
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {/* Settings Panel */}
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Settings Panel
                </p>

                <div className="space-y-3">
                  {["Profile Settings", "Notification Settings", "Privacy Settings"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="overflow-hidden bg-white border rounded-xl border-slate-200"
                      >
                        <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-slate-700">
                          <span>{item}</span>
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Filter Panel */}
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Advanced Filters
                </p>

                <div className="space-y-3">
                  {["Date Range", "User Status", "Department", "Permissions"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="overflow-hidden bg-white border rounded-xl border-slate-200"
                      >
                        <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-slate-700">
                          <span>{item}</span>
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageAccordion

import { useState } from "react";
import { FolderKanban } from "lucide-react";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

  
const PageTabs = () => {

  const [basicTab, setBasicTab] = useState("overview");
  const [underlineTab, setUnderlineTab] = useState("profile");
  const [pillTab, setPillTab] = useState("monthly");
  const [cardTab, setCardTab] = useState("team");

  const basicTabs = [
    { key: "overview", label: "Overview" },
    { key: "analytics", label: "Analytics" },
    { key: "reports", label: "Reports" },
  ];

  const underlineTabs = [
    { key: "profile", label: "Profile" },
    { key: "security", label: "Security" },
    { key: "billing", label: "Billing" },
  ];

  const pillTabs = [
    { key: "daily", label: "Daily" },
    { key: "weekly", label: "Weekly" },
    { key: "monthly", label: "Monthly" },
    { key: "yearly", label: "Yearly" },
  ];

  const cardTabs = [
    { key: "team", label: "Team Members" },
    { key: "activity", label: "Recent Activity" },
    { key: "notes", label: "Notes" },
  ];

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Tabs
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
                Tabs
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <FolderKanban className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic Tabs */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Basic Tabs</h2>

            <div className="flex flex-wrap gap-2">
              {basicTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setBasicTab(tab.key)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    basicTab === tab.key
                      ? "bg-blue-500 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              {basicTab === "overview" && (
                <div className={contentBox}>
                  Overview content: สรุปภาพรวมของ dashboard หรือระบบ
                </div>
              )}
              {basicTab === "analytics" && (
                <div className={contentBox}>
                  Analytics content: ใช้แสดง chart, KPI, หรือข้อมูลเชิงวิเคราะห์
                </div>
              )}
              {basicTab === "reports" && (
                <div className={contentBox}>
                  Reports content: ใช้สำหรับรายงานรายวัน รายเดือน หรือรายปี
                </div>
              )}
            </div>
          </section>

          {/* Underline Tabs */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Underline Tabs</h2>

            <div className="flex flex-wrap gap-6 border-b border-slate-200">
              {underlineTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setUnderlineTab(tab.key)}
                  className={`border-b-2 pb-3 text-sm font-medium transition ${
                    underlineTab === tab.key
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              {underlineTab === "profile" && (
                <div className={contentBox}>
                  Profile settings เช่น ชื่อ, อีเมล, รูปโปรไฟล์
                </div>
              )}
              {underlineTab === "security" && (
                <div className={contentBox}>
                  Security settings เช่น รหัสผ่าน, 2FA, อุปกรณ์ที่เข้าสู่ระบบ
                </div>
              )}
              {underlineTab === "billing" && (
                <div className={contentBox}>
                  Billing settings เช่น แพ็กเกจ, ประวัติการชำระเงิน, ใบแจ้งหนี้
                </div>
              )}
            </div>
          </section>

          {/* Pill Tabs */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Pill Tabs</h2>

            <div className="inline-flex flex-wrap gap-2 p-1 rounded-2xl bg-slate-100">
              {pillTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setPillTab(tab.key)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    pillTab === tab.key
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                ข้อมูลปัจจุบัน: <span className="font-semibold text-slate-800">{pillTab}</span>
              </div>
            </div>
          </section>

          {/* Tabs Inside Card */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Tabs Inside Card</h2>

            <div className="overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-200">
              <div className="flex flex-wrap gap-2 px-4 py-3 border-b border-slate-200">
                {cardTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setCardTab(tab.key)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      cardTab === tab.key
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4">
                {cardTab === "team" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50">
                      <span className="text-sm text-slate-700">John Doe</span>
                      <span className="text-xs text-slate-400">Admin</span>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50">
                      <span className="text-sm text-slate-700">Jane Smith</span>
                      <span className="text-xs text-slate-400">Editor</span>
                    </div>
                  </div>
                )}

                {cardTab === "activity" && (
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="px-4 py-3 rounded-xl bg-slate-50">
                      User John Doe logged in at 09:30 AM
                    </div>
                    <div className="px-4 py-3 rounded-xl bg-slate-50">
                      New report generated successfully
                    </div>
                  </div>
                )}

                {cardTab === "notes" && (
                  <div className={contentBox}>
                    Notes tab: ใช้เก็บบันทึกหรือรายละเอียดเพิ่มเติมใน card
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Vertical Tabs */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Vertical Tabs</h2>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr]">
              <div className="space-y-2">
                {["General", "Notifications", "Appearance", "Advanced"].map((item, index) => (
                  <button
                    key={item}
                    className={`flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                      index === 0
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className={contentBox}>
                Vertical tabs เหมาะกับหน้า settings หรือหน้าที่มีหมวดย่อยเยอะ
              </div>
            </div>
          </section>

          {/* Real World Examples */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Real World Examples</h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">User Profile Tabs</p>

                <div className="flex gap-2 pb-3 border-b border-slate-200">
                  <button className="px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-lg">
                    Profile
                  </button>
                  <button className="px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-100">
                    Activity
                  </button>
                  <button className="px-3 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-100">
                    Permissions
                  </button>
                </div>

                <div className="px-4 py-4 mt-4 text-sm bg-white border rounded-xl text-slate-600 border-slate-200">
                  ข้อมูล profile ของผู้ใช้งาน เช่น ชื่อ, อีเมล, ตำแหน่ง, สถานะ
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">Report Tabs</p>

                <div className="inline-flex gap-2 p-1 bg-white border rounded-2xl border-slate-200">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl">
                    Monthly
                  </button>
                  <button className="px-4 py-2 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-100">
                    Quarterly
                  </button>
                  <button className="px-4 py-2 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-100">
                    Yearly
                  </button>
                </div>

                <div className="px-4 py-4 mt-4 text-sm bg-white border rounded-xl text-slate-600 border-slate-200">
                  แสดงข้อมูลรายงานตามช่วงเวลาที่เลือก
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PageTabs

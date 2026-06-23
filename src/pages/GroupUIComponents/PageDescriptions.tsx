import {
  BadgeCheck,
  Building2,
  CalendarDays,
  CreditCard,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
  Pill
} from "lucide-react";


import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import {
  Descriptions,
  DescriptionItem,
  DescriptionSection,
} from "@/pages/GroupUIComponents/Components/Descriptions/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const PageDescriptions = () => {
  return (
    <>

      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Descriptions
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Descriptions", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Pill className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>


      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Customer Information */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Customer Information
            </h2>

            <DescriptionSection
              title="ข้อมูลลูกค้า"
              description="รายละเอียดข้อมูลลูกค้าสำหรับตรวจสอบก่อนทำรายการ"
              actions={
                <button
                  type="button"
                  className="rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  Edit Customer
                </button>
              }
            >
              <Descriptions columns={3}>
                <DescriptionItem
                  label="Customer Name"
                  value="สมชาย ใจดี"
                  icon={<User className="w-4 h-4" />}
                />

                <DescriptionItem
                  label="Email"
                  value="somchai@example.com"
                  icon={<Mail className="w-4 h-4" />}
                  copyable
                />

                <DescriptionItem
                  label="Phone"
                  value="081-234-5678"
                  icon={<Phone className="w-4 h-4" />}
                  copyable
                />

                <DescriptionItem
                  label="Address"
                  value="123/45 ตำบลท่าอิฐ อำเภอเมือง จังหวัดอุตรดิตถ์"
                  icon={<MapPin className="w-4 h-4" />}
                />

                <DescriptionItem
                  label="Customer Type"
                  value="บุคคลธรรมดา"
                  badge={
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                      Active
                    </span>
                  }
                />

                <DescriptionItem
                  label="Registered Date"
                  value="17 Jun 2026"
                  icon={<CalendarDays className="w-4 h-4" />}
                />
              </Descriptions>
            </DescriptionSection>

            <div className="mt-4">
              <div className={contentBox}>
                Descriptions ใช้สำหรับแสดงรายละเอียดข้อมูลแบบเป็นระเบียบ เช่น ข้อมูลลูกค้า ข้อมูลเอกสาร หรือข้อมูลรายการ
              </div>
            </div>
          </section>

          {/* Insurance Detail */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Insurance Detail
            </h2>

            <DescriptionSection
              title="ข้อมูลกรมธรรม์"
              description="รายละเอียดรายการประกันภัยและสถานะการดำเนินการ"
            >
              <Descriptions columns={4} bordered>
                <DescriptionItem
                  label="Policy No"
                  value="INS-2026-000128"
                  icon={<FileText className="w-4 h-4" />}
                  copyable
                />

                <DescriptionItem
                  label="Product Type"
                  value="Motor Insurance"
                  icon={<ShieldCheck className="w-4 h-4" />}
                />

                <DescriptionItem
                  label="Premium"
                  value="฿18,500"
                  icon={<CreditCard className="w-4 h-4" />}
                />

                <DescriptionItem
                  label="Status"
                  value="Approved"
                  badge={
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                      Success
                    </span>
                  }
                />

                <DescriptionItem
                  label="Branch"
                  value="อุตรดิตถ์"
                  icon={<Building2 className="w-4 h-4" />}
                />

                <DescriptionItem
                  label="Created By"
                  value="Branch Staff"
                  icon={<User className="w-4 h-4" />}
                />

                <DescriptionItem
                  label="Created At"
                  value="17 Jun 2026 09:12"
                  icon={<CalendarDays className="w-4 h-4" />}
                />

                <DescriptionItem
                  label="Reference"
                  value="REF-ABC-123456"
                  copyable
                />
              </Descriptions>
            </DescriptionSection>
          </section>

          {/* API / Integration */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Integration Description
            </h2>

            <DescriptionSection
              title="External API Result"
              description="ข้อมูลผลลัพธ์จากระบบภายนอกหลังส่งรายการ"
              actions={
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  View Raw Log
                </button>
              }
            >
              <Descriptions columns={2}>
                <DescriptionItem
                  label="Send Status"
                  value="success"
                  badge={
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                      Success
                    </span>
                  }
                  icon={<BadgeCheck className="w-4 h-4" />}
                />

                <DescriptionItem
                  label="Transaction ID"
                  value="TXN-88912003"
                  copyable
                />

                <DescriptionItem
                  label="Application No"
                  value="APP-2026-7712"
                  copyable
                />

                <DescriptionItem
                  label="Response Time"
                  value="428 ms"
                  helperText="เวลาตอบกลับจาก API ภายนอก"
                />
              </Descriptions>
            </DescriptionSection>
          </section>

          {/* Compact Profile */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Compact Profile Description
            </h2>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              <DescriptionSection
                title="User Profile"
                description="ข้อมูลผู้ใช้งานแบบ compact"
              >
                <Descriptions columns={2}>
                  <DescriptionItem label="Name" value="Tom Smile" />
                  <DescriptionItem label="Role" value="Administrator" />
                  <DescriptionItem label="Department" value="IT" />
                  <DescriptionItem label="Last Login" value="Today 09:30" />
                </Descriptions>
              </DescriptionSection>

              <DescriptionSection
                title="Document Summary"
                description="ข้อมูลสรุปเอกสาร"
              >
                <Descriptions columns={2}>
                  <DescriptionItem
                    label="Document No"
                    value="DOC-2026-0001"
                    copyable
                  />
                  <DescriptionItem label="Type" value="Approval Request" />
                  <DescriptionItem label="Owner" value="Finance Team" />
                  <DescriptionItem
                    label="Status"
                    value="Waiting Review"
                    badge={
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                        Pending
                      </span>
                    }
                  />
                </Descriptions>
              </DescriptionSection>
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
                  Customer Detail Page
                </p>

                <DescriptionSection title="Customer">
                  <Descriptions columns={1}>
                    <DescriptionItem label="Name" value="สมชาย ใจดี" />
                    <DescriptionItem label="Phone" value="081-234-5678" />
                    <DescriptionItem label="Branch" value="อุตรดิตถ์" />
                  </Descriptions>
                </DescriptionSection>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Policy Detail Page
                </p>

                <DescriptionSection title="Policy">
                  <Descriptions columns={1}>
                    <DescriptionItem label="Policy No" value="INS-2026-000128" />
                    <DescriptionItem label="Premium" value="฿18,500" />
                    <DescriptionItem
                      label="Status"
                      value="Approved"
                      badge={
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                          Success
                        </span>
                      }
                    />
                  </Descriptions>
                </DescriptionSection>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageDescriptions;
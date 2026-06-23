import {
  Plus,
  RefreshCw,
  Search,
  Upload,
  FilterX,
  Home,
  ShieldAlert,
  FileUp,
  SquareMousePointer
} from "lucide-react";

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index";

import {
  EmptyState,
  EmptyStateAction,
  EmptyStateGrid,
} from "@/pages/GroupUIComponents/Components/EmptyState/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";

const PageEmptyState = () => {
  return (
    <>

      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Empty State
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Empty State", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <SquareMousePointer className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>

      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Empty State
            </h2>

            <EmptyState
              title="ยังไม่มีรายการ"
              description="เมื่อมีข้อมูลใหม่เข้ามา ระบบจะแสดงรายการทั้งหมดในพื้นที่นี้"
              actions={
                <>
                  <EmptyStateAction icon={<Plus className="w-4 h-4" />}>
                    เพิ่มรายการใหม่
                  </EmptyStateAction>

                  <EmptyStateAction
                    variant="secondary"
                    icon={<RefreshCw className="w-4 h-4" />}
                  >
                    โหลดใหม่
                  </EmptyStateAction>
                </>
              }
            />

            <div className="mt-4">
              <div className={contentBox}>
                Empty State ใช้เมื่อไม่มีข้อมูล ไม่มีผลลัพธ์ หรือเกิดสถานะพิเศษที่ต้องบอกผู้ใช้ว่าควรทำอะไรต่อ
              </div>
            </div>
          </section>

          {/* Variants */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Empty State Variants
            </h2>

            <EmptyStateGrid columns={2}>
              <EmptyState
                variant="search"
                size="sm"
                actions={
                  <EmptyStateAction
                    variant="secondary"
                    icon={<FilterX className="w-4 h-4" />}
                  >
                    ล้างตัวกรอง
                  </EmptyStateAction>
                }
              />

              <EmptyState
                variant="file"
                size="sm"
                actions={
                  <EmptyStateAction icon={<Upload className="w-4 h-4" />}>
                    อัปโหลดไฟล์
                  </EmptyStateAction>
                }
              />

              <EmptyState
                variant="permission"
                size="sm"
                actions={
                  <EmptyStateAction
                    variant="secondary"
                    icon={<Home className="w-4 h-4" />}
                  >
                    กลับหน้าแรก
                  </EmptyStateAction>
                }
              />

              <EmptyState
                variant="error"
                size="sm"
                actions={
                  <EmptyStateAction icon={<RefreshCw className="w-4 h-4" />}>
                    ลองใหม่
                  </EmptyStateAction>
                }
              />
            </EmptyStateGrid>
          </section>

          {/* Table Empty */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Table Empty State
            </h2>

            <div className="overflow-hidden bg-white border rounded-2xl border-slate-200">
              <div className="grid grid-cols-4 px-4 py-3 text-sm font-medium bg-slate-50 text-slate-600">
                <span>Document</span>
                <span>Status</span>
                <span>Owner</span>
                <span className="text-right">Action</span>
              </div>

              <EmptyState
                variant="search"
                title="ไม่พบข้อมูลในตาราง"
                description="ไม่มีรายการที่ตรงกับเงื่อนไขการค้นหา ลองเปลี่ยนคำค้นหาหรือล้างตัวกรอง"
                size="md"
                className="border-0 rounded-none"
                actions={
                  <>
                    <EmptyStateAction
                      variant="secondary"
                      icon={<FilterX className="w-4 h-4" />}
                    >
                      ล้างตัวกรอง
                    </EmptyStateAction>
                    <EmptyStateAction icon={<Search className="w-4 h-4" />}>
                      ค้นหาใหม่
                    </EmptyStateAction>
                  </>
                }
              />
            </div>
          </section>

          {/* Upload Empty */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Upload Empty State
            </h2>

            <EmptyState
              variant="file"
              title="ยังไม่มีเอกสารแนบ"
              description="อัปโหลดไฟล์ PDF, JPG, PNG หรือ DOCX เพื่อแนบเอกสารประกอบรายการนี้"
              icon={<FileUp className="w-8 h-8" />}
              actions={
                <>
                  <EmptyStateAction icon={<Upload className="w-4 h-4" />}>
                    เลือกไฟล์
                  </EmptyStateAction>

                  <EmptyStateAction variant="secondary">
                    ดูเงื่อนไขไฟล์
                  </EmptyStateAction>
                </>
              }
            >
              <div className="px-4 py-3 text-xs border border-dashed rounded-xl border-slate-300 bg-slate-50 text-slate-500">
                รองรับไฟล์ขนาดไม่เกิน 10MB ต่อไฟล์
              </div>
            </EmptyState>
          </section>

          {/* Permission / Error */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Permission / Error State
            </h2>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              <EmptyState
                variant="permission"
                title="คุณไม่มีสิทธิ์ดูรายงานนี้"
                description="กรุณาติดต่อผู้ดูแลระบบเพื่อขอสิทธิ์เข้าถึงรายงานสำหรับผู้บริหาร"
                icon={<ShieldAlert className="w-8 h-8" />}
                actions={
                  <EmptyStateAction variant="secondary">
                    ติดต่อผู้ดูแลระบบ
                  </EmptyStateAction>
                }
              />

              <EmptyState
                variant="offline"
                title="เชื่อมต่อ Server ไม่สำเร็จ"
                description="ระบบไม่สามารถดึงข้อมูลล่าสุดได้ กรุณาตรวจสอบการเชื่อมต่อหรือลองใหม่อีกครั้ง"
                actions={
                  <EmptyStateAction icon={<RefreshCw className="w-4 h-4" />}>
                    ลองใหม่
                  </EmptyStateAction>
                }
              />
            </div>
          </section>

          {/* Left Align */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Left Aligned Empty State
            </h2>

            <EmptyState
              align="left"
              variant="create"
              title="เริ่มต้นสร้าง Dashboard ของคุณ"
              description="เพิ่ม widget, KPI card และ chart เพื่อสร้าง dashboard สำหรับทีมของคุณ"
              actions={
                <>
                  <EmptyStateAction icon={<Plus className="w-4 h-4" />}>
                    เพิ่ม Widget
                  </EmptyStateAction>

                  <EmptyStateAction variant="secondary">
                    ดูตัวอย่าง Dashboard
                  </EmptyStateAction>
                </>
              }
            />
          </section>

          {/* Real World */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Real World Examples
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Insurance List Empty
                </p>

                <EmptyState
                  variant="create"
                  size="sm"
                  title="ยังไม่มีรายการประกันภัย"
                  description="เริ่มสร้างรายการประกันภัยรายการแรกจากปุ่มด้านล่าง"
                  actions={
                    <EmptyStateAction icon={<Plus className="w-4 h-4" />}>
                      สร้างรายการ
                    </EmptyStateAction>
                  }
                />
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Report No Result
                </p>

                <EmptyState
                  variant="search"
                  size="sm"
                  title="ไม่พบรายงาน"
                  description="ไม่มีรายงานตรงกับช่วงวันที่หรือเงื่อนไขที่เลือก"
                  actions={
                    <EmptyStateAction
                      variant="secondary"
                      icon={<FilterX className="w-4 h-4" />}
                    >
                      Reset Filter
                    </EmptyStateAction>
                  }
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PageEmptyState;
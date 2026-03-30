import { useState } from "react";
import {
  SquareDashedBottomCode,
  AlertTriangle,
  CheckCircle2,
  Info,
  Trash2,
  Pencil,
} from "lucide-react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/pages/GroupUIComponents/Components/Modals/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";
  
const PageModals = () => {

  const [openBasic, setOpenBasic] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openScrollable, setOpenScrollable] = useState(false);
  

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Modals
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
                Modals
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <SquareDashedBottomCode className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Modal Triggers
            </h2>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setOpenBasic(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl hover:bg-blue-600"
              >
                Open Basic Modal
              </button>

              <button
                onClick={() => setOpenForm(true)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-xl bg-emerald-500 hover:bg-emerald-600"
              >
                <Pencil className="w-4 h-4" />
                Open Form Modal
              </button>

              <button
                onClick={() => setOpenConfirm(true)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-xl bg-rose-500 hover:bg-rose-600"
              >
                <Trash2 className="w-4 h-4" />
                Open Confirm Modal
              </button>

              <button
                onClick={() => setOpenSuccess(true)}
                className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-violet-500 hover:bg-violet-600"
              >
                Open Success Modal
              </button>

              <button
                onClick={() => setOpenScrollable(true)}
                className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-amber-500 hover:bg-amber-600"
              >
                Open Scrollable Modal
              </button>
            </div>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Modal Types
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <h3 className="text-sm font-semibold text-slate-800">
                  Basic Modal
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  ใช้สำหรับแสดงข้อมูลทั่วไป, preview, หรือเนื้อหาสั้นๆ
                </p>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <h3 className="text-sm font-semibold text-slate-800">
                  Form Modal
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  ใช้กับ add/edit forms โดยไม่ต้องเปลี่ยนหน้า
                </p>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <h3 className="text-sm font-semibold text-slate-800">
                  Confirm Modal
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  ใช้ยืนยันการลบหรือ action สำคัญ
                </p>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <h3 className="text-sm font-semibold text-slate-800">
                  Scrollable Modal
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  ใช้กับเนื้อหายาว เช่น detail, history, หรือ form ใหญ่
                </p>
              </div>
            </div>
          </section>

          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Real World Examples
            </h2>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  User Management
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl">
                    Add User
                  </button>
                  <button className="px-4 py-2 text-sm font-medium bg-white border rounded-xl border-slate-200 text-slate-700">
                    View Details
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-rose-500">
                    Delete User
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-2xl border-slate-200 bg-slate-50">
                <p className="mb-3 text-sm font-medium text-slate-600">
                  Report Actions
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-emerald-500">
                    Export PDF
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-amber-500">
                    Preview Report
                  </button>
                </div>
              </div>
            </div>
          </section>

          <Modal
            open={openBasic}
            onClose={() => setOpenBasic(false)}
            maxWidth="max-w-lg"
          >
            <ModalHeader
              title="Basic Modal"
              subtitle="Simple content dialog"
              onClose={() => setOpenBasic(false)}
            />
            <ModalBody>
              <p className="text-sm text-slate-600">
                นี่คือ modal แบบ fade + scale ที่เปิดและปิดได้ลื่นจริงแล้ว 🎉
              </p>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => setOpenBasic(false)}
                className="px-4 py-2 text-sm border rounded-xl"
              >
                Close
              </button>
              <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-xl">
                Confirm
              </button>
            </ModalFooter>
          </Modal>

          <Modal
            open={openForm}
            onClose={() => setOpenForm(false)}
            maxWidth="max-w-2xl"
          >
            <ModalHeader
              title="Edit User"
              subtitle="Update user information"
              onClose={() => setOpenForm(false)}
            />
            <ModalBody>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Role
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-400">
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => setOpenForm(false)}
                className="px-4 py-2 text-sm font-medium bg-white border rounded-xl border-slate-200 text-slate-700"
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-emerald-500">
                Save Changes
              </button>
            </ModalFooter>
          </Modal>

          <Modal
            open={openConfirm}
            onClose={() => setOpenConfirm(false)}
            maxWidth="max-w-md"
          >
            <ModalBody>
              <div className="text-center">
                <div className="flex items-center justify-center mx-auto rounded-full h-14 w-14 bg-rose-100 text-rose-600">
                  <AlertTriangle className="h-7 w-7" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-800">
                  Confirm Delete
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้? การกระทำนี้ไม่สามารถย้อนกลับได้
                </p>

                <div className="flex justify-center gap-3 mt-6">
                  <button
                    onClick={() => setOpenConfirm(false)}
                    className="px-4 py-2 text-sm font-medium bg-white border rounded-xl border-slate-200 text-slate-700"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-rose-500">
                    Delete Now
                  </button>
                </div>
              </div>
            </ModalBody>
          </Modal>

          <Modal
            open={openSuccess}
            onClose={() => setOpenSuccess(false)}
            maxWidth="max-w-md"
          >
            <ModalBody>
              <div className="text-center">
                <div className="flex items-center justify-center mx-auto rounded-full h-14 w-14 bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-7 w-7" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-800">
                  Success
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Your data has been saved successfully.
                </p>

                <div className="mt-6">
                  <button
                    onClick={() => setOpenSuccess(false)}
                    className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-emerald-500"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </ModalBody>
          </Modal>

          <Modal
            open={openScrollable}
            onClose={() => setOpenScrollable(false)}
            maxWidth="max-w-3xl"
          >
            <ModalHeader
              title="Scrollable Modal"
              subtitle="Long content example"
              onClose={() => setOpenScrollable(false)}
            />
            <ModalBody>
              <div className="max-h-[60vh] space-y-4 overflow-y-auto">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-xl border-slate-200 bg-slate-50"
                  >
                    <div className="flex items-start gap-3">
                      <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">
                          Section {index + 1}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          นี่คือตัวอย่างเนื้อหาใน modal ที่ยาวมาก จนต้องเลื่อนภายในตัว
                          modal เอง เหมาะกับ detail, history, form ขนาดใหญ่ หรือ
                          document preview
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => setOpenScrollable(false)}
                className="px-4 py-2 text-sm font-medium bg-white border rounded-xl border-slate-200 text-slate-700"
              >
                Close
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-xl">
                Save
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default PageModals

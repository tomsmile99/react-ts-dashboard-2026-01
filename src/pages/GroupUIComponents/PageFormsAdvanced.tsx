import { useState } from "react"
import { 
  FileText
} from "lucide-react"

import { Breadcrumbs } from "@/pages/GroupUIComponents/Components/Breadcrumbs/index"
import { TagInput } from "@/pages/GroupUIComponents/Components/FormsAdvanced/TagInput"

import { Autocomplete } from "@/pages/GroupUIComponents/Components/FormsAdvanced/Autocomplete"
import type { AutocompleteOption } from "@/pages/GroupUIComponents/Components/FormsAdvanced/Autocomplete"

import { MultiSelect } from "@/pages/GroupUIComponents/Components/FormsAdvanced/MultiSelect"
import type { MultiSelectOption } from "@/pages/GroupUIComponents/Components/FormsAdvanced/MultiSelect"

import { FileUploadAdvanced } from "@/pages/GroupUIComponents/Components/FormsAdvanced/FileUploadAdvanced"
import type { UploadItem } from "@/pages/GroupUIComponents/Components/FormsAdvanced/FileUploadAdvanced"

import { DatePicker } from "@/pages/GroupUIComponents/Components/FormsAdvanced/DatePicker"

import { TimePicker } from "@/pages/GroupUIComponents/Components/FormsAdvanced/TimePicker";
import type { TimeValue } from "@/pages/GroupUIComponents/Components/FormsAdvanced/TimePicker";

import { RichTextEditor } from "@/pages/GroupUIComponents/Components/FormsAdvanced/RichTextEditor";

const branchOptions: AutocompleteOption[] = [
  {
    label: "สาขาอุตรดิตถ์",
    value: "uttaradit",
    description: "ภาคเหนือ / เขต 01",
  },
  {
    label: "สาขาพิษณุโลก",
    value: "phitsanulok",
    description: "ภาคเหนือ / เขต 01",
  },
  {
    label: "สาขาเชียงใหม่",
    value: "chiangmai",
    description: "ภาคเหนือ / เขต 02",
  },
  {
    label: "สาขานครสวรรค์",
    value: "nakhonsawan",
    description: "ภาคกลาง / เขต 03",
  },
  {
    label: "สาขาขอนแก่น",
    value: "khonkaen",
    description: "ภาคตะวันออกเฉียงเหนือ / เขต 04",
  },
  {
    label: "สาขากรุงเทพฯ",
    value: "bangkok",
    description: "สำนักงานใหญ่",
  },
]

const options: MultiSelectOption[] = [
  {
    label: "React",
    value: "react",
    description: "Frontend Library",
  },
  {
    label: "TypeScript",
    value: "typescript",
    description: "Typed JavaScript",
  },
  {
    label: "Tailwind CSS",
    value: "tailwind",
    description: "Utility-first CSS Framework",
  },
  {
    label: "CodeIgniter 4",
    value: "ci4",
    description: "PHP Framework",
  },
  {
    label: "Node.js",
    value: "node",
    description: "Backend Runtime",
  },
  {
    label: "Socket.IO",
    value: "socketio",
    description: "Realtime Communication",
  },
  {
    label: "MariaDB",
    value: "mariadb",
    description: "Database",
  },
  {
    label: "Docker",
    value: "docker",
    description: "Container Platform",
  },
]

const PageFormsAdvanced = () => {
  
  const [skills, setSkills] = useState<string[]>([
    "React",
    "TypeScript",
    "CodeIgniter 4",
  ])
  const [branch, setBranch] = useState<AutocompleteOption | null>(null)
  const [selected, setSelected] = useState<MultiSelectOption[]>([
    options[0],
    options[1],
    options[3],
  ])

  const [files, setFiles] = useState<UploadItem[]>([])
  
  //-------- DatePicker ----------//
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date)

    if (date && endDate && endDate < date) {
      setEndDate(null)
    }
  }

  //-------- TimePicker ----------//
  const [time, setTime] = useState<TimeValue | null>({
    hour: 9,
    minute: 30,
  });

  const [startTime, setStartTime] = useState<TimeValue | null>(null);
  const [endTime, setEndTime] = useState<TimeValue | null>(null);

  const handleStartTimeChange = (nextStart: TimeValue | null) => {
    setStartTime(nextStart);

    if (!nextStart) {
      setEndTime(null);
      return;
    }

    if (endTime && toMinutes(endTime) <= toMinutes(nextStart)) {
      setEndTime(null);
    }
  };

  function toMinutes(time: TimeValue) {
    return time.hour * 60 + time.minute;
  }

  function addTimeMinutes(time: TimeValue, amount: number): TimeValue {
    const total = toMinutes(time) + amount;

    return {
      hour: Math.floor(total / 60),
      minute: total % 60,
    };
  }

  //-------- RichTextEditor ----------//
  const [content, setContent] = useState(
    "<p><strong>รายละเอียดรายการประกันภัย</strong></p><p>สามารถพิมพ์หมายเหตุ รายละเอียดเพิ่มเติม หรือเงื่อนไขพิเศษได้ที่นี่</p>"
  )

  return (
    <>
      <div className="w-full gap-4 p-3 pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>

            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Forms Advanced
            </span>

            {/* Breadcrumb */}
            <div className="mb-3 ml-3 text-xs text-gray-500 sm:text-sm">
              <Breadcrumbs
                showHome
                //homeLabel="Dashboard"
                items={[
                  { label: "UI Components" },
                  { label: "Forms Advanced", current: true },
                ]}
              />
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <FileText className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
        
      </div>
      <div className="w-full gap-4 p-3 pb-2">
        <div className="mb-2 text-center">
          <p className="mt-1 text-sm text-slate-500">
            รวม Components ขั้นสูงสำหรับ Form เช่น Tag, Search, Upload, Date และ Rich Text
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-6 dark:bg-slate-900 dark:text-white ">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Tag Input Pro
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                ใช้กรอกข้อมูลหลายรายการ เช่น ทักษะ, หมวดหมู่, keyword หรือ label
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              <TagInput
                value={skills}
                onChange={setSkills}
                placeholder="เพิ่ม Tag แล้วกด Enter..."
                maxTags={8}
              />

              <div className="p-4 text-sm rounded-2xl bg-slate-50 dark:bg-slate-800">
                <p className="mb-2 font-semibold text-slate-700 dark:text-slate-200">
                  Current Value
                </p>

                <pre className="overflow-auto text-slate-600 dark:text-slate-300">
                  {JSON.stringify(skills, null, 2)}
                </pre>
              </div>
            </div>
            
          </div>
          <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-6 dark:bg-slate-900 dark:text-white ">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Autocomplete Pro
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                ใช้ค้นหาและเลือกข้อมูล เช่น สาขา, ลูกค้า, พนักงาน หรือรายการจาก API
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <Autocomplete
                options={branchOptions}
                value={branch}
                onChange={setBranch}
                placeholder="ค้นหาสาขา..."
              />

              <div className="p-4 text-sm rounded-2xl bg-slate-50 dark:bg-slate-800">
                <p className="mb-2 font-semibold text-slate-700 dark:text-slate-200">
                  Selected Value
                </p>

                <pre className="overflow-auto text-slate-600 dark:text-slate-300">
                  {JSON.stringify(branch, null, 2)}
                </pre>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="w-full gap-4 p-3 pb-2">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Multi Select Pro
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                ใช้เลือกข้อมูลหลายรายการ เช่น ทักษะ, สาขา, เขตพื้นที่, สิทธิ์ผู้ใช้งาน หรือสถานะรายงาน
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                placeholder="เลือกเทคโนโลยี..."
                maxSelected={5}
              />
              <div className="p-4 text-sm rounded-2xl bg-slate-50 dark:bg-slate-800">
                <p className="mb-2 font-semibold text-slate-700 dark:text-slate-200">
                  Selected Values
                </p>
                <pre className="overflow-auto text-slate-600 dark:text-slate-300">
                  {JSON.stringify(selected, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full gap-4 p-3 pb-2">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                File Upload Advanced Pro
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                รองรับ Preview, Compress Image, Progress, Camera, Queue และ Retry Upload
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <FileUploadAdvanced
                value={files}
                onChange={setFiles}
                multiple
                maxFiles={10}
                compressImage
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full gap-4 p-3 pb-2">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                DatePicker Pro
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                ใช้เลือกวันที่สำหรับฟอร์ม รายงาน วันที่เริ่มคุ้มครอง หรือวันที่ทำรายการ
              </p>
            </div>
            <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  วันที่ทำรายการ
                </label>
                <DatePicker
                  value={startDate}
                  onChange={handleStartDateChange}
                  placeholder="เลือกวันที่เริ่มต้น..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  วันที่รายงาน
                </label>
                <DatePicker
                  value={endDate}
                  onChange={setEndDate}
                  placeholder={
                    startDate ? "เลือกวันที่สิ้นสุด..." : "กรุณาเลือกวันที่เริ่มต้นก่อน"
                  }
                  disabled={!startDate}
                  minDate={startDate ?? undefined}
                />

                {!startDate && (
                  <p className="text-xs text-amber-600">
                    กรุณาเลือกวันที่เริ่มต้นก่อน
                  </p>
                )}
              </div>
            </div>

            <div className="max-w-4xl p-4 mx-auto mt-6 text-sm rounded-2xl bg-slate-50 dark:bg-slate-800">
              <p className="mb-2 font-semibold text-slate-700 dark:text-slate-200">
                Current Value
              </p>

              <pre className="overflow-auto text-slate-600 dark:text-slate-300">
                {JSON.stringify(
                  {
                    date: startDate?.toISOString() ?? null,
                    reportDate: endDate?.toISOString() ?? null,
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          </div>

          
        </div>
      </div>
      
      <div className="w-full gap-4 p-3 pb-2">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                TimePicker Pro Enterprise
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                เลือกเวลาแบบ 24 ชั่วโมง, Step Minute, จำกัดช่วงเวลา และ Time Range
              </p>
            </div>
            <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  เวลาทำรายการ
                </label>

                <TimePicker value={time} onChange={setTime} minuteStep={5} />

                <p className="text-xs text-slate-500">
                  เลือกได้ทุก 5 นาที
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  เวลาทำการ
                </label>

                <TimePicker
                  value={time}
                  onChange={setTime}
                  minuteStep={15}
                  minTime={{ hour: 8, minute: 0 }}
                  maxTime={{ hour: 17, minute: 0 }}
                />

                <p className="text-xs text-slate-500">
                  จำกัดเวลา 08:00 - 17:00
                </p>
              </div>
            </div>

            <div className="max-w-4xl p-5 mx-auto mt-8 border rounded-2xl border-slate-200 dark:border-slate-700">
              <div className="mb-5 text-center">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Time Range Picker Pro
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  ต้องเลือกเวลาเริ่มต้นก่อน และเวลาสิ้นสุดต้องมากกว่าเวลาเริ่มต้น
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    เวลาเริ่มต้น
                  </label>

                  <TimePicker
                    value={startTime}
                    onChange={handleStartTimeChange}
                    placeholder="เลือกเวลาเริ่มต้น..."
                    minuteStep={15}
                    minTime={{ hour: 8, minute: 0 }}
                    maxTime={{ hour: 17, minute: 0 }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    เวลาสิ้นสุด
                  </label>

                  <TimePicker
                    value={endTime}
                    onChange={setEndTime}
                    placeholder={
                      startTime ? "เลือกเวลาสิ้นสุด..." : "กรุณาเลือกเวลาเริ่มต้นก่อน"
                    }
                    disabled={!startTime}
                    minuteStep={15}
                    minTime={
                      startTime
                        ? addTimeMinutes(startTime, 15)
                        : { hour: 8, minute: 0 }
                    }
                    maxTime={{ hour: 17, minute: 0 }}
                  />

                  {!startTime && (
                    <p className="text-xs text-amber-600">
                      กรุณาเลือกเวลาเริ่มต้นก่อน
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="max-w-4xl p-4 mx-auto mt-6 text-sm rounded-2xl bg-slate-50 dark:bg-slate-800">
              <p className="mb-2 font-semibold text-slate-700 dark:text-slate-200">
                Current Value
              </p>

              <pre className="overflow-auto text-slate-600 dark:text-slate-300">
                {JSON.stringify(
                  {
                    time,
                    startTime,
                    endTime,
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full gap-4 p-3 pb-2">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-200 xl:col-span-12 dark:bg-slate-900 dark:text-white ">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Rich Text Editor Pro
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                ใช้กรอกข้อความแบบจัดรูปแบบ เช่น หมายเหตุ รายละเอียดงาน เงื่อนไข หรือประกาศ
              </p>
            </div>
            <div className="max-w-5xl mx-auto space-y-6">
              <RichTextEditor
                value={content}
                onChange={setContent}
                placeholder="พิมพ์รายละเอียด..."
                minHeight={260}
              />

              <div className="p-4 text-sm rounded-2xl bg-slate-50 dark:bg-slate-800">
                <p className="mb-2 font-semibold text-slate-700 dark:text-slate-200">
                  HTML Output
                </p>

                <pre className="overflow-auto whitespace-pre-wrap max-h-72 text-slate-600 dark:text-slate-300">
                  {content}
                </pre>
              </div>

              <div className="p-5 border rounded-2xl border-slate-200 dark:border-slate-700">
                <p className="mb-3 font-semibold text-slate-700 dark:text-slate-200">
                  Preview
                </p>

                <div
                  className="prose-sm prose max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageFormsAdvanced

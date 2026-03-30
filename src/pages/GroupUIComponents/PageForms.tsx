import { useState } from "react";
import { 
  Form, 
  Save, 
  RefreshCw, 
  Mail, 
  Globe 
} from "lucide-react";

import {
  FormInput,
  FormSelect,
  FormTextarea,
  FormSwitch,
  FormCheckbox,
  FormRadioGroup,
  FormSection,
} from "@/pages/GroupUIComponents/Components/Forms/index";

import {
  TextInput,
  SearchInput,
  PasswordInput,
  PrefixSuffixInput,
  NumberInput,
  OtpInput,
  FileUploadBox,
} from "@/pages/GroupUIComponents/Components/AdvancedInput/index";

const sectionCard =
  "p-5 bg-white border border-slate-200 rounded-2xl shadow-sm";

const contentBox =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600";


const departmentOptions = [
  { label: "ฝ่ายไอที", value: "it" },
  { label: "ฝ่ายการเงิน", value: "finance" },
  { label: "ฝ่ายการตลาด", value: "marketing" },
  { label: "ฝ่ายทรัพยากรบุคคล", value: "hr" },
];
  
const PageForms = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [isPublicProfile, setIsPublicProfile] = useState(false);

  const [username, setUsername] = useState("");
  const [search, setSearch] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [emailPrefix, setEmailPrefix] = useState("");
  const [salary, setSalary] = useState("");

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpError, setOtpError] = useState("");

  const verifyOtp = async (code: string) => {
    try {
      setIsVerifying(true);
      setOtpError("");

      console.log("verify:", code);

      // await apiVerifyOtp(code)

      const isValid = code === "123456";

      if (!isValid) {
        setOtpError("รหัส OTP ไม่ถูกต้อง");
        return;
      }

      alert("ยืนยัน OTP สำเร็จ");
    } finally {
      setIsVerifying(false);
    }
  };

  const [errorsAdvancedInput, setErrorsAdvancedInput] = useState<{
    username?: string;
    password?: string;
    salary?: string;
    otp?: string;
  }>({});

  const handleResetAdvancedInput = () => {
    setUsername("");
    setSearch("");
    setPassword("");
    setWebsite("");
    setEmailPrefix("");
    setSalary("");
    setOtp(["", "", "", "", "", ""]);
    setErrors({});
  };

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    department?: string;
    status?: string;
    acceptPolicy?: string;
  }>({});

  const validate = () => {
    const newErrors: {
      fullName?: string;
      email?: string;
      department?: string;
      status?: string;
      acceptPolicy?: string;
    } = {};

    if (!fullName.trim()) newErrors.fullName = "กรุณากรอกชื่อ-นามสกุล";
    if (!email.trim()) {
      newErrors.email = "กรุณากรอกอีเมล";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    if (!department) newErrors.department = "กรุณาเลือกหน่วยงาน";
    if (!status) newErrors.status = "กรุณาเลือกสถานะ";
    if (!acceptPolicy) newErrors.acceptPolicy = "กรุณายอมรับเงื่อนไขก่อนบันทึก";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setEmployeeCode("");
    setDepartment("");
    setDescription("");
    setStatus("active");
    setNotifyEmail(true);
    setAcceptPolicy(false);
    setIsPublicProfile(false);
    setErrors({});
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log("submit form", {
      fullName,
      email,
      employeeCode,
      department,
      description,
      status,
      notifyEmail,
      acceptPolicy,
      isPublicProfile,
    });

    alert("บันทึกข้อมูลเรียบร้อย");
  };

  const handleSubmitAdvancedInput = () => {
    const newErrors: {
      username?: string;
      password?: string;
      salary?: string;
      otp?: string;
    } = {};

    if (!username.trim()) newErrors.username = "กรุณากรอกชื่อผู้ใช้งาน";
    if (!password.trim()) newErrors.password = "กรุณากรอกรหัสผ่าน";
    if (!salary.trim()) newErrors.salary = "กรุณากรอกจำนวนเงิน";

    if (otp.some((digit) => !digit)) {
      newErrors.otp = "กรุณากรอก OTP ให้ครบ";
    }

    setErrorsAdvancedInput(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    alert("บันทึกข้อมูลเรียบร้อย");
  };

  return (
    <>
      <div className="w-full pb-2 mb-3">
        <div className="flex items-center justify-between w-full p-1 bg-blue-100 rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.08)]">
          {/* ฝั่งซ้าย */}
          <div>
            {/* Title */}
            <span className="flex justify-start p-3 text-lg text-gray-800 sm:text-xl md:text-2xl">
              Forms
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
                Forms
              </span>
            </div>
          </div>
          {/* ฝั่งขวา */}
          <div className="mr-5">
            <Form className="w-10 h-10 text-slate-600 sm:w-14 sm:h-14" />
          </div>
        </div>
      </div>
      <div className="w-full pb-2">
        <div className="space-y-5">
          {/* Basic Inputs */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Basic Inputs
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormInput
                label="ชื่อ-นามสกุล"
                value={fullName}
                onChange={setFullName}
                placeholder="กรอกชื่อ-นามสกุล"
                required
                error={errors.fullName}
              />

              <FormInput
                label="อีเมล"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="example@email.com"
                required
                error={errors.email}
              />

              <FormInput
                label="รหัสพนักงาน"
                value={employeeCode}
                onChange={setEmployeeCode}
                placeholder="EMP-0001"
                helperText="สามารถใช้สำหรับอ้างอิงข้อมูลภายในระบบ"
              />

              <FormSelect
                label="หน่วยงาน"
                value={department}
                onChange={setDepartment}
                options={departmentOptions}
                required
                error={errors.department}
              />
            </div>

            <div className="mt-4">
              <FormTextarea
                label="รายละเอียดเพิ่มเติม"
                value={description}
                onChange={setDescription}
                placeholder="กรอกรายละเอียดเพิ่มเติม..."
                helperText="ข้อความนี้จะแสดงในหน้าข้อมูลรายละเอียด"
              />
            </div>
          </section>

          {/* Toggle / Checkbox / Radio */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Toggle / Checkbox / Radio
            </h2>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <div className="space-y-4">
                <FormSwitch
                  label="เปิดใช้งานโปรไฟล์สาธารณะ"
                  checked={isPublicProfile}
                  onChange={setIsPublicProfile}
                  helperText="เมื่อเปิดแล้ว ผู้ใช้อื่นจะสามารถมองเห็นข้อมูลสาธารณะของคุณ"
                />

                <FormSwitch
                  label="แจ้งเตือนผ่านอีเมล"
                  checked={notifyEmail}
                  onChange={setNotifyEmail}
                  helperText="รับการแจ้งเตือนเมื่อมีการอัปเดตข้อมูลหรือคำขอใหม่"
                />
              </div>

              <div className="space-y-4">
                <FormCheckbox
                  label="ยอมรับเงื่อนไขและนโยบายของระบบ"
                  checked={acceptPolicy}
                  onChange={setAcceptPolicy}
                  helperText="จำเป็นต้องยอมรับก่อนจึงจะสามารถบันทึกข้อมูลได้"
                />
                {errors.acceptPolicy && (
                  <p className="-mt-2 text-xs text-red-500">
                    {errors.acceptPolicy}
                  </p>
                )}

                <FormRadioGroup
                  label="สถานะการใช้งาน"
                  value={status}
                  onChange={setStatus}
                  required
                  error={errors.status}
                  options={[
                    {
                      label: "Active",
                      value: "active",
                      helperText: "เปิดใช้งานและพร้อมใช้งานทันที",
                    },
                    {
                      label: "Pending",
                      value: "pending",
                      helperText: "รอการอนุมัติจากผู้ดูแลระบบ",
                    },
                    {
                      label: "Inactive",
                      value: "inactive",
                      helperText: "ยังไม่เปิดใช้งานในตอนนี้",
                    },
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Production Example */}
          <FormSection
            title="Production Form Example"
            description="ตัวอย่างฟอร์มใช้งานจริงสำหรับหน้าเพิ่ม/แก้ไขข้อมูลผู้ใช้งาน"
          >
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <FormInput
                label="ชื่อ-นามสกุล"
                value={fullName}
                onChange={setFullName}
                placeholder="กรอกชื่อ-นามสกุล"
                required
                error={errors.fullName}
              />

              <FormInput
                label="อีเมล"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="example@email.com"
                required
                error={errors.email}
              />

              <FormInput
                label="รหัสพนักงาน"
                value={employeeCode}
                onChange={setEmployeeCode}
                placeholder="EMP-0001"
              />

              <FormSelect
                label="หน่วยงาน"
                value={department}
                onChange={setDepartment}
                options={departmentOptions}
                required
                error={errors.department}
              />
            </div>

            <div className="mt-5">
              <FormTextarea
                label="หมายเหตุ"
                value={description}
                onChange={setDescription}
                placeholder="กรอกหมายเหตุหรือรายละเอียดเพิ่มเติม"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 mt-5 xl:grid-cols-2">
              <div className="space-y-4">
                <FormSwitch
                  label="แจ้งเตือนทางอีเมล"
                  checked={notifyEmail}
                  onChange={setNotifyEmail}
                  helperText="ส่งอีเมลแจ้งเตือนเมื่อมีการเปลี่ยนแปลงสำคัญ"
                />
                <FormSwitch
                  label="แสดงข้อมูลแบบสาธารณะ"
                  checked={isPublicProfile}
                  onChange={setIsPublicProfile}
                  helperText="เปิดให้ผู้ใช้คนอื่นมองเห็นข้อมูลที่กำหนดได้"
                />
              </div>

              <div className="space-y-4">
                <FormRadioGroup
                  label="สถานะ"
                  value={status}
                  onChange={setStatus}
                  options={[
                    { label: "Active", value: "active" },
                    { label: "Pending", value: "pending" },
                    { label: "Inactive", value: "inactive" },
                  ]}
                  error={errors.status}
                />

                <FormCheckbox
                  label="ยอมรับเงื่อนไขและนโยบาย"
                  checked={acceptPolicy}
                  onChange={setAcceptPolicy}
                  helperText="ต้องยอมรับก่อนทำรายการบันทึกข้อมูล"
                />
                {errors.acceptPolicy && (
                  <p className="-mt-2 text-xs text-red-500">
                    {errors.acceptPolicy}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-5 mt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <RefreshCw className="w-4 h-4" />
                รีเซ็ต
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
              >
                <Save className="w-4 h-4" />
                บันทึกข้อมูล
              </button>
            </div>
          </FormSection>

          {/* Notes */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Notes for Production
            </h2>

            <div className={contentBox}>
              สำหรับ production จริง คุณสามารถต่อยอด component ชุดนี้ไปใช้ร่วมกับ
              react-hook-form, zod validation, async select, file upload,
              datepicker และ input mask ได้ทันที โดยยังคงโครงสร้าง UI เดียวกันทั้งระบบ
            </div>
          </section>
        </div>
      </div>

      <div className="w-full pb-2">
        <div className="space-y-5">      
          {/* Basic Advanced Inputs */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Input Variations
            </h2>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <TextInput
                label="Username"
                value={username}
                onChange={setUsername}
                placeholder="กรอกชื่อผู้ใช้งาน"
                required
                error={errorsAdvancedInput.username}
                helperText="ใช้สำหรับเข้าสู่ระบบ"
              />

              <SearchInput
                label="Search"
                value={search}
                onChange={setSearch}
                placeholder="ค้นหาข้อมูล..."
                helperText="เหมาะกับ toolbar, table filter, dashboard"
              />

              <PasswordInput
                label="Password"
                value={password}
                onChange={setPassword}
                required
                error={errorsAdvancedInput.password}
                helperText="ควรมีอย่างน้อย 8 ตัวอักษร"
              />

              <NumberInput
                label="Salary"
                value={salary}
                onChange={setSalary}
                placeholder="50000"
                error={errorsAdvancedInput.salary}
                helperText="กรอกเป็นตัวเลขเท่านั้น"
              />
            </div>
          </section>

          {/* Prefix / Suffix */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Prefix / Suffix Inputs
            </h2>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <PrefixSuffixInput
                label="Website URL"
                value={website}
                onChange={setWebsite}
                placeholder="your-company"
                prefix={<Globe className="w-4 h-4" />}
                suffix=".com"
                helperText="ตัวอย่างการทำ input พร้อม prefix / suffix"
              />

              <PrefixSuffixInput
                label="Email Prefix"
                value={emailPrefix}
                onChange={setEmailPrefix}
                placeholder="username"
                prefix={<Mail className="w-4 h-4" />}
                suffix="@company.com"
                helperText="ใช้กับ corporate email หรือ username generator"
              />
            </div>

            <div className="mt-4">
              <div className={contentBox}>
                รูปแบบ prefix / suffix ใช้บ่อยในช่อง URL, email, จำนวนเงิน, search by code และข้อมูลที่มีหน่วยต่อท้าย
              </div>
            </div>
          </section>

          {/* OTP / File Upload */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              OTP / Upload Inputs
            </h2>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

              <OtpInput
                label="OTP Verification"
                value={otp}
                onChange={setOtp}
                length={6}
                isLoading={isVerifying}
                autoSubmit
                onComplete={verifyOtp}
                error={otpError}
                helperText="กรอกรหัส 6 หลักจาก SMS"
              />

              <OtpInput
                label="OTP Verification"
                value={otp}
                onChange={setOtp}
                error={errorsAdvancedInput.otp}
                helperText="กรอกรหัส OTP 6 หลัก"
              />

              <FileUploadBox
                label="Upload Attachment"
                helperText="เหมาะกับเอกสารประกอบการสมัคร, หลักฐาน หรือไฟล์แนบต่าง ๆ"
                onChange={(files) => console.log(files)}
              />
            </div>
          </section>

          {/* Production Example */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Production Example
            </h2>

            <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <TextInput
                  label="Username"
                  value={username}
                  onChange={setUsername}
                  placeholder="กรอกชื่อผู้ใช้งาน"
                  required
                  error={errorsAdvancedInput.username}
                />

                <PasswordInput
                  label="Password"
                  value={password}
                  onChange={setPassword}
                  required
                  error={errorsAdvancedInput.password}
                />

                <PrefixSuffixInput
                  label="Website"
                  value={website}
                  onChange={setWebsite}
                  placeholder="your-company"
                  prefix="https://"
                  suffix=".com"
                />

                <NumberInput
                  label="Budget"
                  value={salary}
                  onChange={setSalary}
                  placeholder="100000"
                  error={errorsAdvancedInput.salary}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 mt-5 xl:grid-cols-2">
                <SearchInput
                  label="Search Employee"
                  value={search}
                  onChange={setSearch}
                  placeholder="ค้นหาพนักงาน..."
                />

                <OtpInput
                  label="OTP Confirmation"
                  value={otp}
                  onChange={setOtp}
                  error={errorsAdvancedInput.otp}
                />
              </div>

              <div className="mt-5">
                <FileUploadBox
                  label="แนบไฟล์เอกสาร"
                  helperText="เช่น สำเนาบัตรประชาชน, ใบสมัคร, หรือเอกสารประกอบอื่น ๆ"
                />
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-5 mt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleResetAdvancedInput}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <RefreshCw className="w-4 h-4" />
                  รีเซ็ต
                </button>

                <button
                  type="button"
                  onClick={handleSubmitAdvancedInput}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  <Save className="w-4 h-4" />
                  บันทึกข้อมูล
                </button>
              </div>
            </div>
          </section>

          {/* Notes */}
          <section className={sectionCard}>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Notes for Production
            </h2>

            <div className={contentBox}>
              ชุด Advanced Inputs นี้สามารถต่อยอดไปใช้กับ react-hook-form, validation,
              input mask, datepicker, async search และ file upload API ได้ทันที
              โดยยังรักษาโครงสร้าง UI ให้เหมือนกันทั้งระบบ
            </div>
          </section>  
        </div>
      </div>
    </>
  )
}

export default PageForms

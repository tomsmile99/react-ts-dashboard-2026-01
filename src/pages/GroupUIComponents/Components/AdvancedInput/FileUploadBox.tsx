import { Upload } from "lucide-react";

type FileUploadBoxProps = {
  label: string;
  helperText?: string;
  onChange?: (files: FileList | null) => void;
};

const FileUploadBox = ({
  label,
  helperText,
  onChange,
}: FileUploadBoxProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>

      <label className="flex flex-col items-center justify-center px-6 py-8 text-center transition border border-dashed cursor-pointer rounded-2xl border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-blue-50/40">
        <Upload className="w-8 h-8 mb-3 text-slate-400" />
        <span className="text-sm font-medium text-slate-700">
          คลิกเพื่ออัปโหลดไฟล์
        </span>
        <span className="mt-1 text-xs text-slate-500">
          รองรับ PDF, JPG, PNG, DOCX
        </span>

        <input
          type="file"
          className="hidden"
          onChange={(e) => onChange?.(e.target.files)}
        />
      </label>

      {helperText && <p className="text-xs text-slate-500">{helperText}</p>}
    </div>
  );
};

export default FileUploadBox;
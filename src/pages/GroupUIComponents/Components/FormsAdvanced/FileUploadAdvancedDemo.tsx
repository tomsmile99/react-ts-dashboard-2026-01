import { useState } from "react";
import { FileUploadAdvanced } from "./FileUploadAdvanced";
import type { UploadItem } from "./FileUploadAdvanced";

export default function FileUploadAdvancedDemo() {
  const [files, setFiles] = useState<UploadItem[]>([]);

  return (
    <div className="p-6 bg-white border shadow-sm rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-900">
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
  );
}
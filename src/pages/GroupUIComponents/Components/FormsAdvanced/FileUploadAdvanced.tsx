import { useRef, useState } from "react";
import imageCompression from "browser-image-compression";
import {
  Camera,
  FileText,
  Image as ImageIcon,
  RefreshCcw,
  Upload,
  X,
} from "lucide-react";

type UploadStatus = "pending" | "uploading" | "success" | "error";

type UploadItem = {
  id: string;
  file: File;
  previewUrl?: string;
  progress: number;
  status: UploadStatus;
  error?: string;
};

type FileUploadAdvancedProps = {
  value: UploadItem[];
  onChange: (files: UploadItem[]) => void;
  multiple?: boolean;
  accept?: string;
  maxFiles?: number;
  compressImage?: boolean;
};

export function FileUploadAdvanced({
  value,
  onChange,
  multiple = true,
  accept = "image/*,.pdf,.doc,.docx,.xlsx",
  maxFiles = 10,
  compressImage = true,
}: FileUploadAdvancedProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const cameraRef = useRef<HTMLInputElement | null>(null);
  const [dragging, setDragging] = useState(false);

  const createUploadItem = async (file: File): Promise<UploadItem> => {
    let finalFile = file;

    if (compressImage && file.type.startsWith("image/")) {
      finalFile = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1280,
        useWebWorker: true,
      });
    }

    return {
      id: crypto.randomUUID(),
      file: finalFile,
      previewUrl: finalFile.type.startsWith("image/")
        ? URL.createObjectURL(finalFile)
        : undefined,
      progress: 0,
      status: "pending",
    };
  };

  const addFiles = async (fileList: FileList | null) => {
    if (!fileList) return;

    const incoming = Array.from(fileList).slice(0, maxFiles - value.length);
    const items = await Promise.all(incoming.map(createUploadItem));

    onChange([...value, ...items]);
  };

  const removeFile = (id: string) => {
    const target = value.find((item) => item.id === id);

    if (target?.previewUrl) {
      URL.revokeObjectURL(target.previewUrl);
    }

    onChange(value.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, patch: Partial<UploadItem>) => {
    onChange(value.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  const mockUpload = async (item: UploadItem) => {
    updateItem(item.id, {
      status: "uploading",
      progress: 0,
      error: undefined,
    });

    let progress = 0;

    const timer = window.setInterval(() => {
      progress += Math.floor(Math.random() * 18) + 8;

      if (progress >= 100) {
        progress = 100;
        window.clearInterval(timer);

        const isSuccess = Math.random() > 0.15;

        updateItem(item.id, {
          progress: 100,
          status: isSuccess ? "success" : "error",
          error: isSuccess ? undefined : "Upload failed. Please retry.",
        });

        return;
      }

      updateItem(item.id, {
        progress,
        status: "uploading",
      });
    }, 300);
  };

  const uploadAll = async () => {
    const pendingFiles = value.filter(
      (item) => item.status === "pending" || item.status === "error"
    );

    for (const item of pendingFiles) {
      await mockUpload(item);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  };

  return (
    <div className="space-y-4">
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          addFiles(event.dataTransfer.files);
        }}
        className={`
          cursor-pointer rounded-3xl border-2 border-dashed p-8 text-center transition
          ${
            dragging
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
              : "border-slate-300 hover:border-blue-500 hover:bg-blue-50/50 dark:border-slate-700 dark:hover:bg-slate-800"
          }
        `}
      >
        <Upload size={42} className="mx-auto mb-4 text-slate-400" />

        <h3 className="font-semibold text-slate-900 dark:text-white">
          Drag & Drop Files
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          รองรับรูปภาพ, PDF, เอกสาร และบีบอัดรูปภาพอัตโนมัติ
        </p>

        <input
          ref={inputRef}
          type="file"
          hidden
          multiple={multiple}
          accept={accept}
          onChange={(event) => addFiles(event.target.files)}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700"
        >
          <Upload size={16} />
          Select Files
        </button>

        <button
          type="button"
          onClick={() => cameraRef.current?.click()}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl bg-slate-800 hover:bg-slate-900"
        >
          <Camera size={16} />
          Camera Capture
        </button>

        <button
          type="button"
          onClick={uploadAll}
          disabled={value.length === 0}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Upload Queue
        </button>

        <input
          ref={cameraRef}
          type="file"
          hidden
          accept="image/*"
          capture="environment"
          onChange={(event) => addFiles(event.target.files)}
        />
      </div>

      {value.length > 0 && (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {value.map((item) => {
            const isImage = item.file.type.startsWith("image/");
            const isPdf = item.file.type === "application/pdf";

            return (
              <div
                key={item.id}
                className="overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex gap-4 p-4">
                  <div className="flex items-center justify-center w-20 h-20 overflow-hidden shrink-0 rounded-2xl bg-slate-100 dark:bg-slate-800">
                    {isImage && item.previewUrl ? (
                      <img
                        src={item.previewUrl}
                        alt={item.file.name}
                        className="object-cover w-full h-full"
                      />
                    ) : isPdf ? (
                      <FileText className="text-red-500" size={30} />
                    ) : (
                      <ImageIcon className="text-slate-400" size={30} />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">
                      {item.file.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {(item.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>

                    <div className="h-2 mt-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div
                        className={`
                          h-full rounded-full transition-all
                          ${
                            item.status === "success"
                              ? "bg-emerald-500"
                              : item.status === "error"
                              ? "bg-red-500"
                              : "bg-blue-500"
                          }
                        `}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-2">
                      <p className="text-xs text-slate-500">
                        {item.status === "pending" && "Pending"}
                        {item.status === "uploading" && `Uploading ${item.progress}%`}
                        {item.status === "success" && "Uploaded successfully"}
                        {item.status === "error" && item.error}
                      </p>

                      <div className="flex gap-1">
                        {item.status === "error" && (
                          <button
                            type="button"
                            onClick={() => mockUpload(item)}
                            className="p-2 rounded-lg text-amber-600 hover:bg-amber-50"
                          >
                            <RefreshCcw size={15} />
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => removeFile(item.id)}
                          className="p-2 text-red-500 rounded-lg hover:bg-red-50"
                        >
                          <X size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {isPdf && (
                  <div className="px-4 py-3 text-xs border-t border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800">
                    PDF Thumbnail สามารถเพิ่มด้วย pdfjs-dist ภายหลัง
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export type { UploadItem };
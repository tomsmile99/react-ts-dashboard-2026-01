import { useState } from "react";
import type { KeyboardEvent } from "react";
import { X } from "lucide-react";

type TagInputProps = {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  maxTags?: number;
  disabled?: boolean;
};

export function TagInput({
  value,
  onChange,
  placeholder = "พิมพ์แล้วกด Enter...",
  maxTags = 10,
  disabled = false,
}: TagInputProps) {
  const [inputValue, setInputValue] = useState("");

  const addTag = (tag: string) => {
    const cleanTag = tag.trim();

    if (!cleanTag) return;
    if (value.includes(cleanTag)) return;
    if (value.length >= maxTags) return;

    onChange([...value, cleanTag]);
    setInputValue("");
  };

  const removeTag = (tag: string) => {
    onChange(value.filter((item) => item !== tag));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag(inputValue);
    }

    if (event.key === "Backspace" && !inputValue && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <div
      className={`
        flex min-h-12 w-full flex-wrap items-center gap-2 rounded-2xl border
        border-slate-200 bg-white px-3 py-2 transition
        focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100
        dark:border-slate-700 dark:bg-slate-900 dark:focus-within:ring-blue-900/30
        ${disabled ? "cursor-not-allowed opacity-60" : ""}
      `}
    >
      {value.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-blue-700 rounded-full bg-blue-50 ring-1 ring-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-800"
        >
          {tag}

          {!disabled && (
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="rounded-full p-0.5 hover:bg-blue-100 dark:hover:bg-blue-800"
            >
              <X size={13} />
            </button>
          )}
        </span>
      ))}

      <input
        value={inputValue}
        disabled={disabled || value.length >= maxTags}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={value.length === 0 ? placeholder : ""}
        className="flex-1 text-sm bg-transparent outline-none min-w-32 text-slate-900 placeholder:text-slate-400 disabled:cursor-not-allowed dark:text-white"
      />
    </div>
  );
}
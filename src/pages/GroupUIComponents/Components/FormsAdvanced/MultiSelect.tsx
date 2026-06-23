import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";

export type MultiSelectOption = {
  label: string;
  value: string;
  description?: string;
};

type MultiSelectProps = {
  options: MultiSelectOption[];
  value: MultiSelectOption[];
  onChange: (options: MultiSelectOption[]) => void;
  placeholder?: string;
  disabled?: boolean;
  maxSelected?: number;
  emptyText?: string;
};

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "เลือกข้อมูล...",
  disabled = false,
  maxSelected,
  emptyText = "ไม่พบข้อมูล",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const selectedValues = useMemo(
    () => new Set(value.map((item) => item.value)),
    [value]
  );

  const filteredOptions = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) return options;

    return options.filter((option) => {
      const label = option.label.toLowerCase();
      const description = option.description?.toLowerCase() ?? "";

      return label.includes(searchText) || description.includes(searchText);
    });
  }, [options, query]);

  const isMaxReached =
    typeof maxSelected === "number" && value.length >= maxSelected;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveIndex(0);
  }, [query]);

  const toggleOption = (option: MultiSelectOption) => {
    const isSelected = selectedValues.has(option.value);

    if (isSelected) {
      onChange(value.filter((item) => item.value !== option.value));
      return;
    }

    if (isMaxReached) return;

    onChange([...value, option]);
    setQuery("");
    inputRef.current?.focus();
  };

  const removeOption = (optionValue: string) => {
    onChange(value.filter((item) => item.value !== optionValue));
  };

  const clearAll = () => {
    onChange([]);
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className={`
          flex min-h-12 w-full flex-wrap items-center gap-2 rounded-2xl border
          bg-white px-3 py-2 transition
          focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100
          dark:bg-slate-900 dark:focus-within:ring-blue-900/30
          ${
            disabled
              ? "cursor-not-allowed border-slate-200 opacity-60 dark:border-slate-700"
              : "border-slate-200 dark:border-slate-700"
          }
        `}
        onClick={() => {
          if (!disabled) {
            setOpen(true);
            inputRef.current?.focus();
          }
        }}
      >
        {value.map((item) => (
          <span
            key={item.value}
            className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-blue-700 rounded-full bg-blue-50 ring-1 ring-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-800"
          >
            {item.label}

            {!disabled && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  removeOption(item.value);
                }}
                className="rounded-full p-0.5 hover:bg-blue-100 dark:hover:bg-blue-800"
              >
                <X size={13} />
              </button>
            )}
          </span>
        ))}

        <div className="flex items-center flex-1 gap-2 min-w-32">
          <Search size={16} className="shrink-0 text-slate-400" />

          <input
            ref={inputRef}
            value={query}
            disabled={disabled || isMaxReached}
            placeholder={value.length === 0 ? placeholder : ""}
            onFocus={() => !disabled && setOpen(true)}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpen(true);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setOpen(true);
                setActiveIndex((prev) =>
                  Math.min(prev + 1, filteredOptions.length - 1)
                );
              }

              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((prev) => Math.max(prev - 1, 0));
              }

              if (event.key === "Enter") {
                event.preventDefault();

                const selected = filteredOptions[activeIndex];

                if (selected) {
                  toggleOption(selected);
                }
              }

              if (event.key === "Backspace" && !query && value.length > 0) {
                removeOption(value[value.length - 1].value);
              }

              if (event.key === "Escape") {
                setOpen(false);
                setQuery("");
              }
            }}
            className="flex-1 h-8 min-w-0 text-sm bg-transparent outline-none text-slate-900 placeholder:text-slate-400 disabled:cursor-not-allowed dark:text-white"
          />
        </div>

        {value.length > 0 && !disabled && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              clearAll();
            }}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X size={16} />
          </button>
        )}

        <button
          type="button"
          disabled={disabled}
          onClick={(event) => {
            event.stopPropagation();
            setOpen((prev) => !prev);
            inputRef.current?.focus();
          }}
          className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <ChevronDown
            size={18}
            className={`transition ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {maxSelected && (
        <p className="mt-2 text-xs text-slate-500">
          เลือกแล้ว {value.length}/{maxSelected} รายการ
        </p>
      )}

      {open && !disabled && (
        <div
          className="
            absolute left-0 top-full z-[9999] mt-2 w-full overflow-hidden rounded-2xl
            border border-slate-200 bg-white shadow-xl shadow-slate-200/70
            dark:border-slate-700 dark:bg-slate-900 dark:shadow-none
          "
        >
          <div className="p-2 overflow-y-auto max-h-72">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => {
                const selected = selectedValues.has(option.value);
                const active = activeIndex === index;
                const disabledOption = !selected && isMaxReached;

                return (
                  <button
                    type="button"
                    key={option.value}
                    disabled={disabledOption}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => toggleOption(option)}
                    className={`
                      flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition
                      disabled:cursor-not-allowed disabled:opacity-50
                      ${
                        active
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                      }
                    `}
                  >
                    <span
                      className={`
                        mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
                        ${
                          selected
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-300 dark:border-slate-600"
                        }
                      `}
                    >
                      {selected && <Check size={14} />}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">
                        {option.label}
                      </p>

                      {option.description && (
                        <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                          {option.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="px-4 py-8 text-sm text-center text-slate-500">
                {emptyText}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
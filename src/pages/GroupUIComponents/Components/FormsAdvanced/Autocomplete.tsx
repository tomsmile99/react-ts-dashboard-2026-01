import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";

export type AutocompleteOption = {
  label: string;
  value: string;
  description?: string;
};

type AutocompleteProps = {
  options: AutocompleteOption[];
  value?: AutocompleteOption | null;
  onChange: (option: AutocompleteOption | null) => void;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  emptyText?: string;
};

export function Autocomplete({
  options,
  value,
  onChange,
  placeholder = "ค้นหาข้อมูล...",
  disabled = false,
  clearable = true,
  emptyText = "ไม่พบข้อมูล",
}: AutocompleteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value?.label ?? "");
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const filteredOptions = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) return options;

    return options.filter((option) => {
      const label = option.label.toLowerCase();
      const description = option.description?.toLowerCase() ?? "";

      return label.includes(searchText) || description.includes(searchText);
    });
  }, [options, query]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuery(value?.label ?? "");
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setQuery(value?.label ?? "");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [value]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveIndex(0);
  }, [query]);

  const selectOption = (option: AutocompleteOption) => {
    onChange(option);
    setQuery(option.label);
    setOpen(false);
  };

  const clearValue = () => {
    onChange(null);
    setQuery("");
    setOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className={`
          flex min-h-12 items-center gap-2 rounded-2xl border bg-white px-3
          transition
          focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100
          dark:bg-slate-900 dark:focus-within:ring-blue-900/30
          ${
            disabled
              ? "cursor-not-allowed border-slate-200 opacity-60 dark:border-slate-700"
              : "border-slate-200 dark:border-slate-700"
          }
        `}
      >
        <Search size={18} className="shrink-0 text-slate-400" />

        <input
          ref={inputRef}
          value={query}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={() => !disabled && setOpen(true)}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onKeyDown={(event) => {
            if (!open && event.key !== "Tab") {
              setOpen(true);
            }

            if (event.key === "ArrowDown") {
              event.preventDefault();
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
                selectOption(selected);
              }
            }

            if (event.key === "Escape") {
              setOpen(false);
              setQuery(value?.label ?? "");
            }
          }}
          className="flex-1 h-12 min-w-0 text-sm bg-transparent outline-none text-slate-900 placeholder:text-slate-400 disabled:cursor-not-allowed dark:text-white"
        />

        {clearable && value && !disabled && (
          <button
            type="button"
            onClick={clearValue}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X size={16} />
          </button>
        )}

        <button
          type="button"
          disabled={disabled}
          onClick={() => {
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
                const selected = value?.value === option.value;
                const active = activeIndex === index;

                return (
                  <button
                    type="button"
                    key={option.value}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => selectOption(option)}
                    className={`
                      flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition
                      ${
                        active
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                      }
                    `}
                  >
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

                    {selected && (
                      <Check size={17} className="mt-0.5 shrink-0" />
                    )}
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
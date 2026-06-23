import { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";

type DatePickerProps = {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  clearable?: boolean;
};

const thaiMonths = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];

const weekDays = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDate(date: Date | null) {
  if (!date) return "";

  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function isDateDisabled(date: Date, minDate?: Date, maxDate?: Date) {
  const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (minDate) {
    const min = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate()
    );

    if (target < min) return true;
  }

  if (maxDate) {
    const max = new Date(
      maxDate.getFullYear(),
      maxDate.getMonth(),
      maxDate.getDate()
    );

    if (target > max) return true;
  }

  return false;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "เลือกวันที่...",
  disabled = false,
  minDate,
  maxDate,
  clearable = true,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(
    value ? new Date(value.getFullYear(), value.getMonth(), 1) : new Date()
  );

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [placement, setPlacement] = useState<"bottom" | "top">("bottom");

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const previousMonthDays = new Date(year, month, 0).getDate();

    const days: {
      date: Date;
      currentMonth: boolean;
    }[] = [];

    for (let i = startDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, previousMonthDays - i),
        currentMonth: false,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: new Date(year, month, day),
        currentMonth: true,
      });
    }

    while (days.length % 7 !== 0) {
      const lastDate = days[days.length - 1].date;
      days.push({
        date: new Date(
          lastDate.getFullYear(),
          lastDate.getMonth(),
          lastDate.getDate() + 1
        ),
        currentMonth: false,
      });
    }

    return days;
  }, [currentMonth]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!open || !wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // const panelHeight = 180;
    // const gap = 180;
    const actualHeight =
    panelRef.current?.offsetHeight ?? 420;
    

    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (
      spaceBelow < actualHeight + 50 &&
      spaceAbove > actualHeight
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlacement("top");
    }

    // if (spaceBelow < panelHeight + gap && spaceAbove > panelHeight + gap) {
    //   // eslint-disable-next-line react-hooks/set-state-in-effect
    //   setPlacement("top");
    // } else {
    //   setPlacement("bottom");
    // }
  }, [open]);

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const selectDate = (date: Date) => {
    if (isDateDisabled(date, minDate, maxDate)) return;

    onChange(date);
    setOpen(false);
  };

  const selectToday = () => {
    const today = new Date();

    if (isDateDisabled(today, minDate, maxDate)) return;

    onChange(today);
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    setOpen(false);
  };

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 11 }, (_, index) => {
    return currentYear - 10 + index;
  });

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className={`
          flex h-12 items-center gap-2 rounded-2xl border bg-white px-3 transition
          focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100
          dark:bg-slate-900 dark:focus-within:ring-blue-900/30
          ${
            disabled
              ? "cursor-not-allowed border-slate-200 opacity-60 dark:border-slate-700"
              : "border-slate-200 dark:border-slate-700"
          }
        `}
      >
        <Calendar size={18} className="shrink-0 text-slate-400" />

        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((prev) => !prev)}
          className="flex-1 text-sm text-left outline-none text-slate-900 disabled:cursor-not-allowed dark:text-white"
        >
          {value ? (
            formatDate(value)
          ) : (
            <span className="text-slate-400">{placeholder}</span>
          )}
        </button>

        <div className="flex items-center gap-2">
          <select
            value={currentMonth.getMonth()}
            onChange={(event) => {
              const month = Number(event.target.value);
              setCurrentMonth(
                new Date(currentMonth.getFullYear(), month, 1)
              );
            }}
            className="px-3 py-2 text-sm font-semibold bg-white border outline-none rounded-xl border-slate-200 text-slate-900 hover:bg-slate-50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            {thaiMonths.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>

          <select
            value={currentMonth.getFullYear()}
            onChange={(event) => {
              const year = Number(event.target.value);
              setCurrentMonth(
                new Date(year, currentMonth.getMonth(), 1)
              );
            }}
            className="px-3 py-2 text-sm font-semibold bg-white border outline-none rounded-xl border-slate-200 text-slate-900 hover:bg-slate-50 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year + 543}
              </option>
            ))}
          </select>
        </div>

        {clearable && value && !disabled && (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {open && !disabled && (
        <div
          ref={panelRef}
          className={`
            absolute left-0 z-9999 w-full max-w-sm overflow-hidden
            rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70
            dark:border-slate-700 dark:bg-slate-900 dark:shadow-none
            ${placement === "top" ? "bottom-full mb-2" : "top-full mt-2"}
          `}
        >
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={goToPreviousMonth}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="text-center">
              <p className="font-semibold text-slate-900 dark:text-white">
                {thaiMonths[currentMonth.getMonth()]}
              </p>
              <p className="text-sm text-slate-500">
                {currentMonth.getFullYear() + 543}
              </p>
            </div>

            <button
              type="button"
              onClick={goToNextMonth}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="py-2 text-xs font-semibold text-center text-slate-500"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((item) => {
              const today = isSameDay(item.date, new Date());
              const selected = value ? isSameDay(item.date, value) : false;
              const blocked = isDateDisabled(item.date, minDate, maxDate);

              return (
                <button
                  key={item.date.toISOString()}
                  type="button"
                  disabled={blocked}
                  onClick={() => selectDate(item.date)}
                  className={`
                    flex h-10 items-center justify-center rounded-xl text-sm transition
                    disabled:cursor-not-allowed disabled:opacity-30
                    ${
                      selected
                        ? "bg-blue-600 font-semibold text-white shadow-sm"
                        : today
                        ? "bg-blue-50 font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : item.currentMonth
                        ? "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                        : "text-slate-300 hover:bg-slate-50 dark:text-slate-600 dark:hover:bg-slate-800"
                    }
                  `}
                >
                  {item.date.getDate()}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={selectToday}
              className="px-3 py-2 text-sm font-semibold text-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30"
            >
              วันนี้
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm font-semibold rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
import { useEffect, useMemo, useRef, useState } from "react";
import { Clock, X, ChevronDown } from "lucide-react";

type TimeValue = {
  hour: number;
  minute: number;
};

type TimePickerProps = {
  value: TimeValue | null;
  onChange: (time: TimeValue | null) => void;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  minuteStep?: number;
  minTime?: TimeValue;
  maxTime?: TimeValue;
  disabledPastTime?: boolean;
};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function toMinutes(time: TimeValue) {
  return time.hour * 60 + time.minute;
}

function formatTime(time: TimeValue | null) {
  if (!time) return "";
  return `${pad(time.hour)}:${pad(time.minute)}`;
}

function isTimeDisabled(
  time: TimeValue,
  minTime?: TimeValue,
  maxTime?: TimeValue
) {
  const target = toMinutes(time);

  if (minTime && target < toMinutes(minTime)) return true;
  if (maxTime && target > toMinutes(maxTime)) return true;

  return false;
}

export type { TimeValue };

export function TimePicker({
  value,
  onChange,
  placeholder = "เลือกเวลา...",
  disabled = false,
  clearable = true,
  minuteStep = 5,
  minTime,
  maxTime,
  disabledPastTime = false,
}: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<"bottom" | "top">("bottom");

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const now = new Date();

  const finalMinTime = disabledPastTime
    ? {
        hour: now.getHours(),
        minute: Math.ceil(now.getMinutes() / minuteStep) * minuteStep,
      }
    : minTime;

  const hours = useMemo(() => {
    return Array.from({ length: 24 }, (_, index) => index);
  }, []);

  const minutes = useMemo(() => {
    return Array.from(
      { length: Math.floor(60 / minuteStep) },
      (_, index) => index * minuteStep
    );
  }, [minuteStep]);

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
    const actualHeight = panelRef.current?.offsetHeight ?? 320;

    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (spaceBelow < actualHeight + 80 && spaceAbove > actualHeight) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlacement("top");
    } else {
      setPlacement("bottom");
    }
  }, [open]);

  const selectHour = (hour: number) => {
    const nextTime = {
      hour,
      minute: value?.minute ?? 0,
    };

    if (isTimeDisabled(nextTime, finalMinTime, maxTime)) return;

    onChange(nextTime);
  };

  const selectMinute = (minute: number) => {
    const nextTime = {
      hour: value?.hour ?? new Date().getHours(),
      minute,
    };

    if (isTimeDisabled(nextTime, finalMinTime, maxTime)) return;

    onChange(nextTime);
    setOpen(false);
  };

  const selectNow = () => {
    const current = {
      hour: now.getHours(),
      minute: Math.ceil(now.getMinutes() / minuteStep) * minuteStep,
    };

    if (current.minute >= 60) {
      current.hour += 1;
      current.minute = 0;
    }

    if (isTimeDisabled(current, finalMinTime, maxTime)) return;

    onChange(current);
    setOpen(false);
  };

  const addMinutes = (amount: number) => {
    const base = new Date();
    base.setMinutes(base.getMinutes() + amount);

    const next = {
      hour: base.getHours(),
      minute: Math.ceil(base.getMinutes() / minuteStep) * minuteStep,
    };

    if (next.minute >= 60) {
      next.hour += 1;
      next.minute = 0;
    }

    if (next.hour >= 24) {
      next.hour = 23;
      next.minute = 59;
    }

    if (isTimeDisabled(next, finalMinTime, maxTime)) return;

    onChange(next);
    setOpen(false);
  };

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
        <Clock size={18} className="shrink-0 text-slate-400" />

        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((prev) => !prev)}
          className="flex-1 text-sm text-left outline-none text-slate-900 disabled:cursor-not-allowed dark:text-white"
        >
          {value ? (
            formatTime(value)
          ) : (
            <span className="text-slate-400">{placeholder}</span>
          )}
        </button>

        {clearable && value && !disabled && (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X size={16} />
          </button>
        )}

        <ChevronDown
          size={18}
          className={`text-slate-400 transition ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && !disabled && (
        <div
          ref={panelRef}
          className={`
            absolute left-0 z-[9999] w-full max-w-sm overflow-hidden rounded-3xl
            border border-slate-200 bg-white shadow-xl shadow-slate-200/70
            dark:border-slate-700 dark:bg-slate-900 dark:shadow-none
            ${placement === "top" ? "bottom-full mb-2" : "top-full mt-2"}
          `}
        >
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              เลือกเวลา
            </p>
            <p className="mt-1 text-xs text-slate-500">
              รูปแบบ 24 ชั่วโมง / เลือกทีละ {minuteStep} นาที
            </p>
          </div>

          <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700">
            <div className="p-2 overflow-y-auto max-h-64">
              <p className="px-3 py-2 text-xs font-semibold text-slate-400">
                ชั่วโมง
              </p>

              {hours.map((hour) => {
                const selected = value?.hour === hour;
                const blocked = minutes.every((minute) =>
                  isTimeDisabled(
                    { hour, minute },
                    finalMinTime,
                    maxTime
                  )
                );

                return (
                  <button
                    key={hour}
                    type="button"
                    disabled={blocked}
                    onClick={() => selectHour(hour)}
                    className={`
                      flex w-full items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold transition
                      disabled:cursor-not-allowed disabled:opacity-30
                      ${
                        selected
                          ? "bg-blue-600 text-white"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                      }
                    `}
                  >
                    {pad(hour)}
                  </button>
                );
              })}
            </div>

            <div className="p-2 overflow-y-auto max-h-64">
              <p className="px-3 py-2 text-xs font-semibold text-slate-400">
                นาที
              </p>

              {minutes.map((minute) => {
                const hour = value?.hour ?? now.getHours();
                const selected = value?.minute === minute;
                const blocked = isTimeDisabled(
                  { hour, minute },
                  finalMinTime,
                  maxTime
                );

                return (
                  <button
                    key={minute}
                    type="button"
                    disabled={blocked}
                    onClick={() => selectMinute(minute)}
                    className={`
                      flex w-full items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold transition
                      disabled:cursor-not-allowed disabled:opacity-30
                      ${
                        selected
                          ? "bg-blue-600 text-white"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                      }
                    `}
                  >
                    {pad(minute)}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 p-4 border-t border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={selectNow}
              className="px-3 py-2 text-xs font-semibold text-blue-700 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300"
            >
              ตอนนี้
            </button>

            <button
              type="button"
              onClick={() => addMinutes(15)}
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
            >
              +15 นาที
            </button>

            <button
              type="button"
              onClick={() => addMinutes(30)}
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
            >
              +30 นาที
            </button>

            <button
              type="button"
              onClick={() => addMinutes(60)}
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
            >
              +1 ชั่วโมง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
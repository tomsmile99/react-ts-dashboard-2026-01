import { useEffect, useMemo, useRef,useCallback } from "react";



type OtpInputProps = {
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
  length?: number;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  isLoading?: boolean;
  autoFocus?: boolean;
  autoSubmit?: boolean;
  allowAlphanumeric?: boolean;
  onComplete?: (otp: string) => void;
  className?: string;
};

const OtpInput = ({
  label,
  value,
  onChange,
  length = 6,
  helperText,
  error,
  disabled = false,
  isLoading = false,
  autoFocus = false,
  autoSubmit = false,
  allowAlphanumeric = false,
  onComplete,
  className = "",
}: OtpInputProps) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const hasTriggeredCompleteRef = useRef(false);

  const normalizedValue = useMemo(() => {
    return Array.from({ length }, (_, index) => value[index] || "");
  }, [value, length]);

  const isComplete = normalizedValue.every((item) => item !== "");
  const otpString = normalizedValue.join("");

  const sanitizeInput = (input: string) => {
    if (allowAlphanumeric) {
      return input.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    }
    return input.replace(/\D/g, "");
  };

  

  const emitChange = (newValue: string[]) => {
    const normalized = Array.from(
      { length },
      (_, index) => newValue[index] || ""
    );
    onChange(normalized);
  };

  const focusInput = useCallback((index: number) => {
    if (index >= 0 && index < length) {
      window.requestAnimationFrame(() => {
        inputRefs.current[index]?.focus();
        inputRefs.current[index]?.select();
      });
    }
  }, [length]);
  
  useEffect(() => {
    if (autoFocus && !disabled && !isLoading) {
      focusInput(0);
    }
  }, [autoFocus, disabled, isLoading, focusInput]);


  useEffect(() => {
    if (!onComplete) return;

    if (isComplete && !hasTriggeredCompleteRef.current) {
      hasTriggeredCompleteRef.current = true;

      if (autoSubmit) {
        // auto ยิงเลย
        onComplete(otpString);
      }
    }

    if (!isComplete) {
      hasTriggeredCompleteRef.current = false;
    }
  }, [isComplete, otpString, onComplete, autoSubmit]);

  const handleChange = (index: number, rawValue: string) => {
    if (disabled || isLoading) return;

    const cleaned = sanitizeInput(rawValue);

    if (!cleaned) {
      const newValue = [...normalizedValue];
      newValue[index] = "";
      emitChange(newValue);
      return;
    }

    if (cleaned.length === 1) {
      const newValue = [...normalizedValue];
      newValue[index] = cleaned;
      emitChange(newValue);

      if (index < length - 1) {
        focusInput(index + 1);
      }

      return;
    }

    const chars = cleaned.slice(0, length - index).split("");
    const newValue = [...normalizedValue];

    chars.forEach((char, i) => {
      newValue[index + i] = char;
    });

    emitChange(newValue);

    const nextIndex = Math.min(index + chars.length, length - 1);
    focusInput(nextIndex);
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (disabled || isLoading) return;

    const key = event.key;

    if (key === "Backspace") {
      event.preventDefault();

      const newValue = [...normalizedValue];

      if (newValue[index]) {
        newValue[index] = "";
        emitChange(newValue);
      } else if (index > 0) {
        newValue[index - 1] = "";
        emitChange(newValue);
        focusInput(index - 1);
      }

      return;
    }

    if (key === "Delete") {
      event.preventDefault();
      const newValue = [...normalizedValue];
      newValue[index] = "";
      emitChange(newValue);
      return;
    }

    if (key === "ArrowLeft") {
      event.preventDefault();
      focusInput(index - 1);
      return;
    }

    if (key === "ArrowRight") {
      event.preventDefault();
      focusInput(index + 1);
      return;
    }

    if (!allowAlphanumeric && key === " ") {
      event.preventDefault();
    }
  };

  const handlePaste = (
    index: number,
    event: React.ClipboardEvent<HTMLInputElement>
  ) => {
    if (disabled || isLoading) return;

    event.preventDefault();

    const pastedText = event.clipboardData.getData("text");
    const cleaned = sanitizeInput(pastedText);

    if (!cleaned) return;

    const chars = cleaned.slice(0, length - index).split("");
    const newValue = [...normalizedValue];

    chars.forEach((char, i) => {
      newValue[index + i] = char;
    });

    emitChange(newValue);

    const nextIndex = Math.min(index + chars.length, length - 1);
    focusInput(nextIndex);
  };

  const handleFocus = (index: number) => {
    if (disabled || isLoading) return;

    const firstEmptyIndex = normalizedValue.findIndex((item) => item === "");

    if (firstEmptyIndex !== -1 && index > firstEmptyIndex) {
      focusInput(firstEmptyIndex);
    }
  };

  
  
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-sm font-medium text-slate-700">{label}</label>

      <div className="flex flex-wrap gap-2">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode={allowAlphanumeric ? "text" : "numeric"}
            autoComplete={index === 0 ? "one-time-code" : "off"}
            enterKeyHint="done"
            disabled={disabled || isLoading}
            maxLength={allowAlphanumeric ? length : length}
            value={normalizedValue[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={(e) => handlePaste(index, e)}
            onFocus={() => handleFocus(index)}
            className={`h-12 w-12 rounded-xl border text-center text-base font-semibold outline-none transition ${
              error
                ? "border-red-300 bg-red-50 text-slate-800 focus:border-red-400"
                : "border-slate-200 bg-white text-slate-800 focus:border-blue-400"
            } ${
              disabled || isLoading
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : ""
            }`}
          />
        ))}
      </div>

      {isLoading && (
        <p className="text-xs text-blue-500">กำลังตรวจสอบรหัส OTP...</p>
      )}

      {!isLoading && error ? (
        <p className="text-xs text-red-500">{error}</p>
      ) : !isLoading && helperText ? (
        <p className="text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
};

export default OtpInput;
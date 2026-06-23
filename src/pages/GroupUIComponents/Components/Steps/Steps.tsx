import { Check } from "lucide-react";
import type { ReactNode } from "react";

export type StepStatus = "completed" | "current" | "upcoming" | "error";

export type StepItem = {
  title: string;
  description?: string;
  icon?: ReactNode;
  status?: StepStatus;
};

type StepsProps = {
  steps: StepItem[];
  currentStep: number;
  onStepClick?: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  allowClickCompleted?: boolean;
  className?: string;
};

const Steps = ({
  steps,
  currentStep,
  onStepClick,
  orientation = "horizontal",
  allowClickCompleted = true,
  className = "",
}: StepsProps) => {
  const getStatus = (index: number): StepStatus => {
    if (steps[index].status) return steps[index].status as StepStatus;
    if (index < currentStep) return "completed";
    if (index === currentStep) return "current";
    return "upcoming";
  };

  const canClick = (index: number) => {
    if (!onStepClick) return false;
    if (index === currentStep) return false;
    if (allowClickCompleted && index < currentStep) return true;
    return false;
  };

  if (orientation === "vertical") {
    return (
      <div className={`space-y-0 ${className}`}>
        {steps.map((step, index) => {
          const status = getStatus(index);
          const isLast = index === steps.length - 1;
          const clickable = canClick(index);

          return (
            <div key={step.title} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  disabled={!clickable}
                  onClick={() => clickable && onStepClick?.(index)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    status === "completed"
                      ? "border-blue-500 bg-blue-500 text-white"
                      : status === "current"
                      ? "border-blue-500 bg-white text-blue-600 ring-4 ring-blue-50"
                      : status === "error"
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-slate-200 bg-white text-slate-400"
                  } ${clickable ? "cursor-pointer hover:scale-105" : ""}`}
                >
                  {status === "completed" ? (
                    <Check className="w-5 h-5" />
                  ) : step.icon ? (
                    step.icon
                  ) : (
                    index + 1
                  )}
                </button>

                {!isLast && (
                  <div
                    className={`h-12 w-px ${
                      status === "completed" ? "bg-blue-500" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>

              <div className="pb-8">
                <p
                  className={`text-sm font-semibold ${
                    status === "current"
                      ? "text-blue-700"
                      : status === "completed"
                      ? "text-slate-800"
                      : status === "error"
                      ? "text-red-600"
                      : "text-slate-400"
                  }`}
                >
                  {step.title}
                </p>

                {step.description && (
                  <p className="mt-1 text-sm text-slate-500">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start">
        {steps.map((step, index) => {
          const status = getStatus(index);
          const isLast = index === steps.length - 1;
          const clickable = canClick(index);

          return (
            <div key={step.title} className="flex items-start flex-1">
              <div className="flex flex-col items-center text-center">
                <button
                  type="button"
                  disabled={!clickable}
                  onClick={() => clickable && onStepClick?.(index)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    status === "completed"
                      ? "border-blue-500 bg-blue-500 text-white"
                      : status === "current"
                      ? "border-blue-500 bg-white text-blue-600 ring-4 ring-blue-50"
                      : status === "error"
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-slate-200 bg-white text-slate-400"
                  } ${clickable ? "cursor-pointer hover:scale-105" : ""}`}
                >
                  {status === "completed" ? (
                    <Check className="w-5 h-5" />
                  ) : step.icon ? (
                    step.icon
                  ) : (
                    index + 1
                  )}
                </button>

                <div className="mt-3 max-w-[140px]">
                  <p
                    className={`text-sm font-semibold ${
                      status === "current"
                        ? "text-blue-700"
                        : status === "completed"
                        ? "text-slate-800"
                        : status === "error"
                        ? "text-red-600"
                        : "text-slate-400"
                    }`}
                  >
                    {step.title}
                  </p>

                  {step.description && (
                    <p className="hidden mt-1 text-xs text-slate-500 sm:block">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {!isLast && (
                <div
                  className={`mt-5 h-px flex-1 ${
                    status === "completed" ? "bg-blue-500" : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
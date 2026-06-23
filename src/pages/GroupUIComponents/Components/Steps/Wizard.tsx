import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import Steps, { type StepItem } from "./Steps";

type WizardProps = {
  steps: StepItem[];
  currentStep: number;
  children: ReactNode;
  onNext: () => void;
  onPrev: () => void;
  onFinish?: () => void;
  onStepClick?: (index: number) => void;
  nextText?: string;
  prevText?: string;
  finishText?: string;
  isNextDisabled?: boolean;
  isPrevDisabled?: boolean;
  orientation?: "horizontal" | "vertical";
};

const Wizard = ({
  steps,
  currentStep,
  children,
  onNext,
  onPrev,
  onFinish,
  onStepClick,
  nextText = "Next",
  prevText = "Back",
  finishText = "Finish",
  isNextDisabled = false,
  isPrevDisabled = false,
  orientation = "horizontal",
}: WizardProps) => {
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
      <Steps
        steps={steps}
        currentStep={currentStep}
        onStepClick={onStepClick}
        orientation={orientation}
      />

      <div className="p-5 mt-6 border rounded-2xl border-slate-200 bg-slate-50">
        {children}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-6 border-t border-slate-200">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentStep === 0 || isPrevDisabled}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" />
          {prevText}
        </button>

        {isLastStep ? (
          <button
            type="button"
            onClick={onFinish}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            <Check className="w-4 h-4" />
            {finishText}
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={isNextDisabled}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {nextText}
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Wizard;
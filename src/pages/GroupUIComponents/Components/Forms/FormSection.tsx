import type { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const FormSection = ({ title, description, children }: FormSectionProps) => {
  return (
    <section className="p-5 bg-white border shadow-sm rounded-2xl border-slate-200">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-slate-800">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </div>

      {children}
    </section>
  );
};

export default FormSection;
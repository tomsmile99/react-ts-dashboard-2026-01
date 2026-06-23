import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumb?: ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const Header = ({
  title,
  description,
  breadcrumb,
  icon,
  badge,
  actions,
  children,
  className = "",
}: PageHeaderProps) => {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}
    >
      {breadcrumb && <div className="mb-3">{breadcrumb}</div>}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            {icon && (
              <div className="flex items-center justify-center text-blue-600 bg-blue-100 h-11 w-11 rounded-2xl">
                {icon}
              </div>
            )}

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-semibold truncate text-slate-800 sm:text-2xl">
                  {title}
                </h1>
                {badge}
              </div>

              {description && (
                <p className="max-w-3xl mt-1 text-sm text-slate-500">
                  {description}
                </p>
              )}
            </div>
          </div>

          {children && <div className="mt-4">{children}</div>}
        </div>

        {actions && (
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
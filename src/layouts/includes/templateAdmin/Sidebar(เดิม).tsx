import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type SidebarProps = {
  collapsed: boolean;
};

type SubMenuItem = {
  name: string;
  path: string;
};

type MenuItem = {
  name: string;
  path?: string;
  children?: SubMenuItem[];
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", path: "/Admin/DashBoard" },
  {
    name: "จัดการระบบ",
    children: [
      { name: "Users", path: "/Admin/Users" },
      { name: "Roles", path: "/Admin/Roles" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
  {
    name: "รายงาน",
    children: [
      { name: "Reports", path: "/Admin/Reports" },
      { name: "Monthly", path: "/Admin/Reports/Monthly" },
    ],
  },
];

const Sidebar = ({ collapsed }: SidebarProps) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const currentOpen: Record<string, boolean> = {};

    menuItems.forEach((item) => {
      if (item.children?.some((child) => location.pathname.startsWith(child.path))) {
        currentOpen[item.name] = true;
      }
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenMenus((prev) => ({ ...prev, ...currentOpen }));
  }, [location.pathname]);

  const toggleMenu = (menuName: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <aside
      className={`hidden min-h-screen flex-col border-r border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950 lg:flex transition-all duration-300 ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      <div className="px-5 py-5 dark:border-slate-800">
        {collapsed ? (
          <div className="flex justify-center">
            <div className="flex items-center justify-center text-sm font-bold text-white bg-blue-600 shadow-md h-11 w-11 rounded-2xl">
              S
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 text-base font-bold text-white bg-blue-600 shadow-md rounded-2xl">
              S
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                SAK Dashboard
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                ระบบบริหารจัดการข้อมูล
              </p>
            </div>
          </div>
        )}
      </div>
      <nav className="flex-1 px-4 py-5 space-y-3 sidebar-scroll">
        {menuItems.map((item) => {
          if (!item.children) {
            return (
              <NavLink
                key={item.path}
                to={item.path!}
                className={({ isActive }) =>
                  `group flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    collapsed ? "justify-center" : "justify-start"
                  } ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-none"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                  }`
                }
              >
                <span className="truncate">{collapsed ? item.name.charAt(0) : item.name}</span>
              </NavLink>
            );
          }

          const isParentActive = item.children.some((child) =>
            location.pathname.startsWith(child.path)
          );

          return (
            <div key={item.name} className="space-y-2">
              <button
                type="button"
                onClick={() => toggleMenu(item.name)}
                className={`flex w-full items-center rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  collapsed ? "justify-center" : "justify-between"
                } ${
                  isParentActive
                    ? "bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                }`}
              >
                <span className="truncate">{collapsed ? item.name.charAt(0) : item.name}</span>
                {!collapsed && (
                  <span
                    className={`text-xs transition-transform duration-200 ${
                      openMenus[item.name] ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                )}
              </button>
              {!collapsed && openMenus[item.name] && (
                <div className="p-2 mt-2 space-y-1 rounded-xl bg-slate-50 dark:bg-slate-900">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-sm ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-800"
                        }`
                      }
                    >
                      {child.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-900">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              ระบบพร้อมใช้งาน
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">
              Admin Panel v1.0
            </p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
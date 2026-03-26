import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  LayoutDashboard,
  UserCog,
  Users,
  ShieldCheck,
  KeyRound,
  FileText,
  CalendarDays,
  ChevronDown,
  Circle
} from "lucide-react"

type SidebarProps = {
  collapsed: boolean;
};

type SubMenuItem = {
  name: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type MenuItem = {
  name: string;
  path?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: SubMenuItem[];
};

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    path: "/Admin/DashBoard",
    icon: LayoutDashboard,
  },
  {
    name: "จัดการระบบ",
    icon: UserCog,
    children: [
      { name: "Users", path: "/Admin/Users", icon: Users },
      { name: "Roles", path: "/Admin/Roles", icon: ShieldCheck },
      { name: "Permissions", path: "/Admin/Permissions", icon: KeyRound },
    ],
  },
  {
    name: "รายงาน",
    icon: FileText,
    children: [
      { name: "Reports", path: "/Admin/Reports", icon: FileText },
      { name: "Monthly", path: "/Admin/Reports/Monthly", icon: CalendarDays },
    ],
  },
];

const Sidebar = ({ collapsed }: SidebarProps) => {
  const location = useLocation();

  // เก็บเฉพาะสถานะเปิด/ปิดจากการคลิกของ user
  const [manualOpen, setManualOpen] = useState<Record<string, boolean>>({});

  const routeOpenMenus = menuItems.reduce((acc, item) => {
    if (item.children?.some((child) => location.pathname.startsWith(child.path))) {
      acc[item.name] = true;
    }
    return acc;
  }, {} as Record<string, boolean>);

  const isMenuOpen = (item: MenuItem) => {
    return manualOpen[item.name] ?? routeOpenMenus[item.name] ?? false;
  };

  const toggleMenu = (menuName: string) => {
    setManualOpen((prev) => ({
      ...prev,
      [menuName]: !isMenuOpen({ name: menuName, children: menuItems.find(i => i.name === menuName)?.children }),
    }));
  };

  const handleNavigate = () => {
    setManualOpen({});
  }

  // เช็กว่า path ปัจจุบันอยู่ใน submenu ของ menu นี้หรือไม่
  const isParentActive = (item: MenuItem) => {
    return item.children?.some((child) =>
      location.pathname.startsWith(child.path)
    ) ?? false;
  };

  return (
    <aside
      className={`hidden min-h-screen flex-col border-r border-slate-200 bg-white text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-white lg:flex transition-all duration-300 ${
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

      <nav className="flex-1 px-2 py-3 overflow-y-auto sidebar-scroll">
        <div className="space-y-2">
          {menuItems.map((item) => {
            // ===== เมนูธรรมดา =====
            if (!item.children) {

              const Icon = item.icon

              return (
                <NavLink
                  key={item.path}
                  to={item.path!}
                  onClick={handleNavigate}
                  className={({ isActive }) =>
                    `flex items-center rounded-2xl px-3 py-2 text-sm font-medium transition cursor-pointer ${
                      collapsed ? "justify-center" : "justify-start"
                    } ${
                      isActive
                        ? "bg-blue-500 text-white shadow-sm"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  {Icon && (
                    <Icon className="w-4 h-4 mr-1 transition shrink-0 group-hover:scale-105" />
                  )} <span>{collapsed ? item.name.charAt(0) : item.name}</span>
                </NavLink>
              );
            }

            // ===== เมนูที่มี submenu =====
            const parentActive = isParentActive(item);
            const menuOpen = isMenuOpen(item);
            const ParentIcon = item.icon;

            return (
              <div key={item.name} className="space-y-1">
                <button
                  type="button"
                  onClick={() => toggleMenu(item.name)}
                  className={`cursor-pointer group flex w-full items-center rounded-2xl px-3 py-1.5 text-sm font-medium transition ${
                    collapsed ? "justify-center" : "justify-between"
                  } ${
                    parentActive
                      ? "bg-blue-500 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>
                    {ParentIcon && (
                      <ParentIcon className="w-4 h-4 transition shrink-0 group-hover:scale-105" />
                    )}

                    {!collapsed && <span className="truncate">{item.name}</span>}
                  </div>

                  {!collapsed && (
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        menuOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {!collapsed && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      menuOpen
                        ? "mt-1 max-h-96 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-1"
                    }`}
                  >
                    <div className="space-y-1">
                      {item.children.map((child) => {
                        const childActive = location.pathname === child.path;
                        const ChildIcon = child.icon;

                        return (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={handleNavigate}
                            className="flex items-center gap-3 px-4 py-1.5 text-sm transition group rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
                          >
                            {ChildIcon ? (
                              <ChildIcon
                                className={`h-4 w-4 shrink-0 ${
                                  childActive
                                    ? "text-blue-500"
                                    : "text-slate-500 dark:text-slate-400"
                                }`}
                              />
                            ) : (
                              <Circle
                                className={`h-3.5 w-3.5 shrink-0 ${
                                  childActive
                                    ? "fill-blue-500 text-blue-500"
                                    : "text-slate-400"
                                }`}
                              />
                            )}

                            <span
                              className={`font-medium ${
                                childActive
                                  ? "text-blue-500"
                                  : "text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {child.name}
                            </span>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
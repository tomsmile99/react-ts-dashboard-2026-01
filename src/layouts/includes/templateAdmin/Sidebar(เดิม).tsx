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
  Circle,
  X,
} from "lucide-react";

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  { name: "Dashboard", path: "/Admin/DashBoard", icon: LayoutDashboard },
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

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }: SidebarProps) => {
  const location = useLocation();
  const [manualOpen, setManualOpen] = useState<Record<string, boolean>>({});

  // useEffect(() => {
  //   setMobileOpen(false);
  // }, [location.pathname, setMobileOpen]);

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
    setManualOpen((prev) => {
      const current =
        prev[menuName] ??
        routeOpenMenus[menuName] ??
        false;

      return {
        ...prev,
        [menuName]: !current,
      };
    });
  };

  const handleNavigate = () => {
    setManualOpen({});
    setMobileOpen(false);
  };

  const isParentActive = (item: MenuItem) => {
    return item.children?.some((child) => location.pathname.startsWith(child.path)) ?? false;
  };

  return (
    <>
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-900/40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen flex-col bg-white text-slate-800 dark:bg-slate-900 dark:text-white transition-all duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0 ${
          collapsed ? "lg:w-24" : "lg:w-58"
        } ${
          mobileOpen ? "translate-x-0 w-72" : "-translate-x-full w-72"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 lg:hidden">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-blue-400 bg-blue-100 shadow-md rounded-2xl">
              <span className="text-xl">S</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                SAK Dashboard
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                ระบบบริหารจัดการข้อมูล
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="hidden px-4 py-3 lg:block">
          {collapsed ? (
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-12 h-12 text-sm font-bold text-blue-400 bg-blue-100 shadow-md rounded-2xl">
                <span className="text-2xl">S</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 text-base font-bold text-blue-400 bg-blue-100 shadow-md rounded-2xl">
                <span className="text-2xl">S</span>
              </div>

              <div>
                <h3 className="flex justify-start text-sm font-bold text-slate-800 dark:text-white">
                  SAK Dashboard
                </h3>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-white justify-start flex">
                  ระบบบริหารจัดการข้อมูล
                </p>
                <hr></hr>
              </div>
            </div>
          )}
        </div>

        <nav className="flex-1 min-h-0 px-2 py-3 overflow-y-auto sidebar-scroll">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const showText = !collapsed || mobileOpen;
              const showChevron = showText;

              if (!item.children) {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path!}
                    onClick={handleNavigate}
                    title={!showText ? item.name : ""}
                    className={({ isActive }) =>
                      showText
                        ? `group flex items-center rounded-2xl px-3 py-3 text-sm font-medium transition cursor-pointer ${
                            isActive
                              ? "text-blue-400 bg-blue-100 shadow-sm"
                              : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                          }`
                        : "group flex items-center justify-center rounded-2xl px-3 py-3 text-sm font-medium transition cursor-pointer"
                    }
                  >
                    {showText ? (
                      <>
                        {Icon && <Icon className="w-5 h-5 mr-2 transition shrink-0" />}
                        <span>{item.name}</span>
                      </>
                    ) : (
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-2xl transition ${
                          location.pathname === item.path
                            ? "bg-blue-100 text-blue-400 shadow-sm"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        {Icon && <Icon className="w-5 h-5 transition shrink-0" />}
                      </div>
                    )}
                  </NavLink>
                );
              }

              const parentActive = isParentActive(item);
              const menuOpen = isMenuOpen(item);
              const ParentIcon = item.icon;

              return (
                <div key={item.name} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => {
                      if (!showText) return;
                      toggleMenu(item.name);
                    }}
                    title={!showText ? item.name : ""}
                    className={`cursor-pointer group flex w-full items-center rounded-2xl px-3 py-3 text-sm font-medium transition ${
                      showText ? "justify-between" : "justify-center"
                    } ${
                      parentActive
                        ? "text-blue-400 bg-blue-100 shadow-sm"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`}
                  >
                    <div className={`flex items-center ${showText ? "gap-3" : "w-full justify-center"}`}>
                      {ParentIcon && (
                        <ParentIcon className="w-5 h-5 transition shrink-0 group-hover:scale-105" />
                      )}

                      {showText && <span className="truncate">{item.name}</span>}
                    </div>

                    {showChevron && (
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                          menuOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {showText && (
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
                              className="flex items-center gap-3 px-4 py-2 text-sm transition group rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
                            >
                              {ChildIcon ? (
                                <ChildIcon
                                  className={`h-4 w-4 shrink-0 ${
                                    childActive
                                      ? "text-blue-400"
                                      : "text-slate-500 dark:text-slate-400"
                                  }`}
                                />
                              ) : (
                                <Circle
                                  className={`h-3.5 w-3.5 shrink-0 ${
                                    childActive
                                      ? "fill-blue-400 text-blue-500"
                                      : "text-slate-400"
                                  }`}
                                />
                              )}

                              <span
                                className={`font-medium ${
                                  childActive
                                    ? "text-blue-400"
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
    </>
  );
};

export default Sidebar;
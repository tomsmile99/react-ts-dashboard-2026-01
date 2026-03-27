import { NavLink, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
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
  LayoutGrid,
  Box,
  LayoutPanelTop,
  AlignStartVertical,
  TextAlignEnd,
  Ruler,
  LocateFixed,
  MonitorSmartphone,
  ScrollText,
  Smartphone,
  Layers,
  Image,
  Component,
  MousePointerClick,
  CreditCard,
  BadgeCheck,
  AlertTriangle,
  CircleUserRound,
  FolderKanban,
} from "lucide-react";

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hoverExpanded: boolean;
  setHoverExpanded: React.Dispatch<React.SetStateAction<boolean>>;
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

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

const menuGroups: MenuGroup[] = [
  {
    title: "MAIN",
    items: [
      { name: "Dashboard", path: "/Admin/PageDashBoard", icon: LayoutDashboard },
    ],
  },
  {
    title: "จัดการระบบ",
    items: [
      {
        name: "จัดการผู้ใช้ระบบ",
        icon: UserCog,
        children: [
          { name: "Users", path: "/Admin/PageUsers", icon: Users },
          { name: "Roles", path: "/Admin/PageRoles", icon: ShieldCheck },
          { name: "Permissions", path: "/Admin/PagePermissions", icon: KeyRound },
        ],
      },
    ],
  },
  {
    title: "Layout",
    items: [
      {
        name: "Layout",
        icon: LayoutGrid,
        children: [
          { name: "Containers", path: "/Admin/Layout/PageContainers", icon: Box },
          { name: "Grid", path: "/Admin/Layout/PageGrid", icon: LayoutPanelTop },
          { name: "Flex", path: "/Admin/Layout/PageFlex", icon: AlignStartVertical },
          { name: "Width & Height", path: "/Admin/Layout/PageWidthHeight", icon: Ruler },
          { name: "Spacing Utilities", path: "/Admin/Layout/PageSpacingUtilities", icon: TextAlignEnd },
          { name: "Position Utilities", path: "/Admin/Layout/PagePositionUtilities", icon: LocateFixed },
          { name: "Display Utilities", path: "/Admin/Layout/PageDisplayUtilities", icon: MonitorSmartphone },
          { name: "Overflow Utilities", path: "/Admin/Layout/PageOverflowUtilities", icon: ScrollText },
          { name: "Responsive Breakpoints", path: "/Admin/Layout/PageResponsiveBreakpoints", icon: Smartphone },
          { name: "Z-Index & Visibility", path: "/Admin/Layout/PageZIndexVisibility", icon: Layers },
          { name: "Aspect Ratio & Object", path: "/Admin/Layout/PageAspectRatioObjectFit", icon: Image }
        ],
      },
    ],
  },
  {
    title: "UI",
    items: [
      {
        name: "UI Components",
        icon: Component,
        children: [
          { name: "Buttons", path: "/Admin/UI/PageButtons", icon: MousePointerClick },
          { name: "Cards", path: "/Admin/UI/PageCards", icon: CreditCard },
          { name: "Badges", path: "/Admin/UI/PageBadges", icon: BadgeCheck },
          { name: "Alerts", path: "/Admin/UI/PageAlerts", icon: AlertTriangle },
          { name: "Avatars", path: "/Admin/UI/PageAvatars", icon: CircleUserRound },
          { name: "Tabs", path: "/Admin/UI/PageTabs", icon: FolderKanban },
        ],
      },
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        name: "รายงานระบบ",
        icon: FileText,
        children: [
          { name: "Reports", path: "/Admin/Reports", icon: FileText },
          { name: "Monthly", path: "/Admin/Reports/Monthly", icon: CalendarDays },
        ],
      },
    ],
  },
  {
    title: "PAGES",
    items: [
      {
        name: "ปฏิทิน",
        path: "/Admin/Calendar",
        icon: CalendarDays,
      },
    ],
  },
];

const Sidebar = ({
  collapsed,
  mobileOpen,
  setMobileOpen,
  hoverExpanded,
  setHoverExpanded,
}: SidebarProps) => {
  const location = useLocation();
  const [manualOpen, setManualOpen] = useState<Record<string, boolean>>({});
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const expanded = !collapsed || hoverExpanded || mobileOpen;
  const allMenuItems = menuGroups.flatMap((group) => group.items);

  const routeOpenMenus = allMenuItems.reduce((acc, item) => {
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
      const current = prev[menuName] ?? routeOpenMenus[menuName] ?? false;

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

  const showText = expanded;
  const showChevron = showText;

  const handleMouseEnter = () => {
    if (!collapsed || mobileOpen) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    setHoverExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!collapsed || mobileOpen) return;

    hoverTimeoutRef.current = setTimeout(() => {
      setHoverExpanded(false);
    }, 120);
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`sidebar-shell left-0 top-0 z-50 flex h-screen flex-col
          bg-white text-slate-800 dark:bg-slate-900 dark:text-white
          transition-all duration-300 ease-in-out
          lg:fixed lg:left-0 lg:top-0 shadow-[4px_0_12px_rgba(0,0,0,0.08)] dark:shadow-[4px_0_12px_rgba(0,0,0,0.4)]
          ${expanded ? "lg:w-58" : "lg:w-24"}
          ${mobileOpen ? "translate-x-0 w-72" : "-translate-x-full w-72 lg:translate-x-0"}
        `}
        >
          <div
            className={`absolute right-0 top-0 h-full transition-all duration-300 ${
              collapsed && !hoverExpanded
                ? "bg-slate-300/30 dark:bg-slate-700/30"
                : "bg-slate-300 dark:bg-slate-700"
            }`}
          />
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-blue-400 bg-blue-100 shadow-md rounded-2xl">
                <span className="text-xl">S</span>
              </div>
              <div>
                <h3 className="flex font-bold justify-starttext-sm text-slate-800 dark:text-white">
                  SAK Dashboard
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-300">
                  ระบบบริหารจัดการข้อมูล
                </p>
                <hr />
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
            {expanded ? (
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
                  <hr />
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-12 h-12 text-sm font-bold text-blue-400 bg-blue-100 shadow-md rounded-2xl">
                  <span className="text-2xl">S</span>
                </div>
              </div>
            )}
          </div>

          <nav className="flex-1 min-h-0 px-2 py-3 overflow-y-auto sidebar-scroll">
            <div className="space-y-4">
              {menuGroups.map((group) => (
                <div key={group.title} className="space-y-1">
                  {showText && (
                    <p className="flex justify-start px-3 mb-2 text-[11px] font-extrabold tracking-[0.08em] text-slate-400 uppercase">
                      {group.title}
                    </p>
                  )}
                  {group.items.map((item) => {
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
                              ? `group flex items-center rounded-2xl px-2 py-2 text-sm font-medium transition cursor-pointer ${
                                  isActive
                                    ? "text-blue-400 bg-blue-100 shadow-sm"
                                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                                }`
                              : "group flex items-center justify-center rounded-2xl text-sm font-medium transition cursor-pointer"
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
                          className={
                            showText
                              ? `cursor-pointer group flex w-full items-center justify-between rounded-2xl px-2 py-2 text-sm font-medium transition ${
                                  parentActive
                                    ? "text-blue-400 bg-blue-100 shadow-sm"
                                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                                }`
                              : "cursor-pointer group flex w-full items-center justify-center rounded-2xl text-sm font-medium transition"
                          }
                        >
                          {showText ? (
                            <>
                              <div className="flex items-center gap-3">
                                {ParentIcon && (
                                  <ParentIcon className="w-5 h-5 transition shrink-0 group-hover:scale-105" />
                                )}
                                <span className="truncate">{item.name}</span>
                              </div>

                              {showChevron && (
                                <ChevronDown
                                  className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                                    menuOpen ? "rotate-180" : ""
                                  }`}
                                />
                              )}
                            </>
                          ) : (
                            <div
                              className={`flex items-center justify-center w-12 h-12 rounded-2xl transition ${
                                parentActive
                                  ? "bg-blue-100 text-blue-400 shadow-sm"
                                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                              }`}
                            >
                              {ParentIcon && (
                                <ParentIcon className="w-5 h-5 transition shrink-0 group-hover:scale-105" />
                              )}
                            </div>
                          )}
                        </button>

                        {showText && (
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              menuOpen
                                ? "mt-1 max-h-[1000px] opacity-100 translate-y-0"
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
                                    className="flex items-center gap-3 px-2 py-1 text-[14px] transition group rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 ml-3"
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
                                            : "text-slate-500"
                                        }`}
                                      />
                                    )}

                                    <span
                                      className={`font-medium ${
                                        childActive
                                          ? "text-blue-400"
                                          : "text-slate-500 dark:text-slate-300"
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
              ))}
            </div>
          </nav>
        </aside>
    </>
  );
};

export default Sidebar;
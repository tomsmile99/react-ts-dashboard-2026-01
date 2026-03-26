import { useEffect, useState } from "react";
import Sidebar from "./includes/templateAdmin/Sidebar";
import Header from "./includes/templateAdmin/Header";
import Footer from "./includes/templateAdmin/Footer";
import { Outlet, useLocation } from "react-router-dom";

const LayoutAdmin = () => {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("admin-sidebar-collapsed");
    return saved ? JSON.parse(saved) : false;
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverExpanded, setHoverExpanded] = useState(false);

  useEffect(() => {
    localStorage.setItem("admin-sidebar-collapsed", JSON.stringify(collapsed));
  }, [collapsed]);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <div
        className={`hidden lg:block shrink-0 bg-white dark:bg-slate-900 transition-all duration-300 ${
          hoverExpanded || !collapsed ? "w-58" : "w-24"
        }`}
      >
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          hoverExpanded={hoverExpanded}
          setHoverExpanded={setHoverExpanded}
        />
      </div>
      {/* mobile sidebar */}
      <div className="lg:hidden">
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          hoverExpanded={hoverExpanded}
          setHoverExpanded={setHoverExpanded}
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setMobileOpen={setMobileOpen}
        />
        <main className="flex-1 min-h-0 overflow-y-auto">
          <section key={location.pathname} className="p-4 fadeIn sm:p-6 lg:p-8">
            <Outlet />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutAdmin;
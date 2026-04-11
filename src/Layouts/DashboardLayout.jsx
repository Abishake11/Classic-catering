import Navbar from "./Navbar";
import SideMenu from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col bg-[#F6F6F6]">
      
      {/* NAVBAR */}
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      {/* BODY */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        
        {/* SIDEBAR */}
        <SideMenu open={sidebarOpen} setOpen={setSidebarOpen} />

        {/* MAIN CONTENT */}
        <main className="flex-1 min-h-0 overflow-y-auto px-4 py-3">
          <div className="bg-white rounded-[10px] shadow-md p-3 min-h-full">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
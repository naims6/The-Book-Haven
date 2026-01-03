import React, { useState } from 'react';
import { Outlet } from 'react-router';

import DashboardSidebar from '../Components/Dashboard/DashboardSidebar';
import DashboardNavbar from '../Components/Dashboard/DashboardNavbar';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 h-full transform transition-transform duration-300 ease-in-out
        lg:translate-x-0  lg:inset-auto lg:w-64
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Navbar */}
        <DashboardNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main Content Area */}
        <main className="p-4 md:p-6 container2">
          <div className="">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
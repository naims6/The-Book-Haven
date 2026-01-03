import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthContex';
import {
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Home
} from 'lucide-react';
import toast from 'react-hot-toast';

const DashboardNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, logOut } = use(AuthContext);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Successfully logged out
        toast.success("Successfully logout")
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <header className="sticky top-0 w-full z-30 border-b"
      style={{ 
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Menu button and search */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Search bar */}
            <div className="hidden md:block ml-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5" style={{ color: 'var(--color-text-muted)' }} />
                </div>
                <input
                  type="text"
                  placeholder="Search dashboard..."
                  className="pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right side - Notifications and profile */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 rounded-full hover:bg-bg-muted transition-colors"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center space-x-3 p-1 rounded-lg hover:bg-bg-muted transition-colors"
                style={{ color: 'var(--color-text-primary)' }}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2"
                  style={{ borderColor: 'var(--color-primary)' }}
                >
                  {user?.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName || 'User'} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium">{user?.displayName || 'User'}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {user?.email || 'user@example.com'}
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-1 z-50"
                  style={{ 
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <Link
                    to="/dashboard"
                    className="flex items-center px-4 py-3 hover:bg-bg-muted transition-colors"
                    style={{ color: 'var(--color-text-primary)' }}
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    <Home className="w-4 h-4 mr-3" />
                    Dashboard Home
                  </Link>
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center px-4 py-3 hover:bg-bg-muted transition-colors"
                    style={{ color: 'var(--color-text-primary)' }}
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    <User className="w-4 h-4 mr-3" />
                    My Profile
                  </Link>
                  <Link
                    to="/dashboard/settings"
                    className="flex items-center px-4 py-3 hover:bg-bg-muted transition-colors"
                    style={{ color: 'var(--color-text-primary)' }}
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                  </Link>
                  <div className="border-t my-1" style={{ borderColor: 'var(--color-border)' }}></div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setProfileDropdownOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-3 hover:bg-bg-muted transition-colors text-left"
                    style={{ color: '#ef4444' }}
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
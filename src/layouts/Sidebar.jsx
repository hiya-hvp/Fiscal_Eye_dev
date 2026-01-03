import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  AlertTriangle,
  FileText,
  Bot,
  Settings as SettingsIcon,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Alerts", path: "/alerts", icon: AlertTriangle },
  { label: "Audit Trail", path: "/audit", icon: FileText },
  { label: "Assistant", path: "/assistant", icon: Bot },
  { label: "Settings", path: "/settings", icon: SettingsIcon },
];

export default function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 border border-slate-800 bg-slate-900/50 backdrop-blur-xl h-[calc(100vh-2rem)] sticky top-4 ml-4 my-4 rounded-2xl shadow-2xl shadow-black/20">
        <div className="p-6 border-b border-slate-800">
          <Link to="/" className="text-2xl font-serif text-emerald-400 tracking-wide">
            FiscalEye
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800"
                )}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
              AU
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-200">Auditor User</span>
              <span className="text-xs text-slate-500">View Profile</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-50 bg-slate-950 border-b border-slate-800 p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-serif text-emerald-400">FiscalEye</Link>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 pt-20 px-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-4 text-lg py-4 border-b border-slate-800",
                  location.pathname === item.path ? "text-emerald-400" : "text-slate-400"
                )}
              >
                <item.icon />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

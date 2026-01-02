import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex">
            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 pt-20 md:pt-8 p-6 md:p-10 overflow-auto w-full">
                <Outlet />
            </main>
        </div>
    );
}

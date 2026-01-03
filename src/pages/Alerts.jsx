import { AlertTriangle, AlertCircle, CheckCircle, Search, Filter } from "lucide-react";
import { cn } from "../lib/utils";

const ALERTS = [
  { id: 1, title: "Unusual High Value Transaction", severity: "High", date: "2024-03-10", status: "Open", amount: "₹ 12,50,000" },
  { id: 2, title: "Duplicate Vendor Invoice", severity: "Medium", date: "2024-03-09", status: "Investigating", amount: "₹ 45,000" },
  { id: 3, title: "After-Hours Activity", severity: "Low", date: "2024-03-08", status: "Resolved", amount: "-" },
  { id: 4, title: "Split Transaction Detected", severity: "High", date: "2024-03-08", status: "Open", amount: "₹ 4,90,000" },
  { id: 5, title: "New Vendor Added", severity: "Medium", date: "2024-03-07", status: "Resolved", amount: "-" },
];

export default function Alerts() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Alerts & Anomalies</h1>
          <p className="text-slate-400 mt-1">Review flagged transactions and potential risks.</p>
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search alerts..."
              className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-emerald-500 w-64"
            />
          </div>
          <button className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-sm">
              <th className="p-4 font-medium">Alert Details</th>
              <th className="p-4 font-medium">Severity</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {ALERTS.map((alert) => (
              <tr key={alert.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      alert.severity === "High" ? "bg-red-500/10 text-red-500" :
                        alert.severity === "Medium" ? "bg-orange-500/10 text-orange-500" :
                          "bg-blue-500/10 text-blue-500"
                    )}>
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-200">{alert.title}</p>
                      <p className="text-xs text-slate-500">ID: ALERT-2024-{alert.id}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium border",
                    alert.severity === "High" ? "border-red-500/20 bg-red-500/10 text-red-400" :
                      alert.severity === "Medium" ? "border-orange-500/20 bg-orange-500/10 text-orange-400" :
                        "border-blue-500/20 bg-blue-500/10 text-blue-400"
                  )}>
                    {alert.severity}
                  </span>
                </td>
                <td className="p-4 text-slate-300 text-sm">{alert.date}</td>
                <td className="p-4 text-slate-300 font-mono text-sm">{alert.amount}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {alert.status === "Resolved" ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-slate-500" />
                    )}
                    <span className={cn(
                      "text-sm",
                      alert.status === "Resolved" ? "text-emerald-400" : "text-slate-400"
                    )}>{alert.status}</span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
                    Investigate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

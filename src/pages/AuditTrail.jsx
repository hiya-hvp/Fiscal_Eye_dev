import { FileText, Clock, User, Shield } from "lucide-react";

const LOGS = [
  { id: 1, action: "Alert Status Updated", details: "Marked Alert #2392 as Resolved", user: "Admin User", time: "10:45 AM", date: "Today" },
  { id: 2, action: "Confidential Report Accessed", details: "Exported Monthly Spending Report", user: "Auditor - Sarah", time: "09:30 AM", date: "Today" },
  { id: 3, action: "System Login", details: "Successful login via 2FA", user: "Finance Officer", time: "09:00 AM", date: "Today" },
  { id: 4, action: "Configuration Change", details: "Updated anomaly detection threshold to 85%", user: "System Admin", time: "4:30 PM", date: "Yesterday" },
  { id: 5, action: "Alert Investigated", details: "Added notes to Alert #2390", user: "Admin User", time: "2:15 PM", date: "Yesterday" },
];

export default function AuditTrail() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white">Audit Trail</h1>
        <p className="text-slate-400 mt-1">Immutable logs of all system activities for transparency.</p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="p-4 border-b border-slate-800 bg-slate-900/80 flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-500" />
          <span className="font-semibold text-slate-200">System Activity Log</span>
        </div>

        <div className="divide-y divide-slate-800/50">
          {LOGS.map((log) => (
            <div key={log.id} className="p-4 hover:bg-slate-800/30 transition-colors flex items-start gap-4">
              <div className="mt-1 p-2 rounded-full bg-slate-800 text-slate-400">
                <FileText className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-slate-200">{log.action}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{log.date}, {log.time}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mt-1">{log.details}</p>
                <div className="mt-2 flex items-center gap-2">
                  <User className="w-3 h-3 text-slate-500" />
                  <span className="text-xs text-slate-500">Performed by: {log.user}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Bell, Shield, Eye, Moon, Monitor } from "lucide-react";

export default function Settings() {
  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white">System Settings</h1>
        <p className="text-slate-400 mt-1">Manage notifications, appearance, and security preferences.</p>
      </div>

      {/* Notifications */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-emerald-400" />
          <h2 className="text-xl font-semibold text-slate-100">Notifications</h2>
        </div>
        <div className="space-y-4">
          <SettingToggle title="Email Alerts" description="Receive daily summaries of flagged transactions." defaultChecked />
          <SettingToggle title="Real-time SMS" description="Urgent alerts for high-risk anomalies (>85 score)." />
          <SettingToggle title="Weekly Reports" description="PDF reports sent to department heads." defaultChecked />
        </div>
      </section>

      {/* Security */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-emerald-400" />
          <h2 className="text-xl font-semibold text-slate-100">Security & Privacy</h2>
        </div>
        <div className="space-y-4">
          <SettingToggle title="Two-Factor Authentication" description="Require OTP for login." defaultChecked />
          <SettingToggle title="Audit Logging" description="Log all user actions for determining accountability." defaultChecked disabled />
        </div>
      </section>

      {/* Appearance */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Eye className="w-6 h-6 text-emerald-400" />
          <h2 className="text-xl font-semibold text-slate-100">Appearance</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <button className="p-4 rounded-xl border-2 border-slate-700 hover:border-emerald-500 transition flex flex-col items-center gap-2 text-slate-400 hover:text-white">
            <Monitor className="w-6 h-6" />
            <span className="text-sm">System</span>
          </button>
          <button className="p-4 rounded-xl border-2 border-emerald-500 bg-emerald-500/10 transition flex flex-col items-center gap-2 text-emerald-400">
            <Moon className="w-6 h-6" />
            <span className="text-sm">Dark</span>
          </button>
          <button className="p-4 rounded-xl border-2 border-slate-700 hover:border-emerald-500 transition flex flex-col items-center gap-2 text-slate-400 hover:text-white">
            <Eye className="w-6 h-6" />
            <span className="text-sm">Light</span>
          </button>
        </div>
      </section>
    </div>
  );
}

function SettingToggle({ title, description, defaultChecked, disabled }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/30 border border-slate-800/50">
      <div>
        <h3 className="font-medium text-slate-200">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} disabled={disabled} />
        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
      </label>
    </div>
  );
}

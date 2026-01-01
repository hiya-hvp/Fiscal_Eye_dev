import { UploadCloud, Cpu, AlertTriangle, Bell, BarChart2, Layers, UserCheck, FileText, Grid, MessageSquare } from 'lucide-react';

const steps = [
  { title: "Data Ingestion", desc: "Upload CSV / Excel financial records", icon: UploadCloud },
  { title: "AI Analysis", desc: "Machine learning models analyze transactions", icon: Cpu },
  { title: "Anomaly Detected", desc: "Unusual financial patterns identified", icon: AlertTriangle },
  { title: "Alert Generated", desc: "System raises risk-based warnings", icon: Bell },
  { title: "Context & Risk Score", desc: "Compare with historical & peer data", icon: BarChart2 },
  { title: "Consolidation", desc: "Multiple signals merged into a case", icon: Layers },
  { title: "Human Review", desc: "Auditor validates or escalates findings", icon: UserCheck },
  { title: "Audit Trail", desc: "Every action logged for transparency", icon: FileText },
  { title: "Dashboard Update", desc: "Live status reflected in dashboards", icon: Grid },
  { title: "AI Assist", desc: "Ask AI for explanations & summaries", icon: MessageSquare },
];

export default function Workflow() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap -mx-3">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="w-full sm:w-1/2 lg:w-1/5 px-3 mb-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-black font-bold text-lg"
                    style={{
                      background: "linear-gradient(135deg,#7ef3b2,#0ee6a8)",
                      boxShadow: "0 8px 24px rgba(14,230,168,0.18)",
                    }} aria-hidden>
                    <Icon size={22} color="#012026" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="text-white font-semibold text-lg">{s.title}</div>
                    {/* arrow shown on large screens only, and not after the 5th item in a row */}
                    {((idx % 5) !== 4) && (
                      <svg className="hidden lg:inline-block w-6 h-4 text-green-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M2 12h16" stroke="#3ee2a7" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M14 6l6 6-6 6" stroke="#3ee2a7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>

                  <div className="mt-3 bg-white/5 border border-white/6 text-sm text-white/80 rounded-lg p-3 shadow-inner">
                    {s.desc}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
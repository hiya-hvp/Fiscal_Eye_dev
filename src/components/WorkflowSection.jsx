import { useState } from "react";
import {
  Database,
  Brain,
  AlertTriangle,
  Bell,
  BarChart3,
  Layers,
  UserCheck,
  FileText,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";

const steps = [
  { id: 1, title: "Data Entry", desc: "Upload CSV / Excel files", icon: Database },
  { id: 2, title: "AI Analysis", desc: "Transactions analyzed by AI", icon: Brain },
  { id: 3, title: "Anomaly Detected", desc: "Unusual pattern found", icon: AlertTriangle },
  { id: 4, title: "Alert Generated", desc: "Warning issued to system", icon: Bell },
  { id: 5, title: "Context & Stats", desc: "Risk score & comparisons", icon: BarChart3 },
  { id: 6, title: "Consolidation", desc: "Grouped & structured data", icon: Layers },
  { id: 7, title: "Human Review", desc: "Approve, block, investigate", icon: UserCheck },
  { id: 8, title: "Audit Trail", desc: "Every action logged", icon: FileText },
  { id: 9, title: "Dashboard Update", desc: "Live system updates", icon: LayoutDashboard },
  { id: 10, title: "AI Assist", desc: "Chat-based explanations", icon: MessageCircle },
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-12 py-20">
        {/* subtle green glow for slide 2 */}
        <div className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_15%_85%,rgba(16,185,129,0.25),transparent_45%)]">
        </div>
      {/* Heading */}
      <h2 className="text-5xl font-serif mb-6">
        How <span className="text-emerald-400">FiscalEye</span> Works
      </h2>

      <p className="max-w-3xl text-lg opacity-80 mb-16">
        FiscalEye uses AI-driven financial intelligence to detect anomalies,
        assist auditors, and maintain a transparent audit trail across
        government financial systems.
      </p>

      {/* Workflow */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300
                ${
                  isActive
                    ? "bg-emerald-500/20 border border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.6)] scale-105"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold
                    ${
                      isActive
                        ? "bg-emerald-400 text-black"
                        : "bg-white/20"
                    }`}
                >
                  {step.id}
                </span>
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? "text-emerald-300" : "opacity-70"
                  }`}
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm opacity-70">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
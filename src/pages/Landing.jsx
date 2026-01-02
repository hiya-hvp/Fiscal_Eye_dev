import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, BarChart3, Lock, ChevronRight, Activity } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 overflow-x-hidden">

      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
      <div className="fixed inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* Glowing Orbs */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl border border-white/10 bg-slate-950/60 backdrop-blur-xl rounded-full px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Activity className="text-black w-5 h-5" />
            </div>
            FiscalEye
          </div>
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link
              to="/Signup"
              className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Financial Monitoring System
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"
          >
            Bring Clarity to <br /> Public Finance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            An intelligent oversight platform designed for government auditors.
            Detect anomalies, trace discrepancies, and ensure fiscal responsibility in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              Launch Dashboard <ChevronRight className="w-4 h-4" />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
              View Documentation
            </button>
          </motion.div>
        </div>
      </section>


      {/* Features Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-emerald-400" />}
              title="Real-Time Oversight"
              description="Continuous monitoring of transactions replacing outdated periodic audits."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-blue-400" />}
              title="Explainable Intelligence"
              description="AI that doesn't just alert, but explains why a transaction is flagged."
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-purple-400" />}
              title="Audit-Ready Security"
              description="Immutable logs and traceability for every insight and action taken."
            />
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl p-5 font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Intelligent Pipeline
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
              A seamless journey from raw financial data to actionable institutional insights.
            </p>
          </motion.div>

          <WorkflowSection />
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/30 transition-colors group">
      <div className="mb-6 p-4 rounded-xl bg-slate-900 w-fit group-hover:bg-slate-800 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-100">{title}</h3>
      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Replace the WorkflowSection function entirely with this version:
function WorkflowSection() {
  const steps = [
    {
      id: "01",
      title: "Data Entry",
      icon: "📄",
      sub: "Neural ingestion of multi-format financial datasets.",
      accent: "from-cyan-400 to-blue-500",
      glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
    },
    {
      id: "02",
      title: "AI Analysis",
      icon: "🧠",
      sub: "Deep-learning transaction pattern recognition.",
      accent: "from-violet-500 to-fuchsia-500",
      glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    },
    {
      id: "03",
      title: "Anomaly Detection",
      icon: "⚠️",
      sub: "Real-time identification of fiscal deviations.",
      accent: "from-orange-400 to-red-500",
      glow: "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]",
    },
    {
      id: "04",
      title: "Alert Logic",
      icon: "🔔",
      sub: "Automated institutional warning protocols.",
      accent: "from-red-500 to-purple-600",
      glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
    },
    {
      id: "05",
      title: "Risk Scoring",
      icon: "📊",
      sub: "Categorical mapping against global benchmarks.",
      accent: "from-blue-400 to-indigo-600",
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    },
    {
      id: "06",
      title: "Consolidation",
      icon: "🗂️",
      sub: "Structured aggregation for audit readiness.",
      accent: "from-emerald-400 to-cyan-500",
      glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]",
    },
    {
      id: "07",
      title: "Human Review",
      icon: "👤",
      sub: "Final verification layer where institutional experts authorize or flag systemic findings.",
      accent: "from-slate-400 to-slate-600",
      glow: "group-hover:shadow-[0_0_30px_rgba(148,163,184,0.3)]",
      details: ["Mark as Valid", "Investigation", "Archive", "Block Payment"],
    },
    {
      id: "08",
      title: "Audit Trail",
      icon: "📝",
      sub: "Immutable cryptographic logging of every action taken within the resolution pipeline.",
      accent: "from-zinc-500 to-zinc-800",
      glow: "group-hover:shadow-[0_0_30px_rgba(113,113,122,0.3)]",
    },
    {
      id: "09",
      title: "Dashboard Update",
      icon: "📈",
      sub: "Real-time refresh of fiscal health metrics and executive oversight visualizations.",
      accent: "from-yellow-400 to-amber-600",
      glow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]",
    },
    {
      id: "10",
      title: "AI Chat Assist",
      icon: "🤖",
      sub: "Interactive natural language interface for querying specific transaction anomalies.",
      accent: "from-sky-400 to-cyan-600",
      glow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]",
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      
      {/* --- ENHANCED CENTRAL ENERGY RAIL --- */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-slate-900 hidden md:block -translate-x-1/2 overflow-hidden">
         {/* Moving 'Signal' Animation through the spine */}
         <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)]"
         />
      </div>

      <div className="space-y-32 md:space-y-0">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={step.id} className="relative flex flex-col md:flex-row items-center justify-between md:min-h-[350px]">
              
              {/* --- CONNECTING BRANCHES --- */}
              {/* This creates the branch coming out of the center and touching the node */}
              <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 hidden md:block h-[2px] z-0
                ${isEven ? 'w-[4%] bg-gradient-to-r from-cyan-500/50 to-transparent' : 'w-[4%] -translate-x-full bg-gradient-to-l from-cyan-500/50 to-transparent'}
              `} />
              {/* Neo-Minimalist Card */}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-[400px] group relative ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}
              >
                {/* Large Background Step Number */}
                <motion.span
                  className="absolute -top-20 left-0 text-[120px] font-black text-white/[0.02] select-none group-hover:text-white/[0.05] transition-all duration-1000 leading-none"
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                >
                  {step.id}
                </motion.span>

                <div className={`
    relative overflow-hidden min-h-[320px] p-10 rounded-[2.5rem] bg-slate-950/60 backdrop-blur-2xl
    border border-white/5 transition-all duration-700
    flex flex-col items-start justify-center
    ${step.glow}
    hover:border-white/20 hover:-translate-y-3
  `}>

                  {/* Minimalist Top Accent Line */}
                  <div className={`absolute top-0 left-10 w-20 h-[3px] bg-gradient-to-r ${step.accent} rounded-full`} />

                  {/* Line-art Icon Style */}
                  <div className="relative mb-8 text-5xl">
                    <div className={`absolute inset-0 blur-3xl opacity-10 bg-gradient-to-r ${step.accent}`} />
                    <span className="relative z-10 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      {step.icon}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light tracking-tight text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {step.sub}
                  </p>

                  {/* Specific for Step 07 - Action Chips */}
                  {step.details && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {step.details.map((detail, i) => (
                        <span key={i} className="text-[9px] uppercase tracking-widest text-slate-500 border border-slate-800 px-2 py-1 rounded-md bg-slate-900/50">
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Glowing Status Tag */}
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full animate-ping bg-gradient-to-r ${step.accent}`} />
                    <span className="text-[10px] tracking-widest uppercase text-slate-600 font-semibold">
                      Secure Node
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Central Node Node */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${step.accent}`}
                  />
                  <div className="relative w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-800 z-20" />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

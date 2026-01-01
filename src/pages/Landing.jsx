import Workflow from "../components/workflow/Workflow";
import WorkflowSection from "../components/WorkflowSection";
export default function Landing() {
  return (
    <div className="w-full min-h-screen text-white relative overflow-x-hidden">

      {/* Fixed full-viewport background to avoid any color "cut" */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(600px 400px at 10% 20%, rgba(34,197,94,0.08), transparent 20%)," +
            "radial-gradient(500px 350px at 85% 75%, rgba(34,197,94,0.06), transparent 20%)," +
            "linear-gradient(180deg,#020617 0%,#071025 35%,#042034 70%,#00121a 100%)",
          backgroundBlendMode: "screen, screen, normal",
        }}
      />

      {/* ================= TOP BAR ================= */}
      <div className="fixed top-0 right-0 p-6 z-50 flex gap-4">
        <button className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/5 transition">
          Sign In
        </button>
      </div>

      {/* ================= HERO SECTION (CENTER) ================= */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl md:text-9xl font-serif tracking-wide drop-shadow-lg">FiscalEye</h1>

        <p className="mt-6 text-xl md:text-2xl font-light opacity-80">Government Audit Intelligence</p>

        <button className="mt-12 px-10 py-4 rounded-full bg-gradient-to-r from-emerald-300 to-teal-300 text-black font-medium hover:scale-105 transition shadow-md">
          Get Started
        </button>

        <p className="absolute bottom-8 right-8 max-w-xs text-sm opacity-70 text-right">
          AI-powered anomaly detection for government financial systems.
        </p>
      </section>

      {/* ================= WORKFLOW SECTION ================= */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-semibold mb-8">How FiscalEye Works</h2>
          <Workflow />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative py-28 px-12">
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">About FiscalEye</h2>
          <p className="opacity-80 leading-relaxed">
            FiscalEye assists government auditors by detecting anomalies, explaining risks, and ensuring transparent financial oversight.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative py-20 px-12">
        <div className="max-w-2xl mx-auto space-y-4">
          <div>
            <label className="block text-sm mb-1 opacity-80">Full Name</label>
            <input className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Enter your full name" />
          </div>

          <div>
            <label className="block text-sm mb-1 opacity-80">Email Address</label>
            <input type="email" className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="example@email.com" />
          </div>

          <div>
            <label className="block text-sm mb-1 opacity-80">Mobile Number</label>
            <input type="tel" className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="+91 XXXXX XXXXX" />
          </div>

          <div>
            <label className="block text-sm mb-1 opacity-80">Message</label>
            <textarea rows="4" className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Write your message here..." />
          </div>

          <button className="mt-4 px-6 py-2 rounded-full bg-emerald-400 text-black font-medium hover:scale-105 transition">Send Message</button>
        </div>
      </section>

    </div>
  );
}

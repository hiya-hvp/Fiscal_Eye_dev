import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 p-6">
      <h2 className="text-xl font-semibold mb-6">FiscalEye</h2>

      <nav className="space-y-4">
        <Link to="/app">Dashboard</Link>
        <Link to="/app/alerts">Alerts</Link>
        <Link to="/app/audit">Audit Trail</Link>
        <Link to="/app/assistant">AI Assistant</Link>
        <Link to="/app/settings">Settings</Link>
      </nav>
    </aside>
  );
}

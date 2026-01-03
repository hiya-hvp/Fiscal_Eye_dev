import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { TrendingUp, AlertOctagon, Activity, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const DATA_SPENDING = [
  { name: 'Jan', amount: 4000 },
  { name: 'Feb', amount: 3000 },
  { name: 'Mar', amount: 2000 },
  { name: 'Apr', amount: 2780 },
  { name: 'May', amount: 1890 },
  { name: 'Jun', amount: 2390 },
];

const DATA_RISK = [
  { name: 'Mon', score: 20 },
  { name: 'Tue', score: 35 },
  { name: 'Wed', score: 12 },
  { name: 'Thu', score: 45 },
  { name: 'Fri', score: 28 },
  { name: 'Sat', score: 85 }, // Anomaly
  { name: 'Sun', score: 15 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-slate-400 mt-1">Real-time financial intelligence summary.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 transition">Download Report</button>
          <button className="px-4 py-2 bg-emerald-500 text-black font-semibold rounded-lg text-sm hover:bg-emerald-400 transition">Refresh Data</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard
          title="Total Transactions"
          value="₹ 12,45,000"
          change="+12.5%"
          trend="up"
          icon={TrendingUp}
        />
        <KpiCard
          title="Anomalies Detected"
          value="3 High Risk"
          change="Critical Attention"
          trend="down"
          isNegative
          icon={AlertOctagon}
        />
        <KpiCard
          title="System Health"
          value="98.2%"
          change="Optimal"
          trend="up"
          icon={Activity}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending Trend */}
        <ChartCard title="Monthly Spending Trends">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={DATA_SPENDING}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                cursor={{ fill: '#1e293b' }}
              />
              <Bar dataKey="amount" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Risk Score */}
        <ChartCard title="Daily Risk Score Volatility">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={DATA_RISK}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
              />
              <Line type="monotone" dataKey="score" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444' }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Recent Alerts Table (Preview) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-100">Recent Critical Alerts</h3>
          <button className="text-sm text-emerald-400 hover:text-emerald-300">View All</button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-lg border border-slate-800/50 hover:border-slate-700 transition">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div>
                  <p className="font-medium text-slate-200">Unauthorized Vendor Payment</p>
                  <p className="text-sm text-slate-500">Transaction ID: #TXN-892{i}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-slate-300">₹ 45,000</p>
                <p className="text-xs text-slate-500">2 mins ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, change, trend, icon: Icon, isNegative }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon size={64} className="text-emerald-500" />
      </div>
      <div className="relative">
        <div className="flex items-center gap-2 text-slate-400 mb-2">
          <Icon size={16} />
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="text-3xl font-bold text-white mb-2">{value}</div>
        <div className={cn("text-sm flex items-center gap-1", isNegative ? "text-red-400" : "text-emerald-400")}>
          <ArrowUpRight size={14} className={cn(trend === "down" && "rotate-180")} />
          <span className="font-medium">{change}</span>
          {!isNegative && <span className="text-slate-500 ml-1">vs last month</span>}
        </div>
      </div>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold text-slate-100 mb-6">{title}</h3>
      {children}
    </div>
  );
}

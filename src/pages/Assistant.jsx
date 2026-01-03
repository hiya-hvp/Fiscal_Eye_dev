import { Send, Bot, User } from "lucide-react";

export default function Assistant() {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Fiscal Assistant</h1>
        <p className="text-slate-400 mt-1">AI-powered insights at your command.</p>
      </div>

      <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden flex flex-col backdrop-blur-sm">
        {/* Chat Area */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Bot Message */}
          <div className="flex gap-4 max-w-3xl">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="space-y-2">
              <div className="bg-slate-800/50 p-4 rounded-2xl rounded-tl-none border border-slate-700/50">
                <p className="text-slate-200 leading-relaxed">
                  Hello! I'm FiscalEye Assistant. I can help you analyze spending patterns, look up transaction details, or explain specific anomalies. How can I assist you today?
                </p>
              </div>
              <span className="text-xs text-slate-500 ml-2">10:00 AM</span>
            </div>
          </div>

          {/* User Message */}
          <div className="flex flex-row-reverse gap-4 max-w-3xl ml-auto">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
              <User className="w-6 h-6 text-slate-300" />
            </div>
            <div className="space-y-2">
              <div className="bg-emerald-600/20 p-4 rounded-2xl rounded-tr-none border border-emerald-500/20">
                <p className="text-emerald-100 leading-relaxed">
                  Show me the high-risk transactions from the Public Works department for last week.
                </p>
              </div>
              <span className="text-xs text-slate-500 mr-2 text-right block">10:05 AM</span>
            </div>
          </div>

          {/* Bot Message */}
          <div className="flex gap-4 max-w-3xl">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="space-y-2">
              <div className="bg-slate-800/50 p-4 rounded-2xl rounded-tl-none border border-slate-700/50">
                <p className="text-slate-200 leading-relaxed">
                  I found 3 high-risk transactions for Public Works between March 1st and March 7th.
                </p>
                <div className="mt-4 p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex justify-between">
                      <span>Txn #8821 - Vendor "BuildCorp"</span>
                      <span className="text-red-400">Risk Score: 92</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Txn #8845 - Duplicate Invoice</span>
                      <span className="text-red-400">Risk Score: 88</span>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="text-xs text-slate-500 ml-2">10:06 AM</span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-800 bg-slate-900">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Ask about financial data..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
            />
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl transition flex items-center gap-2">
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

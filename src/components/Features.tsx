import { motion } from "motion/react";
import { 
  BarChart3, 
  MessageSquare, 
  Users2, 
  Settings2, 
  TrendingUp, 
  Zap, 
  Cpu, 
  Cloud,
  Layers,
  LineChart
} from "lucide-react";

export default function Features() {
  return (
    <div className="space-y-40 py-24 px-4 overflow-hidden">
      {/* Team Platform Section */}
      <section className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">One Platform for <span className="text-brand">Every Team</span></h2>
            <p className="text-xl text-slate-600 mb-10">
              Manage your entire business from a single system and eliminate data silos. Bring all your teams together to work in harmony.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: BarChart3, title: "Sales", desc: "Track leads and close deals faster", color: "text-blue-500" },
                { icon: TrendingUp, title: "Marketing", desc: "Run targeted campaigns effectively", color: "text-purple-500" },
                { icon: MessageSquare, title: "Support", desc: "Deliver better customer service", color: "text-emerald-500" },
                { icon: Settings2, title: "Operations", desc: "Manage workflows efficiently", color: "text-amber-500" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`p-2 rounded-lg bg-slate-50 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl overflow-hidden aspect-video relative">
              {/* Mock dashboard content */}
              <div className="h-full bg-slate-800 rounded-2xl flex p-4 gap-4">
                <div className="w-1/4 space-y-3">
                  <div className="h-6 bg-slate-700/50 rounded w-full" />
                  <div className="h-6 bg-brand/20 rounded w-full border border-brand/40" />
                  <div className="h-6 bg-slate-700/50 rounded w-full" />
                  <div className="h-6 bg-slate-700/50 rounded w-full" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-slate-700/50 rounded" />
                    <div className="h-16 bg-slate-700/50 rounded" />
                    <div className="h-16 bg-slate-700/50 rounded" />
                  </div>
                  <div className="h-32 bg-slate-700/50 rounded relative group overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-brand/20 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            {/* Floaties */}
            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                <Users2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Total Leads</div>
                <div className="text-xl font-bold">12,482</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data & Insights */}
      <section className="bg-slate-900 rounded-[3rem] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                    <LineChart className="w-8 h-8 text-brand mb-4" />
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-sm text-slate-400">Revenue Growth</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                    <BarChart3 className="w-8 h-8 text-brand mb-4" />
                    <div className="text-2xl font-bold">3.2x</div>
                    <div className="text-sm text-slate-400">Faster ROI</div>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                    <Cpu className="w-8 h-8 text-brand mb-4" />
                    <div className="text-2xl font-bold">Smart</div>
                    <div className="text-sm text-slate-400">Forecasting</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                    <Settings2 className="w-8 h-8 text-brand mb-4" />
                    <div className="text-2xl font-bold">Live</div>
                    <div className="text-sm text-slate-400">Dashboard</div>
                  </div>
               </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-brand" />
            </div>
            <h2 className="text-4xl font-bold mb-6 italic">Grow Faster with <br />Data & Insights</h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Make smarter decisions with real-time insights. Track performance, understand customer behavior, and identify new opportunities — all from a single dashboard.
            </p>
            <ul className="space-y-4 text-slate-300">
              {["Real-time performance tracking", "Customer behavior analysis", "Opportunity identification", "Visualized reporting"].map((dot, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {dot}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Automation & Future */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100"
        >
          <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand/20">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Work Smarter with Automation</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Automate repetitive tasks and streamline your workflows. From lead assignment to follow-ups, your team can focus on what really matters.
          </p>
          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "70%" }}
               className="h-full bg-brand"
             />
          </div>
          <div className="mt-2 text-xs font-bold text-slate-400">70% TASK REDUCTION</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm"
        >
          <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8">
            <Cpu className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Built for the Future</h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            Use modern technology to stay ahead of the competition and scale confidently.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Cloud, label: "Cloud-based access" },
              { icon: Cpu, label: "AI Predictions" },
              { icon: BarChart3, label: "Real-time reporting" },
              { icon: Layers, label: "Easy Integrations" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <item.icon className="w-5 h-5 text-brand" />
                <span className="text-sm font-semibold text-slate-900">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

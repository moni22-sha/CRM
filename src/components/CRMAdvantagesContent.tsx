import { motion } from "framer-motion";
import { 
  Zap, Shield, Globe, Users, TrendingUp, BarChart, Settings, 
  Smartphone, Layers, Sparkles, ArrowRight, ChevronRight 
} from "lucide-react";

const advantages = [
  { icon: TrendingUp, title: "Improved Sales Productivity", desc: "Manage leads, track interactions, and prioritize opportunities in one place.", n: "01", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Globe, title: "Unified Customer View", desc: "Consolidate data from multiple sources into a single, comprehensive profile.", n: "02", color: "text-cyan-600", bg: "bg-cyan-50" },
  { icon: BarChart, title: "Actionable Insights", desc: "Turn raw data into meaningful insights with built-in reporting.", n: "03", color: "text-indigo-600", bg: "bg-indigo-50" },
  { icon: Zap, title: "Customer-Centric Automation", desc: "Engage customers at the right time with relevant messaging.", n: "04", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Users, title: "Proactive Customer Service", desc: "Anticipate customer needs with complete interaction histories.", n: "05", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Layers, title: "Better Team Collaboration", desc: "Improve communication across departments with a shared workspace.", n: "06", color: "text-rose-600", bg: "bg-rose-50" },
  { icon: Zap, title: "Increased Efficiency with AI", desc: "Automate tasks, identify trends, and generate content effortlessly.", n: "07", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Settings, title: "Seamless Integration", desc: "Connect with ERP, marketing, and accounting tools for smooth flow.", n: "08", color: "text-slate-600", bg: "bg-slate-100" },
  { icon: Smartphone, title: "Access Anytime, Anywhere", desc: "Access customer data from any device, whether in office or on the go.", n: "09", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Add users, features, or integrations as your business needs evolve.", n: "10", color: "text-teal-600", bg: "bg-teal-50" },
  { icon: Shield, title: "Strong Data Security", desc: "Protect sensitive info with access controls and encryption.", n: "11", color: "text-blue-800", bg: "bg-blue-100" }
];

export default function CRMAdvantagesContent() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* --- CENTERED HERO SECTION --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3 h-3" />
              Strategic Growth
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
              11 Powerful <br/>
              <span className="relative inline-block text-blue-600">
                CRM Advantages
             
                  <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl font-medium">
              By centralizing customer data and providing actionable insights, CRM platforms 
              help businesses strengthen relationships and drive sustainable growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ADVANTAGES GRID --- */}
      <section className="relative py-24 overflow-hidden">
        {/* Large Watermark */}
        <div className="absolute top-60 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[300px] font-black text-slate-900 leading-none">BENEFITS</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-20">
            <div className="h-[1px] w-12 bg-blue-600/30" />
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Why Choose CRM</span>
            <div className="h-[1px] w-12 bg-blue-600/30" />
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
                className="group flex flex-col p-8 bg-white border border-slate-100 rounded-[32px] transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${adv.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <adv.icon className={`w-6 h-6 ${adv.color}`} />
                  </div>
                  <span className="text-slate-100 font-black text-3xl group-hover:text-blue-50 transition-colors">
                    {adv.n}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {adv.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SUMMARY QUOTE SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="bg-slate-900 rounded-[48px] p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
          
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6 italic text-white">"The true value of CRM lies in its ability to bring everything together—people, processes, and data."</h2>
              <p className="text-xl text-slate-400 font-medium">
                By eliminating silos, businesses can build stronger relationships and drive sustainable growth across every department.
              </p>
            </div>
            <div className="flex-shrink-0">
                <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                  Explore Benefits <ChevronRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
          Ready to unlock <br />
          <span className="text-blue-600">your competitive edge?</span>
        </h3>
        <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto font-medium">
          Join thousands of businesses scaling their operations with our advanced CRM solutions.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">
            Start Free Trial
          </button>
          <button className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-200 transition-all">
            Contact Sales
          </button>
        </div>
      </section>
    </div>
  );
}
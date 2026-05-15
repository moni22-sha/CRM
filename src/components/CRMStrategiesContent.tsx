import { motion } from "framer-motion";
import { 
  TrendingUp, CheckCircle2, ChevronRight, Zap, Target, 
  ClipboardList, Settings, UserCheck, Cpu, Database, 
  Share2, Sparkles, ArrowRight 
} from "lucide-react";

const STRATEGIES = [
  { title: "Choose the Right CRM", icon: Target, desc: "Evaluate scaling and integration needs before committing.", n: "01", color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Define Clear goals", icon: CheckCircle2, desc: "Establish measurable retention and growth goals.", n: "02", color: "text-cyan-600", bg: "bg-cyan-50" },
  { title: "Strong Implementation", icon: ClipboardList, desc: "Map workflows and migrate data with precision.", n: "03", color: "text-indigo-600", bg: "bg-indigo-50" },
  { title: "Customize Experience", icon: Settings, desc: "Align the interface with how your teams actually work.", n: "04", color: "text-purple-600", bg: "bg-purple-50" },
  { title: "Employee Training", icon: UserCheck, desc: "Ensure long-term adoption through hands-on sessions.", n: "05", color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Leverage AI", icon: Cpu, desc: "Automate follow-ups and generate predictive insights.", n: "06", color: "text-amber-600", bg: "bg-amber-50" },
  { title: "Data Cleanliness", icon: Database, desc: "Regularly clean records to maintain high data integrity.", n: "07", color: "text-rose-600", bg: "bg-rose-50" },
  { title: "Team Collaboration", icon: Share2, desc: "Eliminate communication silos across departments.", n: "08", color: "text-blue-800", bg: "bg-blue-100" }
];

export default function CRMStrategiesContent() {
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
              Strategic Optimization
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
              8 Proven <br/>
              <span className="relative inline-block text-blue-600">
                CRM Practices
                
                  <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl font-medium">
              A powerful CRM system brings all your customer data into one place. 
              Follow these strategies to synchronize your entire business operation.
            </p>

            <div className="flex justify-center">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                Download Strategy Map <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TREE MIND MAP SECTION --- */}
      <section className="relative py-24 overflow-hidden">
        {/* Large Watermark Background */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[300px] font-black text-slate-900 leading-none">STRATEGY</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative py-20">
            {/* The Trunk (Vertical Line) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                className="w-full bg-blue-600 origin-top"
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <div className="relative space-y-24">
              {STRATEGIES.map((strat, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Card Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex-1 w-full md:w-auto ${i % 2 === 0 ? 'md:pl-20' : 'md:pr-20'}`}
                  >
                    <div className={`p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-blue-600/5 transition-all group ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                      <div className={`inline-flex items-center justify-center w-12 h-12 ${strat.bg} ${strat.color} rounded-xl font-black text-xl mb-6 shadow-sm`}>
                        {strat.n}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{strat.title}</h3>
                      <p className="text-slate-500 leading-relaxed font-medium">
                        {strat.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Branch Node (The Icon) */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="w-16 h-16 bg-white border-4 border-white shadow-xl rounded-2xl flex items-center justify-center text-slate-900 relative ring-4 ring-slate-50"
                    >
                      <strat.icon className={`w-8 h-8 ${strat.color}`} />
                      
                      {/* Horizontal Branch Line (Desktop Only) */}
                      <div className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-slate-100 w-20 -z-10 hidden md:block ${i % 2 === 0 ? 'left-full' : 'right-full'}`} />
                    </motion.div>
                  </div>

                  {/* Spacing Offset */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONCLUSION SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="bg-slate-900 rounded-[48px] p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <TrendingUp className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
              Final Summary
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Conclusion</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              By following these strategies, your business can unlock the full potential of your CRM system. 
              A well-optimized CRM empowers your teams, improves efficiency, and scales with your success.
            </p>
            <button className="group flex items-center gap-2 font-bold text-blue-400 hover:text-white transition-all text-lg">
              Get Started with Your Strategy Now 
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER SPACING --- */}
      <div className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 font-medium tracking-wide italic">"Structure defines speed. Strategy defines success."</p>
        </div>
      </div>
    </div>
  );
}
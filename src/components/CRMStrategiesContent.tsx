import { motion, Variants } from "framer-motion";
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

// --- Framer Motion Design Tokens ---
const underlineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { delay: 0.8, duration: 0.8, ease: "easeInOut" }
  }
};

const trunkProgressVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function CRMStrategiesContent() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* --- CENTERED HERO SECTION --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50">
        {/* Infinite interactive atmosphere aura */}
        <motion.div 
          animate={{ 
            scale: [1, 1.12, 1],
            x: ["-50%", "-47%", "-50%"],
            y: ["-50%", "-53%", "-50%"]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Spinning pill component banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8 cursor-default select-none"
            >
              <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
              Strategic Optimization
            </motion.div>
            
            {/* Structural Header Layout with path rendering stroke */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight"
            >
              8 Proven <br/>
              <span className="relative inline-block text-blue-600 pb-3">
                CRM Practices
                <svg className="absolute left-0 bottom-0 w-full h-3 text-blue-500 pointer-events-none" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    variants={underlineVariants}
                    initial="hidden"
                    animate="visible"
                    d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl font-medium"
            >
              A powerful CRM system brings all your customer data into one place. 
              Follow these strategies to synchronize your entire business operation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.button 
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Download Strategy Map <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TREE MIND MAP SECTION --- */}
      <section className="relative py-24 overflow-hidden">
        {/* Large Watermark Background */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 opacity-[0.015] select-none pointer-events-none">
          <span className="text-[300px] font-black text-slate-900 leading-none">STRATEGY</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative py-20">
            {/* The Dynamic Timeline Trunk (Vertical Line Alignment) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block">
              <motion.div 
                variants={trunkProgressVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="w-full h-full bg-blue-600 origin-top"
              />
            </div>

            <div className="relative space-y-24">
              {STRATEGIES.map((strat, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Card Deck Frame */}
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className={`flex-1 w-full md:w-auto ${i % 2 === 0 ? 'md:pl-20' : 'md:pr-20'}`}
                  >
                    <motion.div 
                      whileHover={{ 
                        y: -6, 
                        boxShadow: "0 20px 40px rgba(37, 99, 235, 0.04)", 
                        borderColor: "rgba(37, 99, 235, 0.25)" 
                      }}
                      whileTap={{ 
                        scale: 0.98,
                        borderColor: "rgba(37, 99, 235, 0.45)",
                        backgroundColor: "rgba(248, 250, 252, 0.95)"
                      }}
                      className={`p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm transition-all duration-200 group cursor-pointer select-none ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 ${strat.bg} ${strat.color} rounded-xl font-black text-xl mb-6 shadow-sm group-hover:scale-105 group-active:scale-95 transition-transform duration-300`}>
                        {strat.n}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {strat.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed font-medium">
                        {strat.desc}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Mechanical Branch Node (The Focal Icon) */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white border-4 border-white shadow-xl rounded-2xl flex items-center justify-center text-slate-900 relative ring-4 ring-slate-50 cursor-pointer"
                    >
                      <strat.icon className={`w-8 h-8 ${strat.color}`} />
                      
                      {/* Horizontal Branch Anchor Lines (Desktop Scale Blueprint) */}
                      <div className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-slate-100 w-20 -z-10 hidden md:block ${i % 2 === 0 ? 'left-full' : 'right-full'}`} />
                    </motion.div>
                  </div>

                  {/* Layout Isolation Spacing Offset */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONCLUSION SECTION (Structured Deck Frame) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 65 }}
          whileHover={{ y: -4 }}
          className="bg-slate-900 rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Subtle gradient shading layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
          
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <TrendingUp className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
              Final Summary
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">Conclusion</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              By following these strategies, your business can unlock the full potential of your CRM system. 
              A well-optimized CRM empowers your teams, improves efficiency, and scales with your success.
            </p>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 font-bold text-blue-400 hover:text-white transition-colors text-lg"
            >
              Get Started with Your Strategy Now 
              <ChevronRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
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
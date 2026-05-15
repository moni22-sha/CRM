import { motion } from "framer-motion";
import {
  Users, Database, Cpu, Layout, Cloud, Smartphone, Zap,
  Share2, Settings, LineChart, Target, FileText, MessageCircle,
  HelpCircle, Truck, Mail, Navigation, Link, ShieldAlert, Sparkles, ArrowRight
} from "lucide-react";

const capabilities = [
  { icon: Users, title: "Contact & Account Management", desc: "Stores and organizes customer details and communication history.", n: "01", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Database, title: "Unified Customer Data", desc: "Consolidates data from multiple sources into one centralized profile.", n: "02", color: "text-cyan-600", bg: "bg-cyan-50" },
  { icon: Cpu, title: "AI Capabilities", desc: "Predict behavior and recommend next best actions using artificial intelligence.", n: "03", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Layout, title: "Reporting & Dashboards", desc: "Real-time visibility into performance with custom visual reports.", n: "04", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Online hosting for easy access without on-site server maintenance.", n: "05", color: "text-sky-600", bg: "bg-sky-50" },
  { icon: Smartphone, title: "Mobile Accessibility", desc: "Access data anytime, anywhere using any mobile device.", n: "06", color: "text-indigo-600", bg: "bg-indigo-50" },
  { icon: Zap, title: "Automation & Workflows", desc: "Automate repetitive tasks like data entry and follow-ups.", n: "07", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Share2, title: "Collaboration Tools", desc: "Share updates and communicate in real-time with integrated tools.", n: "08", color: "text-rose-600", bg: "bg-rose-50" },
  { icon: Settings, title: "Scalability & Customization", desc: "Adapt fields and workflows as your business grows.", n: "09", color: "text-slate-600", bg: "bg-slate-50" },
  { icon: LineChart, title: "Sales Forecasting", desc: "Predict future revenue using historical data and AI insights.", n: "10", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Target, title: "Pipeline Management", desc: "Track deals across every stage of the sales cycle.", n: "11", color: "text-orange-600", bg: "bg-orange-50" },
  { icon: FileText, title: "Quote & Order Management", desc: "Generate accurate quotes and streamline order processing.", n: "12", color: "text-yellow-600", bg: "bg-yellow-50" },
  { icon: MessageCircle, title: "Omnichannel Support", desc: "Deliver consistent experiences across email, chat, and phone.", n: "13", color: "text-pink-600", bg: "bg-pink-50" },
  { icon: HelpCircle, title: "Self-Service Capabilities", desc: "Enable customers to find answers through knowledge bases.", n: "14", color: "text-teal-600", bg: "bg-teal-50" },
  { icon: Truck, title: "Field Service Management", desc: "Support remote teams with scheduling and mobile data access.", n: "15", color: "text-lime-600", bg: "bg-lime-50" },
  { icon: Mail, title: "Campaign Management", desc: "Plan, execute, and track marketing campaigns from one platform.", n: "16", color: "text-red-600", bg: "bg-red-50" },
  { icon: Navigation, title: "Journey Orchestration", desc: "Design personalized customer journeys through segmentation.", n: "17", color: "text-violet-600", bg: "bg-violet-50" },
  { icon: Link, title: "Third-Party Integrations", desc: "Connect with external systems like ERP and accounting tools.", n: "18", color: "text-blue-400", bg: "bg-blue-50" },
  { icon: ShieldAlert, title: "Data Security", desc: "Protect information with encryption and role-based access.", n: "19", color: "text-red-500", bg: "bg-red-50" }
];

export default function CRMCapabilitiesContent() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
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
              Comprehensive Toolkit
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
              19 Essential <br/>
              <span className="relative inline-block text-blue-600">
                CRM Features
               
                  <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                
              </span>
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl font-medium">
              The right platform reshapes how your business operates. By bringing together data, automation, and insights, our tools help teams work smarter, not harder.
            </p>

            <div className="flex justify-center gap-4">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">
                Learn More
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-600 transition-all">
                Get Started Free
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="relative py-24 overflow-hidden">
        {/* Large Watermark Background */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none">
          <span className="text-[300px] font-black text-slate-900 leading-none">CRM</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.03 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.04)", borderColor: "#2563eb" }}
                className="group relative flex flex-col p-8 bg-white border border-slate-100 rounded-[32px] transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${cap.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <cap.icon className={`w-7 h-7 ${cap.color}`} />
                  </div>
                  <span className="text-sm font-black text-slate-100 group-hover:text-blue-50 transition-colors">
                    {cap.n}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {cap.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SELECTION GUIDE CARD --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="bg-slate-900 rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
            <Settings className="w-96 h-96" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">
              Selection Guide
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">How to Choose the Right Features</h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 font-medium">
              Selecting the right CRM starts with understanding your business goals. Focus on features that align with your current workflows while supporting future scalability.
            </p>
            <button className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2 group">
              Talk to an Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER SPACING --- */}
      <div className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 font-medium italic tracking-wide">"Precision features for powerful growth."</p>
        </div>
      </div>
    </div>
  );
}
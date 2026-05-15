import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, BarChart3, FileText, CreditCard, Package, 
  CheckSquare, MapPin, Users, PieChart, Mail, 
  LayoutGrid, ArrowRight, Sparkles, CheckCircle2,
  ChevronDown, PlayCircle, Factory, Monitor
} from "lucide-react";

// --- DATA STRUCTURES ---
const stats = [
  { val: "2x", label: "High Response" },
  { val: "40%", label: "Lower Errors" },
  { val: "GPS", label: "Live Tracking" },
  { val: "SSL", label: "Data Security" }
];

const allModules = [
  { id: "01", title: "Lead Management", icon: Target, color: "text-blue-600", bg: "bg-blue-50", desc: "Capture, organize, and track leads from multiple channels in one centralized platform." },
  { id: "02", title: "Sales Pipeline", icon: BarChart3, color: "text-cyan-600", bg: "bg-cyan-50", desc: "Visualize your entire sales journey with drag-and-drop deal stages and revenue forecasting." },
  { id: "03", title: "Proposal Management", icon: FileText, color: "text-indigo-600", bg: "bg-indigo-50", desc: "Generate professional quotes and proposals instantly with automated templates and E-signatures." },
  { id: "04", title: "Invoice Management", icon: CreditCard, color: "text-emerald-600", bg: "bg-emerald-50", desc: "Automate billing, GST calculations, and payment reminders to ensure steady cash flow." },
  { id: "05", title: "Inventory Tracking", icon: Package, color: "text-amber-600", bg: "bg-amber-50", desc: "Monitor stock levels across multiple locations with real-time movement history." },
  { id: "06", title: "Task Assignment", icon: CheckSquare, color: "text-rose-600", bg: "bg-rose-50", desc: "Boost productivity with department-wise task allocation and automated notifications." },
  { id: "07", title: "Field Visit Tracking", icon: MapPin, color: "text-purple-600", bg: "bg-purple-50", desc: "Manage field operations with GPS-enabled check-ins and geo-tagged reports." },
  { id: "08", title: "Customer Management", icon: Users, color: "text-sky-600", bg: "bg-sky-50", desc: "Maintain 360-degree customer profiles with full interaction history and lifecycle tracking." },
  { id: "09", title: "Reports & Analytics", icon: PieChart, color: "text-orange-600", bg: "bg-orange-50", desc: "Make data-driven decisions with real-time dashboards and custom visual reporting." },
  { id: "10", title: "Email Integration", icon: Mail, color: "text-blue-400", bg: "bg-blue-50", desc: "Sync your business communication directly with CRM for organized conversation tracking." },
  { id: "11", title: "Project Tracker", icon: LayoutGrid, color: "text-teal-600", bg: "bg-teal-50", desc: "Monitor project milestones and resource allocation with collaborative tracking tools." },
];

const industryData = [
  { id: "01", label: "MANUFACTURING", title: "Manufacturing", desc: "Workforce, shifts, and compliance management.", icon: Factory },
  { id: "02", label: "SAAS / IT", title: "Technology", desc: "Subscription tracking and customer success workflows.", icon: Monitor }
];

export default function CoreCRMFeatures() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
              Everything you need in <br/>
              <span className="relative inline-block text-blue-600">
                one platform
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600/20" />
              </span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              A unified ecosystem built for modern teams to streamline sales, 
              operations, and customer management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- BUSINESS IMPACT STATS (Ref Image 2) --- */}
      <div className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-slate-900">{stat.val}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FEATURE GRID SECTION (Ref Image 1) --- */}
      <section id="features-target" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allModules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-2xl hover:shadow-blue-600/5 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${mod.bg} ${mod.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <mod.icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-black text-slate-100 group-hover:text-blue-50 transition-colors">{mod.id}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{mod.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
              Explore CRM <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-600 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* --- INDUSTRY SECTION (Ref Image 1 bottom) --- */}
      <section className="bg-slate-50/50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-[1px] bg-blue-600" />
               <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Industries</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Tailored for <br/>
              <span className="text-blue-600">your industry</span>
            </h2>
            <p className="mt-8 text-lg text-slate-500 font-medium leading-relaxed">
              Whether you're on the factory floor or in a tech hub, our platform 
              adapts to the unique challenges of your sector.
            </p>
          </div>

          <div className="lg:w-1/2 space-y-6">
            {industryData.map((ind, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-8 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ind.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                   <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase mb-1 block">{ind.label}</span>
                   <h4 className="text-2xl font-bold text-slate-900 mb-1">{ind.title}</h4>
                   <p className="text-slate-500 font-medium text-sm">{ind.desc}</p>
                </div>
                <div className="text-5xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">{ind.id}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[48px] p-12 md:p-24 text-white text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-white">Ready to Transform Your Operations?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all">Start Free Trial</button>
                <button className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all">Book a Free Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
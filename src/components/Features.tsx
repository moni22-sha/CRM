import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Target, BarChart3, FileText, CreditCard, Package, 
  CheckSquare, MapPin, Users, PieChart, Mail, 
  LayoutGrid, ArrowRight, Sparkles, CheckCircle2,
  ChevronDown, PlayCircle, Factory, Monitor
} from "lucide-react";

// --- UPDATED STATS DATA TO MATCH UPLOADED LAYOUT ---
const stats = [
  { val: "94.2%", label: "Attendance Today", change: "↑ 2.4% vs yesterday", color: "text-emerald-600", bg: "bg-emerald-50/60" },
  { val: "12", label: "Leave Requests", change: "3 pending approval", color: "text-amber-600", bg: "bg-amber-50/60" },
  { val: "₹48.2L", label: "Payroll Processed", change: "This month • On time", color: "text-blue-600", bg: "bg-blue-50/60" },
  { val: "10,000+", label: "Active Workers", change: "Verified securely", color: "text-purple-600", bg: "bg-purple-50/60" }
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

// --- FRAMER MOTION DESIGN TOKENS ---
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
};

const moduleCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 15 }
  }
};

export default function CoreCRMFeatures() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50/50">
        {/* Infinite floating atmospheric background canvas */}
        <motion.div 
          animate={{ 
            scale: [1, 1.12, 1],
            x: ["-50%", "-48%", "-50%"],
            y: ["-50%", "-52%", "-50%"]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 25 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
              Everything you need in <br/>
              <span className="relative inline-block text-blue-600 pb-2">
                one platform
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 origin-left" 
                />
              </span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              A unified ecosystem built for modern teams to streamline sales, 
              operations, and customer management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- BUSINESS IMPACT STATS (BOXES WITH FLUID LEFT MOVEMENT LOOP) --- */}
      <div className="py-14 border-y border-slate-100 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="flex gap-6 md:grid md:grid-cols-4 w-full"
            animate={{ x: ["0%", "-4%", "0%"] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  delay: i * 0.1 
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="min-w-[260px] md:min-w-0 flex-1 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm shadow-slate-100/80 flex flex-col justify-between transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.val}</div>
                </div>
                <div className={`mt-4 inline-flex items-center self-start px-2.5 py-1 rounded-md text-xs font-bold ${stat.color} ${stat.bg}`}>
                  {stat.change}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- FEATURE GRID SECTION --- */}
      <section id="features-target" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={gridContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {allModules.map((mod, i) => (
              <motion.div
                key={i}
                variants={moduleCardVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.04)", 
                  borderColor: "rgba(37, 99, 235, 0.25)" 
                }}
                whileTap={{ 
                  scale: 0.97,
                  borderColor: "rgba(37, 99, 235, 0.5)",
                  backgroundColor: "rgba(248, 250, 252, 0.95)",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)"
                }}
                className="group p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm transition-all duration-200 cursor-pointer select-none"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${mod.bg} ${mod.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95`}>
                    <mod.icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-black text-slate-200 group-hover:text-blue-200 group-active:text-blue-300 transition-colors duration-300">
                    {mod.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {mod.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {mod.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Explore CRM <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-600 transition-colors"
            >
              Schedule a Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- INDUSTRY SECTION --- */}
      <section className="bg-slate-50/50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: 48 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="h-[2px] bg-blue-600" 
               />
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
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 80, delay: i * 0.1 }}
                whileHover={{ 
                  x: 8,
                  borderColor: "rgba(37, 99, 235, 0.25)",
                  boxShadow: "0 12px 30px rgba(37, 99, 235, 0.03)"
                }}
                whileTap={{
                  scale: 0.99,
                  borderColor: "rgba(37, 99, 235, 0.45)"
                }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-8 group cursor-pointer select-none transition-all duration-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 group-active:scale-95 transition-transform duration-300">
                  <ind.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                   <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase mb-1 block">{ind.label}</span>
                   <h4 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{ind.title}</h4>
                   <p className="text-slate-500 font-medium text-sm">{ind.desc}</p>
                </div>
                <div className="text-5xl font-black text-slate-100 group-hover:text-blue-200 group-active:text-blue-300 transition-colors duration-300">{ind.id}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60 }}
            whileHover={{ y: -4 }}
            className="bg-slate-900 rounded-[48px] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-white">Ready to Transform Your Operations?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-600/10 transition-colors"
                >
                  Start Free Trial
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.04, y: -2, backgroundColor: "#f8fafc" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl transition-all"
                >
                  Book a Free Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Users, BarChart3, Share2, Maximize, CheckCircle2 } from "lucide-react";

const BENEFITS = [
  { title: "Centralized Management", icon: Users, desc: "Access accurate customer info across all teams instantly.", num: "01", color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Improved Collaboration", icon: Share2, desc: "Share information and align teams toward common goals.", num: "02", color: "text-purple-600", bg: "bg-purple-50" },
  { title: "Easy Accessibility", icon: Zap, desc: "Cloud-based access from any device, anywhere, anytime.", num: "03", color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Scalability", icon: Maximize, desc: "Grow your business without technical disruptions.", num: "04", color: "text-amber-600", bg: "bg-amber-50" },
  { title: "Insights & Reporting", icon: BarChart3, desc: "Deeper analytics to drive smarter business decisions.", num: "05", color: "text-rose-600", bg: "bg-rose-50" }
];

export default function CRMOverviewContent() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Trusted CRM Ecosystem
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
              The Engine Behind <br/>
              <span className="relative inline-block text-blue-600">
                Seamless Growth
               
                  <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl font-medium">
              Understand how modern CRM software transforms data into relationships. 
              Our platform eliminates silos and powers your entire business operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-200 transition-all">
                Watch 2-min Overview
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHAT IS CRM SECTION --- */}
      <section className="relative py-24 overflow-hidden">
        {/* Large Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[400px] font-black text-slate-900">CRM</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-blue-600/30" />
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">What is CRM?</span>
            <div className="h-[1px] w-12 bg-blue-600/30" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Transform data into <br />
                <span className="text-blue-600">meaningful insights.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6 font-medium">
                At its core, CRM software handles the communication gaps between departments such as sales, marketing, and support. It serves as a central hub for all customer interactions.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                From contact details to communication history, everything is organized to ensure you deliver a consistent experience every time.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-2xl shadow-slate-200/50"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                What You'll Learn
              </h4>
              <div className="grid gap-5">
                {["System Architecture", "AI-Powered Workflows", "Cloud Implementation", "Data Security Protocols", "Strategic Decision Making"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <span className="text-slate-200 font-black text-lg group-hover:text-blue-600 transition-colors">0{i+1}</span>
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS GRID SECTION --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-blue-600" />
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Core Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Everything you need in <br />
              <span className="text-blue-600">one powerful platform.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-10 bg-white border border-slate-100 rounded-[32px] hover:shadow-2xl hover:shadow-blue-900/5 transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <span className="text-slate-100 font-black text-3xl group-hover:text-blue-50 transition-colors">
                    {benefit.num}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{benefit.title}</h4>
                <p className="text-slate-500 leading-relaxed text-lg">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AI & CLOUD SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Feature Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-slate-900 rounded-[48px] p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Zap className="w-40 h-40" />
            </div>
            <h2 className="text-3xl font-bold mb-10 text-blue-400">AI-Powered Ecosystem</h2>
            <div className="space-y-6">
              {[
                { t: "Lead Prioritization", d: "AI identifies high-potential leads automatically." },
                { t: "Workflow Automation", d: "Eliminate repetitive manual data entry." },
                { t: "Predictive Analytics", d: "Identify patterns to predict customer needs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <h5 className="font-bold text-lg">{item.t}</h5>
                    <p className="text-slate-400">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cloud Feature Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-blue-600 rounded-[48px] p-12 text-white relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 p-12 opacity-10">
              <Layers className="w-40 h-40" />
            </div>
            <h2 className="text-3xl font-bold mb-10">Cloud Infrastructure</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Access your data securely from any device, anywhere in the world. No hardware, no complex installation—just pure efficiency.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Automatic Updates", "Global Access", "Bank-grade Security", "Zero Maintenance"].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-blue-200" />
                  <span className="font-bold text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
          Ready to scale your <br />
          <span className="text-blue-600">customer operations?</span>
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">
            Start Free Trial
          </button>
          <button className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-200 transition-all">
            Talk to an Expert
          </button>
        </div>
      </section>
    </div>
  );
}
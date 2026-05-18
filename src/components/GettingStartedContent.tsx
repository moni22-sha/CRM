import { motion, Variants } from "framer-motion";
import {
  ArrowRight, CheckCircle2, ChevronRight, Target, Search,
  ClipboardList, Settings, Database, FlaskConical, Users,
  Rocket, TrendingUp, Sparkles
} from "lucide-react";

const STEPS = [
  { title: "Identify Goals", icon: Target, desc: "Define what success looks like for your business.", n: "01", color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Select CRM", icon: Search, desc: "Choose the platform that fits your scaling needs.", n: "02", color: "text-purple-600", bg: "bg-purple-50" },
  { title: "Create Plan", icon: ClipboardList, desc: "Map out the roadmap for a smooth rollout.", n: "03", color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Customize", icon: Settings, desc: "Tailor the system to your specific workflows.", n: "04", color: "text-amber-600", bg: "bg-amber-50" },
  { title: "Migrate Data", icon: Database, desc: "Securely move your records into the ecosystem.", n: "05", color: "text-rose-600", bg: "bg-rose-50" },
  { title: "Test System", icon: FlaskConical, desc: "Ensure everything works as expected before launch.", n: "06", color: "text-cyan-600", bg: "bg-cyan-50" },
  { title: "Train Team", icon: Users, desc: "Empower your staff with hands-on sessions.", n: "07", color: "text-indigo-600", bg: "bg-indigo-50" },
  { title: "Go Live", icon: Rocket, desc: "Officially launch and start managing relationships.", n: "08", color: "text-orange-600", bg: "bg-orange-50" },
  { title: "Optimize", icon: TrendingUp, desc: "Continuously review and improve your processes.", n: "09", color: "text-teal-600", bg: "bg-teal-50" }
];

// --- Animation Configurations ---
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const underlineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { delay: 0.8, duration: 0.8, ease: "easeInOut" }
  }
};

export default function GettingStartedContent() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">

      {/* --- CENTERED HERO SECTION --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50">
        {/* Animated fluid background glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            x: ["-50%", "-48%", "-50%"],
            y: ["-50%", "-52%", "-50%"]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Centered Badge with subtle pulse */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8 cursor-default"
            >
              <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
              Implementation Guide
            </motion.div>

            {/* Centered Heading with Dynamic SVG Underline Draw-in */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight"
            >
              CRM Strategy <br />
              <span className="relative inline-block text-blue-600 pb-3">
                Step-by-Step
                <svg className="absolute left-0 bottom-0 w-full h-3 text-blue-500" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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

            {/* Centered Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl font-medium"
            >
              A successful rollout is more than just software—it's a strategic shift.
              Follow our proven roadmap to ensure seamless adoption across your team.
            </motion.p>

            {/* Centered Interactive Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Download PDF Guide <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.04, y: -2, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 shadow-sm transition-all"
              >
                Get Started Free
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHAT WE COVER (Scroll Activated) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-blue-600/30" />
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Roadmap Overview</span>
          <div className="h-[1px] w-12 bg-blue-600/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUpVariants} className="text-4xl font-black text-slate-900">
              What we'll cover in this guide
            </motion.h2>
            <motion.p variants={fadeInUpVariants} className="text-lg text-slate-500 font-medium">
              From defining initial business goals to migrating complex legacy data, we break down the journey into manageable milestones.
            </motion.p>
            <div className="space-y-4">
              {["System configuration", "Data migration", "User adoption training"].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUpVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-bold text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Dashboard Concept Box with Hover Lift */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", duration: 0.8 }}
            whileHover={{ y: -6 }}
            className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Ambient background blob inside card */}
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
            <h4 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              What is CRM?
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Customer Relationship Management (CRM) is a system designed to manage and improve interactions with both current and potential customers. It helps businesses organize data, automate workflows and align teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- IMPLEMENTATION STEPS GRID --- */}
      <section className="relative py-24 overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">The Implementation Process</h2>
            <p className="text-slate-500 text-lg font-medium max-w-xl mx-auto">Follow our nine-step framework to transition your business to a unified digital ecosystem.</p>
          </motion.div>

          {/* Staggered load-in grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.05)",
                  borderColor: "rgba(37, 99, 235, 0.25)"
                }}
                whileTap={{ 
                  scale: 0.97,
                  borderColor: "rgba(37, 99, 235, 0.6)",
                  backgroundColor: "rgba(248, 250, 252, 0.95)",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.1)"
                }}
                className="group flex flex-col p-8 bg-white border border-slate-100 rounded-[32px] transition-all duration-200 cursor-pointer select-none"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-300`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <span className="text-slate-100 font-black text-3xl group-hover:text-blue-100 group-active:text-blue-200 transition-colors duration-300 select-none">
                    {step.n}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- EXPERT CARD --- */}
      <section className="py-18 max-w-5xl mx-auto px-6 my-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60 }}
          whileHover={{ y: -4 }}
          className="bg-slate-900 rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Gradient overlay background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why work with <br /><span className="text-blue-400">thebot experts?</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-0">
                Partnering with our implementation specialists simplifies the transition.
                We configure the system to match your goals and ensure 100% team adoption.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Speak to an Expert <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Ready to transform <br />
            <span className="text-blue-600">your management?</span>
          </h3>
          <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto font-medium">
            Start using a powerful CRM to manage leads and automate workflows today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Get Started Free <ChevronRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.04, y: -2, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 transition-all"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
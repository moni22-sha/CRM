import { motion } from "framer-motion";
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

export default function GettingStartedContent() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">

      {/* --- CENTERED HERO SECTION --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Centered Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3 h-3" />
              Implementation Guide
            </div>

            {/* Centered Heading with Signature Underline */}
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
              CRM Strategy <br />
              <span className="relative inline-block text-blue-600">
                Step-by-Step
                
                  <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                
              </span>
            </h1>

            {/* Centered Description */}
            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl font-medium">
              A successful rollout is more than just software—it's a strategic shift.
              Follow our proven roadmap to ensure seamless adoption across your team.
            </p>

            {/* Centered Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                Download PDF Guide <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-200 transition-all">
                Get Started Free
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHAT WE COVER --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-blue-600/30" />
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Roadmap Overview</span>
          <div className="h-[1px] w-12 bg-blue-600/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-slate-900">What we'll cover in this guide</h2>
            <p className="text-lg text-slate-500 font-medium">From defining initial business goals to migrating complex legacy data, we break down the journey into manageable milestones.</p>
            <div className="space-y-4">
              {["System configuration", "Data migration", "User adoption training"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
            
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">What is CRM?</h4>
            <p className="text-slate-400 leading-relaxed">
              Customer Relationship Management (CRM) is a system designed to manage and improve interactions with both current and potential customers. It helps businesses organize data, automate workflows and align teams.
            </p>
          </div>
        </div>
      </section>

      {/* --- IMPLEMENTATION STEPS GRID --- */}
      <section className="relative py-24 overflow-hidden bg-slate-50/50">
        {/* Large Watermark Background */}
       

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">The Implementation Process</h2>
            <p className="text-slate-500 text-lg font-medium max-w-xl mx-auto">Follow our nine-step framework to transition your business to a unified digital ecosystem.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
                className="group flex flex-col p-8 bg-white border border-slate-100 rounded-[32px] transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <span className="text-slate-100 font-black text-3xl group-hover:text-blue-50 transition-colors">
                    {step.n}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- EXPERT CARD --- */}
      <section className="py-18 max-w-5xl mx-auto px-6">
        <motion.div
          whileHover={{ scale: 1.005 }}
          className="bg-slate-900 rounded-[48px] p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10">
         
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why work with <br /><span className="text-blue-400">thebot experts?</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Partnering with our implementation specialists simplifies the transition.
                We configure the system to match your goals and ensure 100% team adoption.
              </p>
             
            </div>
            
            <div className="flex justify-center">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                Speak to an Expert 
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
          Ready to transform <br />
          <span className="text-blue-600">your management?</span>
        </h3>
        <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto font-medium">
          Start using a powerful CRM to manage leads and automate workflows today. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            Get Started Free <ChevronRight className="w-5 h-5" />
          </button>
          <button className="px-12 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-200 transition-all">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
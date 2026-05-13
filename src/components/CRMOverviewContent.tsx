import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Users, Share2, Zap, Maximize, BarChart3 } from "lucide-react";

const BENEFITS = [
  { title: "Centralized Management", icon: Users, desc: "Access accurate customer info across all teams instantly." },
  { title: "Improved Collaboration", icon: Share2, desc: "Share information and align teams toward common goals." },
  { title: "Easy Accessibility", icon: Zap, desc: "Cloud-based access from any device, anywhere, anytime." },
  { title: "Scalability", icon: Maximize, desc: "Grow your business without technical disruptions or limits." },
  { title: "Insights & Reporting", icon: BarChart3, desc: "Deeper analytics to drive smarter business decisions." }
];

export default function CRMOverviewContent() {
  return (
    <div className="pt-20 pb-24 italic overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 mb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a3fa8 0%, #1254c0 45%, #6d28d9 100%)" }}>
        <div className="absolute inset-0 -z-10" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-30 rounded-full blur-3xl" style={{ background: "#a855f7" }} />
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-8 text-center">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white text-center"></span>
              </span>
              Platform Overview
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] non-italic">
              The Engine Behind <br/>
              <span className="text-#00c2ff">Seamless Growth.</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed mb-10 max-w-2xl">
              Understand how modern CRM software transforms data into relationships. Our platform is built to eliminate silos and power up your entire business ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-5 bg-#00c2ff text-white font-bold rounded-2xl shadow-xl shadow-[#00c2ff]/80 flex items-center justify-center gap-2 group non-italic hover:bg-[#00a8e6] transition-all">
                Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-5 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all italic">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 italic">💡 What Is <span className="text-brand">CRM Software?</span></h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  At its core, CRM software transforms customer data into meaningful insights that help businesses deliver better experiences. It removes communication gaps between departments such as sales, marketing, customer support, and operations.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A CRM system serves as a central hub where all customer data is stored and organized — including contact details, communication history, preferences, and interactions.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative group">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform bg-gradient-to-br from-green-400 to-green-600">
                <CheckCircle2 className="text-white w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 non-italic">📚 What You’ll Learn</h4>
              <div className="grid gap-4">
                {[
                  "What CRM software is",
                  "Key benefits of CRM software",
                  "How CRM uses AI",
                  "What cloud-based CRM means",
                  "Common CRM challenges",
                  "How to choose the right CRM"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                    <span className="font-bold text-slate-700 italic">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="mb-32">
            <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center italic">🚀 The <span className="text-brand">Benefits</span> of CRM Software</h2>
            
            <div className="relative py-10">
              {/* The Trunk (Vertical Line) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  className="w-full bg-brand origin-top"
                />
              </div>

              <div className="relative space-y-16 md:space-y-24">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <motion.div 
                      initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`flex-1 w-full md:w-auto ${i % 2 === 0 ? 'md:pl-24' : 'md:pr-24'} text-center ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-brand rounded-xl font-bold italic text-xl mb-4 shadow-lg`}>
                        {i + 1}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 italic">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed italic max-w-sm mx-auto md:ml-0 md:mr-0 lg:max-w-md">
                        {benefit.desc}
                      </p>
                    </motion.div>

                    {/* Branch Point (The Node) */}
                    <div className="relative flex-shrink-0 z-10 group">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                        className="w-16 h-16 bg-white border-4 border-brand rounded-full flex items-center justify-center text-brand shadow-xl relative"
                      >
                        <benefit.icon className="w-8 h-8" />
                        {/* Branch line to content (Desktop) */}
                        <div className={`absolute top-1/2 -translate-y-1/2 h-1 bg-brand/30 w-24 hidden md:block ${i % 2 === 0 ? 'left-full' : 'right-full'}`} />
                        <div className={`absolute top-1/2 -translate-y-1/2 h-1 bg-brand w-0 group-hover:w-24 transition-all duration-500 hidden md:block ${i % 2 === 0 ? 'left-full' : 'right-full'}`} />
                      </motion.div>
                    </div>

                    {/* Empty Side (For spacing) */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20 bg-slate-900 rounded-[2.5rem] p-12 text-white">
            <h2 className="text-3xl font-bold mb-12 text-brand italic">🤖 How CRM Software Uses AI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Lead Prioritization", desc: "AI analyzes customer data to identify high-potential leads and suggest the best actions to convert them." },
                { title: "Workflow Automation", desc: "Routine tasks such as data entry, follow-ups, and responses can be automated, saving time and increasing efficiency." },
                { title: "24/7 Customer Support", desc: "AI-powered assistants can handle customer queries anytime, improving response times and customer satisfaction." },
                { title: "Personalized Experiences", desc: "AI uses customer data to recommend products, offers, and communication strategies tailored to individual preferences." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-brand mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
             <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-[2.5rem]">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">☁️ Cloud-Based CRM</h2>
                <p className="text-slate-600 mb-8">Cloud-based CRM systems operate online, allowing businesses to access data anytime from any device. This approach reduces costs, simplifies maintenance, and ensures data security.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "No hardware or installation",
                    "Access from anywhere",
                    "Automatic updates",
                    "Lower upfront costs",
                    "Improved security"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
             </div>
          </section>

          <div className="text-center pt-20 border-t border-slate-100">
             <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to build stronger customer relationships?</h3>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20">Start Free Trial</button>
               <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200">Contact Us</button>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

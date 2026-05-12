import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CRMOverviewContent() {
  return (
    <div className="pt-20 pb-24 italic overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#00AEEF]/5 -z-10" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        
      <div className="max-w-7xl mx-auto px-4">
          {/* Change: Set max-w-4xl and mx-auto to center the motion div */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Platform Overview
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] italic">
              The Engine Behind <br />
              <span className="text-brand">Seamless Growth.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Understand how modern CRM software transforms data into relationships. Our platform is built to eliminate silos and power up your entire business ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <button className="px-8 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2 group italic">
                Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-5 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all italic flex items-center justify-center">
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
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                <CheckCircle2 className="text-white w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 italic">📚 What You’ll Learn</h4>
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

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">🚀 The Benefits of CRM Software</h2>
            <div className="space-y-6">
              {[
                { title: "Centralized Contact Management", desc: "CRM ensures all teams have access to accurate and up-to-date customer information, including past interactions, purchase history, and service records." },
                { title: "Improved Collaboration", desc: "Teams can easily share information and communicate within the system, ensuring everyone is aligned and working toward common goals." },
                { title: "Easy Setup and Accessibility", desc: "Cloud-based CRM systems eliminate the need for hardware or complex installations, allowing businesses to get started quickly and focus on growth." },
                { title: "Scalability", desc: "As your business grows, CRM systems can scale with you by adding users, features, and capabilities without disruption." },
                { title: "Insights and Reporting", desc: "CRM platforms provide dashboards and analytics that help track performance, forecast trends, and guide smarter business decisions." }
              ].map((benefit, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">🔹 {benefit.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
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

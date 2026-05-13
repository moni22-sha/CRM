import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight, Target, Search, ClipboardList, Settings, Database, FlaskConical, Users, Rocket, TrendingUp } from "lucide-react";

const STEPS = [
  { title: "Identify Goals", icon: Target, desc: "Define what success looks like for your business." },
  { title: "Select CRM", icon: Search, desc: "Choose the platform that fits your scaling needs." },
  { title: "Create Plan", icon: ClipboardList, desc: "Map out the roadmap for a smooth rollout." },
  { title: "Customize", icon: Settings, desc: "Tailor the system to your specific workflows." },
  { title: "Migrate Data", icon: Database, desc: "Securely move your existing records into CRM." },
  { title: "Test System", icon: FlaskConical, desc: "Ensure everything works as expected before launch." },
  { title: "Train Team", icon: Users, desc: "Empower your staff with hands-on training sessions." },
  { title: "Go Live", icon: Rocket, desc: "Officially launch and start managing relationships." },
  { title: "Optimize", icon: TrendingUp, desc: "Continuously review and improve your processes." }
];

export default function GettingStartedContent() {
  return (
    <div className="pt-32 pb-24 italic">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">CRM Implementation: <span className="text-brand">Step-by-Step Guide</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Learn why CRM implementation matters and how to successfully set it up for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20">Learn More</button>
              <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200">Get Started Free</button>
            </div>
          </div>

          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">What we’ll cover:</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Step-by-step implementation process",
                "Defining business goals",
                "Data migration best practices",
                "Team training and adoption",
                "Success stories & examples"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 bg-brand rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20 space-y-8">
            <div className="bg-slate-50 p-10 rounded-[2.5rem]">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">What is CRM?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Customer Relationship Management (CRM) is a system designed to manage and improve interactions with both current and potential customers. It helps businesses organise data, automate workflows and align teams across sales, marketing, service, and IT.
              </p>
            </div>
          </section>

          <section className="mb-32">
            <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center italic">The <span className="text-brand">Implementation</span> Process</h2>
            
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
                {STEPS.map((step, i) => (
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
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 italic">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed italic max-w-sm mx-auto md:ml-0 md:mr-0 lg:max-w-md">
                        {step.desc}
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
                        <step.icon className="w-8 h-8" />
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

          <section className="mb-20 bg-brand p-12 rounded-[3rem] text-white">
            <h2 className="text-3xl font-bold mb-6">Why work with an expert?</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Partnering with CRM specialists can simplify the entire process. Experts help configure the system to match your business goals, streamline workflows and ensure smooth adoption.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white/50" />
                <span>Reduced deployment risks</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white/50" />
                <span>Customised workflows for your team</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white/50" />
                <span>Advanced AI and automation setup</span>
              </li>
            </ul>
          </section>

          <div className="text-center pt-24 border-t border-slate-100">
             <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display">Ready to Transform Your <br />Customer Management?</h3>
             <p className="text-slate-500 mb-10 text-lg">Start using a powerful CRM to manage leads and automate workflows today.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-10 py-5 bg-brand text-white font-bold rounded-2xl shadow-xl shadow-brand/20 flex items-center justify-center gap-2">
                  Get Started Free
                  <ChevronRight className="w-5 h-5" />
               </button>
               <button className="px-10 py-5 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200">Learn More</button>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

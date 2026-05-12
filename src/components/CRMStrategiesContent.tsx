import { motion } from "motion/react";
import { TrendingUp, CheckCircle2, ChevronRight, Zap, Target, ClipboardList, Settings, UserCheck, Cpu, Database, Share2 } from "lucide-react";

const STRATEGIES = [
  { title: "Choose the Right CRM", icon: Target, desc: "Evaluate scaling and integration." },
  { title: "Define Clear goals", icon: CheckCircle2, desc: "Establish measurable retention goals." },
  { title: "Strong Implementation", icon: ClipboardList, desc: "Map workflows and migrate data." },
  { title: "Customize Experience", icon: Settings, desc: "Align with how your teams work." },
  { title: "Employee Training", icon: UserCheck, desc: "Ensure long-term adoption." },
  { title: "Leverage AI", icon: Cpu, desc: "Automate follow-ups and insights." },
  { title: "Data Cleanliness", icon: Database, desc: "Regularly clean records." },
  { title: "Team Collaboration", icon: Share2, desc: "Eliminate confusion silos." }
];

export default function CRMStrategiesContent() {
  return (
    <div className="pt-32 pb-24 italic overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
        >
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-display italic">8 Proven <span className="text-brand">CRM Practices</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A powerful CRM system brings all your customer data into one place. Follow these strategies to synchronize your business.
            </p>
          </div>

          {/* Tree Mind Map Section */}
          <div className="relative py-20">
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
              {STRATEGIES.map((strat, i) => (
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
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 italic">{strat.title}</h3>
                    <p className="text-slate-600 leading-relaxed italic max-w-sm mx-auto md:ml-0 md:mr-0 lg:max-w-md">
                      {strat.desc}
                    </p>
                  </motion.div>

                  {/* Branch Point (The Node) */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                      className="w-16 h-16 bg-white border-4 border-brand rounded-full flex items-center justify-center text-brand shadow-xl relative"
                    >
                      <strat.icon className="w-8 h-8" />
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

          <div className="mt-24 bg-brand p-12 rounded-[3rem] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10">
              <TrendingUp className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 italic">Conclusion</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed italic max-w-2xl">
                By following these strategies, your business can unlock the full potential of your CRM system. A well-optimized CRM empowers your teams and improves efficiency.
              </p>
              <div className="flex items-center gap-2 font-bold text-white cursor-pointer hover:gap-4 transition-all italic">
                Get Started with Your Strategy Now <ChevronRight />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

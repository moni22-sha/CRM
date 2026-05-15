import { motion } from "framer-motion";
import { Users2, MessageSquare, TrendingUp, ShoppingCart, Settings2, Sparkles, ArrowRight, ChevronRight } from "lucide-react";

const useCases = [
  { 
    icon: Users2, 
    title: "Sales: Boosting Productivity", 
    company: "Commercial Real Estate", 
    desc: "AI-powered CRM reduced administration by automating research and drafts, allowing reps to focus on relationships.",
    n: "01",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  { 
    icon: MessageSquare, 
    title: "Service: Faster Support", 
    company: "Staffing Agency", 
    desc: "AI responses reduced agent wait times, improving quality and consistency across all inquiries.",
    n: "02",
    color: "text-cyan-600",
    bg: "bg-cyan-50"
  },
  { 
    icon: TrendingUp, 
    title: "Marketing: Personalization", 
    company: "Global Streaming", 
    desc: "Targeted campaigns driven by dynamic segmentation resulted in higher engagement and subscription revenue.",
    n: "03",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  { 
    icon: ShoppingCart, 
    title: "Commerce: Shopper Experience", 
    company: "Sports Brand", 
    desc: "Analyzed behavioral data to provide tailored recommendations that boosted online conversion rates.",
    n: "04",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  { 
    icon: Settings2, 
    title: "IT: Operational Efficiency", 
    company: "Food Delivery", 
    desc: "Unified multiple legacy systems into a single platform for faster scaling and data accessibility.",
    n: "05",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  }
];

export default function CRMUseCasesContent() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* --- CENTERED HERO SECTION --- */}
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
              Impact Study
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
              Success <br/>
              <span className="relative inline-block text-blue-600">
                Stories
               
                  <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-3xl font-medium">
              Real-world success stories show how organizations turn CRM strategy into 
              measurable results across every industry and business function.
            </p>

            <div className="flex justify-center">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                View All Case Studies <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CASE STUDIES LIST --- */}
      <section className="relative py-24 overflow-hidden">
        {/* Large Watermark */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[300px] font-black text-slate-900 leading-none">RESULTS</span>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-20">
            <div className="h-[1px] w-12 bg-blue-600/30" />
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Industry Transformations</span>
            <div className="h-[1px] w-12 bg-blue-600/30" />
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
                className="group flex flex-col md:flex-row gap-8 items-center p-10 bg-white border border-slate-100 rounded-[40px] transition-all"
              >
                <div className={`w-20 h-20 ${useCase.bg} flex-shrink-0 rounded-[1.5rem] flex items-center justify-center ${useCase.color} group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-10 h-10" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <span className="text-blue-600 font-black text-lg">{useCase.n}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">{useCase.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{useCase.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{useCase.desc}</p>
                </div>

                <div className="flex-shrink-0">
                  <button className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-blue-800">
                    Case Study <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA CARD --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="bg-slate-900 rounded-[48px] p-16 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 p-12 opacity-5">
            
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">Ready to Start Your Journey?</h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              Every successful story starts with setting the consumer at the center of your business. 
              Your organization could be the next industry leader.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">
                Get Started Free
              </button>
              <button className="px-12 py-5 bg-transparent text-white font-bold rounded-2xl border border-white/20 hover:bg-white/5 transition-all">
                Talk to Sales
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <div className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 font-medium italic tracking-wide">"Building the future of relationship management, one story at a time."</p>
        </div>
      </div>
    </div>
  );
}

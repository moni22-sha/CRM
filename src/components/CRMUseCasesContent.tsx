import { motion, Variants } from "framer-motion";
import { 
  Users2, MessageSquare, TrendingUp, ShoppingCart, Settings2, 
  Sparkles, ArrowRight, ChevronRight 
} from "lucide-react";

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

export default function CRMUseCasesContent() {
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
            {/* Centered Badge with rotating star */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8 cursor-default"
            >
              <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
              Impact Study
            </motion.div>
            
            {/* Centered Heading with Dynamic SVG Underline Draw-in */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight"
            >
              Success <br/>
              <span className="relative inline-block text-blue-600 pb-3">
                Stories
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
              className="text-xl text-slate-500 leading-relaxed mb-12 max-w-3xl font-medium"
            >
              Real-world success stories show how organizations turn CRM strategy into 
              measurable results across every industry and business function.
            </motion.p>

            {/* Interactive Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.button 
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                View All Case Studies <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES LIST --- */}
      <section className="relative py-24 overflow-hidden">
        {/* Large Watermark */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none">
          <span className="text-[300px] font-black text-slate-900 leading-none">RESULTS</span>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-20">
            <div className="h-[1px] w-12 bg-blue-600/30" />
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Industry Transformations</span>
            <div className="h-[1px] w-12 bg-blue-600/30" />
          </div>

          {/* Smooth Scroll Orchestration & Individual Tactile Click Feedback */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            {useCases.map((useCase, i) => (
              <motion.div 
                key={i}
                variants={fadeInUpVariants}
                whileHover={{ 
                  y: -6, 
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.04)",
                  borderColor: "rgba(37, 99, 235, 0.25)"
                }}
                whileTap={{ 
                  scale: 0.98,
                  borderColor: "rgba(37, 99, 235, 0.5)",
                  backgroundColor: "rgba(248, 250, 252, 0.95)",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.08)"
                }}
                className="group flex flex-col md:flex-row gap-8 items-center p-10 bg-white border border-slate-100 rounded-[40px] transition-all duration-200 cursor-pointer select-none"
              >
                {/* Responsive Dynamic Icon Box */}
                <div className={`w-20 h-20 ${useCase.bg} flex-shrink-0 rounded-[1.5rem] flex items-center justify-center ${useCase.color} group-hover:scale-110 group-active:scale-95 transition-transform duration-300`}>
                  <useCase.icon className="w-10 h-10" />
                </div>
                
                {/* Body Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <span className="text-blue-600 font-black text-lg">{useCase.n}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">{useCase.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{useCase.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{useCase.desc}</p>
                </div>

                {/* Link Action Trigger */}
                <div className="flex-shrink-0">
                  <button className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 group-active:text-blue-800 transition-all duration-300">
                    Case Study <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER CTA CARD --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60 }}
          whileHover={{ y: -4 }}
          className="bg-slate-900 rounded-[48px] p-16 text-white text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle decorative background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">Ready to Start Your Journey?</h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              Every successful story starts with setting the consumer at the center of your business. 
              Your organization could be the next industry leader.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors"
              >
                Get Started Free
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-transparent text-white font-bold rounded-2xl border border-white/20 transition-all"
              >
                Talk to Sales
              </motion.button>
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
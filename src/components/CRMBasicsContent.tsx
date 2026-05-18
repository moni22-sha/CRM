import { motion, Variants } from "framer-motion";
import { Info, Target, Users, Layout, Sparkles, ArrowRight, ChevronRight } from "lucide-react";

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

export default function CRMBasicsContent() {
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
            {/* Centered Badge with spinning icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8 cursor-default"
            >
              <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
              Foundations
            </motion.div>
            
            {/* Centered Heading with Dynamic SVG Underline Draw-in */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight"
            >
              CRM <br/>
              <span className="relative inline-block text-blue-600 pb-3">
                Basics
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
              Understand how CRM helps you manage customer data and build stronger relationships across your business.
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
                Get Started <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRIMARY CARDS SECTION --- */}
      <section className="relative py-24 overflow-hidden">
        {/* Large Watermark Background */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none">
          <span className="text-[300px] font-black text-slate-900 leading-none uppercase">Basics</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main Focus Split Deck */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 mb-24"
          >
            {/* Box 1 */}
            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.04)",
                borderColor: "rgba(37, 99, 235, 0.25)"
              }}
              whileTap={{ 
                scale: 0.98,
                borderColor: "rgba(37, 99, 235, 0.5)",
                backgroundColor: "rgba(248, 250, 252, 0.95)"
              }}
              className="p-10 bg-white border border-slate-100 rounded-[40px] transition-all duration-200 group cursor-pointer select-none"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                <Info className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">What is CRM?</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                Customer Relationship Management isn't just software; it's a strategy to grow your business by putting customers at the center of everything you do.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.04)",
                borderColor: "rgba(37, 99, 235, 0.25)"
              }}
              whileTap={{ 
                scale: 0.98,
                borderColor: "rgba(37, 99, 235, 0.5)",
                backgroundColor: "rgba(248, 250, 252, 0.95)"
              }}
              className="p-10 bg-white border border-slate-100 rounded-[40px] transition-all duration-200 group cursor-pointer select-none"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">The Main Goal</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                To gather, organize, and manage all customer interactions in one spot so you can provide better service and close more deals effortlessly.
              </p>
            </motion.div>
          </motion.div>

          {/* --- WHY NEEDED (Grid Style) --- */}
          <div className="space-y-16">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-blue-600/30" />
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">The Value Add</span>
              <div className="h-[1px] w-12 bg-blue-600/30" />
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid sm:grid-cols-3 gap-12 lg:gap-16"
            >
              {[
                { icon: Users, title: "Better Relations", desc: "Know exactly what your customers need and when they need it." },
                { icon: Layout, title: "Organized Data", desc: "No more messy spreadsheets or fragmented contacts." },
                { icon: Target, title: "Higher Sales", desc: "Identify leads that actually convert into long-term customers." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUpVariants}
                  whileTap={{ scale: 0.97 }}
                  className="flex flex-col gap-6 group cursor-pointer select-none"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-active:scale-95 transition-all duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-2xl mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA CARD (Dark Style) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60 }}
          whileHover={{ y: -4 }}
          className="bg-slate-900 rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Subtle overlay shading */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">Ready to dive deeper?</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Continue to our full guide on CRM Overview to learn about the powerful technology 
              driving modern business growth and digital transformation.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Read Full Guide <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER SPACING --- */}
      <div className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 font-medium">© 2026 thebot. Strategic Management Systems.</p>
        </div>
      </div>
    </div>
  );
}
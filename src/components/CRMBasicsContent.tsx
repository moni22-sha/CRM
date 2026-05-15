import { motion } from "framer-motion";
import { Info, Target, Users, Layout, Sparkles, ArrowRight, ChevronRight } from "lucide-react";

export default function CRMBasicsContent() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* --- CENTERED HERO SECTION --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50">
        {/* Background glow for depth */}
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
              Foundations
            </div>
            
            {/* Centered Heading with Signature Underline */}
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
              CRM <br/>
              <span className="relative inline-block text-blue-600">
                Basics
               
                  <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            
              </span>
            </h1>
            
            {/* Centered Description */}
            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl font-medium">
              Understand how CRM helps you manage customer data and build stronger relationships across your business.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center gap-4">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PRIMARY CARDS SECTION --- */}
      <section className="relative py-24 overflow-hidden">
        {/* Large Watermark Background */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[300px] font-black text-slate-900 leading-none uppercase">Basics</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
              className="p-10 bg-white border border-slate-100 rounded-[40px] transition-all group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                <Info className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">What is CRM?</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                Customer Relationship Management isn't just software; it's a strategy to grow your business by putting customers at the center of everything you do.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
              className="p-10 bg-white border border-slate-100 rounded-[40px] transition-all group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">The Main Goal</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                To gather, organize, and manage all customer interactions in one spot so you can provide better service and close more deals effortlessly.
              </p>
            </motion.div>
          </div>

          {/* --- WHY NEEDED (Grid Style) --- */}
          <div className="space-y-16">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-blue-600/30" />
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">The Value Add</span>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-12 lg:gap-16">
              {[
                { icon: Users, title: "Better Relations", desc: "Know exactly what your customers need and when they need it." },
                { icon: Layout, title: "Organized Data", desc: "No more messy spreadsheets or fragmented contacts." },
                { icon: Target, title: "Higher Sales", desc: "Identify leads that actually convert into long-term customers." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-2xl mb-3">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA CARD (Dark Style) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="bg-slate-900 rounded-[48px] p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
            
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">Ready to dive deeper?</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Continue to our full guide on CRM Overview to learn about the powerful technology 
              driving modern business growth and digital transformation.
            </p>
            <button className="px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
              Read Full Guide <ChevronRight className="w-5 h-5" />
            </button>
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
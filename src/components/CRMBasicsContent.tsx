import { motion } from "motion/react";
import { Info, Target, Users, Layout } from "lucide-react";

export default function CRMBasicsContent() {
  return (
    <div className="pt-32 pb-24 non-italic" style={{ background: "linear-gradient(135deg, #0a3fa8 0%, #1254c0 45%, #6d28d9 100%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">CRM <span className="text-[#84e614]">Basics</span></h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto non-italic">
              Understand how CRM helps you manage customer data and build stronger relationships across your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 bg-white/10 rounded-[2.5rem] border border-white/10 non-italic backdrop-blur">
               <div className="w-12 h-12 bg-[#84e614] rounded-xl shadow-sm flex items-center justify-center text-slate-900 mb-6">
                 <Info className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">What is CRM?</h3>
               <p className="text-gray-100 leading-relaxed">
                 Customer Relationship Management isn't just software; it's a strategy to grow your business by putting customers at the center of everything you do.
               </p>
            </div>
            <div className="p-8 bg-white/10 rounded-[2.5rem] border border-white/10 text-white non-italic backdrop-blur">
               <div className="w-12 h-12 bg-[#84e614] rounded-xl shadow-sm flex items-center justify-center text-slate-900 mb-6">
                 <Target className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold mb-4">The Main Goal</h3>
               <p className="text-gray-100 leading-relaxed non-italic">
                 To gather, organize, and manage all customer interactions in one spot so you can provide better service and close more deals.
               </p>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-white font-display">Why Every Business Needs a CRM</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Better Relations", desc: "Know exactly what your customers need and when." },
                { icon: Layout, title: "Organized Data", desc: "No more messy spreadsheets or lost contacts." },
                { icon: Target, title: "Higher Sales", desc: "Identify leads that actually convert into customers." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-10 h-10 bg-[#84e614] rounded-lg flex items-center justify-center text-slate-900">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 p-12 bg-white/10 rounded-[3rem] border border-white/10 backdrop-blur">
             <h2 className="text-2xl font-bold mb-6 non-italic text-white">Ready to dive deeper?</h2>
             <p className="text-gray-200 mb-8 non-italic">Continue to our full guide on CRM Overview to learn about the technology behind it.</p>
             <button className="px-8 py-4 bg-[#84e614] text-slate-900 font-bold rounded-xl shadow-lg shadow-[#84e614]/20 hover:bg-[#a8ff1f] transition-all">Read Full Guide</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

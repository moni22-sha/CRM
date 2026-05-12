import { motion } from "motion/react";
import { Info, Target, Users, Layout } from "lucide-react";

export default function CRMBasicsContent() {
  return (
    <div className="pt-32 pb-24 italic">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">CRM <span className="text-brand">Basics</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Understand how CRM helps you manage customer data and build stronger relationships across your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 italic">
               <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6">
                 <Info className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4">What is CRM?</h3>
               <p className="text-slate-600 leading-relaxed">
                 Customer Relationship Management isn't just software; it's a strategy to grow your business by putting customers at the center of everything you do.
               </p>
            </div>
            <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 text-white italic">
               <div className="w-12 h-12 bg-white/10 rounded-xl shadow-sm flex items-center justify-center text-brand mb-6">
                 <Target className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-bold mb-4">The Main Goal</h3>
               <p className="text-slate-400 leading-relaxed italic">
                 To gather, organize, and manage all customer interactions in one spot so you can provide better service and close more deals.
               </p>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-900 font-display">Why Every Business Needs a CRM</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Better Relations", desc: "Know exactly what your customers need and when." },
                { icon: Layout, title: "Organized Data", desc: "No more messy spreadsheets or lost contacts." },
                { icon: Target, title: "Higher Sales", desc: "Identify leads that actually convert into customers." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-brand">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
             <h2 className="text-2xl font-bold mb-6 italic">Ready to dive deeper?</h2>
             <p className="text-slate-600 mb-8 italic">Continue to our full guide on CRM Overview to learn about the technology behind it.</p>
             <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20">Read Full Guide</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

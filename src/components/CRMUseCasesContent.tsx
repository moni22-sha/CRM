import { motion } from "motion/react";
import { Users2, MessageSquare, TrendingUp, ShoppingCart, Settings2 } from "lucide-react";

const useCases = [
  { 
    icon: Users2, 
    title: "Sales: Boosting Productivity", 
    company: "Commercial Real Estate", 
    desc: "AI-powered CRM reduced administration by automating research and drafts, allowing reps to focus on relationships." 
  },
  { 
    icon: MessageSquare, 
    title: "Service: Faster Support", 
    company: "Staffing Agency", 
    desc: "AI responses reduced agent wait times, improving quality and consistency across all inquiries." 
  },
  { 
    icon: TrendingUp, 
    title: "Marketing: Personalization", 
    company: "Global Streaming", 
    desc: "Targeted campaigns driven by dynamic segmentation resulted in higher engagement and subscription revenue." 
  },
  { 
    icon: ShoppingCart, 
    title: "Commerce: Shopper Experience", 
    company: "Sports Brand", 
    desc: "Analyzed behavioral data to provide tailored recommendations that boosted online conversion rates." 
  },
  { 
    icon: Settings2, 
    title: "IT: Operational Efficiency", 
    company: "Food Delivery", 
    desc: "Unified multiple legacy systems into a single platform for faster scaling and data accessibility." 
  }
];

export default function CRMUseCasesContent() {
  return (
    <div className="pt-32 pb-24 italic" style={{ background: "linear-gradient(135deg, #0a3fa8 0%, #1254c0 45%, #6d28d9 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 italic">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-16 italic">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 italic">Success <span className="text-[#00c2ff]">Stories</span></h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto italic">
              Real-world success stories show how organizations turn CRM strategy into results across every industry and function.
            </p>
          </div>

          <div className="space-y-12 italic">
            {useCases.map((useCase, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-10 items-center p-12 bg-white/10 border border-white/10 rounded-[3rem] shadow-sm italic hover:shadow-xl transition-all backdrop-blur">
                <div className="w-24 h-24 bg-white/10 flex-shrink-0 rounded-[2rem] flex items-center justify-center text-[#00c2ff] italic">
                  <useCase.icon className="w-12 h-12" />
                </div>
                <div className="flex-1 italic">
                  <span className="text-xs uppercase font-bold text-gray-300 tracking-widest block mb-4 italic">{useCase.company}</span>
                  <h3 className="text-2xl font-bold text-white mb-4 italic">{useCase.title}</h3>
                  <p className="text-gray-200 leading-relaxed italic">{useCase.desc}</p>
                </div>
                <div className="flex-shrink-0 italic">
                  <button className="text-[#00c2ff] font-bold flex items-center gap-2 hover:gap-3 transition-all italic hover:text-white">View Case Study</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-white/10 rounded-[3.5rem] italic text-white text-center border border-white/10 backdrop-blur">
             <h2 className="text-4xl font-bold mb-6 italic font-display">Ready to Start Your Journey?</h2>
             <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto italic">Every successful story starts with setting the consumer at the center of your business. Your organization could be the next success story.</p>
             <button className="px-10 py-5 bg-[#00c2ff] text-slate-900 font-bold rounded-2xl shadow-xl shadow-[#00c2ff]/20 active:scale-95 transition-all italic hover:bg-[#1a9fff]">Get Started Free</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

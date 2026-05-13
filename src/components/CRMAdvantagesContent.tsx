import { motion } from "motion/react";
import { Zap, Shield, Globe, Users, TrendingUp, BarChart, Settings, Smartphone, Layers, CheckCircle } from "lucide-react";

const advantages = [
  { icon: TrendingUp, title: "Improved Sales Productivity", desc: "Manage leads, track interactions, and prioritized opportunities in one place." },
  { icon: Globe, title: "Unified Customer View", desc: "Consolidate data from multiple sources into a single, comprehensive profile." },
  { icon: BarChart, title: "Actionable Insights", desc: "Turn raw data into meaningful insights with built-in reporting and dashboards." },
  { icon: Zap, title: "Customer-Centric Automation", desc: "Engage customers at the right time with relevant messaging and follow-ups." },
  { icon: Users, title: "Proactive Customer Service", desc: "Anticipate customer needs by providing complete interaction histories to support." },
  { icon: Layers, title: "Better Team Collaboration", desc: "Improve communication across departments with a shared workspace." },
  { icon: Zap, title: "Increased Efficiency with AI", desc: "Automate tasks, identify trends, and generate content effortlessly." },
  { icon: Settings, title: "Seamless Integration", desc: "Connect with ERP, marketing, and accounting tools for smooth data flow." },
  { icon: Smartphone, title: "Access Anytime, Anywhere", desc: "Access customer data from any device, whether in the office or on the go." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Add users, features, or integrations as your business needs evolve." },
  { icon: Shield, title: "Strong Data Security", desc: "Protect sensitive info with access controls, encryption, and regular updates." }
];

export default function CRMAdvantagesContent() {
  return (
    <div className="pt-32 pb-24 non-italic" style={{ background: "linear-gradient(135deg, #0a3fa8 0%, #1254c0 45%, #6d28d9 100%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">11 Key Advantages of <span className="text-[#00c2ff]">CRM Platforms</span></h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto non-italic">
              By centralizing customer data and providing actionable insights, CRM platforms help businesses strengthen relationships and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {advantages.map((adv, i) => (
              <div key={i} className="p-8 bg-white/10 border border-white/10 rounded-[2rem] hover:bg-white/20 hover:shadow-xl transition-all h-full non-italic backdrop-blur">
                <div className="w-12 h-12 bg-[#00c2ff] rounded-xl shadow-sm flex items-center justify-center text-slate-900 mb-6">
                  <adv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 non-italic">{adv.title}</h3>
                <p className="text-gray-200 non-italic leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 p-12 rounded-[3.5rem] non-italic text-white flex flex-col md:flex-row items-center gap-12 border border-white/10 backdrop-blur">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 non-italic">Why CRM Matters</h2>
              <p className="text-lg text-gray-200 non-italic leading-relaxed">
                The true value of CRM lies in its ability to bring everything together—people, processes, and data. By eliminating silos, businesses can build stronger relationships and drive sustainable growth.
              </p>
            </div>
            <div className="flex-shrink-0">
               <button className="px-10 py-5 bg-[#00c2ff] text-slate-900 font-bold rounded-2xl shadow-xl shadow-[#00c2ff]/20 hover:bg-[#1a9fff] transition-all">Explore All Benefits</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

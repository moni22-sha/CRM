import { motion } from "framer-motion";
import { BookOpen, Rocket, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

const cards = [
  {
    title: "Understand CRM Better",
    description: "Learn how CRM helps your teams stay connected, improve communication, and deliver better customer experiences across every interaction.",
    linkText: "Learn More",
    icon: BookOpen,
    n: "01",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Get Started Easily",
    description: "Set up your CRM quickly with simple steps and start managing your business processes without unnecessary complexity.",
    linkText: "Explore Guide",
    icon: Rocket,
    n: "02",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Try CRM for Free",
    description: "Experience a fully functional CRM with no setup hassle. Get started instantly and see how it works for your unique business.",
    linkText: "Start Free Trial",
    icon: ShieldCheck,
    n: "03",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  }
];

export default function FeatureCards() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
        <span className="text-[280px] font-black text-slate-900 leading-none uppercase">Features</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            Capabilities
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Achieve More with <br/>
            <span className="relative inline-block text-blue-600">
              Smarter CRM
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-2 left-0 w-full h-3 text-blue-400/40" 
                viewBox="0 0 300 12" fill="none" preserveAspectRatio="none"
              >
                <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </motion.svg>
            </span>
          </h2>
          
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Give your teams the tools they need to succeed. Manage customer data, 
            track performance, and make faster decisions — all from one place.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0,0,0,0.06)" }}
              className="relative bg-white p-10 rounded-[40px] border border-slate-100 transition-all group overflow-hidden"
            >
              {/* Card Numbering */}
              <div className="absolute top-8 right-10 text-4xl font-black text-slate-50 opacity-0 group-hover:opacity-100 group-hover:text-slate-100 transition-all duration-500">
                {card.n}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              
              <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                {card.description}
              </p>

              <button className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                {card.linkText}
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
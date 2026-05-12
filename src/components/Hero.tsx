import { motion } from "motion/react";
import { PlayCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-20 blur-3xl w-[500px] h-[500px] bg-brand/30 rounded-full -mr-60 -mt-40" />
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 blur-3xl w-[300px] h-[300px] bg-brand rounded-full -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Powering the Modern Workplace
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Powerful CRM features designed for <span className="text-brand">modern workplaces</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Everything you need to manage your people, streamline operations, and scale your business — all in one platform. Attract more leads, close deals faster, and build lasting customer relationships.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-hover shadow-xl shadow-brand/25 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border-2 border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5 text-brand" />
              Watch Demo
            </button>
          </div>

          {/* Social Proof / Stats */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium">Enterprise grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium">99.9% Up-time guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium">24/7 Dedicated support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

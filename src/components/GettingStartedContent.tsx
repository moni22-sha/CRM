import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export default function GettingStartedContent() {
  return (
    <div className="pt-32 pb-24 italic">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">CRM Implementation: <span className="text-brand">Step-by-Step Guide</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Learn why CRM implementation matters and how to successfully set it up for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20">Learn More</button>
              <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200">Get Started Free</button>
            </div>
          </div>

          <section className="mb-20 py-16 bg-slate-50/50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-slate-900 mb-20 italic text-center">
      The Implementation Journey
    </h2>
    
    <div className="relative">
      {/* Thick Background Track - Visible on Desktop */}
      <div className="absolute top-12 left-0 w-full h-1.5 bg-slate-200 -z-10 hidden md:block rounded-full" />

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {[
          "Identify business goals",
          "Select the right CRM",
          "Create an implementation plan",
          "Customise and integrate",
          "Migrate data",
          "Test the system",
          "Train your team",
          "Go live",
          "Review and optimise"
        ].map((step, i) => (
          <div key={i} className="relative flex flex-col items-center">
            
            {/* The Station Node (Thick Circle) */}
            <div className="w-24 h-24 bg-white border-[6px] border-slate-50 rounded-2xl flex items-center justify-center font-black text-3xl text-brand shadow-xl relative z-10 mb-8 transition-transform group-hover:scale-110">
              <div className="absolute inset-0 border-2 border-slate-200 rounded-2xl opacity-20" />
              {i + 1}
            </div>

            {/* The Card Style from image_eeb1b9.png */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow w-full text-center min-h-[220px] flex flex-col justify-center">
              <h4 className="text-xl font-bold text-slate-900 mb-4 italic leading-tight">
                {step}
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm italic">
                Ensuring phase {i + 1} is completed with precision for a seamless business transition.
              </p>
            </div>

            {/* Vertical Row Connectors */}
            {(i === 2 || i === 5) && (
              <div className="hidden md:block absolute -bottom-16 left-1/2 w-1.5 h-16 bg-slate-200 -z-10 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

          <section className="mb-20 bg-brand p-12 rounded-[3rem] text-white">
            <h2 className="text-3xl font-bold mb-6">Why work with an expert?</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Partnering with CRM specialists can simplify the entire process. Experts help configure the system to match your business goals, streamline workflows and ensure smooth adoption.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white/50" />
                <span>Reduced deployment risks</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white/50" />
                <span>Customised workflows for your team</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white/50" />
                <span>Advanced AI and automation setup</span>
              </li>
            </ul>
          </section>

          <div className="text-center pt-24 border-t border-slate-100">
             <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display">Ready to Transform Your <br />Customer Management?</h3>
             <p className="text-slate-500 mb-10 text-lg">Start using a powerful CRM to manage leads and automate workflows today.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-10 py-5 bg-brand text-white font-bold rounded-2xl shadow-xl shadow-brand/20 flex items-center justify-center gap-2">
                  Get Started Free
                  <ChevronRight className="w-5 h-5" />
               </button>
               <button className="px-10 py-5 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200">Learn More</button>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function FeaturedCTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl shadow-brand/30"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sell smarter with our CRM platform</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Get started quickly with built-in tools to manage leads, track deals, and grow your business — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-brand font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg active:scale-95">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/20 flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-slate-100">
            <Mail className="w-8 h-8 text-brand" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Have more questions about The Bot CRM?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Discover how our CRM can simplify your business and improve customer relationships. Our team is here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-hover shadow-xl shadow-brand/20 transition-all active:scale-95">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const navTo = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo(0, 0);
    }
  };

  return (
  <footer className="bg-blue-800  non-italic">
  <div className="max-w-7xl mx-auto px-4">
       
      <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between text-sm">
      <p className="text-slate-400 text-white">
        © {new Date().getFullYear()} The Bot CRM. All rights reserved.
      </p>

     
      <button
  onClick={() => navTo("privacy")}
  className="text-slate-400 hover:text-brand transition-colors text-white"
>
  Privacy Policy
</button>

<button
  onClick={() => navTo("terms")}
  className="text-slate-400 hover:text-brand transition-colors text-white"
>
  Terms & Conditions
</button>
      </div>
    </div>
    </footer>
  );
}

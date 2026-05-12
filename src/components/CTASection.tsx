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

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100 italic">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-1 cursor-pointer group mb-6" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="flex items-center font-bold text-2xl tracking-tighter">
                  <span className="text-slate-900">theb</span>
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center mx-0.5 transform group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                      <path d="M12 8V4H8" />
                      <rect width="16" height="12" x="4" y="8" rx="2" />
                      <path d="M2 14h2" />
                      <path d="M20 14h2" />
                      <path d="M15 13v2" />
                      <path d="M9 13v2" />
                    </svg>
                  </div>
                  <span className="text-slate-900">t.</span>
                </div>
             </div>
             <p className="text-slate-500 mb-6 leading-relaxed">
               Advanced CRM platform designed to help businesses manage customer interactions and drive growth.
             </p>
             <div className="flex gap-4">
               {[Mail, Phone, MapPin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-brand hover:bg-brand/5 transition-all">
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
             </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-brand transition-colors">Sales CRM</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Marketing Automation</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Operations Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-brand transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} The Bot CRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

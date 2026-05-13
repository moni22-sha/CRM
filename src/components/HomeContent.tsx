import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  BarChart3,
  Settings2,
  Zap,
  Cloud,
  Layers,
  Cpu,
  HelpCircle,
  Plus,
  Minus,
  X,
  Bot
} from "lucide-react";
import { useState } from "react";

const DiscoverPoints = [
  "Who can benefit from a CRM system?",
  "Why is CRM important for business growth?",
  "What are the key benefits of using CRM?",
  "What features and functions does a CRM offer?",
  "How much does a CRM system typically cost?",
  "Frequently Asked Questions (FAQs)"
];

const FAQS = [
  {
    k: "What is CRM?",
    v: "CRM stands for Customer Relationship Management. It is a technology used to manage and improve interactions with customers and potential clients."
  },
  {
    k: "Why is CRM important?",
    v: "CRM helps businesses centralize customer data, improve collaboration, automate tasks, and grow revenue."
  },
  {
    k: "How does CRM help sales?",
    v: "CRM systems improve sales by organizing leads, automating follow-ups, and tracking opportunities."
  }
];

function HomeCTA({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="bg-blue-700 border border-slate-100 rounded-[3rem] p-12 text-center my-16">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
        {title}
      </h3>

      {description && (
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20">
          Start Free Trial
        </button>

        <button className="px-8 py-4 bg-white text-brand font-bold rounded-xl border border-brand/20">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default function HomeContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="non-italic relative">
      {/* HERO SECTION */}
      <section
        className="pt-40 pb-24 overflow-hidden relative"
        style={{
          background:
            "linear-gradient(135deg, #0a3fa8 0%, #1254c0 45%, #6d28d9 100%)"
        }}
      >
        <div
          className="absolute -left-16 bottom-0 w-64 h-64 rounded-full opacity-60 pointer-events-none"
          style={{ background: "#00c2ff" }}
        />

        <div
          className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-50 pointer-events-none"
          style={{
            background: "#a855f7",
            transform: "translate(35%, -35%)"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }
              }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Build Stronger Customer
              <br />
              Relationships.
              <span style={{ color: "#00c2ff" }}>
                {" "}
                Grow Faster.
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }
              }}
              className="max-w-3xl mx-auto text-xl mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Your all-in-one CRM platform to manage leads, automate sales,
              and deliver exceptional customer experiences.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: "backOut"
                  }
                }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                className="w-full sm:w-auto px-10 py-5 font-bold rounded-full shadow-2xl transition-all hover:-translate-y-1 active:scale-95 text-slate-900"
                style={{
                  background:
                    "linear-gradient(100deg, #00c2ff, #00c2ff)"
                }}
              >
                Get Started
              </button>

              <button
                onClick={() => setIsDemoOpen(true)}
                className="w-full sm:w-auto px-10 py-5 font-bold rounded-full transition-all flex items-center justify-center gap-2 text-white"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.3)"
                }}
              >
                Book a Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS CRM */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 border-b border-slate-100"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-brand pl-6">
            What is CRM?
          </h2>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
            <p>
              Customer Relationship Management (CRM) helps businesses manage
              interactions with customers and improve growth.
            </p>

            <p>
              Our CRM empowers your team to stay connected, organized, and
              focused.
            </p>
          </div>

          <div className="flex gap-6 flex-wrap">
            <button className="flex items-center gap-2 bg-brand/10 text-brand font-bold py-3 px-5 rounded-lg hover:bg-brand/20 transition-all">
              Watch Demo
            </button>

            <button className="flex items-center gap-2 bg-brand text-white font-bold py-3 px-5 rounded-lg hover:bg-brand/90 transition-all">
              Start Free Trial
            </button>
          </div>
        </motion.section>

        {/* FAQ */}
        <section className="py-20 mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center"
          >
            Frequently Asked
            <span className="text-brand"> Questions</span>
          </motion.h2>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-slate-100 rounded-[2rem] overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                  className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 leading-tight">
                    {faq.k}
                  </span>

                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-brand"
                  >
                    {openFaq === i ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8 text-slate-600 leading-relaxed"
                    >
                      {faq.v}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* FLOATING BOT ICON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsDemoOpen(true)}
          className="
            group
            w-16
            h-16
            rounded-full
            bg-gradient-to-br
            from-violet-500
            to-purple-600
            shadow-[0_10px_40px_rgba(139,92,246,0.45)]
            flex
            items-center
            justify-center
            hover:scale-110
            active:scale-95
            transition-all
            duration-300
            relative
          "
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-violet-400 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />

          {/* Bot Icon */}
          <Bot className="relative z-10 w-8 h-8 text-white" />
        </button>
      </div>

      {/* POPUP FORM */}
      <AnimatePresence>
        {isDemoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-end md:items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-8 relative"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsDemoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-700" />
              </button>

              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                Chat with AI Assistant
              </h3>

              <p className="text-slate-500 mb-6 leading-relaxed">
                Start a conversation with our intelligent assistant.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-brand"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-brand"
                />

                <textarea
                  placeholder="Type your message..."
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-brand resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-brand text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all"
                >
                  Start Chat
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
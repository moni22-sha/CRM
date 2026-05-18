import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Users,
  TrendingUp,
  Minus,
  Plus,
} from "lucide-react";

import { useState } from "react";
import field from "../Image/Field.png";

const avatars = [
  "https://i.pravatar.cc/32?img=1",
  "https://i.pravatar.cc/32?img=2",
  "https://i.pravatar.cc/32?img=3",
  "https://i.pravatar.cc/32?img=4",
];

const FAQS = [
  {
    k: "What is CRM?",
    v: "CRM stands for Customer Relationship Management.",
  },
  {
    k: "Why use CRM?",
    v: "CRM helps manage leads, customers, and business growth.",
  },
];

function StatCard({
  icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  accent?: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="bg-white rounded-2xl shadow-2xl px-5 py-4 flex flex-col gap-1 min-w-[180px] border border-slate-100"
    >
      <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
        {icon}
        {label}
      </div>

      <div className="text-2xl font-bold text-slate-900">
        {value}
      </div>

      <div
        className={`text-xs font-semibold ${
          accent || "text-emerald-500"
        }`}
      >
        {sub}
      </div>
    </motion.div>
  );
}

export default function HomeContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        fontFamily: "'DM Sans', 'Nunito', sans-serif",
        background: "#f8faff",
        color: "#0f172a",
      }}
    >
      {/* HERO SECTION */}
      <section
        className="pt-36 overflow-hidden relative min-h-screen flex items-center"
        style={{
          background:
            "linear-gradient(160deg, #eef4ff 0%, #f0f6ff 50%, #e8f0fe 100%)",
        }}
      >
        {/* Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-0 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.35), transparent 70%)",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block" />
              Trusted CRM Platform
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              Welcome to the{" "}
              <span className="text-blue-600">
                Smart CRM.
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg"
            >
              Manage your leads, automate sales, and deliver
              exceptional customer experiences.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5" />
                Request Demo
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-2 px-7 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
              >
                <ArrowRight className="w-5 h-5" />
                Watch Overview
              </motion.button>
            </motion.div>

            {/* AVATARS */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              <div>
                <span className="font-bold text-slate-800">
                  10,000+
                </span>

                <span className="text-slate-500 text-sm">
                  {" "}
                  teams trust Smart CRM
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:flex items-center justify-center h-[580px]"
          >
            {/* Dashboard */}
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              className="relative"
            >
              <motion.img
                src={field}
                alt="CRM Dashboard"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[560px] rounded-[32px] shadow-2xl"
              />
            </motion.div>

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
              }}
              transition={{
                delay: 0.7,
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-8 left-0 z-10"
            >
              <StatCard
                icon={
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                }
                label="Deals Closed"
                value="94.2%"
                sub="↑ 2.4% vs yesterday"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, 14, 0],
              }}
              transition={{
                delay: 0.9,
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-32 right-0 z-10"
            >
              <StatCard
                icon={
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                }
                label="Revenue"
                value="₹48.2L"
                sub="↑ On schedule"
                accent="text-blue-500"
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                delay: 1.1,
                duration: 4.5,
                repeat: Infinity,
              }}
              className="absolute bottom-24 left-0 z-10"
            >
              <StatCard
                icon={
                  <Users className="w-4 h-4 text-violet-500" />
                }
                label="Open Leads"
                value="312"
                sub="12 pending follow-up"
                accent="text-violet-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl font-extrabold text-center mb-14"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === i ? null : i)
                }
                className="w-full px-8 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-all"
              >
                <span className="font-bold text-slate-800">
                  {faq.k}
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    openFaq === i
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {openFaq === i ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="px-8 pb-6 text-slate-600"
                  >
                    {faq.v}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
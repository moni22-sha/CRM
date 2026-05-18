import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, PlayCircle, CheckCircle2, Users, Heart, Package, Headphones, TrendingUp, BarChart3, Settings2, Zap, Cloud, Layers, Cpu, Plus, Minus } from "lucide-react";
import { Key, useState, useRef } from "react";
import { Bot, X } from "lucide-react";
import field from "../Image/Field.png";

const DiscoverPoints = [
  "Who can benefit from a CRM system?",
  "Why is CRM important for business growth?",
  "What are the key benefits of using CRM?",
  "What features and functions does a CRM offer?",
  "How much does a CRM system typically cost?",
  "Frequently Asked Questions (FAQs)"
];

const FAQS = [
  { k: "What is CRM?", v: "CRM stands for Customer Relationship Management. It is a technology used to manage and improve interactions with customers and potential clients. A CRM system helps businesses strengthen relationships, improve customer retention, and support sales growth by organizing all customer information in one place." },
  { k: "Why is CRM important for businesses of all sizes?", v: "CRM is valuable for businesses of every size because it centralizes data, simplifies processes, and improves collaboration across teams. It helps build strong customer relationships and provides insights that support growth. With advanced features like automation and analytics, businesses can manage data efficiently and scale operations with ease." },
  { k: "What features should a business look for in a CRM?", v: "Key CRM features include contact management, sales tracking, marketing automation, customer support tools, reporting and analytics, and integrations with other software. Flexibility and customization are also important so the system can adapt to your specific business needs." },
  { k: "What makes AI-powered CRM different?", v: "AI-powered CRM systems use intelligent technology to analyze customer data, predict behavior, and recommend actions. They can automate routine tasks, personalize interactions, and provide real-time insights, helping teams work more efficiently and make smarter decisions." },
  { k: "How does CRM improve collaboration across teams?", v: "CRM brings all customer data into one place, creating a shared view for all departments. This allows sales, marketing, and support teams to work together more effectively, ensuring consistent communication and a seamless customer experience." },
  { k: "How does CRM help increase sales?", v: "CRM systems improve sales by organizing leads, tracking opportunities, and automating follow-ups. They provide clear insights into the sales pipeline, helping teams focus on the right prospects and close deals faster while improving customer retention." },
  { k: "How does CRM enhance customer service?", v: "CRM enables support teams to access complete customer histories, allowing them to respond quickly and accurately. This leads to faster issue resolution, better communication, and a more personalized customer experience." },
  { k: "What are the main types of CRM?", v: "There are four main types of CRM: Operational CRM (business process automation), Analytical CRM (data insights), Collaborative CRM (team communication), and Strategic CRM (long-term relationships)." },
  { k: "How do I choose the right CRM for my business?", v: "Choosing the right CRM depends on your business size, industry, budget, and goals. Look for features like ease of use, customization, integrations, and scalability. Testing different platforms through free trials can help you make the right decision." },
  { k: "How much does a CRM cost?", v: "CRM pricing varies depending on features, number of users, and the provider. It's important to consider overall costs, including setup, training, and customization, when selecting a solution that fits your budget." },
  { k: "How do I implement a CRM system?", v: "Implementing a CRM involves identifying your business needs, selecting the right platform, customizing it to your processes, migrating data, and training your team. Proper planning and ongoing support are key to successful adoption." }
];

const avatars = [
  "https://i.pravatar.cc/32?img=1",
  "https://i.pravatar.cc/32?img=2",
  "https://i.pravatar.cc/32?img=3",
  "https://i.pravatar.cc/32?img=4",
];

function StatCard({ icon, label, value, sub, accent }: { icon: React.ReactNode; label: string; value: string; sub: string; accent?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl shadow-lg px-5 py-4 flex flex-col gap-1 min-w-[160px]"
    >
      <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
        {icon}
        {label}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="text-2xl font-bold text-slate-900"
      >
        {value}
      </motion.div>
      <div className={`text-xs font-semibold ${accent || "text-emerald-500"}`}>{sub}</div>
    </motion.div>
  );
}

function HomeCTA({ title, description }: { title: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-[2.5rem] p-12 text-center my-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a56db 0%, #1e40af 100%)" }}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-16 -top-16 w-64 h-64 rounded-full"
        style={{ background: "#60a5fa" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -left-10 bottom-0 w-48 h-48 rounded-full"
        style={{ background: "#bfdbfe" }}
      />
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">{title}</h3>
      {description && <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">{description}</p>}
      <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-colors"
        >
          Start Free Trial
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 bg-blue-800/40 text-white font-bold rounded-xl border border-white/20 hover:bg-blue-800/60 transition-colors"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function HomeContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Parallax for hero background blobs
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Nunito', sans-serif", background: "#f8faff", color: "#0f172a" }}>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-36 pb-0 overflow-hidden relative min-h-[92vh] flex items-start"
        style={{ background: "linear-gradient(160deg, #eef4ff 0%, #f0f6ff 50%, #e8f0fe 100%)" }}
      >
        {/* Parallax blobs */}
        

        {/* Floating animated dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20 pointer-events-none"
            style={{
              width: 8 + i * 4,
              height: 8 + i * 4,
              background: "#3b82f6",
              top: `${15 + i * 12}%`,
              left: `${5 + i * 14}%`,
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, 8, 0],
              opacity: [0.15, 0.28, 0.15],
            }}
            transition={{
              duration: 3.5 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pb-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            className="relative z-10"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-blue-500 rounded-full inline-block"
              />
              Trusted All-in-One CRM Platform
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
              style={{ color: "#0f172a" }}
            >
              Welcome to the{" "}
              <motion.span
                style={{ color: "#1a56db" }}
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Smart CRM.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg"
            >
              Manage your leads, automate sales, and deliver exceptional customer experiences — all from a single powerful platform.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(26,86,219,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
                onClick={() => setIsDemoOpen(true)}
              >
                <PlayCircle className="w-5 h-5" />
                Request a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, borderColor: "#93c5fd" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
              >
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
                Watch 2-min overview
              </motion.button>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <motion.img
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <span className="font-bold text-slate-800">10,000+</span>
                <span className="text-slate-500 text-sm"> sales leaders trust Smart CRM</span>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.08, type: "spring" }}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                  <span className="text-xs text-slate-500 ml-1">4.9 / 5.0</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:flex items-end justify-center h-[480px]"
          >
            {/* Subtle rotating ring behind cards */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-blue-100 opacity-40 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-blue-200 opacity-25 pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              // Gentle floating animation
              style={{ position: "absolute", top: "2rem", left: 0, zIndex: 10 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <StatCard
                  icon={<CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  label="Deals Closed Today"
                  value="94.2%"
                  sub="↑ 2.4% vs yesterday"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              style={{ position: "absolute", top: "8rem", right: 0, zIndex: 10, transform: "translateX(1rem)" }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <StatCard
                  icon={<TrendingUp className="w-4 h-4 text-blue-500" />}
                  label="Revenue This Month"
                  value="₹48.2L"
                  sub="↑ On schedule"
                  accent="text-blue-500"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              style={{ position: "absolute", bottom: "6rem", left: 0, zIndex: 10 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              >
                <StatCard
                  icon={<Users className="w-4 h-4 text-violet-500" />}
                  label="Open Leads"
                  value="312"
                  sub="12 pending follow-up"
                  accent="text-violet-500"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">

        {/* What is CRM? */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 border-b border-slate-100"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            Overview
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold text-slate-900 mb-8 border-l-4 border-blue-600 pl-6"
          >
            What is CRM?
          </motion.h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed mb-10">
            {[
              "• Customer Relationship Management (CRM) is a technology that helps businesses manage interactions with customers and prospects, improve relationships, and drive growth.",
              "• Our CRM empowers your team to stay connected, organized, and focused — so you can turn every interaction into an opportunity."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#dbeafe" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-blue-50 text-blue-600 font-bold py-3 px-5 rounded-xl hover:bg-blue-100 transition-all"
            >
              <PlayCircle className="w-5 h-5" /> Watch Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 6px 24px rgba(26,86,219,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.section>

        {/* UNDERSTAND CRM SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-900 mb-8"
          >
            Let's Understand CRM
          </motion.h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
            {[
              "CRM stands for customer relationship management. It's a system that helps businesses manage interactions with current and potential customers. The goal is simple: improve relationships, streamline processes, and support business growth.",
              "A CRM system helps you track every interaction with your customers — from sales conversations to support requests and marketing activities. It keeps all your data organized in one place so your team can stay informed and work more efficiently.",
              "Modern CRM tools can also connect data from different sources and use smart features to help manage relationships across the entire customer journey — including sales, marketing, and customer support.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="font-bold text-slate-800"
            >
              That's the basic idea of CRM. Now, let's look at why it matters and how it can help your business.
            </motion.p>
          </div>
        </motion.section>

        {/* What You'll Discover */}
        <motion.section
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-14 bg-blue-50 rounded-[2.5rem] px-10 border border-blue-100 mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-extrabold text-slate-900 mb-8"
          >
            What You'll Discover
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {DiscoverPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ x: 6, color: "#1a56db" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 text-slate-700 font-semibold cursor-default"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0"
                />
                {point}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Who can benefit */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-4"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"
            >
              <Users className="w-5 h-5 text-blue-600" />
            </motion.div>
            Who can benefit from a CRM system?
          </motion.h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
            {[
              "CRM software is designed for businesses of all sizes and industries. It helps large organizations manage customer data across teams, while small businesses and startups can stay organized and work more efficiently with fewer resources.",
              "Any business that connects with customers — including sales, marketing, support, or operations — can benefit from using a CRM system. It allows teams to share information, improve collaboration, and deliver better customer experiences."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
          <HomeCTA title="Work smarter with our CRM platform" description="Start quickly with tools to manage leads, track opportunities, and build stronger customer relationships — all in one place." />
        </motion.section>

        {/* WHY CRM SECTION */}
        <section className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none overflow-hidden h-full flex justify-center items-start opacity-[0.03]">
            <motion.span
              animate={{ scale: [1, 1.03, 1], opacity: [0.03, 0.05, 0.03] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="text-[300px] md:text-[500px] font-black text-slate-900 leading-none"
            >
              CRM
            </motion.span>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-[1px] bg-blue-600/30"
              />
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
                The Impact of Strategy
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-[1px] bg-blue-600/30"
              />
            </div>

            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6"
              >
                Why CRM matters for <br />
                <span className="relative inline-block text-blue-600">
                  sustainable growth
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-3 text-blue-400/50"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </motion.svg>
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed"
              >
                Running a business is complex. Most teams struggle with fragmented tools that don't talk to each other. We provide the unified ecosystem you need to scale.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {[
                {
                  title: "A single, unified view",
                  icon: Layers,
                  desc: "Store and access all customer history, interactions, and preferences in one central ecosystem.",
                  num: "01",
                  color: "text-blue-600",
                  bg: "bg-blue-50"
                },
                {
                  title: "Reduced costs & efficiency",
                  icon: BarChart3,
                  desc: "Eliminate administrative bottlenecks and refocus your team on revenue-driving activities.",
                  num: "02",
                  color: "text-purple-600",
                  bg: "bg-purple-50"
                },
                {
                  title: "Seamless team alignment",
                  icon: Users,
                  desc: "Connect sales, marketing, and support through shared data for a consistent customer journey.",
                  num: "03",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50"
                },
                {
                  title: "Intelligent automation",
                  icon: Zap,
                  desc: "Leverage smart features to speed up follow-ups and generate real-time business insights.",
                  num: "04",
                  color: "text-amber-600",
                  bg: "bg-amber-50"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } }
                  }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
                  className="group relative flex flex-col p-10 bg-white border border-slate-100 rounded-[40px] transition-all"
                >
                  <div className="flex justify-between items-start mb-8">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center`}
                    >
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </motion.div>
                    <span className="text-slate-100 font-black text-4xl group-hover:text-blue-50 transition-colors">
                      {item.num}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-20">
              <HomeCTA
                title="Start growing with the right CRM"
                description="Simplify processes, connect your teams, and turn data into results."
              />
            </div>
          </div>
        </section>

        {/* KEY BENEFITS SECTION */}
        <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-[1px] bg-blue-600"
              />
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
                Core Advantages
              </span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
              >
                Everything you need to <br />
                <span className="relative inline-block text-blue-600">
                  manage growth effortlessly
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-2 text-blue-400/60"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path d="M1 9.5C50.5 4.5 150.5 1.5 299 9.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </motion.svg>
                </span>
              </motion.h2>

              <div className="flex -space-x-3 mb-2">
                {[
                  { color: "bg-blue-500", delay: 0.1 },
                  { color: "bg-purple-500", delay: 0.2 },
                  { color: "bg-cyan-500", delay: 0.3 },
                  { color: "bg-emerald-500", delay: 0.4 }
                ].map((dot, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: dot.delay, type: "spring", stiffness: 260, damping: 20 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className={`w-8 h-8 rounded-full border-2 border-white ${dot.color}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { t: "Breaking down team silos", d: "Everyone can access real-time customer data from a single platform, ensuring departmental harmony.", n: "01", icon: <Users className="w-5 h-5 text-blue-600" /> },
              { t: "Better business results", d: "Reduce manual effort and uncover new opportunities with unified workflows.", n: "02", icon: <TrendingUp className="w-5 h-5 text-emerald-600" /> },
              { t: "Smarter insights", d: "Identify patterns and trends to predict needs and personalize interactions.", n: "03", icon: <BarChart3 className="w-5 h-5 text-purple-600" /> },
              { t: "Faster work with automation", d: "Simplify repetitive tasks like managing leads and follow-ups to save valuable time.", n: "04", icon: <Zap className="w-5 h-5 text-amber-500" /> },
              { t: "Stronger relationships", d: "Identify cross-selling and upselling opportunities through journey tracking.", n: "05", icon: <Heart className="w-5 h-5 text-rose-500" /> },
              { t: "Improved customer support", d: "Support teams respond quickly with full context of customer histories.", n: "06", icon: <Headphones className="w-5 h-5 text-cyan-600" /> },
              { t: "7. Better products and services", d: "Insights into behavior and feedback help identify gaps and make informed decisions to improve your offerings.", n: "07", icon: <Package className="w-5 h-5 text-emerald-600" /> }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", duration: 0.8 } }
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.08)",
                  transition: { duration: 0.3 }
                }}
                className="group p-8 bg-white border border-slate-100 rounded-[32px] cursor-default"
              >
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors"
                  >
                    {benefit.icon}
                  </motion.div>
                  <span className="text-slate-200 font-black text-2xl group-hover:text-blue-100 transition-colors">
                    {benefit.n}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {benefit.t}
                </h4>
                <p className="text-slate-500 leading-relaxed">{benefit.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Features */}
        <section className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-4"
          >
            <motion.div
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"
            >
              <Settings2 className="w-5 h-5 text-slate-600" />
            </motion.div>
            What features and functions does a CRM offer?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed mb-12"
          >
            A CRM system helps you manage customer relationships by storing contact details, tracking interactions, identifying opportunities, and organizing sales, service, and marketing activities — all in one place.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {[
              { t: "Cloud-based access and flexibility", icon: Cloud, d: "Securely access data anytime, from anywhere. Cloud solutions are cost-effective and scalable.", color: "bg-sky-50 text-sky-600" },
              { t: "Complete customer view", icon: Users, d: "A full picture of every customer and prospect for marketing, sales, and support teams.", color: "bg-blue-50 text-blue-600" },
              { t: "Integration with other tools", icon: Layers, d: "Connect with billing, communication, and document apps for smooth data flow.", color: "bg-violet-50 text-violet-600" },
              { t: "Built-in intelligence and automation", icon: Cpu, d: "Automate routine tasks like data entry and lead assignment while gaining smart insights.", color: "bg-emerald-50 text-emerald-600" }
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.95, y: 15 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(37,99,235,0.07)", borderColor: "#bfdbfe" }}
                className="p-7 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${f.color}`}
                >
                  <f.icon className="w-5 h-5" />
                </motion.div>
                <h4 className="font-bold text-slate-900 mb-2">{f.t}</h4>
                <p className="text-sm text-slate-500">{f.d}</p>
              </motion.div>
            ))}
          </motion.div>
          <HomeCTA title="Simplify your business with powerful CRM features" description="Manage customers, streamline workflows, and unlock better insights — all from one intelligent platform." />
        </section>

        {/* Pricing */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 border-t border-slate-100 mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold text-slate-900 mb-6"
          >
            How much does a CRM system typically cost?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10"
          >
            A CRM system can deliver significant value without requiring a large upfront investment. Pricing varies based on size, features, and customization. Most solutions offer flexible plans that scale as your business grows.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(26,86,219,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all"
          >
            View Pricing Plans
          </motion.button>
        </motion.section>

        {/* FAQs */}
        <section className="py-20 mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12 text-center"
          >
            Frequently Asked{" "}
            <span style={{ color: "#1a56db" }}>Questions (FAQs)</span>
          </motion.h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: openFaq === i ? 1 : 1.005 }}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-5 text-left flex justify-between items-center gap-4 hover:bg-blue-50/50 transition-colors"
                >
                  <span className="font-bold text-slate-800 leading-tight">{faq.k}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-8 pb-7 text-slate-600 leading-relaxed border-t border-slate-50 pt-4"
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

    </div>
  );
}
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, PlayCircle, CheckCircle2, Users, TrendingUp, BarChart3, Settings2, Zap, Cloud, Layers, Cpu, HelpCircle, Plus, Minus } from "lucide-react";
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
  { k: "What is CRM?", v: "CRM stands for Customer Relationship Management. It is a technology used to manage and improve interactions with customers and potential clients. A CRM system helps businesses strengthen relationships, improve customer retention, and support sales growth by organizing all customer information in one place." },
  { k: "Why is CRM important for businesses of all sizes?", v: "CRM is valuable for businesses of every size because it centralizes data, simplifies processes, and improves collaboration across teams. It helps build strong customer relationships and provides insights that support growth. With advanced features like automation and analytics, businesses can manage data efficiently and scale operations with ease." },
  { k: "What features should a business look for in a CRM?", v: "Key CRM features include contact management, sales tracking, marketing automation, customer support tools, reporting and analytics, and integrations with other software. Flexibility and customization are also important so the system can adapt to your specific business needs." },
  { k: "What makes AI-powered CRM different?", v: "AI-powered CRM systems use intelligent technology to analyze customer data, predict behavior, and recommend actions. They can automate routine tasks, personalize interactions, and provide real-time insights, helping teams work more efficiently and make smarter decisions." },
  { k: "How does CRM improve collaboration across teams?", v: "CRM brings all customer data into one place, creating a shared view for all departments. This allows sales, marketing, and support teams to work together more effectively, ensuring consistent communication and a seamless customer experience." },
  { k: "How does CRM help increase sales?", v: "CRM systems improve sales by organizing leads, tracking opportunities, and automating follow-ups. They provide clear insights into the sales pipeline, helping teams focus on the right prospects and close deals faster while improving customer retention." },
  { k: "How does CRM enhance customer service?", v: "CRM enables support teams to access complete customer histories, allowing them to respond quickly and accurately. This leads to faster issue resolution, better communication, and a more personalized customer experience." },
  { k: "What are the main types of CRM?", v: "There are four main types of CRM: Operational CRM (business process automation), Analytical CRM (data insights), Collaborative CRM (team communication), and Strategic CRM (long-term relationships)." },
  { k: "How do I choose the right CRM for my business?", v: "Choosing the right CRM depends on your business size, industry, budget, and goals. Look for features like ease of use, customization, integrations, and scalability. Testing different platforms through free trials can help you make the right decision." },
  { k: "How much does a CRM cost?", v: "CRM pricing varies depending on features, number of users, and the provider. It’s important to consider overall costs, including setup, training, and customization, when selecting a solution that fits your budget." },
  { k: "How do I implement a CRM system?", v: "Implementing a CRM involves identifying your business needs, selecting the right platform, customizing it to your processes, migrating data, and training your team. Proper planning and ongoing support are key to successful adoption." }
];

function HomeCTA({ title, description }: { title: string, description?: string }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 text-center my-16">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 italic">{title}</h3>
      {description && <p className="text-slate-600 mb-8 max-w-2xl mx-auto italic">{description}</p>}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20">Start Free Trial</button>
        <button className="px-8 py-4 bg-white text-brand font-bold rounded-xl border border-brand/20">Learn More</button>
      </div>
    </div>
  );
}

export default function HomeContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="italic">
      {/* 🚀 Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand/5 blur-[100px] rounded-full -z-10" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full -z-10" 
        />
        
        <div className="max-w-7xl mx-auto px-4 text-center relative">
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
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight italic"
            >
              Build Stronger Customer <br />Relationships. <span className="text-brand">Grow Faster.</span>
            </motion.h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="max-w-3xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed italic"
            >
              Your all-in-one CRM platform to manage leads, automate sales, and deliver exceptional customer experiences — all from a single, powerful system.
            </motion.p>

            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } }
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto px-10 py-5 bg-brand text-white font-bold rounded-2xl shadow-2xl shadow-brand/25 transition-all hover:-translate-y-1 hover:shadow-brand/40 active:scale-95">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group">
                <PlayCircle className="w-5 h-5 text-brand group-hover:scale-110 transition-transform" />
                Book a Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* What is CRM? */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 border-b border-slate-100"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-brand pl-6 italic">What is CRM?</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed italic mb-10">
            <p>• Customer Relationship Management (CRM) is a technology that helps businesses manage interactions with customers and prospects, improve relationships, and drive growth.</p>
            <p>• Our CRM empowers your team to stay connected, organized, and focused — so you can turn every interaction into an opportunity.</p>
          </div>
          <div className="flex gap-6">
             <button className="flex items-center gap-2 text-brand font-bold hover:translate-x-1 transition-transform">
               <PlayCircle className="w-5 h-5" /> Watch Demo
             </button>
             <button className="flex items-center gap-2 text-brand font-bold hover:translate-x-1 transition-transform">
               Start Free Trial
             </button>
          </div>
        </motion.section>

        {/* Let’s Understand CRM */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-8 italic">Let’s Understand CRM</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed italic">
            <p>CRM stands for customer relationship management. It’s a system that helps businesses manage interactions with current and potential customers. The goal is simple: improve relationships, streamline processes, and support business growth.</p>
            <p>A CRM system helps you track every interaction with your customers — from sales conversations to support requests and marketing activities. It keeps all your data organized in one place so your team can stay informed and work more efficiently.</p>
            <p>Modern CRM tools can also connect data from different sources and use smart features to help manage relationships across the entire customer journey — including sales, marketing, and customer support.</p>
            <p className="font-bold text-slate-900">That’s the basic idea of CRM. Now, let’s look at why it matters and how it can help your business.</p>
          </div>
        </motion.section>

        {/* What You’ll Discover */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="py-16 bg-slate-50/50 rounded-[2.5rem] p-10 border border-slate-100 mb-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8 italic">What You’ll Discover</h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {DiscoverPoints.map((point, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-center gap-3 text-slate-700 font-medium"
              >
                <div className="w-2 h-2 bg-brand rounded-full" />
                {point}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 👥 Who can benefit */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4 italic">
            <Users className="w-8 h-8 text-brand" />
            Who can benefit from a CRM system?
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed italic">
            <p>CRM software is designed for businesses of all sizes and industries. It helps large organizations manage customer data across teams, while small businesses and startups can stay organized and work more efficiently with fewer resources. Whether you run a growing company or an established enterprise, a CRM helps you keep track of every customer interaction in one place.</p>
            <p>Any business that connects with customers — including sales, marketing, support, or operations — can benefit from using a CRM system. It allows teams to share information, improve collaboration, and deliver better customer experiences. No matter your industry, a CRM helps you stay connected and make smarter decisions.</p>
          </div>
          <HomeCTA title="Work smarter with our CRM platform" description="Start quickly with tools to manage leads, track opportunities, and build stronger customer relationships — all in one place." />
        </motion.section>

        {/* 📈 Why is CRM important for business growth? */}
        <section className="py-20">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4 italic"
          >
            <TrendingUp className="w-8 h-8 text-brand" />
            Why is CRM important for business growth?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-600 leading-relaxed italic mb-12"
          >
            <p>Running a business today is more complex than ever. Most companies rely on multiple tools and systems, but many of them don’t work together. This makes it difficult to get a clear and accurate view of your customers and operations. To grow successfully, businesses need to focus on customers while using the right technology to support them.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-6"
          >
            {[
              { title: "A single, unified view of customers", icon: Layers, desc: "A CRM gives you one central place to store and access all customer information — including interactions, history, and preferences." },
              { title: "Reduced costs and better efficiency", icon: BarChart3, desc: "A CRM keeps everything organized, reduces administrative work, and helps your team focus on activities that drive revenue." },
              { title: "Better team collaboration", icon: Users, desc: "A CRM connects your sales, marketing, and support teams by giving them access to shared data. This improves communication and alignment." },
              { title: "Increased productivity with smart tools", icon: Zap, desc: "Modern CRM systems include automation and intelligent features that speed up everyday tasks, from sending emails to generating insights." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex gap-6 p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand flex-shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 italic">{item.title}</h4>
                  <p className="text-slate-600 italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <HomeCTA title="Start growing your business with the right CRM" description="Simplify your processes, connect your teams, and turn customer data into real results — all in one powerful platform." />
        </section>

        {/* ⭐ Key benefits */}
        <section className="py-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4 italic"
          >
            <CheckCircle2 className="w-8 h-8 text-brand" />
            What are the key benefits of using CRM?
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-4"
          >
            {[
              { t: "1. Breaking down team silos", d: "A CRM makes it easy to share information across departments. Everyone can access real-time customer data from a single platform." },
              { t: "2. Driving better business results", d: "CRM systems help teams work more efficiently, reduce manual effort, and uncover new opportunities." },
              { t: "3. Smarter insights with advanced technology", d: "Intelligent features help identify patterns and trends, allowing businesses to predict needs and personalize interactions." },
              { t: "4. Faster work with automation", d: "Automation tools within a CRM simplify repetitive tasks like managing leads and follow-ups, saving valuable time." },
              { t: "5. Stronger customer relationships", d: "Identify opportunities for cross-selling and upselling through better engagement and customer journey tracking." },
              { t: "6. Improved customer support", d: "Support teams respond quickly with full context of customer histories, ensuring more personalized service." },
              { t: "7. Better products and services", d: "Insights into behavior and feedback help identify gaps and make informed decisions to improve your offerings." }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] italic"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-2 italic">{benefit.t}</h4>
                <p className="text-slate-600 italic">{benefit.d}</p>
              </motion.div>
            ))}
          </motion.div>
          <HomeCTA title="Unlock the full potential of your business with CRM" description="Connect your teams, streamline your work, and deliver better customer experiences — all from one powerful platform." />
        </section>

        {/* ⚙️ Features and functions */}
        <section className="py-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4 italic"
          >
            <Settings2 className="w-8 h-8 text-brand" />
            What features and functions does a CRM offer?
          </motion.h2>
          <p className="text-lg text-slate-600 leading-relaxed italic mb-12">
            A CRM system helps you manage customer relationships by storing contact details, tracking interactions, identifying opportunities, and organizing sales, service, and marketing activities — all in one place.
          </p>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {[
              { t: "Cloud-based access and flexibility", icon: Cloud, d: "Securely access data anytime, from anywhere. Cloud solutions are cost-effective and scalable." },
              { t: "Complete customer view", icon: Users, d: "A full picture of every customer and prospect for marketing, sales, and support teams." },
              { id: "integration", t: "Integration with other tools", icon: Layers, d: "Connect with billing, communication, and document apps for smooth data flow." },
              { t: "Built-in intelligence and automation", icon: Cpu, d: "Automate routine tasks like data entry and lead assignment while gaining smart insights." }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm italic hover:border-brand/20 transition-colors"
              >
                <f.icon className="w-6 h-6 text-brand mb-4" />
                <h4 className="font-bold text-slate-900 mb-2 italic">{f.t}</h4>
                <p className="text-sm text-slate-500 italic">{f.d}</p>
              </motion.div>
            ))}
          </motion.div>
          <HomeCTA title="Simplify your business with powerful CRM features" description="Manage customers, streamline workflows, and unlock better insights — all from one intelligent platform." />
        </section>

        {/* 💰 Pricing */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 border-t border-slate-100 mb-20 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 italic">How much does a CRM system typically cost?</h2>
          <p className="text-lg text-slate-600 leading-relaxed italic max-w-3xl mx-auto mb-10">
            A CRM system can deliver significant value without requiring a large upfront investment. Pricing varies based on size, features, and customization. Most solutions offer flexible plans that scale as your business grows, allowing you to start simple and expand over time.
          </p>
          <button className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl active:scale-95 transition-all italic hover:bg-slate-800">View Pricing Plans</button>
        </motion.section>

        {/* ❓ FAQs */}
        <section className="py-20 mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center italic"
          >
            Frequently Asked <span className="text-brand">Questions (FAQs)</span>
          </motion.h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-100 rounded-[2rem] overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 italic leading-tight">{faq.k}</span>
                  <motion.div 
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-brand"
                  >
                    {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8 text-slate-600 italic leading-relaxed"
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

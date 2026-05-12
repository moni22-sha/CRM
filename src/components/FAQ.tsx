import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    k: "Is The Bot CRM a CRM platform?",
    v: "Yes. The Bot CRM is an advanced customer relationship management platform designed to help businesses manage customer interactions, improve productivity, and strengthen relationships. It enables companies of all sizes to connect with customers and prospects more effectively while driving growth. It brings all your business data into one unified system, allowing your sales, marketing, support, and operations teams to work together with a complete view of every customer."
  },
  {
    k: "Is The Bot CRM cloud-based?",
    v: "Yes. The Bot CRM is a cloud-based solution, meaning it runs securely online without requiring complex installations. As a Software-as-a-Service (SaaS) platform, it handles hosting, maintenance, and updates automatically, reducing technical effort and infrastructure costs for your business."
  },
  {
    k: "What is the pricing of The Bot CRM?",
    v: "The Bot CRM offers flexible pricing options to suit different business needs. Plans can vary based on features, number of users, and level of customization. This allows businesses to choose a solution that fits both their requirements and budget."
  },
  {
    k: "Who can use The Bot CRM?",
    v: "The Bot CRM is built for businesses of all sizes — from startups and small businesses to large enterprises. Its flexible and scalable design makes it suitable for a wide range of industries and use cases."
  },
  {
    k: "Is The Bot CRM easy to use?",
    v: "Yes. The Bot CRM is designed with a simple and user-friendly interface, making it easy for teams to get started quickly. With intuitive navigation and smart tools, employees can learn and adapt without extensive training."
  },
  {
    k: "What features does The Bot CRM offer?",
    v: "The Bot CRM includes a wide range of features such as contact management, sales tracking, workflow automation, reporting and analytics, AI-powered insights, integrations, and mobile access. It is also customizable to match your business processes."
  },
  {
    k: "What are the benefits of using The Bot CRM?",
    v: "The Bot CRM helps improve team productivity, provides a complete customer view, and enables better decision-making with real-time insights. It supports automation, simplifies collaboration, and ensures your business can scale efficiently while maintaining strong customer relationships."
  },
  {
    k: "What are some use cases of The Bot CRM?",
    v: "The Bot CRM can be used across multiple functions including sales management, customer support, marketing campaigns, operations, and more. Businesses use it to streamline workflows, improve communication, and enhance overall performance."
  },
  {
    k: "How does The Bot CRM support sales teams?",
    v: "The Bot CRM helps sales teams manage leads, track opportunities, and close deals faster. With access to real-time data and insights, teams can prioritize the right prospects, improve engagement, and increase revenue."
  },
  {
    k: "Is The Bot CRM only for sales teams?",
    v: "No. The Bot CRM is designed for multiple departments including sales, marketing, customer support, and operations. It provides a shared platform where all teams can collaborate and access customer information easily."
  },
  {
    k: "What is marketing automation in The Bot CRM?",
    v: "The Bot CRM includes marketing automation tools that help businesses create, manage, and optimize campaigns. It supports personalized communication across channels like email, social media, and messaging, helping improve engagement and customer retention."
  },
  {
    k: "Can The Bot CRM integrate with other tools?",
    v: "Yes. The Bot CRM supports integration with various business applications such as accounting, communication tools, and other software systems. This ensures smooth data flow and helps create a connected business environment."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">The Bot CRM <span className="text-brand italic">FAQs</span></h2>
          <p className="text-slate-600">Everything you need to know about our platform</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-3xl overflow-hidden hover:border-brand/20 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 bg-slate-50/30"
              >
                <span className="text-lg font-bold text-slate-800 leading-tight">{faq.k}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-brand">
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed text-base">
                      {faq.v}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

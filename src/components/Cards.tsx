import { motion } from "motion/react";
import { BookOpen, Rocket, ShieldCheck, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Understand CRM Better",
    description: "Learn how CRM helps your teams stay connected, improve communication, and deliver better customer experiences across every interaction.",
    linkText: "Learn More",
    icon: BookOpen,
    color: "bg-blue-500",
  },
  {
    title: "Get Started Easily",
    description: "Set up your CRM quickly with simple steps and start managing your business processes without complexity.",
    linkText: "Explore Guide",
    icon: Rocket,
    color: "bg-purple-500",
  },
  {
    title: "Try CRM for Free",
    description: "Experience a fully functional CRM with no setup hassle. Get started instantly and see how it works for your business.",
    linkText: "Start Free Trial",
    icon: ShieldCheck,
    color: "bg-emerald-500",
  }
];

export default function FeatureCards() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Achieve More with a Smarter CRM</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Give your teams the tools they need to succeed. With a unified system, you can manage customer data, track performance, and make faster decisions — all from one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-6 shadow-lg shadow-brand/10`}>
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {card.description}
              </p>
              <button className="flex items-center gap-2 text-brand font-bold group-hover:gap-3 transition-all">
                {card.linkText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

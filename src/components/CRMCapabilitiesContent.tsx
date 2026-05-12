import { motion } from "motion/react";
import { 
  Users, 
  Database, 
  Cpu, 
  Layout, 
  Cloud, 
  Smartphone, 
  Zap, 
  Share2, 
  Settings,
  LineChart,
  Target,
  FileText,
  MessageCircle,
  HelpCircle,
  Truck,
  Mail,
  Navigation,
  Link,
  ShieldAlert
} from "lucide-react";

const capabilities = [
  { icon: Users, title: "Contact & Account Management", desc: "Stores and organizes customer details and communication history." },
  { icon: Database, title: "Unified Customer Data", desc: "Consolidates data from multiple sources into one centralized profile." },
  { icon: Cpu, title: "AI Capabilities", desc: "Predict behavior and recommend next best actions using artificial intelligence." },
  { icon: Layout, title: "Reporting & Dashboards", desc: "Real-time visibility into performance with custom visual reports." },
  { icon: Cloud, title: "Cloud-Based Infrastructure", desc: "Online hosting for easy access without on-site servers." },
  { icon: Smartphone, title: "Mobile Accessibility", desc: "Access data anytime, anywhere using any mobile device." },
  { icon: Zap, title: "Automation & Workflows", desc: "Automate repetitive tasks like data entry and follow-ups." },
  { icon: Share2, title: "Collaboration Tools", desc: "Share updates and communicate in real-time with integrated tools." },
  { icon: Settings, title: "Scalability & Customization", desc: "Adapt fields and workflows as your business grows." },
  { icon: LineChart, title: "Sales Forecasting", desc: "Predict future revenue using historical data and AI insights." },
  { icon: Target, title: "Pipeline Management", desc: "Track deals across every stage of the sales cycle." },
  { icon: FileText, title: "Quote & Order Management", desc: "Generate accurate quotes and streamline order processing." },
  { icon: MessageCircle, title: "Omnichannel Support", desc: "Deliver consistent experiences across email, chat, and phone." },
  { icon: HelpCircle, title: "Self-Service Capabilities", desc: "Enable customers to find answers through knowledge bases." },
  { icon: Truck, title: "Field Service Management", desc: "Support remote teams with scheduling and mobile data access." },
  { icon: Mail, title: "Campaign Management", desc: "Plan, execute, and track marketing campaigns from one platform." },
  { icon: Navigation, title: "Journey Orchestration", desc: "Design personalized customer journeys through segmentation." },
  { icon: Link, title: "Third-Party Integrations", desc: "Connect with external systems like ERP and accounting tools." },
  { icon: ShieldAlert, title: "Data Security", desc: "Protect information with encryption and role-based access." }
];

export default function CRMCapabilitiesContent() {
  return (
    <div className="pt-32 pb-24 italic">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-display">19 Essential CRM Features to <span className="text-brand">Grow Your Business</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              The right CRM platform can reshape how your business operates. By bringing together data, automation, and intelligent insights, CRM tools help teams work smarter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg">Learn More</button>
              <button className="px-8 py-4 bg-slate-50 text-slate-700 font-bold rounded-xl border border-slate-200">Get Started Free</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand/10 transition-all flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                  <cap.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cap.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-center text-white italic">
             <h2 className="text-3xl font-bold mb-6">How to Choose the Right Features</h2>
             <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed italic">
               Selecting the right CRM starts with understanding your business goals. Focus on features that align with your workflows, enhance productivity, and support scalability.
             </p>
             <button className="px-10 py-5 bg-brand text-white font-bold rounded-2xl shadow-xl shadow-brand/20">Talk to an Expert</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

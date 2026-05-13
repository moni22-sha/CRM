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
    <div className="pt-32 pb-24 italic" style={{ background: "linear-gradient(135deg, #0a3fa8 0%, #1254c0 45%, #6d28d9 100%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">19 Essential CRM Features to <span className="text-[#00c2ff]">Grow Your Business</span></h1>
            <p className="text-xl text-gray-100 leading-relaxed mb-10">
              The right CRM platform can reshape how your business operates. By bringing together data, automation, and intelligent insights, CRM tools help teams work smarter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#00c2ff] text-slate-900 font-bold rounded-xl shadow-lg shadow-[#00c2ff]/20 hover:bg-[#1a9fff] transition-all">Learn More</button>
              <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">Get Started Free</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-8 bg-white/10 rounded-[2rem] border border-white/10 shadow-sm hover:shadow-xl hover:border-[#00c2ff]/30 transition-all flex flex-col items-center text-center group backdrop-blur">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00c2ff] group-hover:text-slate-900 transition-colors">
                  <cap.icon className="w-8 h-8 text-white group-hover:text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-white/10 rounded-[3rem] text-center text-white italic border border-white/10 backdrop-blur">
             <h2 className="text-3xl font-bold mb-6">How to Choose the Right Features</h2>
             <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed italic">
               Selecting the right CRM starts with understanding your business goals. Focus on features that align with your workflows, enhance productivity, and support scalability.
             </p>
             <button className="px-10 py-5 bg-[#00c2ff] text-slate-900 font-bold rounded-2xl shadow-xl shadow-[#00c2ff]/20 hover:bg-[#1a9fff] transition-all">Talk to an Expert</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

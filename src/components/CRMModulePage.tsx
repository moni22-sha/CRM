import { motion } from "motion/react";
import { 
  Target, 
  TrendingUp, 
  FileText, 
  CreditCard, 
  Box, 
  CheckSquare, 
  MapPin, 
  Users, 
  BarChart3, 
  Mail, 
  FolderKanban,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  MessageCircle
} from "lucide-react";
import leadsImage from "../Image/leads.png";
import proposalImage from "../Image/Proposal.png";
import InvoiceImage from "../Image/Invoice.png";
import Field  from "../Image/Field.png";
import Report from "../Image/Report.png";
import Project from "../Image/Project.png";
import Task from "../Image/Task.png";
import Customer from "../Image/Customer.png";


export type ModuleId = 
  | "lead-management" 
  | "sales-pipeline" 
  | "proposal-management" 
  | "invoice-management" 
  | "inventory-management" 
  | "task-assignment" 
  | "field-tracking" 
  | "customer-management" 
  | "reports-analytics" 
  | "email-integration" 
  | "project-tracker";

interface ModuleData {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  benefits: string[];
}

export const modulesData: Record<ModuleId, ModuleData> = {
  "lead-management": {
    title: "Lead Management",
    subtitle: "Lead Management That Converts Opportunities Faster",
    description: "Track, organize, and nurture every lead from the very first interaction to final conversion. Our Lead Management module helps businesses capture leads from multiple channels, assign them to the right sales representatives, and monitor every stage of the customer journey in one centralized system.",
    icon: Target,
    image: leadsImage,
    features: [
      "Centralized lead database",
      "Lead capture from website, email, and campaigns",
      "Lead scoring and prioritization",
      "Automated follow-ups and reminders",
      "Real-time status tracking",
      "Sales team assignment and notifications",
      "Lead conversion reports"
    ],
    benefits: [
      "Improve lead response times",
      "Increase conversion rates",
      "Eliminate manual lead tracking",
      "Enhance sales productivity",
      "Gain complete visibility into sales opportunities"
    ]
  },
  "sales-pipeline": {
    title: "Sales Pipeline",
    subtitle: "Streamline Your Sales Process with a Powerful Pipeline",
    description: "Our Sales Pipeline module provides a complete visual overview of your sales process, helping teams manage deals efficiently from prospecting to closing. With customizable pipeline stages, sales forecasting, and activity tracking, businesses can improve visibility and accelerate revenue growth.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=600",
    features: [
      "Visual pipeline management",
      "Deal tracking and forecasting",
      "Customizable sales stages",
      "Automated reminders and alerts",
      "Team collaboration tools",
      "Revenue forecasting dashboards",
      "Performance analytics"
    ],
    benefits: [
      "Shorten sales cycles",
      "Improve deal visibility",
      "Increase forecasting accuracy",
      "Boost sales team efficiency",
      "Enhance customer engagement"
    ]
  },
  "proposal-management": {
    title: "Proposal Management",
    subtitle: "Create Professional Proposals in Minutes",
    description: "Simplify the proposal creation process with automated templates, digital approvals, and centralized document management. Our Proposal Management module helps businesses generate accurate and professional proposals quickly while reducing manual effort.",
    icon: FileText,
    image: proposalImage,
    features: [
      "Ready-to-use proposal templates",
      "Proposal customization tools",
      "Digital approval workflows",
      "Real-time tracking and notifications",
      "Secure document storage",
      "Automated version control",
      "Proposal performance insights"
    ],
    benefits: [
      "Reduce proposal creation time",
      "Improve document accuracy",
      "Speed up approvals",
      "Enhance client experience",
      "Increase sales efficiency"
    ]
  },
  "invoice-management": {
    title: "Invoice Management",
    subtitle: "Manage Invoices Efficiently and Get Paid Faster",
    description: "Our Invoice Management module helps businesses automate billing, track payments, and manage financial records from a single platform. Generate invoices instantly, send payment reminders automatically, and maintain complete transparency in your billing operations.",
    icon: CreditCard,
    image: InvoiceImage,
    features: [
      "Automated invoice generation",
      "Payment tracking and reminders",
      "Tax and discount management",
      "Multi-currency support",
      "Financial reporting dashboards",
      "Invoice history management",
      "Secure payment integrations"
    ],
    benefits: [
      "Reduce billing errors",
      "Improve payment collection",
      "Save administrative time",
      "Maintain accurate financial records",
      "Enhance cash flow management"
    ]
  },
  "inventory-management": {
    title: "Inventory Management",
    subtitle: "Smart Inventory Tracking for Better Operations",
    description: "Keep complete control over your stock levels, product movement, and warehouse operations with our Inventory Management module. The system helps businesses monitor inventory in real time, avoid stock shortages, and optimize purchasing decisions.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600&h=600",
    features: [
      "Real-time stock tracking",
      "Inventory alerts and notifications",
      "Product categorization",
      "Warehouse management",
      "Purchase and supplier tracking",
      "Inventory analytics and reports",
      "Barcode and SKU support"
    ],
    benefits: [
      "Prevent stock shortages",
      "Reduce excess inventory costs",
      "Improve operational efficiency",
      "Simplify warehouse management",
      "Increase inventory accuracy"
    ]
  },
  "task-assignment": {
    title: "Task Assignment",
    subtitle: "Assign, Track, and Complete Tasks Seamlessly",
    description: "Improve team productivity with a centralized Task Assignment module that allows managers to assign responsibilities, monitor progress, and track deadlines efficiently.",
    icon: CheckSquare,
    image: Task,
    features: [
      "Task assignment and tracking",
      "Priority and deadline management",
      "Team notifications and reminders",
      "Progress monitoring dashboards",
      "Recurring task automation",
      "Collaboration and comments",
      "Activity history tracking"
    ],
    benefits: [
      "Improve team accountability",
      "Increase productivity",
      "Reduce missed deadlines",
      "Simplify task management",
      "Enhance collaboration across departments"
    ]
  },
  "field-tracking": {
    title: "Field Visiting Tracking",
    subtitle: "Monitor Field Teams in Real Time",
    description: "Our Field Visiting Tracking module helps businesses manage on-site teams efficiently by tracking visits, locations, and activity updates in real time.",
    icon: MapPin,
    image: Field,
    features: [
      "Real-time field updates",
      "Attendance and route monitoring",
      "Customer visit history",
      "Mobile accessibility",
      "Activity reporting dashboards",
      "Automated check-in/check-out"
    ],
    benefits: [
      "Improve field workforce visibility",
      "Enhance route planning",
      "Increase accountability",
      "Reduce manual reporting",
      "Improve customer service efficiency"
    ]
  },
  "customer-management": {
    title: "Customer Management",
    subtitle: "Build Stronger Customer Relationships",
    description: "Manage customer interactions, communication history, and account details from one centralized platform. Our Customer Management module helps businesses deliver personalized experiences and strengthen long-term relationships.",
    icon: Users,
    image: Customer,
    features: [
      "Centralized customer database",
      "Customer interaction history",
      "Contact and communication management",
      "Customer segmentation",
      "Support ticket integration",
      "Personalized engagement tools",
      "Customer lifecycle tracking"
    ],
    benefits: [
      "Improve customer satisfaction",
      "Strengthen customer retention",
      "Deliver personalized experiences",
      "Enhance communication efficiency",
      "Build long-term customer loyalty"
    ]
  },
  "reports-analytics": {
    title: "Reports & Analytics",
    subtitle: "Make Smarter Decisions with Real-Time Insights",
    description: "Turn business data into actionable insights with our Reports & Analytics module. Generate detailed reports, monitor KPIs, and visualize performance trends through interactive dashboards.",
    icon: BarChart3,
    image: Report,
    features: [
      "Customizable reports and dashboards",
      "Real-time business analytics",
      "Sales and performance tracking",
      "Exportable reports",
      "KPI monitoring",
      "Trend analysis tools",
      "Role-based reporting access"
    ],
    benefits: [
      "Improve business decision-making",
      "Track organizational performance",
      "Identify growth opportunities",
      "Increase operational visibility",
      "Enhance reporting accuracy"
    ]
  },
  "email-integration": {
    title: "Email Integration",
    subtitle: "Simplify Communication with Seamless Email Integration",
    description: "Connect your email system directly with your CRM to centralize communication and improve productivity. Our Email Integration module allows businesses to send, receive, and track emails without switching between platforms.",
    icon: Mail,
    image: "https://www.androidauthority.com/wp-content/uploads/2022/06/gmail-inbox-new.jpg",
    
    features: [
      "Two-way email synchronization",
      "Email tracking and logging",
      "Automated email workflows",
      "Contact synchronization",
      "Email templates and scheduling",
      "Communication history tracking",
      "Multi-platform email support"
    ],
    benefits: [
      "Save time on communication management",
      "Improve response tracking",
      "Centralize customer communication",
      "Increase team efficiency",
      "Enhance collaboration and follow-ups"
    ]
  },
  "project-tracker": {
    title: "Project Tracker",
    subtitle: "Manage Projects with Complete Visibility",
    description: "Our Project Tracker module helps businesses plan, execute, and monitor projects efficiently from start to finish. Teams can assign tasks, track milestones, monitor deadlines, and collaborate in real time.",
    icon: FolderKanban,
    image: Project,
    features: [
      "Project planning and scheduling",
      "Task and milestone tracking",
      "Team collaboration tools",
      "Progress monitoring dashboards",
      "Deadline and priority management",
      "File sharing and documentation",
      "Project performance analytics"
    ],
    benefits: [
      "Improve project visibility",
      "Keep projects on schedule",
      "Increase team collaboration",
      "Simplify workflow management",
      "Enhance operational efficiency"
    ]
  }
};

export default function CRMModulePage({ moduleId }: { moduleId: ModuleId }) {
  const data = modulesData[moduleId];

  if (!data) return null;

  return (
    <div className="non-italic">

      {/* ═══ HERO — Bitrix24-style blue gradient ═══ */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a3fa8 0%, #1254c0 45%, #6d28d9 100%)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -left-16 bottom-0 w-56 h-56 rounded-full opacity-60 pointer-events-none"
          style={{ background: "#00c2ff" }}
        />
        <div
          className="absolute right-0 top-0 w-72 h-72 rounded-full opacity-50 pointer-events-none"
          style={{ background: "#a855f7", transform: "translate(35%, -35%)" }}
        />
        <div
          className="absolute left-1/2 bottom-0 w-40 h-40 rounded-full opacity-20 pointer-events-none"
          style={{ background: "#60a5fa", transform: "translate(-50%, 50%)" }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center gap-14"
          >
            {/* Left — text */}
            <div className="flex-1 text-center lg:text-left">

              {/* Module badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold text-white"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <data.icon className="w-4 h-4 text-white" />
                </div>
                {data.title} Module
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight non-italic">
                {data.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 non-italic"
                style={{ color: "#00c2ff" }}
              >
                {data.subtitle}
              </h2>
              <p className="text-lg leading-relaxed mb-10 non-italic max-w-xl mx-auto lg:mx-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {data.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  className="px-10 py-4 font-bold rounded-full text-slate-900 active:scale-95 transition-all shadow-lg"
                  style={{ background: "linear-gradient(90deg, #00c2ff, #1a9fff)" }}
                >
                  Start Free Trial
                </button>
                <button
                  className="px-10 py-4 font-bold rounded-full text-white flex items-center justify-center gap-2 transition-all"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Quick feature pills */}
              <div className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start">
                {data.features.slice(0, 3).map((f, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5"
                    style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <CheckCircle2 className="w-3 h-3" style={{ color: "#00c2ff" }} />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — image card */}
            <div className="hidden lg:block flex-shrink-0 w-[480px]">
              <div
                className="relative rounded-3xl overflow-hidden group"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  padding: "8px"
                }}
              >
                {/* Inner image */}
                <div className="rounded-2xl overflow-hidden h-[340px]">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-[8px] rounded-2xl bg-gradient-to-t from-[#0a3fa8]/70 via-transparent to-transparent" />
                </div>

                {/* Bottom overlay label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}
                    >
                      <data.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{data.title}</p>
                      <p className="text-white/60 text-xs">CRM Module</p>
                    </div>
                  </div>
                  {/* Live badge */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(0,194,255,0.2)", color: "#00c2ff", border: "1px solid rgba(0,194,255,0.4)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff] animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Stat chip top-right */}
                <div
                  className="absolute top-5 right-5 px-3 py-2 rounded-xl text-center"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <p className="text-white font-bold text-lg leading-none">{data.features.length}+</p>
                  <p className="text-white/70 text-[10px] mt-0.5">Features</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ BODY ═══ */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >

          {/* Features and Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 non-italic">
                <CheckCircle2 className="w-6 h-6 text-brand" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 non-italic group">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 non-italic">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
                Benefits
              </h3>
              <ul className="space-y-6">
                {data.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-4 non-italic group">
                    <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Bottom */}
          <div
            className="relative p-12 rounded-[3rem] text-center text-white non-italic overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0a3fa8 0%, #1254c0 45%, #6d28d9 100%)" }}
          >
            {/* blobs */}
            <div className="absolute -left-10 bottom-0 w-40 h-40 rounded-full opacity-50 pointer-events-none" style={{ background: "#00c2ff" }} />
            <div className="absolute right-0 top-0 w-52 h-52 rounded-full opacity-40 pointer-events-none" style={{ background: "#a855f7", transform: "translate(30%, -30%)" }} />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 non-italic">Need custom workflows?</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto non-italic" style={{ color: "rgba(255,255,255,0.75)" }}>
                Our team can help you customize the {data.title} module to perfectly fit your business processes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  className="px-8 py-4 font-bold rounded-full text-slate-900 active:scale-95 transition-all shadow-lg"
                  style={{ background: "linear-gradient(90deg, #00c2ff, #1a9fff)" }}
                >
                  Book Consultation
                </button>
                <button
                  className="px-8 py-4 font-bold rounded-full text-white flex items-center justify-center gap-2 transition-all"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  Talk to Sales
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
import React from "react";
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
  ArrowRight,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";

// --- Assets ---
import leadsImage from "../Image/leads.png";
import proposalImage from "../Image/Proposal.png";
import InvoiceImage from "../Image/Invoice.png";
import Field from "../Image/Field.png";
import Report from "../Image/Report.png";
import Project from "../Image/Project.png";
import Task from "../Image/Task.png";
import Customer from "../Image/Customer.png";

// --- Types ---
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

interface Theme {
  primary: string;
  secondary: string;
  light: string;
}

interface ModuleData {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  image: string;
  theme: Theme;
  features: string[];
  benefits: string[];
}

// --- Data Configuration ---
export const modulesData: Record<ModuleId, ModuleData> = {
  "lead-management": {
    title: "Lead Management",
    subtitle: "Lead Management That Converts Faster",
    description: "Track, organize, and nurture every lead from first interaction to final conversion.",
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
    ],
    theme: { primary: "#2563eb", secondary: "#1d4ed8", light: "#dbeafe" },
  },
  "sales-pipeline": {
    title: "Sales Pipeline",
    subtitle: "Manage Deals Efficiently",
    description: "Track every opportunity and manage your sales process visually.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
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
    ],
    theme: { primary: "#3b82f6", secondary: "#2563eb", light: "#dbeafe" },
  },
  "proposal-management": {
    title: "Proposal Management",
    subtitle: "Create Proposals Faster",
    description: "Generate professional proposals with automated approvals.",
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
    ],
    theme: { primary: "#8b5cf6", secondary: "#7c3aed", light: "#ede9fe" },
  },
  "invoice-management": {
    title: "Invoice Management",
    subtitle: "Billing Made Easy",
    description: "Manage invoices, reminders, and payments from one dashboard.",
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
    ],
    theme: { primary: "#10b981", secondary: "#059669", light: "#d1fae5" },
  },
  "inventory-management": {
    title: "Inventory Management",
    subtitle: "Track Inventory Smartly",
    description: "Monitor stock levels and warehouse operations in real time.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
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
    ],
    theme: { primary: "#f59e0b", secondary: "#d97706", light: "#fef3c7" },
  },
  "task-assignment": {
    title: "Task Assignment",
    subtitle: "Improve Team Productivity",
    description: "Assign tasks and monitor deadlines efficiently.",
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
    ],
    theme: { primary: "#ec4899", secondary: "#db2777", light: "#fce7f3" },
  },
  "field-tracking": {
    title: "Field Tracking",
    subtitle: "Track Field Teams",
    description: "Monitor field visits and team activity updates in real time.",
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
    ],
    theme: { primary: "#ef4444", secondary: "#dc2626", light: "#fee2e2" },
  },
  "customer-management": {
    title: "Customer Management",
    subtitle: "Build Better Relationships",
    description: "Manage customer communication and engagement in one place.",
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
    ],
    theme: { primary: "#06b6d4", secondary: "#0891b2", light: "#cffafe" },
  },
  "reports-analytics": {
    title: "Reports & Analytics",
    subtitle: "Business Insights in Real Time",
    description: "Track KPIs and generate smart reports instantly.",
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
    ],
    theme: { primary: "#6366f1", secondary: "#4f46e5", light: "#e0e7ff" },
  },
  "email-integration": {
    title: "Email Integration",
    subtitle: "Centralize Communication",
    description: "Connect email workflows directly inside your CRM.",
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
    ],
    theme: { primary: "#14b8a6", secondary: "#0f766e", light: "#ccfbf1" },
  },
  "project-tracker": {
    title: "Project Tracker",
    subtitle: "Track Projects Efficiently",
    description: "Manage milestones and collaboration from one platform.",
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
    ],
    theme: { primary: "#d946ef", secondary: "#c026d3", light: "#fae8ff" },
  },
};

export default function CRMModulePage({ moduleId }: { moduleId: ModuleId }) {
  const data = modulesData[moduleId];
  if (!data) return null;
  const theme = data.theme;

  return (
    <div className="bg-[#f7f8fc] font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute right-0 top-0 w-[280px] h-[280px] rounded-[60px] rotate-12 opacity-70" style={{ background: theme.light }} />
        <div className="absolute left-[45%] bottom-10 w-[220px] h-[220px] rounded-full opacity-30" style={{ background: theme.primary }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full mb-8" style={{ background: theme.light, color: theme.primary }}>
                <div className="w-3 h-3 rounded-full" style={{ background: theme.primary }} />
                <span className="font-semibold text-sm">#1 Rated CRM Solution</span>
              </div>
              <h1 className="text-[60px] leading-[1.05] font-bold text-slate-900 mb-6">
                Simplify your <br />
                <span style={{ color: theme.primary }}>{data.title}</span>
              </h1>
              <p className="text-[22px] leading-[1.8] text-slate-500 max-w-xl mb-10">{data.description}</p>
              <div className="flex flex-wrap gap-5">
                <button className="px-10 py-5 rounded-2xl text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all flex items-center gap-3" style={{ background: theme.primary }}>
                  Request a Demo <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-5 rounded-2xl bg-white border border-slate-200 text-slate-900 font-semibold text-lg shadow-sm hover:shadow-lg transition-all">
                  Start Free Trial
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
              <div className="relative bg-white p-5 rounded-[40px] shadow-2xl">
                <div className="flex items-center gap-3 mb-5 pl-2">
                  <div className="w-4 h-4 bg-red-400 rounded-full" />
                  <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                  <div className="w-4 h-4 bg-green-400 rounded-full" />
                </div>
                <div className="overflow-hidden rounded-[30px]">
                  <img src={data.image} alt={data.title} className="w-full h-[500px] object-cover" />
                </div>
                <div className="absolute bottom-10 right-0 translate-x-10 bg-white rounded-[28px] px-8 py-6 shadow-xl flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: theme.primary }}>
                    <data.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-semibold text-sm uppercase">CRM DATA</p>
                    <h3 className="text-3xl font-bold text-slate-900">98% Verified</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES & BENEFITS SECTION */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to manage {data.title.toLowerCase()}
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ background: theme.primary }} />
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            
            {/* CORE FEATURES */}
            <div className="space-y-8 ">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 text-center justify-center mb-8">
                <data.icon className="w-6 h-6" style={{ color: theme.primary }} /> 
                Core Features
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-3xl border border-slate-100 bg-[#fcfdfe] hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: theme.light }}>
                      <CheckCircle2 className="w-5 h-5" style={{ color: theme.primary }} />
                    </div>
                    <h4 className="font-bold text-slate-900">{feature}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* BUSINESS BENEFITS (Now White and Under Features) */}
           <div className="space-y-8 ">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 text-center justify-center mb-8">
                <data.icon className="w-6 h-6" style={{ color: theme.primary }} /> 
                Business Benefits
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-3xl border border-slate-100 bg-[#fcfdfe] hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: theme.light }}>
                      <CheckCircle2 className="w-5 h-5" style={{ color: theme.primary }} />
                    </div>
                    <h4 className="font-bold text-slate-900">
                      {benefit}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-12 text-center text-white" style={{ background: theme.primary }}>
          <h2 className="text-4xl font-bold mb-6">Ready to transform your {data.title}?</h2>
          <p className="text-white/80 text-xl mb-10">Join thousands of companies scaling with The Bot CRM solutions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:scale-105 transition-all">Get Started Now</button>
            <button className="px-10 py-4 bg-transparent border border-white/30 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-white/10">
              <PlayCircle className="w-5 h-5" /> Watch Video
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
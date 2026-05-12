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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=600",
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
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600&h=600",
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
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600&h=600",
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
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600&h=600",
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
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=600&h=600",
    features: [
      "GPS-enabled visit tracking",
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
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600&h=600",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=600",
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
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600&h=600",
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
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=600",
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
    <div className="pt-32 pb-24 italic">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          {/* Hero Section */}
          <div className="mb-20 text-center md:text-left md:flex items-center gap-12">
            <div className="flex-1">
              <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-8 mx-auto md:mx-0 shadow-lg shadow-brand/5">
                <data.icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-display leading-tight italic">
                {data.title}
              </h1>
              <h2 className="text-2xl font-bold text-brand mb-6 italic">{data.subtitle}</h2>
              <p className="text-xl text-slate-600 leading-relaxed italic mb-10">
                {data.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-4 bg-brand text-white font-bold rounded-2xl shadow-xl shadow-brand/20 hover:bg-brand-hover transition-all active:scale-95">
                  Start Free Trial
                </button>
                <div className="flex items-center justify-center gap-4 sm:ml-4">
                   <button className="p-3 bg-white border border-slate-100 rounded-full hover:bg-slate-50 transition-all text-slate-400 hover:text-brand">
                     <PlayCircle className="w-6 h-6" />
                   </button>
                   <button className="font-bold text-slate-600 hover:text-brand transition-colors">Watch Demo</button>
                </div>
              </div>
            </div>
            {/* Attractive image area */}
            <div className="hidden lg:block w-[500px] h-[400px] bg-slate-50 rounded-[4rem] border-8 border-white shadow-2xl relative overflow-hidden group">
               <img 
                 src={data.image} 
                 alt={data.title} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
               <div className="absolute bottom-10 left-10 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
                    <data.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-80">{data.title} Module</div>
               </div>
            </div>
          </div>

          {/* Features and Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 italic">
                <CheckCircle2 className="w-6 h-6 text-brand" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 italic group">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -mr-16 -mt-16" />
               <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 italic">
                 <TrendingUp className="w-6 h-6 text-emerald-500" />
                 Benefits
               </h3>
               <ul className="space-y-6">
                 {data.benefits.map((benefit, i) => (
                   <li key={i} className="flex gap-4 italic group">
                     <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:text-white" />
                     </div>
                     <span className="text-slate-700 font-medium">{benefit}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="bg-slate-900 p-12 rounded-[3rem] text-center text-white italic">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
               <MessageCircle className="w-8 h-8 text-brand" />
             </div>
             <h2 className="text-3xl font-bold mb-6 italic">Need custom workflows?</h2>
             <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto italic">
               Our team can help you customize the {data.title} module to perfectly fit your business processes.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20 active:scale-95 transition-all">Book Consultation</button>
               <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                 Talk to Sales
                 <ArrowRight className="w-5 h-5" />
               </button>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

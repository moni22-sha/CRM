import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, Menu, X, BookOpen, Rocket, ShieldCheck, Zap, TrendingUp, 
  BarChart3, Users2, Target, FileText, CreditCard, Box, CheckSquare, 
  MapPin, Users, Mail, FolderKanban, CalendarDays, Globe 
} from "lucide-react";
import { useState } from "react";
import logo from "../logo.png.png";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const productModules = [
  { id: 'lead-management',     name: 'Lead Management',     icon: Target,        bg: 'bg-orange-50',  iconColor: 'text-orange-500',  hoverBg: 'group-hover:bg-orange-100' },
  { id: 'sales-pipeline',      name: 'Sales Pipeline',      icon: TrendingUp,     bg: 'bg-blue-50',    iconColor: 'text-blue-500',    hoverBg: 'group-hover:bg-blue-100' },
  { id: 'proposal-management', name: 'Proposal Management', icon: FileText,      bg: 'bg-violet-50',  iconColor: 'text-violet-500',  hoverBg: 'group-hover:bg-violet-100' },
  { id: 'invoice-management',  name: 'Invoice Management', icon: CreditCard,     bg: 'bg-emerald-50', iconColor: 'text-emerald-500', hoverBg: 'group-hover:bg-emerald-100' },
  { id: 'inventory-management',name: 'Inventory Management', icon: Box,           bg: 'bg-amber-50',   iconColor: 'text-amber-500',   hoverBg: 'group-hover:bg-amber-100' },
  { id: 'task-assignment',     name: 'Task Assignment',    icon: CheckSquare,   bg: 'bg-pink-50',    iconColor: 'text-pink-500',    hoverBg: 'group-hover:bg-pink-100' },
  { id: 'field-tracking',      name: 'Field Tracking',     icon: MapPin,        bg: 'bg-red-50',     iconColor: 'text-red-500',     hoverBg: 'group-hover:bg-red-100' },
  { id: 'customer-management', name: 'Customer Mgmt',      icon: Users,         bg: 'bg-cyan-50',    iconColor: 'text-cyan-500',    hoverBg: 'group-hover:bg-cyan-100' },
  { id: 'reports-analytics',   name: 'Reports & Analytics',icon: BarChart3,     bg: 'bg-indigo-50',  iconColor: 'text-indigo-500',  hoverBg: 'group-hover:bg-indigo-100' },
  { id: 'email-integration',   name: 'Email Integration',  icon: Mail,          bg: 'bg-teal-50',    iconColor: 'text-teal-500',    hoverBg: 'group-hover:bg-teal-100' },
  { id: 'project-tracker',     name: 'Project Tracker',    icon: FolderKanban,  bg: 'bg-fuchsia-50', iconColor: 'text-fuchsia-500', hoverBg: 'group-hover:bg-fuchsia-100' },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLearning, setShowLearning] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showDemoPopup, setShowDemoPopup] = useState(true);

  const navTo = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    setShowLearning(false);
    setShowProducts(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <img 
              src={logo} 
              alt="The Bot HRMS Logo" 
              className="h-30 w-30" 
            />

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div
                onClick={() => navTo('home')}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 cursor-pointer transition-colors hover:underline tracking-tight"
              >
                Overview
              </div>

              {/* What is CRM? dropdown */}
              <div
                className="relative group py-8"
                onMouseEnter={() => setShowLearning(true)}
                onMouseLeave={() => setShowLearning(false)}
              >
                <div className="flex items-center gap-1 text-sm font-semibold text-slate-600 group-hover:text-blue-600 cursor-pointer transition-colors hover:underline tracking-tight">
                  What is CRM?
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showLearning ? 'rotate-180' : ''}`} />
                </div>

                <AnimatePresence>
                  {showLearning && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-10 grid grid-cols-2 gap-10"
                    >
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-6 tracking-widest">Basics</h4>
                          <div
                            onClick={() => navTo('basics')}
                            className="flex flex-col gap-2 p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-all border border-transparent hover:border-slate-100 items-center text-center"
                          >
                            <div className="p-2 w-fit bg-blue-50 rounded-lg text-blue-600">
                              <BookOpen className="w-5 h-5" />
                            </div>
                            <div className="font-bold text-sm text-slate-900">CRM Basics</div>
                            <p className="text-[11px] text-slate-500 leading-normal">How CRM helps you manage data.</p>
                          </div>
                        </div>

                        <div className="space-y-2 hover:underline tracking-tight">
                          <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Expert Hub</h4>
                          {[
                            { id: 'strategies', name: 'CRM Strategies', icon: TrendingUp },
                            { id: 'advantages', name: 'Advantages', icon: Zap },
                            { id: 'use-cases', name: 'Success Stories', icon: Users2 }
                          ].map((item) => (
                            <div
                              key={item.id}
                              onClick={() => navTo(item.id)}
                              className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-all text-sm font-semibold text-slate-600 hover:text-blue-600 text-underline"
                            >
                              <item.icon className="w-4 h-4 text-slate-300" />
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-6 tracking-widest">What is CRM?</h4>
                        <div className="space-y-4">
                          {[
                            { id: 'overview',       name: 'What is CRM?',   icon: BarChart3,   bg: 'bg-blue-50',    color: 'text-blue-600' },
                            { id: 'getting-started',name: 'Getting Started',icon: Rocket,      bg: 'bg-violet-50',  color: 'text-violet-600' },
                            { id: 'capabilities',   name: 'Capabilities',   icon: ShieldCheck, bg: 'bg-emerald-50', color: 'text-emerald-600' }
                          ].map((item) => (
                            <div
                              key={item.id}
                              onClick={() => navTo(item.id)}
                              className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-all border border-transparent hover:border-slate-100"
                            >
                              <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                                <item.icon className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-bold text-slate-700">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products dropdown */}
              <div
                className="relative group py-8"
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
              >
                <div className="flex items-center gap-1 text-sm font-semibold text-slate-600 group-hover:text-blue-600 cursor-pointer transition-colors hover:underline tracking-tight">
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showProducts ? 'rotate-180' : ''}`} />
                </div>

                <AnimatePresence>
                  {showProducts && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8"
                    >
                      <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-6 tracking-widest text-center">Core CRM Modules</h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {productModules.map((module) => (
                          <div
                            key={module.id}
                            onClick={() => navTo(module.id)}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-all group"
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${module.bg} ${module.hoverBg} transition-colors flex-shrink-0`}>
                              <module.icon className={`w-4 h-4 ${module.iconColor}`} />
                            </div>
                            <span className="text-[12px] font-bold text-slate-600 group-hover:text-slate-900 leading-tight">{module.name}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => onNavigate('features')} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors hover:underline tracking-tight">Features</button>
              <a href="#blog"     className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors hover:underline tracking-tight">Blog</a>
              <a href="#pricing"  className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors hover:underline tracking-tight">Pricing</a>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={() => window.location.href = 'https://www.thebotcrm.com/login'}
                className="px-6 py-2.5 text-sm font-semibold text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => onNavigate('calendly')}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95"
              >
                Book Demo
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 px-6 py-8 flex flex-col gap-6 shadow-2xl overflow-hidden"
            >
              <div className="space-y-4">
                <button onClick={() => navTo('home')} className="w-full text-left py-2 font-bold text-slate-900 text-lg border-b border-slate-50">Overview</button>

                <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-4">What is CRM?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => navTo('basics')}     className="text-left py-2 font-bold text-slate-900">CRM Basics</button>
                  <button onClick={() => navTo('overview')}   className="text-left py-2 font-bold text-slate-900">What is CRM?</button>
                  <button onClick={() => navTo('strategies')} className="text-left py-2 font-bold text-slate-900 text-xs">Strategies</button>
                  <button onClick={() => navTo('advantages')} className="text-left py-2 font-bold text-slate-900 text-xs">Advantages</button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Products</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 max-h-[300px] overflow-y-auto pr-2">
                  {productModules.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => navTo(m.id)}
                      className="flex items-center gap-2 text-left text-xs font-bold text-slate-600 bg-slate-50 p-2 rounded-xl"
                    >
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center ${m.bg} flex-shrink-0`}>
                        <m.icon className={`w-3.5 h-3.5 ${m.iconColor}`} />
                      </div>
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full" />

              <div className="flex flex-col gap-4">
                <a href="#features" className="text-lg font-medium text-slate-900">Features</a>
                <a href="#blog"     className="text-lg font-medium text-slate-900">Blog</a>
                <a href="#pricing"  className="text-lg font-medium text-slate-900">Pricing</a>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button className="w-full py-3 text-blue-600 font-semibold border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors">Login</button>
                <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-colors">Book Demo</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Floating Dashboard Metrics */}
     
        
      {/* Actionable Booking CTA Modal Card */}
   <AnimatePresence>
  {showDemoPopup && (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-white w-[280px] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100 p-4 font-sans"
    >
      {/* Header section */}
      <div className="flex justify-between items-start mb-0.5">
        <h3 className="text-base font-extrabold text-[#0B1A30] tracking-tight leading-snug">
          See Bot CRM in Action
        </h3>
        <button 
          onClick={() => setShowDemoPopup(false)}
          className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-50 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      
      <p className="text-[11px] text-slate-500 font-normal mb-3">
        Get a personalized demo in 20 minutes
      </p>

      {/* CRM Discussion Illustration Area */}
      <div className="w-full flex justify-center items-center py-1.5 mb-4 bg-slate-50/50 rounded-xl">
        <svg className="w-32 h-24" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desk/Table */}
          <path d="M30 100H170V103H30V100Z" fill="#E2E8F0"/>
          <path d="M45 103L40 138H44L49 103H45Z" fill="#CBD5E1"/>
          <path d="M155 103L160 138H156L151 103H155Z" fill="#CBD5E1"/>
          
          {/* Left Figure (Girl presenting/explaining) */}
          {/* Chair back */}
          <path d="M36 78L26 78L24 110L34 110Z" fill="#CBD5E1" opacity="0.5" />
          {/* Body & Clothes */}
          <path d="M56 76C56 70 46 68 46 76V100H56V76Z" fill="#0E9F6E"/> {/* Teal/Green Outfit */}
          <circle cx="51" cy="61" r="6" fill="#FDBA74"/> {/* Skin tone */}
          {/* Hair */}
          <path d="M44 58C44 52 56 52 57 57C58 62 55 66 53 66C51 66 44 64 44 58Z" fill="#475569"/>
          {/* Arm pointing to laptop */}
          <path d="M52 78L68 84L71 80L54 74V78Z" fill="#0E9F6E"/>
          
          {/* Laptop showing CRM Analytics Data */}
          <path d="M82 100H118L114 74H86L82 100Z" fill="#475569"/>
          <rect x="88" y="77" width="24" height="16" rx="1" fill="#FFFFFF"/>
          {/* CRM UI Elements inside screen (Bars and Lines) */}
          <rect x="91" y="80" width="5" height="10" fill="#3B82F6"/> {/* Bar Chart 1 */}
          <rect x="98" y="83" width="5" height="7" fill="#10B981"/>  {/* Bar Chart 2 */}
          <rect x="105" y="85" width="5" height="5" fill="#F59E0B"/>  {/* Bar Chart 3 */}
          <path d="M91 92.5H109" stroke="#E2E8F0" strokeWidth="1"/>
          
          {/* Right Figure (Boy reviewing/listening) */}
          {/* Chair back */}
          <path d="M164 78L174 78L176 110L166 110Z" fill="#CBD5E1" opacity="0.5" />
          {/* Body & Clothes */}
          <path d="M144 76C144 70 154 68 154 76V100H144V76Z" fill="#3B82F6"/> {/* Blue Shirt */}
          <circle cx="149" cy="61" r="6" fill="#FED7AA"/> {/* Skin tone */}
          {/* Hair */}
          <path d="M143 59C143 54 153 53 154 57C155 60 153 63 148 63C145 63 143 61 143 59Z" fill="#78350F"/>
          {/* Arm resting on desk */}
          <path d="M146 78L132 86L134 90L148 82V78Z" fill="#3B82F6"/>

          {/* Plant on Desk */}
          <rect x="122" y="92" width="5" height="8" rx="1" fill="#D1D5DB"/>
          <circle cx="123.5" cy="90" r="3" fill="#10B981"/>
          <circle cx="125.5" cy="89" r="2.5" fill="#059669"/>
        </svg>
      </div>

      {/* Action CTA Button */}
      <button 
        onClick={() => onNavigate('calendly')}
        className="w-full bg-[#1A56DB] text-white font-bold py-2.5 px-3 rounded-lg hover:bg-blue-700 transition-all active:scale-[0.99] shadow-md shadow-blue-600/10 mb-3 text-xs tracking-wide"
      >
        Book Demo
      </button>

      {/* Trust metrics footer strip */}
      <div className="flex items-center justify-center gap-3 text-[9px] font-bold text-slate-400 tracking-wider uppercase border-t border-slate-100 pt-2.5">
        <div className="flex items-center gap-1">
          <Globe className="w-3 h-3 text-slate-300" />
          <span>20+ Company</span>
        </div>
        <div className="flex items-center gap-1">
          <Users2 className="w-3 h-3 text-slate-300" />
          <span>1000+ Users</span>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
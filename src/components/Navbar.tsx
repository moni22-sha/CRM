import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, BookOpen, Rocket, ShieldCheck, Zap, TrendingUp, BarChart3, Users2, Target, FileText, CreditCard, Box, CheckSquare, MapPin, Users, Mail, FolderKanban } from "lucide-react";
import { useState } from "react";
import logo from "../logo.png.png";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const productModules = [
  { id: 'lead-management',     name: 'Lead Management',    icon: Target,        bg: 'bg-orange-50',  iconColor: 'text-orange-500',  hoverBg: 'group-hover:bg-orange-100' },
  { id: 'sales-pipeline',      name: 'Sales Pipeline',     icon: TrendingUp,    bg: 'bg-blue-50',    iconColor: 'text-blue-500',    hoverBg: 'group-hover:bg-blue-100' },
  { id: 'proposal-management', name: 'Proposal Mgmt',      icon: FileText,      bg: 'bg-violet-50',  iconColor: 'text-violet-500',  hoverBg: 'group-hover:bg-violet-100' },
  { id: 'invoice-management',  name: 'Invoice Mgmt',       icon: CreditCard,    bg: 'bg-emerald-50', iconColor: 'text-emerald-500', hoverBg: 'group-hover:bg-emerald-100' },
  { id: 'inventory-management',name: 'Inventory Mgmt',     icon: Box,           bg: 'bg-amber-50',   iconColor: 'text-amber-500',   hoverBg: 'group-hover:bg-amber-100' },
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

  const navTo = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    setShowLearning(false);
    setShowProducts(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
    <img 
  src={logo} 
  alt="The Bot CRM Logo" 
  className="h-30 w-30" 
/>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div
              onClick={() => navTo('home')}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 cursor-pointer transition-colors"
            >
              Overview
            </div>

            {/* What is CRM? dropdown */}
            <div
              className="relative group py-8"
              onMouseEnter={() => setShowLearning(true)}
              onMouseLeave={() => setShowLearning(false)}
            >
              <div className="flex items-center gap-1 text-sm font-semibold text-slate-600 group-hover:text-blue-600 cursor-pointer transition-colors">
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

                      <div className="space-y-2">
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
              <div className="flex items-center gap-1 text-sm font-semibold text-slate-600 group-hover:text-blue-600 cursor-pointer transition-colors">
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

            <button onClick={() => onNavigate('features')}>Features</button>
            <a href="#blog"     className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Blog</a>
            <a href="#pricing"  className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-6 py-2.5 text-sm font-semibold text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-colors">
              Login
            </button>
            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95">
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
              <a href="#features" className="text-lg font-medium text-slate-900  bg-blue-600/20">Features</a>
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
  );
}
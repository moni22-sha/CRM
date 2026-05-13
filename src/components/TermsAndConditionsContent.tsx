import { motion } from "motion/react";
import { Shield, BookOpen, UserCheck, CreditCard, AlertCircle, Scale, Globe, Mail } from "lucide-react";

export default function TermsAndConditionsContent() {
  const sections = [
    {
      title: "Intellectual Property",
      icon: Shield,
      content: "All content, materials, and resources available on https://thebot.agency, including but not limited to text, graphics, logos, images, videos, audio, and downloadable files, are the intellectual property of The Bot Agency or its content providers. You agree not to reproduce, distribute, modify, or create derivative works from any of the website's content without prior written consent from the respective owners."
    },
    {
      title: "User Account",
      icon: UserCheck,
      content: "In order to access certain features of our website, you may need to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and up-to-date information during the registration process and to promptly update any changes to your account information."
    },
    {
      title: "Purchases and Payments",
      icon: CreditCard,
      content: "Online Courses and Webinars: By purchasing an online course or webinar on our website, you gain access to the specified digital content for your personal, non-commercial use. All purchases are subject to the specified fees, which you agree to pay in full."
    },
    {
      title: "Prohibited Conduct",
      icon: AlertCircle,
      content: "While using our website, you agree not to: \n• Violate any applicable laws, regulations, or third-party rights. \n• Engage in any fraudulent, deceptive, or misleading activities. \n• Interfere with the proper functioning of the website or its services. \n• Upload, transmit, or distribute any malicious software, viruses, or harmful content. \n• Attempt to gain unauthorized access to any part of the website or other users' accounts."
    },
    {
      title: "Limitation of Liability",
      icon: Scale,
      content: "To the extent permitted by law, The Bot Agency and its affiliates, directors, employees, or agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the website or the purchase of products and services through the website."
    },
    {
      title: "Modification of Terms",
      icon: BookOpen,
      content: "TheBot Agency reserves the right to modify or update these Terms of Use at any time without prior notice. Any changes made will be effective immediately upon posting the revised terms on our website. It is your responsibility to review these terms periodically for any updates."
    },
    {
      title: "Governing Law and Jurisdiction",
      icon: Globe,
      content: "These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in India."
    }
  ];

  return (
    <div className="pt-32 pb-24 italic">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Terms And <span className="text-brand">Conditions</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Welcome to TheBot Agency CRM! These terms outline the rules governing your use of our platform and services.
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand/10 rounded-xl text-brand">
                  <section.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
              </div>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line italic">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-white text-center"
        >
          <Mail className="w-12 h-12 text-brand mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 italic">Have Questions?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto italic">
            If you have any questions or concerns regarding these Terms of Use, please contact us using the provided contact information.
          </p>
          <button className="px-8 py-4 bg-brand text-white font-bold rounded-2xl hover:bg-[#0096ce] transition-colors italic">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}

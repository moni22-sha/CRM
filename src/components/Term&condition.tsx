import React from 'react';
import { Mail }  from "lucide-react";


export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
        
        {/* Header Section */}
        <div className="bg-[#1a36b3] p-10 text-white text-center">
          <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
          <p className="opacity-90">Effective Date: May 13, 2026</p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 text-slate-700 leading-relaxed space-y-8">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Welcome to TheBot Agency CRM!</h2>
            <p>
              These terms of use outline the terms and conditions governing your use of our website 
              and the purchase of online courses and webinars offered on the platform. By accessing 
              or using our website and making a purchase, you agree to comply with these terms. 
              Please read them carefully.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Intellectual Property</h3>
            <p>
              All content, materials, and resources available on https://thebot.agency, including 
              but not limited to text, graphics, logos, and images, are the intellectual property of 
              The Bot Agency. You agree not to reproduce, distribute, or create derivative 
              works without prior written consent.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-2">User Account</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. 
              You agree to provide accurate and up-to-date information during the 
              registration process.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Prohibited Conduct</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Violate any applicable laws, regulations, or third-party rights.</li>
              <li>Engage in any fraudulent, deceptive, or misleading activities.</li>
              <li>Interfere with the proper functioning of the website or its services.</li>
              <li>Upload, transmit, or distribute any malicious software or viruses.</li>
            </ul>
          </section>

          <section className="bg-slate-100 p-6 rounded-xl border-l-4 border-[#1a36b3]">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Governing Law</h3>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws 
              of India. Any disputes shall be subject to the exclusive jurisdiction of 
              the courts located in India.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
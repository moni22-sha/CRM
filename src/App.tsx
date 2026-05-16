/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import FeatureCards from "./components/Cards";
import FAQ from "./components/FAQ";
import { FeaturedCTA, FinalCTA, Footer } from "./components/CTASection";

// Content Pages
import HomeContent from "./components/HomeContent";
import CRMBasicsContent from "./components/CRMBasicsContent";
import CRMOverviewContent from "./components/CRMOverviewContent";
import GettingStartedContent from "./components/GettingStartedContent";
import CRMCapabilitiesContent from "./components/CRMCapabilitiesContent";
import CRMStrategiesContent from "./components/CRMStrategiesContent";
import CRMAdvantagesContent from "./components/CRMAdvantagesContent";
import CRMUseCasesContent from "./components/CRMUseCasesContent";
import TermsAndConditionsContent from "./components/TermsAndConditionsContent";
import CRMModulePage, { ModuleId, modulesData } from "./components/CRMModulePage";
import TermsAndConditions from "./components/Term&condition";
import policy from "./components/policy";
import Policy from "./components/policy";
import Features from "./components/Features";
import BookDemo from "./components/calendly"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    // Check if current page is one of the CRM Core Modules
    if (Object.keys(modulesData).includes(currentPage)) {
      return <CRMModulePage moduleId={currentPage as ModuleId} />;
    }

    switch (currentPage) {
      case "basics":
        return <CRMBasicsContent />;
      case "overview":
        return <CRMOverviewContent />;
      case "getting-started":
        return <GettingStartedContent />;
      case "capabilities":
        return <CRMCapabilitiesContent />;
      case "strategies":
        return <CRMStrategiesContent />;
      case "advantages":
        return <CRMAdvantagesContent />;
      case "use-cases":
        return <CRMUseCasesContent />;
        case "features":
          return <Features />;
      case "terms":
        return <TermsAndConditionsContent />;
        case "privacy":
          return <Policy />
          case "calendly":
            return <BookDemo />;
      case "home":
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      
    </div>
  );
}

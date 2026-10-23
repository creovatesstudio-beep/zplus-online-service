import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { AssociatePro } from "./components/AssociatePro";
import { Partners } from "./components/Partners";
import { ContactSection } from "./components/ContactSection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { LegalModal, LegalDocType } from "./components/LegalModal";
import { BrochureModal } from "./components/BrochureModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("solar-energy");
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  return (
    <div className="min-h-screen bg-brand-lightBg flex flex-col font-sans selection:bg-brand-gold selection:text-brand-navyDark">
      {/* Navigation Header */}
      <Navbar onOpenBrochure={() => setIsBrochureOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onSelectService={handleSelectService} />
        <About onOpenBrochure={() => setIsBrochureOpen(true)} />
        <Services onSelectService={handleSelectService} />
        <HowItWorks />
        <AssociatePro />
        <Partners />
        <FAQ />
        <ContactSection
          selectedServiceId={selectedServiceId}
          onServiceSelect={setSelectedServiceId}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        onSelectService={handleSelectService}
        onOpenLegal={setLegalModalType}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Modals & Floating Tools */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <FloatingWhatsApp />
    </div>
  );
}

export default App;

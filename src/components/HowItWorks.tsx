import React, { useState } from "react";
import {
  Search,
  Send,
  Headphones,
  CheckCircle2,
  BookOpen,
  MessageCircle,
  Share2,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"customers" | "associates">("customers");

  const customerSteps = [
    {
      number: "01",
      icon: Search,
      title: "Choose a Service",
      desc: "Browse our 7 core service categories including solar energy, real estate, university admissions, travel, software, finance, and career consulting.",
    },
    {
      number: "02",
      icon: Send,
      title: "Submit an Enquiry",
      desc: "Submit your requirement through our streamlined website form or initiate a direct chat via our verified official WhatsApp desk (+91 9430195414).",
    },
    {
      number: "03",
      icon: Headphones,
      title: "Connect with the Team",
      desc: "Our sector specialists connect with you for an in-depth consultation, answering questions and providing transparent quotes and timelines.",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Proceed with the Service",
      desc: "Experience verified fulfillment with accredited partners, structured milestone updates, and full customer lifecycle coordination.",
    },
  ];

  const associateSteps = [
    {
      number: "01",
      icon: BookOpen,
      title: "Learn About Associate Pro",
      desc: "Discover how the ₹300/month program enables professionals, students, and agents to monetize their network through ethical service referrals.",
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "Contact Team to Enquire",
      desc: "Connect directly with our onboarding team via WhatsApp to review program guidelines, sector commission terms, and associate code issuance.",
    },
    {
      number: "03",
      icon: Share2,
      title: "Refer Eligible Customers",
      desc: "Introduce verified clients or personal network contacts seeking solar installations, property purchases, university admissions, or business software.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Earn Commission",
      desc: "Receive structured referral commissions according to applicable service category terms upon successful completion of qualifying transactions.",
    },
  ];

  const currentSteps = activeTab === "customers" ? customerSteps : associateSteps;

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-3">
            <span>Transparent Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            How Zplusonlineservice Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto">
            Clear, predictable, and hassle-free paths for service seekers and aspiring business associates alike.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-royal mx-auto mt-4 rounded-full" />
        </div>

        {/* Journey Toggle Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab("customers")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "customers"
                  ? "bg-brand-navy text-white shadow-md shadow-brand-navy/20"
                  : "text-slate-600 hover:text-brand-navy"
              }`}
            >
              <Search className="w-4 h-4" />
              <span>For Customers</span>
            </button>
            <button
              onClick={() => setActiveTab("associates")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === "associates"
                  ? "bg-brand-royal text-white shadow-md shadow-brand-royal/20"
                  : "text-slate-600 hover:text-brand-navy"
              }`}
            >
              <TrendingUp className="w-4 h-4 text-brand-gold" />
              <span>For Associates (₹300/mo)</span>
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-brand-lightBg/80 rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-slate-300 group-hover:text-brand-gold transition-colors font-heading">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-brand-navy flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-brand-gold/50 transition-all duration-300">
                    <Icon className="w-5 h-5 text-brand-royal" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2.5 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom line connector indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-brand-navy group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Contextual Bottom Callout */}
        <div className="mt-12 text-center">
          {activeTab === "customers" ? (
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200/80 text-xs text-slate-700">
              <span className="font-semibold text-brand-navy">
                Looking for a quick quotation?
              </span>
              <span>Submit your requirement directly or talk to our specialist team.</span>
              <a
                href="#contact"
                className="font-bold text-brand-royal hover:underline inline-flex items-center gap-1"
              >
                <span>Go to Contact Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950">
              <span className="font-bold">
                Ready to explore the Associate Pro model?
              </span>
              <span>Membership is ₹300 per month with transparent written service terms.</span>
              <a
                href="#associate-pro"
                className="font-bold text-amber-800 hover:underline inline-flex items-center gap-1"
              >
                <span>Read Associate Pro Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

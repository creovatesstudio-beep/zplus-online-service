import React, { useState } from "react";
import {
  Handshake,
  Mail,
  Copy,
  Check,
  Building,
  GraduationCap,
  Sun,
  ShieldCheck,
  FileText,
  ArrowUpRight
} from "lucide-react";

export const Partners: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "zplusonlineservice@gmail.com";
  const subjectLine = "[PROPOSAL] Service Offer";
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subjectLine
  )}&body=${encodeURIComponent(
    "Dear Zplusonlineservice Team,\n\nWe would like to submit a business collaboration proposal for your platform.\n\nOrganization / Business Name:\nService Vertical / Sector:\nContact Person & Phone:\nBrief Description of Offering:\n\nLooking forward to your response.\n\nBest regards,"
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const partnerCategories = [
    {
      title: "Solar EPC Contractors & Engineers",
      icon: Sun,
      desc: "Licensed solar installers, inverter distributors, and renewable energy technicians for regional execution.",
    },
    {
      title: "Colleges & Educational Institutions",
      icon: GraduationCap,
      desc: "UGC/AICTE recognized universities, online degree providers, and distance learning institutes seeking Pan-India enrollment.",
    },
    {
      title: "Real Estate Developers & Landowners",
      icon: Building,
      desc: "Verified residential and commercial property developers wanting direct exposure to qualified buyers and associate brokers.",
    },
    {
      title: "Financial Institutions & DSAs",
      icon: ShieldCheck,
      desc: "Direct selling agents, banking partners, and lending firms looking for qualified loan and credit inquiries.",
    },
  ];

  return (
    <section id="partners" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-navy text-xs font-semibold mb-3">
            <Handshake className="w-3.5 h-3.5 text-brand-royal" />
            <span>B2B Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            Partners & Vendors
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto">
            Scale your service business with Zplusonlineservice. Join our nationwide network of verified service providers and trusted vendors.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-royal mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          {/* Left Column: Why Partner */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-navy font-heading">
                Expand Your Reach Through Our Network
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are a solar installation company seeking rooftop clients,
                an accredited university wanting higher admissions visibility, or a
                property developer launching prime land projects, partnering with
                Zplusonlineservice gives you direct access to genuine customer inquiries
                and an active associate network.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We value quality, transparency, and sustainable business relationships.
                All partnerships, commission structures, service level agreements (SLAs),
                and lead handling protocols are formalized through mutually agreed
                written contracts.
              </p>
            </div>

            {/* Terms Clarification Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-brand-navy">
                <FileText className="w-4 h-4 text-brand-royal" />
                <span>Transparent Written Agreements</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                Commission arrangements, service warranties, and payment disbursement
                schedules depend strictly on mutually agreed written terms signed between
                Zplusonlineservice (A unit of KD India) and the collaborating partner.
              </p>
            </div>
          </div>

          {/* Right Column: Submission Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-brand-navy to-brand-navyDark text-white shadow-xl border border-brand-gold/30 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold border border-brand-gold/30">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Proposal Submission Desk</span>
                </div>
                <span className="text-[11px] text-slate-400">Response within 24-48 hrs</span>
              </div>

              <h4 className="text-xl font-bold font-heading mb-2 text-white">
                Submit Your Service Collaboration Proposal
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Send your service catalog, corporate credentials, or partnership inquiry
                directly to our executive vendor desk using the dedicated proposal format.
              </p>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Official Proposal Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] text-brand-gold hover:underline"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-sm sm:text-base text-brand-gold font-bold break-all">
                  {emailAddress}
                </div>
                <div className="text-[11px] text-slate-400">
                  Required Subject Line:{" "}
                  <code className="text-amber-300 bg-slate-800 px-1.5 py-0.5 rounded">
                    {subjectLine}
                  </code>
                </div>
              </div>

              {/* Mailto CTA Button */}
              <a
                href={mailtoLink}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold via-yellow-400 to-amber-500 hover:from-yellow-400 hover:to-brand-gold text-brand-navyDark font-extrabold text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] transition-all"
              >
                <span>Draft Proposal Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Partner Verticals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
          {partnerCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-royal/40 hover:bg-white transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-royal/10 text-brand-royal flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-brand-navy mb-1.5">
                  {cat.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

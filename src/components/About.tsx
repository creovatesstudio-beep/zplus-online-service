import React from "react";
import {
  Layers,
  Users2,
  CheckCircle,
  FileCheck2,
  Building,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface AboutProps {
  onOpenBrochure?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBrochure }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-royal text-xs font-semibold mb-3">
            <Building className="w-3.5 h-3.5 text-brand-royal" />
            <span>Corporate Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-heading">
            About Zplusonlineservice
          </h2>
          <p className="text-sm font-semibold text-brand-goldDark uppercase tracking-wider mt-1">
            A unit of KD India • Empowering Services, Enabling Earnings.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-royal mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Conceptual Framework */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p className="text-slate-800 font-medium text-lg leading-snug">
              Zplusonlineservice operates as an Indian multi-service business
              platform and referral-based associate membership network, dedicated
              to bridging the gap between consumers and essential corporate
              services.
            </p>

            <p>
              By functioning as a centralized service coordination hub,
              Zplusonlineservice simplifies access to seven vital sectors:{" "}
              <strong className="text-brand-navy">
                Solar Energy Installation, Real Estate Advisory, Online & Regular
                University Admissions, Holiday Tours, Custom Software Engineering,
                Financial Solutions, and Job Placement Consultancy
              </strong>
              . Customers receive dedicated assistance, transparent quotations,
              and reliable execution without dealing with fragmented intermediaries.
            </p>

            <p>
              In parallel, our platform champions micro-entrepreneurship through
              the <strong className="text-brand-royal">Associate Pro</strong>{" "}
              program. We empower motivated professionals, homemakers, agents,
              and community leaders to introduce genuine customer requirements
              to our vetted service network. In return, associates earn referral
              commissions based strictly on completed, qualifying transactions
              under clear, written service guidelines.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800">
                <FileCheck2 className="w-4 h-4 text-emerald-600" />
                <span>MSME Registered Enterprise</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800">
                <Sparkles className="w-4 h-4 text-brand-goldDark" />
                <span>A Unit of KD India</span>
              </div>
              {onOpenBrochure && (
                <button
                  onClick={onOpenBrochure}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-royal hover:text-brand-navy underline cursor-pointer"
                >
                  <span>View Official Leaflet</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Visual Value Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-1.5">
                Multi-Sector Service Aggregation
              </h3>
              <p className="text-xs text-slate-600 leading-normal">
                Curating qualified service execution across renewable power,
                property transactions, higher education, travel, software,
                and banking under a single trustworthy banner.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/50 to-orange-50/30 border border-amber-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-3">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-1.5">
                Ethical Referral Associateship
              </h3>
              <p className="text-xs text-slate-600 leading-normal">
                Enabling aspiring associates to participate in structured
                referral income without unrealistic promises, backed by
                tangible service fulfillment.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Corporate Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-200">
          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-brand-royal font-bold text-sm mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Reliable Fulfillment</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every customer requirement is matched with vetted domain
              professionals and verified partners for seamless completion.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-brand-royal font-bold text-sm mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Transparent Operations</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clear terms for both customers and associates with zero hidden
              costs or obscured qualification terms.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-brand-royal font-bold text-sm mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>PAN India Collaboration</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Facilitating university admissions, solar setups, and real estate
              opportunities across prominent regional centers in India.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-brand-royal font-bold text-sm mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Dedicated Coordination</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct access to human coordinators via verified WhatsApp and
              corporate email desks for swift query resolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
